import styled from "styled-components";

import { FaCircle, FaPaperPlane } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  height: 100%;
  width: 15%;
  background: #1b263b;
  padding-left: 20px;
  color: #e1e9f1;
  > h1 {
    font-size: 1.40625rem;
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
  }
  > h2 {
    font-size: 15px;
    font-family: "Public Sans", sans-serif;
    font-weight: 600;
    margin-bottom: 25px;
  }
`;

export const RecentsUsers = styled.div`
  font-size: 15px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2rem !important;
  color: #e1e9f1;
  font-family: "Public Sans", sans-serif;
  font-weight: 600;
  overflow: auto;
`;

export const OnlineIcon = styled(FaCircle)`
  width: 12px;
  height: 12px;
  fill: #2cb67d;
`;
export const RightSide = styled.div`
  height: 100%;
  width: 85%;
  background: #0d1b2a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatScreen = styled.div`
  width: 95%;
  height: 90%;
  border-bottom: 1px solid #1b263b;
  margin-top: 20px;
  overflow: auto;
`;

export const OtherMessage = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  align-self: flex-end;
`;

export const SelfMessage = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const User = styled.div`
  margin: 5px;
  font-family: "Public Sans", sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #a6b0cf;
  text-align: left;
`;

export const Content = styled.div`
  background: #2cb67d;
  display: inline;
  padding: 12px;
  border-radius: 6px;
  color: #fff;
  font-family: "Public Sans", sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;

export const ChatForm = styled.form`
  width: 95%;
  height: 10%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;
export const Input = styled.input`
  width: 90%;
  height: 30px;
  background: #36404a;
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: #9aa1b9;
  font-family: "Public Sans", sans-serif;
  font-weight: 300;
`;
export const Button = styled.button`
  margin-left: 12px;
  padding: 0.6rem 1.5rem;
  background: #2cb67d;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  &:hover {
    background: #f25f4c;
  }
`;
export const SendIcon = styled(FaPaperPlane)`
  fill: #fff;
  width: 20px;
  height: 20px;
`;
