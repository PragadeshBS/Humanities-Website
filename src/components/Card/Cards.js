import Card from "./Card";
const Cards = (props) => {
  var curAward = props.staffs;
  return curAward.map((data) => <Card content={data} />);
};
export default Cards;
