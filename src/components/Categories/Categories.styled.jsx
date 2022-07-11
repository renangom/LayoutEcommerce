import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const Container1 = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
