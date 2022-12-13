import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";
import { AuthContextProvider } from "../context/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </AuthContextProvider>
  );
}
