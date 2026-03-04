# /fal-ai/veo3/fast

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/veo3/fast:
    post:
      summary: /fal-ai/veo3/fast
      deprecated: false
      description: 官方文档地址：https://fal.ai/models/fal-ai/veo3/fast
      tags:
        - Fal-ai 聚合平台/falai-veo3 视频生成
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                prompt:
                  type: string
                  description: 描述要生成的视频的文本提示
                aspect_ratio:
                  type: string
                  description: 生成视频的宽高比。如果设置为 1：1，视频将被外绘。默认值："16:9"，范围[16:9,9:16,1:1]
                duration:
                  type: string
                  description: 生成视频的时长（以秒为单位）默认值："8s"
                enhance_prompt:
                  type: boolean
                  description: 是否增强视频生成默认值：true
                auto_fix:
                  type: boolean
                  description: 是否通过重写来自动尝试修复未通过内容策略或其他验证检查的提示默认值：true
                resolution:
                  type: string
                  description: 生成视频的分辨率默认值："720p"  范围值[720p，1080p]
                generate_audio:
                  type: boolean
                  description: 是否为视频生成音频。如果为 false，则将减少 %33 的积分。默认值：true
              required:
                - prompt
              x-apifox-orders:
                - prompt
                - aspect_ratio
                - duration
                - enhance_prompt
                - auto_fix
                - resolution
                - generate_audio
            example:
              prompt: >-
                A casual street interview on a busy New York City sidewalk in
                the afternoon. The interviewer holds a plain, unbranded
                microphone and asks: Have you seen Google's new Veo3 model It is
                a super good model. Person replies: Yeah I saw it, it's already
                available on fal. It's crazy good.
              aspect_ratio: '16:9'
              duration: 4s
              enhance_prompt: true
              auto_fix: true
              resolution: 720p
              generate_audio: false
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties: {}
              example:
                status: IN_QUEUE
                request_id: fabda298-3a7c-43f6-ba3a-2bde5b344173
                response_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/fabda298-3a7c-43f6-ba3a-2bde5b344173
                status_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/fabda298-3a7c-43f6-ba3a-2bde5b344173/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/fabda298-3a7c-43f6-ba3a-2bde5b344173/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
        x-200:成功:
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  request_id:
                    type: string
                  response_url:
                    type: string
                  status_url:
                    type: string
                  cancel_url:
                    type: string
                  logs:
                    type: 'null'
                  metrics:
                    type: object
                    properties: {}
                  queue_position:
                    type: integer
                required:
                  - status
                  - request_id
                  - response_url
                  - status_url
                  - cancel_url
                  - logs
                  - metrics
                  - queue_position
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台/falai-veo3 视频生成
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-352888996-run
components:
  schemas: {}
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
servers:
  - url: https://www.anyapi.vip
    description: 正式环境
security:
  - bearer: []

```
