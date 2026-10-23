import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "AI-powered design collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={{
        socialButtonsBlockButtonManyInView: "Continue with {{provider}}",
      }}
      appearance={{
        theme: dark,
        variables: {
          colorBackground: "#0e0e15",
          colorInput: "#171722",
          colorBorder: "#262633",
          colorPrimary: "#00c8d4",
          colorPrimaryForeground: "#050506",
          colorForeground: "#ffffff",
          colorMutedForeground: "#8f8f9e",
          colorInputForeground: "#ffffff",
          colorDanger: "#ff4d4f",
          colorSuccess: "#34d399",
          colorWarning: "#fbbf24",
        },
        elements: {
          card: "bg-[#0e0e15] border border-[#22222d] shadow-2xl rounded-2xl w-full max-w-[400px] p-8",
          headerTitle: "text-lg font-semibold text-white tracking-tight",
          headerSubtitle: "text-xs text-[#8f8f9e] mt-1",
          socialButtonsRoot: "!flex !flex-col !gap-3 !w-full",
          socialButtons: "!flex !flex-col !gap-3 !w-full",
          socialButtonsBlockButton:
            "!w-full !flex !items-center !justify-center bg-[#14141d] border border-[#252532] text-white hover:bg-[#1a1a24] rounded-xl font-medium py-2.5 text-sm transition-colors",
          socialButtonsBlockButtonText: "text-white font-medium text-sm",
          dividerRow: "my-5",
          dividerLine: "bg-[#22222e]",
          dividerText: "text-xs text-[#6e6e7e]",
          formFieldLabel: "text-xs font-medium text-white mb-1.5",
          formFieldInput:
            "bg-[#171722] border border-[#262634] text-white placeholder:text-[#525262] rounded-xl py-2.5 px-3.5 focus:border-[#00c8d4] focus:ring-1 focus:ring-[#00c8d4]",
          formButtonPrimary:
            "bg-[#00c8d4] hover:bg-[#00b5c0] text-[#050506] font-semibold text-sm rounded-xl py-2.5 shadow-none transition-colors",
          footerActionText: "text-xs text-[#8f8f9e]",
          footerActionLink: "text-[#00c8d4] hover:underline font-medium text-xs",
        },
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body
          suppressHydrationWarning
          className="min-h-full flex flex-col font-sans bg-bg-base text-text-primary"
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
