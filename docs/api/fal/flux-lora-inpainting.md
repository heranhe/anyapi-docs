# /fal-ai/flux-lora/inpainting

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-lora/inpainting:
    post:
      summary: /fal-ai/flux-lora/inpainting
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-lora/inpainting'
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
                mask_url:
                  type: string
                  description: 蒙版url，接受的文件类型：jpg、jpeg、png、webp、gif、avif
              required:
                - prompt
                - image_url
                - mask_url
              x-apifox-orders:
                - prompt
                - num_inference_steps
                - guidance_scale
                - num_images
                - enable_safety_checker
                - output_format
                - image_url
                - strength
                - mask_url
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
              mask_url: >-
                https://storage.googleapis.com/falserverless/example_inputs/dog_mask.png
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties: {}
                x-apifox-orders: []
              examples:
                '1':
                  summary: 成功示例
                  value:
                    status: IN_QUEUE
                    request_id: acf05732-7cb3-445b-9f39-fdaeccb1d730
                    response_url: >-
                      https://queue.fal.run/fal-ai/flux-pro/requests/acf05732-7cb3-445b-9f39-fdaeccb1d730
                    status_url: >-
                      https://queue.fal.run/fal-ai/flux-pro/requests/acf05732-7cb3-445b-9f39-fdaeccb1d730/status
                    cancel_url: >-
                      https://queue.fal.run/fal-ai/flux-pro/requests/acf05732-7cb3-445b-9f39-fdaeccb1d730/cancel
                    logs: null
                    metrics: {}
                    queue_position: 0
                '2':
                  summary: 成功示例
                  value:
                    status: IN_QUEUE
                    request_id: 72a35804-b407-4b09-894b-3a35559c38f9
                    response_url: >-
                      https://queue.fal.run/fal-ai/flux-lora/requests/72a35804-b407-4b09-894b-3a35559c38f9
                    status_url: >-
                      https://queue.fal.run/fal-ai/flux-lora/requests/72a35804-b407-4b09-894b-3a35559c38f9/status
                    cancel_url: >-
                      https://queue.fal.run/fal-ai/flux-lora/requests/72a35804-b407-4b09-894b-3a35559c38f9/cancel
                    logs: null
                    metrics: {}
                    queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-355349527-run
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
