
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Monish Gosar. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
