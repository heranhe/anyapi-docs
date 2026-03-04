# 创建任务 lucataco/flux-dev-lora

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/predictions:
    post:
      summary: 创建任务 lucataco/flux-dev-lora
      deprecated: false
      description: '官方文档: https://replicate.com/lucataco/flux-dev-lora'
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
                version:
                  type: string
                input:
                  type: object
                  properties:
                    prompt:
                      type: string
                      description: 提示生成图像。
                    hf_lora:
                      type: string
                      description: >-
                        HF、Replicate、CivitAI 或 LoRA 的
                        URL。例如：alvdansen/frosting_lane_flux
                    lora_scale:
                      type: number
                      description: LoRA 权重的缩放。默认值：0.8。
                    num_outputs:
                      type: integer
                      description: 要输出的图像数量。默认值：1。最小值：1，最大值：4。
                    aspect_ratio:
                      type: string
                      description: 生成图像的长宽比。默认值：“1:1”。
                    output_format:
                      type: string
                      description: 输出图像的格式。默认值：“webp”。
                    guidance_scale:
                      type: number
                      description: 引导强度。默认值：3.5。最小值：0，最大值：10。
                    output_quality:
                      type: integer
                      description: >-
                        保存输出图像时的质量，范围为 0 至 100。100 为最佳质量，0 为最低质量。与 .png
                        输出无关。默认值：80。
                    prompt_strength:
                      type: number
                      description: 使用图像对图像时的提示强度（或去噪强度）。1.0 对应于完全破坏图像中的信息。默认值：0.8。
                    num_inference_steps:
                      type: integer
                      description: 推理步骤数。默认值：28。最小值：1，最大值：50。
                  required:
                    - prompt
                  x-apifox-orders:
                    - prompt
                    - hf_lora
                    - lora_scale
                    - num_outputs
                    - aspect_ratio
                    - output_format
                    - guidance_scale
                    - output_quality
                    - prompt_strength
                    - num_inference_steps
              x-apifox-orders:
                - version
                - input
            example:
              version: >-
                lucataco/flux-dev-lora:091495765fa5ef2725a175a57b276ec30dc9d39c22d30410f2ede68a3eab66b3
              input:
                prompt: a beautiful castle frstingln illustration
                hf_lora: alvdansen/frosting_lane_flux
                lora_scale: 0.8
                num_outputs: 1
                aspect_ratio: '1:1'
                output_format: webp
                guidance_scale: 3.5
                output_quality: 80
                prompt_strength: 0.8
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
                id: c9zn270jk1rj00crans8m6ssjc
                model: lucataco/flux-dev-lora
                version: >-
                  091495765fa5ef2725a175a57b276ec30dc9d39c22d30410f2ede68a3eab66b3
                input:
                  aspect_ratio: '1:1'
                  guidance_scale: 3.5
                  hf_lora: alvdansen/frosting_lane_flux
                  lora_scale: 0.8
                  num_inference_steps: 28
                  num_outputs: 1
                  output_format: webp
                  output_quality: 80
                  prompt: a beautiful castle frstingln illustration
                  prompt_strength: 0.8
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-29T09:09:55.992Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/c9zn270jk1rj00crans8m6ssjc/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/c9zn270jk1rj00crans8m6ssjc
                  stream: >-
                    https://stream.replicate.com/v1/files/qoxq-37kfnrolbp7l2vy5f2ffduf6vyqye4savtprvsiikqzpcjbuejfa
                  web: https://replicate.com/p/c9zn270jk1rj00crans8m6ssjc
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326474696-run
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
