import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`01: Explain the difference between HTML, CSS and JavaScript.`}
            >
                CSS, HTML and Javascript work together
            </SingleEssay>
            <SingleEssay
                question={`02: What is the difference between Git and Github?`}
            >
                Answer 2 goes here.
            </SingleEssay>
            <SingleEssay
                question={`03: What is the difference between JQuery and React?`}
            >
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay
                question={`04: What is the difference between a Front-End and Back-End Developer?`}
            >
                Answer 4 goes here.
            </SingleEssay>
            <SingleEssay
                question={`05: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                In React, there are two ways to think of linking to resources:
                <ul>
                    <li>Root Relative </li>
                    <li>Document Relative</li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};
export default Essays;

const EssaysStyled = styled.div``;
