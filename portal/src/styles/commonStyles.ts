import styled from 'styled-components';

export const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #b3c0ce;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

export const FieldLable = styled.label`
  color: ${({ theme }) => theme.headLineColor};
  text-align: left;
`;
