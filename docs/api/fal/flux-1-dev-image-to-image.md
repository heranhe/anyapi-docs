# /fal-ai/flux-1/dev/image-to-image

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-1/dev/image-to-image:
    post:
      summary: /fal-ai/flux-1/dev/image-to-image
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-1/dev/image-to-image'
      tags:
        - Fal-ai 聚合平台
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                image_url:
                  type: string
                  description: >-
                    在此处拖放文件，或提供 base64 编码的数据
                    URL接受的文件类型：jpg、jpeg、png、webp、gif、avif
                strength:
                  type: number
                  description: 初始图像的强度。强度值越高，该模型的效果越好。默认值：0.95  范围值0.01-1
                num_inference_steps:
                  type: integer
                  description: 要执行的推理步骤数。默认值：40   范围值10-50
                prompt:
                  type: string
                  description: 生成图像的提示
                guidance_scale:
                  type: number
                  description: CFG（无分类器引导）量表用于衡量您希望模型在寻找相关图像时与提示的贴近程度。默认值：3.5  范围值1-20
                num_images:
                  type: integer
                  description: 生成的图像数量。默认值：1   范围值1-4
                enable_safety_checker:
                  type: boolean
                output_format:
                  type: string
                  description: 生成图片的格式。默认值："jpeg"  支持default、png、jpeg
                acceleration:
                  type: string
                  description: 生成速度。速度越高，生成速度越快。默认值："regular"  支持default、none、regular、high
              required:
                - image_url
                - prompt
              x-apifox-orders:
                - image_url
                - strength
                - num_inference_steps
                - prompt
                - guidance_scale
                - num_images
                - enable_safety_checker
                - output_format
                - acceleration
            example:
              image_url: https://fal.media/files/koala/Chls9L2ZnvuipUTEwlnJC.png
              strength: 0.95
              num_inference_steps: 40
              prompt: A cat dressed as a wizard with a background of a mystic forest.
              guidance_scale: 3.5
              num_images: 1
              enable_safety_checker: true
              output_format: jpeg
              acceleration: regular
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
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326476432-run
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
