import { DatePicker } from 'antd';
import {
  DesignButton,
  DesignInput,
} from 'app/common/stayles/commonStyles.style';
import styled from 'styled-components';

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const EditInput = styled(DesignInput)``;
export const LabelAndInputWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const SaveBtn = styled(DesignButton)`
  background: ${({ theme }) => theme.blueBtnsBgColor};
  color: ${({ theme }) => theme.whiteBackGroundColor};
`;
export const BackBtn = styled(DesignButton)`
  background: ${({ theme }) => theme.whiteBackGroundColor};
  color: ${({ theme }) => theme.blueBtnsBgColor};
`;
export const Title = styled.div`
  text-align: start;
  margin: 10px;
  color:${({ theme }) => theme.whiteBackGroundColor};
  font-size: 20px;
}
`;
export const ContentWrapper = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.whiteBackGroundColor};
`;

export const DesignDatePicker = styled(DatePicker)``;
