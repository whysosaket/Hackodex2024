import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <>
        <section className="bg-black/10 mt-12">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-200 cursor-pointer"
                >
                  About Us
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-200 cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-200 cursor-pointer"
                >
                  News
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-200 cursor-pointer"
                >
                  Events
                </a>
              </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 cursor-pointer"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
              © 2024 CODEX, ITER ❤️
            </p>
          </div>
        </section>
      </>
    </div>
  );
};

export default Footer;
