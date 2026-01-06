import "./globals.css";

export const metadata = {
  title: "Rafael.dev",
  description: "Portfólio Front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
