# 创建任务 stability-ai/sdxl

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
      summary: 创建任务 stability-ai/sdxl
      deprecated: false
      description: '官方文档: https://replicate.com/stability-ai/sdxl'
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
                    width:
                      type: integer
                      description: 输出图像的宽度。默认值：1024。
                    height:
                      type: integer
                      description: 输出图像的高度。默认值：1024。
                    prompt:
                      type: string
                      description: 输入提示。
                    refine:
                      type: string
                      description: 使用哪种精炼风格。默认值：“no_refiner”。
                    scheduler:
                      type: string
                      description: 调度程序。默认值：“K_EULER”。
                    lora_scale:
                      type: number
                      description: LoRA 加法缩放。仅适用于经过训练的模型。默认值：0.6。
                    num_outputs:
                      type: integer
                      description: 要输出的图像数量。默认值：1。最小值：1，最大值：4。
                    guidance_scale:
                      type: number
                      description: 无分类器引导尺度。默认值：7.5。最小值：1，最大值：50。
                    apply_watermark:
                      type: boolean
                      description: >-
                        应用水印，以便确定图像是否在下游应用程序中生成。如果您有其他安全生成或部署图像的规定，则可以使用此方法禁用水印。默认值：true。
                    high_noise_frac:
                      type: number
                      description: 对于 expert_ensemble_refiner，要使用的噪声分数。默认值：0.8。最小值：0，最大值：1。
                    negative_prompt:
                      type: string
                      description: 输入否定提示。默认：””。
                    prompt_strength:
                      type: number
                      description: >-
                        使用 img2img / inpaint 时的提示强度。1.0
                        对应于完全破坏图像中的信息。默认值：0.8。最小值：0，最大值：1。
                    num_inference_steps:
                      type: integer
                      description: 去噪步骤数。默认值：50。最小值：1，最大值：500。
                  x-apifox-orders:
                    - width
                    - height
                    - prompt
                    - refine
                    - scheduler
                    - lora_scale
                    - num_outputs
                    - guidance_scale
                    - apply_watermark
                    - high_noise_frac
                    - negative_prompt
                    - prompt_strength
                    - num_inference_steps
              x-apifox-orders:
                - input
            example:
              version: >-
                stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc
              input:
                width: 768
                height: 768
                prompt: An astronaut riding a rainbow unicorn, cinematic, dramatic
                refine: expert_ensemble_refiner
                scheduler: K_EULER
                lora_scale: 0.6
                num_outputs: 1
                guidance_scale: 7.5
                apply_watermark: false
                high_noise_frac: 0.8
                negative_prompt: ''
                prompt_strength: 0.8
                num_inference_steps: 25
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
              examples:
                '1':
                  summary: Create image
                  value:
                    created: 1589478378
                    data:
                      - url: https://...
                      - url: https://...
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
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326401454-run
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
