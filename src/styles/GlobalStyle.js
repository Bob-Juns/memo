import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'NEXON Lv2 Gothic Bold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Bold.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
    }

    /* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
    */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

    * {
      margin: 0;
      font-family: 'NEXON Lv2 Gothic', sans-serif;
      box-sizing: border-box;
    }

    html {
      font-family: 'NEXON Lv2 Gothic', sans-serif;
    }

    body {
      font-family: 'NEXON Lv2 Gothic', sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    input,
    select,
    textarea {
      background-color: transparent;
      border: 0;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    a,
    button,
    select {
      cursor: pointer;
    }

    input,
    textarea {
      cursor: text;
    }

    ul,
    ol {
      padding-left: 0;
      list-style: none;
    }
`;

export default GlobalStyle;
