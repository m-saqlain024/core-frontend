import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoLogoVimeo } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navigation = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "About",
    href: "/",
  },
  {
    item: "Services",
    href: "/",
  },
  {
    item: "Portfolio",
    href: "/",
  },
  {
    item: "Contact",
    href: "/",
  },
];

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <IoMdMenu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <IoLogoVimeo className="h-6 w-6" />
            <span className="sr-only">ShadCN</span>
          </Link>
          {navigation.map((item: any, index: number) => (
            <div className="grid gap-2 py-6" key={index}>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href={item.href}
                prefetch={false}
              >
                {item.item}
              </Link>
            </div>
          ))}
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <IoLogoVimeo className="h-6 w-6" />
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <div>
              {navigation.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  {item.item}
                </Link>
              ))}
            </div>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-2">
        <Button variant="outline">Sign in</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}