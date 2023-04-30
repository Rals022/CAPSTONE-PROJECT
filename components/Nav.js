import html from "html-literal";

export default () => html`
  <nav>
    <div class="container">
      <div class="menu">
        <a href="Home" class="active">Home</a>
        <a href="AboutMe">About Me</a>
        <a href="Contact">Contact</a>
        <a href="Survey">Survey</a>
      </div>
      <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
`;
