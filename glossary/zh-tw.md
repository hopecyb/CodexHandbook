# 繁體中文術語表（zh-TW）

`glossary/terms.yml` 是機器可讀的權威來源；本頁記錄需要人工判斷、不能只靠 OpenCC 字形轉換的用詞。

| 英文 | 推薦用詞 | 備註 |
|---|---|---|
| Agent | Agent | 產品名稱，不翻譯 |
| Approval | 審批 | 指高風險操作前的人為確認 |
| Cloud task | Cloud 任務 | 不寫成「雲端工作」 |
| Compaction | 壓縮 | 指長上下文的摘要壓縮 |
| Context | 上下文 | 與產品及程式文件保持一致 |
| Documentation | 文件 | 編輯用語；此處不用「檔案」 |
| Diff | 差異 / diff | UI 或指令情境優先保留 `diff` |
| Hook | Hook | 產品名稱，不翻譯 |
| MCP | MCP | 協定名稱，不翻譯 |
| Plugin | Plugin | 產品名稱，不翻譯 |
| Prompt | 提示詞 | 不使用「咒語」 |
| Sandbox | 沙箱 | 指執行隔離 |
| Skill | Skill | 產品名稱，不翻譯 |
| Task | 任務 | 與 Thread 分開 |
| Thread | 執行緒 | 指連續對話，不是作業系統執行緒 |
| Worktree | 工作樹 | Git worktree 可在首次出現時保留英文 |
| Permission | 權限 | 不使用 OpenCC 直轉的「許可權」 |
| Non-interactive mode | 非互動模式 | 指 `codex exec` 等沒有即時對話 UI 的執行 |
| Interactive mode | 互動模式 | 指即時聊天或 TUI 工作階段 |
| Thread | 對話串 | 指對話及其上下文，不使用作業系統術語「執行緒」 |
| Handoff | 交接 | 指把上下文交給另一個人或工作階段 |

新增或修改術語時，必須同時更新 `terms.yml` 的 `zh-TW` 欄位。自動生成完成後仍要做台灣用詞人工複核；字形轉換通過不代表術語已核准。
