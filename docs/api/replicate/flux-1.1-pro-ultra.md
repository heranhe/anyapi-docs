# 创建任务 black-forest-labs/flux-1.1-pro-ultra

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/black-forest-labs/flux-1.1-pro-ultra/predictions:
    post:
      summary: 创建任务 black-forest-labs/flux-1.1-pro-ultra
      deprecated: false
      description: '官方文档: https://replicate.com/black-forest-labs/flux-1.1-pro-ultra'
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
                    raw:
                      type: boolean
                      description: 生成处理程度更低、更自然的图像。默认值：false。
                    prompt:
                      type: string
                      description: 图像生成的文字提示。
                    aspect_ratio:
                      type: string
                      description: 生成图像的长宽比，默认值：“1:1”。
                    output_format:
                      type: string
                      description: 输出图像的格式。默认值：“jpg”。
                    safety_tolerance:
                      type: integer
                      description: 安全容差。1 表示最严格，6 表示最宽松。默认值：2。
                    image_prompt_strength:
                      type: number
                      description: 提示与图像提示之间的混合。最小值：0，最大值：1。
                  required:
                    - prompt
                  x-apifox-orders:
                    - raw
                    - prompt
                    - aspect_ratio
                    - output_format
                    - safety_tolerance
                    - image_prompt_strength
              x-apifox-orders:
                - input
            example:
              input:
                raw: false
                prompt: >-
                  a majestic snow-capped mountain peak bathed in a warm glow of
                  the setting sun
                aspect_ratio: '3:2'
                output_format: jpg
                safety_tolerance: 2
                image_prompt_strength: 0.1
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
                      image_prompt_strength:
                        type: number
                      output_format:
                        type: string
                      prompt:
                        type: string
                      raw:
                        type: boolean
                      safety_tolerance:
                        type: integer
                    required:
                      - prompt
                    x-apifox-orders:
                      - aspect_ratio
                      - image_prompt_strength
                      - output_format
                      - prompt
                      - raw
                      - safety_tolerance
                required:
                  - input
                x-apifox-orders:
                  - input
              example:
                id: brgfcps121rm80crajvr2x4jg4
                model: black-forest-labs/flux-1.1-pro-ultra
                version: hidden
                input:
                  aspect_ratio: '3:2'
                  image_prompt_strength: 0.1
                  output_format: jpg
                  prompt: >-
                    a majestic snow-capped mountain peak bathed in a warm glow
                    of the setting sun
                  raw: false
                  safety_tolerance: 2
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-29T05:45:44.464Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/brgfcps121rm80crajvr2x4jg4/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/brgfcps121rm80crajvr2x4jg4
                  stream: >-
                    https://stream.replicate.com/v1/files/bcwr-bx7iokgbhtcqohbyy7i5lnli25grd3mhcljqvwxliud4o7ov7mgq
                  web: https://replicate.com/p/brgfcps121rm80crajvr2x4jg4
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326937038-run
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
