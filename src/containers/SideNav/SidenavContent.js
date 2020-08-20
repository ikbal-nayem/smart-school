import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';
import Button from '@material-ui/core/Button';

import {
  Dashboard,
  RecentActors,
  PeopleAltRounded,
  PeopleOutlineRounded,
  PersonAdd,
  LocalLibrary,
  AccountBalance,
  MenuBook,
} from '@material-ui/icons';

class SidenavContent extends Component {
  componentDidMount() {
    const {history} = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`;// get current path

    const menuLi = document.getElementsByClassName('menu');
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {

        const parentLiEle = that.closest(this, 'li');
        if (menuLi[i].classList.contains('menu') && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains('open')) {
            menuLi[i].classList.remove('open', 'active');
          } else {
            menuLi[i].classList.add('open', 'active');
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, 'li');
            if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
              menuLi[j].classList.remove('open');
            } else {
              if (menuLi[j].classList.contains('open')) {
                menuLi[j].classList.remove('open');
              } else {
                menuLi[j].classList.add('open');
              }
            }
          }
        }
      }
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  componentWillReceiveProps(nextProps) {
    const {history} = nextProps;
    const pathname = `${history.location.pathname}`;// get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }

  render() {
    return (
      <CustomScrollbars className="scrollbar">
        <ul className="nav-menu">

                                          {/*dashboard*/}
          <li className="menu no-arrow animated zoomInDown animation-duration-3">
            <NavLink to="/dashboard">
              <Dashboard fontSize="large" style={styles.icon_padding} />
              <span className="nav-text"><IntlMessages id="sidebar.dashboard"/></span>
            </NavLink>
          </li>

                                          {/* student */}
          <li className="menu collapse-box animated zoomInDown animation-duration-4">
            <Button>
              <LocalLibrary fontSize="large" style={styles.icon_padding} />
              <span className="nav-text">
                <IntlMessages id="sidebar.student"/>
              </span>
            </Button>
            <ul className="sub-menu">
              <li className="animated zoomInDown">
                <NavLink className="prepend-icon" to="/student/all">
                  <RecentActors style={styles.icon_padding} />
                  <span className="nav-text"><IntlMessages id="sidebar.student.all"/></span>
                </NavLink>
              </li>
              <li className="animated zoomInDown">
                <NavLink className="prepend-icon" to="/student/add">
                <PersonAdd style={styles.icon_padding} />
                  <span className="nav-text"><IntlMessages id="sidebar.student.add"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

                                            {/*teacher*/}
          <li className="menu no-arrow animated zoomInDown animation-duration-5">
            <Button>
              <PeopleAltRounded fontSize="large" style={styles.icon_padding} />
              <span className="nav-text">
                <IntlMessages id="sidebar.teacher"/>
              </span>
            </Button>
            <ul className="sub-menu">
              <li className="animated zoomInDown">
                <NavLink to="/teacher/all">
                  <PeopleAltRounded style={styles.icon_padding} />
                  <span className="nav-text"> <IntlMessages id="sidebar.teacher.all"/></span>
                </NavLink>
              </li>
              <li className="animated zoomInDown">
                <NavLink className="prepend-icon" to="/teacher/add">
                <PersonAdd style={styles.icon_padding} />
                  <span className="nav-text"><IntlMessages id="sidebar.teacher.add"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

                                            {/*staff*/}
          <li className="menu no-arrow animated zoomInDown animation-duration-6">
            <Button>
              <PeopleOutlineRounded fontSize="large" style={styles.icon_padding} />
              <span className="nav-text">
                <IntlMessages id="sidebar.staff"/>
              </span>
            </Button>
            <ul className="sub-menu">
              <li className="animated zoomInDown">
                <NavLink to="/staff/all">
                  <PeopleOutlineRounded style={styles.icon_padding} />
                  <span className="nav-text"> <IntlMessages id="sidebar.staff.all"/></span>
                </NavLink>
              </li>
              <li className="animated zoomInDown">
                <NavLink className="prepend-icon" to="/staff/add">
                <PersonAdd style={styles.icon_padding} />
                  <span className="nav-text"><IntlMessages id="sidebar.staff.add"/></span>
                </NavLink>
              </li>
            </ul>
          </li>

                                            {/*classes*/}
          <li className="menu no-arrow animated zoomInDown animation-duration-7">
            <NavLink to="/class/all">
              <AccountBalance fontSize="large" style={styles.icon_padding}/>
              <span className="nav-text"> <IntlMessages id="class"/></span>
            </NavLink>
          </li>

                                            {/*subjects*/}
          <li className="menu no-arrow animated zoomInDown animation-duration-7">
            <NavLink to="/subjects">
              <MenuBook fontSize="large" style={styles.icon_padding} />
              <span className="nav-text"> <IntlMessages id="class.subjects"/></span>
            </NavLink>
          </li>

        </ul>
      </CustomScrollbars>
    );
  }
}

const styles = {
  icon_padding: {
    paddingRight: 10
  }
}

export default withRouter(SidenavContent);
