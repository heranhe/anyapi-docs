# /fal-ai/flux-1/schnell/redux

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-1/schnell/redux:
    post:
      summary: /fal-ai/flux-1/schnell/redux
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-1/schnell/redux'
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
                num_inference_steps:
                  type: integer
                  description: 要执行的推理步骤数。默认值：4 范围值：1-12
                image_size:
                  type: string
                  description: 生成图像的大小。默认值：landscape_4_3 范围（3：4、4：3、16：9、9：16）
                num_images:
                  type: integer
                  description: 生成的图像数量。默认值：1   范围值1-4
                enable_safety_checker:
                  type: boolean
                  description: 如果设置为 true，则启用安全检查器。默认值：true
                output_format:
                  type: string
                  description: 生成图片的格式。默认值："jpeg"  支持default、png、jpeg
                acceleration:
                  type: string
                  description: 生成速度。速度越高，生成速度越快。默认值："regular"  支持default、none、regular、high
              required:
                - image_url
              x-apifox-orders:
                - image_url
                - num_inference_steps
                - image_size
                - num_images
                - enable_safety_checker
                - output_format
                - acceleration
            example:
              image_url: https://fal.media/files/kangaroo/acQvq-Kmo2lajkgvcEHdv.png
              num_inference_steps: 4
              image_size: landscape_4_3
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
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326483575-run
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
