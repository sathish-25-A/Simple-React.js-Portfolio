import React from "react";
import Projects from "../src/assets/ecommerce-websites.jpg";
import Projects1 from "../src/assets/Youtube.png";
import Projects2 from "../src/assets/Todo.png";
const Project = () => {
  const confg = {
    projected: [
      {
        img: Projects,
        des: "This A E-commerce Website",
        link: "http://online-clothing-shop-mern-1.onrender.com/",
        ID:1,
      },
      {
        img: Projects1,
        des: "This Is A YouTube Clone",
        link: "https://github.com/sathish-25-A/YouTube---Clone-HTML-CSS-",
        ID:2,
      },
      {
        img: Projects2,
        des: "This Is A  TODO List",
        link: "",
        ID:3,
      },
    ],
  };
  return (
    <section className="flex flex-col px-8 py-8 justify-center bg-head1 text-white "id="project" >
      <div className="w-1/2">
        <div className="flex flex-col mb-3 justify-center">
          <span className="text-4xl text-white font-google-font border-b-2 w-[150px] mb-5">
            PROJECT
          </span>
          <p>This Are My Project </p>
        </div>
      </div>
      <div className="w-full" >
        <div className=" flex flex-col md:flex-row px-10 gap-10">
          {confg.projected.map((pro) => (
            <div key={pro.ID} className="relative ">
              <img className="h-[200px] w-[500px]" src={pro.img}  alt="" />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-header opacity-0 duration-500 hover:opacity-90">
                <p>{pro.des} </p>
                <div className="flex justify-center">
                  <a className="btn " target='_blank'rel="noreferrer"  href={pro.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
