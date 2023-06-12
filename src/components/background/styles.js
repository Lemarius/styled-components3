import styled from "styled-components";

const StyledBackground = styled.div`
    background: url(./images/bg-main-desktop.png);
    background-size: cover;
    width: 483px;
    height: 100vh;
    position: relative;
`;

const StyledCard = styled.div`
    position: absolute;
    :first-child{
         background: url(./images/bg-card-front.png);
         width: 447px;
         height: 245px;
         top: 187px;
         left: 167px;
    }
    :last-child {
        background: url(./images/bg-card-back.png);
         width: 447px;
         height: 245px;
         top: 469px;
         left: 258px;
    }
`;

const StyledCircleCont = styled.div`
    width: 84px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    position: relative;
    top: 20px;
    left: 25px;
`;

const StyledCircle = styled.div`
    
    :first-child {
        width: 47px;
        height: 47px;
        border-radius: 100%;
        background-color: white;
    }

    :last-child {
        width: 21px;
        height: 21px;
        border-radius: 100%;
        border: 1px solid white;
    }
`;

const StyledH1 = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: white;
    position: relative;
    top: 60px;
    left: 25px;
`;

const StyledTextCont = styled.div`
    width: 383px;
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 65px;
    left: 25px;
`;

const StyledName = styled.h3`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
`;

const StyledCVC = styled.h3`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
    position: relative;
    top: 95px;
    left: 363px;
`;


export {StyledBackground, StyledCard, StyledCircleCont, StyledCircle, StyledH1, StyledTextCont, StyledName, StyledCVC};