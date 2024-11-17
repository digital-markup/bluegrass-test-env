import { PhoneCall } from "lucide-react";
import React from "react";

function ContactUs() {
  return (
    <div className="px-12 py-4 flex flex-row justify-center gap-3 items-center">
      <PhoneCall className="w-6 h-6 text-blue-500" strokeWidth={1} />
      <span className="flex flex-col">
        <p className="text-base font-semibold text-blue-500">Contact us</p>
        <p className="text-sm font-light text-blue-400">
          For further information, please contact us
        </p>
      </span>
    </div>
  );
}

export default ContactUs;
