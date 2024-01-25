import styled, { keyframes } from "styled-components"
// import { theme } from "../../theme.js"

export const PageContainer = styled.div`
    background: rgba(0,0,0,0.8);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    z-index: 10;
    align-items: center;
    justify-content: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoagingIcon = styled.img`
    height: 80px;
    width: 80px;
    animation: ${rotate} 2.5s linear infinite;
`;
