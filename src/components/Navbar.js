import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar1">
          <li className="hanburger">☰</li>
          <img className="logo" src="assets/asset-8.jpg" alt="logo"/>
          <li className="nav-link">מי אנחנו</li>
          <li className="nav-link">איזה מצבר מתאים לי</li>
          <li className="nav-link">טיפים לרכישת מצבר חדש</li>
          <li className="nav-link">סוגי מצברים</li>
          <li className="nav-link">בלוג</li>
          <li className="nav-link">צור קשר</li>
          <li className="nav-link"><img className="glass" src="assets/glass.svg" />חיפוש נותני שירות</li>
          <img className="glass-mobile" src="assets/glass.svg" />
        </nav>
        <div className="breadcrumbs">
          <li>עמוד הבית &gt; צור קשר</li>
        </div>
      </header>
    );
  }
}

export default Navbar;