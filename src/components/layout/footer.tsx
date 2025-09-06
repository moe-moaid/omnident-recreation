"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

import { GradientIcon } from "@/components/ui/gradient-icon";

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/omnidentai/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "#", icon: Github },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-2/50 border-t border-line">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          {/* Brand Section */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <img className="w-[200px]" src="/logo.svg" alt="" />
              </div>

              <p className="text-ink-2 font-body mb-6 max-w-sm">
                Revolutionizing dental practices with AI-powered automation, intelligent insights,
                and seamless patient management.
              </p>

              {/* Contact Info */}
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="w-full md:w-1/2 flex flex-col items-end">
            <div className="">
              {/* contact info */}
              <h3 className="font-heading font-semibold text-ink-1 mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-ink-2">
                  <GradientIcon size={16}>
                    <Mail />
                  </GradientIcon>
                  <span className="font-body text-sm">info@omnident.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-ink-2">
                  <GradientIcon size={16}>
                    <Phone />
                  </GradientIcon>
                  <span className="font-body text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-ink-2">
                  <GradientIcon size={16}>
                    <MapPin />
                  </GradientIcon>
                  <span className="font-body text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-ink-3 font-body text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} OmniDent AI. All rights reserved. Built with ❤️ for dental
            professionals.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-surface-3 border border-line flex items-center justify-center hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 text-ink-2 group-hover:text-white" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
