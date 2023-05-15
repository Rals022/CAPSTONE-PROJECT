import html from "html-literal";

export default () => html`
  <nav>
    <div class="container">
      <div class="menu">
        <ul id="navLinks">
          <li><a href="Home" id="homeLink" class="navmenuItem">Home</a></li>
          <li>
            <a href="AboutMe" id="aboutLink" class="navmenuItem">About Me</a>
          </li>
          <li>
            <a href="Contact" id="contactLink" class="navmenuItem">Contact</a>
          </li>
          <li>
            <a href="Survey" id="surveyLink" class="navmenuItem">Survey</a>
          </li>
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
