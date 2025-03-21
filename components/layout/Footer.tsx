const Footer = () => {
  return (
    <footer className="font-clash bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <h3 className="text-4xl font-normal">CONTACT</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h4 className="text-md font-normal text-gray-400 tracking-wider">
              Email
            </h4>
            <p className="mb-4">
              <a
                href="mailto:your.email@example.com"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                hyeinsfree.dev@gmail.com
              </a>
            </p>
            <h4 className="text-md font-normal text-gray-400 tracking-wider">
              Location
            </h4>
            <p className="mb-4">Seoul, Republic of Korea</p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-md font-normal text-gray-400 tracking-wider">
              Social
            </h4>
            <ul className="text-xl space-y-1">
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-gray-400">Developed By Hyein Kim</p>
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
