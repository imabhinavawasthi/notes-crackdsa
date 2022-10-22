import { TabPanel, useTabs } from "react-headless-tabs";
import * as React from "react";
import ProblemsView from "../../../Containers/Problems/ProblemView.jsx"
import ProblemList from "../../../Containers/Problems/ProblemList.jsx";

export default function Tabs() {
  const items = ["Problems", "Solved", "Unsolved", "Tags"];
  const [selectedTab, setSelectedTab] = useTabs(items);
  const changeTab = (e) => {
    e.preventDefault();
    const target = (e.target).dataset.tab;
    if (typeof target !== "string") {
      return;
    }
    setSelectedTab(target);
  };
  const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);
  return (
    <div className="App">
      <nav
        style={{
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `calc((100% / ${items.length}) * ${getSelectedTabIndex()})`,
            height: "2px",
            width: `calc(100% / ${items.length})`,
            background: "var(--theme-color)",
            transition: "all ease 0.2s"
          }}
        />
        <div
          style={{
            display: "flex"
          }}
        >
          {items.map((item) => {
            return (
              <a
                href="#tab"
                key={item}
                style={{
                  flexGrow: 1,
                  display: "block",
                  padding: "1rem",
                  textDecoration: "none",
                  color: selectedTab === item ? "var(--theme-color)" : "black",
                  background: selectedTab === item ? "#fcfcfc" : "#fff"
                }}
                onClick={changeTab}
                data-tab={item}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
      <div
        style={{
          padding: "2rem",
          background: "#ececec"
        }}
      >
        {items.map((item) => {
          return (
            <TabPanel key={item} hidden={selectedTab !== item}>
              {item=="Problems"&&<><ProblemList/> </>}
              
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
