import './app.css';
import { Poppins } from 'next/font/google';

import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import AuthProvider from '@/store/authContext';
import CourseProvider from '@/store/courseContext';
import Tawk from './tawk';

const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Tawk />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CourseProvider>
            <Header />
            {children}
            <Footer />
            
          </CourseProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
