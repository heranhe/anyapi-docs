# 创建任务 black-forest-labs/flux-fill-dev

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/black-forest-labs/flux-fill-dev/predictions:
    post:
      summary: 创建任务 black-forest-labs/flux-fill-dev
      deprecated: false
      description: 官方文档:https://replicate.com/black-forest-labs/flux-fill-dev
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
                    mask:
                      type: string
                      description: 一张黑白图像，用于描述需要修复的图像部分。黑色区域将被保留，白色区域将被修复。
                    image:
                      type: string
                      description: >-
                        待修复的图像。可包含 Alpha 蒙版。如果图像宽度或高度不是 32 的倍数，则会缩放至最接近的 32
                        倍数。如果图像尺寸超出 1440x1440 的范围，则会缩小以适应 1440x1440 的尺寸
                    prompt:
                      type: string
                      description: 提示生成图像。
                    guidance:
                      type: integer
                      description: 图像生成的引导信息。默认值：30。最小值：0，最大值：100。
                    lora_scale:
                      type: integer
                      description: >-
                        确定主 LoRA 的适用强度。对于基础推理，合理的结果介于 0 到 1 之间。对于
                        go_fast，我们对此值应用 1.5
                        倍乘数；通常情况下，将基础值按此倍数缩放时，性能会很好。您可能仍需要进行实验，以找到适合您特定 LoRA
                        的最佳值。默认值：1。最小值：-1，最大值：3。
                    megapixels:
                      type: string
                      description: >-
                        生成图像的近似像素数。使用 match_input 匹配输入的大小（上限为 1440x1440
                        像素），默认值：“1”。
                    num_outputs:
                      type: integer
                      description: 要生成的输出数量。默认值：1。最小值：1，最大值：4。
                    output_format:
                      type: string
                      description: 输出图像的格式。默认值：“webp”。
                    output_quality:
                      type: integer
                      description: >-
                        保存输出图像时的质量，范围为 0 至 100。100 为最佳质量，0 为最低质量。与 .png
                        输出无关。默认值：80
                    num_inference_steps:
                      type: integer
                      description: 去噪步数。建议范围为 28-50，步数越少，输出质量越低，但速度越快。默认值：28。最小值：1，最大值：50。
                  required:
                    - image
                    - prompt
                  x-apifox-orders:
                    - mask
                    - image
                    - prompt
                    - guidance
                    - lora_scale
                    - megapixels
                    - num_outputs
                    - output_format
                    - output_quality
                    - num_inference_steps
              x-apifox-orders:
                - input
            example:
              input:
                mask: >-
                  https://replicate.delivery/pbxt/M0hxLu8a1YBcybWuumSsfoEec8ooer6JZ2fR28vuM1U0CN9m/74b40bb1-364a-461a-bec5-200a38c7bc87.png
                image: >-
                  https://replicate.delivery/pbxt/M0hxMJeO7wFCMr7QYNZsjRxzHhz6ntlLllMteRQNsRD7f3Nf/flux-fill-dev.webp
                prompt: a spaceship
                guidance: 30
                lora_scale: 1
                megapixels: '1'
                num_outputs: 2
                output_format: webp
                output_quality: 80
                num_inference_steps: 28
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
                id: tv3jnp73n1rmc0crb54b3srz94
                model: black-forest-labs/flux-fill-dev
                version: hidden
                input:
                  guidance: 30
                  image: >-
                    https://replicate.delivery/pbxt/M0hxMJeO7wFCMr7QYNZsjRxzHhz6ntlLllMteRQNsRD7f3Nf/flux-fill-dev.webp
                  lora_scale: 1
                  mask: >-
                    https://replicate.delivery/pbxt/M0hxLu8a1YBcybWuumSsfoEec8ooer6JZ2fR28vuM1U0CN9m/74b40bb1-364a-461a-bec5-200a38c7bc87.png
                  megapixels: '1'
                  num_inference_steps: 28
                  num_outputs: 1
                  output_format: webp
                  output_quality: 80
                  prompt: a spaceship
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-30T03:03:25.864Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/tv3jnp73n1rmc0crb54b3srz94/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/tv3jnp73n1rmc0crb54b3srz94
                  stream: >-
                    https://stream.replicate.com/v1/files/bcwr-epcf2nmmvkvxq7trerel6zuoiwzyoji3ifhkuu3lf7rtdzh3i6ca
                  web: https://replicate.com/p/tv3jnp73n1rmc0crb54b3srz94
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-327042578-run
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
