import Card from "./Card";
const Cards = (props) => {
  var curAward = props.staffs;
  return curAward.map((data, index) => <Card content={data} key={index} />);
};
export default Cards;
