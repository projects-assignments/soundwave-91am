import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export const Navbar = () => {
  return (
    <>
    <div className="flex justify-around">
            <div className='flex flex-row items-center'>
            <Link to="/">
                <img className="h-12 w-auto px-2" src='src/assets/logo.png'></img>
                </Link>
                <Link to="/">
                <Button className="my-6 text-lg" variant="ghost">Soundwave</Button>
                </Link>
          </div>
      <NavigationMenu >
      <NavigationMenuList className="flex space-x-96">
          <div className="flex">
          <NavigationMenuItem>
            <Link to="/discover">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Discover
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/join">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Join
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </>
  );
};