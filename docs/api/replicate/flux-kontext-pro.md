# 创建任务 black-forest-labs/flux-kontext-pro

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/black-forest-labs/flux-kontext-pro/predictions:
    post:
      summary: 创建任务 black-forest-labs/flux-kontext-pro
      deprecated: false
      description: '官方文档: https://replicate.com/black-forest-labs/flux-kontext-pro'
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
                        生成图像的长宽比。使用“match_input_image”来匹配输入图像的长宽比。默认值：“match_input_image”，支持1:1，16:9，9:16，4:3，3:4，3:2，2:3，4:5，5:4，21:9，9:21，2:1，1:2。
                    output_format:
                      type: string
                      description: 生成图像的输出格式。默认值：“png”。
                    safety_tolerance:
                      type: integer
                      description: 安全容差，0 最严格，6 最宽松。2 是目前使用输入图像时允许的最大值。默认值：2
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
                prompt: Make this a 90s cartoon
                input_image: >-
                  https://replicate.delivery/pbxt/N55l5TWGh8mSlNzW8usReoaNhGbFwvLeZR3TX1NL4pd2Wtfv/replicate-prediction-f2d25rg6gnrma0cq257vdw2n4c.png
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
                      - prompt
                    x-apifox-orders:
                      - aspect_ratio
                      - input_image
                      - output_format
                      - prompt
                      - prompt_upsampling
                      - safety_tolerance
                required:
                  - input
                x-apifox-orders:
                  - input
              examples:
                '1':
                  summary: 成功示例
                  value:
                    id: b1qw7g8h9xrma0crakst3xbj8m
                    model: black-forest-labs/flux-kontext-pro
                    version: hidden
                    input:
                      aspect_ratio: match_input_image
                      input_image: >-
                        https://replicate.delivery/pbxt/N55l5TWGh8mSlNzW8usReoaNhGbFwvLeZR3TX1NL4pd2Wtfv/replicate-prediction-f2d25rg6gnrma0cq257vdw2n4c.png
                      output_format: jpg
                      prompt: Make this a 90s cartoon
                      prompt_upsampling: false
                      safety_tolerance: 2
                    logs: ''
                    output: null
                    data_removed: false
                    error: null
                    status: starting
                    created_at: '2025-07-29T06:51:12.591Z'
                    urls:
                      cancel: >-
                        https://api.replicate.com/v1/predictions/b1qw7g8h9xrma0crakst3xbj8m/cancel
                      get: >-
                        https://api.replicate.com/v1/predictions/b1qw7g8h9xrma0crakst3xbj8m
                      stream: >-
                        https://stream.replicate.com/v1/files/bcwr-3g5lstbmjxzikqt225npeguwi4bu47ndhirdgete5npgzzzogkpq
                      web: https://replicate.com/p/b1qw7g8h9xrma0crakst3xbj8m
                '2':
                  summary: 成功示例
                  value:
                    id: w44zs9cet5rmc0cqzp49gpkhf8
                    model: black-forest-labs/flux-kontext-dev
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
                    created_at: '2025-07-12T07:27:54.577Z'
                    urls:
                      cancel: >-
                        https://api.replicate.com/v1/predictions/w44zs9cet5rmc0cqzp49gpkhf8/cancel
                      get: >-
                        https://api.replicate.com/v1/predictions/w44zs9cet5rmc0cqzp49gpkhf8
                      stream: >-
                        https://stream.replicate.com/v1/files/bcwr-h7bu76ujftxzwih5u35puoysogps56mqvpvjz4nrxskhfe7ks42a
                      web: https://replicate.com/p/w44zs9cet5rmc0cqzp49gpkhf8
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326937091-run
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
