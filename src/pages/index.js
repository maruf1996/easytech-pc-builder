import HoreBanner from "@/components/UI/HoreBanner";
import RootLayout from "@/components/layouts/RootLayout";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HoreBanner></HoreBanner>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
