import p1 from "./details/p1";
import p2 from "./details/p2";

const data = [p1, p2];
const getPhy = (id) => {
  // id will be like 'p3' - p for phy followed by a uniq no. for each staff
  return data[parseInt(id.substring(1)) - 1];
};
export default getPhy;
