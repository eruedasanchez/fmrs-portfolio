import createIntlMiddleware from 'next-intl/middleware';
import {locales} from './navigation'; 

export default createIntlMiddleware({
    locales,
    defaultLocale: 'en'
});

export const config = { matcher: ['/', '/(en|es|no)/:path*'] };

