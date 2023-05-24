import html from "html-literal";
import image1 from "../../assets/images/PXL_20220326_175223931.jpg";
export default state => html`
  <section id="homeBody">
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">1 / 6</div>
        <img src=${image1} />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 6</div>
        <img src=${image1} style="width:100%" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 6</div>
        img src=${image1} style="width:100%" />
        <div class="text">Caption Three</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">4 / 6</div>
        <img src="whereslugo-tBaM1JuJCKA-unsplash.jpg" style="width:100%" />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">5 / 6</div>
        <img src="PXL_20220326_175223931.jpg" style="width:100%" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">6 / 6</div>
        <img src="PXL_20220220_003940604.jpg" style="width:100%" />
        <div class="text">Caption Three</div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br />

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
      <span class="dot" onclick="currentSlide(4)"></span>
      <span class="dot" onclick="currentSlide(5)"></span>
      <span class="dot" onclick="currentSlide(6)"></span>
    </div>

    <script src="index.js" type="module"></script>
  </section>
  <section></section>
`;
