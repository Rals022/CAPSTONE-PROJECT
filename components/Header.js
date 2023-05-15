import html from "html-literal";
import logo from "../assets/images/moodys-awning-flat.png";
export default () => html`
  <header id="logoHeader">
    <div id="logo">
      <img
        src=${logo}
        alt="Moody's Logo"
        id="resize"
        width="275px"
        height="150px"
      />
    </div>
  </header>
`;
