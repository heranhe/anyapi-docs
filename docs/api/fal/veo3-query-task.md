# /fal-ai/veo3/requests/{request_id}

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /fal-ai/veo3/requests/{request_id}:
    get:
      summary: /fal-ai/veo3/requests/{request_id}
      deprecated: false
      description: ''
      tags:
        - Fal-ai 聚合平台/falai-veo3 视频生成
      parameters:
        - name: request_id
          in: path
          description: ''
          required: true
          example: 46d69eca-9cf3-475b-974d-8e8fc405cd67
          schema:
            type: string
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                type: object
                properties: {}
          headers: {}
          x-apifox-name: 成功
      security:
        - bearer: []
      x-apifox-folder: Fal-ai 聚合平台/falai-veo3 视频生成
      x-apifox-status: developing
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-353201595-run
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
