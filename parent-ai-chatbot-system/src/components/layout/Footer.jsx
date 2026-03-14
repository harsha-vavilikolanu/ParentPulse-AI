import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-slate-300 py-12 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Vignan University</h3>
          <p className="text-sm text-slate-400 mb-4 max-w-sm">
            Empowering parents with real-time academic insights through advanced AI chatbot technology.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition cursor-pointer"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition">Student Portal</a></li>
            <li><a href="#" className="hover:text-accent transition">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-accent transition">Examination Results</a></li>
            <li><a href="#" className="hover:text-accent transition">Fee Payment Gateway</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>Vadlamudi, Guntur District, Andhra Pradesh 522213, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>+91 863 2344700</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>info@vignan.ac.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Vignan's Foundation for Science, Technology & Research. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
