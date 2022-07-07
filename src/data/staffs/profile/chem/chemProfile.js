import c1 from "../chem/c1";
const data = [c1];
const getChem = (id) => {
  return data[parseInt(id.substring(1)) - 1];
};
export default getChem;
