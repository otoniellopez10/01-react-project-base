// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_APP = "/app";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PATH_PAGE = {
  root: ROOTS_APP,
  home: path(ROOTS_APP, "/home"),
};

export const PATH_GENERIC = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
};
