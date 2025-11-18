// 内容数据库
const contentData = {
    intro: {
        zh: {
            title: "注意力机制原理讲解",
            subtitle: "深入浅出理解 Attention Mechanism",
            content: `
                <div class="intro-card">
                    <h3>🎯 什么是注意力机制？</h3>
                    <p>注意力机制（Attention Mechanism）是深度学习中的一种关键技术，它允许模型在处理信息时"聚焦"于最相关的部分。就像人类在阅读时会重点关注某些词汇一样，注意力机制让神经网络能够动态地分配不同的权重给输入的不同部分。</p>
                </div>

                <div class="intro-card">
                    <h3>🚀 为什么重要？</h3>
                    <p>注意力机制彻底改变了自然语言处理、计算机视觉和多模态学习等领域。它是 Transformer 架构的核心，支撑着 GPT、BERT、ViT 等现代 AI 模型。</p>
                    <ul>
                        <li><strong>长距离依赖：</strong>能够捕获序列中任意距离的关系</li>
                        <li><strong>并行计算：</strong>不同于 RNN，可以并行处理整个序列</li>
                        <li><strong>可解释性：</strong>注意力权重提供了模型决策的可视化</li>
                        <li><strong>灵活性：</strong>适用于多种任务和模态</li>
                    </ul>
                </div>

                <div class="intro-card">
                    <h3>📚 本网站内容</h3>
                    <p>本网站系统地介绍了注意力机制的方方面面，从基础概念到前沿应用：</p>
                    <div class="grid-2">
                        <div>
                            <h4>🔰 基础部分</h4>
                            <ul>
                                <li>基础注意力机制</li>
                                <li>Transformer 核心组件</li>
                                <li>数学原理与实现</li>
                            </ul>
                        </div>
                        <div>
                            <h4>⚡ 进阶部分</h4>
                            <ul>
                                <li>高效注意力变体</li>
                                <li>多模态应用</li>
                                <li>领域特定优化</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>💡 学习建议：</strong>建议按照从基础到进阶的顺序学习。如果你是初学者，从"基础注意力"和"Transformer 核心"开始；如果已有基础，可以直接跳到感兴趣的专题。</p>
                </div>
            `
        },
        en: {
            title: "Attention Mechanism Explained",
            subtitle: "Understanding Attention Mechanism from Ground Up",
            content: `
                <div class="intro-card">
                    <h3>🎯 What is Attention Mechanism?</h3>
                    <p>Attention Mechanism is a key technique in deep learning that allows models to "focus" on the most relevant parts when processing information. Just like humans focus on certain words when reading, attention mechanisms enable neural networks to dynamically assign different weights to different parts of the input.</p>
                </div>

                <div class="intro-card">
                    <h3>🚀 Why is it Important?</h3>
                    <p>Attention mechanisms have revolutionized fields like natural language processing, computer vision, and multimodal learning. It's the core of the Transformer architecture, powering modern AI models like GPT, BERT, and ViT.</p>
                    <ul>
                        <li><strong>Long-range Dependencies:</strong> Captures relationships across arbitrary distances in sequences</li>
                        <li><strong>Parallel Computation:</strong> Unlike RNNs, can process entire sequences in parallel</li>
                        <li><strong>Interpretability:</strong> Attention weights provide visualization of model decisions</li>
                        <li><strong>Flexibility:</strong> Applicable to various tasks and modalities</li>
                    </ul>
                </div>

                <div class="intro-card">
                    <h3>📚 Website Content</h3>
                    <p>This website systematically introduces all aspects of attention mechanisms, from basic concepts to cutting-edge applications:</p>
                    <div class="grid-2">
                        <div>
                            <h4>🔰 Fundamentals</h4>
                            <ul>
                                <li>Basic Attention Mechanisms</li>
                                <li>Transformer Core Components</li>
                                <li>Mathematical Principles & Implementation</li>
                            </ul>
                        </div>
                        <div>
                            <h4>⚡ Advanced Topics</h4>
                            <ul>
                                <li>Efficient Attention Variants</li>
                                <li>Multimodal Applications</li>
                                <li>Domain-specific Optimizations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>💡 Learning Tip:</strong> It's recommended to follow the progression from fundamentals to advanced topics. If you're a beginner, start with "Fundamental Attention" and "Transformer Core"; if you have prior knowledge, jump directly to topics of interest.</p>
                </div>
            `
        }
    },

    fundamental: {
        zh: {
            title: "1. 基础注意力机制",
            subtitle: "Fundamental Attention Mechanisms",
            content: `
                <div class="concept-card">
                    <h3>📖 核心概念</h3>
                    <p>注意力机制的核心思想是：<strong>给不同的输入分配不同的权重</strong>。这个过程通常包含三个关键步骤：</p>
                    <ol>
                        <li><strong>计算相似度/关联度：</strong>评估查询（Query）与键（Key）之间的关系</li>
                        <li><strong>归一化权重：</strong>通常使用 Softmax 将相似度转换为概率分布</li>
                        <li><strong>加权求和：</strong>使用权重对值（Value）进行加权组合</li>
                    </ol>

                    <div class="formula">
                        Attention(Q, K, V) = softmax(score(Q, K)) · V
                    </div>

                    <div class="tags">
                        <span class="tag">基础</span>
                        <span class="tag">核心概念</span>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🔑 三个关键元素：Q, K, V</h3>
                    <ul>
                        <li><strong>Query (查询)：</strong>当前要处理的元素，"我在找什么？"</li>
                        <li><strong>Key (键)：</strong>用于匹配的特征，"这是什么？"</li>
                        <li><strong>Value (值)：</strong>实际要提取的信息，"给你什么？"</li>
                    </ul>
                    <p>通过 Q 和 K 的匹配度来决定从 V 中提取多少信息。</p>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/qkv-concept.svg" alt="Q, K, V 概念示意图" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">图示：注意力机制的基本流程 - Q、K、V的作用</div>
                </div>
            `
        },
        en: {
            title: "1. Fundamental Attention Mechanisms",
            subtitle: "Core Concepts and Building Blocks",
            content: `
                <div class="concept-card">
                    <h3>📖 Core Concept</h3>
                    <p>The core idea of attention mechanisms is: <strong>assigning different weights to different inputs</strong>. This process typically involves three key steps:</p>
                    <ol>
                        <li><strong>Compute Similarity/Relevance:</strong> Evaluate the relationship between Query and Key</li>
                        <li><strong>Normalize Weights:</strong> Usually use Softmax to convert similarities into probability distribution</li>
                        <li><strong>Weighted Sum:</strong> Use weights to combine Values</li>
                    </ol>

                    <div class="formula">
                        Attention(Q, K, V) = softmax(score(Q, K)) · V
                    </div>

                    <div class="tags">
                        <span class="tag">Fundamental</span>
                        <span class="tag">Core Concept</span>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🔑 Three Key Elements: Q, K, V</h3>
                    <ul>
                        <li><strong>Query:</strong> The current element to process, "What am I looking for?"</li>
                        <li><strong>Key:</strong> Features for matching, "What is this?"</li>
                        <li><strong>Value:</strong> Actual information to extract, "What do I give you?"</li>
                    </ul>
                    <p>The matching degree between Q and K determines how much information to extract from V.</p>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/qkv-concept.svg" alt="Q, K, V Concept Illustration" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">Figure: Basic flow of attention mechanism - Role of Q, K, V</div>
                </div>
            `
        }
    },

    "dot-product": {
        zh: {
            title: "点积注意力",
            subtitle: "Dot-Product Attention",
            content: `
                <div class="concept-card">
                    <h3>💡 原理</h3>
                    <p>点积注意力是最简单直观的注意力计算方式，通过计算 Query 和 Key 向量的<strong>点积</strong>来衡量它们的相似度。</p>

                    <h4>数学公式</h4>
                    <div class="formula">
                        score(Q, K) = Q · K<sup>T</sup>
                        <br><br>
                        Attention(Q, K, V) = softmax(Q · K<sup>T</sup>) · V
                    </div>

                    <h4>计算步骤</h4>
                    <ol>
                        <li>将 Query 向量与所有 Key 向量做点积</li>
                        <li>对点积结果应用 Softmax 归一化</li>
                        <li>使用归一化后的权重对 Value 向量加权求和</li>
                    </ol>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 实现示例</h3>
                    <div class="code-block">
                        <pre>
import numpy as np

def dot_product_attention(Q, K, V):
    """
    Q: Query矩阵 [batch, seq_len, d_k]
    K: Key矩阵 [batch, seq_len, d_k]
    V: Value矩阵 [batch, seq_len, d_v]
    """
    # 计算点积相似度
    scores = np.matmul(Q, K.transpose(-2, -1))  # [batch, seq_len, seq_len]

    # Softmax归一化
    attention_weights = softmax(scores, axis=-1)

    # 加权求和
    output = np.matmul(attention_weights, V)  # [batch, seq_len, d_v]

    return output, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 优缺点分析</h3>
                    <div class="grid-2">
                        <div>
                            <h4 style="color: #22c55e;">✅ 优点</h4>
                            <ul>
                                <li>计算简单高效</li>
                                <li>易于并行化</li>
                                <li>可以利用矩阵运算加速</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #ef4444;">❌ 缺点</h4>
                            <ul>
                                <li>当维度较大时，点积值可能过大</li>
                                <li>导致 Softmax 梯度消失</li>
                                <li>需要缩放来解决（见缩放点积注意力）</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>🔍 直觉理解：</strong>点积越大，表示两个向量越相似、方向越接近。在注意力机制中，这意味着 Query 和某个 Key 越匹配，就应该给对应的 Value 分配越高的权重。</p>
                </div>

                <div class="tags">
                    <span class="tag">基础</span>
                    <span class="tag complexity">O(n²)</span>
                </div>
            `
        },
        en: {
            title: "Dot-Product Attention",
            subtitle: "The Simplest Form of Attention",
            content: `
                <div class="concept-card">
                    <h3>💡 Principle</h3>
                    <p>Dot-product attention is the simplest and most intuitive attention computation method, measuring similarity by computing the <strong>dot product</strong> between Query and Key vectors.</p>

                    <h4>Mathematical Formula</h4>
                    <div class="formula">
                        score(Q, K) = Q · K<sup>T</sup>
                        <br><br>
                        Attention(Q, K, V) = softmax(Q · K<sup>T</sup>) · V
                    </div>

                    <h4>Computation Steps</h4>
                    <ol>
                        <li>Compute dot product between Query and all Key vectors</li>
                        <li>Apply Softmax normalization to dot product results</li>
                        <li>Weighted sum of Value vectors using normalized weights</li>
                    </ol>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Implementation Example</h3>
                    <div class="code-block">
                        <pre>
import numpy as np

def dot_product_attention(Q, K, V):
    """
    Q: Query matrix [batch, seq_len, d_k]
    K: Key matrix [batch, seq_len, d_k]
    V: Value matrix [batch, seq_len, d_v]
    """
    # Compute dot product similarity
    scores = np.matmul(Q, K.transpose(-2, -1))  # [batch, seq_len, seq_len]

    # Softmax normalization
    attention_weights = softmax(scores, axis=-1)

    # Weighted sum
    output = np.matmul(attention_weights, V)  # [batch, seq_len, d_v]

    return output, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 Pros and Cons</h3>
                    <div class="grid-2">
                        <div>
                            <h4 style="color: #22c55e;">✅ Advantages</h4>
                            <ul>
                                <li>Simple and efficient computation</li>
                                <li>Easy to parallelize</li>
                                <li>Can leverage matrix operations for acceleration</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #ef4444;">❌ Disadvantages</h4>
                            <ul>
                                <li>Dot products can be too large for high dimensions</li>
                                <li>Leads to Softmax gradient vanishing</li>
                                <li>Requires scaling (see Scaled Dot-Product)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>🔍 Intuition:</strong> Larger dot product means more similar vectors with closer directions. In attention, this means higher match between Query and Key should assign higher weight to corresponding Value.</p>
                </div>

                <div class="tags">
                    <span class="tag">Fundamental</span>
                    <span class="tag complexity">O(n²)</span>
                </div>
            `
        }
    },

    "additive": {
        zh: {
            title: "加性注意力 (Bahdanau Attention)",
            subtitle: "Additive / Bahdanau Attention",
            content: `
                <div class="concept-card">
                    <h3>💡 原理</h3>
                    <p>加性注意力（也称为 Bahdanau 注意力）通过<strong>前馈神经网络</strong>来计算 Query 和 Key 之间的相似度，而不是简单的点积。</p>

                    <h4>数学公式</h4>
                    <div class="formula">
                        score(Q, K) = v<sup>T</sup> · tanh(W<sub>q</sub>Q + W<sub>k</sub>K)
                        <br><br>
                        Attention(Q, K, V) = softmax(score(Q, K)) · V
                    </div>

                    <p>其中：</p>
                    <ul>
                        <li>W<sub>q</sub> 和 W<sub>k</sub> 是可学习的权重矩阵</li>
                        <li>v 是可学习的权重向量</li>
                        <li>tanh 是激活函数</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>📜 历史背景</h3>
                    <p>加性注意力由 Dzmitry Bahdanau 等人在 2015 年提出，首次应用于神经机器翻译任务。这是<strong>第一个广泛使用的注意力机制</strong>，开创了注意力机制在 NLP 中的应用。</p>

                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> 经典论文</h4>
                        <p><strong>"Neural Machine Translation by Jointly Learning to Align and Translate"</strong></p>
                        <p>Bahdanau et al., ICLR 2015</p>
                        <a href="https://arxiv.org/abs/1409.0473" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            阅读论文
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 实现示例</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn

class AdditiveAttention(nn.Module):
    def __init__(self, hidden_dim):
        super().__init__()
        self.W_q = nn.Linear(hidden_dim, hidden_dim)
        self.W_k = nn.Linear(hidden_dim, hidden_dim)
        self.v = nn.Linear(hidden_dim, 1)

    def forward(self, query, key, value):
        # query: [batch, 1, hidden_dim]
        # key: [batch, seq_len, hidden_dim]
        # value: [batch, seq_len, hidden_dim]

        # 线性变换
        q = self.W_q(query)  # [batch, 1, hidden_dim]
        k = self.W_k(key)    # [batch, seq_len, hidden_dim]

        # 相加并激活
        scores = self.v(torch.tanh(q + k))  # [batch, seq_len, 1]
        scores = scores.squeeze(-1)  # [batch, seq_len]

        # Softmax
        attention_weights = torch.softmax(scores, dim=-1)

        # 加权求和
        context = torch.bmm(
            attention_weights.unsqueeze(1),  # [batch, 1, seq_len]
            value  # [batch, seq_len, hidden_dim]
        )  # [batch, 1, hidden_dim]

        return context, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>⚖️ 与点积注意力对比</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>特性</th>
                                <th>加性注意力</th>
                                <th>点积注意力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>计算复杂度</td>
                                <td>O(n·d²)</td>
                                <td>O(n²·d)</td>
                            </tr>
                            <tr>
                                <td>参数量</td>
                                <td>较多（W<sub>q</sub>, W<sub>k</sub>, v）</td>
                                <td>较少或无额外参数</td>
                            </tr>
                            <tr>
                                <td>表达能力</td>
                                <td>更强（非线性变换）</td>
                                <td>较弱（线性点积）</td>
                            </tr>
                            <tr>
                                <td>计算速度</td>
                                <td>较慢</td>
                                <td>较快</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="highlight-box">
                    <p><strong>🎯 适用场景：</strong>当 Query 和 Key 的维度不同，或需要更复杂的相似度计算时，加性注意力是更好的选择。在序列到序列任务（如机器翻译）中表现优异。</p>
                </div>

                <div class="tags">
                    <span class="tag">基础</span>
                    <span class="tag application">机器翻译</span>
                    <span class="tag">历史重要</span>
                </div>
            `
        },
        en: {
            title: "Additive Attention (Bahdanau Attention)",
            subtitle: "The First Widely-Used Attention Mechanism",
            content: `
                <div class="concept-card">
                    <h3>💡 Principle</h3>
                    <p>Additive attention (also known as Bahdanau attention) computes similarity between Query and Key through a <strong>feedforward neural network</strong> instead of simple dot product.</p>

                    <h4>Mathematical Formula</h4>
                    <div class="formula">
                        score(Q, K) = v<sup>T</sup> · tanh(W<sub>q</sub>Q + W<sub>k</sub>K)
                        <br><br>
                        Attention(Q, K, V) = softmax(score(Q, K)) · V
                    </div>

                    <p>Where:</p>
                    <ul>
                        <li>W<sub>q</sub> and W<sub>k</sub> are learnable weight matrices</li>
                        <li>v is a learnable weight vector</li>
                        <li>tanh is the activation function</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>📜 Historical Background</h3>
                    <p>Additive attention was proposed by Dzmitry Bahdanau et al. in 2015, first applied to neural machine translation. This was the <strong>first widely-used attention mechanism</strong>, pioneering attention's application in NLP.</p>

                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> Seminal Paper</h4>
                        <p><strong>"Neural Machine Translation by Jointly Learning to Align and Translate"</strong></p>
                        <p>Bahdanau et al., ICLR 2015</p>
                        <a href="https://arxiv.org/abs/1409.0473" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            Read Paper
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Implementation Example</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn

class AdditiveAttention(nn.Module):
    def __init__(self, hidden_dim):
        super().__init__()
        self.W_q = nn.Linear(hidden_dim, hidden_dim)
        self.W_k = nn.Linear(hidden_dim, hidden_dim)
        self.v = nn.Linear(hidden_dim, 1)

    def forward(self, query, key, value):
        # query: [batch, 1, hidden_dim]
        # key: [batch, seq_len, hidden_dim]
        # value: [batch, seq_len, hidden_dim]

        # Linear transformation
        q = self.W_q(query)  # [batch, 1, hidden_dim]
        k = self.W_k(key)    # [batch, seq_len, hidden_dim]

        # Add and activate
        scores = self.v(torch.tanh(q + k))  # [batch, seq_len, 1]
        scores = scores.squeeze(-1)  # [batch, seq_len]

        # Softmax
        attention_weights = torch.softmax(scores, dim=-1)

        # Weighted sum
        context = torch.bmm(
            attention_weights.unsqueeze(1),  # [batch, 1, seq_len]
            value  # [batch, seq_len, hidden_dim]
        )  # [batch, 1, hidden_dim]

        return context, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>⚖️ Comparison with Dot-Product</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Additive Attention</th>
                                <th>Dot-Product Attention</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Complexity</td>
                                <td>O(n·d²)</td>
                                <td>O(n²·d)</td>
                            </tr>
                            <tr>
                                <td>Parameters</td>
                                <td>More (W<sub>q</sub>, W<sub>k</sub>, v)</td>
                                <td>Fewer or no extra parameters</td>
                            </tr>
                            <tr>
                                <td>Expressiveness</td>
                                <td>Stronger (non-linear)</td>
                                <td>Weaker (linear dot product)</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>Slower</td>
                                <td>Faster</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="highlight-box">
                    <p><strong>🎯 Use Cases:</strong> When Query and Key have different dimensions, or more complex similarity computation is needed, additive attention is the better choice. Performs excellently in sequence-to-sequence tasks like machine translation.</p>
                </div>

                <div class="tags">
                    <span class="tag">Fundamental</span>
                    <span class="tag application">Machine Translation</span>
                    <span class="tag">Historically Important</span>
                </div>
            `
        }
    },

    "scaled-dot": {
        zh: {
            title: "缩放点积注意力",
            subtitle: "Scaled Dot-Product Attention",
            content: `
                <div class="concept-card">
                    <h3>💡 原理</h3>
                    <p>缩放点积注意力是<strong>Transformer 的核心</strong>，通过除以 √d<sub>k</sub> 来缩放点积结果，解决了大维度下点积过大导致的梯度消失问题。</p>

                    <h4>数学公式</h4>
                    <div class="formula">
                        Attention(Q, K, V) = softmax(<span style="font-size: 1.3em;">QK<sup>T</sup> / √d<sub>k</sub></span>) V
                    </div>

                    <p>其中 d<sub>k</sub> 是 Key 向量的维度。</p>
                </div>

                <div class="concept-card">
                    <h3>🤔 为什么需要缩放？</h3>
                    <p>当维度 d<sub>k</sub> 较大时，点积的值会变得很大：</p>
                    <ul>
                        <li>假设 Q 和 K 的元素是均值为 0、方差为 1 的独立随机变量</li>
                        <li>它们的点积 QK<sup>T</sup> 的方差为 d<sub>k</sub></li>
                        <li>当 d<sub>k</sub> 很大时，点积值会非常大</li>
                        <li>导致 Softmax 函数进入饱和区，梯度极小</li>
                    </ul>

                    <div class="highlight-box">
                        <p><strong>📊 数值示例：</strong>当 d<sub>k</sub> = 512 时，如果不缩放，点积值可能达到数百，Softmax 后会出现接近 [1, 0, 0, ...] 的极端分布，梯度几乎为 0。</p>
                    </div>

                    <p>通过除以 √d<sub>k</sub>，可以将方差恢复到 1，保持数值稳定性。</p>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 完整实现</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(dropout)

    def forward(self, query, key, value, mask=None):
        """
        query: [batch, num_heads, seq_len, d_k]
        key: [batch, num_heads, seq_len, d_k]
        value: [batch, num_heads, seq_len, d_v]
        mask: [batch, 1, 1, seq_len] or [batch, 1, seq_len, seq_len]
        """
        d_k = query.size(-1)

        # 1. 计算点积并缩放
        scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
        # scores: [batch, num_heads, seq_len, seq_len]

        # 2. 应用掩码（可选）
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)

        # 3. Softmax归一化
        attention_weights = torch.softmax(scores, dim=-1)
        attention_weights = self.dropout(attention_weights)

        # 4. 加权求和
        output = torch.matmul(attention_weights, value)
        # output: [batch, num_heads, seq_len, d_v]

        return output, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📜 论文来源</h3>
                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> 里程碑论文</h4>
                        <p><strong>"Attention Is All You Need"</strong></p>
                        <p>Vaswani et al., NeurIPS 2017</p>
                        <p>这篇论文提出了 Transformer 架构，彻底改变了 NLP 和深度学习领域。</p>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            阅读论文
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 关键优势</h3>
                    <div class="grid-2">
                        <div>
                            <h4 style="color: #22c55e;">✅ 优点</h4>
                            <ul>
                                <li><strong>数值稳定：</strong>避免梯度消失</li>
                                <li><strong>高效并行：</strong>矩阵运算友好</li>
                                <li><strong>简单优雅：</strong>易于实现和理解</li>
                                <li><strong>效果卓越：</strong>Transformer 的核心</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #ef4444;">⚠️ 限制</h4>
                            <ul>
                                <li><strong>二次复杂度：</strong>O(n²) 内存和计算</li>
                                <li><strong>长序列瓶颈：</strong>难以处理超长文本</li>
                                <li><strong>全局注意力：</strong>所有位置两两交互</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="diagram-container">
                    <div class="diagram-placeholder">
                        <i class="fas fa-calculator" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>缩放点积注意力流程图</p>
                        <p style="font-size: 0.9rem;">QK<sup>T</sup> → ÷√d<sub>k</sub> → Softmax → 乘以V → Output</p>
                    </div>
                    <div class="diagram-caption">图示：缩放点积注意力的完整计算流程</div>
                </div>

                <div class="tags">
                    <span class="tag">核心</span>
                    <span class="tag application">Transformer</span>
                    <span class="tag complexity">O(n²)</span>
                </div>
            `
        },
        en: {
            title: "Scaled Dot-Product Attention",
            subtitle: "The Heart of Transformer",
            content: `
                <div class="concept-card">
                    <h3>💡 Principle</h3>
                    <p>Scaled dot-product attention is <strong>the core of Transformer</strong>, scaling dot product results by dividing by √d<sub>k</sub> to solve gradient vanishing caused by large dot products in high dimensions.</p>

                    <h4>Mathematical Formula</h4>
                    <div class="formula">
                        Attention(Q, K, V) = softmax(<span style="font-size: 1.3em;">QK<sup>T</sup> / √d<sub>k</sub></span>) V
                    </div>

                    <p>Where d<sub>k</sub> is the dimension of Key vectors.</p>
                </div>

                <div class="concept-card">
                    <h3>🤔 Why Scaling?</h3>
                    <p>When dimension d<sub>k</sub> is large, dot product values become very large:</p>
                    <ul>
                        <li>Assume Q and K elements are independent random variables with mean 0 and variance 1</li>
                        <li>Their dot product QK<sup>T</sup> has variance d<sub>k</sub></li>
                        <li>When d<sub>k</sub> is large, dot product values become very large</li>
                        <li>Pushes Softmax into saturation, causing tiny gradients</li>
                    </ul>

                    <div class="highlight-box">
                        <p><strong>📊 Numerical Example:</strong> When d<sub>k</sub> = 512, without scaling, dot products can reach hundreds, causing Softmax to produce extreme distributions like [1, 0, 0, ...] with near-zero gradients.</p>
                    </div>

                    <p>Dividing by √d<sub>k</sub> restores variance to 1, maintaining numerical stability.</p>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Complete Implementation</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(dropout)

    def forward(self, query, key, value, mask=None):
        """
        query: [batch, num_heads, seq_len, d_k]
        key: [batch, num_heads, seq_len, d_k]
        value: [batch, num_heads, seq_len, d_v]
        mask: [batch, 1, 1, seq_len] or [batch, 1, seq_len, seq_len]
        """
        d_k = query.size(-1)

        # 1. Compute and scale dot product
        scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
        # scores: [batch, num_heads, seq_len, seq_len]

        # 2. Apply mask (optional)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)

        # 3. Softmax normalization
        attention_weights = torch.softmax(scores, dim=-1)
        attention_weights = self.dropout(attention_weights)

        # 4. Weighted sum
        output = torch.matmul(attention_weights, value)
        # output: [batch, num_heads, seq_len, d_v]

        return output, attention_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📜 Original Paper</h3>
                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> Landmark Paper</h4>
                        <p><strong>"Attention Is All You Need"</strong></p>
                        <p>Vaswani et al., NeurIPS 2017</p>
                        <p>This paper introduced the Transformer architecture, revolutionizing NLP and deep learning.</p>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            Read Paper
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 Key Advantages</h3>
                    <div class="grid-2">
                        <div>
                            <h4 style="color: #22c55e;">✅ Advantages</h4>
                            <ul>
                                <li><strong>Numerical Stability:</strong> Avoids gradient vanishing</li>
                                <li><strong>Efficient Parallelization:</strong> Matrix-friendly</li>
                                <li><strong>Simple & Elegant:</strong> Easy to implement and understand</li>
                                <li><strong>Excellent Performance:</strong> Core of Transformer</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #ef4444;">⚠️ Limitations</h4>
                            <ul>
                                <li><strong>Quadratic Complexity:</strong> O(n²) memory and computation</li>
                                <li><strong>Long Sequence Bottleneck:</strong> Hard to handle very long texts</li>
                                <li><strong>Global Attention:</strong> All positions interact pairwise</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="diagram-container">
                    <div class="diagram-placeholder">
                        <i class="fas fa-calculator" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>Scaled Dot-Product Attention Flow</p>
                        <p style="font-size: 0.9rem;">QK<sup>T</sup> → ÷√d<sub>k</sub> → Softmax → ×V → Output</p>
                    </div>
                    <div class="diagram-caption">Figure: Complete computation flow of scaled dot-product attention</div>
                </div>

                <div class="tags">
                    <span class="tag">Core</span>
                    <span class="tag application">Transformer</span>
                    <span class="tag complexity">O(n²)</span>
                </div>
            `
        }
    },

    transformer: {
        zh: {
            title: "2. Transformer 核心注意力",
            subtitle: "Transformer Core Attention Mechanisms",
            content: `
                <div class="concept-card">
                    <h3>🌟 Transformer 架构概览</h3>
                    <p>Transformer 是一个完全基于注意力机制的模型架构，抛弃了传统的循环神经网络（RNN）和卷积神经网络（CNN）。它通过<strong>自注意力</strong>和<strong>交叉注意力</strong>实现了对序列的强大建模能力。</p>

                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> 原始论文</h4>
                        <p><strong>"Attention Is All You Need"</strong></p>
                        <p>Vaswani et al., NeurIPS 2017</p>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            阅读论文
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🏗️ 主要组件</h3>
                    <ul>
                        <li><strong>Self-Attention（自注意力）：</strong>序列内部的关系建模</li>
                        <li><strong>Cross-Attention（交叉注意力）：</strong>不同序列之间的关系建模</li>
                        <li><strong>Multi-Head Attention（多头注意力）：</strong>并行的多个注意力机制</li>
                        <li><strong>Masked Attention（掩码注意力）：</strong>用于自回归生成的因果注意力</li>
                    </ul>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/transformer-architecture.svg" alt="Transformer 架构" style="width: 100%; max-width: 900px; height: auto;">
                    <div class="diagram-caption">图示：Transformer 的编码器-解码器架构</div>
                </div>

                <div class="tags">
                    <span class="tag">核心</span>
                    <span class="tag application">NLP</span>
                    <span class="tag application">Vision</span>
                </div>
            `
        },
        en: {
            title: "2. Transformer Core Attention",
            subtitle: "Building Blocks of Modern AI",
            content: `
                <div class="concept-card">
                    <h3>🌟 Transformer Architecture Overview</h3>
                    <p>Transformer is a model architecture entirely based on attention mechanisms, abandoning traditional RNNs and CNNs. It achieves powerful sequence modeling through <strong>self-attention</strong> and <strong>cross-attention</strong>.</p>

                    <div class="paper-reference">
                        <h4><i class="fas fa-file-alt"></i> Original Paper</h4>
                        <p><strong>"Attention Is All You Need"</strong></p>
                        <p>Vaswani et al., NeurIPS 2017</p>
                        <a href="https://arxiv.org/abs/1706.03762" target="_blank" class="paper-link">
                            <i class="fas fa-external-link-alt"></i>
                            Read Paper
                        </a>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🏗️ Main Components</h3>
                    <ul>
                        <li><strong>Self-Attention:</strong> Models relationships within sequences</li>
                        <li><strong>Cross-Attention:</strong> Models relationships between different sequences</li>
                        <li><strong>Multi-Head Attention:</strong> Multiple parallel attention mechanisms</li>
                        <li><strong>Masked Attention:</strong> Causal attention for autoregressive generation</li>
                    </ul>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/transformer-architecture.svg" alt="Transformer Architecture" style="width: 100%; max-width: 900px; height: auto;">
                    <div class="diagram-caption">Figure: Transformer encoder-decoder architecture</div>
                </div>

                <div class="tags">
                    <span class="tag">Core</span>
                    <span class="tag application">NLP</span>
                    <span class="tag application">Vision</span>
                </div>
            `
        }
    },

    "self-attention": {
        zh: {
            title: "自注意力 (Self-Attention)",
            subtitle: "Modeling Relationships Within Sequences",
            content: `
                <div class="concept-card">
                    <h3>💡 核心概念</h3>
                    <p>自注意力是 Transformer 的核心机制，它允许序列中的<strong>每个位置</strong>都能关注到序列中的<strong>所有其他位置</strong>，包括它自己。Q、K、V 都来自同一个输入序列。</p>

                    <h4>关键特点</h4>
                    <ul>
                        <li><strong>Token-to-Token：</strong>每个 token 都可以与其他 token 交互</li>
                        <li><strong>全局建模：</strong>捕获长距离依赖关系</li>
                        <li><strong>位置无关：</strong>通过位置编码添加位置信息</li>
                        <li><strong>并行计算：</strong>所有位置同时计算</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 实现</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_dim, num_heads=8):
        super().__init__()
        self.embed_dim = embed_dim
        self.num_heads = num_heads
        self.head_dim = embed_dim // num_heads

        # Q, K, V 投影矩阵
        self.qkv_proj = nn.Linear(embed_dim, 3 * embed_dim)
        self.out_proj = nn.Linear(embed_dim, embed_dim)

    def forward(self, x):
        """
        x: [batch, seq_len, embed_dim]
        """
        batch_size, seq_len, _ = x.shape

        # 生成 Q, K, V
        qkv = self.qkv_proj(x)  # [batch, seq_len, 3*embed_dim]
        qkv = qkv.reshape(batch_size, seq_len, 3, self.num_heads, self.head_dim)
        qkv = qkv.permute(2, 0, 3, 1, 4)  # [3, batch, num_heads, seq_len, head_dim]
        q, k, v = qkv[0], qkv[1], qkv[2]

        # 缩放点积注意力
        scores = torch.matmul(q, k.transpose(-2, -1)) / (self.head_dim ** 0.5)
        attn_weights = torch.softmax(scores, dim=-1)

        # 加权求和
        attn_output = torch.matmul(attn_weights, v)

        # 合并多头
        attn_output = attn_output.transpose(1, 2).contiguous()
        attn_output = attn_output.reshape(batch_size, seq_len, self.embed_dim)

        # 输出投影
        output = self.out_proj(attn_output)

        return output, attn_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 应用场景</h3>
                    <div class="grid-2">
                        <div>
                            <h4>📝 NLP</h4>
                            <ul>
                                <li>句内词汇关系建模</li>
                                <li>BERT、GPT 等语言模型</li>
                                <li>文本分类、问答系统</li>
                            </ul>
                        </div>
                        <div>
                            <h4>🖼️ Vision</h4>
                            <ul>
                                <li>图像 Patch 之间的关系</li>
                                <li>Vision Transformer (ViT)</li>
                                <li>图像分类、目标检测</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/self-attention.svg" alt="Self-Attention 自注意力机制" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">图示：自注意力的连接模式 - 序列内部的全局关注</div>
                </div>

                <div class="highlight-box">
                    <p><strong>💡 直觉理解：</strong>在句子"The cat sat on the mat"中，"cat"不仅要理解自己，还要关注"sat"（动作）和"mat"（位置），自注意力让每个词都能捕获这些上下文关系。</p>
                </div>

                <div class="tags">
                    <span class="tag">核心</span>
                    <span class="tag application">BERT</span>
                    <span class="tag application">GPT</span>
                    <span class="tag application">ViT</span>
                </div>
            `
        },
        en: {
            title: "Self-Attention",
            subtitle: "The Heart of Transformer",
            content: `
                <div class="concept-card">
                    <h3>💡 Core Concept</h3>
                    <p>Self-attention is the core mechanism of Transformer, allowing <strong>each position</strong> in a sequence to attend to <strong>all other positions</strong>, including itself. Q, K, V all come from the same input sequence.</p>

                    <h4>Key Features</h4>
                    <ul>
                        <li><strong>Token-to-Token:</strong> Each token can interact with all others</li>
                        <li><strong>Global Modeling:</strong> Captures long-range dependencies</li>
                        <li><strong>Position Agnostic:</strong> Adds position info via positional encoding</li>
                        <li><strong>Parallel Computation:</strong> All positions computed simultaneously</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Implementation</h3>
                    <div class="code-block">
                        <pre>
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_dim, num_heads=8):
        super().__init__()
        self.embed_dim = embed_dim
        self.num_heads = num_heads
        self.head_dim = embed_dim // num_heads

        # Q, K, V projection matrices
        self.qkv_proj = nn.Linear(embed_dim, 3 * embed_dim)
        self.out_proj = nn.Linear(embed_dim, embed_dim)

    def forward(self, x):
        """
        x: [batch, seq_len, embed_dim]
        """
        batch_size, seq_len, _ = x.shape

        # Generate Q, K, V
        qkv = self.qkv_proj(x)  # [batch, seq_len, 3*embed_dim]
        qkv = qkv.reshape(batch_size, seq_len, 3, self.num_heads, self.head_dim)
        qkv = qkv.permute(2, 0, 3, 1, 4)  # [3, batch, num_heads, seq_len, head_dim]
        q, k, v = qkv[0], qkv[1], qkv[2]

        # Scaled dot-product attention
        scores = torch.matmul(q, k.transpose(-2, -1)) / (self.head_dim ** 0.5)
        attn_weights = torch.softmax(scores, dim=-1)

        # Weighted sum
        attn_output = torch.matmul(attn_weights, v)

        # Merge heads
        attn_output = attn_output.transpose(1, 2).contiguous()
        attn_output = attn_output.reshape(batch_size, seq_len, self.embed_dim)

        # Output projection
        output = self.out_proj(attn_output)

        return output, attn_weights
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 Applications</h3>
                    <div class="grid-2">
                        <div>
                            <h4>📝 NLP</h4>
                            <ul>
                                <li>Intra-sentence word relationships</li>
                                <li>BERT, GPT language models</li>
                                <li>Text classification, QA systems</li>
                            </ul>
                        </div>
                        <div>
                            <h4>🖼️ Vision</h4>
                            <ul>
                                <li>Relationships between image patches</li>
                                <li>Vision Transformer (ViT)</li>
                                <li>Image classification, detection</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/self-attention.svg" alt="Self-Attention Mechanism" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">Figure: Connection pattern of self-attention - Global attention within sequence</div>
                </div>

                <div class="highlight-box">
                    <p><strong>💡 Intuition:</strong> In the sentence "The cat sat on the mat", "cat" needs to understand not only itself, but also "sat" (action) and "mat" (location). Self-attention allows each word to capture these contextual relationships.</p>
                </div>

                <div class="tags">
                    <span class="tag">Core</span>
                    <span class="tag application">BERT</span>
                    <span class="tag application">GPT</span>
                    <span class="tag application">ViT</span>
                </div>
            `
        }
    },

    "cross-attention": {
        zh: {
            title: "交叉注意力 (Cross-Attention)",
            subtitle: "Bridging Different Sequences",
            content: `
                <div class="concept-card">
                    <h3>💡 核心概念</h3>
                    <p>交叉注意力用于连接<strong>两个不同的序列</strong>，Query 来自一个序列，而 Key 和 Value 来自另一个序列。这使得模型能够在两个序列之间建立联系。</p>

                    <h4>典型模式</h4>
                    <div class="formula">
                        Q ← 序列A（如：解码器）<br>
                        K, V ← 序列B（如：编码器）<br>
                        <br>
                        CrossAttention = softmax(QK<sup>T</sup>/√d<sub>k</sub>)V
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 主要应用</h3>
                    <ul>
                        <li><strong>机器翻译：</strong>解码器关注源语言编码器输出</li>
                        <li><strong>图文对齐：</strong>文本关注图像特征（CLIP、BLIP）</li>
                        <li><strong>Diffusion 模型：</strong>文本控制图像生成（Stable Diffusion）</li>
                        <li><strong>多模态理解：</strong>跨模态信息融合</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 实现示例</h3>
                    <div class="code-block">
                        <pre>
class CrossAttention(nn.Module):
    def __init__(self, query_dim, context_dim, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = query_dim // num_heads

        # Query 来自一个序列
        self.q_proj = nn.Linear(query_dim, query_dim)
        # Key 和 Value 来自另一个序列
        self.k_proj = nn.Linear(context_dim, query_dim)
        self.v_proj = nn.Linear(context_dim, query_dim)

        self.out_proj = nn.Linear(query_dim, query_dim)

    def forward(self, x, context):
        """
        x: Query序列 [batch, seq_len_q, query_dim]
        context: Key/Value序列 [batch, seq_len_kv, context_dim]
        """
        batch_size = x.shape[0]

        # 生成 Q, K, V
        q = self.q_proj(x)  # 来自序列1
        k = self.k_proj(context)  # 来自序列2
        v = self.v_proj(context)  # 来自序列2

        # 重塑为多头
        q = q.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)
        v = v.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)

        # 注意力计算
        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        attn_weights = torch.softmax(scores, dim=-1)
        attn_output = torch.matmul(attn_weights, v)

        # 合并多头
        attn_output = attn_output.transpose(1, 2).reshape(batch_size, -1, self.num_heads * self.head_dim)
        output = self.out_proj(attn_output)

        return output
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 应用案例</h3>
                    <div class="grid-2">
                        <div class="concept-card" style="background: rgba(99, 102, 241, 0.05);">
                            <h4>🌍 机器翻译</h4>
                            <p>解码器在生成目标语言时，通过交叉注意力关注源语言的编码表示，实现对齐和翻译。</p>
                        </div>
                        <div class="concept-card" style="background: rgba(236, 72, 153, 0.05);">
                            <h4>🎨 Stable Diffusion</h4>
                            <p>文本嵌入通过交叉注意力引导图像生成过程，实现"文本到图像"的精确控制。</p>
                        </div>
                    </div>
                </div>

                <div class="paper-reference">
                    <h4><i class="fas fa-file-alt"></i> 相关论文</h4>
                    <p><strong>"High-Resolution Image Synthesis with Latent Diffusion Models"</strong></p>
                    <p>Rombach et al., CVPR 2022 (Stable Diffusion)</p>
                    <a href="https://arxiv.org/abs/2112.10752" target="_blank" class="paper-link">
                        <i class="fas fa-external-link-alt"></i>
                        阅读论文
                    </a>
                </div>

                <div class="highlight-box">
                    <p><strong>🔍 关键区别：</strong>Self-Attention 中 Q、K、V 都来自同一序列；Cross-Attention 中 Q 来自一个序列，K、V 来自另一个序列。这使得交叉注意力能够实现跨序列、跨模态的信息融合。</p>
                </div>

                <div class="tags">
                    <span class="tag">核心</span>
                    <span class="tag application">翻译</span>
                    <span class="tag application">多模态</span>
                    <span class="tag application">Diffusion</span>
                </div>
            `
        },
        en: {
            title: "Cross-Attention",
            subtitle: "Connecting Different Sequences",
            content: `
                <div class="concept-card">
                    <h3>💡 Core Concept</h3>
                    <p>Cross-attention connects <strong>two different sequences</strong>, where Query comes from one sequence, while Key and Value come from another. This enables the model to establish connections between two sequences.</p>

                    <h4>Typical Pattern</h4>
                    <div class="formula">
                        Q ← Sequence A (e.g., Decoder)<br>
                        K, V ← Sequence B (e.g., Encoder)<br>
                        <br>
                        CrossAttention = softmax(QK<sup>T</sup>/√d<sub>k</sub>)V
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 Main Applications</h3>
                    <ul>
                        <li><strong>Machine Translation:</strong> Decoder attends to source language encoder outputs</li>
                        <li><strong>Vision-Language Alignment:</strong> Text attends to image features (CLIP, BLIP)</li>
                        <li><strong>Diffusion Models:</strong> Text controls image generation (Stable Diffusion)</li>
                        <li><strong>Multimodal Understanding:</strong> Cross-modal information fusion</li>
                    </ul>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Implementation Example</h3>
                    <div class="code-block">
                        <pre>
class CrossAttention(nn.Module):
    def __init__(self, query_dim, context_dim, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = query_dim // num_heads

        # Query from one sequence
        self.q_proj = nn.Linear(query_dim, query_dim)
        # Key and Value from another sequence
        self.k_proj = nn.Linear(context_dim, query_dim)
        self.v_proj = nn.Linear(context_dim, query_dim)

        self.out_proj = nn.Linear(query_dim, query_dim)

    def forward(self, x, context):
        """
        x: Query sequence [batch, seq_len_q, query_dim]
        context: Key/Value sequence [batch, seq_len_kv, context_dim]
        """
        batch_size = x.shape[0]

        # Generate Q, K, V
        q = self.q_proj(x)  # from sequence 1
        k = self.k_proj(context)  # from sequence 2
        v = self.v_proj(context)  # from sequence 2

        # Reshape for multi-head
        q = q.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)
        v = v.reshape(batch_size, -1, self.num_heads, self.head_dim).transpose(1, 2)

        # Attention computation
        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        attn_weights = torch.softmax(scores, dim=-1)
        attn_output = torch.matmul(attn_weights, v)

        # Merge heads
        attn_output = attn_output.transpose(1, 2).reshape(batch_size, -1, self.num_heads * self.head_dim)
        output = self.out_proj(attn_output)

        return output
                        </pre>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 Use Cases</h3>
                    <div class="grid-2">
                        <div class="concept-card" style="background: rgba(99, 102, 241, 0.05);">
                            <h4>🌍 Machine Translation</h4>
                            <p>Decoder attends to source language encodings via cross-attention when generating target language, achieving alignment and translation.</p>
                        </div>
                        <div class="concept-card" style="background: rgba(236, 72, 153, 0.05);">
                            <h4>🎨 Stable Diffusion</h4>
                            <p>Text embeddings guide image generation through cross-attention, enabling precise "text-to-image" control.</p>
                        </div>
                    </div>
                </div>

                <div class="paper-reference">
                    <h4><i class="fas fa-file-alt"></i> Related Paper</h4>
                    <p><strong>"High-Resolution Image Synthesis with Latent Diffusion Models"</strong></p>
                    <p>Rombach et al., CVPR 2022 (Stable Diffusion)</p>
                    <a href="https://arxiv.org/abs/2112.10752" target="_blank" class="paper-link">
                        <i class="fas fa-external-link-alt"></i>
                        Read Paper
                    </a>
                </div>

                <div class="highlight-box">
                    <p><strong>🔍 Key Difference:</strong> In Self-Attention, Q, K, V all come from the same sequence; in Cross-Attention, Q comes from one sequence while K, V come from another. This enables cross-sequence and cross-modal information fusion.</p>
                </div>

                <div class="tags">
                    <span class="tag">Core</span>
                    <span class="tag application">Translation</span>
                    <span class="tag application">Multimodal</span>
                    <span class="tag application">Diffusion</span>
                </div>
            `
        }
    },

    "multi-head": {
        zh: {
            title: "多头注意力 (Multi-Head Attention)",
            subtitle: "Parallel Attention with Multiple Perspectives",
            content: `
                <div class="concept-card">
                    <h3>💡 核心思想</h3>
                    <p>多头注意力通过<strong>并行运行多个注意力机制</strong>，让模型能够从不同的"角度"或"子空间"关注信息。每个头可以学习不同的关系模式。</p>

                    <h4>数学公式</h4>
                    <div class="formula">
                        MultiHead(Q, K, V) = Concat(head<sub>1</sub>, ..., head<sub>h</sub>)W<sup>O</sup>
                        <br><br>
                        其中 head<sub>i</sub> = Attention(QW<sub>i</sub><sup>Q</sup>, KW<sub>i</sub><sup>K</sup>, VW<sub>i</sub><sup>V</sup>)
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 为什么需要多头？</h3>
                    <ul>
                        <li><strong>多样化表示：</strong>每个头关注不同类型的关系（语法、语义、位置等）</li>
                        <li><strong>增强能力：</strong>单个头可能过于简单，多头提供更丰富的表示</li>
                        <li><strong>稳定训练：</strong>多头提供了一定的冗余性和鲁棒性</li>
                        <li><strong>并行效率：</strong>通过减小每个头的维度，总计算量相当</li>
                    </ul>

                    <div class="highlight-box">
                        <p><strong>💡 直觉：</strong>就像人类从多个角度理解事物——语法角度、语义角度、上下文角度等。多头注意力让模型也能这样做。</p>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 参数设置</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>模型</th>
                                <th>总维度 (d<sub>model</sub>)</th>
                                <th>头数 (h)</th>
                                <th>每头维度 (d<sub>k</sub>)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BERT-Base</td>
                                <td>768</td>
                                <td>12</td>
                                <td>64</td>
                            </tr>
                            <tr>
                                <td>BERT-Large</td>
                                <td>1024</td>
                                <td>16</td>
                                <td>64</td>
                            </tr>
                            <tr>
                                <td>GPT-3</td>
                                <td>12288</td>
                                <td>96</td>
                                <td>128</td>
                            </tr>
                            <tr>
                                <td>ViT-Base</td>
                                <td>768</td>
                                <td>12</td>
                                <td>64</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="concept-card">
                    <h3>⚙️ 完整实现</h3>
                    <div class="code-block">
                        <pre>
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"

        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        # 线性投影层
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)

        self.dropout = nn.Dropout(dropout)

    def split_heads(self, x):
        """分割成多头"""
        batch_size, seq_len, d_model = x.shape
        return x.view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)

    def forward(self, query, key, value, mask=None):
        batch_size = query.shape[0]

        # 1. 线性投影
        Q = self.W_q(query)  # [batch, seq_len, d_model]
        K = self.W_k(key)
        V = self.W_v(value)

        # 2. 分割成多头
        Q = self.split_heads(Q)  # [batch, num_heads, seq_len, d_k]
        K = self.split_heads(K)
        V = self.split_heads(V)

        # 3. 缩放点积注意力
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)

        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)

        attn_weights = torch.softmax(scores, dim=-1)
        attn_weights = self.dropout(attn_weights)

        # 4. 加权求和
        attn_output = torch.matmul(attn_weights, V)  # [batch, num_heads, seq_len, d_k]

        # 5. 合并多头
        attn_output = attn_output.transpose(1, 2).contiguous()
        attn_output = attn_output.view(batch_size, -1, self.d_model)

        # 6. 最终线性投影
        output = self.W_o(attn_output)

        return output, attn_weights
                        </pre>
                    </div>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/multi-head-attention.svg" alt="Multi-Head Attention 多头注意力" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">图示：多头注意力的计算流程 - 并行处理多个视角</div>
                </div>

                <div class="tags">
                    <span class="tag">核心</span>
                    <span class="tag application">Transformer</span>
                    <span class="tag">并行</span>
                </div>
            `
        },
        en: {
            title: "Multi-Head Attention",
            subtitle: "Multiple Perspectives in Parallel",
            content: `
                <div class="concept-card">
                    <h3>💡 Core Idea</h3>
                    <p>Multi-head attention runs <strong>multiple attention mechanisms in parallel</strong>, allowing the model to attend to information from different "perspectives" or "subspaces". Each head can learn different relationship patterns.</p>

                    <h4>Mathematical Formula</h4>
                    <div class="formula">
                        MultiHead(Q, K, V) = Concat(head<sub>1</sub>, ..., head<sub>h</sub>)W<sup>O</sup>
                        <br><br>
                        where head<sub>i</sub> = Attention(QW<sub>i</sub><sup>Q</sup>, KW<sub>i</sub><sup>K</sup>, VW<sub>i</sub><sup>V</sup>)
                    </div>
                </div>

                <div class="concept-card">
                    <h3>🎯 Why Multiple Heads?</h3>
                    <ul>
                        <li><strong>Diverse Representations:</strong> Each head attends to different types of relationships (syntax, semantics, position, etc.)</li>
                        <li><strong>Enhanced Capacity:</strong> Single head might be too simple; multiple heads provide richer representations</li>
                        <li><strong>Stable Training:</strong> Multiple heads provide redundancy and robustness</li>
                        <li><strong>Parallel Efficiency:</strong> By reducing per-head dimension, total computation remains comparable</li>
                    </ul>

                    <div class="highlight-box">
                        <p><strong>💡 Intuition:</strong> Like humans understanding things from multiple angles—grammatical, semantic, contextual, etc. Multi-head attention enables models to do the same.</p>
                    </div>
                </div>

                <div class="concept-card">
                    <h3>📊 Parameter Settings</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Total Dim (d<sub>model</sub>)</th>
                                <th>Heads (h)</th>
                                <th>Per-head Dim (d<sub>k</sub>)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BERT-Base</td>
                                <td>768</td>
                                <td>12</td>
                                <td>64</td>
                            </tr>
                            <tr>
                                <td>BERT-Large</td>
                                <td>1024</td>
                                <td>16</td>
                                <td>64</td>
                            </tr>
                            <tr>
                                <td>GPT-3</td>
                                <td>12288</td>
                                <td>96</td>
                                <td>128</td>
                            </tr>
                            <tr>
                                <td>ViT-Base</td>
                                <td>768</td>
                                <td>12</td>
                                <td>64</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="concept-card">
                    <h3>⚙️ Complete Implementation</h3>
                    <div class="code-block">
                        <pre>
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"

        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        # Linear projection layers
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)

        self.dropout = nn.Dropout(dropout)

    def split_heads(self, x):
        """Split into multiple heads"""
        batch_size, seq_len, d_model = x.shape
        return x.view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)

    def forward(self, query, key, value, mask=None):
        batch_size = query.shape[0]

        # 1. Linear projections
        Q = self.W_q(query)  # [batch, seq_len, d_model]
        K = self.W_k(key)
        V = self.W_v(value)

        # 2. Split into multiple heads
        Q = self.split_heads(Q)  # [batch, num_heads, seq_len, d_k]
        K = self.split_heads(K)
        V = self.split_heads(V)

        # 3. Scaled dot-product attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)

        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)

        attn_weights = torch.softmax(scores, dim=-1)
        attn_weights = self.dropout(attn_weights)

        # 4. Weighted sum
        attn_output = torch.matmul(attn_weights, V)  # [batch, num_heads, seq_len, d_k]

        # 5. Merge heads
        attn_output = attn_output.transpose(1, 2).contiguous()
        attn_output = attn_output.view(batch_size, -1, self.d_model)

        # 6. Final linear projection
        output = self.W_o(attn_output)

        return output, attn_weights
                        </pre>
                    </div>
                </div>

                <div class="diagram-container">
                    <img src="assets/diagrams/multi-head-attention.svg" alt="Multi-Head Attention Architecture" style="width: 100%; max-width: 800px; height: auto;">
                    <div class="diagram-caption">Figure: Multi-head attention computation flow - Processing multiple perspectives in parallel</div>
                </div>

                <div class="tags">
                    <span class="tag">Core</span>
                    <span class="tag application">Transformer</span>
                    <span class="tag">Parallel</span>
                </div>
            `
        }
    },

    // 其他章节的占位符 - 后续可以继续扩展
    "masked-attention": {
        zh: {
            title: "因果掩码注意力",
            subtitle: "Masked / Causal Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Masked Attention",
            subtitle: "Causal Attention for Autoregressive Models",
            content: "<p>Content in development...</p>"
        }
    },

    efficient: {
        zh: {
            title: "3. 高效注意力",
            subtitle: "Efficient Attention Mechanisms",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "3. Efficient Attention",
            subtitle: "Optimizing Attention for Scale",
            content: "<p>Content in development...</p>"
        }
    },

    sparse: {
        zh: {
            title: "稀疏注意力",
            subtitle: "Sparse Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Sparse Attention",
            subtitle: "Reducing Quadratic Complexity",
            content: "<p>Content in development...</p>"
        }
    },

    linear: {
        zh: {
            title: "线性注意力",
            subtitle: "Linear Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Linear Attention",
            subtitle: "O(N) Complexity Attention",
            content: "<p>Content in development...</p>"
        }
    },

    flash: {
        zh: {
            title: "FlashAttention",
            subtitle: "Memory-Efficient Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "FlashAttention",
            subtitle: "Fast and Memory-Efficient Exact Attention",
            content: "<p>Content in development...</p>"
        }
    },

    multimodal: {
        zh: {
            title: "4. 多模态注意力",
            subtitle: "Multimodal Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "4. Multimodal Attention",
            subtitle: "Cross-Modal Attention Mechanisms",
            content: "<p>Content in development...</p>"
        }
    },

    "vision-language": {
        zh: {
            title: "图文注意力",
            subtitle: "Vision-Language Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Vision-Language Attention",
            subtitle: "Bridging Vision and Language",
            content: "<p>Content in development...</p>"
        }
    },

    vision: {
        zh: {
            title: "5. 视觉注意力",
            subtitle: "Vision Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "5. Vision Attention",
            subtitle: "Attention for Computer Vision",
            content: "<p>Content in development...</p>"
        }
    },

    vit: {
        zh: {
            title: "ViT 全局注意力",
            subtitle: "Vision Transformer",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "ViT Global Attention",
            subtitle: "Vision Transformer Architecture",
            content: "<p>Content in development...</p>"
        }
    },

    swin: {
        zh: {
            title: "Swin Transformer",
            subtitle: "Window-based Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Swin Transformer",
            subtitle: "Shifted Window Attention",
            content: "<p>Content in development...</p>"
        }
    },

    deformable: {
        zh: {
            title: "可变形注意力",
            subtitle: "Deformable Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "Deformable Attention",
            subtitle: "Adaptive Spatial Sampling",
            content: "<p>Content in development...</p>"
        }
    },

    temporal: {
        zh: {
            title: "6. 时间序列注意力",
            subtitle: "Temporal Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "6. Temporal Attention",
            subtitle: "Attention for Video and Time Series",
            content: "<p>Content in development...</p>"
        }
    },

    spatial3d: {
        zh: {
            title: "7. 3D 空间注意力",
            subtitle: "3D Spatial Attention",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "7. 3D Spatial Attention",
            subtitle: "Attention for 3D Data",
            content: "<p>Content in development...</p>"
        }
    },

    advanced: {
        zh: {
            title: "8. 扩展注意力",
            subtitle: "Advanced Attention Mechanisms",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "8. Advanced Attention",
            subtitle: "Cutting-Edge Attention Variants",
            content: "<p>Content in development...</p>"
        }
    },

    applications: {
        zh: {
            title: "9. 应用场景",
            subtitle: "Real-World Applications",
            content: "<p>内容开发中...</p>"
        },
        en: {
            title: "9. Applications",
            subtitle: "Attention in Practice",
            content: "<p>Content in development...</p>"
        }
    }
};

// 导出内容获取函数
window.getContent = function(section) {
    const lang = window.i18n.getCurrentLang();
    const content = contentData[section];

    if (!content || !content[lang]) {
        return {
            title: "内容加载中...",
            subtitle: "Loading...",
            content: "<p>内容正在准备中...</p>"
        };
    }

    return content[lang];
};
