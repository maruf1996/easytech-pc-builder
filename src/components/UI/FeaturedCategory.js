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
    <div className="md:px-16 px-4 my-8">
      <div className="">
        <h1 className="text-center font-bold text-3xl">Featured Categories</h1>
        <p className="text-justify my-8">
          Browse our selection of featured categories, each containing
          top-of-the-line products for your computing needs. Whether youre
          building a new PC or upgrading your existing setup, these categories
          cover everything you need to enhance your computing experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {categories.map((category, idx) => (
          <Link key={idx} href={`catagories/${category.slug}`}>
            <div className="card shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-5">
                  <img
                    src={category?.img}
                    alt=""
                    className="w-24 h-20 rounded-lg"
                  />
                  <h2 className="text-1xl font-bold">{category.title}</h2>
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
