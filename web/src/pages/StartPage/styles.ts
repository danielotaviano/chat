import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  > h1 {
    color: #fffffe;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 55px;
    text-align: center;
  }
`;
export const Input = styled.input`
  padding: 12px;
  border: none;
  background: #5f6c7b;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;
export const Button = styled.button`
  outline: none;
  background: #2cb67d;
  border: none;
  color: #fffffe;
  margin-top: 12px;
  padding: 12px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f25f4c;
  }
`;
