import Header from "../components/Header/Header";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/sf-pro-display"
            rel="stylesheet"
          />
          <title>Фильмопоиск</title>
        </head>
        <body>
          <div id="root">
            <Header />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}