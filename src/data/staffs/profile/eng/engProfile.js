import e1 from "./details/e1";
import e2 from "./details/e2";
import e3 from "./details/e3";
import e4 from "./details/e4";
import e5 from "./details/e5";

const data = [e1, e2, e3, e4, e5];
const getEng = (id) => {
  // id will be like 'e3' - e for english followed by a uniq no. for eaeh staff
  return data[parseInt(id.substring(1)) - 1];
};
export default getEng;
