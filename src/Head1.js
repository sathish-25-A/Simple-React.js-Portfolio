import React from "react";
import Pic from "../src/assets/hero.png";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Head1 = () => {
  const conf={
    soical:{
      twi:"",
      insta:"",
      fb:"",
    }
  }
  return (
    <section className="flex flex-col md:flex-row px-8 py-35 bg-head1 justify-center" id="home">
      <div className="flex flex-col md:w-1/2  px-12 py-24 ">
        <h1 className="px-12 py-24 text-white text-4xl ">
          Hi I'm Sathish A<br />
          <p className=" text-white text-4xl">
            {" "}
            Im a <span className="font-google-font">FRONT END DEVELOPER</span>
          </p>
          <p className=" text-white text-4xl ">This Is My Portfolio</p>
        </h1>
        <div className="flex flex-row px-12 py-8">
          <a href={conf.soical.twi} className="md:pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={conf.soical.fb} className="md:pr-5  hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href={conf.soical.insta} className="md:pr-5  hover:text-white">
            <AiOutlineInstagram size={40} />
          </a>
          <a href={conf.soical.fb} className="md:pr-5  hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
        </div>
      </div>

      <img className="md:w-1/2" src={Pic} alt="head1" />
    </section>
  );
};

export default Head1;
