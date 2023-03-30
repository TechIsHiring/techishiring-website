import { useState } from "react";
import { contactImg, contactMobileImg } from "images/Index";
import Image from "next/image";
import ContactHeading from "components/molecules/contact-heading/contact-heading";
import ContactForm from "components/molecules/contact-form/contact-form";
import React from "react";

const ContactContent = () => {

  return ( 
    <div className="flex w-full ">
      <div className="lg:w-[45%] hidden xl:flex lg:flex justify-center items-center">

        <Image src={ contactImg }  alt="Contact Form Image" width={1000}  height={1000} />
        
      </div>
      
      <div className="w-full lg:w-1/2 lg:px-32 px-5 md:px-10 mt-20 flex flex-col">

        <div className="lg:hidden absolute right-0 top-[6rem]">
          <Image src= {contactMobileImg} alt="contact form mobile image" width={150} height={180} />
        </div>

        <ContactHeading />
        <ContactForm />
          
      </div>
    </div>

  );
};
 
export default ContactContent;