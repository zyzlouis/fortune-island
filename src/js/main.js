/**
 * 财神殿 - The Palace of Wealth
 * 主交互逻辑
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initOracle();
  initPredictionTimer();
  initScrollAnimations();
  initNftTabs();
  initMobileMenu();
  initCountUp();
  initRitualPackages();
  initBazi();

  // 初始化国际化
  if (typeof I18N !== 'undefined') {
    I18N.init();
  }
});

/* ===== 导航栏滚动效果 ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPos = target.offsetTop - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });

        // 关闭移动端菜单
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('mobileMenuBtn').classList.remove('active');
      }
    });
  });
}

/* ===== 移动端菜单 ===== */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('active');
  });
}

/* ===== 英雄区粒子效果 ===== */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const colors = ['gold', 'red'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle', colors[Math.floor(Math.random() * colors.length)]);

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;

    container.appendChild(particle);
  }
}

/* ===== 财神神谕 ===== */
function initOracle() {
  const oracles = [
    {
      text: '今日宜守不宜攻，大盘震荡筑底中。\n逢低布局蓝筹链，静待黑虎啸山风。',
      stars: '★★★★☆',
      hour: '巳时 (9:00-11:00)',
    },
    {
      text: '财星高照吉时来，金鞭一挥百宝开。\n持币不动胜追涨，坐等花开自然来。',
      stars: '★★★★★',
      hour: '午时 (11:00-13:00)',
    },
    {
      text: '乌云压顶莫惊慌，风雨之后见曙光。\n短线勿贪守长线，聚宝盆中自有粮。',
      stars: '★★★☆☆',
      hour: '未时 (13:00-15:00)',
    },
    {
      text: '五路财神齐降临，链上处处有黄金。\n今日宜动不宜静，把握时机胜万金。',
      stars: '★★★★★',
      hour: '寅时 (3:00-5:00)',
    },
    {
      text: '黑虎巡山有异象，山雨欲来风满堂。\n稳住心神观大势，回调之后是晴朗。',
      stars: '★★★☆☆',
      hour: '酉时 (17:00-19:00)',
    },
    {
      text: '神珠在手运道强，一路向上不可挡。\n今日利好频频至，大胆布局正当时。',
      stars: '★★★★★',
      hour: '辰时 (7:00-9:00)',
    },
  ];

  // 设置日期
  const dateEl = document.getElementById('oracleDate');
  if (dateEl) {
    const now = new Date();
    const lunar = getLunarInfo(now);
    dateEl.textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${lunar}`;
  }

  // 每日求签
  const drawBtn = document.getElementById('drawOracleBtn');
  if (drawBtn) {
    drawBtn.addEventListener('click', () => {
      const rand = Math.floor(Math.random() * oracles.length);
      const oracle = oracles[rand];

      const textEl = document.getElementById('oracleText');
      const starsEl = document.getElementById('fortuneStars');
      const hourEl = document.getElementById('luckyHour');

      // 动画效果
      textEl.style.opacity = '0';
      textEl.style.transform = 'translateY(10px)';

      setTimeout(() => {
        textEl.innerHTML = oracle.text.replace(/\n/g, '<br />');
        starsEl.textContent = oracle.stars;
        hourEl.textContent = oracle.hour;

        textEl.style.transition = 'all 0.5s ease';
        textEl.style.opacity = '1';
        textEl.style.transform = 'translateY(0)';
      }, 300);

      // 按钮动画
      drawBtn.textContent = '🎴 求签中...';
      drawBtn.disabled = true;
      setTimeout(() => {
        drawBtn.textContent = '🎴 再求一签';
        drawBtn.disabled = false;
      }, 800);
    });
  }
}

function getLunarInfo(date) {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const year = date.getFullYear();
  const stemIdx = (year - 4) % 10;
  const branchIdx = (year - 4) % 12;
  return `${stems[stemIdx]}${branches[branchIdx]}年`;
}

/* ===== 预测倒计时 ===== */
function initPredictionTimer() {
  const timerEl = document.getElementById('predictionTimer');
  if (!timerEl) return;

  let totalSeconds = 45 * 60 + 30; // 45:30

  function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const nums = timerEl.querySelectorAll('.timer-num');
    if (nums.length === 3) {
      nums[0].textContent = String(hours).padStart(2, '0');
      nums[1].textContent = String(minutes).padStart(2, '0');
      nums[2].textContent = String(seconds).padStart(2, '0');
    }

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 3600; // 重置
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ===== 滚动动画 ===== */
function initScrollAnimations() {
  // 给需要动画的元素添加 class
  const targets = document.querySelectorAll(
    '.staking-card, .gamefi-card, .nft-card, .token-info-card, .token-uses, .partner-item, .treasure-item, .ritual-card, .ritual-temple, .process-step, .testimonial-card, .bazi-card, .bazi-service-card, .bazi-hero-card, .welfare-tabs, .welfare-panel, .checkin-stat-card, .shake-scene, .rain-arena, .spin-stage, .spin-prize-item'
  );

  targets.forEach(el => {
    el.classList.add('fade-in-up');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ===== NFT 标签切换 ===== */
function initNftTabs() {
  const tabs = document.querySelectorAll('.nft-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 简单的动画效果
      const grid = document.getElementById('nftGrid');
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(10px)';

      setTimeout(() => {
        grid.style.transition = 'all 0.4s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 200);
    });
  });
}

/* ===== 数字滚动动画 ===== */
function initCountUp() {
  const statElements = [
    { id: 'tvlValue', target: 12888888, prefix: '$', format: true },
    { id: 'usersValue', target: 28888, prefix: '', format: true },
    { id: 'nftValue', target: 8888, prefix: '', format: true },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const config = statElements.find(s => s.id === entry.target.id);
          if (config) {
            animateCount(entry.target, config);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statElements.forEach(stat => {
    const el = document.getElementById(stat.id);
    if (el) observer.observe(el);
  });
}

function animateCount(element, config) {
  const duration = 2000;
  const fps = 60;
  const totalFrames = duration / (1000 / fps);
  let frame = 0;

  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuart(frame / totalFrames);
    const current = Math.floor(config.target * progress);

    if (config.format) {
      element.textContent = config.prefix + current.toLocaleString();
    } else {
      element.textContent = config.prefix + current;
    }

    if (frame >= totalFrames) {
      element.textContent = config.prefix + config.target.toLocaleString();
      clearInterval(counter);
    }
  }, 1000 / fps);
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

/* ===== 法事套餐选择 ===== */
function initRitualPackages() {
  document.querySelectorAll('.ritual-card').forEach(card => {
    const pkgs = card.querySelectorAll('.ritual-pkg');
    pkgs.forEach(pkg => {
      pkg.addEventListener('click', () => {
        // 同一张卡片内取消其他选中
        pkgs.forEach(p => p.classList.remove('selected'));
        pkg.classList.add('selected');

        // 微动画反馈
        pkg.style.transform = 'scale(1.03)';
        setTimeout(() => { pkg.style.transform = ''; }, 200);
      });
    });
  });

  // 给法事卡片也加入滚动动画
  document.querySelectorAll('.ritual-card, .process-step, .testimonial-card, .ritual-temple').forEach(el => {
    el.classList.add('fade-in-up');
  });
}

/* ===== 八字命理交互 ===== */
function initBazi() {
  const submitBtn = document.getElementById('baziSubmitBtn');
  const freeBtn = document.getElementById('baziFreeBtn');
  const resultEl = document.getElementById('baziResult');

  // 天干地支数据
  const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const branches = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  const elements = ['wood','wood','fire','fire','earth','earth','metal','metal','water','water'];
  const elLabels = ['🌲 木','🌲 木','🔥 火','🔥 火','🌍 土','🌍 土','🪙 金','🪙 金','💧 水','💧 水'];
  const branchElements = ['water','earth','wood','wood','earth','fire','fire','earth','metal','metal','earth','water'];
  const branchElLabels = ['💧 水','🌍 土','🌲 木','🌲 木','🌍 土','🔥 火','🔥 火','🌍 土','🪙 金','🪙 金','🌍 土','💧 水'];

  const fortunes = [
    '日主身强，财星得力，先天具备聚财之相。今年流年助运，财源广进可期。',
    '日主壬水，财星为火，八字中火旺有力，先天财运格局优良。正财稳健，偏财亦有机缘。',
    '命带偏财，善于把握投资机会。链上交易多有斩获，适合布局新兴赛道。',
    '食伤生财格局清奇，创意生财能力突出。适合在 Web3 领域开拓创新。',
    '正官配正财，事业根基稳固。踏实经营者必有厚报，忌急功近利。',
    '伤官佩印格局难得，智慧与财运并存。适合深耕 DeFi 领域。',
  ];

  const adviceDirections = ['正南','正北','正东','正西','东南','西北','东北','西南'];
  const adviceColors = [
    '白色、金色、银色', '黑色、蓝色、灰色', '绿色、青色、碧色',
    '红色、橙色、紫色', '黄色、棕色、米色', '白色、金色',
  ];
  const adviceNumbers = ['1、6','2、7','3、8','4、9','5、0','6、1'];

  function calcPillar(date, hourIdx) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // 年柱 (简化算法)
    const yStemIdx = (year - 4) % 10;
    const yBranchIdx = (year - 4) % 12;

    // 月柱
    const mStemIdx = ((year % 10 - 4 + 10) % 10 * 2 + month) % 10;
    const mBranchIdx = (month + 1) % 12;

    // 日柱 (简化: 基于日期的哈希)
    const dayHash = Math.floor((Date.UTC(year, month - 1, day) / 86400000 + 25567 + 10)) ;
    const dStemIdx = ((dayHash % 10) + 10) % 10;
    const dBranchIdx = ((dayHash % 12) + 12) % 12;

    // 时柱
    const hStemIdx = (dStemIdx * 2 + hourIdx) % 10;
    const hBranchIdx = hourIdx;

    return {
      year:  { stem: yStemIdx, branch: yBranchIdx },
      month: { stem: mStemIdx, branch: mBranchIdx },
      day:   { stem: dStemIdx, branch: dBranchIdx },
      hour:  { stem: hStemIdx, branch: hBranchIdx },
    };
  }

  function setPillar(prefix, stemIdx, branchIdx) {
    document.getElementById(`pillar${prefix}Stem`).textContent = stems[stemIdx];
    document.getElementById(`pillar${prefix}Branch`).textContent = branches[branchIdx];

    const elSpan = document.getElementById(`pillar${prefix}Stem`).closest('.bazi-pillar').querySelector('.pillar-element');
    const elType = elements[stemIdx];
    elSpan.className = 'pillar-element ' + elType;
    elSpan.textContent = elLabels[stemIdx];
  }

  function calcWuxing(pillars) {
    const counts = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
    const allStems = [pillars.year.stem, pillars.month.stem, pillars.day.stem, pillars.hour.stem];
    const allBranches = [pillars.year.branch, pillars.month.branch, pillars.day.branch, pillars.hour.branch];

    allStems.forEach(s => { counts[elements[s]] += 1; });
    allBranches.forEach(b => { counts[branchElements[b]] += 1; });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const pct = {};
    for (const k in counts) {
      pct[k] = Math.round((counts[k] / total) * 100);
    }
    return pct;
  }

  function runAnalysis() {
    const dateVal = document.getElementById('baziDate').value;
    const hourIdx = parseInt(document.getElementById('baziHour').value);
    if (!dateVal) return;

    const date = new Date(dateVal + 'T00:00:00');
    const pillars = calcPillar(date, hourIdx);

    // 更新四柱
    setPillar('Year', pillars.year.stem, pillars.year.branch);
    setPillar('Month', pillars.month.stem, pillars.month.branch);
    setPillar('Day', pillars.day.stem, pillars.day.branch);
    setPillar('Hour', pillars.hour.stem, pillars.hour.branch);

    // 四柱动画
    document.querySelectorAll('.bazi-pillar').forEach((p, i) => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(20px)';
      setTimeout(() => {
        p.style.transition = 'all 0.5s ease';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      }, i * 150);
    });

    // 五行比例
    const wuxing = calcWuxing(pillars);
    const order = ['wood','fire','earth','metal','water'];
    document.querySelectorAll('.wuxing-fill').forEach((bar, i) => {
      const key = order[i];
      bar.style.width = wuxing[key] + '%';
    });
    document.querySelectorAll('.wuxing-pct').forEach((el, i) => {
      el.textContent = wuxing[order[i]] + '%';
    });

    // 财运评分 (60-95)
    const seed = (pillars.day.stem * 7 + pillars.hour.branch * 3 + pillars.year.stem) % 36;
    const score = 60 + seed;
    document.getElementById('fortuneScore').textContent = score;

    // 更新环形进度
    const ring = document.getElementById('fortuneRing');
    const circumference = 2 * Math.PI * 42; // ~264
    const dashLen = (score / 100) * circumference;
    ring.setAttribute('stroke-dasharray', `${dashLen} ${circumference}`);

    // 财运文字
    const fIdx = (pillars.day.stem + pillars.month.stem) % fortunes.length;
    document.getElementById('fortuneSummary').textContent = fortunes[fIdx];

    // 开运建议
    const dirIdx = (pillars.year.branch + pillars.day.branch) % adviceDirections.length;
    const colIdx = pillars.day.stem % adviceColors.length;
    const numIdx = (pillars.day.stem + pillars.hour.stem) % adviceNumbers.length;

    const adviceItems = document.querySelectorAll('.advice-item p');
    if (adviceItems.length >= 3) {
      adviceItems[0].textContent = `${adviceDirections[dirIdx]}方为您的流年财位，建议在此方位摆放财神像或聚宝盆`;
      adviceItems[1].textContent = `${adviceColors[colIdx]}为喜用之色，日常穿着可多用`;
      adviceItems[2].textContent = `${adviceNumbers[numIdx]} 为大吉之数，可用于钱包地址末位或交易金额`;
    }

    // 显示结果区域
    resultEl.style.display = 'block';
    resultEl.style.opacity = '0';
    setTimeout(() => {
      resultEl.style.transition = 'opacity 0.6s ease';
      resultEl.style.opacity = '1';
    }, 400);
  }

  if (submitBtn) submitBtn.addEventListener('click', runAnalysis);
  if (freeBtn) freeBtn.addEventListener('click', runAnalysis);

  // 给八字相关卡片加滚动动画
  document.querySelectorAll('.bazi-card, .bazi-service-card, .bazi-hero-card').forEach(el => {
    el.classList.add('fade-in-up');
  });
}

/* ===== 连接钱包按钮 ===== */
document.getElementById('connectWallet')?.addEventListener('click', () => {
  const btn = document.getElementById('connectWallet');
  const t = (key) => typeof I18N !== 'undefined' ? I18N.t(key) : key;

  if (btn.dataset.connected === 'true') {
    btn.innerHTML = `<span class="btn-icon">⛓️</span> <span data-i18n="nav.connect">${t('nav.connect')}</span>`;
    btn.dataset.connected = 'false';
    return;
  }

  btn.innerHTML = `<span class="btn-icon">⏳</span> <span data-i18n="nav.connecting">${t('nav.connecting')}</span>`;
  btn.disabled = true;

  setTimeout(() => {
    const addr = '0x' + Math.random().toString(16).substr(2, 4) + '...' +
                 Math.random().toString(16).substr(2, 4);
    btn.innerHTML = `<span class="btn-icon">✅</span> ${addr}`;
    btn.disabled = false;
    btn.dataset.connected = 'true';
  }, 1500);
});
