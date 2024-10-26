"use client";

import React from "react";

function ProductInfoFormSection() {
  return (
    <div className="flex px-6 py-4 flex-col gap-y-3 mb-1 border-b">
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <label htmlFor="title" className="text-sm text-slate-500 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Product Title"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2">
          <label htmlFor="SKU" className="text-sm text-slate-500 font-medium">
            SKU
          </label>
          <input
            type="text"
            id="title"
            placeholder="Product SKU"
            className="form-control"
          />
        </section>
      </div>
      <div className="form-item-space">
        <div className="flex gap-x-2 items-end">
          <section className="flex flex-col space-y-2">
            <label
              htmlFor="mainImage"
              className="text-sm text-slate-500 font-medium"
            >
              Primary Image
            </label>
            <input type="file" id="file" className="form-control" />
          </section>
          <button type="button" className="btn-primary">
            Upload Image
          </button>
        </div>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="description"
            className="text-sm text-slate-500 font-medium"
          >
            Product Description
          </label>
          <textarea
            id="description"
            placeholder="Product Description"
            className="form-control"
            rows={7}
          />
        </section>
      </div>
    </div>
  );
}

export default ProductInfoFormSection;
