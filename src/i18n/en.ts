/**
 * English UI strings.
 *
 * This is the source-of-truth shape: every other locale (zh.ts, future
 * ones) imports `typeof en` to enforce the same key tree. If you need a
 * new string anywhere in the site, add it here first, then translate in
 * each locale.
 *
 * Namespaces:
 *  - brand.*   — positioning copy reused across pages.
 *  - home.*    — home page sections.
 *  - nav.*     — navigation labels (resolved into NavItem.label in nav.ts).
 *  - footer.*  — footer section titles.
 */

export const en = {
  brand: {
    slogan: 'Toward more joyful moments.',
    tagline:
      'Playful, thoughtfully made toys for curious little humans — and the grown-ups who adore them.',
  },
  home: {
    hero: {
      cta: 'Browse all toys',
    },
    flagship: {
      badge: 'New arrival · Flagship',
      titlePrefix: 'FurtherJoy',
      titleHighlight: 'Smart Mini Printer',
      titleSuffix: 'for Kids.',
      body: 'A playful pocket-sized printer that turns doodles, photos and stickers into thermal-paper keepsakes. Zero ink, all wonder.',
      learnMore: 'Learn more',
    },
    belief: {
      eyebrow: 'Brand Belief',
      titleStart: 'Everything starts with',
      titleHighlight: 'more joyful moments.',
      body1:
        'FurtherJoy exists to make everyday life a little more playful: a spark of imagination, a small thing to hold, a reason to create together.',
      body2:
        'Apps, AI, and connected devices are just materials we use. The belief is simpler: technology should create warmer moments between people.',
      cta: 'Read the full story',
    },
    whatWeMake: {
      eyebrow: 'What We Make',
      title: 'Playful physical products, thoughtfully made.',
      body: 'FurtherJoy is a toy design and manufacturing company. We use apps, AI, and connected features only when they make the physical play experience better.',
      mobileEyebrow: 'Physical First',
      mobileHeading:
        'Clear play ideas, real objects, and useful tech only when it makes the toy better.',
      pointOfView: {
        eyebrow: '01 · Point of View',
        title: 'Toys with a point of view',
        body: 'Physical products built around a clear play idea, not just another screen.',
      },
      designInput: {
        eyebrow: 'Design Input',
        body: 'Sketch. Prototype. Test. Make it feel right.',
      },
      realPlay: {
        eyebrow: '02 · Real Play',
        title: 'Designed for real play',
        body: 'Objects that feel good to hold, simple to use, and sturdy enough for everyday life.',
      },
      usefulTech: {
        eyebrow: '03 · Useful Tech',
        title: 'Enhanced when useful',
        body: 'AI, apps, and connected features appear only when they make the toy more joyful.',
      },
    },
  },
  nav: {
    shop: 'Shop',
    uPal: 'UPal',
    app: 'FurtherJoy App',
    about: 'About',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
    termsOfService: 'Terms of Service',
    termsOfUse: 'Terms of Use',
  },
  footer: {
    sections: {
      products: 'Shop and Products',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
    },
  },
  pages: {
    about: {
      metaTitle: 'About | FurtherJoy',
      metaDesc:
        'The story behind FurtherJoy — why we make the toys we make.',
      hero: {
        eyebrow: 'About us',
        titleStart: 'The kind of toys',
        titleHighlight: 'we wish we had.',
      },
      story: {
        p1: 'FurtherJoy started on a floor in a small apartment, with a pile of toys that had all gone wrong in interesting ways. Too loud. Too flimsy. Too eager to be shoved into a screen.',
        p2: "We wanted toys that felt good in the hand. Toys you could pass down. Toys whose colors didn't fade on the third wash, whose edges didn't splinter, whose batteries didn't die a week after the box opened.",
        p3: 'So we started making them.',
        p4: 'Every product in our shop is prototyped over and over. We test with real kids (and their real opinions), with real parents (who have real patience limits), and against real safety standards — EN71, CPSC, and a handful of our own.',
        p5: "We care about where materials come from, where they end up, and how kids grow alongside them. That's why every FurtherJoy toy ships with a take-back commitment: when your kid outgrows it, send it back and we'll find it a new home.",
        p6: 'Toys deserve a second, third, and fourth childhood.',
      },
      principles: {
        eyebrow: 'The principles',
        title: 'What guides every decision we make.',
        design: {
          eyebrow: 'Design',
          title: 'Joyful, never juvenile.',
          body: "Bold colors, honest shapes. Our toys don't try too hard — they let the play do the talking.",
        },
        safety: {
          eyebrow: 'Safety',
          title: 'Tested until we trust it.',
          body: 'Every material, joint, and fastener meets or exceeds EN71 and CPSC standards. Small-part tested for kids under three.',
        },
        durability: {
          eyebrow: 'Durability',
          title: 'Built for a second kid.',
          body: 'We over-engineer on purpose. A FurtherJoy toy should outlast the kid who loves it first.',
        },
        circularity: {
          eyebrow: 'Circularity',
          title: 'Nothing goes to landfill.',
          body: 'Our take-back program means outgrown toys are cleaned, refurbished, and donated to families who need them.',
        },
      },
      cta: {
        title: "See what we've made so far.",
        button: 'Enter the shop',
      },
    },
    contact: {
      metaTitle: 'Contact | FurtherJoy',
      metaDesc: 'Get in touch with the FurtherJoy team.',
      hero: {
        eyebrow: 'Contact',
        title: 'Hello. We would love to hear from you.',
      },
      mailboxes: {
        general: {
          title: 'General',
          body: 'Questions, feedback, love notes.',
        },
        press: {
          title: 'Press',
          body: 'Features, interviews, brand kit requests.',
        },
        support: {
          title: 'Order help',
          body: 'Shipping, returns, missing parts.',
        },
        wholesale: {
          title: 'Wholesale',
          body: 'Stock FurtherJoy in your store.',
        },
      },
      sla: 'We answer every email within two business days.',
      office: {
        eyebrow: 'Our office',
        labels: {
          address: 'Address',
          registration: 'Registration',
          email: 'Email',
        },
      },
    },
    app: {
      metaTitle: 'FurtherJoy App | FurtherJoy',
      metaDesc:
        'The FurtherJoy App is the companion app for FurtherJoy physical toys and connected play experiences.',
      hero: {
        eyebrow: 'FurtherJoy App',
        title: 'One simple home for FurtherJoy toys.',
        body: 'Pair devices, manage your toys, and keep the moments created through FurtherJoy products. The app supports the physical play experience without replacing it.',
        appStore: 'App Store',
        googlePlay: 'Google Play · Coming soon',
        appOverviewAlt: 'FurtherJoy App overview screens',
      },
      features: {
        pair: {
          label: 'Pair',
          title: 'Connect FurtherJoy toys',
          description:
            'Set up compatible devices, keep them linked to your account, and manage each toy in one place.',
        },
        create: {
          label: 'Create',
          title: 'Make playful moments',
          description:
            'Use app-assisted features such as voice input, image generation, and device workflows where supported.',
        },
        keep: {
          label: 'Keep',
          title: 'Revisit what you made',
          description:
            'View creation history, save favorite outputs, and share moments with family when the product supports it.',
        },
      },
      legalLinks: {
        privacy: 'App Privacy Notice',
        terms: 'App Terms of Use',
      },
      iosModal: {
        title: 'Get the FurtherJoy app',
        subtitle: 'Scan with your iPhone camera, or tap below.',
        qrAlt: 'QR code linking to the FurtherJoy app on the App Store',
        ctaButton: 'View in App Store',
        closeLabel: 'Close',
      },
    },
    uPal: {
      metaTitle: 'UPal Smart Mini Printer for Kids | FurtherJoy',
      metaDesc:
        'UPal is a smart mini thermal printer for kids 6+. Turn spoken ideas into pictures, print from the FurtherJoy app, and send creations to a friend’s UPal—no ink.',
      imageAlt:
        'FurtherJoy UPal smart mini thermal printer for kids',
      hero: {
        titleStart: 'A pocket-sized',
        titleHighlight: 'wonder factory.',
        body: 'UPal turns doodles, photos, spoken ideas, and stories into thermal-paper keepsakes. Made for ages 6+, with zero ink and endless ways to create.',
        exploreFeatures: 'Explore features',
      },
      productImageAlt:
        'FurtherJoy UPal — pocket-sized thermal printer for kids, with screen lit and tactile front buttons',
      stats: {
        noInk: 'Ink cartridges',
        paper: 'Thermal paper',
        ages: 'Ages',
        rechargeable: 'Rechargeable',
      },
      specs: {
        eyebrow: 'The details',
        title: "What's in the box.",
        labels: {
          dimensions: 'Dimensions',
          weight: 'Weight',
          printResolution: 'Print resolution',
          paper: 'Paper',
          connectivity: 'Connectivity',
          battery: 'Battery',
          app: 'App',
          safety: 'Safety',
        },
        values: {
          paper: '58 mm thermal roll',
        },
        disclaimer:
          'Specs are preliminary and subject to change before final release.',
      },
      cta: {
        title: 'Ready to meet it?',
        button: 'Shop UPal',
      },
    },
  },
};
