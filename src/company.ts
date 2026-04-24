/**
 * Legal entity + contact info.
 */

export const COMPANY = {
  nameEn: 'FurtherJoy Limited',
  nameZh: '赋德嘉有限公司',
  addressEn:
    'Unit 1543, 11/F, Mai Hong Industrial Building, 160 Wai Yip Street, Kwun Tong, Kowloon, Hong Kong',
  addressZh: '香港九龍觀塘偉業街160號美康工業大廈11樓1543室',
  companyNumber: '80196130',
  brNumber: '80196130-000-04-26-0',
  email: 'hello@furtherjoy.com',
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

export const SOCIALS: SocialLink[] = [
  {label: 'X', handle: '@FurtherJoyHQ', href: 'https://x.com/FurtherJoyHQ'},
  {
    label: 'Instagram',
    handle: '@FurtherJoyHQ',
    href: 'https://instagram.com/furtherjoyhq',
  },
];
