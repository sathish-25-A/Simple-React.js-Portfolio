import React from "react";
import Resumeimg from "../src/assets/resume.jpg";

const Resume = () => {
  const confg= {
    link: 'https://drive.google.com/file/d/1ROF9CdjBsqBoTcOnjF-Univ6Cz2G7vnK/view?usp=drive_link'
  }
  return (
    <section className="flex flex-col md:flex-row bg-header px-5" id="resume">
      <div className="flex justify-center md:justify-end md:w-1/2 py-5">
        <img className="w-[300px]" src={Resumeimg} alt="" />
      </div>
      <div className="md:w-1/2 flex  justify-center py-5 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white font-google-font border-b-2 w-[150px] mb-3">
            About Me
          </h1>
          <p className="text-white pb-5">
            View My Resume By Click It.
          </p>
          <a className='text-4xl  flex justify-center font-google-font btn'target='_blank' rel="noreferrer" href={confg.link}>Download</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
