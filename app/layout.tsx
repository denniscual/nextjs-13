import "./globals.css";
import styles from "./layout.module.css";
import NavBar from "./nav-bar";
import AppLayoutClient from "./app-layout-client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Random Users</title>
        <meta name="description" content="Random Users" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className={styles.container}>
          <NavBar />
          <main className={styles.main}>{children}</main>
          <AppLayoutClient />
          <footer className={styles.footer}>Footer</footer>
        </div>
      </body>
    </html>
  );
}
