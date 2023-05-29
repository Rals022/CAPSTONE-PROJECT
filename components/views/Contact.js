import html from "html-literal";

export default () => html`
  <div class="parent" id="contactContainer">
    <div id="div1">
      <form
        id="contactMe"
        action="https://formspree.io/f/mwkjjyle"
        method="POST"
      >
        <h2>Contact Us</h2>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
        />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last Name" />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />

        <label for="comment">Comment </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height:200px"
        ></textarea>

        <input id="button" type="submit" value="Submit" />
      </form>
    </div>
    <div id="map"></div>

    <div id="div3"></div>
  </div>
`;
