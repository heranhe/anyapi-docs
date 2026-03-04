# /fal-ai/veo3/fast/image-to-video

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/veo3/fast/image-to-video:
    post:
      summary: /fal-ai/veo3/fast/image-to-video
      deprecated: false
      description: 官方文档地址：https://fal.ai/models/fal-ai/veo3/fast/image-to-video
      tags:
        - Fal-ai 聚合平台/falai-veo3 视频生成
      parameters: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                prompt:
                  type: string
                  description: 描述图像应如何制作动画的文本提示
                image_url:
                  type: string
                  description: >-
                    要制作动画的输入图像的 URL。宽高比应为 720p 或更高分辨率，宽高比为 16：9。如果图像的纵横比不是
                    16：9，则会裁剪以适合。
                aspect_ratio:
                  type: string
                  description: 生成视频的宽高比默认值："auto"
                duration:
                  type: string
                  description: 生成视频的时长（以秒为单位）默认值："8s"
                generate_audio:
                  type: boolean
                  description: 是否为视频生成音频。如果为 false，则将减少 %33 的积分。默认值：true
                resolution:
                  type: string
                  description: 生成视频的分辨率默认值："720p"  范围值[720p，1080p]
              required:
                - prompt
                - image_url
              x-apifox-orders:
                - prompt
                - image_url
                - aspect_ratio
                - duration
                - generate_audio
                - resolution
            example:
              prompt: >-
                A woman looks into the camera, breathes in, then exclaims
                energetically, "have you guys checked out Veo3 Image-to-Video on
                Fal? It's incredible!"
              image_url: >-
                https://storage.googleapis.com/falserverless/example_inputs/veo3-i2v-input.png
              aspect_ratio: '16:9'
              duration: 8s
              generate_audio: true
              resolution: 720p
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties: {}
              example:
                status: IN_QUEUE
                request_id: 1b24b3ae-16a2-4d19-b10d-1e323ebff061
                response_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/1b24b3ae-16a2-4d19-b10d-1e323ebff061
                status_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/1b24b3ae-16a2-4d19-b10d-1e323ebff061/status
                cancel_url: >-
                  https://queue.fal.run/fal-ai/veo3/requests/1b24b3ae-16a2-4d19-b10d-1e323ebff061/cancel
                logs: null
                metrics: {}
                queue_position: 0
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台/falai-veo3 视频生成
      x-apifox-status: released
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-352888771-run
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
