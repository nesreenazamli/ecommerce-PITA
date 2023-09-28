import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  NewsletterHeading,
  NewsletterInput,
  NewsletterInputWrapper,
  NewsletterSubTitle,
  NewsletterSubmitBtn,
  NewsletterTitle,
  NewsletterWrapper,
} from "./style";

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterHeading>
        <NewsletterTitle>Join Our Newsletter</NewsletterTitle>
        <NewsletterSubTitle>
          Big discounts and right to your inbox.
        </NewsletterSubTitle>
      </NewsletterHeading>
      <NewsletterInputWrapper>
        <HiOutlineMail />
        <NewsletterInput placeholder="Email address" type="email" />
        <NewsletterSubmitBtn type="submit">Signup</NewsletterSubmitBtn>
      </NewsletterInputWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
