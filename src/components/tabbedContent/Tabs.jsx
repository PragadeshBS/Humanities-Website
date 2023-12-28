import "./styles.css";
const Tabs = ({ tabs, activeTab, changeTab }) => {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        {tabs.map((tab, index) => {
          return (
            <li className="nav-item" key={index}>
              <a
                onClick={() => changeTab(tab)}
                className={`nav-link ${tab === activeTab ? "accent-bg active": "inactive-tab-link"}`}
              >
                {tab}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
