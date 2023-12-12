import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Social Media Icons */}
        <div className="flex items-center md:col-span-1 lg:col-span-1">
          <div className="flex space-x-4">
            <FaTwitter className="text-2xl" />
            <FaLinkedin className="text-2xl" />
            <FaFacebook className="text-2xl" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Commerce</a></li>
              <li><a href="#">Software Dev</a></li>
              <li><a href="#">AI</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#">Products</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          {/* Add more sections as needed */}

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#">Claim</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Company Section */}
        <div className="md:col-span-3 lg:col-span-1">
          <div className="flex flex-col items-center">
            <p className="text-lg mb-2">Web Design</p>
            <p className="text-sm">Antony Web Design @2023 Inc Web Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
