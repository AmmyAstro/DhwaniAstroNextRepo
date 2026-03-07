
import "@/app/styles/globals.css";

import { Toaster } from "react-hot-toast";
import Providers from "./redux/provider";
import { SocketProvider } from "./context/socketContext";
import Footerlinks from "@/components/Footerlinks";
import SignInModalWrapper from "../components/Homepagecomp/Signin/SignInWrap";
import { ChatToast } from "./common";
import ScrollToTop from "../Hooks/ScrollTop";
import { LanguageProvider } from "./context/LangContext";

import { Poppins, Sonsie_One } from "next/font/google";
import ApolloWrapper from "./providers/ApolloWrapper";
import { AuthProvider } from "./context/authContext";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-primary",
  display: "swap",
  preload: true,
});

const sonsie = Sonsie_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
  preload: false,
});



export const metadata = {
  title:
    "Best Astrologer Near Me | Online Jyotish Consultation by Dhwani Astro",
  description:
    "Looking for an Online Jyotish consultation in Delhi? Check out Dhwani Astro and contact the best astrologer in India",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${sonsie.variable}`}
    >
      <body className="antialiased font-sans">

        <ApolloWrapper>
          <AuthProvider>
            <LanguageProvider>
              <Providers>
                <SocketProvider>
                  <SignInModalWrapper>

                    <main className="flex justify-center w-full pt-12 lg:pt-37 md:pt-37">
                      {children}
                      <div id="modal-root" />
                      <ChatToast />
                    </main>

                    <Footerlinks />
                  </SignInModalWrapper>
                  <Toaster position="top-center" reverseOrder={false} />
                </SocketProvider>
              </Providers>
              <ScrollToTop />
            </LanguageProvider>
          </AuthProvider>
        </ApolloWrapper>

      </body>
    </html >
  );
}
