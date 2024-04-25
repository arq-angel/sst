// const API_VERSION = process.env.REACT_APP_API_VERSION;
// const PUBLIC_API_TOKEN = process.env.REACT_APP_PUBLIC_API_TOKEN;
const API_VERSION = 'apiV1';
const PUBLIC_API_TOKEN = '743c7a15a3850459adb8c1b9e3bfc744ed3efe26c9d3d808fdf30c9c2fd5c09d';
const CONTENT_TYPE = 'application/json';

// const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}${API_VERSION}`;
const API_BASE_URL = `http://sstv5.cc/api/${API_VERSION}`;

export const API_SETTINGS = {
    API_VERSION: API_VERSION,
    PUBLIC_API_TOKEN: PUBLIC_API_TOKEN,
    CONTENT_TYPE: CONTENT_TYPE,
}

export const API_GENERAL_ROUTES = {
    LANDING_PAGE_MAKER: `${API_BASE_URL}/landingPageMaker`,
}

export const API_AUTH_ROUTES = {
    LOGIN_ROUTE: `${API_BASE_URL}/login`,
    LOGOUT_ROUTE: `${API_BASE_URL}/logout`,
}

export const STUDENT_PROFILE_ROUTES  = {
    PROFILE_ROUTE: `${API_BASE_URL}/student/profile`,
    REGISTER_ROUTE: `${API_BASE_URL}/student/register`,
}

export const SEARCH_ROUTES  = {
    SEARCH_ROUTE: `${API_BASE_URL}/search`,
}