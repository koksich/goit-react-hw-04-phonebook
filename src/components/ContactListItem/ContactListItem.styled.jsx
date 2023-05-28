import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  border-bottom: 1px solid rgb(0,0,0);
`;

export const Contact = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.16;
  color: rgb(59, 55, 55);

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;

  border: 1px solid rgb(59, 55, 55);
  border-radius: 8px;
`;
