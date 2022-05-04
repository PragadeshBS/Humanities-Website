import { useState } from "react";
import Content from "./Content";
import Tabs from "./Tabs";

const TabbedContent = ({ content, defaultTab, contentType }) => {
  const [curView, setCurView] = useState(defaultTab);
  return (
    <div>
      <Tabs
        tabs={Object.keys(content)}
        activeTab={curView}
        changeTab={setCurView}
      />
      <Content data={content[curView]} type={contentType} />
    </div>
  );
};

export default TabbedContent;
