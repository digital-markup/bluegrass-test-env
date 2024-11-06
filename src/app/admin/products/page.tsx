import { Button } from "@/components/ui/button";
import ApplicationSection from "@/features/products/components/application-form-section";
import FloatingSubmitButton from "@/features/products/components/floating-submit-button";
import GeneralInfoFormSection from "@/features/products/components/general-info-form-section";
import OrganizationSection from "@/features/products/components/organization-form-section";
import OtherInformation from "@/features/products/components/other-info-form-section";
import ProductInfoFormSection from "@/features/products/components/product-info-form-section";
import UploadProductVariations from "@/features/products/components/product-variations-info-form-section";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

function ProductsPage() {
  return (
    <div className="w-full min-h-screen">
      <header className="pt-0">
        <p className="text-sm text-blue-600">Products Page</p>
        <h2 className="text-2xl capitalize font-semibold">Add new product</h2>
      </header>
      <form>
        <div className="w-full grid xl:grid-cols-[1fr_430px] gap-x-5 gap-4 mt-12">
          <div className="flex flex-col gap-y-4">
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">Product Info</h3>
              </header>
              <ProductInfoFormSection />
              {/* general details section */}
              <GeneralInfoFormSection />
            </div>
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">Other Details</h3>
              </header>
              {/* other details section */}
              <OtherInformation />
            </div>
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">
                  Upload Product Variations
                </h3>
                <Button variant={"outline"} size={"sm"}>
                  <PlusIcon className="w-4 h-4" />
                  Add Variant
                </Button>
              </header>
              <UploadProductVariations />
            </div>
          </div>
          <div className="sticky top-8 h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              <div className="card-layout">
                <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                  <h3 className="text-base font-medium">Application</h3>
                </header>
                <ApplicationSection />
              </div>
              <div className="card-layout">
                <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                  <h3 className="text-base font-medium">Organization Info</h3>
                </header>
                <OrganizationSection />
              </div>
              {/* <div className="card-layout"></div>
              <div className="card-layout"></div> */}
            </div>
          </div>
        </div>
        <FloatingSubmitButton submitButtonText="Save Product" />
      </form>
    </div>
  );
}

export default ProductsPage;
