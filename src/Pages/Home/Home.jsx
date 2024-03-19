import styled from "styled-components";
import ReactPlayer from "react-player";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Slideshow />
            <ReactPlayer
                url="https://youtu.be/34MR1ZGAYPM?si=VcanyyUB_fRvcEV9"
                width="100%"
            />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
