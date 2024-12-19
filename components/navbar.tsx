"use client";

import React from 'react';
import Image from 'next/image';
import { UserCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="relative">
      {/* Main Navbar */}
      <div className="h-16 md:h-[10vh] border-b flex items-center justify-between px-4 md:px-6 py-2 w-full bg-white">
        <div className="flex items-center space-x-4">
          {/* Logo with responsive sizing */}
          <div className="relative w-[80px] md:w-[150px] h-80 md:h-100">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* User Profile Icon for Mobile */}
          {isMobile && (
            <NavigationMenuItem className="flex items-center space-x-2">
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
            </NavigationMenuItem>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem className="flex items-center space-x-2">
                <UserCircleIcon className="w-8 h-8 md:w-10 md:h-10 text-gray-600" />
                <span className="font-medium">Profile</span>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
            ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
        >
          <div className="p-4">
            <NavigationMenuItem className="flex items-center space-x-2 py-2">
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
              <span className="font-medium">Profile</span>
            </NavigationMenuItem>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: '64px' }} // height of navbar
        />
      )}
    </nav>
  );
};

export default Navbar;
