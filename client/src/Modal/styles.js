import styled from 'styled-components';


const primary = "#00b2ff"
const secondary = "#999"

const az_primary = "rgb(177,0,21)"
const az_secondary = "rgb(90,90,90)";

const p = az_primary;
const s = az_secondary;


export const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  background-color: #3336;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SModal = styled.form`
    background-color: #fff;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Header = styled.h4`
    text-align: center;
    margin: 0;
    /* padding: 0.5rem; */
    /* border-bottom: 1px solid #00B2FF; */
`;

export const Userinput = styled.input`
    margin: 0;
    border: 0;
    border-bottom: 2px solid ${p};
    padding: 0.5rem;
    :focus{
        outline: none;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 0.25rem;
    background-color: ${p};
    padding: 0.75rem 2rem;
    color: #fff;
    width: fit-content;
    /* cursor: pointer; */
`;