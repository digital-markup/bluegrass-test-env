import BestsellerSection from "@/features/public/components/best-seller-section";
import Header from "@/features/public/components/header";
import Navbar from "@/features/public/components/navbar";
import NewArrivalsCarousel from "@/features/public/components/new-arrivals-carousel";
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
            className="object-cover h-[720px]"
          />
        </picture>
      </header>
      <div className="flex flex-col gap-3 w-full bg-black pb-6">
        <section className="text-white w-full p-4 md:p-8">
          <Header classNames="container mx-auto">
            <h2 className="text-white lg:text-4xl 2xl:pl-16 pl-6">
              New Arrivals
            </h2>
          </Header>
          {/* add carousel */}
          <div className="flex max-w-7xl mx-auto justify-center">
            <NewArrivalsCarousel />
          </div>
        </section>
      </div>
      <div className="w-full bg-white">
        {/* Best seller section */}
        <BestsellerSection />
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
