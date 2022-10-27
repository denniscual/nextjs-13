import "./globals.css";
import "./users/client-component.module.css";
import "./nav-bar.module.css";
import styles from "./layout.module.css";
import NavBar from "./nav-bar";

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
          <footer className={styles.footer}>Footer</footer>
        </div>
      </body>
    </html>
  );
}
