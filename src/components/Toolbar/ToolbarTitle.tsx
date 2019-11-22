import React from "react";
import cx from "classnames";

interface ToolbarTitleProps {
  className?: string;
  title: string;
}

const ToolbarTitle: React.FC<ToolbarTitleProps> = ({ className, title }) => (
  <div className={cx("jan-ToolbarTitle", { className: !!className })}>
    {title}
  </div>
);

export default ToolbarTitle;
