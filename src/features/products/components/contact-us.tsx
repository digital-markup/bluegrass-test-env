import { Button } from "@/components/ui/button";
import { TabletSmartphone } from "lucide-react";
import React from "react";

function ContactUs() {
  return (
    <div className="py-8 w-full">
      <Button size={"lg"} className="w-full">
        <TabletSmartphone size={32} />
        Contact us for more information
      </Button>
    </div>
  );
}

export default ContactUs;
