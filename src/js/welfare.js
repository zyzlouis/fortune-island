/**
 * 财神殿 - 福利中心交互逻辑
 * 签到 / 摇签筒 / 红包雨 / 聚宝盆转盘
 */

document.addEventListener('DOMContentLoaded', () => {
  initWelfareTabs();
  initCheckIn();
  initShakeLottery();
  initRedPacketRain();
  initSpinWheel();
});

/* ===== Tab 切换 ===== */
function initWelfareTabs() {
  const tabs = document.querySelectorAll('.welfare-tab');
  const panels = document.querySelectorAll('.welfare-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

/* ======================================
   签到系统 - 晨钟暮鼓
   ====================================== */
function initCheckIn() {
  const STORAGE_KEY = 'moneygod_checkin';
  const today = getDateStr(new Date());

  function getData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { dates: [], streak: 0, total: 0, points: 0 };
    } catch { return { dates: [], streak: 0, total: 0, points: 0 }; }
  }

  function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

  function getDateStr(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  // 里程碑奖励
  const milestones = [
    { day: 1,  reward: 10,  label: '财神赐福' },
    { day: 3,  reward: 30,  label: '三香齐燃' },
    { day: 7,  reward: 100, label: '七星聚财' },
    { day: 14, reward: 250, label: '虔诚香客' },
    { day: 30, reward: 888, label: '财神显灵' },
  ];

  function getDayReward(streak) {
    const m = milestones.find(x => x.day === streak);
    return m ? m.reward : (5 + Math.min(streak, 30));
  }

  // 计算连签
  function calcStreak(dates) {
    if (!dates.length) return 0;
    const sorted = [...dates].sort().reverse();
    let streak = 0;
    let check = new Date();
    // 如果今天已签到，从今天开始算；否则从昨天开始
    if (sorted[0] !== getDateStr(check)) {
      check.setDate(check.getDate() - 1);
    }
    for (let i = 0; i < 60; i++) {
      const ds = getDateStr(check);
      if (sorted.includes(ds)) {
        streak++;
        check.setDate(check.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  function renderCalendar() {
    const data = getData();
    data.streak = calcStreak(data.dates);
    saveData(data);

    const calEl = document.getElementById('checkinCalendar');
    const streakEl = document.getElementById('checkinStreak');
    const totalEl = document.getElementById('checkinTotal');
    const pointsEl = document.getElementById('checkinPoints');
    const rateEl = document.getElementById('checkinRate');
    const btn = document.getElementById('checkinBtn');
    if (!calEl) return;

    // 更新统计
    streakEl.textContent = data.streak;
    totalEl.textContent = data.total;
    pointsEl.textContent = data.points.toLocaleString();

    // 本月签到率
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const monthDates = data.dates.filter(d => d.startsWith(`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`));
    rateEl.textContent = Math.round((monthDates.length / now.getDate()) * 100) + '%';

    // 渲染日历 (当月)
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const totalDays = new Date(year, month + 1, 0).getDate();
    const todayDate = now.getDate();

    calEl.innerHTML = '';
    // 星期头
    ['日','一','二','三','四','五','六'].forEach(d => {
      calEl.innerHTML += `<div class="cal-header">${d}</div>`;
    });

    // 空白填充
    for (let i = 0; i < firstDay; i++) {
      calEl.innerHTML += `<div class="cal-day empty"></div>`;
    }

    // 日期
    for (let d = 1; d <= totalDays; d++) {
      const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const isToday = d === todayDate;
      const isChecked = data.dates.includes(ds);
      const isFuture = d > todayDate;

      let cls = 'cal-day';
      if (isChecked) cls += ' checked';
      else if (isToday) cls += ' today';
      else if (isFuture) cls += ' future';

      calEl.innerHTML += `
        <div class="${cls}" data-date="${ds}">
          <span class="day-num">${d}</span>
        </div>`;
    }

    // 按钮状态
    const alreadyChecked = data.dates.includes(today);
    if (alreadyChecked) {
      btn.textContent = '✅ 今日已签到';
      btn.classList.add('done');
      btn.disabled = true;
    } else {
      btn.textContent = '🔥 立即签到';
      btn.classList.remove('done');
      btn.disabled = false;
    }

    // 里程碑
    const msEl = document.getElementById('checkinMilestones');
    if (msEl) {
      msEl.innerHTML = milestones.map(m => `
        <div class="milestone-item">
          <div class="milestone-day ${data.streak >= m.day ? 'reached' : ''}">D${m.day}</div>
          <div class="milestone-info">
            <strong>${m.label}</strong>
            <span>+${m.reward} MONEYGOD</span>
          </div>
        </div>
      `).join('');
    }
  }

  // 签到点击
  document.getElementById('checkinBtn')?.addEventListener('click', () => {
    const data = getData();
    if (data.dates.includes(today)) return;

    data.dates.push(today);
    data.total++;
    data.streak = calcStreak(data.dates);
    const reward = getDayReward(data.streak);
    data.points += reward;
    saveData(data);

    // 粒子动画
    showCheckinAnim();

    renderCalendar();
  });

  function showCheckinAnim() {
    const anim = document.getElementById('checkinAnim');
    if (!anim) return;
    anim.classList.add('show');
    anim.innerHTML = '';
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'incense-particle';
      p.style.left = (40 + Math.random() * 20) + '%';
      p.style.top = (60 + Math.random() * 20) + '%';
      p.style.animationDelay = (Math.random() * 0.5) + 's';
      p.style.background = Math.random() > 0.5 ? '#d4a017' : '#e74c3c';
      anim.appendChild(p);
    }
    setTimeout(() => { anim.classList.remove('show'); anim.innerHTML = ''; }, 2000);
  }

  renderCalendar();
}

/* ======================================
   摇签筒
   ====================================== */
function initShakeLottery() {
  const STORAGE_KEY = 'moneygod_shake';
  const today = new Date().toISOString().slice(0, 10);

  function getData() {
    try {
      const d = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { date: '', used: 0 };
      if (d.date !== today) return { date: today, used: 0 };
      return d;
    } catch { return { date: today, used: 0 }; }
  }
  function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

  const lots = [
    { grade: '上上签', cls: 'grade-ss', prob: 0.02, reward: 188,
      poems: [
        '五路财神齐降临，链上处处有黄金。\n今日宜动不宜静，把握时机胜万金。',
        '紫气东来满乾坤，财源滚滚入家门。\n放胆布局莫犹豫，一夜暴富非虚文。',
      ]},
    { grade: '上签', cls: 'grade-s', prob: 0.13, reward: 68,
      poems: [
        '金鞭一挥百宝开，持币不动自然来。\n财星高照吉时到，坐等花开满堂彩。',
        '黑虎啸风山谷响，财运亨通路渐广。\n今日投资多有利，收益翻倍不用想。',
      ]},
    { grade: '中签', cls: 'grade-a', prob: 0.40, reward: 10,
      poems: [
        '稳中求进莫心急，细水长流有收益。\n定投策略最稳妥，日积月累成大器。',
        '风平浪静水如镜，财运平稳心安宁。\n不求暴涨求稳健，长线持有见光明。',
      ]},
    { grade: '下签', cls: 'grade-b', prob: 0.35, reward: 3,
      poems: [
        '乌云压顶需谨慎，减仓观望保平安。\n逆境之中有转机，耐心等待见青天。',
        '山雨欲来风满楼，此时操作宜回收。\n保存实力待时机，来日方长不必愁。',
      ]},
    { grade: '下下签', cls: 'grade-c', prob: 0.10, reward: 1,
      poems: [
        '黑虎下山有凶兆，暂避锋芒待转机。\n空仓观望为上策，莫把辛苦钱抛弃。',
        '阴云密布雷声隐，此时入场恐伤身。\n且将资金放稳处，待到云开再翻新。',
      ]},
  ];

  function draw() {
    const r = Math.random();
    let cumulative = 0;
    for (const lot of lots) {
      cumulative += lot.prob;
      if (r <= cumulative) return lot;
    }
    return lots[2]; // fallback
  }

  const tube = document.getElementById('shakeTube');
  const resultCard = document.getElementById('shakeResultCard');
  const emptyEl = document.getElementById('shakeResultEmpty');
  const freeEl = document.getElementById('shakeFreeCount');
  if (!tube) return;

  function updateFreeCount() {
    const data = getData();
    const remaining = Math.max(0, 1 - data.used);
    if (freeEl) freeEl.textContent = `今日免费次数: ${remaining}/1`;
  }

  updateFreeCount();

  let isShaking = false;

  tube.addEventListener('click', () => {
    if (isShaking) return;
    const data = getData();
    if (data.used >= 1) {
      // 付费抽取提示
      if (!confirm('今日免费次数已用完，消耗 5 MONEYGOD 继续？')) return;
    }

    isShaking = true;
    tube.classList.add('shaking');

    // 摇签动画
    setTimeout(() => {
      tube.classList.remove('shaking');
      isShaking = false;

      const lot = draw();
      const poem = lot.poems[Math.floor(Math.random() * lot.poems.length)];

      // 显示结果
      if (emptyEl) emptyEl.style.display = 'none';
      if (resultCard) {
        resultCard.classList.add('show');
        resultCard.querySelector('.result-grade').textContent = lot.grade;
        resultCard.querySelector('.result-grade').className = `result-grade ${lot.cls}`;
        resultCard.querySelector('.result-poem').innerHTML = poem.replace(/\n/g, '<br>');
        resultCard.querySelector('.result-reward').textContent = `+${lot.reward} MONEYGOD`;
      }

      data.used++;
      saveData(data);
      updateFreeCount();
    }, 1200);
  });
}

/* ======================================
   红包雨
   ====================================== */
function initRedPacketRain() {
  const STORAGE_KEY = 'moneygod_rain';
  const today = new Date().toISOString().slice(0, 10);

  function getData() {
    try {
      const d = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { date: '', used: 0 };
      if (d.date !== today) return { date: today, used: 0 };
      return d;
    } catch { return { date: today, used: 0 }; }
  }
  function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

  const canvas = document.getElementById('rainCanvas');
  const startOverlay = document.getElementById('rainStartOverlay');
  const endOverlay = document.getElementById('rainEndOverlay');
  const startBtn = document.getElementById('rainStartBtn');
  const replayBtn = document.getElementById('rainReplayBtn');
  const scoreDisplay = document.getElementById('rainScore');
  const timerDisplay = document.getElementById('rainTimer');
  const endScore = document.getElementById('rainEndScore');
  const freeEl = document.getElementById('rainFreeCount');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animFrame, items = [], score = 0, timeLeft = 15, gameRunning = false;

  const ITEM_TYPES = [
    { emoji: '🧧', points: 5,   weight: 45 },
    { emoji: '🪙', points: 15,  weight: 25 },
    { emoji: '💣', points: -20, weight: 20 },
    { emoji: '👑', points: 50,  weight: 10 },
  ];

  function updateFree() {
    const d = getData();
    const rem = Math.max(0, 3 - d.used);
    if (freeEl) freeEl.textContent = `今日免费: ${rem}/3`;
  }
  updateFree();

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function pickType() {
    const total = ITEM_TYPES.reduce((s, t) => s + t.weight, 0);
    let r = Math.random() * total, cum = 0;
    for (const t of ITEM_TYPES) {
      cum += t.weight;
      if (r <= cum) return t;
    }
    return ITEM_TYPES[0];
  }

  function spawnItem() {
    const type = pickType();
    items.push({
      x: Math.random() * (canvas.width - 40) + 20,
      y: -30,
      type,
      speed: 2 + Math.random() * 3 + (15 - timeLeft) * 0.15,
      size: 28 + Math.random() * 10,
      alive: true,
    });
  }

  function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 生成
    if (Math.random() < 0.12 + (15 - timeLeft) * 0.008) spawnItem();

    // 更新绘制
    items = items.filter(it => it.alive && it.y < canvas.height + 40);
    items.forEach(it => {
      it.y += it.speed;
      ctx.font = `${it.size}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(it.type.emoji, it.x, it.y);
    });

    animFrame = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    const data = getData();
    if (data.used >= 3) {
      alert('今日免费次数已用完，明日再来！');
      return;
    }

    resizeCanvas();
    score = 0; timeLeft = 15; items = []; gameRunning = true;
    scoreDisplay.textContent = '0';
    timerDisplay.textContent = '15';
    startOverlay.classList.add('hidden');
    endOverlay.classList.remove('show');

    // 倒计时
    const timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);

    gameLoop();

    data.used++;
    saveData(data);
    updateFree();
  }

  function endGame() {
    gameRunning = false;
    cancelAnimationFrame(animFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    endScore.textContent = score;
    endOverlay.classList.add('show');
  }

  // 点击/触摸捕获
  canvas.addEventListener('click', (e) => {
    if (!gameRunning) return;
    const rect = canvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      if (Math.abs(cx - it.x) < it.size && Math.abs(cy - it.y) < it.size) {
        it.alive = false;
        score = Math.max(0, score + it.type.points);
        scoreDisplay.textContent = score;

        // 爆炸效果
        if (it.type.points > 0) {
          showClickEffect(cx, cy, it.type.points > 20 ? '#FFD700' : '#e74c3c');
        }
        break;
      }
    }
  });

  function showClickEffect(x, y, color) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = color + '40';
    ctx.fill();
    ctx.restore();
  }

  startBtn?.addEventListener('click', startGame);
  replayBtn?.addEventListener('click', startGame);
}

/* ======================================
   聚宝盆转盘
   ====================================== */
function initSpinWheel() {
  const STORAGE_KEY = 'moneygod_spin';
  const today = new Date().toISOString().slice(0, 10);

  function getData() {
    try {
      const d = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { date: '', used: 0 };
      if (d.date !== today) return { date: today, used: 0 };
      return d;
    } catch { return { date: today, used: 0 }; }
  }
  function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

  const prizes = [
    { label: '888',       icon: '💰', color: '#d4a017', text: '#000',   prob: 0.01 },
    { label: '168',       icon: '🪙', color: '#c0392b', text: '#fff',   prob: 0.04 },
    { label: '88',        icon: '🧧', color: '#d4a017', text: '#000',   prob: 0.08 },
    { label: '38',        icon: '✨', color: '#8e44ad', text: '#fff',   prob: 0.12 },
    { label: '18',        icon: '🔥', color: '#d4a017', text: '#000',   prob: 0.20 },
    { label: '谢谢参与',   icon: '😅', color: '#2c3e50', text: '#aaa',  prob: 0.30 },
    { label: 'NFT 碎片',  icon: '🧩', color: '#d4a017', text: '#000',   prob: 0.10 },
    { label: '双倍卡',    icon: '🃏', color: '#27ae60', text: '#fff',   prob: 0.15 },
  ];

  const wheelCanvas = document.getElementById('spinWheelCanvas');
  const spinBtn = document.getElementById('spinBtn');
  const resultMsg = document.getElementById('spinResultMsg');
  const freeEl = document.getElementById('spinFreeCount');
  if (!wheelCanvas) return;

  const ctx = wheelCanvas.getContext('2d');
  const size = wheelCanvas.width = wheelCanvas.height = 400;
  const cx = size / 2, cy = size / 2, radius = size / 2 - 4;
  const segAngle = (Math.PI * 2) / prizes.length;
  let currentRotation = 0;

  function drawWheel() {
    ctx.clearRect(0, 0, size, size);
    prizes.forEach((p, i) => {
      const startAngle = i * segAngle - Math.PI / 2;
      const endAngle = startAngle + segAngle;

      // 扇形
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 文字
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + segAngle / 2);
      ctx.textAlign = 'center';

      ctx.font = '24px serif';
      ctx.fillText(p.icon, radius * 0.55, 6);

      ctx.font = 'bold 13px "Noto Sans SC", sans-serif';
      ctx.fillStyle = p.text;
      ctx.fillText(p.label, radius * 0.78, 5);

      ctx.restore();
    });
  }

  drawWheel();

  function updateFree() {
    const d = getData();
    const rem = Math.max(0, 1 - d.used);
    if (freeEl) freeEl.textContent = `今日免费: ${rem}/1`;
  }
  updateFree();

  let spinning = false;

  spinBtn?.addEventListener('click', () => {
    if (spinning) return;
    const data = getData();
    if (data.used >= 1) {
      if (!confirm('今日免费次数已用完，消耗 10 MONEYGOD 继续？')) return;
    }

    spinning = true;
    spinBtn.disabled = true;
    resultMsg.textContent = '转盘旋转中...';

    // 确定结果
    let r = Math.random(), cum = 0, winIndex = 5;
    for (let i = 0; i < prizes.length; i++) {
      cum += prizes[i].prob;
      if (r <= cum) { winIndex = i; break; }
    }

    // 计算旋转角度：目标扇区中心
    const targetAngle = (prizes.length - winIndex) * segAngle - segAngle / 2;
    const extraSpins = 5 + Math.floor(Math.random() * 3); // 5-7 圈
    const totalAngle = extraSpins * Math.PI * 2 + targetAngle;

    currentRotation = totalAngle;
    wheelCanvas.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    wheelCanvas.style.transform = `rotate(${totalAngle}rad)`;

    setTimeout(() => {
      spinning = false;
      spinBtn.disabled = false;
      const prize = prizes[winIndex];
      resultMsg.textContent = `🎉 恭喜获得: ${prize.icon} ${prize.label}${prize.label !== '谢谢参与' && prize.label !== 'NFT 碎片' && prize.label !== '双倍卡' ? ' MONEYGOD' : ''}`;

      data.used++;
      saveData(data);
      updateFree();
    }, 4200);
  });
}
