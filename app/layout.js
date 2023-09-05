import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arrobbio-dev-Portfolio',
  description:
    'Mi chiamo Arrobbio Umberto e sono uno junior full stack web developer. Vi presento il mio portfolio fatto con React e Next.js.Lo terrò aggiornato con i miei nuovi lavori e con i miei progetti personali.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
