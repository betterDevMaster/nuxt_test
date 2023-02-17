import Link from 'next/link';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Header from './Header';

export default function DashboardLayout({
  children,
  onMode,
}: {
  children: React.ReactNode;
  onMode: (mode: React.SetStateAction<string>) => void;
}) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];

  return (
    <>
      <Header onMode={onMode} />
      <div className='flex min-h-screen flex-col'>
        <div className='flex flex-1 flex-col md:flex-row'>
          <aside className='w-full bg-fuchsia-100 md:w-60'>
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className='m-2' key={title}>
                    <Link
                      href={href}
                      className={`flex cursor-pointer rounded bg-fuchsia-200 p-2 hover:bg-fuchsia-400 ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
