/* eslint-disable react/react-in-jsx-scope */
import '../assets/Services.css';

const Services = ({ fields }) => {
  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>{fields.pageTitle?.value}</h1>
      </div>

      <section className="card-deck services-deck orientation-center items-per-row-3 mb-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="deck-header">
                <a name="find-the-right-service-program-for-you" className="anchor" />
                <h2>{fields.deckHeading?.value}</h2>
                <p>
                  <span>{fields.deckParagraph?.value}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row deck-row">
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <a href={fields.firstServiceLearnMoreLink?.value?.href}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-advance-exchange.jpg?h=864&amp;iar=0&amp;w=1472&amp;hash=DD0C4B0AC019768579AA25CB21AD5068"
                        alt={fields.firstServiceImageAlt?.value}
                        width={1472}
                        height={864}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.firstServiceTitle?.value}</h3>
                    <h4>{fields.firstServiceSubTitle?.value}</h4>
                    <div className="body-wrapper">
                      <p>{fields.firstServiceDescription?.value}</p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a
                      href={fields.firstServiceLearnMoreLink?.value?.href}
                      className="btn btn-primary"
                      title={fields.firstServiceLearnMoreLabel?.value}
                    >
                      {fields.firstServiceLearnMoreLabel?.value}
                    </a>
                    <a
                      className="cta"
                      rel="noopener noreferrer"
                      title={fields.firstServiceBuyServiceLabel?.value}
                      href={fields.firstServiceBuyServiceLink?.value?.href}
                      target="_blank"
                    >
                      {fields.firstServiceBuyServiceLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <a href={fields.secondServiceLearnMoreLink?.value?.href}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-basic-onsite-service.jpg?h=864&amp;iar=0&amp;w=1472&amp;hash=5F8CC755891DBF2813E05A52C160605B"
                        alt={fields.secondServiceImageAlt?.value}
                        width={1472}
                        height={864}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.secondServiceTitle?.value}</h3>
                    <h4>{fields.secondServiceSubTitle?.value}</h4>
                    <div className="body-wrapper">
                      <p>{fields.secondServiceDescription?.value}</p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a
                      href={fields.secondServiceLearnMoreLink?.value?.href}
                      className="btn btn-primary"
                      title={fields.secondServiceLearnMoreLabel?.value}
                    >
                      {fields.secondServiceLearnMoreLabel?.value}
                    </a>
                    <a
                      className="cta"
                      rel="noopener noreferrer"
                      title={fields.secondServiceBuyServiceLabel?.value}
                      href={fields.secondServiceBuyServiceLink?.value?.href}
                      target="_blank"
                    >
                      {fields.secondServiceBuyServiceLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <a href={fields.thirdServiceLearnMoreLink?.value?.href}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-depot-mail-in-service.jpg?h=864&amp;iar=0&amp;w=1472&amp;hash=FF18A7E306CCD661833A855EF96AD026"
                        alt={fields.thirdServiceImageAlt?.value}
                        width={1472}
                        height={864}
                      />
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.thirdServiceTitle?.value}</h3>
                    <h4>{fields.thirdServiceSubTitle?.value}</h4>
                    <div className="body-wrapper">
                      <p>{fields.thirdServiceDescription?.value}</p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a
                      href={fields.thirdServiceLearnMoreLink?.value?.href}
                      className="btn btn-primary"
                      title={fields.thirdServiceLearnMoreLabel?.value}
                    >
                      {fields.thirdServiceLearnMoreLabel?.value}
                    </a>
                    <a
                      className="cta"
                      rel="noopener noreferrer"
                      title={fields.thirdServiceBuyServiceLabel?.value}
                      href={fields.thirdServiceBuyServiceLink?.value?.href}
                      target="_blank"
                    >
                      {fields.thirdServiceBuyServiceLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
