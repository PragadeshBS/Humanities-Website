import c1 from "./details/c1";
import c2 from "./details/c2";
import c3 from "./details/c3";
import c4 from "./details/c4";
import c5 from "./details/c5";
import c6 from "./details/c6";
import c7 from "./details/c7";
import c8 from "./details/c8";

const data = [c1, c2, c3, c4, c5, c6, c7, c8];
const getChem = (id) => {
  // id will be like 'c3' - c for chem followed by a uniq no. for each staff
  return data[parseInt(id.substring(1)) - 1];
};
export default getChem;
