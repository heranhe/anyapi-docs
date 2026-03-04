# /fal-ai/flux-lora

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-lora:
    post:
      summary: /fal-ai/flux-lora
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-lora'
      tags:
        - Fal-ai 聚合平台
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                prompt:
                  type: string
                  description: 提示词
                image_size:
                  type: string
                  description: >-
                    图片尺寸，枚举值：square、square
                    pro、landscape_4_3、landscape_16_9、portrait_3_4
                num_inference_steps:
                  type: integer
                  description: 范围值：1-50
                guidance_scale:
                  type: number
                  description: 范围值：0-35
                num_images:
                  type: integer
                  description: 图片数量，范围值：1-4
                enable_safety_checker:
                  type: boolean
                  description: 启用安全检查，默认值：true
                output_format:
                  type: string
                  description: 输出图片格式，支持：jpeg、png
              required:
                - prompt
              x-apifox-orders:
                - prompt
                - image_size
                - num_inference_steps
                - guidance_scale
                - num_images
                - enable_safety_checker
                - output_format
            example:
              prompt: >-
                Extreme close-up of a single tiger eye, direct frontal view.
                Detailed iris and pupil. Sharp focus on eye texture and color.
                Natural lighting to capture authentic eye shine and depth. The
                word "FLUX" is painted over it in big, white brush strokes with
                visible texture.
              image_size: landscape_4_3
              num_inference_steps: 28
              guidance_scale: 3.5
              num_images: 1
              enable_safety_checker: true
              output_format: jpeg
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties: {}
                x-apifox-orders: []
              example:
                status: IN_QUEUE
                request_id: 07e0be22-3380-4699-a377-48729443435c
                response_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/07e0be22-3380-4699-a377-48729443435c
                status_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/07e0be22-3380-4699-a377-48729443435c/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/07e0be22-3380-4699-a377-48729443435c/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-355348632-run
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
