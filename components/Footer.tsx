import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Image from "next/image"; // Import the next/image component

export default function Footer() {
  return (
    <div className="h-[40vh] w-[100vw] bg-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      
      <p className="text-gray-600 pt-4 text-center text-sm max-w-md">
        Marketplace for searching, filtering, and instantly booking team activities
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-6">
        <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-gray-500">
          <FaFacebookF size={24} />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-800 hover:text-gray-500">
          <FaInstagram size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-800 hover:text-gray-500">
          <FaLinkedinIn size={24} />
        </a>
        <a href="mailto:someone@example.com" aria-label="Email" className="text-gray-800 hover:text-gray-500">
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Separator */}
      <hr className="w-full border-t border-gray-300 my-6" />

      {/* Copyright */}
      <p className="text-gray-500 text-sm">Copyright &copy; 2024</p>
    </div>
  );
}
