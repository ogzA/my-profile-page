import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 border-b text-sm sm:text-base bg-white">
      <a className="text-indigo-800 text-lg flex space-x-2" href="#">
        <Image
          src={Logo}
          width="200px"
          height="100%"
          alt="useEffect.dev"
          className="h-8 lg:h-12"
        />
      </a>
      <nav>
        <div className="flex space-x-2 sm:space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-indigo-600 hover:text-indigo-400"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
