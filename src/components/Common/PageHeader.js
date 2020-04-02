import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <div className="bg-text">
        <h1 className="page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
