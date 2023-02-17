import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import TextButton from '@/components/buttons/TextButton';

const links = [
  { href: '/dashboard', label: 'dashboard' },
  { href: '/auth', label: 'Auth' },
];

type HeaderProps = {
  onMode: (mode: React.SetStateAction<string>) => void;
};

export default function Header({ onMode }: HeaderProps) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  const toggleMode = (): void => {
    const _mode = mode === 'dark' ? 'light' : 'dark';
    setMode(_mode);
    onMode(_mode);
  };

  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <div className='flex items-center justify-between space-x-4'>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <TextButton onClick={toggleMode}>{mode}</TextButton>
        </div>
      </div>
    </header>
  );
}
