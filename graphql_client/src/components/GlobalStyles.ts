import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
  ${reset}

  body {

  }

  a {
    text-decoration: none;
    color: inheirt;
  }
`
export default globalStyles
