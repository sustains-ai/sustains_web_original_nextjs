import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg md:text-xl font-semibold">Sustains.ai</h2>
        <p className="text-sm mt-2">
          Empowering decisions with AI-driven risk analytics.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/thoughts" className="hover:underline">Thoughts</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:opacity-80">
            <Image
              src="/svg/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <Image
              src="/svg/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <Image
              src="/svg/X.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
        </div>

        <p className="text-xs mt-4 opacity-80">
          © {new Date().getFullYear()} Sustains.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
