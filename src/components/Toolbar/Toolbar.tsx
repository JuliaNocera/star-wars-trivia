import React from "react";

import ToolbarTitle from "./ToolbarTitle";
import ToolbarActionButton from "./ToolbarActionButton";

interface ToolbarProps {
  children: React.ReactElement[];
}

const Toolbar = ({ children }: ToolbarProps) => (
  <div className="jan-Toolbar">{children}</div>
);

Toolbar.Title = ToolbarTitle;
Toolbar.Button = ToolbarActionButton;

export default Toolbar;
