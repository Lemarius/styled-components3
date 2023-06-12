import styled from "styled-components";

const StyledForm = styled.section`
    width: 681px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const StyledLabel = styled.label`
    width: 381px;
    color: black;
    font-size: 16px;
    font-weight: 600;
`;
const StyledInput = styled.input`
    width: 381px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

export {StyledForm, StyledLabel, StyledInput};