import styled from "styled-components";
import PropTypes from "prop-types";
import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="bottom">
                <p>
                    <b>PROJECT: </b>
                    {yearStarted}
                </p>
                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #000;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 30px;
    }

    h3 {
        color: #15dbff;
        background-color: #000;
        padding: 15px 10px;
        margin: 0px;
    }
`;
