import styled from "styled-components";


export const Container = styled.div`
    width: 100% ;
    height: 700px;
    display: flex;
    background-color: #23232e ;
    
`;


export const InnerContainer = styled.div`
    width: 70%;
    height: 75% ;
    background-color: black;
    border-radius: 15px ;
    margin: auto auto;
`;

export const ElementsContainer = styled.div`
    margin: auto auto;
    padding: 100px;
    display: flex;
    flex-direction: column ;
`;

export const LogoContainer = styled.div`
`;

export const HeaderText = styled.h1`
    color: white;
    text-align: center ;
`;

export const InputField = styled.input`
    margin: 0 auto;
    width: 250px;
    height: 25px;
    margin-bottom: 15px ;
    background-color: black;
    border-color: gray ;
    font-size: 12px ;
`;

export const Button = styled.button`
    border-radius: 15px ;
    background-color: #cc7584;
    width: 250px;
    height: 35px;
    margin: 0 auto;
    color: white;
    font-size: 12px ;

`;

export const SmallText = styled.p`
    color: gray;
    font-size: 12px;
    display: inline ;
    text-align: center;
`;

export const SmallColoredText =styled.p`
    color: #cc7584;
    display: inline ;

`