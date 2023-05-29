import html from "html-literal";

export default state => html`
  <div id="frame">
    <iframe
      id="mongodb"
      style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100vw;height: 100vh;"
      src="https://charts.mongodb.com/charts-capstone-tzfbp/embed/dashboards?id=6dca244d-6bcb-4704-8e59-9c1e353bff8f&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
    ></iframe>
  </div>
  <br />
  <table id="surveyData">
    <tr>
      <th>question1</th>
      <th>question2</th>
      <th>question3</th>
      <th>question3</th>
      <th>question4</th>
      <th>question5</th>
      <th>question6</th>
    </tr>
    ${state.data
      .map(data => {
        return `<tr><td>${data.question1}</td><td>${data.question2}</td><td>${data.question3}</td><td>${data.question4}</td><td>${data.question5}</td><td>${data.question6}</td></tr>`;
      })
      .join("")}
  </table>
`;
