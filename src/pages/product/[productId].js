import RootLayout from "@/components/layouts/RootLayout";

const ProductDetailsPage = ({ data }) => {
  const generateKeyFeaturesList = () => {
    const { key_features } = data;
    return (
      <ul className="list-disc ml-6 md:ml-12">
        {Object.entries(key_features).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/_/g, " ")}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <div className="card shadow-xl p-5">
        <div className="lg:flex gap-8">
          <figure className="md:w-6/12">
            <img src={data?.image} alt="Album" className="runded-xl" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-3xl text-primary font-bold">
              {data?.product_name}
            </h1>
            <div className="text-xl md:flex md:flex-row md:justify-between mt-3">
              <p>
                <span className="font-bold">Category: </span>
                {data?.category}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {data?.status}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {data?.price}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {data?.average_rating}
              </p>
            </div>
            <div className="text-xl">
              <p className="text-xl my-3">
                <span className="font-bold">Individual Rating: </span>
                {data?.individual_rating}
              </p>
              <p className="text-xl">
                <span className="font-bold">Description: </span>
                {data?.description}
              </p>
            </div>
            <div className="text-xl">
              <h1 className="font-bold mb-2">Key Features:</h1>
              {generateKeyFeaturesList()}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-primary font-bold text-2xl mt-4">Reviews:</h3>
        <div className="">
          {data?.reviews.map((review, index) => (
            <div key={index} className="card shadow-xl rounded-md p-4">
              <p className="text-xl my-1">User: {review.user}</p>
              <p className="my-1">Rating: {review.rating}</p>
              <p className="my-1">Comment: {review.comment}</p>
              <p className="my-1">Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://easytech-pc-builder-server-idr0vhqns-maruf1996.vercel.app/products"
  );
  const data = await res.json();
  //   console.log(data);

  const paths = data?.data?.map((product) => ({
    params: {
      productId: product?._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://easytech-pc-builder-server-idr0vhqns-maruf1996.vercel.app/product/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
