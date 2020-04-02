import React from "react";
import Sidebar from "../../components/Backend/common/Sidebar";

const AdminLayout = (props) => {
  return (
    <div>
      <div class="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
          <i class="fas fa-bars"></i>
        </a>
        <Sidebar />
        <main class="page-content">
          <div class="container-fluid">{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
