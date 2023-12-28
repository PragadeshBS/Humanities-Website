import { useState } from "react";
import TabContentBody from "./TabContentBody";
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
      <TabContentBody data={content[curView]} type={contentType} />
    </div>
  );
};

export default TabbedContent;
