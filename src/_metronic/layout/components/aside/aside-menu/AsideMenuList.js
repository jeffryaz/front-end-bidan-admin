/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { useSelector, shallowEqual } from "react-redux";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import {
  DataAsideMenuListRegistry,
  DataAsideMenuListDoctor,
  DataAsideMenuListTeller,
  DataAsideMenuListPharmacist,
  DataAsideMenuListAdministrator,
  DataAsideMenuListOwner,
} from "./DataAsideMenuList";
import { FormattedMessage } from "react-intl";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${
          !hasSubmenu && "menu-item-active"
        } menu-item-open menu-item-not-hightlighted`
      : "";
  };
  let position = useSelector((state) => state.auth.user.position, shallowEqual);
  var asideMenu = [];
  switch (position) {
    case "registry":
      asideMenu = DataAsideMenuListRegistry;
      break;
    case "doctor":
      asideMenu = DataAsideMenuListDoctor;
      break;
    case "teller":
      asideMenu = DataAsideMenuListTeller;
      break;
    case "pharmacist":
      asideMenu = DataAsideMenuListPharmacist;
      break;
    case "administrator":
      asideMenu = DataAsideMenuListAdministrator;
      break;
    case "owner":
      asideMenu = DataAsideMenuListOwner;
      break;
    default:
      asideMenu = [];
  }

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            `/${position}/dashboard`,
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={`/${position}/dashboard`}>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {asideMenu.map((item, index) => {
          return (
            <li
              key={index.toString()}
              className={`${
                item.subMenu && item.subMenu.length > 0
                  ? "menu-item menu-item-submenu"
                  : "menu-item"
              } ${getMenuItemActive(item.rootPath, true)}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className={
                  item.subMenu && item.subMenu.length > 0
                    ? "menu-link menu-toggle"
                    : "menu-link"
                }
                to={item.rootPath}
              >
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons" + item.icon)} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id={item.title} />
                </span>
                {item.subMenu && item.subMenu.length > 0 && (
                  <i className="menu-arrow" />
                )}
              </NavLink>
              {item.subMenu && item.subMenu.length > 0 && (
                <div className="menu-submenu ">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    <li
                      className="menu-item menu-item-parent"
                      aria-haspopup="true"
                    >
                      <span className="menu-link">
                        <span className="menu-text">
                          <FormattedMessage id={item.title} />
                        </span>
                      </span>
                    </li>
                    {item.subMenu.map((submenu, index_1) => {
                      return (
                        <li
                          key={index_1.toString()}
                          className={`${
                            submenu.subMenu && submenu.subMenu.length > 0
                              ? "menu-item menu-item-submenu"
                              : "menu-item"
                          }  ${getMenuItemActive(submenu.rootPath)}`}
                          aria-haspopup="true"
                        >
                          <NavLink
                            className={
                              submenu.subMenu && submenu.subMenu.length > 0
                                ? "menu-link menu-toggle"
                                : "menu-link"
                            }
                            to={submenu.rootPath}
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">
                              <FormattedMessage id={submenu.title} />
                            </span>
                            {submenu.subMenu && submenu.subMenu.length > 0 && (
                              <i className="menu-arrow" />
                            )}
                          </NavLink>
                          {submenu.subMenu && submenu.subMenu.length > 0 && (
                            <div className="menu-submenu ">
                              <i className="menu-arrow" />
                              <ul className="menu-subnav">
                                {submenu.subMenu.map((submenus, index_2) => {
                                  return (
                                    <li
                                      key={index_2.toString()}
                                      className={`menu-item  ${getMenuItemActive(
                                        submenus.rootPath
                                      )}`}
                                      aria-haspopup="true"
                                    >
                                      <NavLink
                                        className="menu-link"
                                        to={submenus.rootPath}
                                      >
                                        <i className="menu-bullet menu-bullet-dot">
                                          <span />
                                        </i>
                                        <span className="menu-text">
                                          <FormattedMessage
                                            id={submenus.title}
                                          />
                                        </span>
                                      </NavLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
