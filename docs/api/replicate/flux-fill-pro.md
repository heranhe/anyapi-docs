# 创建任务 black-forest-labs/flux-fill-pro

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /replicate/v1/models/black-forest-labs/flux-fill-pro/predictions:
    post:
      summary: 创建任务 black-forest-labs/flux-fill-pro
      deprecated: false
      description: 官方文档:https://replicate.com/black-forest-labs/flux-fill-pro
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
                      description: >-
                        一张黑白图片，用于描述图片中需要修复的部分。黑色区域将被保留，白色区域将被修复。必须与图片大小相同。如果您在原始图片中提供了
                        Alpha 蒙版，则此参数可选。必须为 jpeg、png、gif 或 webp 格式。
                    image:
                      type: string
                      description: 待修复的图片。可以包含 Alpha 蒙版。必须为 jpeg、png、gif 或 webp 格式。
                    steps:
                      type: integer
                      description: 扩散步骤数。值越高，细节越精细，但处理时间也越长。默认值：50。最小值：15，最大值：50。
                    prompt:
                      type: string
                      description: 图像生成的文字提示。
                    guidance:
                      type: integer
                      description: >-
                        控制文本提示的遵循度与图像质量/多样性之间的平衡。值越高，输出结果越接近提示，但可能会降低整体图像质量。值越低，输出结果的创作自由度就越大，但可能与提示的相关性较低。默认值：60。最小值：1.5，最大值：100。
                    outpaint:
                      type: string
                      description: 用于对输入图像进行快速修复的选项。蒙版将被忽略。默认值："None"
                    output_format:
                      type: string
                      description: 输出图像的格式。默认值：“jpg”。
                    safety_tolerance:
                      type: integer
                      description: 安全容差，1 表示最严格，6 表示最宽松。默认值：2。
                    prompt_upsampling:
                      type: boolean
                      description: 自动修改提示，生成更多创意。默认值：false
                  required:
                    - image
                    - prompt
                  x-apifox-orders:
                    - mask
                    - image
                    - steps
                    - prompt
                    - guidance
                    - outpaint
                    - output_format
                    - safety_tolerance
                    - prompt_upsampling
              x-apifox-orders:
                - input
            example:
              input:
                mask: >-
                  https://replicate.delivery/pbxt/M0gpLCYdCLbnhcz95Poy66q30XW9VSCN65DoDQ8IzdzlQonw/kill-bill-mask.png
                image: >-
                  https://replicate.delivery/pbxt/M0gpKVE9wmEtOQFNDOpwz1uGs0u6nK2NcE85IihwlN0ZEnMF/kill-bill-poster.jpg
                steps: 50
                prompt: movie poster says "FLUX FILL"
                guidance: 60
                outpaint: None
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
                id: w72vtvbb79rmc0crb57tckqt24
                model: black-forest-labs/flux-fill-pro
                version: hidden
                input:
                  guidance: 60
                  image: >-
                    https://replicate.delivery/pbxt/M0gpKVE9wmEtOQFNDOpwz1uGs0u6nK2NcE85IihwlN0ZEnMF/kill-bill-poster.jpg
                  mask: >-
                    https://replicate.delivery/pbxt/M0gpLCYdCLbnhcz95Poy66q30XW9VSCN65DoDQ8IzdzlQonw/kill-bill-mask.png
                  outpaint: None
                  output_format: jpg
                  prompt: movie poster says "FLUX FILL"
                  prompt_upsampling: false
                  safety_tolerance: 2
                  steps: 50
                logs: ''
                output: null
                data_removed: false
                error: null
                status: starting
                created_at: '2025-07-30T03:10:33.786Z'
                urls:
                  cancel: >-
                    https://api.replicate.com/v1/predictions/w72vtvbb79rmc0crb57tckqt24/cancel
                  get: >-
                    https://api.replicate.com/v1/predictions/w72vtvbb79rmc0crb57tckqt24
                  stream: >-
                    https://stream.replicate.com/v1/files/bcwr-3y7tn6jo35hzo7xvk5kf2dslvdwmggf5zty5vnbfhq4tsggfhesa
                  web: https://replicate.com/p/w72vtvbb79rmc0crb57tckqt24
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Replicate 聚合平台
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-327043723-run
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
