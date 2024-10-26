"use client";

import React from "react";

function GeneralInfoFormSection() {
  return (
    <div className="form-body">
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="displayInfo"
            className="text-sm text-slate-500 font-medium"
          >
            Display
          </label>
          <input
            type="text"
            id="displayInfo"
            placeholder="Display Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="colors"
            className="text-sm text-slate-500 font-medium"
          >
            Colors
          </label>
          <input
            type="text"
            id="colors"
            placeholder="Product SKU"
            className="form-control min-w-full"
          />
        </section>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="storage"
            className="text-sm text-slate-500 font-medium"
          >
            Storage
          </label>
          <input
            type="text"
            id="storage"
            placeholder="Storage Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="camera"
            className="text-sm text-slate-500 font-medium"
          >
            Camera
          </label>
          <input
            type="text"
            id="camera"
            placeholder="Camera Information"
            className="form-control min-w-full"
          />
        </section>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="battery"
            className="text-sm text-slate-500 font-medium"
          >
            Battery
          </label>
          <input
            type="text"
            id="battery"
            placeholder="Battery Capacity Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="ramInformation"
            className="text-sm text-slate-500 font-medium"
          >
            RAM
          </label>
          <input
            type="text"
            id="ramInformation"
            placeholder="RAM Information"
            className="form-control min-w-full"
          />
        </section>
      </div>
    </div>
  );
}

export default GeneralInfoFormSection;
