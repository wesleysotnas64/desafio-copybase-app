import styled from "styled-components"
import { theme } from "../../theme.js"

export const PageContainer = styled.div`
    background: ${theme.colors.darkPurple};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
`;

export const PageHeader = styled.div`
    background: ${theme.colors.purple};
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ReturnArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;

    button {
        border: none;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${theme.colors.darkGreen};
        transition: 0.2s;

        &:hover{
            background: ${theme.colors.green};
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const HeaderArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
`;

export const PageView = styled.div`
    height: 90%;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxTotalMRR_And_BoxGraphArea = styled.div`
    height: 95%;
    width: 95%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

export const BoxTotalMRR = styled.div`
    background: rgba(255,255,255,0.1);
    height: 100%;
    width: 25%;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 18pt;
        margin: 0px;
    }

    img {
        margin: 50px;
    }
`;

export const AreaMedias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const TitleBox = styled.h3`
    text-align: center;
    font-size: 20pt;
    margin: 20px;
    padding: 0;
`;

export const BoxGraphArea = styled.div`
    background: rgba(255,255,255,0.1);
    height: 100%;
    width: 50%;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`;

export const BoxChurnRateArea = styled.div`
    background: rgba(255,255,255,0.1);
    height: 100%;
    width: 25%;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
`;

export const BoxGraphAreaMonths = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    height: 8%;
    margin-top: 5px;
`;

export const BoxGraphButtonArea = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    height: 8%;
    margin-top: 5px;
`;

export const BoxGraphButtonAreaMonths = styled.div`
    display:flex;
    justify-content: center;
    justify-content: space-around;
    width: 100%;
    height: 8%;
    margin-top: 5px;

`;

export const BoxGraphAreaGraph = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65%;
`;

export const ButtonMonth = styled.button`
    background: ${theme.colors.darkGreen};
    height: 22px;
    width: 22px;
    border: none;
    border-radius: 11px;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    font-size: 8pt;

    transition: 0.2s;

    &:hover{
        background: ${theme.colors.green};
    }
`;

export const ButtonYear = styled.button`
    height: 100%;
    width: 50px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 4px;
    margin-right: 4px;

    background: ${theme.colors.darkGreen};
    transition: 0.2s;

    &:hover{
        background: ${theme.colors.green};
        cursor: pointer;
    }
`;