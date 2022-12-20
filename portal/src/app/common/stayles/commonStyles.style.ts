import { Button, Input } from 'antd';
import styled from 'styled-components';
export const DesignButton = styled(Button)`
  border: none;
  margin: 20px 0 10px 0;
  height: 32px;
`;
export const DesignInput = styled(Input)``;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.whiteBackGroundColor};
  font-size: 20px;
`;
