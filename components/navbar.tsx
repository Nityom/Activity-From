"use client";

import React, { useState } from 'react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  profileImage?: string;
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  profileImage = "/api/placeholder/40/40", 
  userName = "John Doe" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          MyLogo
        </div>

        {/* Desktop Profile and Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={profileImage} alt={`${userName}'s profile`} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed md:hidden inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4 space-y-4">
            {/* Mobile Profile */}
            <div className="flex items-center space-x-4 pb-4 border-b">
              <Avatar>
                <AvatarImage src={profileImage} alt={`${userName}'s profile`} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-lg font-medium">{userName}</span>
            </div>

            <NavigationMenuLink 
              className="block py-3 text-xl hover:bg-gray-100 rounded"
              href="#"
            >
              Products
            </NavigationMenuLink>
            <NavigationMenuLink 
              className="block py-3 text-xl hover:bg-gray-100 rounded"
              href="#"
            >
              About
            </NavigationMenuLink>
            <NavigationMenuLink 
              className="block py-3 text-xl hover:bg-gray-100 rounded"
              href="#"
            >
              Contact
            </NavigationMenuLink>
            
            <div className="pt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;