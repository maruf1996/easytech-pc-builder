import FeaturedCategory from "@/components/UI/FeaturedCategory";
import FeaturedProduc from "@/components/UI/FeaturedProduc";
import HoreBanner from "@/components/UI/HoreBanner";
import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";

export default function HomePage({ products }) {
  // console.log(products);
  return (
    <div>
      <Head>
        <title>PC BUILDER - Home</title>
        <meta name="PC BUILDER" description="this is pc builder home page" />
      </Head>
      <HoreBanner></HoreBanner>
      <FeaturedProduc products={products}></FeaturedProduc>
      <FeaturedCategory></FeaturedCategory>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const shuffledProducts = data?.data.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 6);

  return {
    props: {
      products: randomProducts,
    },
  };
};
