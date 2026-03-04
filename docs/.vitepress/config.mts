import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'AnyAPI',
    description: 'AnyAPI 接口对接文档 — 一键接入全球 AI 模型',
    lang: 'zh-CN',

    head: [
        ['meta', { name: 'theme-color', content: '#6366f1' }],
    ],

    themeConfig: {
        siteTitle: 'AnyAPI',

        nav: [
            { text: '快速开始', link: '/guide/api快速开始指南' },
            { text: 'API 参考', link: '/api/chat/chatgpt/chat/创建聊天补全-流式' },
            { text: '教程', link: '/plugins/Cursor配置教程' },
            { text: '代码示例', link: '/code/python/python基础对话' },
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
                    text: '基本介绍',
                    collapsed: false,
                    items: [
                        { text: 'API 快速开始指南', link: '/guide/api快速开始指南' },
                        { text: '分组详细表格', link: '/guide/分组详细表格' },
                        { text: '分组的特殊性及价格差异', link: '/guide/分组的特殊性及价格差异' },
                        { text: '如何新建指定分组的令牌', link: '/guide/如何新建指定分组的令牌' },
                        { text: '代理接口调用地址', link: '/guide/代理接口调用地址' },
                        { text: 'API Key 额度查询', link: '/guide/api-key额度查询服务' },
                        { text: '免费AI聊天项目', link: '/guide/免费ai聊天项目导航' },
                        { text: '联系客服', link: '/guide/联系客服' },
                    ]
                },
                {
                    text: '帮助中心',
                    collapsed: true,
                    items: [
                        { text: 'HTTP 状态码说明', link: '/help/http状态码及其含义' },
                        { text: 'AI返回字段-思考相关', link: '/help/AI返回字段-思考相关' },
                        { text: '自建图床API', link: '/help/自建图床API' },
                    ]
                }
            ],

            '/plugins/': [
                {
                    text: '编程工具',
                    items: [
                        { text: 'Cursor', link: '/plugins/cursor配置教程' },
                        { text: 'Cline', link: '/plugins/cline配置教程' },
                        { text: 'Claude Code', link: '/plugins/Claude-Code安装使用教程' },
                        { text: 'CLAUDE DEV', link: '/plugins/claude-dev配置教程' },
                        { text: 'aider', link: '/plugins/aider配置教程' },
                        { text: 'Codex', link: '/plugins/Codex配置教程' },
                        { text: 'opencode', link: '/plugins/opencode配置教程' },
                        { text: 'Gemini CLI', link: '/plugins/Gemini-CLI中转站配置使用教程' },
                    ]
                },
                {
                    text: 'AI 客户端',
                    items: [
                        { text: 'Cherry Studio', link: '/plugins/cherry-studio配置教程' },
                        { text: 'Cherry Studio MCP', link: '/plugins/CherryStudio调用claude-MCP' },
                        { text: 'Cherry Studio 4K', link: '/plugins/Cherry-Studio配置banana-pro-4K教程' },
                        { text: 'Cherry Studio o4推理', link: '/plugins/CherryStudio配置o4推理级别' },
                        { text: 'ChatBox', link: '/plugins/chatbox使用' },
                        { text: 'lobechat', link: '/plugins/lobechat设置教程' },
                        { text: 'nextchat', link: '/plugins/nextchat设置教程' },
                        { text: 'RikkaHub', link: '/plugins/RikkaHub配置教程' },
                    ]
                },
                {
                    text: '工作流平台',
                    items: [
                        { text: 'dify 添加模型', link: '/plugins/dify添加模型' },
                        { text: 'N8N 工作流', link: '/plugins/N8N工作流使用中转API教程' },
                        { text: 'N8N 图片生成视频', link: '/plugins/n8n获取本地图片生成视频例子' },
                        { text: 'coze 工作流', link: '/plugins/coze工作流使用中转API教程' },
                        { text: '扣子工作流', link: '/plugins/扣子工作流简单配置' },
                    ]
                },
                {
                    text: '翻译/浏览器/其他',
                    items: [
                        { text: '沉浸式翻译', link: '/plugins/沉浸式翻译设置' },
                        { text: 'ChatGPT Sidebar', link: '/plugins/浏览器插件ChatGPT-Sidebar' },
                        { text: 'chatgpt-on-wechat', link: '/plugins/chatgpt-on-wechat配置教程' },
                        { text: 'GPT Academic', link: '/plugins/GPT-Academic学术优化配置教程' },
                        { text: '开源 gpt_academic', link: '/plugins/开源gpt-academic' },
                        { text: 'zotero GPT', link: '/plugins/zotero-gpt配置' },
                        { text: 'OpenClaw', link: '/plugins/OpenClaw-Clawdbot自定义中转站配置教程' },
                        { text: 'OpenClaw 最新版', link: '/plugins/OpenClaw最新版自定义中转站配置教程' },
                    ]
                }
            ],

            '/code/': [
                {
                    text: 'Python',
                    items: [
                        { text: '基础对话', link: '/code/python/python基础对话' },
                        { text: '连续对话', link: '/code/python/python连续对话' },
                        { text: 'openai官方库', link: '/code/python/python-openai官方库' },
                        { text: '流式输出', link: '/code/python/python库流式输出' },
                        { text: 'request流式输出', link: '/code/python/python-request流式输出demo' },
                        { text: 'GPT-4o 识别图片', link: '/code/python/python使用gpt-4o识别图片' },
                        { text: '本地图片识别', link: '/code/python/Python使用gpt-4o识别图片-本地图片' },
                        { text: 'Claude 识别图片', link: '/code/python/Python使用Claude识别图片' },
                        { text: 'gpt-image-1', link: '/code/python/python使用gpt-image-1创建编辑图片' },
                        { text: '语音转文本', link: '/code/python/python使用语音转文本' },
                        { text: '文本转语音', link: '/code/python/python使用文本转语音' },
                        { text: 'Embeddings', link: '/code/python/python使用embeddings向量化' },
                        { text: 'DALL-E', link: '/code/python/python调用dall-e' },
                        { text: 'Function Calling', link: '/code/python/python-function-calling' },
                        { text: 'langchain', link: '/code/python/python简单langchain调用openai' },
                        { text: 'llama_index', link: '/code/python/python-llama-index配置' },
                        { text: 'realtime 模型', link: '/code/python/gpt-realtime模型调用' },
                    ]
                },
                {
                    text: 'Node.js',
                    items: [
                        { text: '基础对话', link: '/code/nodejs/nodejs基础对话' },
                    ]
                },
                {
                    text: 'PHP',
                    items: [
                        { text: '图片编辑 demo', link: '/code/php/php使用图片编辑demo' },
                    ]
                }
            ],

            '/api/': [
                {
                    text: 'ChatGPT 聊天',
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
                    text: '音频',
                    collapsed: true,
                    items: [
                        { text: 'GPT-4o Audio', link: '/api/chat/chatgpt/audio/gpt-4o-audio' },
                        { text: '音频转文字', link: '/api/chat/chatgpt/audio/音频转文字' },
                        { text: '创建语音 TTS', link: '/api/chat/chatgpt/audio/创建语音tts' },
                    ]
                },
                {
                    text: 'Claude',
                    collapsed: true,
                    items: [
                        { text: '原生聊天（流式）', link: '/api/chat/claude/native/claude聊天补全-流式' },
                        { text: '思维聊天', link: '/api/chat/claude/native/claude思维聊天' },
                        { text: 'Chat兼容（流式）', link: '/api/chat/claude/compat/claude-chat兼容-流式' },
                        { text: 'Chat兼容（非流）', link: '/api/chat/claude/compat/claude-chat兼容-非流' },
                    ]
                },
                {
                    text: 'Gemini',
                    collapsed: true,
                    items: [
                        { text: '文本生成（原生）', link: '/api/chat/gemini/native/gemini文本生成' },
                        { text: '聊天（兼容）', link: '/api/chat/gemini/compat/gemini-chat兼容' },
                    ]
                },
                {
                    text: 'Responses API',
                    collapsed: true,
                    items: [
                        { text: 'Responses API', link: '/api/chat/responses/responses-api' },
                        { text: 'Responses vs Chat 对比', link: '/chat/responses/Responses-API与Chat-API对比' },
                    ]
                },
                {
                    text: 'Midjourney',
                    collapsed: true,
                    items: [
                        { text: '提交 Imagine', link: '/api/image/midjourney/mj提交imagine' },
                        { text: '查询任务', link: '/api/image/midjourney/mj查询任务' },
                        { text: '执行 Action', link: '/api/image/midjourney/mj执行action' },
                    ]
                },
                {
                    text: '绘画模型',
                    collapsed: true,
                    items: [
                        { text: 'GPT Image', link: '/api/image/gpt-image/创建gpt-image-1' },
                        { text: 'FLUX', link: '/api/image/flux/flux创建' },
                        { text: 'Ideogram', link: '/api/image/ideogram/ideogram文生图' },
                    ]
                },
                {
                    text: '视频模型',
                    collapsed: true,
                    items: [
                        { text: '创建视频', link: '/api/video/创建视频' },
                        { text: '查询任务', link: '/api/video/查询视频任务' },
                    ]
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/heranhe' }
        ],

        footer: {
            message: 'AnyAPI — 专业的 AI 接口聚合服务',
            copyright: 'Copyright © 2025 AnyAPI'
        },

        search: { provider: 'local' },
    }
})
