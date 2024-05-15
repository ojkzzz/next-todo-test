import { ThemeProvider } from "@mui/material/styles";
import theme from "@/ui/theme/theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Stack } from "@mui/material";
import Header from "@/ui/layout/header/Header";
import Footer from "@/ui/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO NextJS App",
  description: "Чисто по фану апп",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Stack sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
            <Header />
            <Stack
              component="main"
              sx={{ flexGrow: 1, maxHeight: "calc(100dvh - 120px)", overflow: "auto" }}
            >
              {children}
            </Stack>
            <Footer />
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  );
}
