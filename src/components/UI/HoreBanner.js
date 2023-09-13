import banner from "@/assets/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const HoreBanner = () => {
  return (
    <div className="bg-base-100 text-base-content py-4 px-8 sm:px-8 md:px-16 md:py-16  flex flex-col items-center lg:flex-row">
      <div className="lg:w-1/2 md:p-8">
        <Image
          src={banner}
          alt=""
          width={100}
          height={100}
          className="object-cover rounded-lg"
          layout="responsive"
        ></Image>
      </div>
      <div className="lg:w-1/2 lg:pl-8 mt-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Computer Parts Store
        </h1>
        <p className="text-lg mb-6 text-justify">
          Discover the latest and greatest computer parts to power up your rig!
          We have a wide selection of high-quality CPUs, GPUs, motherboards,
          RAM, and more, to elevate your computing experience to new heights.
        </p>
        <Link href="/" className="btn btn-primary">
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HoreBanner;
