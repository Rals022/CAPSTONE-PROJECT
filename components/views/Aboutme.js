import html from "html-literal";
import image1 from "../../assets/images/aboutmepic1.jpg";
import image2 from "../../assets/images/aboutmepic2.jpg";
import image3 from "../../assets/images/aboutmepic3.jpg";
import image4 from "../../assets/images/aboutmepic4.jpg";
export default () => html`
<div class="aboutMeImages">
  <div class="column">
    <img src=${image1} alt="Home from deployment" style="width:100%">
  </div>
  <div class="column">
    <img src=${image2} alt="My Family" style="width:100%">
  </div>
  <div class="column">
    <img src=${image3} alt="Working in Corrections" style="width:100%">
  </div>
  <div class="column">
    <img src=${image4} alt="Working at the body" style="width:100%">
  </div>
</div>
    <br />
    <br />

    <section id="aboutMeSection">
      <h3 id= aboutMe>
        I'VE BEEN A PART OF VARIOUS CHALLENGES IN MY LIFE AND VARIOUS CAREERS.
        THESE EXPERIENCES HAVE MADE ME WHO I AM TODAY. WHAT I BRING TO THE TABLE
        IS ADAPTABILITY AND PROFESSIONALISM WITH A KEEN EYE FOR ATTENTION TO
        DETAIL. I STARTED MY JOURNEY OFF WITH THE MILITARY AT THE AGE OF 21
        JOINING THE MAINE ARMY NATIONAL GUARD AS AN MILITARY POLICE SOLDIER.
        LATER, I DEPLOYED TO AFGHANISTAN FROM 2011-2012. ONCE I RETURNED, I
        TRANSITIONED BACK TO MY CIVILIAN LIFE AND JOINED THE MAINE DEPARTMENT OF
        CORRECTIONS AS A CORRECTIONAL OFFICER. I ENJOYED MY TIME WITH MDOC BUT I
        HAVE A STRONG PASSION IN THE AUTOMOTIVE INDUSTRY AND AUTO BODY AND
        REFINISHING. I CHANGED CAREERS AND BECAME A COLLISION ESTIMATOR WHICH I
        HAVE EXCELLED IN. I ALWAYS LIKE TRYING NEW THINGS AND FOUND AN INTEREST
        IN ENTREPRENEURSHIP. WITH THAT I WANTED TO CREATE A WEBSITE FOR A
        BUSINESS IDEA I HAVE. I KNEW IT WAS GOING TO BE A VERY COMPLICATED
        WEBSITE IDEA SO I NEEDED TO DEVELOP THE NECESSARY SKILLS TO TAKE ON THE
        IDEA. THAT'S WHERE SAVVY CODERS CAME INTO PLAY. I FOUND THIS BOOTCAMP BY
        LOOKING UP THE “VET-TEC PROGRAM” AND DECIDED TO TAKE ON A NEW CHALLENGE
        THAT WILL HOPEFULLY GET ME ONE STEP CLOSER IN TURNING THAT IDEA INTO A
        REALITY.
      </h3>
</section>

    <script src="index.js" type="module"></script>
  </section>
`;
