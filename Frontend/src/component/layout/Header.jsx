

import { useState, useRef, useEffect } from "react";
import { Container, Logo, PrimaryButton, MobileNav } from "../UI/UiComponent";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  let timeoutId = useRef(null);

  const navItems = [
    { label: "Home", href: "/" },
    // {
    //   label: "Services",
    //   children: [
    //     { label: "Social Media", href: "/services/social-media" },
    //     { label: "Graphic Designing", href: "/services/graphic-designing" },
    //     { label: "Video Editing", href: "/services/video-editing" },
    //   ],
    // },
    {
      label: "Work",
      children: [
        { label: "Triveeni Events", href: "/Work/Triveeni Events" },
        { label: "BB_Station", href: "/Work/BB_Station" },
        { label: "Nayya", href: "/Work/Nayya" },
        { label: "Adda Indian Eatery", href: "/Work/Adda Indian Eatery" },
        { label: "Pita Nutso", href: "/Work/Pita Nutso" },
        { label: "Sake Cafe", href: "/Work/Sake Cafe" },
        { label: "Hearthstone Inn", href: "/Work/Hearthstone Inn" },
        { label: "Nayya", href: "/Work/Nayya" },
        { label: "Nayya", href: "/Work/Nayya" },
        { label: "Nayya", href: "/Work/Nayya" },
      ],
    },
    // { label: "Work", href: "/work" },
    // { label: "Company", href: "/company" },
  ];

  // 🟢 Scroll Hide Navbar
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟡 Hover Handlers with Delay (Smooth)
  const handleMouseEnter = (label) => {
    clearTimeout(timeoutId.current);
    setIsHovered(label);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => setIsHovered(null), 200);
  };

  return (
    <header
      className={`sticky top-10 z-40 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-[calc(100%+2.5rem)]"
      }`}
    >
      <Container>
        <div className="flex h-14 sm:h-18 items-center justify-between rounded-full bg-white pl-3 pr-2 sm:px-4 md:px-6 ring-1 ring-black/10 shadow-sm">
          {/* Logo */}
          <a href="/" aria-label="Go to homepage">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-black relative">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative text-lg"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-sky-500 transition flex items-center gap-1">
                    {item.label}
                   
                  </button>

                  {isHovered === item.label && (
                    <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-2 w-52 z-50">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-sky-500 transition text-lg"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <PrimaryButton href="#contact">Contact Us Now</PrimaryButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <PrimaryButton href="#contact">Contact Us</PrimaryButton>
            <button
              aria-label="Open menu"
              className="grid h-10 w-15 place-items-center rounded-full ring-1 ring-black/10"
              onClick={() => setOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-black"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <MobileNav open={open} setOpen={setOpen} navItems={navItems} />
    </header>
  );
}
