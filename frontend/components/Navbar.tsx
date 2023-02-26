import "../styles/globals.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Cart from "./Cart";
import Profile from "./Profile";

type NavbarProps = {
  itemCount: number;
};

export default function Navbar({ itemCount }: NavbarProps) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 p-2">
        <div className="w-14 rounded-full">
          <img src="/logo.png" />
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">
          CounterVerse
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end m-2">
          <label tabIndex={0}>
            <ConnectButton />
          </label>
        </div>
        <div className="dropdown dropdown-end m-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{itemCount}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <Cart itemCount={itemCount} subTotal={1100} />
          </div>
        </div>
        <div className="dropdown dropdown-end m-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/ape.png" />
            </div>
          </label>
          <Profile />
        </div>
      </div>
    </div>
  );
}
