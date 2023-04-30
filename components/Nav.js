import html from "html-literal";

export default () => html`
  <nav>
    <div class="container">
      <div class="menu">
        <a href="Home.html" class="active">Home</a>
        <a href="AboutMe.html">About Me</a>
        <a href="Contact.html">Contact</a>
        <a href="Survey.html">Survey</a>
      </div>
      <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
`;
