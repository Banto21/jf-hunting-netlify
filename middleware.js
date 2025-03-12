import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname } = req.nextUrl;

    // If the user is already on /en or /pl, do nothing
    if (pathname.startsWith('/') || pathname.startsWith('/en')) {
        return NextResponse.next();
    }

    // Get browser language from request headers
    const acceptLanguage = req.headers.get('accept-language') || '';
    const browserLang = acceptLanguage.split(',')[0].split('-')[0]; // Extract language code

    // Redirect to /en if browser language is not Polish
    if (browserLang !== 'pl') {
        return NextResponse.redirect(new URL('/en', req.url));
    }

    // Otherwise, allow access to /pl
    return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
    matcher: '/' // Apply only to the root path
};
