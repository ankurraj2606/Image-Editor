import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="text-white py-4 px-6 mx-auto max-w-7xl flex flex-col lg:flex-row xl:flex-row justify-between items-center">
        <a
          href="/"
          className="text-xl font-bold text-white pb-4 xl:pb-0 lg:pb-0"
        >
          <Image
            src="/editudio_logo.jpg"
            className="border border-transparent rounded-full"
            alt="editudio"
            width={80}
            height={80}
          />
        </a>
        <nav className="flex space-x-4">
          <ul className="flex flex-col xl:flex-row lg:flex-row space-0 xl:space-x-4 lg:space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:underline px-3 py-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:underline px-3 py-2 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:underline px-3 py-2 rounded"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-white hover:underline px-3 py-2 rounded"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="text-white hover:underline px-3 py-2 rounded"
              >
                SignUp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
