import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col  bg-head1 px-5 py-32 text-white" id="contact">
      <div className=" flex flex-col items-center ">
        <h1 className="text-4xl text-white font-google-font border-b-2 w-[130px] mb-3">
         Contact
        </h1>
        <p className="text-white pb-5">If You Want To Discuss With  Me , Please Contact Me</p>
        <p className="py-2"><span className='font-bold text-white'>Email: </span> sathisha25082000@gmail.com</p>
        <p className="py-2"><span className='font-bold text-white'>Phone: </span> +91 098765432</p>
        
      </div>
    </section>
  );
};

export default Contact;
