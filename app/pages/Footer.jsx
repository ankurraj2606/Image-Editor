import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="text-white py-20 px-6 flex flex-col lg:flex-row xl:flex-row items-left xl:text-center lg:text-center justify-between mx-auto max-w-7xl pb-8 pt-24">
        <div className="flex flex-col text-left xl:text-center lg:text-center space-y-2 mb-4 lg:mb-0 xl:mb-0">
          <Image
            src="/editudio_logo.jpg"
            className="border border-transparent rounded-full"
            alt="editudio"
            width={60}
            height={60}
          />
          <p className="max-w-sm text-left">
            Speedy makes marketing easy so you can build your business core.
          </p>
          <div className="text-sm text-gray-400 text-left">
            <p>Made with ❤️ in India</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <nav className="pr-12">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Fair Use Policy</a>
              </li>
            </ul>
          </nav>
          <nav className="pr-12">
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">AI For Enterprise</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
      <div className="py-8 text-white px-6 mx-auto max-w-7xl">
        <p>© 2024 SpeedyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
