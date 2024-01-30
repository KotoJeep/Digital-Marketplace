'use client'
import {Button} from "@/components/ui/button";
import {PRODUCT_CATEGORIES} from "@/config";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({category, handleOpen, isOpen, isAnyOpen}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? 'secondary' : 'ghost'}>
          {category.label}
          <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
            "-rotate-180": isOpen,
          })}/>
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground ', {'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen})}></div>
      ) : null}
    </div>
  );
};

export default NavItem;
