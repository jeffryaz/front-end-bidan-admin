/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector, shallowEqual } from "react-redux";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  let position = useSelector((state) => state.auth.user.position, shallowEqual);

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {/* <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            `/${position}/dashboard`
          )}`}
        >
          <NavLink className="menu-link" to={`/${position}/dashboard`}>
            <span className="menu-text">Dashboard</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li> */}
        {/*end::1 Level*/}

        {/* <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/google-material')}`}>
                <NavLink className="menu-link menu-toggle" to="/google-material">
                    <span className="menu-text">Material UI</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/inputs')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/inputs">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <span className="menu-text">
                                    Inputs
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/autocomplete')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/autocomplete">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Autocomplete</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/buttons')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Buttons</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/checkboxes')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/checkboxes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Checkboxes</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/pickers')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/pickers">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Pickers</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/radio-buttons')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/radio-buttons">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Radio Buttons</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/selects')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/selects">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Selects</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/switches')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/switches">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Switches</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/text-fields')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/text-fields">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Text Fields</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/inputs/transfer-list')}`}>
                                        <NavLink className="menu-link" to="/google-material/inputs/transfer-list">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Transfer List</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/navigation')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/navigation">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-from-left.svg")} />
                                </span>
                                <span className="menu-text">
                                    Navigation
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/bottom-navigation')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/bottom-navigation">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Bottom Navigation</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/breadcrumbs')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/breadcrumbs">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Breadcrumbs</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/drawer')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/drawer">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Drawers</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/links')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/links">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">NavLinks</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/menus')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/menus">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Menus</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/steppers')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/steppers">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Steppers</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/navigation/tabs')}`}>
                                        <NavLink className="menu-link" to="/google-material/navigation/tabs">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Tabs</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/surfaces')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/surfaces">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-left-panel-1.svg")} />
                                </span>
                                <span className="menu-text">
                                    Surfaces
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/surfaces/app-bar')}`}>
                                        <NavLink className="menu-link" to="/google-material/surfaces/app-bar">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">App Bar</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/surfaces/paper')}`}>
                                        <NavLink className="menu-link" to="/google-material/surfaces/paper">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Paper</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/surfaces/cards')}`}>
                                        <NavLink className="menu-link" to="/google-material/surfaces/cards">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Cards</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/surfaces/expansion-panels')}`}>
                                        <NavLink className="menu-link" to="/google-material/surfaces/expansion-panels">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Expansion Panels</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/feedback')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/feedback">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/Half-star.svg")} />
                                </span>
                                <span className="menu-text">
                                    Feedback
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/feedback/progress')}`}>
                                        <NavLink className="menu-link" to="/google-material/feedback/progress">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Progress</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/feedback/dialogs')}`}>
                                        <NavLink className="menu-link" to="/google-material/feedback/dialogs">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Dialogs</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/feedback/snackbars')}`}>
                                        <NavLink className="menu-link" to="/google-material/feedback/snackbars">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Snackbars</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/data-displays')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/data-displays">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Devices/iMac.svg")} />
                                </span>
                                <span className="menu-text">
                                    Data Display
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/feedback/progress')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/avatars">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Avatars</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/badges')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/badges">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Badges</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/chips')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/chips">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Chips</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/dividers')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/dividers">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Dividers</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/icons')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/icons">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Icons</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/lists')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/lists">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Lists</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/tables')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/tables">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Tables</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/tooltips')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/tooltips">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Tooltips</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/data-displays/typography')}`}>
                                        <NavLink className="menu-link" to="/google-material/data-displays/typography">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Typography</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/utils')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/utils">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Swiss-knife.svg")} />
                                </span>
                                <span className="menu-text">
                                    Utils
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/click-away-listener')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/click-away-listener">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Click Away Listener</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/modal')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/modal">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Modal</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/no-ssr')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/no-ssr">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">No SSR</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/popover')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/popover">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Popover</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/popper')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/popper">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Popper</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/portal')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/portal">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Portal</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/transitions')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/transitions">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Transitions</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/utils/use-media-query')}`}>
                                        <NavLink className="menu-link" to="/google-material/utils/use-media-query">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">useMediaQuery</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/google-material/layout')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/google-material/layout">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-top-panel-2.svg")} />
                                </span>
                                <span className="menu-text">
                                    Layout
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/box')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/box">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Box</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/container')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/container">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Container</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/grid')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/grid">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Grid</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/grid-list')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/grid-list">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Grid list</span>
                                        </NavLink>
                                    </li>
                                    <li className={`menu-item ${getMenuItemActive('/google-material/layout/hidden')}`}>
                                        <NavLink className="menu-link" to="/google-material/layout/hidden">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Hidden</span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
             */}
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
