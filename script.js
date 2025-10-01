// script.js (已更新)

document.addEventListener('DOMContentLoaded', () => {

    // 1. 语言翻译数据
    // 所有需要翻译的文本都集中在这里
    const translations = {
        en: {
            // -- Titles --
            home_title: "AI Security Lab - Home",
            team_title: "Team - AI Security Lab",
            publications_title: "Publications - AI Security Lab",
            contact_title: "Contact - AI Security Lab",
            
            // -- Navigation --
            nav_home: "Home",
            nav_team: "Team",
            nav_publications: "Publications",
            nav_contact: "Contact Us",
            
            // -- Hero Section (index.html) --
            hero_center_name: "Cross-border Network Security Research Center, Ministry of Education",
            hero_slogan: "Exploring the Forefront of Large Model Security",
            
            // -- Team Page (team.html) --
            team_meet_the_team: "Meet the Team",
            team_zhouwei_name: "Wei Zhou",
            team_zhouwei_title: "Professor, PhD Supervisor",
            team_zhouwei_research: "Research: AI Security, Bioinformatics",
            team_hezhenli_name: "Zhenli He",
            team_hezhenli_title: "Associate Professor, Master Supervisor",
            team_hezhenli_research: "Research: Edge Computing, IoT",

            // -- Home Page Sections --
            home_news_title: "Latest News",
            home_contact_title: "Contact Us",

            // -- Publications Page --
            publications_page_title: "Publications",

            // -- Contact Sections (Shared) --
            contact_hiring: "We are actively hiring tenure-track faculty, postdocs, PhDs, and master's students. If you are interested in joining SECURITY LAB, please send your CV to <a href='mailto:hexn@ustc.edu.cn'>hexn@ustc.edu.cn</a>.",
            contact_address: "<strong>Address:</strong> School of Software 1323, 1223, Electron Microscopy Center 3403, Yunnan University (Chenggong Campus)",

            // -- Dynamic Publication Content --
            "pub_p1_title": "Congratulations! Five lab papers accepted by ICML'25",
            "pub_p1_authors": "Authors: San Zhang, Si Li, Wu Wang",
            "pub_p1_venue": "Published in: International Conference on Machine Learning (ICML) 2025",
            "pub_p2_title": "A paper on large model security published in a top journal",
            "pub_p2_authors": "Authors: Liu Zhao, Qi Qian",
            "pub_p2_venue": "Published in: Journal of Cybersecurity Research, Vol. 10, 2025",
            "pub_p3_title": "Lab Member Wins National Scholarship",
            "pub_p3_authors": "Winner: Ba Sun",
            "pub_p3_venue": "News Date: September 2025",
            "pub_p4_title": "New Research on Adversarial Attacks Published", // 示例 p4 翻译
            "pub_p4_authors": "Authors: Jiu Zheng", // 示例 p4 翻译
            "pub_p4_venue": "Published in: Conference on Computer Vision (CVPR) 2026", // 示例 p4 翻译
            
            pub_pdf: "PDF",
            pub_code: "Code",
        },
        zh: {
            // -- Titles --
            home_title: "AI Security Lab - 首页",
            team_title: "团队成员 - AI Security Lab",
            publications_title: "研究动态 - AI Security Lab",
            contact_title: "联系我们 - AI Security Lab",
            
            // -- Navigation --
            nav_home: "首页",
            nav_team: "团队成员",
            nav_publications: "研究动态",
            nav_contact: "联系我们",
            
            // -- Hero Section (index.html) --
            hero_center_name: "教育部跨境网络安全研究中心",
            hero_slogan: "探索大模型安全的前沿领域",

            // -- Team Page (team.html) --
            team_meet_the_team: "导师介绍",
            team_zhouwei_name: "周维",
            team_zhouwei_title: "教授、博士生导师",
            team_zhouwei_research: "研究方向: 人工智能安全、生物信息",
            team_hezhenli_name: "何臻力",
            team_hezhenli_title: "副教授、硕士生导师",
            team_hezhenli_research: "研究方向: 边缘计算、物联网",

            // -- Home Page Sections --
            home_news_title: "最新动态",
            home_contact_title: "联系我们",
            
            // -- Publications Page --
            publications_page_title: "研究动态",
            
            // -- Contact Sections (Shared) --
            contact_hiring: "我们正在积极招聘终身教职人员、博士后、博士及硕士研究生。如有意加入SECURITY LAB，请将简历发送至 <a href='mailto:hexn@ustc.edu.cn'>hexn@ustc.edu.cn</a>。",
            contact_address: "<strong>地址：</strong>云南大学（呈贡）软件学院1323、软件学院1223、电镜中心3403",

            // -- Dynamic Publication Content --
            "pub_p1_title": "祝贺！实验室五篇论文被ICML'25接收",
            "pub_p1_authors": "作者: 张三, 李四, 王五",
            "pub_p1_venue": "发表于: International Conference on Machine Learning (ICML) 2025",
            "pub_p2_title": "一篇关于大模型安全的论文发表于顶级期刊",
            "pub_p2_authors": "作者: 赵六, 钱七",
            "pub_p2_venue": "发表于: Journal of Cybersecurity Research, Vol. 10, 2025",
            "pub_p3_title": "实验室成员荣获国家奖学金",
            "pub_p3_authors": "获奖人: 孙八",
            "pub_p3_venue": "新闻日期: 2025年9月",
            "pub_p4_title": "对抗性攻击新研究成果发表", // 示例 p4 翻译
            "pub_p4_authors": "作者: 郑九", // 示例 p4 翻译
            "pub_p4_venue": "发表于: 计算机视觉会议 (CVPR) 2026", // 示例 p4 翻译
            
            pub_pdf: "PDF",
            pub_code: "代码",
        }
    };

    const languageSelector = document.getElementById('language-selector');
    let currentLanguage = localStorage.getItem('language') || 'zh';

    const renderPublications = (data, containerId, limit = null) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // --- 这里是唯一的修改点 ---
        // 原来的代码: const itemsToRender = limit ? data.slice(0, limit) : data;
        // 修改后的代码:
        const itemsToRender = limit ? data.slice(-limit).reverse() : [...data].reverse();
        // ------------------------

        let html = '';

        itemsToRender.forEach(item => {
            const title = translations[currentLanguage][`pub_${item.id}_title`] || '';
            const authors = translations[currentLanguage][`pub_${item.id}_authors`] || '';
            const venue = translations[currentLanguage][`pub_${item.id}_venue`] || '';
            const pdfText = translations[currentLanguage]['pub_pdf'];
            const codeText = translations[currentLanguage]['pub_code'];

            html += `
                <div class="publication-item">
                    <p class="title">${title}</p>
                    <p class="authors">${authors}</p>
                    ${venue ? `<p class="venue">${venue}</p>` : ''}
                    <div class="links">
                        ${item.pdf ? `<a href="publications/${item.pdf}" target="_blank">${pdfText}</a>` : ''}
                        ${item.code && item.code !== '#' ? `<a href="${item.code}" target="_blank">${codeText}</a>` : ''}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    };

    const setLanguageAndRender = (language, allData) => {
        currentLanguage = language;
        
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        
        const titleKey = document.querySelector('title').getAttribute('data-lang-key');
        if(translations[language] && translations[language][titleKey]) {
            document.title = translations[language][titleKey];
        }

        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        localStorage.setItem('language', language);
        if(languageSelector) languageSelector.value = language;

        renderPublications(allData, 'publications-list-all');
        renderPublications(allData, 'publications-list-home', 3);
    };

    async function initializeApp() {
        try {
            const response = await fetch('publications.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const publicationsData = await response.json();
            
            setLanguageAndRender(currentLanguage, publicationsData);

            if(languageSelector){
                languageSelector.addEventListener('change', (event) => {
                    setLanguageAndRender(event.target.value, publicationsData);
                });
            }
        } catch (error) {
            console.error("无法加载研究动态数据 (publications.json):", error);
            const publicationsContainer = document.getElementById('publications-list-all') || document.getElementById('publications-list-home');
            if (publicationsContainer) {
                publicationsContainer.innerHTML = "<p>无法加载动态内容，请检查文件是否存在或格式是否正确。</p>";
            }
        }

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    initializeApp();
});