import styled from "styled-components";

const PopularGamesStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fafbfc;
  width: 225px;
  height: 255px;
  border-radius: 15px;
  margin: 10px;
  margin-left: 0px;
  margin-right: 3px;
  margin-top: 0;
  color: #787686;

  .card-game {
    width: 198px;
    height: 131px;
    padding: 10px;
  }
  .head p {
    font-size: 10px;
  }

  .current {
    background-color: #301c57;
  }
  .head h4 {
    color: #000;
    margin-right: 30px;
  }
  .content {
    font-size: 12px;
    margin-left: 12px;
  }

  .bottom {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 3px;
  }
  .bottom {
    margin-left: 10px;
  }
  .bottom img {
    margin: 5px;
    margin-bottom: 10px;
  }

  button {
    font-size: 10px;
    font-weight: bold;
    display: inline;
    background-color: #4b0ace;
    color: white;
    font-style: normal;
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    margin-left: 80px;
    margin-bottom: 10px;
  }
`;

export default PopularGamesStyles;
