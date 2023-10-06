import { Button } from "@/components/ui/button";
import "@/components/ui/style.css";
import { useState } from "react";

export default function ViewListingBtn() {
  return (
    <Button
      className=" font-bold transition-all bg-primary
   hover:bg-primary group hover:scale-110 drop-shadow-xl drop-shadow-primary shadow-primary"
    >
      <p className=" transition-transform">იხილეთ</p>
    </Button>
  );
}
