import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background-color: #add8e6;
  color: #800000;
  margin: 0 15px;
  font-size: 25px;
  border-radius: 50px;
  transition: width 2s, height 2s;
  &:hover {
    width: 300px;
    height: 300px;
    border-radius: 100px;
  }
`;
