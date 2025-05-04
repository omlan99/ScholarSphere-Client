import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="w-full bg-base-300 mt-[100px]">
   <footer className="footer footer-center bg-base-200 text-base-content rounded pt-20 pb-5 px-5">
        <nav className="grid grid-flow-col gap-4">

          <HashLink smooth to="/#home" className="HashLink HashLink-hover">
            Home
          </HashLink>
          <HashLink smooth to="/#scholarship" className="HashLink HashLink-hover">
            Scholarships
          </HashLink>
          <HashLink smooth to={"/#universities"} className="HashLink HashLink-hover">
            Universities
          </HashLink>
          <HashLink smooth to="/#contact" className="HashLink HashLink-hover">
            Contact
          </HashLink>
    
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/omlan99" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://HashLinkedin.com/in/omlan99" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5S8.86 6 7.48 6s-2.5-1.12-2.5-2.5zM3 8h4.96v12H3V8zm6 0h4.6v1.65c.64-.99 1.82-2.07 3.74-2.07 3.2 0 4.66 1.9 4.66 5.44V20h-5v-7.25c0-1.74-.61-2.91-2.14-2.91-1.17 0-1.87.79-2.17 1.55-.11.26-.14.62-.14.98V20H9V8z"></path>
              </svg>
            </a>
            <a href="https://facebook.com/omlan99" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by AD
            industries ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
