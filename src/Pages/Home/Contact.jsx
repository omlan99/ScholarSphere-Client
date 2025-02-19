import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mb-[100px] ">
      <div
        className="space-y-2 bg-accent px-5 py-[100px]  text-center"
        id="newsletter"
      >
        <h3 className="font-bold text-4xl">
          Sign up for our Monthly Newsletter!
        </h3>
        <p className="font-semibold pb-10">
          Want to be updated with new visa news
        </p>
        <Link to={"/signup"} className="btn btn-wide">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Contact;
