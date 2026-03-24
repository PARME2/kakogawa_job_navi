/* ============================================
   かこがわしごとナビ - インターン提案AI
   ============================================ */

// --- 加古川市インターンシッププログラム ---
const INTERNSHIPS = [
  {
    id: 1,
    title: "鉄鋼プロセスの品質評価プロジェクト ― 世界に届く「加古川品質」を体感せよ",
    company: "神戸製鋼所 加古川製鉄所",
    companyId: 1,
    category: "製造・技術",
    tags: ["ものづくり", "品質管理", "グローバル"],
    description: "国内最大級の高炉を擁する加古川製鉄所で、鉄鋼製品の品質評価プロセスを体験。エンジニアと共に検査データを分析し、品質改善レポートを作成します。世界トップクラスの技術が加古川から生まれる現場を肌で感じられます。",
    skills: [
      { name: "データ分析", value: 85 },
      { name: "品質管理", value: 90 },
      { name: "レポート作成", value: 80 }
    ],
    phases: ["製造工程の見学・理解", "品質データの収集・分析", "改善提案レポート作成", "成果発表・フィードバック"]
  },
  {
    id: 2,
    title: "ソックスビジネスのリアル ― お客様の「理想の一足」を一緒に見つけよう",
    company: "タビオ奈良（加古川工場）",
    companyId: 2,
    category: "営業・接客",
    tags: ["営業体験", "接客", "アパレル"],
    description: "靴下専門ブランド・タビオの加古川工場で、製造から販売提案まで一貫して体験。ニーズのヒアリングから提案資料の作成、フォローアップまで、顧客対応の一連の流れを学びます。",
    skills: [
      { name: "コミュニケーション", value: 90 },
      { name: "提案力", value: 85 },
      { name: "ヒアリング", value: 85 }
    ],
    phases: ["工場見学・商品知識研修", "営業同行・ヒアリング体験", "提案資料作成", "ロールプレイ・振り返り"]
  },
  {
    id: 3,
    title: "地域の家計を支える ― 中小企業への融資提案シミュレーション",
    company: "兵庫信用金庫",
    companyId: 3,
    category: "金融・コンサル",
    tags: ["金融", "地域経済", "企業分析"],
    description: "信用金庫の融資部門で、地元中小企業の財務分析と融資提案のシミュレーションを体験。実際の企業データを用いてリスク評価や事業計画の読み解きを学び、地域金融の最前線を体感します。",
    skills: [
      { name: "財務分析", value: 90 },
      { name: "企画・提案", value: 85 },
      { name: "コミュニケーション", value: 80 }
    ],
    phases: ["信金業務・金融基礎研修", "企業財務データ分析", "融資提案書作成", "プレゼン・講評"]
  },
  {
    id: 4,
    title: "街をつくる現場へ ― 建設プロジェクトの施工管理体験",
    company: "東播建設株式会社",
    companyId: 4,
    category: "建設・技術",
    tags: ["施工管理", "ものづくり", "チームワーク"],
    description: "加古川市内の建設現場で施工管理補助を体験。工程管理、安全管理、品質チェックの実務を通じて、街のインフラがどう作られるかを学びます。現場監督や職人さんとのコミュニケーションも貴重な経験に。",
    skills: [
      { name: "プロジェクト管理", value: 85 },
      { name: "安全管理", value: 90 },
      { name: "チームワーク", value: 85 }
    ],
    phases: ["安全研修・現場見学", "施工管理補助・日報作成", "品質チェック体験", "工程改善提案・振り返り"]
  },
  {
    id: 5,
    title: "おもてなしのプロになる ― ホテルのイベント企画＆運営体験",
    company: "加古川プラザホテル",
    companyId: 5,
    category: "サービス・企画",
    tags: ["ホスピタリティ", "イベント企画", "接客"],
    description: "加古川を代表するシティホテルで、宴会イベントの企画から当日運営までを体験。お客様の特別な日を演出するホスピタリティの本質を学びながら、企画書作成やチーム連携のスキルを磨きます。",
    skills: [
      { name: "イベント企画", value: 90 },
      { name: "ホスピタリティ", value: 85 },
      { name: "チーム連携", value: 80 }
    ],
    phases: ["ホテル業務研修・各部門見学", "イベント企画・提案", "準備・リハーサル", "当日運営・振り返り"]
  },
  {
    id: 6,
    title: "地域DXの最前線 ― 医療・自治体向けシステムの開発現場を体験",
    company: "シスメックス（加古川事業所）",
    companyId: 6,
    category: "IT・開発",
    tags: ["IT", "システム開発", "DX"],
    description: "医療検査機器のグローバルリーダー・シスメックスの加古川事業所で、医療・自治体向けシステム開発プロジェクトに参加。要件整理から設計、テストまでの工程を体験し、地域の課題をITで解決する実践力を身につけます。",
    skills: [
      { name: "システム設計", value: 85 },
      { name: "プログラミング", value: 90 },
      { name: "課題分析", value: 80 }
    ],
    phases: ["IT基礎研修・環境構築", "要件分析・設計体験", "開発・テスト体験", "成果レビュー・振り返り"]
  },
  {
    id: 7,
    title: "鶴林寺×デジタル ― 加古川の観光資源をSNSで発信せよ！",
    company: "加古川市観光課（連携プロジェクト）",
    companyId: null,
    category: "マーケティング・広報",
    tags: ["SNS運用", "観光", "コンテンツ制作"],
    description: "鶴林寺や日岡山公園、加古川河川敷など加古川の観光名所を題材に、SNSマーケティングを実践。撮影・動画編集・コピーライティングを行い、実際にSNSで発信。フォロワーの反応を分析してコンテンツ改善まで取り組みます。",
    skills: [
      { name: "コンテンツ制作", value: 90 },
      { name: "SNSマーケティング", value: 85 },
      { name: "データ分析", value: 75 }
    ],
    phases: ["観光資源リサーチ・企画立案", "撮影・コンテンツ制作", "SNS運用・発信", "効果分析・改善提案"]
  },
  {
    id: 8,
    title: "加古川の食文化を全国へ ― 地場食材の新メニュー開発＆テスト販売",
    company: "加古川市産業振興課（連携プロジェクト）",
    companyId: null,
    category: "商品開発・起業",
    tags: ["食品開発", "マーケティング", "起業体験"],
    description: "加古川かつめし・播磨灘の魚介・地場野菜など加古川の食材を使った新メニューを企画・試作し、市内マルシェでテスト販売。原価計算から販売戦略まで、小さな起業を丸ごと体験できます。",
    skills: [
      { name: "商品企画", value: 90 },
      { name: "原価・収支管理", value: 80 },
      { name: "営業・販売", value: 85 }
    ],
    phases: ["食材リサーチ・生産者訪問", "メニュー企画・試作", "マルシェ出店・テスト販売", "収支分析・事業計画まとめ"]
  },
  {
    id: 9,
    title: "高齢化する団地をITで支える ― シニア向けデジタル支援プロジェクト",
    company: "加古川市福祉課（連携プロジェクト）",
    companyId: null,
    category: "福祉・教育",
    tags: ["福祉", "デジタル支援", "コミュニティ"],
    description: "市内の高齢者が多い住宅地で、スマホ・タブレット教室を企画・運営。住民との対話から本当に必要なサポートを見極め、継続運営できる仕組みまで設計します。",
    skills: [
      { name: "コミュニケーション", value: 90 },
      { name: "プログラム設計", value: 80 },
      { name: "仕組みづくり", value: 85 }
    ],
    phases: ["住民ヒアリング・課題把握", "教室プログラム設計", "試行運営", "継続運営モデル提案"]
  },
  {
    id: 10,
    title: "鶴林寺から学ぶ ― 小中学生向け歴史体験ワークショップの企画・運営",
    company: "加古川市教育委員会（連携プロジェクト）",
    companyId: null,
    category: "教育・企画",
    tags: ["教育", "歴史", "ワークショップ"],
    description: "「播磨の法隆寺」と称される鶴林寺を舞台に、小中学生が歴史を体感できるワークショップを企画・実施。教育現場のニーズを学校にヒアリングし、子どもたちの反応を見ながらプログラムを改善していきます。",
    skills: [
      { name: "教育プログラム設計", value: 85 },
      { name: "ファシリテーション", value: 90 },
      { name: "資料作成", value: 75 }
    ],
    phases: ["鶴林寺・学校ヒアリング", "プログラム設計", "テスト実施", "改善・最終実施・報告"]
  }
];

// --- AI対話プロンプト ---
const SYSTEM_PROMPT = `あなたは加古川市のインターンシップマッチングAI「かこナビAI」です。
大学生に対して、加古川市でしかできない実践型インターンシップを提案するために、対話を通じて学生の情報を引き出します。

【あなたの役割】
- あなたが質問し、学生が答える形式で対話を進めてください。
- 1回の発言で質問は1つだけにしてください。
- 親しみやすく、でもプロフェッショナルなトーンで話してください。
- 学生の回答に対して短く共感やコメントを添えてから、次の質問に移ってください。

【質問の流れ（5ターン）】
ターン1: 大学での専攻・学んでいる分野について聞く
ターン2: 得意なこと・これまでに力を入れた経験について聞く
ターン3: 興味がある業界ややってみたい仕事の種類について聞く
ターン4: インターンで身につけたいスキルや挑戦したいことについて聞く
ターン5: 加古川市や地方で働くことへの期待や不安について聞く

【注意事項】
- 回答は200文字以内に収めてください。
- 質問以外の余計な情報（インターンの紹介など）は対話中には出さないでください。
- 5ターン目の質問への回答を受け取ったら、「ありがとうございます！あなたにぴったりのインターンシップを探しています...」と締めくくってください。
`;

const FIRST_MSG = 'こんにちは！かこナビAIです。加古川市にはユニークなインターンシッププログラムがたくさんあります。あなたにぴったりのプロジェクトを見つけるために、いくつか質問させてください！まず、大学ではどんな分野を専攻していますか？';

// --- 状態管理 ---
let messages = [];
let step = 0;
let isTyping = false;

// --- Gemini API ---
// ローカル（file://）ではGemini APIを直接呼び出し、本番では/api/geminiを経由
const GEMINI_API_KEY = 'AIzaSyAFtnGd3_3h-b0pEe_aiHhX5q5XBXRdjV8';

async function callGemini(prompt, systemInstruction) {
  const isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  if (isLocal) {
    // ローカル: Gemini API直接呼び出し
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    if (systemInstruction) {
      payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Gemini API request failed');
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '申し訳ありません。回答を生成できませんでした。';
  } else {
    // 本番: サーバーサイドプロキシ経由
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, systemInstruction })
    });
    if (!res.ok) throw new Error('API request failed');
    const data = await res.json();
    return data.text || '申し訳ありません。回答を生成できませんでした。';
  }
}

// --- チャットUI ---
function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

function addMessage(role, content) {
  messages.push({ role, content });
  const container = document.getElementById('intern-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-' + (role === 'user' ? 'user' : 'bot');
  div.innerHTML = `<div class="chat-bubble">${escapeHtml(content)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('intern-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-bot';
  div.id = 'intern-typing';
  div.innerHTML = '<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('intern-typing');
  if (el) el.remove();
}

// --- 開始 ---
function startInternChat() {
  messages = [];
  step = 0;
  isTyping = false;

  document.getElementById('intern-intro').style.display = 'none';
  document.getElementById('intern-chat').style.display = 'block';

  const container = document.getElementById('intern-messages');
  container.innerHTML = '';

  if (typeof lucide !== 'undefined') lucide.createIcons();

  addMessage('bot', FIRST_MSG);

  const input = document.getElementById('intern-input');
  const sendBtn = document.getElementById('intern-send-btn');
  input.disabled = false;
  sendBtn.disabled = false;
  input.focus();

  input.onkeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  input.oninput = () => { sendBtn.disabled = !input.value.trim(); };
  sendBtn.onclick = handleSend;

  updateRemaining();
}

function updateRemaining() {
  const el = document.getElementById('intern-remaining');
  if (el) el.textContent = Math.max(0, 5 - step);
}

// --- 送信 ---
async function handleSend() {
  const input = document.getElementById('intern-input');
  const text = input.value.trim();
  if (!text || isTyping) return;

  addMessage('user', text);
  input.value = '';
  input.disabled = true;
  document.getElementById('intern-send-btn').disabled = true;
  isTyping = true;

  step++;
  updateRemaining();
  showTyping();

  try {
    if (step >= 5) {
      hideTyping();
      addMessage('bot', 'ありがとうございます！あなたにぴったりのインターンシップを探しています...');
      setTimeout(() => runMatching(), 1500);
    } else {
      const history = messages.map(m => `${m.role === 'user' ? 'ユーザー' : 'AI'}: ${m.content}`).join('\n');
      const prompt = `これまでの会話:\n${history}\n\n上記の会話の続きとして、次の質問をしてください。`;
      const sys = SYSTEM_PROMPT + `\n\n現在 ${step}/5 ターン目の回答を受け取りました。次は ${step + 1}/5 ターン目の質問をしてください。`;
      const aiResponse = await callGemini(prompt, sys);
      hideTyping();
      addMessage('bot', aiResponse);
      input.disabled = false;
      document.getElementById('intern-send-btn').disabled = false;
      input.focus();
    }
  } catch (error) {
    hideTyping();
    addMessage('bot', '通信エラーが発生しました。少し時間を置いて再度お試しください。');
    input.disabled = false;
    document.getElementById('intern-send-btn').disabled = false;
  } finally {
    isTyping = false;
  }
}

// --- マッチング ---
async function runMatching() {
  document.getElementById('intern-chat').style.display = 'none';
  document.getElementById('intern-loading').style.display = 'block';

  const statusEl = document.getElementById('intern-loading-status');
  const loadMsgs = [
    "対話内容を分析中...", "あなたの強みを抽出中...",
    "10件のプロジェクトと照合中...", "最適なインターンを選定中...",
    "結果をまとめています..."
  ];
  statusEl.textContent = loadMsgs[0];
  let idx = 0;
  const interval = setInterval(() => {
    idx++;
    if (idx < loadMsgs.length) statusEl.textContent = loadMsgs[idx];
  }, 800);

  try {
    const userResponses = messages.filter(m => m.role === 'user').map(m => m.content).join('\n');
    const internList = INTERNSHIPS.map(i =>
      `ID:${i.id} | ${i.title} | ${i.company} | カテゴリ:${i.category} | タグ:${i.tags.join(',')} | 内容:${i.description}`
    ).join('\n');

    const prompt = `以下はユーザー（大学生）との対話で得られた情報です:
${userResponses}

以下の10件のインターンシップから、このユーザーに最も適した5件を選んでください。
なぜこのユーザーに合うかの理由（50文字以内）を付けてください。

インターンシップ一覧:
${internList}

必ず以下のJSON形式のみで回答してください。JSON以外のテキストは絶対に含めないでください:
[
  {"id": 1, "reason": "理由"},
  {"id": 2, "reason": "理由"},
  {"id": 3, "reason": "理由"},
  {"id": 4, "reason": "理由"},
  {"id": 5, "reason": "理由"}
]`;

    const sys = 'あなたはインターンシップマッチングの専門家です。ユーザーの専攻・スキル・興味・志向に基づいて最適なインターンを選びます。必ずJSON形式のみで回答してください。';
    const result = await callGemini(prompt, sys);

    clearInterval(interval);

    const jsonMatch = result.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const matchResults = JSON.parse(jsonMatch[0]);
      const matched = matchResults.slice(0, 5).map(m => {
        const intern = INTERNSHIPS.find(i => i.id === m.id);
        if (!intern) return null;
        return { ...intern, reason: m.reason };
      }).filter(Boolean);
      renderInternResults(matched);
    } else {
      renderInternResults(getFallbackResults());
    }
  } catch (error) {
    clearInterval(interval);
    renderInternResults(getFallbackResults());
  }

  document.getElementById('intern-loading').style.display = 'none';
  document.getElementById('intern-results').style.display = 'block';
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.querySelectorAll('#intern-results .fade-up').forEach(el => el.classList.add('visible'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getFallbackResults() {
  return INTERNSHIPS.slice(0, 5).map(intern => ({
    ...intern, reason: 'あなたの経験・興味に基づくおすすめです'
  }));
}

// --- 結果レンダリング ---
function renderInternResults(results) {
  const container = document.getElementById('intern-results-list');
  container.innerHTML = results.map((job, rank) => `
    <div class="intern-card" id="intern-card-${job.id}">
      <div class="intern-card-header">
        <div class="intern-rank">#${rank + 1}</div>
        <span class="intern-category">${job.category}</span>
      </div>

      <h3 class="intern-card-title">${job.title}</h3>
      <p class="intern-card-company">
        <i data-lucide="building" class="lucide"></i> ${job.company}
      </p>

      <div class="intern-reason">
        <i data-lucide="sparkles" class="lucide"></i>
        <span>${escapeHtml(job.reason)}</span>
      </div>

      <div class="intern-tags">
        ${job.tags.map(t => `<span class="intern-tag">#${t}</span>`).join('')}
      </div>

      <button class="co-toggle-btn" onclick="toggleInternDetail(${job.id})">
        <span>詳しく見る</span> <i data-lucide="chevron-down" class="lucide"></i>
      </button>

      <div class="intern-detail" id="intern-detail-${job.id}">
        <p class="intern-detail-desc">${job.description}</p>

        <div class="intern-detail-grid">
          <div>
            <h4 class="intern-detail-heading"><i data-lucide="bar-chart-3" class="lucide"></i> 身につくスキル</h4>
            <div class="intern-skills">
              ${job.skills.map(s => {
                const level = s.value >= 85 ? { label: '大きく成長', dots: 3 }
                  : s.value >= 70 ? { label: '成長する', dots: 2 }
                  : { label: '触れられる', dots: 1 };
                return `
                <div class="intern-skill-row">
                  <span class="intern-skill-name">${s.name}</span>
                  <div class="intern-skill-dots">
                    ${[1,2,3].map(d => `<span class="intern-dot ${d <= level.dots ? 'active' : ''}"></span>`).join('')}
                  </div>
                  <span class="intern-skill-label">${level.label}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
          <div>
            <h4 class="intern-detail-heading"><i data-lucide="check-circle" class="lucide"></i> プロジェクトの流れ</h4>
            <div class="intern-phases">
              ${job.phases.map((p, i) => `
              <div class="intern-phase">
                <span class="intern-phase-num">${i + 1}</span>
                <span>${p}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>

        ${job.companyId ? `<a href="companies.html#company-${job.companyId}" class="btn btn-outline" style="margin-top: 16px;">企業情報を見る <i data-lucide="arrow-right" class="lucide"></i></a>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleInternDetail(id) {
  const detail = document.getElementById('intern-detail-' + id);
  const card = document.getElementById('intern-card-' + id);
  if (!detail || !card) return;

  const isOpen = detail.classList.contains('open');
  // 全て閉じる
  document.querySelectorAll('.intern-detail.open').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.intern-card.open').forEach(c => c.classList.remove('open'));

  if (!isOpen) {
    detail.classList.add('open');
    card.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function resetIntern() {
  document.getElementById('intern-results').style.display = 'none';
  document.getElementById('intern-chat').style.display = 'none';
  document.getElementById('intern-loading').style.display = 'none';
  document.getElementById('intern-intro').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
