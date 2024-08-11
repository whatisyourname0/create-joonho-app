import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/**
 * ### GlobalStyle
 *
 * 전역으로 주입할 스타일을 정의합니다.
 */
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default GlobalStyle;
