import { useState } from "react";
import Content from "./Content";
import Options from "./Options"

const SelectedContent = ({content, defaultTab}) => {
  const [curView, setCurView] = useState(defaultTab);
  return (
    <div>
      <Options tabItems={Object.keys(content)} activeItem={curView} changeCurItem={setCurView} />
      <Content data={content[curView]} type="students" />
    </div>
  );
};

export default SelectedContent;
