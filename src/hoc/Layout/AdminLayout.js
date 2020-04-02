import React from "react";

const AdminLayout = (props) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      {props.children}
    </div>
  );
};

export default AdminLayout;
