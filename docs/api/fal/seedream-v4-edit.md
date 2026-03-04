# /fal-ai/bytedance/seedream/v4/edit

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/bytedance/seedream/v4/edit:
    post:
      summary: /fal-ai/bytedance/seedream/v4/edit
      deprecated: false
      description: '官方文档: https://fal.ai/models/fal-ai/bytedance/seedream/v4/edit'
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
                  type: object
                  properties:
                    height:
                      type: integer
                    width:
                      type: integer
                  required:
                    - height
                    - width
                  x-apifox-orders:
                    - height
                    - width
                  description: 图片尺寸，宽高取值范围必须在：1024-4096.
                num_images:
                  type: integer
                  description: 生成图片数量：1-6
                enable_safety_checker:
                  type: boolean
                  description: 启用安全检查，默认值：true
                image_urls:
                  type: array
                  items:
                    type: string
                  description: 图片url
              required:
                - prompt
                - image_urls
              x-apifox-orders:
                - prompt
                - image_size
                - num_images
                - enable_safety_checker
                - image_urls
            example:
              prompt: Dress the model in the clothes and shoes.
              image_size:
                height: 1280
                width: 1280
              num_images: 1
              enable_safety_checker: true
              image_urls:
                - >-
                  https://storage.googleapis.com/falserverless/example_inputs/seedream4_edit_input_1.png
                - >-
                  https://storage.googleapis.com/falserverless/example_inputs/seedream4_edit_input_2.png
                - >-
                  https://storage.googleapis.com/falserverless/example_inputs/seedream4_edit_input_3.png
                - >-
                  https://storage.googleapis.com/falserverless/example_inputs/seedream4_edit_input_4.png
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
                request_id: 42a7eb80-8916-43ae-b27b-02e79f479977
                response_url: >-
                  https://queue.fal.run/fal-ai/bytedance/requests/42a7eb80-8916-43ae-b27b-02e79f479977
                status_url: >-
                  https://queue.fal.run/fal-ai/bytedance/requests/42a7eb80-8916-43ae-b27b-02e79f479977/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/bytedance/requests/42a7eb80-8916-43ae-b27b-02e79f479977/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-349238014-run
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
