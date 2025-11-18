// 主交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化
    initializeApp();
});

function initializeApp() {
    // 设置语言切换
    setupLanguageToggle();

    // 设置侧边栏
    setupSidebar();

    // 设置回到顶部按钮
    setupBackToTop();

    // 加载初始内容
    loadContent('intro');

    // 更新语言
    window.i18n.updateLanguage();
}

// 语言切换
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            window.i18n.toggleLanguage();
        });
    }
}

// 设置侧边栏
function setupSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const tocItems = document.querySelectorAll('.toc-item');

    // 移动端菜单切换
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // TOC 项目点击
    tocItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            if (section) {
                loadContent(section);

                // 更新活动状态
                tocItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // 移动端关闭侧边栏
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('show');
                }

                // 滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // 点击主内容区关闭侧边栏（移动端）
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            if (window.innerWidth <= 1024 && sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        });
    }
}

// 加载内容
function loadContent(section) {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;

    // 获取内容
    const contentObj = window.getContent(section);

    // 渲染内容
    mainContent.innerHTML = `
        <div class="content-section">
            <div class="section-header">
                <h1 class="section-title">${contentObj.title}</h1>
                <p class="section-subtitle">${contentObj.subtitle}</p>
            </div>
            ${contentObj.content}
        </div>
    `;

    // 添加动画
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transition = 'opacity 0.3s ease';
    }, 10);

    // 为论文链接添加图标和样式
    enhancePaperLinks();
}

// 增强论文链接
function enhancePaperLinks() {
    const paperLinks = document.querySelectorAll('.paper-link');
    paperLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// 回到顶部按钮
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 平滑滚动到元素
function scrollToElement(element) {
    const yOffset = -80; // 导航栏高度
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}

// 导出函数供全局使用
window.loadContent = loadContent;
window.scrollToElement = scrollToElement;

// 监听窗口大小变化
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('show');
    }
});
