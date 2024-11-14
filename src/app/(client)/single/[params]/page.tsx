import { Button } from "@/components/ui/button";
import React from "react";

function SingleProductPage() {
  return (
    <div className="w-full min-h-screen px-6">
      {/* Breadcrumb nav*/}
      <div className="container mx-auto">
        <div className="w-full grid lg:grid-cols-[1fr_430px] gap-x-5 gap-4 mt-12">
          <div className="lg:sticky top-8 lg:h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              {/* main product layout */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                itaque tenetur porro, alias consequatur atque illo voluptatum,
                odit minus molestiae, quidem aliquid! Voluptatibus aut totam
                maxime vero commodi, quod ratione?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 lg:py-36">
            {/* side product information */}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              ullam modi iure ipsa soluta nobis est aut officiis, consectetur
              suscipit eum nostrum quod doloribus autem placeat animi quae
              tempore laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              ullam modi iure ipsa soluta nobis est aut officiis, consectetur
              suscipit eum nostrum quod doloribus autem placeat animi quae
              tempore laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              ullam modi iure ipsa soluta nobis est aut officiis, consectetur
              suscipit eum nostrum quod doloribus autem placeat animi quae
              tempore laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              ullam modi iure ipsa soluta nobis est aut officiis, consectetur
              suscipit eum nostrum quod doloribus autem placeat animi quae
              tempore laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              ullam modi iure ipsa soluta nobis est aut officiis, consectetur
              suscipit eum nostrum quod doloribus autem placeat animi quae
              tempore laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tenetur minima, ipsum tempora aut, eveniet quos vitae, a
              commodi dolorem quam corporis voluptatibus doloribus impedit
              facere. Repudiandae quidem pariatur minima?
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          {/* Tabs with additional information */}
          <div className="flex flex-row w-full justify-evenly items-center mt-20">
            <Button>Additional Information</Button>
            <Button>Review</Button>
            <Button>Compare</Button>
            <Button>Related Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
