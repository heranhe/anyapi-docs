# 创建任务 lucataco/flux-schnell-lora

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
      summary: 创建任务 lucataco/flux-schnell-lora
      deprecated: false
      description: '官方文档: https://replicate.com/lucataco/flux-schnell-lora'
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
                        Huggingface 路径，或 LoRA 权重的
                        URL。例如：alvdansen/frosting_lane_flux
                    lora_scale:
                      type: number
                      description: LoRA 权重的缩放。默认值：0.8
                    num_outputs:
                      type: integer
                      description: 要输出的图像数量。默认值：1。最小值：1，最大值：4。
                    aspect_ratio:
                      type: string
                      description: 生成图像的长宽比。默认值：“1:1”。
                    output_format:
                      type: string
                      description: 输出图像的格式。默认值：“webp”。
                    output_quality:
                      type: integer
                      description: >-
                        保存输出图像时的质量，范围为 0 至 100。100 为最佳质量，0 为最低质量。与 .png
                        输出无关。默认值：80
                    prompt_strength:
                      type: number
                      description: >-
                        使用图像对图像时的提示强度（或去噪强度）。1.0
                        对应于完全破坏图像中的信息。默认值：0.8。最小值：0，最大值：1。
                    num_inference_steps:
                      type: integer
                      description: 推理步骤数。默认值：4。最小值：1，最大值：12。
                  required:
                    - prompt
                  x-apifox-orders:
                    - prompt
                    - hf_lora
                    - lora_scale
                    - num_outputs
                    - aspect_ratio
                    - output_format
                    - output_quality
                    - prompt_strength
                    - num_inference_steps
              x-apifox-orders:
                - version
                - input
            example:
              version: >-
                lucataco/flux-schnell-lora:2a6b576af31790b470f0a8442e1e9791213fa13799cbb65a9fc1436e96389574
              input:
                prompt: a beautiful castle frstingln illustration
                hf_lora: alvdansen/frosting_lane_flux
                lora_scale: 0.8
                num_outputs: 1
                aspect_ratio: '1:1'
                output_format: webp
                output_quality: 80
                prompt_strength: 0.8
                num_inference_steps: 4
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties:
                  created:
                    type: integer
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        url:
                          type: string
                      required:
                        - url
                      x-apifox-orders:
                        - url
                required:
                  - created
                  - data
                x-apifox-orders:
                  - created
                  - data
              example:
                id: nfg4nbtgm9rj00crankr6ft6t0
                model: lucataco/flux-schnell-lora
                version: >-
                  2a6b576af31790b470f0a8442e1e9791213fa13799cbb65a9fc1436e96389574
                input:
                  aspect_ratio: '1:1'
                  hf_lora: alvdansen/frosting_lane_flux
                  lora_scale: 0.8
                  num_inference_steps: 4
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
                created_at: '2025-07-29T08:58:10.978Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/nfg4nbtgm9rj00crankr6ft6t0/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/nfg4nbtgm9rj00crankr6ft6t0
                  stream: >-
                    https://stream.replicate.com/v1/files/qoxq-kwulj767tbexpyags2qj6zh6f5k6dmbvfdt6cigg2f4zcuzpnhcq
                  web: https://replicate.com/p/nfg4nbtgm9rj00crankr6ft6t0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326436155-run
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
