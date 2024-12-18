import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Sidebar: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/activity">Activity</NavigationMenuLink>
          </NavigationMenuItem>
          {/* Add more navigation items as needed */}
        </NavigationMenuList>
      </NavigationMenuContent>
    </NavigationMenu>
  );
};

export default Sidebar;