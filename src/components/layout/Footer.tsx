import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Footer() {
  return (
    <footer className='border-t dark:border-gray-50/[0.2] lg:border-gray-900/10'>
      <section className='m-auto flex w-full justify-between py-6 sm:w-9/12'>
        <div>
          <p>About Us</p>
          <p>Updates</p>
          <p>What People Say</p>
          <p>Aak a Question</p>
        </div>
        <div>
          <p>Partnerships</p>
          <p>Content Info</p>
          <p>Research</p>
        </div>
        <div>
          <p>Terms of Service</p>
          <p>Private Policy</p>
        </div>
      </section>
    </footer>
  );
}
