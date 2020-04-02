import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-brand">
          <a href="#">KHATRI SIDEBAR</a>
          <div id="close-sidebar">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="sidebar-header">
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
              alt="User picture"
            />
          </div>
          <div class="user-info">
            <span class="user-name">
              RN
              <strong>KHATRI</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <div class="sidebar-search">
          <div>
            <div class="input-group">
              <input
                type="text"
                class="form-control search-menu"
                placeholder="Search..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>General</span>
            </li>
            <li>
              <Link to="/admin">
                <i class="fa fa-tachometer-alt"></i>
                <span>Dashboard</span>
                <span class="badge badge-pill badge-warning">New</span>
              </Link>
            </li>

            <li>
              <Link to="/admin/users">
                <i class="fa fa-folder"></i>
                <span>Users</span>
              </Link>
            </li>

            <li class="sidebar-dropdown">
              <a href="#">
                <i class="fa fa-globe"></i>
                <span>Maps</span>
              </a>
              <div class="sidebar-submenu">
                <ul>
                  <li>
                    <a href="#">Google maps</a>
                  </li>
                  <li>
                    <a href="#">Open street map</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="header-menu">
              <span>Extra</span>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-book"></i>
                <span>Documentation</span>
                <span class="badge badge-pill badge-primary">Beta</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-footer">
        <a href="#">
          <i class="fa fa-bell"></i>
          <span class="badge badge-pill badge-warning notification">3</span>
        </a>
        <a href="#">
          <i class="fa fa-envelope"></i>
          <span class="badge badge-pill badge-success notification">7</span>
        </a>
        <a href="#">
          <i class="fa fa-cog"></i>
          <span class="badge-sonar"></span>
        </a>
        <a href="#">
          <i class="fa fa-power-off"></i>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
