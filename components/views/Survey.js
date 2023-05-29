import html from "html-literal";

export default () => html`
  <form id="surveyForm" method="POST" action="">
    <h3 class="headerSurvey">
      Please use 1 to 10 to grade (10 is excellent and 1 is unsatisfactory)
    </h3>
    <fieldset>
      <legend>Greeting upon first arrival at Moody's</legend>
      <div id="question1">
        <input type="number" id="question1" min="1" max="10" required />
      </div>

      <legend>Knowledge and professionalism of staff</legend>
      <div id="question2">
        <input type="number" id="question2" min="1" max="10" required />
      </div>

      <legend>Explanation of estimate and repairs</legend>
      <div id="question3">
        <input type="number" id="question3" min="1" max="10" required />
      </div>

      <legend>Communication from Moody's during the repair process</legend>
      <div id="question4">
        <input type="number" id="question4" min="1" max="10" required />
      </div>

      <legend>Quality of collision repairs</legend>
      <div id="question5">
        <input type="number" id="question5" min="1" max="10" required />
      </div>

      <legend>Likelihood of recommending us to friends/family</legend>
      <div id="question6">
        <input type="number" id="question6" min="1" max="10" required />
      </div>
    </fieldset>
    <h3 class="headerSurvey">Comment Section</h3>
    <label for="comment1">Would you use our facility again?</label>
    <input type="text" id="comment1" />
    <label for="comment2">How did you hear about us?</label>
    <input type="text" id="comment2" />
    <label for="comment3">What made you select us for your repair work?</label>
    <input type="text" id="comment3" />
    <label for="comment4"
      >Were you satisfied with response and working relationship with your
      insurance company?</label
    >
    <input type="text" id="comment4" />
    <label for="comment5">Comments/Complaints/Suggestions</label>
    <input type="text" id="comment5" />
    <input type="submit" id="surveySubmit" value="SUBMIT SURVEY!" />
  </form>
  <script src="index.js" type="module"></script>
`;
