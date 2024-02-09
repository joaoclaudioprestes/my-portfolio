import { MyHead } from "@/components/myHead";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyHead />
      <Component {...pageProps} />
    </>
  );
}
