import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname } = req.nextUrl;
    const res = NextResponse.next();

    // If the user is already on /pl or /en, do nothing
    if (pathname.startsWith('/pl') || pathname.startsWith('/en')) {
        return res;
    }

    // Check if the user has already been redirected
    const hasVisited = req.cookies.get('language_redirect');

    if (hasVisited) {
        return res; // Don't redirect again
    }

    // Get browser language from request headers
    const acceptLanguage = req.headers.get('accept-language') || '';
    const browserLang = acceptLanguage.split(',')[0].split('-')[0]; // Extract language code

    // Default to English if the browser is not Polish
    const redirectLocale = browserLang === 'pl' ? '/' : '/en';

    // Set a cookie to remember the redirection
    const response = NextResponse.redirect(new URL(redirectLocale, req.url));
    response.cookies.set('language_redirect', 'true', {
        maxAge: 60 * 60 * 24 * 30, // Store for 30 days
        path: '/'
    });

    return response;
}

export const config = {
    matcher: '/' // Apply only to the root path
};
