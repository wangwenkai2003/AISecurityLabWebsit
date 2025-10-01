// update_publications.js (已更新)
const fs = require('fs').promises;
const path = require('path');

const publicationsDir = path.join(__dirname, 'publications');
const publicationsJsonPath = path.join(__dirname, 'publications.json');

async function updatePublications() {
    console.log('🚀 Starting to scan publications directory...');
    let existingPublications = [];
    try {
        const rawData = await fs.readFile(publicationsJsonPath, 'utf8');
        existingPublications = JSON.parse(rawData);
    } catch (error) {
        console.log('📋 No existing publications.json found. A new one will be created.');
    }

    const existingPaths = new Set(existingPublications.map(p => p.pdf));
    const newPublications = [];

    try {
        const yearDirs = await fs.readdir(publicationsDir);

        for (const year of yearDirs) {
            const yearPath = path.join(publicationsDir, year);
            const stats = await fs.stat(yearPath);

            if (stats.isDirectory()) {
                const files = await fs.readdir(yearPath);
                for (const file of files) {
                    if (path.extname(file).toLowerCase() === '.pdf') {
                        const relativePath = `${year}/${file}`;
                        
                        if (!existingPaths.has(relativePath)) {
                            const titlePlaceholder = path.basename(file, '.pdf').replace(/_/g, ' ');
                            console.log(`  ➕ Found new file: ${relativePath}`);
                            newPublications.push({
                                pdf: relativePath, // 本地文件路径，作为唯一标识
                                year: parseInt(year, 10),
                                pdf_link: "", // 新增：PDF 链接字段，默认为空
                                title_zh: titlePlaceholder,
                                title_en: titlePlaceholder,
                                authors_zh: "作者...",
                                authors_en: "Authors...",
                                venue_zh: "会议/期刊...",
                                venue_en: "Venue...",
                                code: null
                            });
                        }
                    }
                }
            }
        }
        
        let allPublications = [...existingPublications, ...newPublications];

        allPublications.sort((a, b) => {
            if (b.year !== a.year) { return b.year - a.year; }
            return a.pdf.localeCompare(b.pdf);
        });

        allPublications.forEach((pub, index) => {
            pub.id = `p${index + 1}`;
        });

        await fs.writeFile(publicationsJsonPath, JSON.stringify(allPublications, null, 2));

        if (newPublications.length > 0) {
            console.log(`\n✅ Successfully updated ${publicationsJsonPath}. Found ${newPublications.length} new entries.`);
            console.log('🔔 Please open publications.json and fill in the "pdf_link" and other details for the new entries.');
        } else {
            console.log(`\n✅ ${publicationsJsonPath} is already up-to-date. No new files found.`);
        }

    } catch (error) {
        console.error('❌ An error occurred:', error);
    }
}

updatePublications();