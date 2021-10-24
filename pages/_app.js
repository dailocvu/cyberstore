import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        {/*every component inside app has unique key = path -> state management will not confuse */}
        <Component {...pageProps} key={router.asPath} />{" "}
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
