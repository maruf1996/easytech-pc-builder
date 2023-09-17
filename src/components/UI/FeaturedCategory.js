import Link from "next/link";

const categories = [
  { slug: "processor", title: "Processor", img: "/images/processor-1.jpg" },
  {
    slug: "motherboard",
    title: "Motherboard",
    img: "/images/motherboard-1.jpg",
  },
  { slug: "ram", title: "RAM", img: "/images/ram-1.jpg" },
  {
    slug: "powersupplyunit",
    title: "Power Supply Unit",
    img: "/images/power-1.jpg",
  },
  {
    slug: "storagedevice",
    title: "Storage Device",
    img: "/images/storage-1.jpg",
  },
  { slug: "monitor", title: "Monitor", img: "/images/monitor-1.jpg" },
  { slug: "others", title: "Others", img: "/images/hanset.jpg" },
];

const FeaturedCategory = () => {
  return (
    <div className="md:px-16 px-4 my-12">
      <div className="">
        <h1 className="text-center font-bold text-3xl">Featured Categories</h1>
        <p className="text-center mt-3 mb-8">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
        {categories.map((category, idx) => (
          <Link key={idx} href={`catagories/${category.slug}`}>
            <div className="card bg-white shadow-xl hover:text-orange-600">
              <div className="card-body">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={category?.img}
                    alt=""
                    className="w-24 h-20 rounded-lg"
                  />
                  <h2 className="text-1xl font-semibold">{category.title}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
