// 国际化翻译数据
const translations = {
    zh: {
        siteTitle: "注意力机制",
        tableOfContents: "目录",

        // 导航
        nav: {
            intro: "简介",
            fundamental: "1. 基础注意力",
            fundamentalOverview: "概览",
            dotProduct: "点积注意力",
            additive: "加性注意力",
            scaledDot: "缩放点积注意力",

            transformer: "2. Transformer 核心",
            transformerOverview: "概览",
            selfAttention: "自注意力",
            crossAttention: "交叉注意力",
            multiHead: "多头注意力",
            masked: "因果掩码注意力",

            efficient: "3. 高效注意力",
            efficientOverview: "概览",
            sparse: "稀疏注意力",
            linear: "线性注意力",
            flash: "FlashAttention",

            multimodal: "4. 多模态注意力",
            multimodalOverview: "概览",
            visionLanguage: "图文注意力",

            vision: "5. 视觉注意力",
            visionOverview: "概览",
            vit: "ViT 全局注意力",
            swin: "Swin Transformer",
            deformable: "可变形注意力",

            temporal: "6. 时间序列注意力",
            temporalOverview: "概览",

            spatial3d: "7. 3D 空间注意力",
            spatial3dOverview: "概览",

            advanced: "8. 扩展注意力",
            advancedOverview: "概览",

            applications: "9. 应用场景",
            applicationsOverview: "概览"
        },

        // 标签
        tags: {
            fundamental: "基础",
            efficiency: "高效",
            complexity: "复杂度",
            application: "应用"
        },

        // 通用
        common: {
            readPaper: "阅读论文",
            viewDiagram: "查看图解",
            complexity: "复杂度",
            applications: "应用",
            advantages: "优势",
            disadvantages: "劣势",
            implementation: "实现",
            formula: "公式",
            example: "示例"
        }
    },

    en: {
        siteTitle: "Attention Mechanism",
        tableOfContents: "Table of Contents",

        // Navigation
        nav: {
            intro: "Introduction",
            fundamental: "1. Fundamental Attention",
            fundamentalOverview: "Overview",
            dotProduct: "Dot-Product Attention",
            additive: "Additive Attention",
            scaledDot: "Scaled Dot-Product",

            transformer: "2. Transformer Core",
            transformerOverview: "Overview",
            selfAttention: "Self-Attention",
            crossAttention: "Cross-Attention",
            multiHead: "Multi-Head Attention",
            masked: "Masked Attention",

            efficient: "3. Efficient Attention",
            efficientOverview: "Overview",
            sparse: "Sparse Attention",
            linear: "Linear Attention",
            flash: "FlashAttention",

            multimodal: "4. Multimodal Attention",
            multimodalOverview: "Overview",
            visionLanguage: "Vision-Language Attention",

            vision: "5. Vision Attention",
            visionOverview: "Overview",
            vit: "ViT Global Attention",
            swin: "Swin Transformer",
            deformable: "Deformable Attention",

            temporal: "6. Temporal Attention",
            temporalOverview: "Overview",

            spatial3d: "7. 3D Spatial Attention",
            spatial3dOverview: "Overview",

            advanced: "8. Advanced Attention",
            advancedOverview: "Overview",

            applications: "9. Applications",
            applicationsOverview: "Overview"
        },

        // Tags
        tags: {
            fundamental: "Fundamental",
            efficiency: "Efficiency",
            complexity: "Complexity",
            application: "Application"
        },

        // Common
        common: {
            readPaper: "Read Paper",
            viewDiagram: "View Diagram",
            complexity: "Complexity",
            applications: "Applications",
            advantages: "Advantages",
            disadvantages: "Disadvantages",
            implementation: "Implementation",
            formula: "Formula",
            example: "Example"
        }
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
    // 重新加载内容
    if (window.loadContent) {
        const activeSection = document.querySelector('.toc-item.active');
        if (activeSection) {
            const section = activeSection.getAttribute('data-section');
            window.loadContent(section);
        }
    }
}

// 更新页面语言
function updateLanguage() {
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[currentLang], key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// 获取嵌套翻译
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
}

// 获取翻译文本
function t(key) {
    return getNestedTranslation(translations[currentLang], key) || key;
}

// 导出函数
window.i18n = {
    t,
    toggleLanguage,
    updateLanguage,
    getCurrentLang: () => currentLang
};
