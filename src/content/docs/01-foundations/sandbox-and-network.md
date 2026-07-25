---
title: 沙箱与网络
description: 理解执行隔离、网络访问与风险边界。
---


**沙箱** 限制 Agent 能触达的文件系统与部分系统能力，降低误操作面。**网络访问** 另算一层风险：可能外泄提示内容中的敏感信息，或拉取不可信数据。

## 初学者默认态度

1. 第一次练习关闭不必要的网络，或仅允许明确需要的访问
2. 不要把生产密钥放进练习项目
3. 看到「要出网 / 要写敏感路径」的请求，先停下来读懂再批

产品侧设置入口见桌面 App [设置](/04-product-guides/desktop-app/settings/)；官方细节见 [https://developers.openai.com/codex](https://developers.openai.com/codex)。


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

