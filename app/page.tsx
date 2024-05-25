import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbarr";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative flex flex-col bg-black-100 justify-center
    items-center overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max- w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
