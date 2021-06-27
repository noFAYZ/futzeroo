import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {

        return (
          <header id="main-header" data-height-onload="60">
  			<div className="container clearfix et_menu_container">
  							<div className="logo_container">
  					<span className="logo_helper"></span>
  					<Link to='/' >
  						<img src="images/futww.png" alt="360Player" id="logo" data-height-percentage="45" />
  					</Link>
  				</div>
  							<div id="et-top-navigation" data-height="60" data-fixed-height="60">
  											<nav id="top-menu-nav">
  						<ul id="top-menu" className="nav"><li id="menu-item-48854" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-48854"><Link to="/">Funktsioonid</Link>
  <ul className="sub-menu">
  	<li id="menu-item-48493" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48493"><Link to="/tootoad">Töötoad</Link></li>
  	<li id="menu-item-53679" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53679"><Link to="/kursused">Kursused</Link></li>
  	<li id="menu-item-48496" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48496"><Link to="/spordipsuhholoogia">Spordipsühholoogia päevik</Link></li>

  </ul>
  </li>
  <li id="menu-item-54269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-54269"><Link to="/lahendused">Lahendused </Link>
  <ul className="sub-menu">
  	<li id="menu-item-54270" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54270"><Link to="/Mangijale">Mängijale </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/treeneritele">Treeneritele </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/lapsevanemale">Lapsevanemale  </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/klubidele">Klubidele  </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/jalgpalliliidule">Jalgpalliliidule  </Link></li>
  </ul>
  </li>
  <li id="menu-item-53427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53427"><a href="pricing-detect/index.html">Paketid</a></li>
 
  <li id="menu-item-54926" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-54926"><a href="/#">Ettevõttest</a>
  <ul className="sub-menu">
  	<li id="menu-item-54928" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54928"><Link to="/about">Ettevõttest </Link></li>
  	<li id="menu-item-54927" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54927"><a href="https://sportsunite.eu/blog/">Blogi</a></li>
  	<li id="menu-item-54930" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54930"><Link to="/contact">Kontakteeru Meiega</Link></li>
  </ul>
  </li>
  <li id="menu-item-114" className="button-item menu-item menu-item-type-custom menu-item-object-custom menu-item-114"><a href="/#"><span className="login-button">Logi sisse</span></a></li>
  <li id="menu-item-51738" className="button-item menu-item  menu-item-type-custom menu-item-object-custom menu-item-51738"><a href="/#"><span className="cta-button">Registreeri</span></a></li>
  </ul>						</nav>

  					<div id="et_mobile_nav_menu">
  					<div className="mobile_nav closed">
  						<span className="select_page">Select Page</span>
  						<span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
  					</div>
  					</div>
  				</div>
  			</div>
  		
  		</header>
          )
    }
}

export default Header
