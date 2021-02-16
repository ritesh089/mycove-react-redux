import React, {Component} from 'react';
import {Badge,Dropdown,DropdownMenu,DropdownItem,Nav,NavItem,NavLink,NavbarToggler, NavbarBrand,DropdownToggle} from 'reactstrap';
import { connect } from 'react-redux';
import {userLogout} from '../../actions/sessionActions';
class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
	this.logout = this.logout.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

   logout() {
    const { dispatch,history } = this.props
    dispatch(userLogout(history));
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
  const { userName,userSessionID,userAvatarUrl,userRole } = this.props

    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#">Home</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className="nav-link dropdown-toggle">
                <img src={userAvatarUrl?'http://localhost:8080/files'+userAvatarUrl:''} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                <span className="d-md-down-none">{userName}</span>
              </DropdownToggle>
              <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
                <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                <DropdownItem><NavLink href="#/home/profile"><i className="fa fa-user"></i>Profile</NavLink> </DropdownItem>
                <DropdownItem><NavLink href="#" onClick={this.logout}><i className="fa fa-lock"></i> Logout</NavLink> </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>

      </header>
    )
  }
}

const mapState = ({ session }) => ({
  userName: session.user.name,
  userSessionID:session.user.session_token,
  userAvatarUrl:session.user.avatar_url,
  userRole:session.user.role
});

export default connect(mapState)(Header);
