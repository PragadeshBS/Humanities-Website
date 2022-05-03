import { useState } from "react";
import Content from "./Content";
import Tabs from "./Tabs";

const TabbedContent = ({content, defaultTab}) => {
  const [curView, setCurView] = useState(defaultTab);
  return (
    <div>
      <Tabs tabItems={Object.keys(content)} activeItem={curView} changeCurItem={setCurView} />
      <Content data={content[curView]} type="students" />
    </div>
  );
};

export default TabbedContent;
