import html from "html-literal";

export default () => html`
  <div class="parent" id="contactContainer">
    <div id="div1">
      <form id="contactMe" action="formspree">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />

        <label for="comment">Comment </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height:200px"
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
    <div id="div2">API locator</div>
    <div id="div3"></div>
  </div>
`;
