import styled from "styled-components";
import PropTypes from "prop-types";

const Form = ({ prop }) => {
    return <FormStyled>Form</FormStyled>;
};

export default Form;

// prop-types
Form.propTypes = {
    prop: PropTypes.any,
};

const FormStyled = styled.div``;
