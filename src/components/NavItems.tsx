'use client'
import {useEffect, useRef, useState} from "react";
import {PRODUCT_CATEGORIES} from "@/config";
import NavItem from "@/components/NavItem";
import {useOnClickOutside} from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null)
      }
    }
    document.addEventListener('keydown',handler)
    return ()=>{
      document.removeEventListener('keydown', handler)
    }
  }, []);


  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
          <NavItem key={category.value} category={category} handleOpen={handleOpen} isOpen={isOpen}
                   isAnyOpen={isAnyOpen}/>)
      })}
    </div>
  );
};

export default NavItems;
