import banner from "@/assets/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const HoreBanner = () => {
  return (
    <div className="bg-base-100 text-base-content py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row">
      {/* Left Half - Image */}
      <div className="lg:w-1/2">
        <Image
          src={banner}
          alt=""
          width={100}
          height={100}
          className="object-cover"
          layout="responsive"
        ></Image>
      </div>

      {/* Right Half - Text Content */}
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-4xl font-bold mb-4">Computer Parts Super Store!</h1>
        <p className="text-lg mb-6">
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
