import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay question={`01: Sample question...`}>
                Answer 1 goes here.
            </SingleEssay>
            <SingleEssay question={`02: Sample question...`}>
                Answer 2 goes here.
            </SingleEssay>
            <SingleEssay question={`03: Sample question...`}>
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay question={`04: Sample question...`}>
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};
export default Essays;

const EssaysStyled = styled.div``;
