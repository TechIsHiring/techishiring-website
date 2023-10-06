import HeaderText from "components/atoms/typography/heading-text";
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import React from "react";

const ContactHeading = () => {
  return ( 
      <div className={"flex justify-start items-start flex-col"}>
        <HeaderText level={"h2"} className={"text-secondary py-2 font-bold text-4xl leading-5"}>
                Contact Us
        </HeaderText>
        <DefaultText className={"text-gray mt-2"}>
                You can reach us anytime via 
          <br/>
          <Link
            href={"mailto:techishiring@gmail.com"}
            className={"text-primary"}
          >
              <>techishiring@gmail.com</>
          </Link>
        </DefaultText>
      </div>
  );
};
 
export default ContactHeading;