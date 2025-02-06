/* eslint-disable react/react-in-jsx-scope */
import { withTranslation } from 'react-i18next';
import './styles.css';

let Footer = ({ t, i18n }) => {
  return (
    <footer className="primary-footer">
      <div className="footer-wrapper bg-dark-gray">
        <div className="container">
          <div className="row main-wrap">
            <nav className="footer-primary" aria-label="Footer Main">
              <ul className="nav">
                <li>
                  <a className="nav-link" target href="#" title={t('footer.all-products')}>
                    {t('footer.all-products')}
                  </a>
                  <ul>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.scansnap')}>
                        {t('footer.scansnap')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.fi-series')}>
                        {t('footer.fi-series')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.software')}>
                        {t('footer.software')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.service-programs')}>
                        {t('footer.service-programs')}
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="nav-link" target href="#" title={t('footer.about-us')}>
                    {t('footer.about-us')}
                  </a>
                  <ul>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.contact-us')}>
                        {t('footer.contact-us')}
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="nav-link" target href="#" title={t('footer.support')}>
                    {t('footer.support')}
                  </a>
                  <ul>
                    <li>
                      <a
                        className="nav-link"
                        target
                        href="#"
                        title={t('footer.warranties-manuals-datasheets')}
                      >
                        {t('footer.warranties-manuals-datasheets')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.drivers-downloads')}>
                        {t('footer.drivers-downloads')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" target href="#" title={t('footer.consumables')}>
                        {t('footer.consumables')}
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#" title={t('footer.product-registration')}>
                        {t('footer.product-registration')}
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link"
                        target
                        href="#"
                        title={t('footer.discontinued-scanners')}
                      >
                        {t('footer.discontinued-scanners')}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="sidebar-wrap">
              <div className="footer-contact">
                <nav aria-label="Footer Contact">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" />
                    </li>
                  </ul>
                </nav>
              </div>
              <nav className="footer-social" aria-label="Footer Social">
                <h3>{t('footer.social')}</h3>
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#" title={t('footer.linkedin')}>
                      <span className="icon icon-linkedin">
                        <span className="sr-only">{t('footer.linkedin')}</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" title={t('footer.youtube')}>
                      <span className="icon icon-youtube">
                        <span className="sr-only">{t('footer.youtube')}</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <nav className="footer-legal d-flex" aria-label="Footer Legal">
                <small>
                  <div className="legal-content">
                    <img
                      src="https://www.pfu-ca.ricoh.com/Themes/Common/images/pfu-logo-white.svg"
                      className="legal-logo"
                      alt="PFU - A Ricoh Company logo"
                    />
                    <div className="body-xs-medium">
                      <span>{t('footer.legal-notice')}</span>
                    </div>
                  </div>
                  <div className="legal-nav-container">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#" title={t('footer.accessibility')}>
                          {t('footer.accessibility')}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#" title={t('footer.terms')}>
                          {t('footer.terms')}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#" title={t('footer.privacy')}>
                          {t('footer.privacy')}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          target
                          href="#"
                          title={t('footer.manage-preferences')}
                        >
                          {t('footer.manage-preferences')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </small>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer = withTranslation()(Footer);

export default Footer;
