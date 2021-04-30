import { css } from 'styled-components';

const media = {
  extraSmall: (...args) => css`
    @media all and (max-width: 400px) {
      ${css(...args)}
    }
  `,

  mobile: (...args) => css`
    @media all and (min-width: 401px) and (max-width: 768px) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media all and (min-width: 769px) and (max-width: 1024px) {
      ${css(...args)}
    }
  `,
};

export default media;
