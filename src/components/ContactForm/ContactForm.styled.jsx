import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 360px;
padding: 20px;
margin-bottom: 30px;
border: 1px solid rgb(0, 0, 0);
border-radius: 6px;
`;

export const Label = styled.label`
font-size: 18px;
font-weight: 700px;
margin-bottom: 10px;
`;


export const Input = styled.input`
width: 270px;
height: 32px;
font-size: 18px;
margin-bottom: 15px;
border-radius: 8px;
`;

export const Button = styled.button`
padding: 10px;
margin: auto;
width: 160px;

font-size: 18px;
font-weight: 700;
text-transform: capitalize;
cursor: pointer;

border: 1px solid rgb(59, 55, 55);
border-radius: 8px;
`;