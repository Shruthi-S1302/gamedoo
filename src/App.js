import Menubar from "./Menubar";
import styled from "styled-components";
import TopBar from "./TopBar";
import Promotion from "./Promotion";
import SideText from "./SideText";
import PopularGames from "./PopularGames";
import arrow from "./assets/icons/arrow-right.svg";
import { useState } from "react";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  width: 15%;
`;

const MainContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const MainSubContainer = styled.div`
  display: flex;
`;

const PromotionSub = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopularGamesContainer = styled.div`
  margin: 25px;
  margin-right: 0;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .current {
    background-color: #301c57;
  }
`;

const current = styled.div`
  background-color: #301c57;
`;

function App() {
  const [firstCardRendered, setFirstCardRendered] = useState(false);
  return (
    <div className="App">
      <AppContainer>
        <SidebarContainer>
          <Menubar />
        </SidebarContainer>
        <MainContainer>
          <TopBar />
          <MainSubContainer>
            <PromotionSub>
              <Promotion style={{ width: "80%" }} />
              <h4
                style={{
                  marginLeft: "20px",
                  marginTop: "15px",
                  fontSize: "bold",
                }}
              >
                Popular Games <img src={arrow} />
              </h4>
              <PopularGamesContainer>
                <PopularGames
                  style={current}
                  name="Nocturnal"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                  isFirstCard={true}
                />
                <PopularGames
                  name="The Keeper"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                />
                <PopularGames
                  name="The Keeper"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                />
                <PopularGames
                  name="Fear Lift"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                />
                <PopularGames
                  name="Eerness"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                />
                <PopularGames
                  name="Eerness"
                  desc="Its your last night shift as a forklift operator at…"
                  likes="232"
                  down="146k"
                />
              </PopularGamesContainer>
            </PromotionSub>
            <SideText style={{ width: "20%" }} />
          </MainSubContainer>
        </MainContainer>
      </AppContainer>
    </div>
  );
}

export default App;
