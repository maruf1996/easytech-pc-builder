import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="navbar border-b-2 border-indigo-100 text-indigo-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <ul className="p-1 z-50">
                <li>
                  <Link href="/catagories/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/catagories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/catagories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/catagories/powersupplyunit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/catagories/storagedevice">Storage Device</Link>
                </li>
                <li>
                  <Link href="/catagories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/catagories/others">Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost font-bold md:text-2xl uppercase"
        >
          Easytech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary className="btn btn-sm text-indigo-800">
                Catagories
              </summary>
              <ul className="p-1 z-50">
                <li>
                  <Link href="/catagories/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/catagories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/catagories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/catagories/powersupplyunit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/catagories/storagedevice">Storage Device</Link>
                </li>
                <li>
                  <Link href="/catagories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/catagories/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user?.email ? (
          <button
            onClick={() => signOut()}
            className="btn btn-sm mx-5 text-indigo-800"
          >
            Sign out
          </button>
        ) : (
          <Link href="/login" className="btn-sm btn mx-5 text-indigo-800">
            Login
          </Link>
        )}
        <Link href="/pc-builder" className="btn btn-sm text-indigo-800">
          PC BUILDER
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
