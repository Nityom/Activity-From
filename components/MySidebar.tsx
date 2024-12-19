"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Flag, Menu, X } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  interface HandleSectionClickProps {
    section: string;
  }

  const handleSectionClick = ({ section }: HandleSectionClickProps) => {
    setActiveSection(section);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Menu Button for Mobile */}
      <div className="fixed top-0 left-0 z-50 w-full bg-white lg:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 m-2"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-40
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:transform-none lg:transition-none
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isMobile ? "pt-16" : "pt-0"}
          shadow-lg lg:shadow-none
        `}
      >
        {/* Right Border Line */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gray-300" />

        <div className="p-6">
          {/* Heading */}
          <h1 className="text-xl font-bold text-black mb-6">
            Create New Activity
          </h1>

          <nav className="space-y-4">
            {/* Activity Button */}
            <Link href="/activity">
              <Button
                variant="ghost"
                className={`w-full justify-start space-x-2 hover:bg-gray-100 
                  ${activeSection === "activity" ? "bg-gray-200" : ""}
                  transition-colors duration-200
                `}
                onClick={() => handleSectionClick({ section: "activity" })}
              >
                <Flag className="h-5 w-5 shrink-0" />
                <span
                  className={`transition-all duration-200 
                    ${
                      activeSection === "activity"
                        ? "font-bold text-black"
                        : "font-light text-gray-600"
                    }
                  `}
                >
                  Activity Details
                </span>
              </Button>
            </Link>

            {/* Location Button */}
            <Link href="/location">
              <Button
                variant="ghost"
                className={`w-full justify-start space-x-2 hover:bg-gray-100 
                  ${activeSection === "location" ? "bg-gray-200" : ""}
                  transition-colors duration-200
                `}
                onClick={() => handleSectionClick({ section: "location" })}
              >
                <MapPin className="h-5 w-5 shrink-0" />
                <span
                  className={`transition-all duration-200 
                    ${
                      activeSection === "location"
                        ? "font-bold text-black"
                        : "font-light text-gray-600"
                    }
                  `}
                >
                  Location Details
                </span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
        />
      )}
    </>
  );
}