import { createGlobalStyle } from 'styled-components';
import '@fontsource/rubik';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
       height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: 'Rubik';
     background-color:${({ theme }) => theme.closePopupBackGroundColor};   

button{
  color:${({ theme }) => theme.buttonText} ;
  background:${({ theme }) => theme.primaryButtonColor} ;
  border: 1px solid ${({ theme }) => theme.primaryButtonColor};
}
  body {
    font-family: 'Rubik', sans-serif;
     }

  body.fontLoaded {
    font-family: 'Rubik';
  }
  
  p,
  label {
    line-height: 1.5em;
    font-family: 'Rubik';
  }

  input, select, button {
    font-size: inherit;
    font-family: 'Rubik';
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    height: 110px !important;
    width: 110px !important;
    border-radius:8px;
  }
 .gallery_modal{
   width: 984px !important;
   height: 568px;
 } 
 .ant-switch {
  background-color: ${({ theme }) => theme.contentBgColor} !important;
  min-width: 40px;  
}
.ant-switch-checked {
  background-color: ${({ theme }) => theme.greenActiveColor} !important;
}
  `;
