import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Sidebar: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* First navigation item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/activity">Activity</NavigationMenuLink>
            {/* Add more links inside this content if needed */}
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Additional navigation items can be added here */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Another Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/another">Another Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Sidebar;
