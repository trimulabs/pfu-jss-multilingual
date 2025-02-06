/* eslint-disable react/react-in-jsx-scope */
import { withTranslation } from 'react-i18next';
import './styles.css';
import { useState } from 'react';

let Header = (props) => {
  const { defaultLanguage, t } = props;
  const regionList = [
    {
      regionName: t('header.region-picker.canada'),
      languages: [
        {
          code: 'en',
          label: t('header.region-picker.english-canada'),
          link: '/en/',
          title: t('header.switch-to-english-canada'),
        },
        {
          code: 'fr',
          label: t('header.region-picker.french-canada'),
          link: '/fr/',
          title: t('header.switch-to-french-canada'),
        },
      ],
    },
    {
      regionName: t('header.region-picker.mexico-central-america'),
      languages: [
        {
          code: '#',
          label: t('header.region-picker.english'),
          link: '#',
          title: t('header.switch-to-english'),
        },
        {
          code: '#',
          label: t('header.region-picker.espanol'),
          link: '#',
          title: t('header.switch-to-espanol'),
        },
        {
          code: '#',
          label: t('header.region-picker.portugues'),
          link: '#',
          title: t('header.switch-to-portugues'),
        },
      ],
    },
    {
      regionName: t('header.region-picker.united-states'),
      languages: [
        {
          code: '#',
          label: t('header.region-picker.english'),
          link: '#',
          title: t('header.switch-to-english'),
        },
      ],
    },
  ];
  const matchedLanguage =
    regionList
      .flatMap((region) => region.languages)
      .find((lang) => lang.code === defaultLanguage) ?? regionList[0].languages[0];
  const [selectedLanguage, setSelectedLanguage] = useState(matchedLanguage);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    // window.location.href = lang.link;
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/');
    if (segments.length > 1) {
      segments[1] = lang.code;
      const newPath = segments.join('/');
      window.location.href = newPath + window.location.search;
    } else {
      window.location.href = lang.link;
    }
  };
  return (
    <header className="primary-header sticky-top" aria-label="Page Header">
      <div className="d-none d-lg-block utility-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="utility-nav">
                <nav aria-label="Utility" className="position-relative">
                  <ul>
                    <li className="nav-item language-wrap utility-nav-link dropdown">
                      <a
                        href="#"
                        className="nav-link utility-nav-link"
                        aria-controls="region-picker"
                        aria-expanded="false"
                      >
                        <img
                          src="https://www.pfu-ca.ricoh.com/-/media/project/common/icons/icon_region-picker.png"
                          alt=""
                        />
                        {selectedLanguage.label}
                      </a>
                      <div id="region-picker" className="user-nav-wrap region-language-selector">
                        <div className="user-nav">
                          <ul className="region-list">
                            {regionList.map((region) => (
                              <li key={region.regionName}>
                                <h3>{region.regionName}</h3>
                                <ul className="language-list">
                                  {region.languages.map((lang) => {
                                    const isCurrent = lang.label === selectedLanguage.label;
                                    return (
                                      <li key={lang.label}>
                                        {isCurrent ? (
                                          <span>
                                            <span className="sr-only">Current Language: </span>
                                            {lang.label}
                                          </span>
                                        ) : (
                                          <a
                                            href="#"
                                            title={lang.title}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleLanguageSelect(lang);
                                            }}
                                          >
                                            {lang.label}
                                          </a>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="d-none d-lg-block primary-navigation-desktop" aria-label="Navigation Bar">
        <div className="container">
          <div className="row">
            <div className="col-12 primary-nav-row">
              <nav
                id="primary-nav"
                className="navbar primary-nav navbar-expand-lg"
                aria-label="Primary"
              >
                <div className="mobile-lock-up">
                  <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <a className="navbar-brand" href={`/${defaultLanguage}`}>
                    <img
                      src="https://www.pfu-ca.ricoh.com/Themes/scanners-pci/images/logo.svg"
                      alt="scanners-pci"
                    />
                  </a>
                  <div className="mobile-utility">
                    <nav className="utility-nav" aria-label="Utility">
                      <ul className="utility-links d-lg-none" />
                    </nav>
                  </div>
                </div>
                <div className="collapse navbar-collapse nav-justify" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown levels-1 popout">
                      <a
                        className="nav-link dropdown-toggle"
                        target
                        href={`/${defaultLanguage}/products`}
                        title={t('header.document-scanners')}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t('header.document-scanners')}
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div className="dropdown-menu">
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.scansnap')}
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.fi-series')}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown levels-2 popout">
                      <a
                        className="nav-link dropdown-toggle"
                        target
                        href={`/${defaultLanguage}/scanners/fi/solutions`}
                        title={t('header.solutions')}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t('header.solutions')}
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div className="dropdown-menu">
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li className="inner-menu">
                                <a href="#" target className aria-expanded="false">
                                  {t('header.fi-series-software')}
                                </a>
                                <ul className="third-level">
                                  <li>
                                    <a href="#" target className>
                                      {t('header.paperstream-ip')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.paperstream-clickscan')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.paperstream-capture')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.paperstream-capture-pro')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.paperstream-nx-manager')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.scanner-central-admin')}
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="inner-menu">
                                <a href="#" target className aria-expanded="false">
                                  {t('header.scansnap-software')}
                                </a>
                                <ul className="third-level">
                                  <li>
                                    <a href="#" target className>
                                      {t('header.scansnap-home')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.scansnap-cloud')}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      {t('header.scansnap-connect')}
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown levels-1">
                      <a
                        className="nav-link dropdown-toggle"
                        target
                        href={`/${defaultLanguage}/services`}
                        title={t('header.services')}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t('header.services')}
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div className="dropdown-menu">
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.advance-exchange')}
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.depot')}
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.on-site-service')}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown levels-1">
                      <a
                        className="nav-link dropdown-toggle"
                        target
                        href={`/${defaultLanguage}/support`}
                        title={t('header.support')}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {t('header.support')}
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div className="dropdown-menu">
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.warranties-manuals-datasheets')}
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.drivers-software-downloads')}
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  {t('header.replacement-parts')}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="heading">
                                  {t('header.product-registration')}
                                </a>
                              </li>
                              <li>
                                <a href="#" className="heading">
                                  {t('header.knowledge-base')}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
Header = withTranslation()(Header);

export default Header;
