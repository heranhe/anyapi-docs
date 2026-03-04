import { defineConfig } from 'vitepress'

// 所有章节合并成一个完整的侧边栏
const fullSidebar = [
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
        ]
    },
    {
        text: '编程工具教程',
        collapsed: true,
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
        text: 'AI 客户端教程',
        collapsed: true,
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
        text: '帮助中心',
        collapsed: true,
        items: [
            { text: 'HTTP 状态码说明', link: '/help/http状态码及其含义' },
            { text: 'AI返回字段-思考相关', link: '/help/AI返回字段-思考相关' },
            { text: '自建图床API', link: '/help/自建图床API' },
        ]
    },
    {
        text: 'ChatGPT 聊天',
        collapsed: true,
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
        ]
    },
    {
        text: 'GPTs 相关',
        collapsed: true,
        items: [
            { text: 'GPTs对话', link: '/api/gpts/GPTs对话' },
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
        text: '视频模型（OpenAI格式）',
        collapsed: true,
        items: [
            { text: '创建视频', link: '/api/video/创建视频' },
            { text: '查询任务', link: '/api/video/查询视频任务' },
        ]
    },
    {
        text: 'Sora 视频',
        collapsed: true,
        items: [
            { text: 'chat格式创建视频', link: '/api/video/sora/chat格式创建视频' },
            { text: '创建视频-sora-2', link: '/api/video/sora/创建视频-sora-2' },
            { text: '创建视频带图片-sora-2', link: '/api/video/sora/创建视频带图片-sora-2' },
            { text: '查询任务', link: '/api/video/sora/查询任务' },
        ]
    },
    {
        text: 'Luma 视频',
        collapsed: true,
        items: [
            { text: '提交生成视频任务', link: '/api/video/luma/提交生成视频任务' },
            { text: '扩展视频', link: '/api/video/luma/扩展视频' },
            { text: '查询单个任务', link: '/api/video/luma/查询单个任务' },
            { text: '批量获取任务', link: '/api/video/luma/批量获取任务' },
        ]
    },
    {
        text: 'Runway 视频',
        collapsed: true,
        items: [
            { text: '提交视频生成任务', link: '/api/video/runway/提交视频生成任务' },
            { text: '查询视频任务', link: '/api/video/runway/查询视频任务' },
        ]
    },
    {
        text: '海螺视频',
        collapsed: true,
        items: [
            { text: '提交视频生成任务', link: '/api/video/hailuo/提交视频生成任务' },
            { text: '图生视频', link: '/api/video/hailuo/图生视频' },
            { text: '首尾帧视频', link: '/api/video/hailuo/首尾帧视频' },
            { text: '视频任务状态查询', link: '/api/video/hailuo/视频任务状态查询' },
        ]
    },
    {
        text: '豆包视频',
        collapsed: true,
        items: [
            { text: '文生视频', link: '/api/video/doubao/文生视频' },
            { text: '图生视频-首帧', link: '/api/video/doubao/图生视频-首帧' },
            { text: '查询单个任务', link: '/api/video/doubao/查询单个任务' },
        ]
    },
    {
        text: 'Grok 视频',
        collapsed: true,
        items: [
            { text: '创建视频', link: '/api/video/grok/创建视频' },
            { text: '查询任务', link: '/api/video/grok/查询任务' },
        ]
    },
    {
        text: 'Veo 视频',
        collapsed: true,
        items: [
            { text: 'openai格式下载视频', link: '/api/video/veo/openai格式下载视频' },
        ]
    },
    {
        text: '腾讯AIGC视频',
        collapsed: true,
        items: [
            { text: '创建任务', link: '/api/video/tencent/创建任务' },
            { text: '获取请求结果', link: '/api/video/tencent/获取请求结果' },
        ]
    },
    {
        text: '文生音乐 Suno',
        collapsed: true,
        items: [
            { text: '生成歌曲-灵感模式', link: '/api/suno/生成歌曲-灵感模式' },
            { text: '生成歌曲-自定义模式', link: '/api/suno/生成歌曲-自定义模式' },
            { text: '生成歌曲-续写模式', link: '/api/suno/生成歌曲-续写模式' },
            { text: '生成歌曲-歌手风格', link: '/api/suno/生成歌曲-歌手风格' },
            { text: '生成歌词', link: '/api/suno/生成歌词' },
            { text: '批量获取任务', link: '/api/suno/批量获取任务' },
            { text: '查询单个任务', link: '/api/suno/查询单个任务' },
        ]
    },
    {
        text: 'Rerank 重排序',
        collapsed: true,
        items: [
            { text: '重排序', link: '/api/rerank/重排序' },
        ]
    },
    {
        text: '可灵 Kling 视频',
        collapsed: true,
        items: [
            { text: '文生视频', link: '/api/kling/video/文生视频' },
            { text: '查询文生视频任务', link: '/api/kling/video/查询文生视频任务' },
            { text: '图生视频', link: '/api/kling/video/图生视频' },
            { text: '查询图生视频任务', link: '/api/kling/video/查询图生视频任务' },
            { text: 'Omni-Video', link: '/api/kling/video/Omni-Video' },
            { text: '多图参考生视频', link: '/api/kling/video/多图参考生视频' },
            { text: '视频延长', link: '/api/kling/video/视频延长' },
            { text: '视频特效', link: '/api/kling/video/视频特效' },
        ]
    },
    {
        text: '可灵 Kling 图像',
        collapsed: true,
        items: [
            { text: '图像生成', link: '/api/kling/image/图像生成' },
            { text: '多图参考生图', link: '/api/kling/image/多图参考生图' },
            { text: '扩图', link: '/api/kling/image/扩图' },
            { text: 'Omni-Image', link: '/api/kling/image/Omni-Image' },
            { text: '图像识别', link: '/api/kling/image/图像识别' },
        ]
    },
    {
        text: '可灵 Kling 其他',
        collapsed: true,
        items: [
            { text: '文生音效', link: '/api/kling/audio/文生音效' },
            { text: '视频生音效', link: '/api/kling/audio/视频生音效' },
            { text: '语音合成', link: '/api/kling/audio/语音合成' },
            { text: '虚拟试穿', link: '/api/kling/other/虚拟试穿' },
            { text: '数字人', link: '/api/kling/other/数字人' },
            { text: '对口型', link: '/api/kling/other/对口型' },
            { text: '自定义音色', link: '/api/kling/other/自定义音色' },
            { text: '动作控制', link: '/api/kling/other/动作控制' },
        ]
    },
    {
        text: '海螺 Minimax 平台',
        collapsed: true,
        items: [
            { text: '同步语音合成V2', link: '/api/minimax/同步语音合成V2' },
            { text: '创建异步语音合成任务V2', link: '/api/minimax/创建异步语音合成任务V2' },
            { text: '音色快速复刻', link: '/api/minimax/音色快速复刻' },
            { text: '音色设计', link: '/api/minimax/音色设计' },
            { text: '文生图生视频', link: '/api/minimax/文生图生视频' },
            { text: '首尾帧生成视频', link: '/api/minimax/首尾帧生成视频' },
            { text: '查询视频生成任务', link: '/api/minimax/查询视频生成任务' },
            { text: '文本合成', link: '/api/minimax/文本合成' },
        ]
    },
    {
        text: '官方VIDU',
        collapsed: true,
        items: [
            { text: '创建文生视频任务', link: '/api/vidu/创建文生视频任务' },
            { text: '创建图生视频任务', link: '/api/vidu/创建图生视频任务' },
            { text: '创建首尾帧生视频任务', link: '/api/vidu/创建首尾帧生视频任务' },
            { text: '创建参考生视频任务', link: '/api/vidu/创建参考生视频任务' },
            { text: '创建图片生成任务', link: '/api/vidu/创建图片生成任务' },
            { text: '创建文生音频任务', link: '/api/vidu/创建文生音频任务' },
            { text: '语音合成', link: '/api/vidu/语音合成' },
            { text: '获取请求结果', link: '/api/vidu/获取请求结果' },
        ]
    },
    {
        text: 'Replicate 聚合',
        collapsed: true,
        items: [
            { text: '查询任务', link: '/api/replicate/查询任务' },
            { text: '创建任务-通过模型version', link: '/api/replicate/创建任务-通过模型version' },
            { text: 'stable-diffusion', link: '/api/replicate/stability-ai_stable-diffusion' },
            { text: 'sdxl', link: '/api/replicate/stability-ai_sdxl' },
            { text: 'flux-schnell-lora', link: '/api/replicate/lucataco_flux-schnell-lora' },
            { text: 'flux-kontext-pro', link: '/api/replicate/flux-kontext-pro' },
            { text: 'flux-kontext-max', link: '/api/replicate/flux-kontext-max' },
            { text: 'flux-fill-dev', link: '/api/replicate/flux-fill-dev' },
            { text: 'ideogram-v2-turbo', link: '/api/replicate/ideogram-ai_ideogram-v2-turbo' },
            { text: 'imagen-4', link: '/api/replicate/google_imagen-4' },
        ]
    },
    {
        text: 'Fal-ai 聚合',
        collapsed: true,
        items: [
            { text: '获取请求结果', link: '/api/fal/获取请求结果' },
            { text: 'veo3', link: '/api/fal/veo3' },
            { text: 'veo3-fast', link: '/api/fal/veo3-fast' },
            { text: 'veo3 图生视频', link: '/api/fal/veo3-image-to-video' },
            { text: 'flux-1-dev', link: '/api/fal/flux-1-dev' },
            { text: 'flux-pro-kontext', link: '/api/fal/flux-pro-kontext' },
            { text: 'flux-pro-kontext-max', link: '/api/fal/flux-pro-kontext-max' },
            { text: 'flux-lora', link: '/api/fal/flux-lora' },
            { text: 'kling-video-v2.5', link: '/api/fal/kling-video-v2.5-turbo-text-to-video' },
            { text: 'seedream-v4', link: '/api/fal/seedream-v4-text-to-image' },
        ]
    },
    {
        text: '系统API',
        collapsed: true,
        items: [
            { text: '获取账号信息', link: '/api/system/获取账号信息' },
            { text: '获取令牌列表', link: '/api/system/获取令牌列表' },
            { text: '新增令牌', link: '/api/system/新增令牌' },
            { text: '修改令牌', link: '/api/system/修改令牌' },
            { text: '搜索令牌', link: '/api/system/搜索令牌' },
            { text: '删除令牌', link: '/api/system/删除令牌' },
            { text: '获取令牌支持模型', link: '/api/system/获取令牌支持模型' },
            { text: '获取令牌使用情况', link: '/api/system/获取令牌使用情况' },
        ]
    },
    {
        text: '工具',
        collapsed: true,
        items: [
            { text: '上传图片到图床', link: '/api/tools/上传图片到图床' },
        ]
    },

    {
        text: '工作流平台教程',
        collapsed: true,
        items: [
            { text: 'dify 添加模型', link: '/plugins/dify添加模型' },
            { text: 'N8N 工作流', link: '/plugins/N8N工作流使用中转API教程' },
            { text: 'N8N 图片生成视频', link: '/plugins/n8n获取本地图片生成视频例子' },
            { text: 'coze 工作流', link: '/plugins/coze工作流使用中转API教程' },
            { text: '扣子工作流', link: '/plugins/扣子工作流简单配置' },
        ]
    },
    {
        text: '其他插件教程',
        collapsed: true,
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
    },
    {
        text: 'Python 代码示例',
        collapsed: true,
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
        text: 'Node.js & PHP',
        collapsed: true,
        items: [
            { text: 'Node.js 基础对话', link: '/code/nodejs/nodejs基础对话' },
            { text: 'PHP 图片编辑 demo', link: '/code/php/php使用图片编辑demo' },
        ]
    },
]

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
            { text: '教程', link: '/plugins/cursor配置教程' },
            { text: '代码示例', link: '/code/python/python基础对话' },
            { text: '官网', link: 'https://www.anyapi.vip' },
        ],

        // 所有路径共用同一套完整侧边栏
        sidebar: fullSidebar,

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
