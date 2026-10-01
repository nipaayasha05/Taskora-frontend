"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-slate-900 text-white transition-colors dark:bg-slate-950">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo darkOnly />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Taskora helps teams organize projects, manage tasks, track
              progress, and work together efficiently.
            </p>

            <div className="mt-5 flex gap-4">
              <FaFacebook className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary" />
              <FaInstagram className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary" />
              <FaTwitter className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary" />
              <FaLinkedin className="h-5 w-5 cursor-pointer text-slate-400 transition-colors hover:text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Features</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Project Management</li>
              <li>Team Management</li>
              <li>Task Management</li>
              <li>Sprint Tracking</li>
              <li>Progress Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@taskora.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Taskora. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
