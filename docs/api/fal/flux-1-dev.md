# /fal-ai/flux-1/dev

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/flux-1/dev:
    post:
      summary: /fal-ai/flux-1/dev
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/flux-1/dev'
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
                image_size:
                  type: string
                  description: 生成图像的大小。默认值：landscape_4_3 范围（3：4、4：3、16：9、9：16）
                num_inference_steps:
                  type: integer
                  description: 要执行的推理步骤数。默认值：28  .范围值：0-50
                guidance_scale:
                  type: number
                  description: CFG（无分类器引导）量表衡量了您希望模型在寻找相关图像时与提示的贴近程度。默认值：3.5  .范围值：1-20
                num_images:
                  type: integer
                  description: 生成的图像数量。默认值：1  范围值：1-4
                enable_safety_checker:
                  type: boolean
                  description: 如果设置为 true，则启用安全检查器。默认值：true
                output_format:
                  type: string
                  description: 生成图片的格式。默认值："jpeg"  .支持的格式default、JPEG、png
                acceleration:
                  type: string
                  description: >-
                    生成速度。速度越高，生成速度越快。默认值："regular" 
                    。支持：default、none、regular、high
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
                - acceleration
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
              acceleration: regular
      responses:
        '200':
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
                    x-apifox-orders: []
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
                x-apifox-orders:
                  - status
                  - request_id
                  - response_url
                  - status_url
                  - cancel_url
                  - logs
                  - metrics
                  - queue_position
              example:
                status: IN_QUEUE
                request_id: 3892f1e8-5fb1-469f-87b0-696d6054c9f2
                response_url: >-
                  https://queue.fal.run/fal-ai/flux-1/requests/3892f1e8-5fb1-469f-87b0-696d6054c9f2
                status_url: >-
                  https://queue.fal.run/fal-ai/flux-1/requests/3892f1e8-5fb1-469f-87b0-696d6054c9f2/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/flux-1/requests/3892f1e8-5fb1-469f-87b0-696d6054c9f2/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326441625-run
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
