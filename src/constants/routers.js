const PUBLIC_ROUTER_PATH = {
  NOT_FOUND: { KEY: 'NOT_FOUND', PATH: '*' },
  HOME_PAGE: { KEY: 'HOME_PAGE', PATH: '/' },
  DETAIL_PAGE: { KEY: 'DETAIL_PAGE', PATH: '/truyen-tranh/:id' },
  IMAGE_PAGE: { KEY: 'IMAGE_PAGE', PATH: '/truyen-tranh/:id/:chapter' },
  GENRE_PAGE: { KEY: 'GENRE_PAGE', PATH: '/the-loai' },
  NEWS_PAGE: { KEY: 'NEWS_PAGE', PATH: '/tin-tuc' },
  CONTACT_PAGE: { KEY: 'CONTACT_PAGE', PATH: '/lien-he' },
  LOGIN_PAGE: { KEY: 'LOGIN_PAGE', PATH: '/dang-nhap' },
}

const PRIVATE_ROUTER_PATH = {
  UPLOADER_DASHBOARD_PAGE: {
    KEY: 'UPLOADER_DASHBOARD_PAGE',
    PATH: '/uploader/dashboard',
  },
}

const ADMIN_ROUTER_PATH = {
  ADMIN_DASHBOARD_PAGE: {
    KEY: 'ADMIN_DASHBOARD_PAGE',
    PATH: '/admin/dashboard',
  },
}

export const ROUTER_PATH = {
  ...PUBLIC_ROUTER_PATH,
  ...PRIVATE_ROUTER_PATH,
  ...ADMIN_ROUTER_PATH,
}
