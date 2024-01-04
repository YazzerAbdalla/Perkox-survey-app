"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed z-30 bottom-0 right-0 p-3 font-bold">
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <Image
              width="60"
              height="50"
              src="https://img.icons8.com/stickers/100/mail-filter.png"
              alt="mail-filter"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the selector.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                {/* seleter start */}
                <Select>
                  <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100">
                    <SelectItem className="text-black" value="light">
                      Light
                    </SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                {/* selecter end */}
              </div>

              <div className="grid grid-cols-3 items-center gap-4"></div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Footer;
