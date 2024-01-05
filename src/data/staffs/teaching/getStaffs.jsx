import englishStaffs from "./english";
import chemistryStaffs from "./chemistry";
import physicsStaffs from "./physics";
import mathStaffs from "./maths";
import tamilStaffs from "./tamil";

const getStaffsForSubject = (subject) => {
  switch (subject) {
    case "english":
      return englishStaffs;
    case "chemistry":
      return chemistryStaffs;
    case "physics":
      return physicsStaffs;
    case "maths":
      return mathStaffs;
    case "tamil":
      return tamilStaffs;
    default:
      return [];
  }
};

export default getStaffsForSubject;
