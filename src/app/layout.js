import "./globals.css";

export const metadata = {
  title: 'EcoNest',
  description: 'EcoNest - Sustainable Living Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Audiowide&family=Cal+Sans&family=Fascinate&family=Fugaz+One&family=Mitr:wght@200;300;400;500;600;700&family=Paytone+One&family=Playwrite+DK+Loopet:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rowdies:wght@300;400;700&family=Russo+One&family=Sriracha&family=Tagesschrift&family=Tektur:wght@400..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Ysabeau+SC:wght@1..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}
