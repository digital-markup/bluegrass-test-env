import { X } from "lucide-react";
import React from "react";

interface Props {
  error: string;
}

function AuthError({ error }: Props) {
  return (
    <div className="justify-center flex flex-row items-center gap-x-2 mb-3">
      <X className="text-red-500" size={20} />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}

export default AuthError;
