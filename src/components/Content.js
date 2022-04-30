import Card from "./Card/Card";
const Content = (props) => {
  var curAward = props.staffs;
  return curAward.map((data, index) => (
    <div>
      {/* <h1>test</h1>
      <div class="col" id="curSession">
        <div class="container">
          <h3 class="display-6 mt-3">{data.name}</h3>
          <img class="img-fluid" src={data.designation} alt="session-images" />
          <p class="mt-3 fs-6">{data.area_of_interest}</p>
        </div>
      </div> */}
      <Card content={data} />
    </div>
  ));
};
export default Content;
