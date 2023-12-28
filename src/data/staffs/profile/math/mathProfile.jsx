import m1 from "./details/m1";
import m2 from "./details/m2";
import m3 from "./details/m3";
import m4 from "./details/m4";
import m5 from "./details/m5";
import m6 from "./details/m6";
import m7 from "./details/m7";
import m8 from "./details/m8";
import m9 from "./details/m9";
import m10 from "./details/m10";

const data = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
const getMath = (id) => {
  // id will be like 'm3' - m for math followed by a uniq no. for eamh staff
  return data[parseInt(id.substring(1)) - 1];
};
export default getMath;
