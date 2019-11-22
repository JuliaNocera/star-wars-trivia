import React from "react";
import cx from "classnames";

interface ToolbarActionButtonProps {
  children?: React.ReactElement;
  className?: string;
  label?: string;
  onClick: (args: any) => any;
}

const ToolbarActionButton = ({
  children,
  className,
  label,
  onClick
}: ToolbarActionButtonProps) => {
  const button = (
    <button
      className={cx("jan-ToolbarActionButton", { className: !!className })}
      onClick={onClick}
    >
      {label}
    </button>
  );
  const buttonBody = children ? children : button;
  return <>{buttonBody}</>;
};

export default ToolbarActionButton;
