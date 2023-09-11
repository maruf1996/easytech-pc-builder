import Link from "next/link";

const Navbar = () => {
  return (
    <div class="bg-gray-900 text-white">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <span class="md:ml-2 md:text-xl font-bold tracking-wide text-gray-100 uppercase">
              Easytech PC
            </span>
          </Link>
          <details className="dropdown">
            <summary className="btn btn-sm">Category</summary>
            <ul className="p-2 mt-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
              <li>
                <Link href="/">Processor</Link>
              </li>
              <li>
                <Link href="/">Motherboard</Link>
              </li>
              <li>
                <Link href="/">RAM</Link>
              </li>
              <li>
                <Link href="/">Power Supply Unit</Link>
              </li>
              <li>
                <Link href="/">Storage Device</Link>
              </li>
              <li>
                <Link href="/">Others</Link>
              </li>
            </ul>
          </details>
          <ul class="flex items-center space-x-8 lg:flex">
            <li>
              <Link href="/" class="text-white">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/"
                class="text-white uppercase btn btn-primary btn-sm"
              >
                Pc Builder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
