# 自建图床API

# 图片上传 API 文档

## 接口概述
该接口用于上传图片文件到服务器，支持多种图片格式的上传。

## 接口详情

### 请求信息
- **请求URL**: `https://imageproxy.zhongzhuan.chat/api/upload`
- **请求方法**: `POST`
- **Content-Type**: `multipart/form-data`

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| file | File | 是 | 要上传的图片文件 |

### 请求示例

#### cURL 示例
```bash
curl -X POST \
  https://imageproxy.zhongzhuan.chat/api/upload \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/path/to/your/image.jpg'
```

#### JavaScript 示例
```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('https://imageproxy.zhongzhuan.chat/api/upload', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('上传成功:', data);
})
.catch(error => {
  console.error('上传失败:', error);
});
```

#### Python 示例
```python
import requests

url = "https://imageproxy.zhongzhuan.chat/api/upload"
files = {'file': open('image.jpg', 'rb')}

response = requests.post(url, files=files)
print(response.json())
```

### 响应信息

#### 成功响应
**HTTP 状态码**: `200 OK`

**响应格式**: JSON

| 字段名 | 类型 | 说明 |
|--------|------|------|
| url | String | 上传成功后的图片访问链接 |
| created | Number | 创建时间戳（毫秒） |

#### 响应示例
```json
{
    "url": "https://imageproxy.zhongzhuan.chat/api/proxy/image/2316ce07a01000cf14a628c8b29e97a8",
    "created": 1757403998946
}
```

### 错误响应

可能的错误状态码：

| 状态码 | 说明 |
|--------|------|
| 400 | 请求参数错误（如：未提供文件） |
| 413 | 文件过大 |
| 415 | 不支持的文件格式 |
| 500 | 服务器内部错误 |

#### 错误响应示例
```json
{
    "error": "文件格式不支持",
    "code": 415
}
```

## 使用说明

1. **支持的文件格式**: 常见图片格式如 JPG、PNG、GIF、WebP 等
2. **文件大小限制**: 建议单个文件不超过 10MB
3. **返回的 URL**: 可直接用于显示图片，链接长期有效
4. **时间戳格式**: Unix 时间戳，单位为毫秒

## 注意事项

- 上传的图片会通过代理服务处理，确保访问稳定性
- 建议在客户端对图片进行适当压缩以提高上传速度
- 返回的图片链接支持跨域访问
- 上传前请确保有网络连接和适当的权限
