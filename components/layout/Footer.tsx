const Footer = () => {
  return (
    <footer className="w-full z-50 font-clash bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 xl:py-8 w-full flex flex-col mb-2">
        <h3 className="text-2xl xl:text-3xl font-normal text-gray-500 mb-2 xl:mb-4">
          CONTACT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-sm xl:text-md font-normal text-gray-400 tracking-wider">
                Email
              </h4>
              <p className="">
                <a
                  href="mailto:hyeinsfree.dev@gmail.com"
                  className="text-sm xl:text-base text-gray-500 hover:text-gray-900"
                >
                  hyeinsfree.dev@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-sm xl:text-md font-normal text-gray-400 tracking-wider">
                Location
              </h4>
              <p className="text-sm xl:text-base text-gray-500">
                Seoul, Republic of Korea
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm xl:text-md font-normal text-gray-400 tracking-wider">
              Social
            </h4>
            <ul className="text-sm xl:text-base space-y-0.5 xl:space-y-1">
              <li>
                <a
                  href="https://github.com/hyeinisfree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hyein-kim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://hyeinisfree.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-sm xl:text-md text-gray-400">
              Developed By Hyein Kim
            </p>
            <p className="text-sm xl:text-base text-gray-400">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
