import { Layout } from 'antd';
import styled from 'styled-components';
const { Header, Content } = Layout;

export const LayoutDesign = styled(Layout)``;
export const MainLayoutDesign = styled(Layout)`
  height: 100vh;
`;
export const HeaderDesign = styled(Header)`
  background: ${({ theme }) => theme.headerBgColor};
  box-shadow: 0px 10px 20px #12263f08;
`;
export const ContentDesign = styled(Content)`
  background: ${({ theme }) => theme.contentBgColor};
`;
