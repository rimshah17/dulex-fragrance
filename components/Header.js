// components/Header.js
"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component runs only on the client side
  }, []);

  if (!isClient) {
    return null; // or a loading spinner or fallback UI
  }

  return (
    <header className="container">
      <div className="rowCustom">
        <div className="logo">
          <Link href="/">
            <h2 className="">Dulex Fragrance</h2>
          </Link>
        </div>
        <nav className="menu">
          <Link href="/" className="text-gray-700 ">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 ">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-700 ">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-700 ">
            Contact
          </Link>
        </nav>
        <button className="btn">
          Add To Cart
        </button>
      </div>
    </header>
  );
}
