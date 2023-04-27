import './globals.css';

export const metadata = {
  title: 'Survey App',
  description: 'Made with Love by Katharina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="synthwave">
      <body>{children}</body>
    </html>
  );
}
