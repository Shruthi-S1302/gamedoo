import styled from "styled-components";
import diamond from "./assets/icons/icon-diamond.svg";
import rocket from "./assets/rocket.png";

const PromotionStyle = styled.div`
  width: 630px;
  height: 200px;
  margin-left: 20px;
  background-color: #4b0ace;
  color: #fff;
  border-radius: 20px;
  padding: 37px;
  padding-top: 20px;
  padding-left: 25px;
  background-image: url(${rocket});
  background-repeat: no-repeat;
  background-size: 200px 200px;
  background-position: calc(100% - 50px) center;
  .line-1 {
    width: 165px;
    font-size: 14px;
    line-height: 20px;
  }
  .jumbotron {
    font-size: 28px;
    line-height: 39px;
    width: 330px;
    margin-top: 0px;
  }
  .download {
    padding: 16px;
    font-weight: bold;
    background-color: #ffa910;
    border: none;
    background-image: url(${diamond});
    background-repeat: no-repeat;
    background-position: calc(100% - 130px) center;
    padding-left: 30px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
`;

export default PromotionStyle;
