/* eslint-disable react/react-in-jsx-scope */
import '../assets/Solutions.css';

const Solutions = ({ fields }) => {
  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div>
        <section className="full-width-promo-with-background-image orientation-left mb-0 theme-primary">
          <a
            name="rationalisez-vos-flux-de-travail-grace-a-nos-solutions-de-numerisation-evolutives"
            className="anchor"
          />
          <div className="image-container">
            <picture>
              <source
                media="(max-width: 576px)"
                srcSet="/-/media/project/scanners-pci/promos/software/solutions-fi-8170-heromobile.png?mw=576&hash=41095575AEEBD48B0D3B6DC0FD4301F8"
              />
              <img
                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/software/solutions-fi-8170-herobanner.png?mw=1440&hash=A3AF2C27E8063AFCE0992C8214AD3D03"
                alt=""
              />
            </picture>
          </div>
          <div className="content-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="content-col col-lg-6">
                  <div className="content-container">
                    <div className="text">
                      <div>
                        <h1 className="heading-1">{fields.heroHeading?.value}</h1>
                      </div>
                      <div className="body">
                        <p>{fields.heroParagraph?.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="card-deck no-frame arrow-cta items-per-row-4 mb-0" data-show-more={0}>
        <div className="container">
          <div className="row">
            <div className="col">
              <a name="solutions-de-capture" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2>{fields.captureSolutionsHeading?.value}</h2>
                  <div className="container card-deck-header">
                    <div className="row">
                      <div className="col">{fields.captureSolutionsSubHeading?.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center main-content">
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.clickScanCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_1.png?h=462&iar=0&mw=1200&w=528&hash=2E73EC2723357103095E69E72C294820"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.clickScanCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.clickScanCardLink?.value?.href}
                        target
                      >
                        {fields.clickScanCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.captureCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_2.png?h=462&iar=0&mw=1200&w=528&hash=3659CF108148298C7AE64D107A986196"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.captureCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta" href={fields.captureCardLink?.value?.href} target>
                        {fields.captureCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.captureProCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_3.png?h=462&iar=0&mw=1200&w=528&hash=1DF7469A6B9B6421C9B8A7BA09BE0F78"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.captureProCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.captureProCardLink?.value?.href}
                        target
                      >
                        {fields.captureProCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.captureProPremiumCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_7.png?h=462&iar=0&mw=1200&w=528&hash=14FEEE263C3D2F83B07C8BCB42A2150D"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.captureProPremiumCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.captureProPremiumCardLink?.value?.href}
                        target
                      >
                        {fields.captureProPremiumCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="card-deck no-frame arrow-cta items-per-row-4 mb-0 pb-0"
        data-show-more={0}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <a name="disponible-en-fonction-des-besoins" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2>{fields.availabilityHeading?.value}</h2>
                  <div className="container card-deck-header">
                    <div className="row">
                      <div className="col">{fields.availabilityFeature1?.value}</div>
                      <div className="col">{fields.availabilityFeature2?.value}</div>
                      <div className="col">{fields.availabilityFeature3?.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center main-content">
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.paperstreamIpCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_4.png?h=462&iar=0&mw=1200&w=528&hash=1716D1824324D650BE5F4022FFE5750D"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.paperstreamIpCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.paperstreamIpCardLink?.value?.href}
                        target
                      >
                        {fields.paperstreamIpCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.scannerCentralAdminCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_5.png?h=462&iar=0&mw=1200&w=528&hash=B2EC8F7020E3B62CDDF88786F83F0624"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.scannerCentralAdminCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.scannerCentralAdminCardLink?.value?.href}
                        target
                      >
                        {fields.scannerCentralAdminCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a href={fields.nxManagerCardLink?.value?.href} target title aria-label>
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/software/fi-solutions_6.png?h=462&iar=0&mw=1200&w=528&hash=E7C5C12B59D3F397F39DFBD0CE9897E4"
                        className="img-fluid"
                        alt=""
                        width={528}
                        height={462}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <div className="card-text">
                        <p>{fields.nxManagerCardDescription?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span
                        className="card-cta"
                        href={fields.nxManagerCardLink?.value?.href}
                        target
                      >
                        {fields.nxManagerCardCtaLabel?.value}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-promo mb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-container">
                <a
                  name="nos-kits-pour-developpeurs-de-logiciels-vous-interessent"
                  className="anchor"
                />
                <h2>{fields.gradientPromoHeading?.value}</h2>
                <h3>{fields.gradientPromoSubheading?.value}</h3>
                <a className="btn btn-primary" href={fields.gradientPromoButtonLink?.value?.href}>
                  {fields.gradientPromoButtonLabel?.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
