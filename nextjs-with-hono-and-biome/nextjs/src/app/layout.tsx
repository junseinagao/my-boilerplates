import { PropsWithChildren } from "react";

export const metadata = {
  title: "[FIXME]",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
