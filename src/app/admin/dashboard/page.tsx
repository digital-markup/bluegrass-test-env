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
          <div className="flex flex-col gap-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellat nesciunt eveniet officiis? Harum sint similique repellat
              voluptate consequuntur. Voluptas aut nam distinctio excepturi
              facere quam, nisi nostrum numquam fugit.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellat nesciunt eveniet officiis? Harum sint similique repellat
              voluptate consequuntur. Voluptas aut nam distinctio excepturi
              facere quam, nisi nostrum numquam fugit.
            </p>
          </div>
        </section>
        <section className="">{/* social media activities */}</section>
      </div>
    </div>
  );
}

export default DashboardPage;
