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
      HELLO MY NAME IS RALEIGH STEVENS AND I CURRENTLY WORK AT MOODY'S COLLISION
      CENTER AS A COLLISION ESTIMATOR IN THE STATE OF MAINE. AT THE BODY SHOP WE
      CURRENTLY RECEIVE A 30% RATE OF RETURN ON OUR PHYSICAL SURVEY FORMS THAT
      WE GIVE OUR CUSTOMER AS TO GRADE OUR SHOPS PERFORMANCE AT THE END OF THE
      REPAIRS. I CREATED A WEB APPLICATION THAT IMPLEMENTED A DIGITAL SURVEY,
      THIS WILL NOT ONLY INCREASE OUR RATE OF RETURN BUT TO GIVE A BETTER
      INSIGHT ON HOW THE BODY SHOP IS DOING BASED ON THE CSI AVG SCORES. THIS
      WILL ALSO SAVE CO WORKERS TIME BY NOT HAVING TO DO MANUAL DATA ENTRY AND
      ANALYSIS. THIS WILL HELP US UNCOVER HIDDEN TRENDS, IDENTIFY CUSTOMER
      PREFERENCES, AND MAKE DATA DRIVEN DECISIONS THAT DRIVE THE BUSINESS
      FORWARD.
    </h2>
  </section>
  <script src="index.js" type="module"></script>
  <section></section>
`;
