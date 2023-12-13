
const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-1 container mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
    
      <div className="">
        {/* Quick Links */}
        <div className="md:col-span-3 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Commerce</a></li>
              <li><a href="#">Software Dev</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#">Products</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#">Claim</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Company Section */}
        <div className="md:col-span-1 lg:col-span-1 ">
          <div className="flex flex-col items-center">
            <p className="text-sm center">Antoney20 Web Design @2023 Web Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
