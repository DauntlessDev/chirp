import styled from 'styled-components'

export const Container = styled.div`
    width: 100% ;
    height: 100% ;
    display: flex;
    background-color: black ;
`;

export const LeftContainer = styled.div`
    width: 39%;
    height: 100% ;
    
    @media (max-width: 1000px) {
    display: none;
  }

`;

export const Feature = styled.img`
    width:100% ;
`;


export const RightContainer = styled.div`
    width: 69%;
    display: flex;
    padding: 10px 40px;
    height: 650px ;


    
    @media (max-width: 1000px) {
    padding: 10px 100px;
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 300px;
    height: 100%;
    flex-direction: column ;
    align-items: center ;
    align-content: center;
    justify-content: center ;
    margin: 0 auto;
`;

// export const LargestText = styled.h1`
//     font-size: 35px;
//     font-style: bold;
//     color: white ;

// `;

// export const LargeText = styled.h2`
//     font-size: 25px;
//     font-style: bold;
//     color: white ;

// `;

export const MediumText = styled.h3`
    font-size: 15px;
    font-style: bold;
    color: white ;
    display: inline ;
    
`;


export const SmallText = styled.p`
    font-size: 12px;
    color: gray;
    display: inline ;
    
`;

export const Colored = styled.p`
    color: #cc7584;
    display: inline ;
`;

export const TextContainer = styled.div``;

export const SignUpButton = styled.button`
    font-size: 13px;
    color: white;
    background-color: #cc7584;
    padding: 6px;
    width: 100%;
    border-radius: 15px;
    border: none;
    cursor: pointer;
`;


export const SignInButton = styled.p`
    font-size: 15px;
    color: #cc7584;
    background-color: black;
    padding: 6px;
    width: 100%;
    display: inline ;
    cursor: pointer;
`;

export const Break = styled.div`
    margin: 5px;
`;
