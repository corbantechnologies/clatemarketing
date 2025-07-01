import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Clate Marketing Group</title>
        <meta
          name="description"
          content="Clate Marketing Group | Growing your Business to the Next Level"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
