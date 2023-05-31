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
      <button class="dropdown-menu" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="Home" class="navmenuItem">Home</a></li>
        <li><a href="AboutMe" class="navmenuItem">About Me</a></li>
        <li><a href="Contact" class="navmenuItem">Contact</a></li>
        <li><a href="Survey" class="navmenuItem">Survey</a></li>
        <li><a href="Graph" class="navmenuItem">Graph</a></li>
      </ul>
    </div>
  </nav>
`;
