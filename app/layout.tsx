import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./globals.css";
import { AppLogo, AuthButton } from "@/components";
import theme from "./theme";
import { defaultUrl } from "./constants";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Clutter - The fastest way to manage your pantry",
  description: "Clutter is a pantry management app that helps you keep track of your groceries and recipes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <header>
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between p-3 text-sm">
              <AppLogo />
              <AuthButton />
            </div>
          </nav>
        </header>
        <main className="min-h-screen flex flex-col items-center">
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </main>
      </body>
    </html>
  );
}
