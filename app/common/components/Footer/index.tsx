"use client"

import Image from "next/image"

const Footer = () => {

  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-6 text-center">
        {/* Call-to-Action */}
        <div className="row align-items-center pt-4 pb-3">
          {/* Brand Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sustains.ai
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-300 font-semibold">
            Driving sustainable decisions with AI-powered analytics.
          </p>
        </div>
        {/* End Call-to-Action */}
        {/* Footer Links */}
        <div className="row py-4">
          <div className="col-sm-6">
            <h6 className="font-bold text-white">
              COMPANY
            </h6>
            <ul className="list-unstyled list-py-1 mb-0">
              <li>
                <a className="link link-light link-light-75 font-semibold" href="/about">
                  About
                </a>
              </li>
              {/* <li>
                <a className="link link-light link-light-75 font-semibold" href="/careers">
                  Careers
                </a>
              </li> */}
              <li>
                <a className="link link-light link-light-75 font-semibold" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 mt-3">
            {/* <h6 className="font-bold text-white">
              LEGAL
            </h6> */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li>
                <a className="link link-light link-light-75 font-semibold" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="link link-light link-light-75 font-semibold" href="/terms-of-use">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Footer Links */}
        {/* Bottom Bar */}
        <div className="row align-items-center py-3">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
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

          <p className="text-xs md:text-sm mt-4 text-gray-400 font-semibold">
            © {new Date().getFullYear()} Sustains.ai. All rights reserved.
          </p>
        </div>
        {/* End Bottom Bar */}
      </div>
    </footer>
  )
}

export default Footer