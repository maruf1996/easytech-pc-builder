import RootLayout from "@/components/layouts/RootLayout";
import { addItem } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const PcBuilderDetailsPage = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = (product) => {
    dispatch(addItem(product));
    router.push("/pc-builder");
  };

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
                <button>
                  <button
                    onClick={() => handleAddToBuilder(product)}
                    className="btn btn-primary uppercase"
                  >
                    Add to Builder
                  </button>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PcBuilderDetailsPage;

PcBuilderDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://easytech-pc-builder-server-idr0vhqns-maruf1996.vercel.app/catagories/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
