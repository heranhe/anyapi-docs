# web搜索

## OpenAPI Specification

```yaml
openapi: 3.0.1
info:
  title: ''
  description: ''
  version: 1.0.0
paths:
  /v1/chat/completions:
    post:
      summary: web搜索
      deprecated: false
      description: 参考文档：https://platform.openai.com/docs/api-reference/chat/create
      tags:
        - 聊天(Chat)/ChatGpt 接口/Web 搜索
      parameters:
        - name: Authorization
          in: header
          description: ''
          required: true
          example: Bearer $OPENAI_API_KEY
          schema:
            type: string
        - name: Content-type
          in: header
          description: ''
          required: true
          example: application/json
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                model:
                  type: string
                web_search_options:
                  type: object
                  properties: {}
                messages:
                  type: array
                  items:
                    type: object
                    properties:
                      role:
                        type: string
                      content:
                        type: string
              required:
                - model
                - web_search_options
                - messages
            example:
              model: gpt-4o-search-preview
              web_search_options: {}
              messages:
                - role: user
                  content: What was a positive news story from today?
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
      x-apifox-folder: 聊天(Chat)/ChatGpt 接口/Web 搜索
      x-apifox-status: developing
      x-run-in-apifox: https://app.apifox.com/web/project/5443236/apis/api-306423418-run
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
