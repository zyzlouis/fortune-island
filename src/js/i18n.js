/**
 * 财富岛 Fortune Island - 国际化 (i18n) 模块
 * 支持中文 / English 切换
 */

const I18N = {
  currentLang: localStorage.getItem('lang') || 'zh',

  translations: {
    // ===== 导航 =====
    'nav.logo': { zh: '财富岛', en: 'Fortune Island' },
    'nav.oracle': { zh: '财神指引', en: 'Oracle' },
    'nav.ritual': { zh: '云端法事', en: 'Rituals' },
    'nav.bazi': { zh: '命运罗盘', en: 'Destiny' },
    'nav.welfare': { zh: '🎁 福禄广场', en: '🎁 Rewards' },
    'nav.staking': { zh: '财富神殿', en: 'Staking' },
    'nav.gamefi': { zh: '黑虎竞技场', en: 'Arena' },
    'nav.nft': { zh: '法器锻造坊', en: 'Artifacts' },
    'nav.token': { zh: '$MONEYGOD', en: '$MONEYGOD' },
    'nav.market': { zh: '行情', en: 'Market' },
    'nav.connect': { zh: '连接钱包', en: 'Connect Wallet' },
    'nav.connecting': { zh: '连接中...', en: 'Connecting...' },

    // ===== 英雄区 =====
    'hero.badge': { zh: '⚡ BNB Chain 首个元宇宙财神文化平台', en: '⚡ The First Metaverse Fortune Culture Platform on BNB Chain' },
    'hero.title1': { zh: '财富岛', en: 'Fortune' },
    'hero.title2': { zh: 'Fortune Island', en: 'Island' },
    'hero.subtitle': {
      zh: '以正财神赵公明为守护神，融合元宇宙 · DeFi · GameFi · NFT，开启千年财神文化的 Web3 新纪元',
      en: 'Guarded by Zhao Gongming, the God of Wealth. A Web3 odyssey merging Metaverse · DeFi · GameFi · NFT with millennia of fortune culture.'
    },
    'hero.tvl': { zh: '岛内锁仓量 (TVL)', en: 'Total Value Locked (TVL)' },
    'hero.users': { zh: '岛民数量', en: 'Island Citizens' },
    'hero.nfts': { zh: '法器 NFT', en: 'Artifact NFTs' },
    'hero.cta1': { zh: '🔥 登岛探索', en: '🔥 Enter the Island' },
    'hero.cta2': { zh: '⚔️ 法器宝库', en: '⚔️ Explore Artifacts' },
    'hero.scroll': { zh: '向下探索', en: 'Scroll Down' },

    // ===== 财神指引（神谕）=====
    'oracle.title': { zh: '📜 赵公明 · 财神指引', en: '📜 Zhao Gongming · Divine Oracle' },
    'oracle.desc': { zh: '财神每日为您开示财运玄机，指引元宇宙财富之路', en: 'The God of Wealth reveals daily fortune insights to guide your metaverse wealth journey' },
    'oracle.seal': { zh: '财神岛印', en: 'Fortune Island Seal' },
    'oracle.fortune': { zh: '财运', en: 'Fortune' },
    'oracle.luckyHourLabel': { zh: '吉时', en: 'Auspicious Hour' },
    'oracle.luckyColor': { zh: '吉色', en: 'Lucky Color' },
    'oracle.gold': { zh: '金色', en: 'Gold' },
    'oracle.draw': { zh: '🎴 每日求签', en: '🎴 Draw Oracle' },
    'oracle.drawing': { zh: '🎴 求签中...', en: '🎴 Drawing...' },
    'oracle.redraw': { zh: '🎴 再求一签', en: '🎴 Draw Again' },

    // ===== 财富神殿（质押）=====
    'staking.title': { zh: '🏯 财富神殿', en: '🏯 Fortune Temple' },
    'staking.desc': { zh: '质押进入财富神殿，让 $MONEYGOD 在元宇宙中为你生息增值', en: 'Stake into the Fortune Temple and let $MONEYGOD generate wealth in the metaverse' },
    'staking.limited': { zh: '限量', en: 'Limited' },
    'staking.firstIncense': { zh: '上头香（限量）', en: 'First Incense (Limited)' },
    'staking.firstIncenseDesc': { zh: '首次质押即获限量版"头香"纪念 NFT，永久 VIP 特权', en: 'First stakers receive limited "First Incense" NFT with permanent VIP perks' },
    'staking.remaining': { zh: '剩余名额', en: 'Spots Left' },
    'staking.boost': { zh: '收益加成', en: 'Yield Boost' },
    'staking.apy': { zh: '预期年化', en: 'Est. APY' },
    'staking.firstBtn': { zh: '🕯️ 成为头香岛民', en: '🕯️ Claim First Incense' },
    'staking.lantern': { zh: '长明灯', en: 'Eternal Lamp' },
    'staking.lanternDesc': { zh: '质押 LP Token 至长明灯池，持续"燃烧"赚取 $MONEYGOD 福报', en: 'Stake LP Tokens in the Eternal Lamp pool, earn $MONEYGOD blessings continuously' },
    'staking.locked': { zh: '已锁仓', en: 'Locked' },
    'staking.participants': { zh: '参与岛民', en: 'Islanders' },
    'staking.lanternBtn': { zh: '🏮 点亮长明灯', en: '🏮 Light Eternal Lamp' },
    'staking.meritBox': { zh: '功德箱', en: 'Merit Box' },
    'staking.meritBoxDesc': { zh: '直接质押 USDT / BNB / $MONEYGOD 到功德箱，获取稳定收益', en: 'Stake USDT / BNB / $MONEYGOD in the Merit Box for stable returns' },
    'staking.meritBtn': { zh: '📦 投入功德箱', en: '📦 Deposit to Merit Box' },

    // ===== 黑虎竞技场（GameFi）=====
    'gamefi.title': { zh: '🐅 黑虎竞技场', en: '🐅 Black Tiger Arena' },
    'gamefi.desc': { zh: '赵公明座下黑虎镇守竞技场，勇者以 $MONEYGOD 下注，胜者赢取丰厚奖池', en: "Zhao Gongming's Black Tiger guards the Arena — stake $MONEYGOD, winners claim the prize pool" },
    'gamefi.live': { zh: '🔴 进行中', en: '🔴 Live' },
    'gamefi.prediction': { zh: '预测市场', en: 'Prediction Market' },
    'gamefi.tigerTitle': { zh: '⬛ 黑虎下山', en: '⬛ Tiger Descent' },
    'gamefi.tigerDesc': { zh: '预测 BTC 未来 1 小时走势，押对即瓜分奖池', en: 'Predict BTC price in the next hour — correct predictions share the prize pool' },
    'gamefi.pool': { zh: '当前奖池', en: 'Prize Pool' },
    'gamefi.countdown': { zh: '倒计时', en: 'Countdown' },
    'gamefi.bull': { zh: '📈 看涨', en: '📈 Bull' },
    'gamefi.bear': { zh: '📉 看跌', en: '📉 Bear' },
    'gamefi.players': { zh: '参与人数: 1,288', en: 'Players: 1,288' },
    'gamefi.minBet': { zh: '最小投入: 10 MONEYGOD', en: 'Min: 10 MONEYGOD' },
    'gamefi.upcoming': { zh: '⏳ 即将开始', en: '⏳ Upcoming' },
    'gamefi.treasure': { zh: '寻宝航线', en: 'Treasure Voyage' },
    'gamefi.treasureTitle': { zh: '👦 寻宝航线', en: '👦 Treasure Voyage' },
    'gamefi.treasureDesc': { zh: '跨链合作寻宝活动，寻找隐藏在各处的"聚宝盆"碎片', en: 'Cross-chain treasure hunts — find hidden "Cornucopia" fragments across the metaverse' },
    'gamefi.manta': { zh: 'MantaNetwork 联合红包', en: 'MantaNetwork Joint Red Envelope' },
    'gamefi.mantaPool': { zh: '奖池: 5,000 USDT + 50,000 MONEYGOD', en: 'Pool: 5,000 USDT + 50,000 MONEYGOD' },
    'gamefi.goplus': { zh: 'GoPlus Security 安全试炼', en: 'GoPlus Security Trial' },
    'gamefi.goplusPool': { zh: '奖池: 2,000 USDT + 25,000 MONEYGOD', en: 'Pool: 2,000 USDT + 25,000 MONEYGOD' },
    'gamefi.chainlink': { zh: 'Chainlink 神谕之旅', en: 'Chainlink Oracle Quest' },
    'gamefi.chainlinkPool': { zh: '奖池: 3,000 USDT + 30,000 MONEYGOD', en: 'Pool: 3,000 USDT + 30,000 MONEYGOD' },
    'gamefi.hot': { zh: '🔥 热门', en: '🔥 Hot' },
    'gamefi.soon': { zh: '即将开始', en: 'Coming Soon' },
    'gamefi.viewAll': { zh: '查看全部活动 →', en: 'View All Events →' },

    // ===== 法器锻造坊（NFT）=====
    'nft.title': { zh: '⚔️ 法器锻造坊', en: '⚔️ Artifact Forge' },
    'nft.desc': { zh: '在法器锻造坊铸造赵公明的神兵法器，解锁专属链上权益加成', en: 'Forge divine artifacts of Zhao Gongming in the Artifact Forge — unlock on-chain yield boosts' },
    'nft.weapons': { zh: '🗡️ 法器系列', en: '🗡️ Artifact Series' },
    'nft.blessings': { zh: '🙏 祈福系列', en: '🙏 Blessing Series' },
    'nft.legendary': { zh: '传说', en: 'Legendary' },
    'nft.epic': { zh: '史诗', en: 'Epic' },
    'nft.rare': { zh: '稀有', en: 'Rare' },
    'nft.common': { zh: '普通', en: 'Common' },
    'nft.pearl': { zh: '定海神珠', en: 'Sea-Calming Pearl' },
    'nft.pearlEffect': { zh: '质押收益 +15%', en: 'Staking Yield +15%' },
    'nft.pearlSupply': { zh: '限量 88 枚', en: 'Limited: 88' },
    'nft.chain': { zh: '缚龙索', en: 'Dragon-Binding Chain' },
    'nft.chainEffect': { zh: 'GameFi 奖励 +10%', en: 'GameFi Rewards +10%' },
    'nft.chainSupply': { zh: '限量 188 枚', en: 'Limited: 188' },
    'nft.whip': { zh: '如意金鞭', en: 'Ruyi Golden Whip' },
    'nft.whipEffect': { zh: '质押收益 +8%', en: 'Staking Yield +8%' },
    'nft.whipSupply': { zh: '限量 388 枚', en: 'Limited: 388' },
    'nft.bowl': { zh: '聚宝盆', en: 'Cornucopia' },
    'nft.bowlEffect': { zh: '每日空投 +5%', en: 'Daily Airdrop +5%' },
    'nft.bowlSupply': { zh: '限量 888 枚', en: 'Limited: 888' },
    'nft.talisman': { zh: '招财符', en: 'Wealth Talisman' },
    'nft.talismanEffect': { zh: '手续费减免 5%', en: 'Fee Reduction 5%' },
    'nft.talismanSupply': { zh: '限量 1888 枚', en: 'Limited: 1,888' },
    'nft.prayer': { zh: '祈福牌', en: 'Blessing Plaque' },
    'nft.prayerEffect': { zh: '可自定义祝福语', en: 'Customizable Blessing' },
    'nft.prayerSupply': { zh: '不限量', en: 'Unlimited' },

    // ===== 代币经济 =====
    'token.title': { zh: '💰 $MONEYGOD 代币经济', en: '💰 $MONEYGOD Tokenomics' },
    'token.desc': { zh: '$MONEYGOD 是财富岛的治理代币，贯穿整个元宇宙生态系统', en: '$MONEYGOD is the governance token powering the entire Fortune Island ecosystem' },
    'token.supply': { zh: '总供应量', en: 'Total Supply' },
    'token.infoTitle': { zh: '代币信息', en: 'Token Info' },
    'token.name': { zh: '代币名称', en: 'Token Name' },
    'token.symbol': { zh: '代币符号', en: 'Symbol' },
    'token.totalSupply': { zh: '总供应量', en: 'Total Supply' },
    'token.network': { zh: '网络', en: 'Network' },
    'token.standard': { zh: '标准', en: 'Standard' },
    'token.usesTitle': { zh: '代币用途', en: 'Token Utility' },
    'token.staking': { zh: '质押挖矿', en: 'Staking' },
    'token.stakingDesc': { zh: '在财富神殿各种香火池中质押获取收益', en: 'Earn yields across Fortune Temple staking pools' },
    'token.gaming': { zh: '竞技参与', en: 'Arena' },
    'token.gamingDesc': { zh: '黑虎竞技场的参与门票与奖励', en: 'Entry tickets & rewards in the Black Tiger Arena' },
    'token.nftMint': { zh: 'NFT 铸造', en: 'NFT Minting' },
    'token.nftMintDesc': { zh: '铸造法器与祈福牌 NFT', en: 'Forge artifacts and blessing plaques' },
    'token.governance': { zh: '治理投票', en: 'Governance' },
    'token.governanceDesc': { zh: '岛民参与财富岛重大决策投票', en: 'Islanders vote on key Fortune Island decisions' },
    'token.buy': { zh: '🛒 购买 $MONEYGOD (PancakeSwap)', en: '🛒 Buy $MONEYGOD (PancakeSwap)' },
    'token.mining': { zh: '流动性挖矿 30%', en: 'Liquidity Mining 30%' },
    'token.community': { zh: '社区激励 20%', en: 'Community Incentives 20%' },
    'token.team': { zh: '团队与顾问 15%', en: 'Team & Advisors 15%' },
    'token.ecosystem': { zh: '生态发展 10%', en: 'Ecosystem Growth 10%' },
    'token.marketing': { zh: '市场营销 10%', en: 'Marketing 10%' },
    'token.reserve': { zh: '储备金 15%', en: 'Reserve 15%' },

    // ===== 市场行情 =====
    'market.title': { zh: '📊 市场行情', en: '📊 Market Overview' },
    'market.desc': { zh: '实时追踪加密货币行情，财神助您洞察元宇宙财富先机', en: 'Real-time crypto tracking — the God of Wealth helps you spot opportunities' },
    'market.coin': { zh: '币种', en: 'Token' },
    'market.price': { zh: '价格', en: 'Price' },
    'market.24h': { zh: '24h 涨跌', en: '24h Change' },
    'market.7d': { zh: '7d 涨跌', en: '7d Change' },
    'market.mcap': { zh: '市值', en: 'Market Cap' },
    'market.fortune': { zh: '财运', en: 'Fortune' },
    'market.great': { zh: '鸿运当头', en: 'Jackpot' },
    'market.good1': { zh: '大吉', en: 'Great' },
    'market.good2': { zh: '吉', en: 'Good' },
    'market.mid1': { zh: '中吉', en: 'Fair' },
    'market.mid2': { zh: '小吉', en: 'Okay' },

    // ===== 合作伙伴 =====
    'partners.title': { zh: '🤝 合作伙伴', en: '🤝 Partners' },

    // ===== CTA =====
    'cta.title': { zh: '🏮 登上财富岛，开启 Web3 财运之旅', en: '🏮 Set Sail for Fortune Island — Begin Your Web3 Destiny' },
    'cta.desc': { zh: '连接钱包，成为财富岛的第一批岛民，共享链上财富盛宴', en: 'Connect your wallet. Become a founding citizen of Fortune Island. Share in the on-chain feast of wealth.' },
    'cta.enter': { zh: '🔥 立即登岛', en: '🔥 Enter the Island' },
    'cta.whitepaper': { zh: '📄 阅读白皮书', en: '📄 Read Whitepaper' },

    // ===== 页脚 =====
    'footer.brand': { zh: '元宇宙财神文化平台<br/>财富岛 · BNB Chain', en: 'Metaverse Fortune Culture Platform<br/>Fortune Island · BNB Chain' },
    'footer.products': { zh: '产品', en: 'Products' },
    'footer.stakingLink': { zh: '财富神殿', en: 'Fortune Temple' },
    'footer.gamefiLink': { zh: '黑虎竞技场', en: 'Black Tiger Arena' },
    'footer.nftLink': { zh: '法器锻造坊', en: 'Artifact Forge' },
    'footer.marketLink': { zh: '市场行情', en: 'Market' },
    'footer.resources': { zh: '资源', en: 'Resources' },
    'footer.whitepaper': { zh: '白皮书', en: 'Whitepaper' },
    'footer.audit': { zh: '智能合约审计', en: 'Smart Contract Audit' },
    'footer.docs': { zh: '开发者文档', en: 'Developer Docs' },
    'footer.brand2': { zh: '品牌资源', en: 'Brand Assets' },
    'footer.communityTitle': { zh: '社区', en: 'Community' },
    'footer.copyright': { zh: '© 2026 财富岛 Fortune Island. All rights reserved.', en: '© 2026 Fortune Island. All rights reserved.' },
    'footer.powered': { zh: 'Powered by BNB Chain | Smart Contract Audited by CertiK', en: 'Powered by BNB Chain | Smart Contract Audited by CertiK' },

    // ===== 提示 =====
    'alert.wallet': { zh: '请先连接钱包', en: 'Please connect your wallet first' },

    // ===== 云端法事 =====
    'ritual.title': { zh: '🏛️ 云端祖庙 · 法事服务', en: '🏛️ Cloud Temple · Ritual Services' },
    'ritual.desc': { zh: '祖庙法师 VR 直播法事，链上存证每一份诚心，财神庇佑全球岛民', en: 'Temple masters livestream rituals in VR — every prayer permanently recorded on-chain' },

    // ===== 命运罗盘（八字）=====
    'bazi.title': { zh: '🔮 命运罗盘', en: '🔮 Destiny Compass' },
    'bazi.desc': { zh: '融合千年命理学与 AI 智能分析，精准解读您的链上财运密码', en: 'Combining millennia of Chinese metaphysics with AI analytics to decode your on-chain destiny' },

    // ===== 福禄广场 =====
    'welfare.title': { zh: '🎁 福禄广场', en: '🎁 Fortune Plaza' },
    'welfare.desc': { zh: '每日签到领福报，小游戏赢 $MONEYGOD，财富岛天天送好运', en: 'Daily check-in blessings, mini-games to win $MONEYGOD, Fortune Island rewards every day' },
  },

  /** 获取翻译文本 */
  t(key) {
    const entry = this.translations[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['zh'] || key;
  },

  /** 切换语言 */
  toggle() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', this.currentLang);
    this.apply();
    this.updateToggleBtn();
  },

  /** 应用翻译到页面 */
  apply() {
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

    // 替换所有 data-i18n 元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    });

    // 替换 data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = this.t(el.getAttribute('data-i18n-title'));
    });

    // 更新 onclick alert 提示语
    document.querySelectorAll('[data-i18n-alert]').forEach(el => {
      const key = el.getAttribute('data-i18n-alert');
      el.setAttribute('onclick', `alert('${this.t(key)}')`);
    });
  },

  /** 更新切换按钮状态 */
  updateToggleBtn() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.querySelector('.lang-zh').classList.toggle('active', this.currentLang === 'zh');
      btn.querySelector('.lang-en').classList.toggle('active', this.currentLang === 'en');
    }
  },

  /** 初始化 */
  init() {
    this.apply();
    this.updateToggleBtn();

    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  }
};
