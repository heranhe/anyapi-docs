# 创建任务 flux-kontext-apps/multi-image-kontext-pro

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/flux-kontext-apps/multi-image-kontext-pro/predictions:
    post:
      summary: 创建任务 flux-kontext-apps/multi-image-kontext-pro
      deprecated: false
      description: 官方文档:https://replicate.com/flux-kontext-apps/multi-image-kontext-pro
      tags:
        - Replicate 聚合平台
      parameters:
        - name: Authorization
          in: header
          description: ''
          required: false
          example: Bearer {{YOUR_API_KEY}}
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                input:
                  type: object
                  properties:
                    prompt:
                      type: string
                      description: 关于如何组合或转换两个输入图像的文本描述。
                    aspect_ratio:
                      type: string
                      description: >-
                        生成图像的长宽比。使用“match_input_image”来匹配输入图像的长宽比。默认值：“match_input_image”
                    input_image_1:
                      type: string
                      description: 第一个输入图像。必须是 jpeg、png、gif 或 webp 格式。
                    input_image_2:
                      type: string
                      description: 第二个输入图像。必须是 jpeg、png、gif 或 webp 格式。
                    output_format:
                      type: string
                      description: 生成图像的输出格式。默认值：“png”。
                    safety_tolerance:
                      type: integer
                      description: 安全容差，0 表示最严格，2 表示最宽松。2 是目前允许的最大值。默认值：2。
                  required:
                    - prompt
                    - input_image_1
                    - input_image_2
                  x-apifox-orders:
                    - prompt
                    - aspect_ratio
                    - input_image_1
                    - input_image_2
                    - output_format
                    - safety_tolerance
              x-apifox-orders:
                - input
            example:
              input:
                prompt: Put the woman next to the house
                aspect_ratio: match_input_image
                input_image_1: >-
                  https://replicate.delivery/pbxt/N7gRAUNcVF6HarL0hdAQA2JYNMlJD52LP1wyaIWRUXWeHzqT/0_1-1.webp
                input_image_2: >-
                  https://replicate.delivery/pbxt/N7gRAK5kbPwdsbOpqgyAIOFQX45U6suTlbL6ws2N74SnGFpo/test.jpg
                output_format: png
                safety_tolerance: 2
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  model:
                    type: string
                  version:
                    type: string
                  input:
                    type: object
                    properties:
                      aspect_ratio:
                        type: string
                      input_image:
                        type: string
                      output_format:
                        type: string
                      prompt:
                        type: string
                      prompt_upsampling:
                        type: boolean
                      safety_tolerance:
                        type: integer
                    required:
                      - aspect_ratio
                      - input_image
                      - output_format
                      - prompt
                      - prompt_upsampling
                      - safety_tolerance
                  logs:
                    type: string
                  output:
                    type: 'null'
                  data_removed:
                    type: boolean
                  error:
                    type: 'null'
                  status:
                    type: string
                  created_at:
                    type: string
                  urls:
                    type: object
                    properties:
                      cancel:
                        type: string
                      get:
                        type: string
                      stream:
                        type: string
                      web:
                        type: string
                    required:
                      - cancel
                      - get
                      - stream
                      - web
                required:
                  - id
                  - model
                  - version
                  - input
                  - logs
                  - output
                  - data_removed
                  - error
                  - status
                  - created_at
                  - urls
              example:
                id: 26t3agjpx9rme0crb4es5cbxx4
                model: flux-kontext-apps/multi-image-kontext-pro
                version: hidden
                input:
                  aspect_ratio: match_input_image
                  input_image_1: >-
                    https://replicate.delivery/pbxt/N7gRAUNcVF6HarL0hdAQA2JYNMlJD52LP1wyaIWRUXWeHzqT/0_1-1.webp
                  input_image_2: >-
                    https://replicate.delivery/pbxt/N7gRAK5kbPwdsbOpqgyAIOFQX45U6suTlbL6ws2N74SnGFpo/test.jpg
                  output_format: png
                  prompt: Put the woman next to the house
                  safety_tolerance: 2
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-30T02:15:51.786Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/26t3agjpx9rme0crb4es5cbxx4/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/26t3agjpx9rme0crb4es5cbxx4
                  stream: >-
                    https://stream.replicate.com/v1/files/bcwr-5cw3763ksezvhhtvt4n5ztxeywdagdmyes4uphs7ud3n65mftzba
                  web: https://replicate.com/p/26t3agjpx9rme0crb4es5cbxx4
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-327030811-run
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
