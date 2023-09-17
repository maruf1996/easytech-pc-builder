import RootLayout from "@/components/layouts/RootLayout";
import { removeItem } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = ({ data }) => {
  const { components } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleSelectProduct = (category, productName) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [category]: productName,
    }));
  };

  const handleRemoveBuilder = (category) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [category]: null,
    }));
    dispatch(removeItem(category));
  };

  // Map the selected product names outside the component
  const categoryProductMap = {};
  components.forEach((component) => {
    if (component.category && component.product_name) {
      categoryProductMap[component.category] = component.product_name;
    }
  });

  // Count the number of selected products under the 'Selected Product' column
  const selectedProductCount =
    Object.values(categoryProductMap).filter(Boolean).length;

  const handleCompleteButton = () => {
    toast.success("Your Order Successfully!");
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-100">
                Product Category
              </th>
              <th className="py-3 px-4 text-left bg-gray-100">Product Name</th>
              <th className="py-3 px-4 bg-gray-100 text-center">Action</th>
              <th className="py-3 px-4 text-center bg-gray-100">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((category, index) => (
              <tr key={index} className="bg-white">
                <th className="py-3 px-4 border">{category?.category}</th>
                <td className="py-3 px-4 border ">
                  {categoryProductMap[category.category] || "N/A"}
                </td>
                <td className="py-3 px-4 border text-center">
                  <Link href={`/pc-builder/${category.category}`}>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() =>
                        handleSelectProduct(
                          category.category,
                          category.product_name
                        )
                      }
                    >
                      Choose
                    </button>
                  </Link>
                </td>
                <td className="py-3 px-4 border text-center">
                  <button
                    onClick={() => handleRemoveBuilder(category?.category)}
                    className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            onClick={handleCompleteButton}
            className="btn btn-primary my-8"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
            disabled={selectedProductCount <= 6}
          >
            {selectedProductCount <= 6
              ? "Please add more products"
              : "Complete Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://easytech-pc-builder-server-idr0vhqns-maruf1996.vercel.app/allcategories"
  );
  const data = await res.json();
  //   console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
