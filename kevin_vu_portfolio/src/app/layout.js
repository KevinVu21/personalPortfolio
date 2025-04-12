import "./globals.css";
import NavBar from '@/app/components/NavBar'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <NavBar /> 
        {children}
      </body>
    </html>
  );
}
