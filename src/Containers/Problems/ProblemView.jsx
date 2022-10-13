import React from 'react'
import { items } from '../SidebarP/ItemsList.js';
import { Sidebar } from "react-responsive-sidebar";

const ProblemView = () => {
  return (
    <div>
      <Sidebar
            className="side-bar"
            content={items}
            width={220}
            background={"#FFF"}
            toggleIconColor={"#209dbb"}
            color={"#000000"}
            activeHightlight={"#FFF"}
            hoverHighlight={"#FFF"}
            textAlign={"center"}
          >
            <div>
                problem view
            </div>
          </Sidebar>
    </div>
  )
}

export default ProblemView