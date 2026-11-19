const copy = {
  root: {
    prefix: '内容纠错', page: '页面', path: '站内路径', issue: '问题位置与现象', issueHint: '请填写具体段落、预期与实际差异。',
    evidence: '复现环境或依据', evidenceHint: '仅提供必要的公开来源、客户端版本及脱敏步骤；无法确认请写未知。',
    suggestion: '建议修正', optional: '可留空。', check: '提交前自查',
    checkHint: '请删除密钥、私人项目路径、账号、客户数据和未经脱敏的日志。此页面是公开 Issue 草稿，尚未提交。',
  },
  'zh-tw': {
    prefix: '內容修正', page: '頁面', path: '站內路徑', issue: '問題位置與現象', issueHint: '請填寫具體段落，以及預期與實際的差異。',
    evidence: '重現環境或依據', evidenceHint: '僅提供必要的公開來源、用戶端版本與去識別化步驟；無法確認時請填寫未知。',
    suggestion: '建議修正', optional: '可留空。', check: '提交前自查',
    checkHint: '請刪除金鑰、私人專案路徑、帳號、客戶資料及未去識別化的日誌。這是公開 Issue 草稿，尚未提交。',
  },
  en: {
    prefix: 'Content correction', page: 'Page', path: 'Site path', issue: 'Location and issue', issueHint: 'Identify the section and describe the expected and actual content.',
    evidence: 'Environment or evidence', evidenceHint: 'Include only necessary public sources, client versions, and redacted steps. Write “unknown” if you cannot confirm.',
    suggestion: 'Suggested correction', optional: 'Optional.', check: 'Before submitting',
    checkHint: 'Remove secrets, private project paths, account details, customer data, and unredacted logs. This is a public Issue draft and has not been submitted.',
  },
  fr: {
    prefix: 'Correction de contenu', page: 'Page', path: 'Chemin sur le site', issue: 'Emplacement et problème', issueHint: 'Indiquez la section concernée ainsi que le contenu attendu et le contenu actuel.',
    evidence: 'Environnement ou justificatifs', evidenceHint: 'N’incluez que les sources publiques, versions du client et étapes anonymisées nécessaires. Écrivez « inconnu » en cas de doute.',
    suggestion: 'Correction proposée', optional: 'Facultatif.', check: 'Avant l’envoi',
    checkHint: 'Supprimez les secrets, chemins de projets privés, comptes, données client et journaux non anonymisés. Ceci est un brouillon d’Issue public qui n’a pas encore été envoyé.',
  },
  de: {
    prefix: 'Inhaltskorrektur', page: 'Seite', path: 'Pfad auf der Website', issue: 'Stelle und Problem', issueHint: 'Nennen Sie den betroffenen Abschnitt und beschreiben Sie Soll- und Ist-Zustand.',
    evidence: 'Umgebung oder Belege', evidenceHint: 'Geben Sie nur erforderliche öffentliche Quellen, Client-Versionen und anonymisierte Schritte an. Schreiben Sie „unbekannt“, wenn etwas nicht bestätigt werden kann.',
    suggestion: 'Korrekturvorschlag', optional: 'Optional.', check: 'Vor dem Absenden',
    checkHint: 'Entfernen Sie Geheimnisse, private Projektpfade, Kontodaten, Kundendaten und nicht anonymisierte Protokolle. Dies ist ein öffentlicher Issue-Entwurf und wurde noch nicht eingereicht.',
  },
  es: {
    prefix: 'Corrección de contenido', page: 'Página', path: 'Ruta del sitio', issue: 'Ubicación y problema', issueHint: 'Indica la sección y describe el contenido esperado y el actual.',
    evidence: 'Entorno o pruebas', evidenceHint: 'Incluye solo las fuentes públicas, versiones del cliente y pasos anonimizados necesarios. Escribe «desconocido» si no puedes confirmarlo.',
    suggestion: 'Corrección propuesta', optional: 'Opcional.', check: 'Antes de enviar',
    checkHint: 'Elimina secretos, rutas de proyectos privados, datos de cuentas, datos de clientes y registros sin anonimizar. Este es un borrador de Issue público y todavía no se ha enviado.',
  },
  pt: {
    prefix: 'Correção de conteúdo', page: 'Página', path: 'Caminho no site', issue: 'Local e problema', issueHint: 'Identifique a seção e descreva o conteúdo esperado e o atual.',
    evidence: 'Ambiente ou evidências', evidenceHint: 'Inclua apenas fontes públicas, versões do cliente e etapas anonimizadas que sejam necessárias. Escreva “desconhecido” se não puder confirmar.',
    suggestion: 'Correção sugerida', optional: 'Opcional.', check: 'Antes de enviar',
    checkHint: 'Remova segredos, caminhos de projetos privados, dados de contas, dados de clientes e logs não anonimizados. Este é um rascunho de Issue público e ainda não foi enviado.',
  },
  vi: {
    prefix: 'Sửa nội dung', page: 'Trang', path: 'Đường dẫn trên trang', issue: 'Vị trí và vấn đề', issueHint: 'Nêu rõ phần liên quan và mô tả nội dung mong đợi so với nội dung hiện tại.',
    evidence: 'Môi trường hoặc căn cứ', evidenceHint: 'Chỉ cung cấp nguồn công khai, phiên bản ứng dụng và các bước đã ẩn dữ liệu nhạy cảm khi cần thiết. Ghi “không rõ” nếu chưa thể xác nhận.',
    suggestion: 'Đề xuất sửa', optional: 'Có thể để trống.', check: 'Kiểm tra trước khi gửi',
    checkHint: 'Xóa khóa bí mật, đường dẫn dự án riêng tư, thông tin tài khoản, dữ liệu khách hàng và nhật ký chưa ẩn danh. Đây là bản nháp Issue công khai và chưa được gửi.',
  },
  ja: {
    prefix: '内容修正', page: 'ページ', path: 'サイト内パス', issue: '該当箇所と問題', issueHint: '該当する節と、期待する内容・現在の内容の違いを記入してください。',
    evidence: '環境または根拠', evidenceHint: '必要な公開情報、クライアントのバージョン、匿名化した手順だけを記載してください。確認できない場合は「不明」としてください。',
    suggestion: '修正案', optional: '任意です。', check: '送信前の確認',
    checkHint: '秘密情報、非公開プロジェクトのパス、アカウント情報、顧客データ、未匿名化のログを削除してください。これは公開 Issue の下書きで、まだ送信されていません。',
  },
  ko: {
    prefix: '콘텐츠 수정', page: '페이지', path: '사이트 경로', issue: '위치와 문제', issueHint: '해당 섹션과 기대한 내용 및 현재 내용의 차이를 적어 주세요.',
    evidence: '환경 또는 근거', evidenceHint: '필요한 공개 출처, 클라이언트 버전, 비식별 처리한 단계만 포함하세요. 확인할 수 없으면 “알 수 없음”이라고 적어 주세요.',
    suggestion: '수정 제안', optional: '선택 사항입니다.', check: '제출 전 확인',
    checkHint: '비밀 정보, 비공개 프로젝트 경로, 계정 정보, 고객 데이터, 비식별 처리하지 않은 로그를 삭제하세요. 공개 Issue 초안이며 아직 제출되지 않았습니다.',
  },
  th: {
    prefix: 'แก้ไขเนื้อหา', page: 'หน้า', path: 'เส้นทางในเว็บไซต์', issue: 'ตำแหน่งและปัญหา', issueHint: 'ระบุหัวข้อที่เกี่ยวข้อง พร้อมอธิบายเนื้อหาที่คาดหวังและเนื้อหาปัจจุบัน',
    evidence: 'สภาพแวดล้อมหรือหลักฐาน', evidenceHint: 'ใส่เฉพาะแหล่งข้อมูลสาธารณะ เวอร์ชันไคลเอนต์ และขั้นตอนที่ลบข้อมูลระบุตัวตนแล้วเท่าที่จำเป็น หากยืนยันไม่ได้ให้เขียนว่า “ไม่ทราบ”',
    suggestion: 'ข้อเสนอแนะในการแก้ไข', optional: 'เว้นว่างได้', check: 'ตรวจสอบก่อนส่ง',
    checkHint: 'ลบความลับ เส้นทางโปรเจกต์ส่วนตัว ข้อมูลบัญชี ข้อมูลลูกค้า และบันทึกที่ยังไม่ได้ปกปิดข้อมูล นี่คือร่าง Issue สาธารณะที่ยังไม่ได้ส่ง',
  },
  ru: {
    prefix: 'Исправление материала', page: 'Страница', path: 'Путь на сайте', issue: 'Место и проблема', issueHint: 'Укажите раздел и опишите ожидаемый и текущий вариант.',
    evidence: 'Окружение или обоснование', evidenceHint: 'Добавляйте только необходимые общедоступные источники, версии клиента и обезличенные шаги. Если подтвердить не удалось, напишите «неизвестно».',
    suggestion: 'Предлагаемое исправление', optional: 'Необязательно.', check: 'Проверка перед отправкой',
    checkHint: 'Удалите секреты, пути к закрытым проектам, данные учётных записей, клиентские данные и необезличенные журналы. Это черновик общедоступного Issue; он ещё не отправлен.',
  },
};

/** Build a user-reviewed draft. Never include query strings, task logs or user data. */
export function feedbackUrl({ pathname, title, locale = 'root' }) {
  const page = new URL(pathname, 'https://handbook.invalid').pathname;
  const t = copy[locale] ?? copy.root;
  const body = [
    `## ${t.page}`,
    `${title}\n${t.path}: ${page}`,
    `\n## ${t.issue}\n${t.issueHint}`,
    `\n## ${t.evidence}\n${t.evidenceHint}`,
    `\n## ${t.suggestion}\n${t.optional}`,
    `\n## ${t.check}\n${t.checkHint}`,
  ].join('\n');
  const url = new URL('https://github.com/hopecyb/CodexHandbook/issues/new');
  url.searchParams.set('title', `[${t.prefix}] ${title}`);
  url.searchParams.set('body', body);
  return url.href;
}
