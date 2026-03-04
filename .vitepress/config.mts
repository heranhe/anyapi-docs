import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'AnyAPI',
    description: 'AnyAPI 接口对接文档 — 一键接入全球 AI 模型',
    lang: 'zh-CN',

    head: [
        ['meta', { name: 'theme-color', content: '#6366f1' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],

    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'AnyAPI',

        nav: [
            { text: '快速开始', link: '/guide/-api' },
            { text: 'API 参考', link: '/api/chat/chatgpt/chat/' },
            { text: '插件教程', link: '/plugins/' },
            { text: '官网', link: 'https://www.anyapi.vip' },
        ],

        sidebar: {
            '/': [
                {
                    text: '入门',
                    items: [
                        { text: '引言', link: '/引言' },
                        { text: '发出请求', link: '/发出请求' },
                        { text: '在线调试说明', link: '/在线调试说明' },
                    ]
                },
                {
                    text: '中转站基本介绍',
                    collapsed: false,
                    items: [
                        { text: 'API 快速开始指南', link: '/guide/api快速开始指南' },
                        { text: '联系客服', link: '/guide/联系客服' },
                        { text: '分组详细表格', link: '/guide/分组详细表格' },
                        { text: '分组的特殊性及价格差异', link: '/guide/分组的特殊性及价格差异' },
                        { text: '如何新建指定分组的令牌', link: '/guide/如何新建指定分组的令牌' },
                        { text: '代理接口调用地址', link: '/guide/代理接口调用地址' },
                        { text: 'API Key 额度查询', link: '/guide/api-key额度查询服务' },
                        { text: '免费AI聊天项目', link: '/guide/免费ai聊天项目导航' },
                    ]
                },
                {
                    text: '帮助中心',
                    items: [
                        { text: 'HTTP 状态码说明', link: '/help/http状态码及其含义' },
                    ]
                }
            ],

            '/api/': [
                {
                    text: 'ChatGPT 接口',
                    collapsed: false,
                    items: [
                        { text: '聊天补全（流式）', link: '/api/chat/chatgpt/chat/创建聊天补全-流式' },
                        { text: '聊天补全（非流）', link: '/api/chat/chatgpt/chat/创建聊天补全-非流' },
                        { text: '聊天识图（流式）', link: '/api/chat/chatgpt/chat/创建聊天识图-流式' },
                        { text: '聊天识图（非流）', link: '/api/chat/chatgpt/chat/创建聊天识图-非流' },
                        { text: 'Function Calling', link: '/api/chat/chatgpt/chat/function-calling' },
                        { text: '结构化输出', link: '/api/chat/chatgpt/chat/创建结构化输出' },
                        { text: '列出模型', link: '/api/chat/chatgpt/chat/列出模型' },
                        { text: 'Web 搜索', link: '/api/chat/chatgpt/search/web搜索' },
                        { text: '创建嵌入', link: '/api/chat/chatgpt/embeddings/创建嵌入' },
                    ]
                },
                {
                    text: '音频接口',
                    collapsed: true,
                    items: [
                        { text: 'GPT-4o Audio', link: '/api/chat/chatgpt/audio/gpt-4o-audio' },
                        { text: '音频转文字', link: '/api/chat/chatgpt/audio/音频转文字' },
                        { text: '创建语音 TTS', link: '/api/chat/chatgpt/audio/创建语音tts' },
                    ]
                },
                {
                    text: 'Claude 接口',
                    collapsed: true,
                    items: [
                        { text: '聊天补全（流式）', link: '/api/chat/claude/native/claude聊天补全-流式' },
                        { text: 'Claude 思维聊天', link: '/api/chat/claude/native/claude思维聊天' },
                        { text: 'Chat 兼容（流式）', link: '/api/chat/claude/compat/claude-chat兼容-流式' },
                        { text: 'Chat 兼容（非流）', link: '/api/chat/claude/compat/claude-chat兼容-非流' },
                    ]
                },
                {
                    text: 'Gemini 接口',
                    collapsed: true,
                    items: [
                        { text: '文本生成（原生）', link: '/api/chat/gemini/native/gemini文本生成' },
                        { text: '聊天（兼容格式）', link: '/api/chat/gemini/compat/gemini-chat兼容' },
                    ]
                },
                {
                    text: 'Responses API',
                    collapsed: true,
                    items: [
                        { text: 'Responses API', link: '/api/chat/responses/responses-api' },
                    ]
                },
                {
                    text: 'Midjourney',
                    collapsed: true,
                    items: [
                        { text: '提交 Imagine 任务', link: '/api/image/midjourney/mj提交imagine' },
                        { text: '查询任务', link: '/api/image/midjourney/mj查询任务' },
                        { text: '执行 Action', link: '/api/image/midjourney/mj执行action' },
                    ]
                },
                {
                    text: '绘画模型',
                    collapsed: true,
                    items: [
                        { text: 'GPT Image 创建', link: '/api/image/gpt-image/创建gpt-image-1' },
                        { text: 'FLUX 创建', link: '/api/image/flux/flux创建' },
                        { text: 'Ideogram 文生图', link: '/api/image/ideogram/ideogram文生图' },
                    ]
                },
                {
                    text: '视频模型',
                    collapsed: true,
                    items: [
                        { text: '创建视频', link: '/api/video/创建视频' },
                        { text: '查询视频任务', link: '/api/video/查询视频任务' },
                    ]
                },
            ],

            '/code/': [
                {
                    text: 'Python',
                    items: [
                        { text: 'Python 基础对话', link: '/code/python/python基础对话' },
                        { text: 'Python 识图', link: '/code/python/python使用gpt-4o识别图片' },
                        { text: 'Python 连续对话', link: '/code/python/python连续对话' },
                        { text: 'Python openai 官方库', link: '/code/python/python-openai官方库' },
                        { text: '语音转文本', link: '/code/python/python使用语音转文本' },
                        { text: '文本转语音', link: '/code/python/python使用文本转语音' },
                        { text: 'Embeddings 向量化', link: '/code/python/python使用embeddings向量化' },
                        { text: 'DALL-E 绘图', link: '/code/python/python调用dall-e' },
                        { text: 'Function Calling', link: '/code/python/python-function-calling' },
                    ]
                },
                {
                    text: 'Node.js',
                    items: [
                        { text: 'Node.js 基础对话', link: '/code/nodejs/nodejs基础对话' },
                    ]
                }
            ],

            '/plugins/': [
                {
                    text: '编辑器/IDE',
                    items: [
                        { text: 'Cursor', link: '/plugins/cursor配置教程' },
                        { text: 'Cline', link: '/plugins/cline配置教程' },
                        { text: 'aider', link: '/plugins/aider配置教程' },
                        { text: 'CLAUDE DEV', link: '/plugins/claude-dev配置教程' },
                    ]
                },
                {
                    text: 'AI 客户端',
                    items: [
                        { text: 'Cherry Studio', link: '/plugins/cherry-studio配置教程' },
                        { text: 'ChatBox', link: '/plugins/chatbox使用' },
                        { text: 'lobechat', link: '/plugins/lobechat设置教程' },
                        { text: 'nextchat', link: '/plugins/nextchat设置教程' },
                    ]
                },
                {
                    text: '翻译/浏览器',
                    items: [
                        { text: '沉浸式翻译', link: '/plugins/沉浸式翻译设置' },
                    ]
                },
                {
                    text: '其他工具',
                    items: [
                        { text: 'dify', link: '/plugins/dify添加模型' },
                        { text: 'zotero', link: '/plugins/zotero-gpt配置' },
                    ]
                }
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/heranhe' }
        ],

        footer: {
            message: 'AnyAPI — 专业的 AI 接口聚合服务',
            copyright: 'Copyright © 2025 AnyAPI'
        },

        search: {
            provider: 'local'
        },

        editLink: undefined,
    }
})
