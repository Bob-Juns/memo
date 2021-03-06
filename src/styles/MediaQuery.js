import { css } from 'styled-components';

const device = {
  tablet: (...args) => css`
    @media all and (min-width: 768px) {
      ${css(...args)}
    }
  `,

  desktop: (...args) => css`
    @media all and (min-width: 1024px) {
      ${css(...args)}
    }
  `,
};

export default device;
