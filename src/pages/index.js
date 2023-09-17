import FeaturedCategory from "@/components/UI/FeaturedCategory";
import HoreBanner from "@/components/UI/HoreBanner";
import RootLayout from "@/components/layouts/RootLayout";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function HomePage({ products }) {
  // console.log(products);
  const DynamicProduct = dynamic(
    () => import("@/components/UI/FeaturedProduc"),
    {
      loading: () => <p className="text-xl font-bold">Loading...</p>,
    }
  );

  return (
    <div>
      <Head>
        <title>PC BUILDER - Home</title>
        <meta name="PC BUILDER" description="this is pc builder home page" />
      </Head>
      <HoreBanner></HoreBanner>
      <DynamicProduct products={products}></DynamicProduct>
      <FeaturedCategory></FeaturedCategory>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://easytech-pc-builder-server-idr0vhqns-maruf1996.vercel.app/products"
  );
  const data = await res.json();

  const firstProductOfEachCategory = {};
  data?.data.forEach((product) => {
    const category = product.category;
    if (!firstProductOfEachCategory[category]) {
      firstProductOfEachCategory[category] = product;
    }
  });

  const firstProducts = Object.values(firstProductOfEachCategory);
  // console.log(firstProductOfEachCategory);

  return {
    props: {
      products: firstProducts,
    },
    revalidate: 10,
  };
};
