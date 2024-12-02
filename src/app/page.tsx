import Footer from "@/components/footer";
import OverlayText from "@/components/overlay-text";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ContainerContent,
  ContainerHeader,
  ItemContainer,
  ProductContainer,
} from "@/features/products/components/item-container";
import ItemsHeader from "@/features/products/components/items-header";
import UnCategorizedSection from "@/features/products/components/uncat-items-section";
import { BrandType } from "@/features/products/utils/enum";
import AccessoriesContainer, {
  AccessoriesMobile,
} from "@/features/public/components/accessories-container";
import BestsellerSection from "@/features/public/components/best-seller-section";
import Header from "@/features/public/components/header";
import Navbar from "@/features/public/components/navbar";
import NewArrivalsCarousel from "@/features/public/components/new-arrivals-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <header className="bg-black min-h-screen">
        <OverlayText />
        <picture className="opacity-75">
          <source srcSet="/img/hero-desktop.jpg" media="(min-width: 1024px)" />
          <source media="(min-width: 768px)" srcSet="/img/hero-medium.jpg" />
          <source media="(min-width: 360px)" srcSet="/img/hero-mobile.jpg" />
          <Image
            src={"/img/hero-desktop.jpg"}
            alt="hero"
            fill
            className="object-cover h-[720px] opacity-85"
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
      <div className="w-full bg-white flex flex-col gap-y-8">
        <div className="container mx-auto p-4 md:p-8">
          <Header classNames="mb-6 2xl:pr-5 pt-10">
            <h2 className="lg:text-4xl font-semibold">All Brands.</h2>
          </Header>
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
                  href={"/products?apple=true"}
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
                  href={"/products?apple=true"}
                  className="w-full flex items-center justify-center pt-8"
                >
                  <Button variant="secondary">Browse All</Button>
                </Link>
              </ContainerContent>
            </ItemContainer>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto p-4 md:p-8">
          <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start items-start">
            <h2 className="lg:text-4xl font-semibold">Unlisted.</h2>
            <p>Other accessories are listed here</p>
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
        <AccessoriesMobile routes={"accessories"} />
      </div>
      <div className="bg-white">
        <div className="container mx-auto p-4 md:p-8">
          <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start items-start">
            <h2 className="lg:text-4xl font-semibold">Our Story.</h2>
            <p>Customer journey and our story</p>
          </Header>
          <div className="pt-12 w-full h-full">
            {/* Our story section */}
            <section className="flex flex-col pb-10">
              <p className="text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                tempore dolorum blanditiis veniam quia beatae. Totam impedit
                quis expedita, aut, pariatur ipsam similique dignissimos id
                nesciunt dolor assumenda odio consequuntur? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Exercitationem recusandae
                neque dicta optio eum. Maxime rem, asperiores voluptas totam
                iure, debitis odit velit cum assumenda nemo deleniti doloremque
                ipsa facere! iure, debitis odit velit cum assumenda nemo
                deleniti doloremque ipsa facere!
              </p>
              <br />
              <p className="text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                tempore dolorum blanditiis veniam quia beatae. Totam impedit
                quis expedita, aut, pariatur ipsam similique dignissimos id
                nesciunt dolor assumenda odio consequuntur? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Exercitationem recusandae
                neque dicta optio eum. Maxime rem, asperiores voluptas totam
                iure, debitis odit velit cum assumenda nemo deleniti doloremque
                ipsa facere! iure, debitis odit velit cum assumenda nemo
                deleniti doloremque ipsa facere!
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
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
