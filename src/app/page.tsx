import Footer from "@/components/footer";
import ServicesEffectGridLayout from "@/components/services-effect-grid-layout";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ImageGridDesktop from "@/features/products/components/image-grid-desktop";
import {
  ContainerContent,
  ContainerHeader,
  ItemContainer,
  OtherBrandsContainer,
  ProductContainer,
} from "@/features/products/components/item-container";
import ItemsHeader from "@/features/products/components/items-header";
import UnCategorizedSection from "@/features/products/components/uncat-items-section";
import { BrandType } from "@/features/products/utils/enum";
import AccessoriesContainer from "@/features/public/components/accessories-container";
import BestsellerSection from "@/features/public/components/best-seller-section";
import Header from "@/features/public/components/header";
import Navbar from "@/features/public/components/navbar";
import NewArrivalsCarousel from "@/features/public/components/new-arrivals-carousel";
import { services } from "@/shared/routes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar slug="home" />
      <header className="bg-black">
        {/* <picture className="opacity-75">
          <source srcSet="/img/hero-desktop.jpg" media="(min-width: 1024px)" />
          <source media="(min-width: 768px)" srcSet="/img/hero-medium.jpg" />
          <source media="(min-width: 360px)" srcSet="/img/hero-mobile.jpg" />
          <Image
            src={"/img/hero-desktop.jpg"}
            alt="hero"
            fill
            className="object-cover h-[720px] opacity-85"
          />
        </picture> */}
        <div className="whitespace-nowrap h-12"></div>
        <div className="w-full h-[360px] md:h-screen flex opacity-75">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source
              src="/videos/hero-vid.mp4"
              type="video/mp4"
              media="(min-width: 360px)"
              className="w-full"
            />
          </video>
        </div>
      </header>
      <div className="flex flex-col gap-3 w-full bg-black pb-12 md:pt-52 pt-12">
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
      <div className="w-full bg-white flex flex-col gap-y-8">
        <div className="container mx-auto p-4 md:p-8">
          <div className="pt-12 w-full h-full flex flex-col">
            {/* Apple section */}
            <ItemContainer>
              <ContainerHeader>
                <ItemsHeader
                  title="Apple"
                  subTitle="Shop Apple products and pick what best for you"
                />
              </ContainerHeader>
              <ContainerContent>
                <ProductContainer routes={BrandType.APPLE} />
                <Link
                  href={"/products?category=mobile&brand=apple"}
                  className="w-full flex items-center justify-center pt-8"
                >
                  <Button variant="secondary">Browse All</Button>
                </Link>
              </ContainerContent>
            </ItemContainer>
          </div>
          <div className="w-full h-full pt-12">
            <Image
              src={"/img/apple-hero-img.jpg"}
              alt="img-alt"
              width={1920}
              height={1080}
              className="object-cover h-[400px] rounded-lg"
            />
          </div>
          <div className="pt-12 w-full h-full flex flex-col">
            {/* Samsung section */}
            <ItemContainer>
              <ContainerHeader>
                <ItemsHeader
                  title="Samsung"
                  subTitle="Shop Samsung products and pick what best for you"
                />
              </ContainerHeader>
              <ContainerContent>
                <ProductContainer routes={BrandType.SAMSUNG} />
                <Link
                  href={"/products?category=mobile&brand=samsung"}
                  className="w-full flex items-center justify-center pt-8"
                >
                  <Button variant="secondary">Browse All</Button>
                </Link>
              </ContainerContent>
            </ItemContainer>
          </div>
          <div className="w-full h-full pt-12">
            <Image
              src={"/img/samsung-hero-img.webp"}
              alt="img-alt"
              width={1920}
              height={1080}
              className="object-cover h-[600px] rounded-lg"
            />
          </div>
          {/* Other products section */}
          <div className="pt-12 w-full h-full flex flex-col">
            {/* Other Brands section */}
            <ItemContainer>
              <ContainerHeader>
                <ItemsHeader
                  title="Other"
                  subTitle="Browse all the other brands and pick what best for you"
                />
              </ContainerHeader>
              <ContainerContent>
                <OtherBrandsContainer />
                <Link
                  href={"/products?category=mobile"}
                  className="w-full flex items-center justify-center pt-8"
                >
                  <Button variant="secondary">Browse All</Button>
                </Link>
              </ContainerContent>
            </ItemContainer>
          </div>
          <div className="w-full h-full pt-12">
            <Image
              src={"/img/other-phones-hero.webp"}
              alt="img-alt"
              width={1920}
              height={1080}
              className="object-cover h-[600px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto p-4 md:p-8">
          <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start items-start">
            <h2 className="lg:text-4xl font-semibold">Explore.</h2>
            <p>Discover our products by unlisted categories</p>
          </Header>
          <div className="pt-12 w-full h-full">
            {/* Unlisted section */}
            <UnCategorizedSection />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col">
        {/* Accessories section */}
        <AccessoriesContainer routes={"accessories"} />
      </div>
      <div className="bg-white">
        <div className="container mx-auto p-4 md:p-8">
          <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 md:justify-start md:items-start justify-center items-center">
            <h2 className="lg:text-4xl font-semibold text-2xl">Our Story.</h2>
            <p className="font-light text-slate-500">
              Customer journey and our story
            </p>
          </Header>
          <div className="pt-12 w-full h-full">
            {/* Our story section */}
            <section className="flex flex-col pb-10">
              <p className="text-slate-400 md:text-start text-center">
                Blue Grass Cellular is Sri Lanka&apos;s leading mobile retailer,
                proudly serving the nation with over 27 years of industry
                excellence. Specializing in an extensive range of cutting-edge
                mobile phones and premium accessories, we are committed to
                delivering unparalleled quality and value. Every product we
                offer is backed by genuine warranties, ensuring reliability and
                peace of mind for our customers.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                Our unwavering focus on exceptional service has established us
                as a trusted name in the industry, where professionalism,
                innovation, and customer satisfaction converge. We recognize
                that technology is not just about devices but about empowering
                lives, which is why our knowledgeable team is dedicated to
                helping you find tailored solutions that meet your specific
                needs.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                At Blue Grass Cellular, we go beyond sales—we build
                relationships rooted in trust, offering not only the latest in
                mobile technology but also ongoing support and expertise. From
                state-of-the-art smartphones to essential accessories, we
                provide a seamless shopping experience designed to exceed
                expectations.
              </p>
              <br />
              <p className="text-slate-400 md:text-start text-center">
                Discover the Blue Grass Cellular difference: where a legacy of
                excellence, a commitment to innovation, and a customer-first
                philosophy make us the premier destination for all your mobile
                technology needs. Trust us to deliver more than products—trust
                us to deliver a promise of quality, reliability, and
                unparalleled service.
              </p>
            </section>
            <section className="flex flex-col pb-20 gap-y-6">
              <header>
                <h2 className="font-semibold text-blue-500 md:text-xl">
                  Our Happy Customers
                </h2>
              </header>
              {/* Image grid mobile */}
              <div className="md:hidden flex">
                <ScrollArea className="w-[340px] h-full">
                  <div className="flex gap-3 w-max">
                    <Image
                      src={"/img/customers/customers.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-contain rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_2.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_3.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_4.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                    <Image
                      src={"/img/customers/customers_5.png"}
                      alt="customer-1"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              {/* Image grid desktop */}
              <ImageGridDesktop />
              <div className="w-full flex flex-col gap-6">
                <Header classNames="mb-7 2xl:pr-5 pt-10 flex-col gap-y-2 md:justify-start md:items-start justify-center items-center">
                  <h2 className="lg:text-4xl font-semibold text-2xl">
                    Our Services.
                  </h2>
                  <p>What we offer for you</p>
                </Header>
                <p className="text-slate-700 text-center">
                  Blue Grass Cellular is Sri Lanka’s premier mobile retailer,
                  proudly serving the nation with over 27 years of unmatched
                  excellence in the industry. Renowned for our specialization in
                  high-quality mobile phones and accessories, we have set the
                  benchmark for reliability, innovation, and superior customer
                  service.
                </p>
                <ServicesEffectGridLayout items={services} />
                <p className="text-slate-600 text-center">
                  At Blue Grass Cellular, we don’t just sell mobile
                  technology—we create lasting relationships with our customers,
                  built on trust, quality, and service excellence. Experience
                  the pinnacle of professionalism and discover why we are Sri
                  Lanka’s preferred destination for mobile devices and
                  accessories. With Blue Grass Cellular, you can trust that
                  every interaction will deliver innovation, reliability, and
                  complete satisfaction.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
