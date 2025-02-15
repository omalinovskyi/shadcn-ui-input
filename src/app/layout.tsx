import React from 'react';

import '@styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shadcn/UI - Input',
  description: 'Shadcn/UI - Input',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
