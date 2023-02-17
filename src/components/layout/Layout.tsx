import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({
  children,
  onMode,
}: {
  children: React.ReactNode;
  onMode: (mode: React.SetStateAction<string>) => void;
}) {
  return (
    <>
      <Header onMode={onMode} />
      {children}
      <Footer />
    </>
  );
}
