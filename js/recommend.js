/* ============================================
   かこがわしごとナビ - 適職診断エンジン（デモ版）
   加古川市 version
   ============================================ */

// --- 強みデータベース ---
const strengthsDB = [
  {
    id: 1,
    title: "人とうまく関わる力",
    subtitle: "コミュニケーション能力",
    icon: "handshake",
    color: "#6C5CE7",
    description: "相手の気持ちを理解し、信頼関係を築くことができる力",
    detail: "部活動や委員会活動を通じて、チームメンバーや周囲の人と良好な関係を築いてきた経験があります。相手の立場に立って考え、協力しながら物事を進めることが得意です。",
    workStyle: "お客様や同僚とコミュニケーションを取りながら、チームで協力して仕事を進めるスタイルが向いています"
  },
  {
    id: 2,
    title: "物事を継続して努力する力",
    subtitle: "継続力・粘り強さ",
    icon: "flame",
    color: "#F39C12",
    description: "目標に向かって諦めずに取り組み続けることができる力",
    detail: "勉強や部活動など、すぐに結果が出なくても地道に努力を続けてきた経験があります。困難な状況でも投げ出さず、最後までやり遂げる粘り強さを持っています。",
    workStyle: "スキルを少しずつ身につけながら成長していく仕事や、長期的な目標に向かって取り組む仕事で力を発揮できます"
  },
  {
    id: 3,
    title: "論理的に考える力",
    subtitle: "分析力・問題解決力",
    icon: "lightbulb",
    color: "#00CEC9",
    description: "物事を筋道立てて考え、課題を解決できる力",
    detail: "問題に直面した時、原因を分析して解決策を考えることが得意です。データや事実に基づいて判断し、効率的な方法を見つけ出すことができます。",
    workStyle: "課題解決やデータ分析、システム設計など、論理的思考を活かせる仕事で力を発揮できます"
  },
  {
    id: 4,
    title: "人を思いやる力",
    subtitle: "共感力・サービス精神",
    icon: "heart",
    color: "#FD79A8",
    description: "他者の気持ちに寄り添い、サポートすることができる力",
    detail: "困っている人を放っておけない、人の喜びを自分の喜びと感じられる優しさがあります。相手の立場に立って考え、適切なサポートができます。",
    workStyle: "お客様や利用者様に寄り添うサービス業、福祉・医療分野で力を発揮できます"
  }
];

// --- 職種データベース ---
const jobsDB = [
  {
    id: 1, title: "製造・ものづくり系", icon: "factory",
    jobs: ["製造オペレーター", "機械オペレーター", "組立・加工スタッフ", "検査・品質管理"],
    strengths: [2, 3], labels: ["継続力", "集中力", "チームワーク"]
  },
  {
    id: 2, title: "技術・設備・保全系", icon: "wrench",
    jobs: ["設備保全・メンテナンス", "電気設備点検", "工場内技術スタッフ", "インフラ保守"],
    strengths: [2, 3], labels: ["問題解決力", "継続力", "安全意識"]
  },
  {
    id: 3, title: "販売・接客・サービス系", icon: "shopping-bag",
    jobs: ["小売店スタッフ", "飲食店ホール・キッチン", "ホテル・宿泊施設スタッフ"],
    strengths: [1, 4], labels: ["コミュニケーション力", "気配り", "対応力"]
  },
  {
    id: 4, title: "事務・バックオフィス系", icon: "file-text",
    jobs: ["一般事務", "総務・庶務", "データ入力", "受付", "経理補助"],
    strengths: [2, 3], labels: ["正確性", "几帳面さ", "PC基礎スキル"]
  },
  {
    id: 5, title: "営業職", icon: "trending-up",
    jobs: ["法人営業", "個人営業", "ルート営業", "カウンターセールス"],
    strengths: [1, 2], labels: ["コミュニケーション力", "行動力", "粘り強さ"]
  },
  {
    id: 6, title: "建設・インフラ系", icon: "hard-hat",
    jobs: ["建設作業員", "現場監督補助", "土木作業員", "測量補助"],
    strengths: [2], labels: ["体力", "チームワーク", "安全意識"]
  },
  {
    id: 7, title: "医療・福祉・介護系", icon: "heart-pulse",
    jobs: ["介護職員", "福祉施設スタッフ", "看護助手", "障害者支援員"],
    strengths: [1, 4], labels: ["共感力", "忍耐力", "コミュニケーション力"]
  },
  {
    id: 8, title: "IT・情報系", icon: "monitor",
    jobs: ["プログラマー", "システムエンジニア", "インフラエンジニア", "ITサポート"],
    strengths: [2, 3], labels: ["論理的思考", "継続力", "問題解決力"]
  }
];

// --- 加古川市企業データベース ---
const companiesDB = [
  {
    id: 1, name: "神戸製鋼所 加古川製鉄所",
    image: "images/hitachi_hightech.png", label: "STEEL",
    industry: "製造業", jobType: "技術職",
    matchStrengths: [2, 3],
    description: "粗鋼生産能力国内トップクラス。加古川から世界へ、鉄鋼技術に携われます。",
    point: "スケールの大きなものづくりに挑戦"
  },
  {
    id: 2, name: "兵庫信用金庫",
    image: "images/mito_shinkin.png", label: "FINANCE",
    industry: "金融・保険業", jobType: "総合職",
    matchStrengths: [1, 2],
    description: "東播磨地域で30店舗以上を展開する地域密着型金融機関。地域経済を支える。",
    point: "地域経済を支える実感がある仕事"
  },
  {
    id: 3, name: "タビオ奈良（加古川工場）",
    image: "images/toyota.png", label: "TEXTILE",
    industry: "製造業", jobType: "製造職",
    matchStrengths: [2, 4],
    description: "日本一の靴下産地・加古川。高品質なものづくりの現場で成長できる。",
    point: "日本一のものづくりに携われる"
  },
  {
    id: 4, name: "東播建設",
    image: "images/kanto_kensetsu.png", label: "CONSTRUCTION",
    industry: "建設業", jobType: "技術職",
    matchStrengths: [2],
    description: "東播磨の公共施設・道路・河川整備などインフラを支える総合建設会社。",
    point: "自分が作ったものが地図に残る達成感"
  },
  {
    id: 5, name: "加古川プラザホテル",
    image: "images/plaza_hotel.png", label: "HOSPITALITY",
    industry: "宿泊・飲食業", jobType: "接客職",
    matchStrengths: [1, 4],
    description: "加古川を代表するシティホテル。おもてなしの心で特別なひとときを創出。",
    point: "お客様の大切な瞬間をお手伝い"
  },
  {
    id: 6, name: "シスメックス",
    image: "images/icc.png", label: "HEALTHCARE",
    industry: "製造業（医療機器）", jobType: "技術職",
    matchStrengths: [2, 3],
    description: "血液検査装置の世界シェアNo.1。加古川から世界の医療を支える。",
    point: "世界の医療に貢献する仕事"
  }
];

// --- イベントデータ ---
const eventsDB = [
  {
    id: 1, title: "加古川市企業×学生 お仕事体験フェス",
    date: "2026年5月17日〜18日", category: "職業体験",
    description: "加古川市内の企業20社が集結する職業体験イベント。さまざまな仕事を実際に体験できます。"
  },
  {
    id: 2, title: "かこがわ企業ガイダンス",
    date: "2026年4月12日", category: "企業説明会",
    description: "加古川市内の企業と直接話せるガイダンス。Uターン就職の先輩体験談も聞けます。"
  }
];

// --- デモ用固定データ ---
const demoName = "山田 太郎";
const demoStrengthIds = [1, 2];

// --- UI制御 ---
function startAnalysis(method) {
  document.getElementById('recommend-input').style.display = 'none';
  document.getElementById('recommend-loading').style.display = 'block';

  const statusEl = document.getElementById('loading-status');
  const voiceMessages = [
    "音声データを受信中...", "会話内容を解析中...", "あなたの強みを抽出中...",
    "加古川市の企業とマッチング中...", "おすすめ職種を選定中...", "結果をまとめています..."
  ];
  const chatMessages = [
    "チャット内容を解析中...", "回答を分析中...", "あなたの強みを抽出中...",
    "加古川市の企業とマッチング中...", "おすすめ職種を選定中...", "結果をまとめています..."
  ];
  const messages = method === 'voice' ? voiceMessages : chatMessages;
  statusEl.textContent = messages[0];

  let msgIndex = 0;
  const msgInterval = setInterval(() => {
    msgIndex++;
    if (msgIndex < messages.length) statusEl.textContent = messages[msgIndex];
  }, 600);

  setTimeout(() => {
    clearInterval(msgInterval);
    const userStrengths = strengthsDB.filter(s => demoStrengthIds.includes(s.id));
    const matchedJobs = getMatchedJobs(demoStrengthIds);
    const matchedCompanies = getMatchedCompanies(demoStrengthIds);
    renderResults(demoName, userStrengths, matchedJobs, matchedCompanies);

    document.getElementById('recommend-loading').style.display = 'none';
    document.getElementById('recommend-results').style.display = 'block';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    document.querySelectorAll('#recommend-results .fade-up').forEach(el => el.classList.add('visible'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 3600);
}

function getMatchedJobs(strengthIds) {
  const sorted = jobsDB.map(job => {
    const overlap = job.strengths.filter(s => strengthIds.includes(s)).length;
    return { ...job, overlap };
  }).sort((a, b) => b.overlap - a.overlap);
  return sorted.map((job, i) => ({ ...job, recommended: i < 4 }));
}

function getMatchedCompanies(strengthIds) {
  return companiesDB;
}

function renderResults(name, strengths, jobs, companies) {
  document.getElementById('result-name').textContent = name;

  document.getElementById('strengths-summary').innerHTML = `
    <div class="strength-summary-card">
      <p>あなたは、周囲との信頼関係を築きながら、目標に向かってコツコツと努力を続けられる人です。<br>
      <strong>${strengths[0].title}</strong>と<strong>${strengths[1].title}</strong>を兼ね備えており、
      ${strengths[0].workStyle}。</p>
    </div>
  `;

  document.getElementById('strengths-grid').innerHTML = strengths.map(s => `
    <div class="strength-card" style="border-left: 4px solid ${s.color};">
      <div class="strength-header">
        <div class="strength-icon" style="background: ${s.color}15; color: ${s.color};">
          <i data-lucide="${s.icon}" class="lucide"></i>
        </div>
        <div>
          <h4 class="strength-title">${s.title}</h4>
          <p class="strength-subtitle">${s.subtitle}</p>
        </div>
      </div>
      <p class="strength-desc">${s.detail}</p>
      <div class="strength-workstyle">
        <i data-lucide="briefcase" class="lucide"></i>
        <span>${s.workStyle}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('jobs-grid').innerHTML = `<div class="rec-jobs-list">${jobs.map(j => `
    <div class="rec-job-row${j.recommended ? ' rec-job-recommended' : ''}">
      <div class="rec-job-icon"><i data-lucide="${j.icon}" class="lucide"></i></div>
      <div class="rec-job-info">
        <h4 class="rec-job-title">${j.title}</h4>
        <div class="rec-job-examples">${j.jobs.join(' / ')}</div>
      </div>
      <div class="rec-job-labels">
        ${j.labels.map(l => `<span class="rec-job-label">${l}</span>`).join('')}
      </div>
      ${j.recommended ? '<div class="rec-job-flag"><i data-lucide="thumbs-up" class="lucide"></i> 合うかも</div>' : ''}
    </div>
  `).join('')}</div>`;

  document.getElementById('rec-companies-grid').innerHTML = companies.map(c => `
    <div class="rec-company-card">
      <div class="rec-company-photo">
        <img src="${c.image}" alt="${c.name}">
        <div class="rec-company-photo-overlay">
          <span class="co-photo-label">${c.label}</span>
        </div>
      </div>
      <div class="rec-company-body">
        <h4 class="rec-company-name">${c.name}</h4>
        <span class="rec-company-industry">${c.industry} / ${c.jobType}</span>
        <p class="rec-company-desc">${c.description}</p>
        <div class="rec-company-point">
          <i data-lucide="map-pin" class="lucide"></i>
          <span>${c.point}</span>
        </div>
        <a href="companies.html#company-${c.id}" class="support-link" style="margin-top: 12px;">詳しく見る <i data-lucide="arrow-right" class="lucide"></i></a>
      </div>
    </div>
  `).join('');

  document.getElementById('rec-events-grid').innerHTML = eventsDB.map(e => `
    <div class="rec-event-card">
      <div class="event-category" style="display: inline-flex; margin-bottom: 8px;">${e.category}</div>
      <h4 class="rec-event-title">${e.title}</h4>
      <p class="rec-event-date"><i data-lucide="calendar" class="lucide"></i> ${e.date}</p>
      <p class="rec-event-desc">${e.description}</p>
      <a href="events.html" class="support-link" style="margin-top: 12px;">詳しく見る <i data-lucide="arrow-right" class="lucide"></i></a>
    </div>
  `).join('');
}

function resetDiagnosis() {
  document.getElementById('recommend-results').style.display = 'none';
  document.getElementById('recommend-input').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
