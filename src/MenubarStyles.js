import styled from "styled-components";

export const MenubarStyle = styled.div`
  margin-top: 0;
  padding: 0;
  position: fixed;
  height: 100vh;
  border-right: 2px solid #f7f7f7;
  width: 180px;
  .noti {
    background-color: #f63d13;
    color: white;
    border-radius: 50%;
    padding: 6px;
    font-size: 10px;
    margin-left: 70%;
  }
  .logo {
    margin-left: 20px;
    margin-bottom: 0;
    height: 100px;
    width: 120px;
  }
  ul {
    margin: 0;
    padding-left: 10px;
  }
  li {
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 10px;
    list-style: none;
  }

  li a {
    text-decoration: none;
    color: #787686;
    margin-left: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  li:hover {
    border: 1px solid #f8f8f8;
    border-radius: 15px;
    background-color: #f8f8f8;
    list-style-position: inside;
    margin-right: 4%;
    margin-top: 2%;
  }
  li:hover .icon {
    fill: white;
  }
  #current-page {
    border: 1px solid #4b0ace;
    border-radius: 15px;
    background-color: #4b0ace;
    margin-right: 4%;
    margin-top: 0;
    list-style-position: inside;
  }
  #current-page a {
    color: #fff;
  }
  .button-container {
    position: fixed;
    bottom: 2%;
    left: 8%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 7px 20px;
    background-color: #fafbfc;
    border-radius: 20px;
  }

  .log-out {
    background: none;
    border: none;
    color: #4b0ace;
    font-weight: bold;
  }
  .button-container:hover {
    background-color: #edf1f4;
  }

  .logout-wrapper {
    display: flex;
    align-items: center;
  }

  .logout-wrapper span {
    margin-left: 8px;
  }
`;
