// script.js (最终整合版)

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            // -- Global Titles & Navigation --
            home_title: "AI Security Lab - Home",
            team_title: "Team - AI Security Lab",
            publications_title: "Publications - AI Security Lab",
            projects_title: "Projects - AI Security Lab",
            contact_title: "Contact - AI Security Lab",
            
            nav_home: "Home",
            nav_team: "Team",
            nav_publications: "Publications",
            nav_projects: "Projects",
            nav_contact: "Contact Us",
            
            // -- Hero Section --
            hero_center_name: "AI Security and Governance Lab", // 更新后的英文翻译
            hero_slogan: "Exploring the forefront of AI security, ensuring every AI serves human well-being with verifiable safety and accountable governance.", // 更新后的英文翻译
            
            // -- Home Page Sections --
            home_news_title: "Latest News",
            home_contact_title: "Contact Us",

            // -- Team Page --
            team_advisors_title: "Advisors",
            team_phd_students_title: "PhD Students",

            // Advisors
            team_zhouwei_name: "Wei Zhou",
            team_zhouwei_title: "Professor, PhD Supervisor",
            team_zhouwei_research: "Artificial Intelligence Security, Bioinformatics",
            team_wusixing_name: "Sixing Wu",
            team_wusixing_title: "Lecturer, Master's Supervisor",
            team_wusixing_research: "Natural Language Processing, Large Language Models",
            team_dongyunyun_name: "Yunyun Dong",
            team_dongyunyun_title: "Lecturer, Master's Supervisor",
            team_dongyunyun_research: "Large Model Watermarking, Image Steganography",
            team_gaosong_name: "Song Gao",
            team_gaosong_title: "Lecturer, Master's Supervisor",
            team_gaosong_research: "Adversarial Attacks, Adversarial Defense",
            team_songbingbing_name: "Bingbing Song",
            team_songbingbing_title: "Lecturer, Master's Supervisor",
            team_songbingbing_research: "Large Model Safety Alignment",
            team_tangli_name: "Li Tang",
            team_tangli_title: "Lecturer, Master's Supervisor",
            team_tangli_research: "Data Security, Image Security",
            
            // PhD Students
            team_zhangjinhong_name: "Jinhong Zhang",
            team_zhangjinhong_title: "PhD Student",
            team_zhangjinhong_research: "Privacy Protection, Image Steganography, Model Stealing",
            team_lifanxiao_name: "Fanxiao Li",
            team_lifanxiao_title: "PhD Student",
            team_lifanxiao_research: "Disinformation Detection, Trustworthy Large Models",
            team_futingchao_name: "Tingchao Fu",
            team_futingchao_title: "PhD Student",
            team_futingchao_research: "Knowledge Editing for Large Models, Trustworthy Large Models",
            team_zhanghuadong_name: "Huadong Zhang",
            team_zhanghuadong_title: "PhD Student",
            team_zhanghuadong_research: "Bioinformatics",
            
            // -- Publications Page --
            publications_page_title: "Publications",
            pub_pdf: "PDF",
            pub_code: "Code",
            filter_by_year: "Filter by year:",
            filter_all_years: "All Years",
            sort_by: "Sort by:",
            sort_newest: "Newest First",
            sort_oldest: "Oldest First",
            
            // -- Projects Page --
            projects_page_title: "Our Projects",
            project_learn_more: "Learn More",

            // -- Contact Page --
            contact_page_title: "Contact Us",
            contact_hiring: "We are actively hiring tenure-track faculty, postdocs, PhDs, and master's students. If you are interested in joining AISG, please send your CV to <a href='mailto:zwei@ynu.edu.cn'>zwei@ynu.edu.cn</a>.",
            contact_address: "<strong>Address:</strong> School of Software 1323, 1223, Electron Microscopy Center 3403, Yunnan University (Chenggong Campus)",
        },
        zh: {
            // -- Global Titles & Navigation --
            home_title: "AI Security Lab - 首页",
            team_title: "团队成员 - AI Security Lab",
            publications_title: "研究动态 - AI Security Lab",
            projects_title: "转化项目 - AI Security Lab",
            contact_title: "联系我们 - AI Security Lab",
            
            nav_home: "首页",
            nav_team: "团队成员",
            nav_publications: "研究动态",
            nav_projects: "转化项目",
            nav_contact: "联系我们",
            
            // -- Hero Section --
            hero_center_name: "人工智能安全与治理实验室",
            hero_slogan: "探索人工智能安全的前沿领域，让每一项人工智能以可验证的安全与可问责的治理服务人类福祉",

            // -- Home Page Sections --
            home_news_title: "最新动态",
            home_contact_title: "联系我们",
            
            // -- Team Page --
            team_advisors_title: "导师",
            team_phd_students_title: "博士生",

            // Advisors
            team_zhouwei_name: "周维", "team_zhouwei_title": "教授、博士生导师", "team_zhouwei_research": "人工智能安全、生物信息",
            team_wusixing_name: "巫思杏", "team_wusixing_title": "讲师、硕士生导师", "team_wusixing_research": "自然语言处理、大语言模型",
            team_dongyunyun_name: "董云云", "team_dongyunyun_title": "讲师、硕士生导师", "team_dongyunyun_research": "大模型水印、图像隐写",
            team_gaosong_name: "高嵩", "team_gaosong_title": "讲师、硕士生导师", "team_gaosong_research": "对抗攻击、对抗防御",
            team_songbingbing_name: "宋冰冰", "team_songbingbing_title": "讲师、硕士生导师", "team_songbingbing_research": "大模型安全对齐",
            team_tangli_name: "唐丽", "team_tangli_title": "讲师、硕士生导师", "team_tangli_research": "数据安全、图像安全",
            
            // PhD Students
            team_zhangjinhong_name: "张锦弘", "team_zhangjinhong_title": "博士", "team_zhangjinhong_research": "隐私保护、图像隐写、模型窃取",
            team_lifanxiao_name: "李钒效", "team_lifanxiao_title": "博士", "team_lifanxiao_research": "虚假信息检测、可信大模型",
            team_futingchao_name: "付廷超", "team_futingchao_title": "博士", "team_futingchao_research": "大模型知识编辑、可信大模型",
            team_zhanghuadong_name: "张华栋", "team_zhanghuadong_title": "博士", "team_zhanghuadong_research": "生物信息",
            
            // -- Publications Page --
            publications_page_title: "研究动态",
            pub_pdf: "PDF",
            pub_code: "代码",
            filter_by_year: "按年份筛选:",
            filter_all_years: "所有年份",
            sort_by: "排序:",
            sort_newest: "最新优先",
            sort_oldest: "最早优先",
            
            // -- Projects Page --
            projects_page_title: "转化项目",
            project_learn_more: "了解更多",
            
            // -- Contact Page --
            contact_page_title: "联系我们",
            contact_hiring: "我们正在积极招聘终身教职人员、博士后、博士及硕士研究生。如有意加入 AISG，请将简历发送至 <a href='mailto:zwei@ynu.edu.cn'>zwei@ynu.edu.cn</a>。",
            contact_address: "<strong>地址：</strong>云南大学（呈贡）软件学院1323、软件学院1223、电镜中心3403",
        }
    };

    const languageSelector = document.getElementById('language-selector');
    let currentLanguage = localStorage.getItem('language') || 'zh';
    
    let allPublicationsData = [];
    let allProjectsData = [];

    const renderPublications = (data, containerId, limit = null, filterYear = 'all', sortBy = 'newest') => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let processedData = [...data];
        if (sortBy === 'oldest') { processedData.reverse(); }
        if (filterYear !== 'all') { processedData = processedData.filter(item => item.year.toString() === filterYear); }
        const itemsToRender = limit ? processedData.slice(0, limit) : processedData;

        let html = '';
        itemsToRender.forEach(item => {
            const title = (currentLanguage === 'zh' ? item.title_zh : item.title_en) || item.pdf.split('/').pop().replace('.pdf', '');
            const authors = (currentLanguage === 'zh' ? item.authors_zh : item.authors_en) || '';
            const venue = (currentLanguage === 'zh' ? item.venue_zh : item.venue_en) || '';
            
            const pdfText = translations[currentLanguage]['pub_pdf'] || 'PDF';
            const codeText = translations[currentLanguage]['pub_code'] || 'Code';

            const imageHtml = item.image 
                ? `<div class="publication-image"><img src="images/${item.image}" alt="Image for ${title}"></div>` 
                : '';

            html += `
                <div class="publication-entry">
                    ${imageHtml}
                    <div class="publication-details">
                        <p class="title">${title}</p>
                        <p class="authors">${authors}</p>
                        ${venue ? `<p class="venue">${venue}</p>` : ''}
                        <div class="links">
                            ${item.pdf_link ? `<a href="${item.pdf_link}" target="_blank">${pdfText}</a>` : ''}
                            ${item.code && item.code !== '#' ? `<a href="${item.code}" target="_blank">${codeText}</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html || `<p>No items to display.</p>`;
    };
    
    const renderProjects = (data, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        let html = '';
        data.forEach(item => {
            const title = (currentLanguage === 'zh' ? item.title_zh : item.title_en) || '';
            const description = (currentLanguage === 'zh' ? item.desc_zh : item.desc_en) || '';
            const learnMoreText = translations[currentLanguage]['project_learn_more'] || 'Learn More';
            html += `<div class="project-card"><img src="images/${item.image}" alt="${title}"><div class="project-content"><h3 class="project-title">${title}</h3><p class="project-description">${description}</p><div class="project-link"><a href="${item.link}" target="_blank">${learnMoreText}</a></div></div></div>`;
        });
        container.innerHTML = html;
    };

    const setLanguageAndRender = (language) => {
        currentLanguage = language;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        const titleKey = document.querySelector('title').getAttribute('data-lang-key');
        if(translations[language] && translations[language][titleKey]) { document.title = translations[language][titleKey]; }
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        localStorage.setItem('language', language);
        if(languageSelector) languageSelector.value = language;
        rerenderAllContent();
    };
    
    function rerenderAllContent() {
        const yearFilter = document.getElementById('year-filter');
        const sortOrder = document.getElementById('sort-order');
        if (yearFilter && sortOrder) {
            renderPublications(allPublicationsData, 'publications-list-all', null, yearFilter.value, sortOrder.value);
        }
        renderPublications(allPublicationsData, 'publications-list-home', 3);
        renderProjects(allProjectsData, 'projects-list');
    }

    function populateYearFilter(data) {
        const yearFilter = document.getElementById('year-filter');
        if (!yearFilter || yearFilter.options.length > 1) return;
        const years = [...new Set(data.map(item => item.year))].sort((a, b) => b - a);
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }

    async function initializeApp() {
        try {
            const [pubResponse, projResponse] = await Promise.all([
                fetch('publications.json').catch(e => console.error("Failed to fetch publications.json", e)),
                fetch('projects.json').catch(e => console.error("Failed to fetch projects.json", e))
            ]);
            allPublicationsData = pubResponse && pubResponse.ok ? await pubResponse.json() : [];
            allProjectsData = projResponse && projResponse.ok ? await projResponse.json() : [];
            setLanguageAndRender(currentLanguage);
            populateYearFilter(allPublicationsData);
            const yearFilter = document.getElementById('year-filter');
            const sortOrder = document.getElementById('sort-order');
            if (yearFilter && sortOrder) {
                yearFilter.addEventListener('change', rerenderAllContent);
                sortOrder.addEventListener('change', rerenderAllContent);
            }
            if(languageSelector){
                languageSelector.addEventListener('change', (event) => {
                    setLanguageAndRender(event.target.value);
                });
            }
        } catch (error) { console.error("Error initializing app:", error); }
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) { link.classList.add('active'); }
        });
    }

    initializeApp();
});