import { createSharedPathnamesNavigation } from 'next-intl/navigation'; 

export const locales = ['en', 'es', 'no'] as const; 

export const { Link, useRouter } = createSharedPathnamesNavigation({locales});


