"use client";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (href, name) => {
    const PageText = document.getElementById("PageText");
    PageText.innerText = name;
    if (pathName != href) {
      router.push(href);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-10 flex items-center font-bold gap-4">
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                handleClick(link.href, link.name);
              }}
            >
              {link.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
