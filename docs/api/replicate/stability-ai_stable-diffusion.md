# 创建任务 stability-ai/stable-diffusion

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
      summary: 创建任务 stability-ai/stable-diffusion
      deprecated: false
      description: '官方文档: https://replicate.com/stability-ai/stable-diffusion'
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
                    width:
                      type: integer
                      description: 生成图像的宽度（以像素为单位）。需要为 64 的倍数。默认值：768。
                    height:
                      type: integer
                      description: 生成图像的高度（以像素为单位）。需要为 64 的倍数。默认值：768。
                    prompt:
                      type: string
                      description: 输入提示。
                    scheduler:
                      type: string
                      description: 选择一个调度程序。默认值：“DPMSolverMultistep”。
                    num_outputs:
                      type: integer
                      description: 要生成的图像数量。默认值：1。最小值：1，最大值：4。
                    guidance_scale:
                      type: number
                      description: 无分类器引导尺度。默认值：7.5。最小值：1，最大值：20。
                    num_inference_steps:
                      type: integer
                      description: 去噪步骤数。默认值：50。最小值：1，最大值：500。
                  required:
                    - guidance_scale
                    - num_inference_steps
                  x-apifox-orders:
                    - width
                    - height
                    - prompt
                    - scheduler
                    - num_outputs
                    - guidance_scale
                    - num_inference_steps
              x-apifox-orders:
                - version
                - input
            example:
              version: >-
                stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4
              input:
                width: 768
                height: 768
                prompt: an astronaut riding a horse on mars, hd, dramatic lighting
                scheduler: K_EULER
                num_outputs: 1
                guidance_scale: 7.5
                num_inference_steps: 50
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
                created: 1589478378
                data:
                  - url: https://...
                  - url: https://...
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-326398523-run
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
