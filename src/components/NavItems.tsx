'use client'
import {useState} from "react";
import {PRODUCT_CATEGORIES} from "@/config";
import NavItem from "@/components/NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, idx) => {
        const handleOpen = () => {
          if (activeIndex === idx) {
            setActiveIndex(null)
          } else {
            setActiveIndex(idx)
          }
        }
        const isOpen = activeIndex === idx

        return (
          <NavItem key={category.value} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen}/>)
      })}
    </div>
  );
};

export default NavItems;
