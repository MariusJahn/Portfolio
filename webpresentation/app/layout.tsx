/* eslint-disable @next/next/no-head-element */

import Link from 'next/link';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body>
          <nav>
            <Link className='navbutton' href={'/'}>About Me</Link>
            <Link className='navbutton' href={'/stuffILike'}>Stuff I like</Link>
            <Link className='navbutton' href={'/projects'}>Projects</Link>
          </nav>
          <main>
          {children}
          </main>
      </body>
    </html>
  );
}
