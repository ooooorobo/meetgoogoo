import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { ReactNode } from 'react';

import 'src/shared/styles/global.css';
import 'src/shared/styles/variables.css';
import 'src/shared/styles/typography.css';
import { WideDeviceLayout } from 'src/pages/layout/WideDeviceLayout';
import { json, LinksFunction, LoaderFunction } from '@remix-run/node';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18next from 'src/app/i18next.server';
import { useTranslation } from 'react-i18next';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export function Layout({ children }: { children: ReactNode }) {
  // Get the locale from the loader
  const { locale } = useLoaderData<typeof loader>();

  const { i18n } = useTranslation();

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <Meta />
        <Links />
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4J2WVTTK5" />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-X4J2WVTTK5');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <WideDeviceLayout>{children}</WideDeviceLayout>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
