# /fal-ai/flux-lora/image-to-image

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-lora/image-to-image:
    post:
      summary: /fal-ai/flux-lora/image-to-image
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-lora/image-to-image'
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
                image_url:
                  type: string
                  description: 图片url，接受的文件类型：jpg、jpeg、png、webp、gif、avif
                strength:
                  type: number
                  description: 强度，范围值：0.01-1
              required:
                - prompt
                - image_url
              x-apifox-orders:
                - prompt
                - num_inference_steps
                - guidance_scale
                - num_images
                - enable_safety_checker
                - output_format
                - image_url
                - strength
            example:
              prompt: A photo of a lion sitting on a stone bench
              num_inference_steps: 28
              guidance_scale: 3.5
              num_images: 1
              enable_safety_checker: true
              output_format: jpeg
              image_url: >-
                https://storage.googleapis.com/falserverless/example_inputs/dog.png
              strength: 0.85
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
                request_id: 9b54828d-3c2b-4e0e-ac8c-ac234504015e
                response_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/9b54828d-3c2b-4e0e-ac8c-ac234504015e
                status_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/9b54828d-3c2b-4e0e-ac8c-ac234504015e/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/flux-lora/requests/9b54828d-3c2b-4e0e-ac8c-ac234504015e/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-355348784-run
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
