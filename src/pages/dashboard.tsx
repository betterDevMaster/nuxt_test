// !STARTERCONF You can delete this page
import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';

export default function DashboardPage() {
  const [mode, setMode] = React.useState('');

  return (
    <Layout onMode={(_mode) => setMode(_mode)}>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', 'sky')}
        >
          <div
            className={clsx(
              'layout min-h-screen',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1>Dashboard Compoment</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
