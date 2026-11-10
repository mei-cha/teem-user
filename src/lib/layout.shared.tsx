import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/image/logo.webp"
            alt="Teem.id"
            width={128}
            height={32}
            className="h-8 w-auto object-contain dark:hidden"
          />
          <Image
            src="/image/logo1.webp"
            alt="Teem.id"
            width={128}
            height={32}
            className="hidden h-8 w-auto object-contain dark:block"
          />
        </div>
      ),
      url: '/docs',
    },

    searchToggle: {
      enabled: true,
    },

    themeSwitch: {
      enabled: true,
    },

    i18n: false,
  };
}