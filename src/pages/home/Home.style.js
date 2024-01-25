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
    height: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const PageView = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const PageFooter = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.purple};

    a{
        height: 100%;
    }
    
    img{
        height: 90%;
        margin-left: 15px;
    }

`;

export const ChargeButtom = styled.input`
    background: ${theme.colors.white};
    color: ${theme.colors.darkPurple};

    border: none;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    font-weight: bold;
    font-size: 14pt;

    width: 200px;
    height: 60px;

    transition: 0.2s;

    &:hover {
    background: ${theme.hoverColors.white};
    cursor: pointer;
  }
`;

export const ChargeInput = styled.input`
    
`;

export const ChrageButtomDetail = styled.p`
    color: ${theme.colors.white};
    font-size: 10pt;
`;

export const PageInfo = styled.p`
    color: ${theme.colors.white};
    font-size: 16pt;
    text-align: center;
`;

export const TableView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 80%;
    overflow: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ButtonMetricsView = styled.button`
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 15px;
    font-weight: bold;

    margin-right: 10px;

    background: ${theme.colors.darkGreen};
    transition: 0.2s;

    &:hover{
        background: ${theme.colors.green};
        cursor: pointer;
    }
`;

export const TableComponent = styled.table`
    width: 100%;
    
    th, td {
        padding: 8px;
        text-align: left;

    }

    /* Quantidade Cobranças  */
    th:nth-child(1),
    td:nth-child(1) {
        width: 10%; 
    }

    /* Cobranças a cada x dias */
    th:nth-child(2),
    td:nth-child(2) {
        width: 15%;
    }

    /* Data início */
    th:nth-child(3),
    td:nth-child(3) {
        width: 15%;
    }

    /* status */
    th:nth-child(4),
    td:nth-child(4) {
        width: 10%;
    }

    /* Data status */
    th:nth-child(5),
    td:nth-child(5) {
        width: 15%;
    }

    /* Data cancelamento */
    th:nth-child(6),
    td:nth-child(6) {
        width: 15%;
    }

    /* valor */
    th:nth-child(7),
    td:nth-child(7) {
        width: 10%;
    }

    /* Próximo ciclo */
    th:nth-child(8),
    td:nth-child(8) {
        width: 15%;
    }

    /* ID assinante */
    th:nth-child(9),
    td:nth-child(9) {
        width: 12%;
    }

    tr {
        border: none;
        transition: 0.2s;
        &:hover {
            background: ${theme.colors.purple}; 
            border: 1px solid ${theme.colors.purple};
        }
    }
`;