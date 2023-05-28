import html from "html-literal";
import image1 from "../../assets/images/paintbooth.jpg";
import image2 from "../../assets/images/front.jpg";
import image3 from "../../assets/images/heavyduty.jpg";
import image4 from "../../assets/images/Gorham.jpg";
export default state => html`
  <div class="scroll-container">
    <img src=${image2} alt="Front" />
    <img src=${image1} alt="Paint Booth" />
    <img src=${image3} alt="Northern Lights" />
    <img src=${image4} alt="Mountains" />
  </div>
  <section>
    <h2 id="pitch">
      HELLO MY NAME IS RALEIGH STEVENS AND I CURRENTLY WORK AT MOODYS COLLISON
      CENTER AS A COLLISION ESTIMATOR IN THE STATE OF MAINE. AT THE BODY SHOP WE
      CURRENTLY RECEIVE A 30% RATE OF RETURN ON OUR PHYSICAL SURVEY FORMS THAT
      WE GIVE OUR CUSTOMER AS TO GRADE OUR SHOPS PERFORMANCE. I CREATED A WEB
      APPLICATION THAT IMPLEMENTED A DIGITAL SURVEY THIS WILL NOT ONLY INCREASE
      OUT RATE OF RETURN BUT TO GIVE A BETTER INSIGHT ON HOW THE BODY SHOP IS
      DOING BASED ON THE CSI AVG SCORES. THIS WILL ALSO SAVE OUR CO WORKERS TIME
      BY NOT HAVING TO INPUT SURVEY DATA MANUALLY. THE OTHER BENEFIT WE WILL
      HAVE THE DATA GET EXPORTED TO THE APPROPRIATE GRAPH THAT WE USE.
    </h2>
  </section>
  <script src="index.js" type="module"></script>
  <section></section>
`;
