import html from "html-literal";
import image1 from "../../assets/images/aboutmepic1.jpg";
import image2 from "../../assets/images/aboutmepic2.jpg";
import image3 from "../../assets/images/aboutmepic3.jpg";
import image4 from "../../assets/images/aboutmepic4.jpg";
export default () => html`
  <section id="">
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">1 / 6</div>
        <img src=${image1} style="width:100%" />
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 6</div>
        <img src=${image2} style="width:100%" />
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 6</div>
        <img src=${image3} style="width:100%" />
      </div>
      <div class="mySlides fade">
        <div class="numbertext">4 / 6</div>
        <img src=${image4} style="width:100%" />
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" onclick="nextSlide(-1)">&#10094;</a>
      <a class="next" onclick="nextSlide(1)">&#10095;</a>
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
`;
