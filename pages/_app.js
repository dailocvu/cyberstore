import Head from "next/head";
import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Head>
          <title>Cyberstore | Modern eCommerce</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta
            name="description"
            content="Cyberstore - Modern eCommerce, A project focusing on Shopify, Next.js, TailwindCSS, GraphQL, Storefront API."
          />
          <meta property="og:title" content="Cyberstore - Modern eCommerce" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cyberstore.kryonics.me" />
          <meta
            property="og:image"
            content="https://www.buildnextshop.com/share.png"
          />
          <meta
            property="og:description"
            content="Cyberstore - Modern eCommerce, A project focusing on Shopify, Next.js, TailwindCSS, GraphQL, Storefront API."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Modern eCommerce Course" />
        </Head>
        {/*every component inside app has unique key = path -> state management will not confuse */}
        <Component {...pageProps} key={router.asPath} />{" "}
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
