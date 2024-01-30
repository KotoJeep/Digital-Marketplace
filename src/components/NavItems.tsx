'use client'
import {useState} from "react";
import {PRODUCT_CATEGORIES} from "@/config";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, idx)=> {
        

        return ()
      })}
    </div>
  );
};

export default NavItems;
