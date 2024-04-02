import React from "react";
import Aboutimg from "../src/assets/about.png";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row bg-header px-5 "id="about">
      <div className="md:w-1/2">
        <img src={Aboutimg} alt="" />
      </div>
      <div className="md:w-1/2 flex  justify-center py-5 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white font-google-font border-b-2 w-[150px] mb-3">About Me</h1>
          <p className='text-white pb-5'> Hi Im Sathish i Developer Front End Website By Using HTML ,CSS ,JAVASCRIPT ,REACT JS ,TAILWIND CSS. </p>
          <p className='text-white pb-5 ' > This Is My portfolio Website. In This Website You Can See My Project  And My Skills.</p>
        </div>
      </div> 
    </section>
  );
};

export default About;
