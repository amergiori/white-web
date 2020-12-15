import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container d-grid mt-5 pb-5 pt-5">
        <div className="sitemap">
          <p className="footer-title">ניווט מהיר</p>
          <li>המצבר</li>
          <li>מי אנחנו</li>
          <li>צור קשר</li>
          <li>בלוג</li>
          <li>מפת אתר</li>
        </div>
        <div className="sitemap">
        <p className="footer-title">מצברים לפי סוג רכב</p>
          <li>מצברים לרכב</li>
          <li>מצברים לאופנוע</li>
          <li>מצברים למשאית</li>
          <li>מצברים פריקה עמוקה</li>
        </div>
        <div className="sitemap">
        <p className="footer-title">מצברים לפי יצרן רכב</p>
          <li>מצבר לטויוטה</li>
          <li>מצבר ליונדאי</li>
          <li>מצבר לקיה</li>
          <li>מצבר לסקודה</li>
          <li>מצבר לשברולט</li>
          <li>מצבר לרנו</li>
          <li>יצרנים נוספים</li>
        </div>
        <div className="sitemap">
        <p className="footer-title">מצברים לפי יצרן</p>
          <li>מצברי ורטה</li>
          <li>מצברי בוש</li>
          <li>מצברי סטארט אפ</li>
          <li>מצברי וולטה</li>
        </div>
        <div className="sitemap">
        <p className="footer-title">אזורי שירות</p>
          <li>מצברים במרכז</li>
          <li>מצברים בדרום</li>
          <li>מצברים בצפון</li>
          <li>מצברים בגוש דן</li>
          <li>מצברים בתל אביב</li>
        </div>
        <div className="mobile-footer">
          <li>תקנון תנאי שימוש | &nbsp;</li>
          <li> מדיניות פרטיות | &nbsp;</li>
          <li> כתבו לנו | &nbsp;</li>
          <li> צור קשר</li>
        </div>
      </div>
    );
  }
}

export default Footer;
