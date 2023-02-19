import styled from "styled-components";
import search from "./assets/icons/search.svg";

const TopBarStyles = styled.div`
  margin: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  input {
    width: 610px;
    height: 52px;
    border-radius: 15px;
    border: none;
    background-color: #fafbfc;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) center;
    padding-left: 22px;
    color: #b5b7ca;
    margin-right: 100px;
  }
  input:focus {
    outline: none;
  }
  .top-bar-icon-wrapper {
    margin: 26px;
    border-radius: 50%;
    margin-right: 12px;
    background-color: #fafbfc;
    padding: 12px;
  }

  .top-bar-icon-wrapper:hover {
    background-color: #f1f3f6;
  }
  .user {
    margin-left: 20px;
    border-radius: 50%;
  }
  .noti {
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background-color: #f63d13;
  }
`;

export default TopBarStyles;
