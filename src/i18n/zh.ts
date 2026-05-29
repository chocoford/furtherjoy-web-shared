/**
 * 简体中文 UI 字符串。
 *
 * `zh: typeof en` 类型声明确保跟英文键树完全对齐 —— 漏一个字段或者拼错
 * 命名空间，tsc 会立刻在 build 时报错。
 *
 * 翻译惯例：
 *  - 品牌名（FurtherJoy / AIPrinter / FurtherJoy App）保留英文原名
 *  - 法律文本标题（隐私政策、服务条款）按 PCPD/CNNIC 习惯翻译
 *  - tagline / slogan 保留品牌人格，不做字面直译
 */

import {en} from './en.js';

export const zh: typeof en = {
  brand: {
    slogan: '让更多瞬间，充满欢愉。',
    tagline:
      '用心打造的有趣玩具——给好奇的小朋友，也给依然爱玩的大人。',
  },
  home: {
    hero: {
      cta: '浏览全部玩具',
    },
    flagship: {
      badge: '新品 · 旗舰',
      titlePrefix: 'FurtherJoy',
      titleHighlight: '智能迷你打印机',
      titleSuffix: '陪孩子一起玩。',
      body: '口袋大小的趣味打印机，把涂鸦、照片、贴纸都变成可以收藏的热敏纸小作品。零墨水，纯惊喜。',
      learnMore: '了解更多',
    },
    belief: {
      eyebrow: '品牌信念',
      titleStart: '一切始于',
      titleHighlight: '更多欢愉的瞬间。',
      body1:
        'FurtherJoy 想让日常生活多一点游戏感：一点想象的火花，一件可以握在手里的小东西，一个可以一起创造的理由。',
      body2:
        'App、AI、联网设备都只是我们用的材料。我们的信念更简单：科技应当让人与人之间的瞬间更温暖。',
      cta: '阅读完整故事',
    },
    whatWeMake: {
      eyebrow: '我们做什么',
      title: '有趣的实体产品，用心打磨。',
      body: 'FurtherJoy 是一家玩具设计与制造公司。只有当 App、AI 和联网功能能让线下游戏体验更好，我们才会把它们用上。',
      mobileEyebrow: '实体优先',
      mobileHeading: '清晰的玩法、真实可触的物件，只在能让玩具更好玩时才引入科技。',
      pointOfView: {
        eyebrow: '01 · 设计立场',
        title: '有立场的玩具',
        body: '围绕清晰的玩法构建的实体产品，而不是又一块屏幕。',
      },
      designInput: {
        eyebrow: '设计过程',
        body: '画草图、做原型、做测试，直到手感对了。',
      },
      realPlay: {
        eyebrow: '02 · 真实游戏',
        title: '为真实游戏而生',
        body: '握在手里舒服、上手简单、能扛住日常生活的玩具。',
      },
      usefulTech: {
        eyebrow: '03 · 有用的科技',
        title: '只在必要时增强',
        body: 'AI、App、联网功能，只在它们能让玩具更欢愉时才出现。',
      },
    },
  },
  nav: {
    shop: '商店',
    aiPrinter: 'AIPrinter',
    app: 'FurtherJoy App',
    about: '关于我们',
    journal: '随笔',
    contact: '联系我们',
    privacyPolicy: '隐私政策',
    refundPolicy: '退款政策',
    termsOfService: '服务条款',
    termsOfUse: '使用条款',
  },
  footer: {
    sections: {
      products: '商店与产品',
      company: '公司',
      support: '支持',
      legal: '法律',
    },
  },
  pages: {
    about: {
      metaTitle: '关于我们 | FurtherJoy',
      metaDesc: 'FurtherJoy 背后的故事 —— 我们为什么做这些玩具。',
      hero: {
        eyebrow: '关于我们',
        titleStart: '我们自己也想拥有的',
        titleHighlight: '那种玩具。',
      },
      story: {
        p1: 'FurtherJoy 从一间小公寓的地板上开始 —— 那时身边堆着一堆"出错"得让人哭笑不得的玩具：太吵、太脆、太急着把孩子推进屏幕。',
        p2: '我们想要的是手感好的玩具。能传给弟弟妹妹的玩具。洗三次颜色不褪、边角不会割手、电池不会开箱一周就罢工的玩具。',
        p3: '所以我们决定自己做。',
        p4: '我们卖的每一件产品都反复打样。和真实的小朋友（连同他们直白的吐槽）一起测试，请真实的父母（和他们真实的耐心极限）参与试用，按真实的安全标准把关 —— EN71、CPSC，以及我们自己的几条标准。',
        p5: '我们在意材料从哪里来、到哪里去，也在意孩子和它们一起长大的过程。所以 FurtherJoy 的每一件玩具都附带一份回收承诺：孩子长大不再玩了，把它寄回来，我们会让它找到下一个家。',
        p6: '玩具值得拥有第二个、第三个、第四个童年。',
      },
      principles: {
        eyebrow: '我们的原则',
        title: '我们做每一个决定时遵循的准则。',
        design: {
          eyebrow: '设计',
          title: '有趣，但不幼稚。',
          body: '大胆的色彩，老实的形状。我们的玩具不刻意讨好 —— 让游戏本身去说话。',
        },
        safety: {
          eyebrow: '安全',
          title: '测到我们自己放心为止。',
          body: '每一种材料、每一个接缝、每一颗紧固件都达到或超过 EN71 和 CPSC 标准。小零件经过三岁以下儿童安全测试。',
        },
        durability: {
          eyebrow: '耐用',
          title: '为下一个孩子也准备好。',
          body: '我们故意把每一件都做得"过度结实"。FurtherJoy 玩具的寿命，应当比第一个爱上它的孩子更长。',
        },
        circularity: {
          eyebrow: '循环',
          title: '不让任何一件玩具进垃圾场。',
          body: '我们的回收计划会把孩子玩腻的玩具清洗、翻新，捐给需要它们的家庭。',
        },
      },
      cta: {
        title: '看看我们做了什么。',
        button: '进入商店',
      },
    },
    contact: {
      metaTitle: '联系我们 | FurtherJoy',
      metaDesc: '联系 FurtherJoy 团队。',
      hero: {
        eyebrow: '联系我们',
        title: '你好，我们很想听听你说。',
      },
      mailboxes: {
        general: {
          title: '一般咨询',
          body: '问题、反馈、悄悄话。',
        },
        press: {
          title: '媒体合作',
          body: '报道、采访、品牌素材申请。',
        },
        support: {
          title: '订单帮助',
          body: '物流、退换、缺件补寄。',
        },
        wholesale: {
          title: '批发合作',
          body: '把 FurtherJoy 放进你的店里。',
        },
      },
      sla: '我们会在两个工作日内回复每一封邮件。',
      office: {
        eyebrow: '我们的办公地点',
        labels: {
          address: '地址',
          registration: '注册信息',
          email: '邮箱',
        },
      },
    },
    app: {
      metaTitle: 'FurtherJoy App | FurtherJoy',
      metaDesc:
        'FurtherJoy App 是 FurtherJoy 实体玩具与联网玩法的配套应用。',
      hero: {
        eyebrow: 'FurtherJoy App',
        title: '一个简单的家，承载所有 FurtherJoy 玩具。',
        body: '配对设备、管理玩具，把通过 FurtherJoy 产品创造的瞬间保存下来。它服务于线下游戏体验，不是替代它。',
        appStore: 'App Store',
        googlePlay: 'Google Play · 即将上线',
        appOverviewAlt: 'FurtherJoy App 界面概览',
      },
      features: {
        pair: {
          label: '配对',
          title: '连接 FurtherJoy 玩具',
          description:
            '设置兼容设备、保持账户关联、在一处管理所有玩具。',
        },
        create: {
          label: '创造',
          title: '创造有趣瞬间',
          description:
            '使用语音输入、图像生成等 App 辅助功能（具体能力依产品而异）。',
        },
        keep: {
          label: '留存',
          title: '回顾创造记录',
          description:
            '查看作品历史、保存喜爱的输出，在产品支持的情况下跟家人分享。',
        },
      },
      legalLinks: {
        privacy: 'App 隐私声明',
        terms: 'App 使用条款',
      },
      iosModal: {
        title: '下载 FurtherJoy App',
        subtitle: '用 iPhone 相机扫码，或点下方按钮。',
        qrAlt: '链接到 App Store 上 FurtherJoy 应用的二维码',
        ctaButton: '到 App Store 查看',
        closeLabel: '关闭',
      },
    },
    aiPrinter: {
      metaTitle: 'AIPrinter | FurtherJoy',
      metaDesc:
        'AIPrinter —— 给小朋友的口袋大小热敏打印机。零墨水，无穷创造。',
      imageAlt: 'FurtherJoy AIPrinter —— 给小朋友的口袋大小热敏打印机',
      hero: {
        titleStart: '口袋大小的',
        titleHighlight: '创造工厂。',
        body: 'AIPrinter 把涂鸦、照片、故事变成可以收藏的热敏纸作品。零墨水，无穷创造。',
        exploreFeatures: '查看功能',
      },
      productImageAlt:
        'FurtherJoy AIPrinter —— 给小朋友的口袋大小热敏打印机，屏幕亮起、前部按键可按',
      stats: {
        noInk: '墨盒',
        paper: '热敏纸',
        ages: '适用年龄',
        rechargeable: '充电方式',
      },
      features: {
        eyebrow: '它能做什么',
        title: '为孩子的创作方式而设计。',
        f1: {
          label: '特性 · 01',
          title: '零墨水，纯惊喜。',
          body: '热敏打印没有可洒的墨、没有要换的耗材、没有要扔的垃圾。一卷纸，仅此而已。',
        },
        f2: {
          label: '特性 · 02',
          title: '把涂鸦变成珍藏。',
          body: '在配套 App 里画一笔、拍一张，或者选一张贴纸模板。轻点打印 —— 看着作品在几秒内滑出来。',
        },
        f3: {
          label: '特性 · 03',
          title: '为小手而生。',
          body: '圆润的边角、亲肤的表面、为正在学着握工具的小手而设计的握感。',
        },
        f4: {
          label: '特性 · 04',
          title: '带它去任何地方。',
          body: '口袋大小，USB-C 一次充电用一整天，核心创作模式无需联网。',
        },
      },
      howItWorks: {
        eyebrow: '怎么用',
        title: '从灵感到打印，三步搞定。',
        s1: {
          title: '在 App 里创作',
          body: '在 FurtherJoy App 里涂鸦、拍照，或者从儿童友好的贴纸和模板库里挑一个。',
        },
        s2: {
          title: '一键打印',
          body: 'AIPrinter 通过蓝牙连接任何手机或平板。点击打印 —— 几秒之内就好。',
        },
        s3: {
          title: '撕下、粘上、分享',
          body: '作品打印在热敏贴纸上 —— 撕下贴到本子上、墙上，或者和朋友交换。',
        },
      },
      specs: {
        eyebrow: '详细参数',
        title: '盒子里都有什么。',
        labels: {
          dimensions: '外形尺寸',
          weight: '重量',
          printResolution: '打印分辨率',
          paper: '纸张',
          connectivity: '连接方式',
          battery: '电池',
          app: '配套应用',
          safety: '安全标准',
        },
        values: {
          paper: '58 mm 热敏纸卷',
        },
        disclaimer: '参数为初步版本，正式发布前可能调整。',
      },
      cta: {
        title: '准备好认识它了吗？',
        body: 'AIPrinter 全球发货，满 US$60 包邮。',
        button: '购买 AIPrinter',
      },
    },
    journal: {
      metaTitle: '随笔 | FurtherJoy',
      metaDesc: '关于游戏、设计，以及如何陪伴好奇的小人。',
      hero: {
        eyebrow: '随笔',
        titlePart1: '关于游戏、设计，',
        titlePart2: '以及如何陪伴好奇的小人。',
      },
      comingSoon: '更多内容陆续更新中。',
    },
  },
};
