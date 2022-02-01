import styled from "styled-components";

const primary = "#00b2ff"
const secondary = "#999"

// const p = "rgba(177,0,21, 0.75)"
const p = "177,0,21"
// const s = "rgb(90,90,90)";

// const p = "rgba(37, 211, 102, 0.75)";
const s = "rgba(255,255,255, 0.6)";

export const Container = styled.main`
    *{
        font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
    background: url("/zap_dark.webp");
    background-size: contain;
    * {
        box-sizing: border-box;
    }
`;

export const Messages = styled.section`
    flex-grow: 1;
    width: 100%;
    padding: 1% 2%;
    display:flex;
    flex-direction: column-reverse;
    gap: 1vh;
    overflow-y: scroll;
    scrollbar-width: none;
    overflow-wrap: break-word;
    .ours{
        margin-left: auto;
        background-color: rgba(${p},0.75);
        color: #fff;
        border-radius: 1rem;
        border-bottom-right-radius: 0;
    }

`;

export const Message = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 45%;
    small{
        font-size: 0.8rem;
    }

    padding: 10px 15px;
    background-color: ${s};
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    color: #333;
    
    user-select: none;
    overflow-wrap: break-word;
    inline-size: fit-content;
`;

export const Typeform = styled.form`
    display: flex;
    width: 100%;
    padding: 0.8rem;
    gap: 0.5rem;
    justify-content: flex-end;
`;

export const Typebar = styled.input`
    flex-grow: 1;
    border: 0;
    border-radius: 45px;
    padding: 0.2rem 1rem;
    font-size: 1rem;
    background-color: ${s};
    :focus{
        outline: none;
    }

    @media screen and (min-width: 840px){
        max-width: 40%;
    }
`;

export const Sendbtn = styled.button`
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    border: 0;
    color: #fff;
    background-color: rgba(${p});
    cursor: pointer;
`;
