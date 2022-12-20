import {
  HeaderWrapper,
  TitleWrapper,
} from 'app/common/stayles/commonStyles.style';
import styled from 'styled-components';

export const ArrayCellWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const UsersWrapper = styled.div`
  padding: 20px 30px;
`;
export const UsersHeaderWrapper = styled(HeaderWrapper)`
  display: flex;
  justify-content: center;
`;
export const UsersTitleWrapper = styled(TitleWrapper)`
  color: ${({ theme }) => theme.whiteBackGroundColor};
  font-size: 20px;
`;
