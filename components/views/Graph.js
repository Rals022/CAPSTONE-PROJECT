import html from "html-literal";

export default state => html`
  <div id="frame">
    <iframe
      id="mongodb"
      style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100vw;height: 50vh;"
      src="https://charts.mongodb.com/charts-capstone-tzfbp/embed/dashboards?id=6dca244d-6bcb-4704-8e59-9c1e353bff8f&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
    ></iframe>
  </div>
  <br />
  <table id="surveyData">
    <tr>
      <th class="tableHeader">Question 1</th>
      <th class="tableHeader">Question 2</th>
      <th class="tableHeader">Question 3</th>
      <th class="tableHeader">Question 4</th>
      <th class="tableHeader">Question 5</th>
      <th class="tableHeader">Question 6</th>
    </tr>
    ${state.data
      .map(data => {
        return `<tr><td>${data.question1}</td><td>${data.question2}</td><td>${data.question3}</td><td>${data.question4}</td><td>${data.question5}</td><td>${data.question6}</td></tr>`;
      })
      .join("")}
  </table>
`;
