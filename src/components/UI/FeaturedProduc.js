import Link from "next/link";

const FeaturedProduc = ({ products }) => {
  return (
    <div className="md:px-16 px-4 my-8">
      <div className="">
        <h1 className="text-center font-bold text-3xl">Featured Products</h1>
        <p className="text-justify my-8">
          Check out our selection of top-rated featured products. These
          high-quality items have received excellent reviews from our satisfied
          customers. Whether youre a gamer, content creator, or building a
          powerful workstation, our featured products are designed to meet your
          specific needs and deliver exceptional performance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product, idx) => (
          <div key={idx} className="card  shadow-xl">
            <figure>
              <img
                src={product?.image}
                alt="Shoes"
                className="w-full max-h-72"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                {product?.product_name}
              </h2>

              <p>
                <span className="font-bold">Category : </span>
                {product?.category}
              </p>
              <p>
                <span className="font-bold">Status : </span>
                {product?.status}
              </p>
              <p>
                <span className="font-bold">Price : </span>
                {product?.price}
              </p>
              <p>
                <span className="font-bold">Rating : </span>
                {product?.average_rating}
              </p>

              <div className="card-actions justify-end">
                <Link href={`/product/${product?._id}`}>
                  <button className="btn btn-primary">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduc;
