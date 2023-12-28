import { useState } from "react";
import Content from "./Content";
import Options from "./Options";

const SelectedContent = ({ content, defaultView, contentType, selectTitle }) => {
  const [curView, setCurView] = useState(defaultView);
  return (
    <div>
      <Options
        options={Object.keys(content)}
        activeItem={curView}
        changeCurItem={setCurView}
        selectTitle={selectTitle}
      />
      <Content data={content[curView]} type={contentType} />
    </div>
  );
};

export default SelectedContent;
