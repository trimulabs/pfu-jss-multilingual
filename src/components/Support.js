/* eslint-disable react/react-in-jsx-scope */
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import '../assets/Support.css';

const Support = ({ fields }) => {
  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>
          <Text field={fields.pageTitle} />
        </h1>
      </div>
      <section
        className="callout-deck background-color-off-white alignment-center mb-0 icon-grid theme-primary"
        data-show-more={0}
      >
        <div className="container">
          <a name="support-resources-are-within-reach" className="anchor" />
          <div className="deck-header">
            <div className="deck-header-body">
              <h2>
                <Text field={fields.calloutDeckHeading} />
              </h2>
              <h3 className="h3">
                <Text field={fields.calloutDeckSubheading} />
              </h3>
            </div>
          </div>
          <div className="card-deck justify-content-center main-content">
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{7be8c663-bd8d-4a95-9f91-5a1d042301e2}"
              data-datasource-id="{6DFB3B88-2860-4F30-A121-2D9EF58187F0}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-warranties.svg?iar=0&mw=100&hash=BC7A14C43EF825203FF870225896D0C4"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard1Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard1Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard1Link}>
                      <Text field={fields.supportCard1LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{bb57cf9e-dbbc-43c5-b051-bb46273d7c9e}"
              data-datasource-id="{12566F94-8C32-4E77-A95C-58FB3D33E1C0}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-drivers-downloads.svg?iar=0&mw=100&hash=77CFE3A2BAAEAE83E372EBB7A254C0BD"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard2Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard2Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard2Link}>
                      <Text field={fields.supportCard2LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{d6c34eb0-448e-42f8-989b-f50aa5ebaa57}"
              data-datasource-id="{33DE76E9-89D3-488E-B5DE-7B4D73E905E5}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-service-programs.svg?iar=0&mw=100&hash=B3C685C264B5D62CC0A312551D23E807"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard3Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard3Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard3Link}>
                      <Text field={fields.supportCard3LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{3229bc9d-87a9-42ea-aba8-32f7292d375b}"
              data-datasource-id="{C53F5A58-914D-4B34-8185-634DEC7A2B69}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-consumables.svg?iar=0&mw=100&hash=C2858E85A933844A0913C42101D67E66"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard4Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard4Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard4Link}>
                      <Text field={fields.supportCard4LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{859101b0-2f4e-4c52-97bf-9308dd0485bc}"
              data-datasource-id="{D912C876-75C8-4A10-AC46-FF10152303D9}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-product-registration.svg?iar=0&mw=100&hash=4D302F89D4C4D66309FAED86D6CCB8B3"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard5Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard5Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard5Link}>
                      <Text field={fields.supportCard5LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-container"
              data-item-id="{A56368F0-A4DB-4010-B22E-36D074F335EA}"
              data-rendering-id="{b9cc1048-88d6-4fb4-a10a-ce40de13398f}"
              data-datasource-id="{77EE6AC4-1117-4DAA-A7EC-205DD8901C10}"
            >
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/sevices-icons/services-discontinued-scanners.svg?iar=0&mw=100&hash=8E469E2AA47F84361A93095F4FAE1DF0"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.supportCard6Title} />
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">
                        <Text field={fields.supportCard6Summary} />
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <Link field={fields.supportCard6Link}>
                      <Text field={fields.supportCard6LinkLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-deck standard arrow-cta items-per-row-fluid mb-0" data-show-more={0}>
        <div className="container">
          <div className="row">
            <div className="col">
              <a name="contact-information" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2>
                    <Text field={fields.contactHeading} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center main-content">
            <div className="card-col card-container contact-card-container">
              <div className="card contact-card">
                <div className="card-body">
                  <h3>
                    <Text field={fields.contact1Title} />
                  </h3>
                  <div>
                    <ul>
                      <li className="phone">
                        <Link field={fields.contact1PhoneLink}>
                          <Text field={fields.contact1Phone} />
                        </Link>
                      </li>
                      <li className="email">
                        <Link field={fields.contact1EmailLink}>
                          <Text field={fields.contact1Email} />
                        </Link>
                      </li>
                      <li className="link">
                        <Link field={fields.contact1ExtraLink}>
                          <Text field={fields.contact1ExtraLinkLabel} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-col card-container contact-card-container">
              <div className="card contact-card">
                <div className="card-body">
                  <h3>
                    <Text field={fields.contact2Title} />
                  </h3>
                  <div>
                    <ul>
                      <li className="phone">
                        <Link field={fields.contact2PhoneLink}>
                          <Text field={fields.contact2Phone} />
                        </Link>
                      </li>
                      <li className="email">
                        <Link field={fields.contact2EmailLink}>
                          <Text field={fields.contact2Email} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-col card-container contact-card-container">
              <div className="card contact-card">
                <div className="card-body">
                  <h3>
                    <Text field={fields.contact3Title} />
                  </h3>
                  <div>
                    <ul>
                      <li className="phone">
                        <Link field={fields.contact3PhoneLink}>
                          <Text field={fields.contact3Phone} />
                        </Link>
                      </li>
                      <li className="email">
                        <Link field={fields.contact3EmailLink}>
                          <Text field={fields.contact3Email} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-deck services-deck orientation-center items-per-row-3 mb-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="deck-header">
                <a name="find-the-right-service-program-for-you" className="anchor" />
                <h2>
                  <Text field={fields.serviceDeckHeading} />
                </h2>
                <p>
                  <Text field={fields.serviceDeckParagraph} />
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="row deck-row">
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <Link field={fields.service1LearnMoreLink}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-advance-exchange.jpg?h=864&iar=0&w=1472&hash=DD0C4B0AC019768579AA25CB21AD5068"
                        alt=""
                        width={1472}
                        height={864}
                      />
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.service1Title} />
                    </h3>
                    <h4>
                      <Text field={fields.service1SubTitle} />
                    </h4>
                    <div className="body-wrapper">
                      <p>
                        <Text field={fields.service1Description} />
                      </p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <Link
                      field={fields.service1LearnMoreLink}
                      className="btn btn-primary"
                      title={fields.service1LearnMoreLabel.value}
                    >
                      <Text field={fields.service1LearnMoreLabel} />
                    </Link>
                    <Link
                      field={fields.service1BuyServiceLink}
                      className="cta"
                      rel="noopener noreferrer"
                      target="_blank"
                      title={fields.service1BuyServiceLabel.value}
                    >
                      <Text field={fields.service1BuyServiceLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <Link field={fields.service2LearnMoreLink}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-depot-mail-in-service.jpg?h=864&iar=0&w=1472&hash=FF18A7E306CCD661833A855EF96AD026"
                        alt=""
                        width={1472}
                        height={864}
                      />
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.service2Title} />
                    </h3>
                    <h4>
                      <Text field={fields.service2SubTitle} />
                    </h4>
                    <div className="body-wrapper">
                      <p>
                        <Text field={fields.service2Description} />
                      </p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <Link
                      field={fields.service2LearnMoreLink}
                      className="btn btn-primary"
                      title={fields.service2LearnMoreLabel.value}
                    >
                      <Text field={fields.service2LearnMoreLabel} />
                    </Link>
                    <Link
                      field={fields.service2BuyServiceLink}
                      className="cta"
                      rel="noopener noreferrer"
                      target="_blank"
                      title={fields.service2BuyServiceLabel.value}
                    >
                      <Text field={fields.service2BuyServiceLabel} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-deck-col">
              <div className="card with-link">
                <div className="card-img-top">
                  <Link field={fields.service3LearnMoreLink}>
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/services/card-images/service-basic-onsite-service.jpg?h=864&iar=0&w=1472&hash=5F8CC755891DBF2813E05A52C160605B"
                        alt=""
                        width={1472}
                        height={864}
                      />
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <Text field={fields.service3Title} />
                    </h3>
                    <h4>
                      <Text field={fields.service3SubTitle} />
                    </h4>
                    <div className="body-wrapper">
                      <p>
                        <Text field={fields.service3Description} />
                      </p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <Link
                      field={fields.service3LearnMoreLink}
                      className="btn btn-primary"
                      title={fields.service3LearnMoreLabel.value}
                    >
                      <Text field={fields.service3LearnMoreLabel} />
                    </Link>
                    <Link
                      field={fields.service3BuyServiceLink}
                      className="cta"
                      rel="noopener noreferrer"
                      target="_blank"
                      title={fields.service3BuyServiceLabel.value}
                    >
                      <Text field={fields.service3BuyServiceLabel} />
                    </Link>
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

export default Support;
