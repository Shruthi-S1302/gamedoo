import styled from "styled-components";

const SideTextStyle = styled.div`
  height: 800px;
  width: 300px;
  border-radius: 15px;
  margin-left: 20px;
  margin-right: 10px;
  background-color: #301c57;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .game {
    height: 200px;
    padding: 10px;
    padding-bottom: 0;
  }

  h4 {
    margin-right: 78px;
    color: #fff;
  }

  .head {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    gap: 5px;
  }

  .head img {
    margin-left: 10px;
  }

  .head p {
    color: white;
    margin-left: 5px;
    font-size: 10px;
  }

  .content {
    font-size: 10px;
    color: #fff;
    line-height: 19px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px 20px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .bottom {
    display: flex;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    padding-bottom: 20px;
    margin-left: 10px;
  }
`;

export default SideTextStyle;
