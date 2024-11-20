import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FlipCard from "@/features/dashboard/components/flip-card";
import React from "react";

function DashboardPage() {
  return (
    <div className="w-full h-full">
      <header className="pt-0">
        <p className="text-sm text-blue-600">Dashboard Page</p>
        <h2 className="text-2xl capitalize font-semibold">Welcome back</h2>
      </header>
      <div className="flex-1 pt-14">
        <section className="card-layout">
          <header className="w-full flex items-center justify-start border-b px-6 pb-3">
            <h2 className="text-base font-medium">Recent Activity</h2>
          </header>
          {/* with recent activity -- small cards & recently added list */}
          <div className="w-full h-full flex flex-row gap-4 justify-start items-center p-6">
            <FlipCard />
            <FlipCard />
            <FlipCard />
            <FlipCard />
          </div>
        </section>
        <section className="w-full h-full grid xl:grid-cols-[1fr_430px] gap-x-5 gap-4 mt-12">
          <div className="card-layout">
            <header className="w-full flex items-center justify-start border-b px-6 pb-3">
              <h2 className="text-base font-medium">Analysis for Past Week</h2>
            </header>
            <div className="w-full h-full flex flex-row gap-4 justify-start p-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae sequi quaerat et, autem at dolores. Ipsa
                praesentium, nesciunt doloremque at, quibusdam illum inventore
                reprehenderit cumque nemo doloribus laudantium magni iste.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="card-layout">
              <header className="w-full flex items-center justify-start border-b px-6 pb-3">
                <h2 className="text-base font-medium">Recently Added</h2>
              </header>
              <div className="w-full h-full flex flex-row gap-4 justify-start items-center p-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae sequi quaerat et, autem at dolores. Ipsa
                  praesentium, nesciunt doloremque at, quibusdam illum inventore
                  reprehenderit cumque nemo doloribus laudantium magni iste.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full mt-12">
          <div className="card-layout">
            <header className="w-full flex items-center justify-start border-b px-6 pb-3">
              <h2 className="text-base font-medium">Recent Activity</h2>
            </header>
            {/* card body should be seperated into 2 parts */}
            <div className="w-full h-full grid grid-cols-[1fr_450px] gap-x-2 p-6">
              <div className="flex border-r">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque aliquam sunt reprehenderit, possimus delectus pariatur
                  aperiam odit obcaecati molestiae ea officia molestias aut
                  nihil quidem autem ducimus maxime error non!
                </p>
              </div>
              <div className="pl-4 flex flex-col gap-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardFooter className="bg-blue-100/60">
                    <p className="text-xs">Card Footer</p>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardFooter className="bg-blue-100/60">
                    <p className="text-xs">Card Footer</p>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardFooter className="bg-blue-100/60">
                    <p className="text-xs">Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
