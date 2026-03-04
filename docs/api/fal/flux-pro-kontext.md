# /fal-ai/flux-pro/kontext

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-pro/kontext:
    post:
      summary: /fal-ai/flux-pro/kontext
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-pro/kontext'
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
                  description: 生成图像的提示
                guidance_scale:
                  type: number
                  description: CFG（无分类器引导）量表用于衡量您希望模型在寻找相关图像时与提示的贴近程度。默认值：3.5  范围值1-20
                num_images:
                  type: integer
                  description: 生成的图像数量。默认值：1   范围值1-4
                output_format:
                  type: string
                  description: 生成图片的格式。默认值："jpeg"  支持default、png、jpeg
                safety_tolerance:
                  type: string
                  description: 生成图像的安全容差等级。1 表示最严格，5 表示最宽松。默认值："2"
                image_url:
                  type: string
                  description: >-
                    在此处拖放文件，或提供 base64 编码的数据
                    URL接受的文件类型：jpg、jpeg、png、webp、gif、avif
              required:
                - prompt
                - image_url
              x-apifox-orders:
                - prompt
                - guidance_scale
                - num_images
                - output_format
                - safety_tolerance
                - image_url
            example:
              prompt: Put a donut next to the flour.
              guidance_scale: 3.5
              num_images: 1
              output_format: jpeg
              safety_tolerance: '2'
              image_url: >-
                https://v3.fal.media/files/rabbit/rmgBxhwGYb2d3pl3x9sKf_output.png
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
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326486293-run
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
