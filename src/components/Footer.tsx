import { Mail, Twitter, Github, Linkedin} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/techcday', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/Hyver-organization', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/tech-comm-day', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Join Community', href: '#join' },
    { name: 'Gallery', href: '#gallery' },
    // { name: 'Reports', href: '#reports' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.png" alt="Logo Tech Communities day" className='h-14'/>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6 leading-relaxed">
              Connecting tech communities worldwide through innovation, collaboration, and shared knowledge.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:hello@techcommunitiesday.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  contact@tcd.hyver.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get the latest news and updates about Tech Communities Day
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tech Communities Day. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;