import Navbar from "@/features/public/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <header className="bg-black min-h-screen">
        <picture>
          <source srcSet="/img/hero-desktop.jpg" media="(min-width: 1024px)" />
          <source media="(min-width: 768px)" srcSet="/img/hero-medium.jpg" />
          <source media="(min-width: 360px)" srcSet="/img/hero-mobile.jpg" />
          <Image
            src={"/img/hero-desktop.jpg"}
            alt="hero"
            fill
            className="object-contain h-[820px]"
          />
        </picture>
      </header>
      <div className="w-full bg-white">
        <div className="container mx-auto p-4 md:p-8">
          <h2>Bestseller</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto p-4 md:p-8">
          <h2>All Brands</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto p-4 md:p-8">
          <h2>All Brands</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque temporibus nam inventore saepe sed nesciunt recusandae velit
            beatae dolor architecto fugit impedit, obcaecati eum! Nisi odit ad
            ea numquam.
          </p>
        </div>
      </div>
      <footer></footer>
    </main>
  );
}
