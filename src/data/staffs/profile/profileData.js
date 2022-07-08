import getPhy from "./phy/phyProfile";
import getChem from "./chem/chemProfile";
import getMath from "./math/mathProfile";
import getEng from "./eng/engProfile";

const getProfileData = (id) => {
  if (id.startsWith("c")) return getChem(id);
  if (id.startsWith("p")) return getPhy(id);
  if (id.startsWith("m")) return getMath(id);
  if (id.startsWith("e")) return getEng(id);
};
export default getProfileData;
