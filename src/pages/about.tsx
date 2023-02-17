import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/DashboardLayout';

export default function About() {
  const [mode, setMode] = React.useState('');
  return (
    <Layout onMode={(_mode) => setMode(_mode)}>
      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', 'sky')}
        >
          <div className='flex h-full flex-col items-center justify-center'>
            <h1 className='mb-5 text-4xl font-bold'>About</h1>
            <span className='text-7xl'>💬</span>
          </div>
        </section>
      </main>
    </Layout>
  );
}
