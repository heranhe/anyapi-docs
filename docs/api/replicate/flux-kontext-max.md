# 创建任务 black-forest-labs/flux-kontext-max

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/black-forest-labs/flux-kontext-max/predictions:
    post:
      summary: 创建任务 black-forest-labs/flux-kontext-max
      deprecated: false
      description: '官方文档: https://replicate.com/black-forest-labs/flux-kontext-max'
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
                      description: 您想要生成的内容的文本描述，或有关如何编辑给定图像的说明。
                    input_image:
                      type: string
                      description: 用作参考的图片。必须是 jpeg、png、gif 或 webp 格式。
                    aspect_ratio:
                      type: string
                      description: >-
                        生成图像的长宽比。使用“match_input_image”来匹配输入图像的长宽比。默认值：“match_input_image”。
                    output_format:
                      type: string
                      description: 生成图像的输出格式。默认值：“png”。
                    safety_tolerance:
                      type: integer
                      description: 安全容差，0 最严格，6 最宽松。2 是目前使用输入图像时允许的最大值。默认值：2。最小值：0，最大值：6。
                    prompt_upsampling:
                      type: boolean
                      description: 自动提示改进。默认值：false。
                  required:
                    - prompt
                  x-apifox-orders:
                    - prompt
                    - input_image
                    - aspect_ratio
                    - output_format
                    - safety_tolerance
                    - prompt_upsampling
              x-apifox-orders:
                - input
            example:
              input:
                prompt: Make the letters 3D, floating in space on a city street
                input_image: >-
                  https://replicate.delivery/xezq/XfwWjHJ7HfrmXE6ukuLVEpXWfeQ3PQeRI5mApuLXRxST7XMmC/tmpc91tlq20.png
                aspect_ratio: match_input_image
                output_format: jpg
                safety_tolerance: 2
                prompt_upsampling: false
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
                id: 5pcmjq6sfnrmc0cram79p95eg4
                model: black-forest-labs/flux-kontext-max
                version: hidden
                input:
                  aspect_ratio: match_input_image
                  input_image: >-
                    https://replicate.delivery/xezq/XfwWjHJ7HfrmXE6ukuLVEpXWfeQ3PQeRI5mApuLXRxST7XMmC/tmpc91tlq20.png
                  output_format: jpg
                  prompt: Make the letters 3D, floating in space on a city street
                  prompt_upsampling: false
                  safety_tolerance: 2
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-29T07:21:33.309Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/5pcmjq6sfnrmc0cram79p95eg4/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/5pcmjq6sfnrmc0cram79p95eg4
                  stream: >-
                    https://stream.replicate.com/v1/files/bcwr-o4bl6hrud4sg7ceoi45imkh7lq32nbyqvnsyg736v7ghpxwqxheq
                  web: https://replicate.com/p/5pcmjq6sfnrmc0cram79p95eg4
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326937190-run
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
