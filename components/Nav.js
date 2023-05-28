import html from "html-literal";

export default () => html`
  <nav>
    <div class="container">
      <div class="menu">
        <ul id="navLinks">
          <a href="Home" id="homeLink" class="navmenuItem">Home</a>
          <a href="AboutMe" id="aboutLink" class="navmenuItem">About Me</a>
          <a href="Contact" id="contactLink" class="navmenuItem">Contact</a>
          <a href="Survey" id="surveyLink" class="navmenuItem">Survey</a>
          <a href="Graph" id="graphLink" class="navmenuItem">Graph</a>
        </ul>
      </div>
      <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
`;
