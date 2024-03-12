import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SubmissionList from "./SubmissionList";

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const getSubmission = async () => {
            const { data } = await axios.get(
                "http://localhost:4059/submissions"
            );
            setSubmissions(data);
        };

        getSubmission();
    }, []);

    console.log({ submissions });

    return (
        <ContactStyled>
            <Inset>
                <h1>Contact</h1>

                <SubmissionList submissions={submissions} />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
