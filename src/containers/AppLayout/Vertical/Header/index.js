import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import SearchBox from "components/SearchBox";
import MailNotification from "../../../../components/MailNotification";
import AppNotification from "../../../../components/AppNotification";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import { switchLanguage, toggleCollapsedNav } from "actions/Setting";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";

import {
  PeopleAltRounded,
  PeopleOutlineRounded,
  LocalLibrary,
  MenuBook
} from '@material-ui/icons';

const Index =(props)=> {

  const dispatch = useDispatch();
  const { drawerType, locale } = useSelector(({settings}) => settings);
  const [langSwitcher,setLangSwitcher]=useState(false);
  const [mailNotification,setMailNotification]=useState(false);
  const [appNotification,setAppNotification]=useState(false);
  const [searchBox,setSearchBox]=useState(false);
  const [apps,setApps]=useState(false);
  const [searchText,setSearchText]=useState('');

  const onAppNotificationSelect = () => {
    setAppNotification(!appNotification)
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification)
  };
  const onLangSwitcherSelect = () => {
    setLangSwitcher(!langSwitcher);
  };

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox)
  };
  const onAppsSelect = () => {
    setApps(!apps)
  };

  const handleRequestClose = () => {
    setSearchBox(false);
    setLangSwitcher(false);
    setMailNotification(false);
    setSearchBox(false);
    setApps(false);
  };

  const onToggleCollapsedNav = (e) => {
    const val = !props.navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };


  const Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <Link className="jr-list-link" to="/student/add">
            <LocalLibrary />
            <span className="jr-list-text text-center"><IntlMessages id="sidebar.student.add"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/teacher/add">
            <PeopleAltRounded />
            <span className="jr-list-text text-center"><IntlMessages id="sidebar.teacher.add"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/staff/add">
            <PeopleOutlineRounded />
            <span className="jr-list-text text-center"><IntlMessages id="sidebar.staff.add"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/class">
            <i className="zmdi zmdi-balance zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="all"/> <IntlMessages id="class"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/subjects">
            <MenuBook/>
            <span className="jr-list-text"><IntlMessages id="class.subjects"/></span>
          </Link>
        </li>

      </ul>);
  };


  const updateSearchText =(evt)=> {
    setSearchText(evt.target.value);
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang))
  };

    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";

    return (
      <AppBar className="app-main-header">
        <Toolbar className="app-toolbar" disableGutters={false}>

          <IconButton className={`jr-menu-icon mr-3 ${drawerStyle}`} aria-label="Menu"
                      onClick={onToggleCollapsedNav}>
            <span className="menu-icon"/>
          </IconButton>

          <Link className="app-logo mr-2 d-none d-sm-block" to="/">
            <img src={require("assets/images/logo.png")} alt="smart-school" title="smart-school"/>
          </Link>


          <SearchBox styleName="d-none d-lg-block" placeholder=""
                     onChange={updateSearchText}
                     value={searchText}/>

          <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item">
              <Dropdown
                className="quick-menu app-notification"
                isOpen={apps}
                toggle={onAppsSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <span className="app-notification-menu">
                    <i className="zmdi zmdi-apps zmdi-hc-fw zmdi-hc-lg"/>
                    <span><IntlMessages id="quick"/></span>
                  </span>
                </DropdownToggle>

                <DropdownMenu>
                  {Apps()}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="d-inline-block d-lg-none list-inline-item">
              <Dropdown
                className="quick-menu nav-searchbox"
                isOpen={searchBox}
                toggle={onSearchBoxSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right className="p-0">
                  <SearchBox styleName="search-dropdown" placeholder=""
                             onChange={updateSearchText}
                             value={searchText}/>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item">
              <Dropdown
                className="quick-menu"
                isOpen={langSwitcher}
                toggle={onLangSwitcherSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className={`flag flag-24 flag-${locale.icon}`}/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right className="w-50">
                  <LanguageSwitcher switchLanguage={onSwitchLanguage}
                                    handleRequestClose={handleRequestClose}/>
                </DropdownMenu>
              </Dropdown>


            </li>
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={appNotification}
                toggle={onAppNotificationSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-notifications-none icon-alert animated infinite wobble"/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader styleName="align-items-center"
                              heading={<IntlMessages id="appNotification.title"/>}/>
                  <AppNotification/>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item mail-tour">
              <Dropdown
                className="quick-menu"
                isOpen={mailNotification}
                toggle={onMailNotificationSelect}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">

                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-comment-alt-text zmdi-hc-fw"/>
                  </IconButton>
                </DropdownToggle>


                <DropdownMenu right>
                  <CardHeader styleName="align-items-center"
                              heading={<IntlMessages id="mailNotification.title"/>}/>
                  <MailNotification/>
                </DropdownMenu>
              </Dropdown>
            </li>

          </ul>

          <div className="ellipse-shape"/>
        </Toolbar>
      </AppBar>
    );
  };


export default withRouter(Index);