import styled from "styled-components";

export const NewsletterWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 52px;
  height: 334px;
  background-color: #fafafb;
`;
export const NewsletterHeading = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const NewsletterTitle = styled("span")`
  color: #121212;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;
export const NewsletterSubTitle = styled("p")`
  color: #121212;
  text-align: center;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;
export const NewsletterInputWrapper = styled("form")`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 488px;
  border-radius: 6px;
  border: 1px solid #cbcbcb;
  background: #fff;
  padding: 14px 16px;
  & > svg {
    width: 24px;
    height: 24px;
    color: #121212;
  }
`;
export const NewsletterInput = styled("input")`
  border: 0;
  outline: none;
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #121212;
`;
export const NewsletterSubmitBtn = styled("button")`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
`;
