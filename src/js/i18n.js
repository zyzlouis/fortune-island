/**
 * 财神殿 - 国际化 (i18n) 模块
 * 支持中文 / English 切换
 */

const I18N = {
  currentLang: localStorage.getItem('lang') || 'zh',

  translations: {
    // ===== 导航 =====
    'nav.logo': { zh: '财神殿', en: 'MoneyGod' },
    'nav.oracle': { zh: '神谕', en: 'Oracle' },
    'nav.ritual': { zh: '法事服务', en: 'Rituals' },
    'nav.bazi': { zh: '八字命理', en: 'BaZi' },
    'nav.welfare': { zh: '🎁 福利中心', en: '🎁 Welfare' },
    'nav.staking': { zh: '敬献香火', en: 'Staking' },
    'nav.gamefi': { zh: '神兽试炼', en: 'GameFi' },
    'nav.nft': { zh: '财神宝库', en: 'NFT Vault' },
    'nav.token': { zh: '$MONEYGOD', en: '$MONEYGOD' },
    'nav.market': { zh: '行情', en: 'Market' },
    'nav.connect': { zh: '连接钱包', en: 'Connect Wallet' },
    'nav.connecting': { zh: '连接中...', en: 'Connecting...' },

    // ===== 英雄区 =====
    'hero.badge': { zh: '⚡ 基于区块链的财神文化平台', en: '⚡ Blockchain-Based God of Wealth Platform' },
    'hero.title1': { zh: '赵公明', en: 'Zhao Gongming' },
    'hero.title2': { zh: '财神殿', en: 'MoneyGod' },
    'hero.subtitle': {
      zh: '以正财神赵公明为核心 IP，融合 DeFi · GameFi · NFT<br/>将千年财神文化与 Web3 技术完美结合',
      en: 'Centered on Zhao Gongming, the God of Wealth, integrating DeFi · GameFi · NFT<br/>Bridging ancient wealth culture with Web3 technology'
    },
    'hero.tvl': { zh: '总锁仓量 (TVL)', en: 'Total Value Locked' },
    'hero.users': { zh: '香客数量', en: 'Devotees' },
    'hero.nfts': { zh: '法器 NFT', en: 'Artifact NFTs' },
    'hero.cta1': { zh: '🔥 敬献香火', en: '🔥 Start Staking' },
    'hero.cta2': { zh: '⚔️ 探索宝库', en: '⚔️ Explore Vault' },
    'hero.scroll': { zh: '向下探索', en: 'Scroll Down' },

    // ===== 财神神谕 =====
    'oracle.title': { zh: '📜 财神神谕', en: '📜 Divine Oracle' },
    'oracle.desc': { zh: '赵公明每日为您开示财运玄机，指引投资方向', en: 'Zhao Gongming reveals daily fortune insights to guide your investments' },
    'oracle.seal': { zh: '赵公明印', en: 'Seal of Zhao' },
    'oracle.fortune': { zh: '财运', en: 'Fortune' },
    'oracle.luckyHourLabel': { zh: '吉时', en: 'Lucky Hour' },
    'oracle.luckyColor': { zh: '吉色', en: 'Lucky Color' },
    'oracle.gold': { zh: '金色', en: 'Gold' },
    'oracle.draw': { zh: '🎴 每日求签', en: '🎴 Draw Oracle' },
    'oracle.drawing': { zh: '🎴 求签中...', en: '🎴 Drawing...' },
    'oracle.redraw': { zh: '🎴 再求一签', en: '🎴 Draw Again' },

    // ===== 敬献香火 =====
    'staking.title': { zh: '🔥 敬献香火', en: '🔥 Sacred Staking' },
    'staking.desc': { zh: '在财神殿前点燃您的信仰之火，获得财神的恩泽与福报', en: 'Light your flame of devotion before the Palace and receive divine blessings' },
    'staking.limited': { zh: '限量', en: 'Limited' },
    'staking.firstIncense': { zh: '上头香', en: 'First Incense' },
    'staking.firstIncenseDesc': { zh: '首次质押即可获得限量版"头香"纪念 NFT，享受永久 VIP 特权', en: 'First-time stakers receive a limited "First Incense" commemorative NFT with permanent VIP privileges' },
    'staking.remaining': { zh: '剩余名额', en: 'Remaining' },
    'staking.boost': { zh: '收益加成', en: 'Yield Boost' },
    'staking.apy': { zh: '预期年化', en: 'Est. APY' },
    'staking.firstBtn': { zh: '🙏 敬上头香', en: '🙏 Offer First Incense' },
    'staking.lantern': { zh: '长明灯', en: 'Eternal Lantern' },
    'staking.lanternDesc': { zh: '质押 LP Token 至长明灯池，持续"燃烧"赚取 $MONEYGOD 福报', en: 'Stake LP Tokens in the Eternal Lantern pool to continuously earn $MONEYGOD rewards' },
    'staking.locked': { zh: '已锁仓', en: 'Locked' },
    'staking.participants': { zh: '参与人数', en: 'Participants' },
    'staking.lanternBtn': { zh: '💡 点亮长明灯', en: '💡 Light the Lantern' },
    'staking.meritBox': { zh: '功德箱', en: 'Merit Box' },
    'staking.meritBoxDesc': { zh: '直接质押 USDT / BNB / $MONEYGOD 到功德箱，获取稳定利息收益', en: 'Stake USDT / BNB / $MONEYGOD directly into the Merit Box for stable yields' },
    'staking.meritBtn': { zh: '🪙 投入功德箱', en: '🪙 Deposit to Merit Box' },

    // ===== 神兽试炼 =====
    'gamefi.title': { zh: '🐅 神兽试炼', en: '🐅 Beast Trials' },
    'gamefi.desc': { zh: '赵公明座下黑虎，向勇者发起挑战，完成试炼获得丰厚奖赏', en: "Zhao Gongming's Black Tiger challenges the brave — complete trials for rich rewards" },
    'gamefi.live': { zh: '🔴 进行中', en: '🔴 Live' },
    'gamefi.prediction': { zh: '预测市场', en: 'Prediction Market' },
    'gamefi.tigerTitle': { zh: '⬛ 黑虎下山', en: '⬛ Black Tiger Descent' },
    'gamefi.tigerDesc': { zh: '预测 BTC 未来 1 小时的走势，押对即可瓜分奖池', en: 'Predict BTC price movement in the next hour — correct predictions share the prize pool' },
    'gamefi.pool': { zh: '当前奖池', en: 'Prize Pool' },
    'gamefi.countdown': { zh: '倒计时', en: 'Countdown' },
    'gamefi.bull': { zh: '📈 看涨', en: '📈 Bull' },
    'gamefi.bear': { zh: '📉 看跌', en: '📉 Bear' },
    'gamefi.players': { zh: '参与人数: 1,288', en: 'Players: 1,288' },
    'gamefi.minBet': { zh: '最小投入: 10 MONEYGOD', en: 'Min Bet: 10 MONEYGOD' },
    'gamefi.upcoming': { zh: '⏳ 即将开始', en: '⏳ Upcoming' },
    'gamefi.treasure': { zh: '链上寻宝', en: 'On-chain Treasure Hunt' },
    'gamefi.treasureTitle': { zh: '👦 寻宝童子', en: '👦 Treasure Scouts' },
    'gamefi.treasureDesc': { zh: '与合作项目联动的链上寻宝活动，寻找隐藏在各处的"聚宝盆"碎片', en: 'On-chain treasure hunts with partner projects — find hidden "Cornucopia" fragments' },
    'gamefi.manta': { zh: 'MantaNetwork 联合红包', en: 'MantaNetwork Joint Red Packet' },
    'gamefi.mantaPool': { zh: '奖池: 5,000 USDT + 50,000 MONEYGOD', en: 'Pool: 5,000 USDT + 50,000 MONEYGOD' },
    'gamefi.goplus': { zh: 'GoPlus Security 安全试炼', en: 'GoPlus Security Safety Trial' },
    'gamefi.goplusPool': { zh: '奖池: 2,000 USDT + 25,000 MONEYGOD', en: 'Pool: 2,000 USDT + 25,000 MONEYGOD' },
    'gamefi.chainlink': { zh: 'Chainlink 神谕之旅', en: 'Chainlink Oracle Journey' },
    'gamefi.chainlinkPool': { zh: '奖池: 3,000 USDT + 30,000 MONEYGOD', en: 'Pool: 3,000 USDT + 30,000 MONEYGOD' },
    'gamefi.hot': { zh: '🔥 热门', en: '🔥 Hot' },
    'gamefi.soon': { zh: '即将开始', en: 'Coming Soon' },
    'gamefi.viewAll': { zh: '查看全部活动 →', en: 'View All Events →' },

    // ===== NFT 宝库 =====
    'nft.title': { zh: '⚔️ 财神宝库', en: '⚔️ Divine Vault' },
    'nft.desc': { zh: '收集赵公明的神兵法器与祈福圣物，解锁专属权益', en: "Collect Zhao Gongming's divine artifacts and prayer relics to unlock exclusive benefits" },
    'nft.weapons': { zh: '🗡️ 法器系列', en: '🗡️ Artifacts' },
    'nft.blessings': { zh: '🙏 祈福系列', en: '🙏 Blessings' },
    'nft.legendary': { zh: '传说', en: 'Legendary' },
    'nft.epic': { zh: '史诗', en: 'Epic' },
    'nft.rare': { zh: '稀有', en: 'Rare' },
    'nft.common': { zh: '普通', en: 'Common' },
    'nft.pearl': { zh: '定海神珠', en: 'Sea-Calming Pearl' },
    'nft.pearlEffect': { zh: '质押收益 +15%', en: 'Staking Yield +15%' },
    'nft.pearlSupply': { zh: '限量 88 枚', en: 'Limited: 88' },
    'nft.chain': { zh: '缚龙索', en: 'Dragon Chain' },
    'nft.chainEffect': { zh: 'GameFi 奖励 +10%', en: 'GameFi Rewards +10%' },
    'nft.chainSupply': { zh: '限量 188 枚', en: 'Limited: 188' },
    'nft.whip': { zh: '如意金鞭', en: 'Golden Whip' },
    'nft.whipEffect': { zh: '质押收益 +8%', en: 'Staking Yield +8%' },
    'nft.whipSupply': { zh: '限量 388 枚', en: 'Limited: 388' },
    'nft.bowl': { zh: '聚宝盆', en: 'Cornucopia' },
    'nft.bowlEffect': { zh: '每日空投 +5%', en: 'Daily Airdrop +5%' },
    'nft.bowlSupply': { zh: '限量 888 枚', en: 'Limited: 888' },
    'nft.talisman': { zh: '招财符', en: 'Wealth Talisman' },
    'nft.talismanEffect': { zh: '手续费减免 5%', en: 'Fee Discount 5%' },
    'nft.talismanSupply': { zh: '限量 1888 枚', en: 'Limited: 1,888' },
    'nft.prayer': { zh: '祈福牌', en: 'Prayer Plaque' },
    'nft.prayerEffect': { zh: '可自定义祝福语', en: 'Customizable Blessing' },
    'nft.prayerSupply': { zh: '不限量', en: 'Unlimited' },

    // ===== 代币经济 =====
    'token.title': { zh: '💰 $MONEYGOD 代币经济', en: '💰 $MONEYGOD Tokenomics' },
    'token.desc': { zh: '$MONEYGOD 是财神殿的治理代币，贯穿整个生态系统', en: '$MONEYGOD is the governance token powering the entire ecosystem' },
    'token.supply': { zh: '总供应量', en: 'Total Supply' },
    'token.infoTitle': { zh: '代币信息', en: 'Token Info' },
    'token.name': { zh: '代币名称', en: 'Token Name' },
    'token.symbol': { zh: '代币符号', en: 'Symbol' },
    'token.totalSupply': { zh: '总供应量', en: 'Total Supply' },
    'token.network': { zh: '网络', en: 'Network' },
    'token.standard': { zh: '标准', en: 'Standard' },
    'token.usesTitle': { zh: '代币用途', en: 'Token Utility' },
    'token.staking': { zh: '质押挖矿', en: 'Stake & Mine' },
    'token.stakingDesc': { zh: '在各种香火池中质押获取收益', en: 'Stake in various pools to earn yields' },
    'token.gaming': { zh: '游戏参与', en: 'Gaming' },
    'token.gamingDesc': { zh: '作为神兽试炼的参与门票与奖励', en: 'Used as entry tickets and rewards in Beast Trials' },
    'token.nftMint': { zh: 'NFT 铸造', en: 'NFT Minting' },
    'token.nftMintDesc': { zh: '用于铸造法器与祈福牌 NFT', en: 'Mint artifact and blessing NFTs' },
    'token.governance': { zh: '治理投票', en: 'Governance' },
    'token.governanceDesc': { zh: '持有者可参与平台重大决策投票', en: 'Holders can vote on major platform decisions' },
    'token.buy': { zh: '🛒 购买 $MONEYGOD (PancakeSwap)', en: '🛒 Buy $MONEYGOD (PancakeSwap)' },
    'token.mining': { zh: '流动性挖矿 30%', en: 'Liquidity Mining 30%' },
    'token.community': { zh: '社区激励 20%', en: 'Community Incentives 20%' },
    'token.team': { zh: '团队与顾问 15%', en: 'Team & Advisors 15%' },
    'token.ecosystem': { zh: '生态发展 10%', en: 'Ecosystem Growth 10%' },
    'token.marketing': { zh: '市场营销 10%', en: 'Marketing 10%' },
    'token.reserve': { zh: '储备金 15%', en: 'Reserve 15%' },

    // ===== 市场行情 =====
    'market.title': { zh: '📊 市场行情', en: '📊 Market Overview' },
    'market.desc': { zh: '实时追踪加密货币行情，财神助您洞察先机', en: 'Real-time crypto tracking — the God of Wealth helps you spot opportunities' },
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
    'cta.title': { zh: '🏮 加入财神殿，开启您的 Web3 财运之旅', en: '🏮 Join MoneyGod — Start Your Web3 Fortune Journey' },
    'cta.desc': { zh: '连接钱包，成为赵公明财神殿的香客，共享链上财富盛宴', en: 'Connect your wallet, become a devotee, and share in the on-chain wealth feast' },
    'cta.enter': { zh: '🔥 立即进入', en: '🔥 Enter Now' },
    'cta.whitepaper': { zh: '📄 阅读白皮书', en: '📄 Read Whitepaper' },

    // ===== 页脚 =====
    'footer.brand': { zh: '以赵公明正财神为核心 IP 的<br/>去中心化金融与文化平台', en: 'A decentralized finance & culture platform<br/>centered on Zhao Gongming, the God of Wealth' },
    'footer.products': { zh: '产品', en: 'Products' },
    'footer.stakingLink': { zh: '敬献香火', en: 'Staking' },
    'footer.gamefiLink': { zh: '神兽试炼', en: 'GameFi' },
    'footer.nftLink': { zh: '财神宝库', en: 'NFT Vault' },
    'footer.marketLink': { zh: '市场行情', en: 'Market' },
    'footer.resources': { zh: '资源', en: 'Resources' },
    'footer.whitepaper': { zh: '白皮书', en: 'Whitepaper' },
    'footer.audit': { zh: '智能合约审计', en: 'Smart Contract Audit' },
    'footer.docs': { zh: '开发者文档', en: 'Developer Docs' },
    'footer.brand2': { zh: '品牌资源', en: 'Brand Assets' },
    'footer.communityTitle': { zh: '社区', en: 'Community' },
    'footer.copyright': { zh: '© 2026 财神殿 The Palace of Wealth. All rights reserved.', en: '© 2026 MoneyGod — The Palace of Wealth. All rights reserved.' },
    'footer.powered': { zh: 'Powered by BNB Chain | Smart Contract Audited by CertiK', en: 'Powered by BNB Chain | Smart Contract Audited by CertiK' },

    // ===== 提示 =====
    'alert.wallet': { zh: '请先连接钱包', en: 'Please connect your wallet first' },

    // ===== 法事服务 =====
    'ritual.title': { zh: '🏛️ 赵公明祖庙法事服务', en: '🏛️ Temple Ritual Services' },
    'ritual.desc': { zh: '源自赵公明祖庙千年传承，链上法事诚心祈愿，财运亨通', en: 'Ancient rituals from Zhao Gongming Temple — on-chain prayers for prosperity' },

    // ===== 八字命理 =====
    'bazi.title': { zh: '🔮 个人八字命理', en: '🔮 BaZi Destiny Reading' },
    'bazi.desc': { zh: '以赵公明财神法门解读您的八字命盘，精准剖析先天财运格局', en: 'Decode your birth chart through the God of Wealth\'s teachings — precise fortune analysis' },

    // ===== 福利中心 =====
    'welfare.title': { zh: '🎁 福利中心', en: '🎁 Rewards Center' },
    'welfare.desc': { zh: '每日签到领福利，小游戏赢 MONEYGOD，财神爷天天送好运', en: 'Daily check-in rewards, mini-games to win MONEYGOD, blessings every day' },
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
