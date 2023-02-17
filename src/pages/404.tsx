import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import clsx from 'clsx';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  const [mode, setMode] = React.useState('');

  return (
    <Layout onMode={(_mode) => setMode(_mode)}>
      <Seo templateTitle='Not Found' />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', 'sky')}
        >
          <div
            className={clsx(
              'layout min-h-screen py-20',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <RiAlarmWarningFill
                size={60}
                className='drop-shadow-glow animate-flicker text-red-500'
              />
              <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
              <ArrowLink className='mt-4 md:text-lg' href='/'>
                Back to Home
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
