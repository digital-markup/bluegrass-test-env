"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import OtherInformationTab from "./other-information-tab";
import useInfoStore from "../zustand/useInfoStore";
import { cn } from "@/lib/utils";

function OtherInformation() {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  // zustand storage for other info
  const { info, setInfo, deleteInfo } = useInfoStore();

  const onClickHandler = () => {
    // add the info to the store
    if (title && description) setInfo(title, description);

    // clear the input fields
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full h-full flex px-2 py-3 flex-col gap-y-3 mb-1">
      <section
        className={cn(info.length < 1 && "p-0 bg-slate-50 rounded-lg mb-5")}
      >
        {info.length < 1 ? (
          <div className="w-full h-[400px] flex pt-4 pl-4 justify-center items-center">
            <p className="text-blue-600 font-light text-base">
              Other information of the product will be shown here
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[400px] w-full px-4">
            {info.map((item) => (
              <OtherInformationTab
                key={item.id}
                {...item}
                onDelete={deleteInfo}
              />
            ))}
          </ScrollArea>
        )}
      </section>
      <div className="form-item-space flex-col mb-1 px-4">
        <section className="flex flex-col space-y-2.5 w-full">
          <Label htmlFor="displayInfo" className="text-sm text-slate-500">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title Information"
            className="max-w-screen-sm"
          />
        </section>
        <section className="flex flex-col space-y-2.5 w-full">
          <Label htmlFor="displayInfo" className="text-sm text-slate-500">
            Description
          </Label>
          <Textarea
            id="displayInfo"
            rows={7}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>
        <div className="w-full flex justify-start">
          <Button
            type="button"
            variant={"secondary"}
            className="w-[150px]"
            onClick={onClickHandler}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OtherInformation;
