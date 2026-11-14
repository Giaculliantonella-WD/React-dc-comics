import dcLogoBg from '../assets/img/dc-logo-bg.png';
import {
  dcComicsLinks,
  shopLinks,
  dcLinks,
  sitesLinks,
  bannerItems,
  socialLinks,
} from '../data/footerLinks';

function AppFooter() {
  return (
    <footer className="app-footer">
      {/* Top Banner (Blue Section) */}
      <section className="footer-banner">
        <div className="container banner-container">
          {bannerItems.map((item) => (
            <div key={item.id} className="banner-item">
              <img src={`/img/${item.image}`} alt={item.text} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Footer Links with Background Image */}
      <section className="footer-main">
        <div className="container footer-main-container">
          <div className="footer-links-wrapper">
            {/* Colonna 1: DC Comics e Shop */}
            <div className="footer-col">
              <h4>DC COMICS</h4>
              <ul>
                {dcComicsLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>

              <h4 className="mt-subgroup">SHOP</h4>
              <ul>
                {shopLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonna 2: DC */}
            <div className="footer-col">
              <h4>DC</h4>
              <ul>
                {dcLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonna 3: Sites */}
            <div className="footer-col">
              <h4>SITES</h4>
              <ul>
                {sitesLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Big DC logo watermark on the right */}
          <div className="footer-logo-bg">
            <img src={dcLogoBg} alt="DC Logo Watermark" />
          </div>
        </div>
      </section>

      {/* Bottom Bar: Sign-up & Socials */}
      <section className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-signup">
            <button type="button" className="btn-signup">SIGN-UP NOW!</button>
          </div>

          <div className="footer-socials">
            <span className="follow-us-text">FOLLOW US</span>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a key={social.id} href={social.url} title={social.name} className="social-link">
                  <img src={`/img/${social.icon}`} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default AppFooter;
