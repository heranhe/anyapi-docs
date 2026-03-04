# /fal-ai/flux-pro/kontext/max

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-pro/kontext/max:
    post:
      summary: /fal-ai/flux-pro/kontext/max
      deprecated: false
      description: '官方文档:  https://fal.ai/models/fal-ai/flux-pro/kontext/max'
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
                seed:
                  type: integer
                guidance_scale:
                  type: number
                  description: 范围值：1-20
                sync_mode:
                  type: boolean
                  description: 同步模式
                num_images:
                  type: integer
                  description: 输出图片数量，范围值：1-4
                safety_tolerance:
                  type: string
                  description: 安全容差
                output_format:
                  type: string
                  description: 图片输出格式："jpeg"，"png"
                aspect_ratio:
                  type: string
                  description: 图片尺寸，枚举值：21:9、16:9、4:3、3:2、1:1、2:3、3:4、9:16、9:21
                image_url:
                  type: string
                  description: 图片URL
              required:
                - prompt
                - output_format
                - image_url
              x-apifox-orders:
                - prompt
                - seed
                - guidance_scale
                - sync_mode
                - num_images
                - safety_tolerance
                - output_format
                - aspect_ratio
                - image_url
            example:
              prompt: Put a donut next to the flour.
              seed: 0
              guidance_scale: 3.5
              sync_mode: false
              num_images: 1
              safety_tolerance: 2
              output_format: jpeg
              aspect_ratio: string
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
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326492402-run
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
