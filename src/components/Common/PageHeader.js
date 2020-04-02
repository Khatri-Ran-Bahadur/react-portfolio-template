import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <div class="bg-text">
        <h1 class="page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
