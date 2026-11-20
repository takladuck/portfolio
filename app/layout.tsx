import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohit — Software Engineer (AI, Backend & Cloud)",
  description:
    "I build AI-powered systems — and fix things that are broken. Early-career software engineer working across AI, Python and cloud.",
  keywords: [
    "software engineer",
    "AI",
    "backend",
    "cloud",
    "Python",
    "AWS",
    "portfolio",
  ],
  authors: [{ name: "Mohit" }],
  openGraph: {
    title: "Mohit — Software Engineer (AI, Backend & Cloud)",
    description:
      "I build AI-powered systems — and fix things that are broken.",
    type: "website",
    locale: "en_US",
    siteName: "Mohit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit — Software Engineer (AI, Backend & Cloud)",
    description:
      "I build AI-powered systems — and fix things that are broken.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Prevent FOUC: apply theme class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                  document.documentElement.classList.add('no-transitions');
                  requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                      document.documentElement.classList.remove('no-transitions');
                    });
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="noise-overlay min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to content */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
