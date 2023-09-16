import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";

const PcBuilderPage = ({ data }) => {
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
                <td className="py-3 px-4 border ">{"N/A"}</td>
                <td className="py-3 px-4 border text-center">
                  <Link
                    href={`/pc-builder/${category.category}`}
                    className="btn btn-sm btn-primary"
                  >
                    Choose
                  </Link>
                </td>
                <td className="py-3 px-4 border text-center">
                  <button className="btn btn-sm bg-red-600 hover:bg-red-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            className="btn btn-disabled my-8"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Please Add More Products
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
  const res = await fetch("http://localhost:5000/allcategories");
  const data = await res.json();
  //   console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
