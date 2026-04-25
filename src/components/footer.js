

import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaLinkedin } from "react-icons/fa";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#151515] text-white">
      {/* Newsletter */}
      <div className="text-center py-12 px-4 border-b border-gray-700">
        <h2 className="text-[24px] md:text-[32px] font-bold mb-3 tracking-wide">Newsletter</h2>
        <p className="text-white text-sm md:text-base mb-8">Sign up for our newsletter and receive exclusive offers!</p>
        
        <div className="max-w-[550px] mx-auto relative flex border border-white rounded-sm overflow-hidden group">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-transparent px-4 py-3 outline-none text-white text-[15px] placeholder:text-gray-500" 
          />
          <button className="px-6 text-xl hover:bg-white hover:text-black transition-all">➜</button>
        </div>

        <label className="flex justify-center items-center gap-2 mt-5 text-[13px] text-white cursor-pointer font-light">
          <input type="checkbox" className="accent-white h-4 w-4" />
          I agree to receiving marketing emails and special deals
        </label>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Contact Details - Top Left on Desktop */}
          <div className="order-2 md:order-1 space-y-3 text-[14px] text-white">
            <a href="mailto:cs@edenrobe.com" className="block hover:text-gray-400 transition-colors">Email us: cs@edenrobe.com</a>
            <a href="tel:02137133266" className="block hover:text-gray-400 transition-colors">Customer Support: 021 37133266</a>
          </div>

          {/* Social Icons - Row on Mobile, List with Text on Large Screens */}
          <div className="order-1 md:order-2">
            <h4 className="text-[15px] font-bold mb-5 uppercase tracking-wider hidden md:block">Follow Us</h4>
            <div className="flex flex-row md:flex-col justify-center md:justify-start gap-6 md:gap-4">
              <span className="flex items-center gap-3 cursor-pointer hover:text-gray-400 group">
                <FaFacebook size={18} /> <span className="hidden md:inline text-white group-hover:text-gray-400">Facebook</span>
              </span>
              <span className="flex items-center gap-3 cursor-pointer hover:text-gray-400 group">
                <FaInstagram size={18} /> <span className="hidden md:inline text-white group-hover:text-gray-400">Instagram</span>
              </span>
              <span className="flex items-center gap-3 cursor-pointer hover:text-gray-400 group">
                <FaWhatsapp size={18} /> <span className="hidden md:inline text-white group-hover:text-gray-400">Whatsapp</span>
              </span>
              <span className="flex items-center gap-3 cursor-pointer hover:text-gray-400 group">
                <FaTiktok size={18} /> <span className="hidden md:inline text-white group-hover:text-gray-400">TikTok</span>
              </span>
              <span className="flex items-center gap-3 cursor-pointer hover:text-gray-400 group">
                <FaLinkedin size={18} /> <span className="hidden md:inline text-white group-hover:text-gray-400">LinkedIn</span>
              </span>
            </div>
          </div>

          {/* Categories & Policy - Desktop columns, Mobile accordions */}
          {[
            { id: 'top', title: 'Top Categories', links: ['Sale', 'Summer Lawn', 'Women Unstitched Premium', 'Women Pret', 'Fragrances'] },
            { id: 'gen', title: 'General', links: ['About Us', 'Blogs', 'Store Locator', 'Privacy Policy', 'Term & Condition', 'FAQs'] },
            { id: 'care', title: 'Customer Care', links: ['Delivery & Return', 'Exchange Form', 'Contact Us', 'Track Your Order'] }
          ].map((sec) => (
            <div key={sec.id} className="order-3 border-b  border-gray-700 md:border-b-0">
              <div 
                className="flex justify-between items-center py-4 md:py-0 md:mb-5 cursor-pointer md:cursor-default"
                onClick={() => toggleSection(sec.id)}
              >
                <h4 className="text-[14px] md:text-[15px] font-bold uppercase tracking-wider">{sec.title}</h4>
                <span className="md:hidden">{openSection === sec.id ? <HiMinus /> : <HiPlus />}</span>
              </div>
              <ul className={`${openSection === sec.id ? 'block pb-4' : 'hidden'} md:block space-y-2 text-[14px] text-white`}>
                {sec.links.map(link => (
                  <li key={link} className="hover:text-gray-400 cursor-pointer transition-colors leading-relaxed">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-300">
          <p>© 2026 Edenrobe Pakistan, ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-white cursor-pointer">FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}