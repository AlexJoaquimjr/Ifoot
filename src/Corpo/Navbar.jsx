import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import logo_img from '../imagem/bola1.png';
  
  export default class Headers extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        
        <div>
            
            <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">IFOOT<img src={logo_img} alt="" className="logo_image"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        
      );
    }
  }

