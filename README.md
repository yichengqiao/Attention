# 注意力机制原理讲解网站 | Attention Mechanism Explained

一个现代化、交互式的注意力机制教学网站，支持中英文切换。

## 特性

- 📚 **9大章节**：从基础到高级，系统讲解各类注意力机制
- 🌍 **中英双语**：一键切换中英文界面
- 🎨 **精美设计**：现代化深色主题，响应式布局
- 📖 **深入浅出**：配合公式、代码示例和论文链接
- 📱 **移动适配**：完美支持移动端浏览

## 内容目录

### 1. 基础注意力（Fundamental Attention）
- 点积注意力（Dot-Product Attention）
- 加性注意力（Additive / Bahdanau）
- 缩放点积注意力（Scaled Dot-Product）

### 2. Transformer 核心注意力（Transformer Core）
- Self-Attention（自注意力）
- Cross-Attention（交叉注意力）
- Multi-Head Attention（多头注意力）
- Masked / Causal Attention（因果掩码注意力）

### 3. 高效注意力（Efficient Attention）
- Sparse Attention（稀疏注意力）
- Linear Attention（线性注意力）
- FlashAttention（显存加速）

### 4-9. 更多高级主题
- 多模态注意力
- 视觉注意力
- 时间序列注意力
- 3D 空间注意力
- 扩展注意力
- 应用场景

## 使用方法

1. 直接在浏览器中打开 `index.html`
2. 或使用本地服务器：
   ```bash
   python -m http.server 8000
   # 然后访问 http://localhost:8000
   ```

## 技术栈

- **HTML5**：语义化结构
- **CSS3**：现代化样式和动画
- **JavaScript (ES6+)**：交互逻辑和国际化
- **Font Awesome**：图标库

## 项目结构

```
Attention/
├── index.html          # 主页面
├── css/
│   └── styles.css      # 样式文件
├── js/
│   ├── i18n.js        # 国际化翻译
│   ├── content.js     # 内容数据
│   └── main.js        # 主交互脚本
├── assets/
│   └── diagrams/      # 图解和图片
└── README.md          # 说明文档
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进内容和功能！

## License

MIT License
