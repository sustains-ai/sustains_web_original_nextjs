import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6 text-center">

        {/* Brand Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Sustains.ai
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base mt-2 text-gray-300">
          Empowering decisions with AI-driven risk analytics.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mt-6 text-base font-medium">
          <a href="/about" className="hover:text-[#0ABF53] transition">About</a>
          <a href="/thoughts" className="hover:text-[#0ABF53] transition">Thoughts</a>
          <a href="/contact" className="hover:text-[#0ABF53] transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:opacity-80 transition">
            <Image src="/svg/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Image src="/svg/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Image src="/svg/X.svg" alt="Twitter" width={24} height={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm mt-6 text-gray-400">
          © {new Date().getFullYear()} Sustains.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
