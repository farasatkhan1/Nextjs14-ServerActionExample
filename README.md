Nextjs 14 Server Action Example

0. Create Database `next14db`

1. Make a request to endpoint on postman

Postman Requests:

Get Users:
```
method: GET
url: http://localhost:3000/api/users
```

Add User:
```
method: POST
url: http://localhost:3000/api/users
data:
{
    "email": "farasat@gmail.com",
    "password": "pass123"
}
```

Server Action Example:

Postman Request: Copy values next-action and next-router-state-tree from the network tab.

## Headers:

```
Next-Action: <Present-in-Chrome-Network-Tab>
Next-Router-State-Tree: <Present-in-Chrome-Network-Tab>
Origin: http://localhost:3000
Referer: http://localhost:3000/users
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

## Body:

```
["user@gmail.com"]
```