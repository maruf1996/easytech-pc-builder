import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";

const CategoryPage = ({ data }) => {
  return (
    <div className="md:px-16 px-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((product, idx) => (
          <div key={idx} className="card  shadow-xl">
            <figure>
              <img src={product?.image} alt="Shoes" />
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
                  <button className="btn btn-primary uppercase">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/catagories");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: {
      categoryId: product.category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/catagories/${params.categoryId}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
