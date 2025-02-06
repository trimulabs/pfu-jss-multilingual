/* eslint-disable react/react-in-jsx-scope */
import '../assets/ScannersScanSnap.css';

const ScannersScanSnap = ({ fields }) => {
  const productListItems = fields.productListItems
    ? fields.productListItems.map((item) => ({
        title: item.fields.title.value,
        description: item.fields.description.value,
        srOnly: item.fields.srOnly.value,
        imageUrl: item.fields.imageUrl.value,
      }))
    : [];
  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>{fields.pageTitle?.value}</h1>
      </div>
      <section className="product-slideshow-hero theme-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="slideshow-copy">
                <div className="hero-header">
                  <a name="the-easy-one-touch-scanning-solution" className="anchor" />
                  <h2 dangerouslySetInnerHTML={{ __html: fields.heroHeading?.value }}></h2>
                </div>
                <div className="hero-body">
                  <div>
                    <p>{fields.heroBody?.value}</p>
                  </div>
                </div>
                <div className="hero-cta-wrapper">
                  <a className="btn btn-primary reverse" href={fields.heroCtaLink?.value}>
                    {fields.heroCtaLabel?.value}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="hero-slideshow">
                <div
                  className="hero-product hero-product-1"
                  style={{
                    opacity: 0,
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px, 0px)',
                  }}
                >
                  <img
                    src={fields.heroProduct1Image?.value}
                    alt={fields.heroProduct1Label?.value}
                    className="img-fluid product-1"
                  />
                  <span style={{ opacity: 1 }}>{fields.heroProduct1Label?.value}</span>
                </div>
                <div
                  className="hero-product hero-product-2"
                  style={{
                    opacity: 0,
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px, 0px)',
                  }}
                >
                  <img
                    src={fields.heroProduct2Image?.value}
                    alt={fields.heroProduct2Label?.value}
                    className="img-fluid product-2"
                  />
                  <span style={{ opacity: 1 }}>{fields.heroProduct2Label?.value}</span>
                </div>
                <div
                  className="hero-product hero-product-3"
                  style={{
                    opacity: 1,
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px, 0px)',
                  }}
                >
                  <img
                    src={fields.heroProduct3Image?.value}
                    alt={fields.heroProduct3Label?.value}
                    className="img-fluid product-3"
                  />
                  <span style={{ opacity: 1 }}>{fields.heroProduct3Label?.value}</span>
                </div>
                <div
                  className="hero-product hero-product-4"
                  style={{
                    opacity: 0,
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(200%, 0%)',
                  }}
                >
                  <img
                    src={fields.heroProduct4Image?.value}
                    alt={fields.heroProduct4Label?.value}
                    className="img-fluid product-4"
                  />
                  <span style={{ opacity: 0 }}>{fields.heroProduct4Label?.value}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subhead-content-block standard alignment-center theme-secondary">
        <a name="digitize-your-world-with-scansnap" className="anchor" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9">
              <a name="digitize-your-world-with-scansnap" className="anchor" />
              <h2 dangerouslySetInnerHTML={{ __html: fields.subheadHeading?.value }}></h2>
              <p>
                <span className="body-copy-primary-xl-medium">{fields.subheadBody?.value}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card-stack theme-secondary">
        <div className="container">
          <div className="row img-row">
            <div className="col img-col">
              <div className="stack-header">
                <picture>
                  <img src={fields.stackImageUrl?.value} alt="" className="img-fluid" />
                </picture>
              </div>
            </div>
          </div>
          <div className="row cards-row">
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.promoCard1Link?.value}
                  target=""
                  title={fields.promoCard1Title?.value}
                  aria-label={fields.promoCard1Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-ix1400/ricohscansnapforhomeix1400black1x.png?h=936&amp;iar=0&amp;mw=1200&amp;w=1152&amp;hash=BC1ADBE0FB58BBE7418F7838A255C2B2"
                        className="img-fluid"
                        alt=""
                        width="1152"
                        height="936"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: fields.promoCard1Title?.value }}
                      />
                      <div className="card-text">
                        <p>{fields.promoCard1Body?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta">{fields.promoCard1CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.promoCard2Link?.value}
                  target=""
                  title={fields.promoCard2Title?.value}
                  aria-label={fields.promoCard2Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-sv600/sv600-featured.jpg?h=365&amp;iar=0&amp;mw=1200&amp;w=472&amp;hash=61AB1131E77173EBB4833C0EC7AF4B6A"
                        className="img-fluid"
                        alt=""
                        width="472"
                        height="365"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: fields.promoCard2Title?.value }}
                      />
                      <div className="card-text">
                        <p>{fields.promoCard2Body?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta">{fields.promoCard2CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row img-row">
            <div className="col img-col">
              <div className="stack-footer">
                <picture>
                  <source media="(max-width: 576px)" srcSet={fields.stackFooterImageSm?.value} />
                  <img src={fields.stackFooterImageLg?.value} alt="" className="img-fluid" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subhead-content-block standard alignment-center mb-0 theme-secondary">
        <a name="featured-scansnap-scanners" className="anchor" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9">
              <a name="featured-scansnap-scanners" className="anchor" />
              <h2 dangerouslySetInnerHTML={{ __html: fields.subheadFeaturedTitle?.value }} />
              <p>
                <span className="body-copy-primary-xl-medium">
                  {fields.subheadFeaturedBody?.value}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="themed-container background-color-off-white theme-secondary">
        <section className="promo-text-and-image staggered layout-half orientation-right">
          <div className="container">
            <div className="row">
              <div className="text-col">
                <div className="content-container">
                  <a name="ix1600" className="anchor" />
                  <h2 className="heading-1 color-secondary-50">
                    {fields.featuredPromo1Title?.value}
                  </h2>
                  <h3 className="heading-2 color-primary">{fields.featuredPromo1Heading?.value}</h3>
                  <div className="body">
                    <p>{fields.featuredPromo1Description?.value}</p>
                  </div>
                  <div className="cta-container">
                    <a className="btn btn-primary" href={fields.featuredPromo1Link?.value}>
                      {fields.featuredPromo1CtaLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-col">
                <div className="img-container">
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-ix1600/ricohscansnapfeaturedix1600white1x.png?h=936&amp;iar=0&amp;mw=1200&amp;w=1152&amp;hash=8227D0A3FD35289288A37DB1F53A340F"
                    className="img-fluid"
                    alt=""
                    width="1152"
                    height="936"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="product-list card-deck items-per-row-4 theme-secondary">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="deck-header">
                <a name="our-entire-line-of-scansnap-scanners" className="anchor" />
                <h2 dangerouslySetInnerHTML={{ __html: fields.productListHeading?.value }} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center products">
            {productListItems.map((item, idx) => (
              <div key={idx} className="slide-col">
                <div className="card-col">
                  <article className="product-card card with-link">
                    <a
                      href="#"
                      aria-label={`Learn More About ${item.title}`}
                      title={`Learn More About ${item.title}`}
                    >
                      <div className="card-img-top">
                        <div className="img-container">
                          <img
                            src={item.imageUrl}
                            alt={`Photo of ${item.title}`}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="card-body-headings">
                          <h3 className="card-title">{item.title}</h3>
                          <div className="body-wrapper">{item.description}</div>
                        </div>
                        <div className="cta-wrapper">
                          <span className="cta">
                            {item.srOnly}
                            <span className="sr-only">{item.srOnly}</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="software-grid with-background-image">
        <div className="image-container">
          <picture>
            <source media="(max-width: 576px)" srcSet={fields.softwareGridImageSm?.value} />
            <img src={fields.softwareGridImageLg?.value} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="deck-header">
                <a name="user-friendly-software-for-all-your-scanning-needs" className="anchor" />
                <h2 dangerouslySetInnerHTML={{ __html: fields.softwareGridHeading?.value }} />
                <p>{fields.softwareGridBody?.value}</p>
              </div>
            </div>
          </div>
          <div className="row software-items">
            <div className="col-12 col-md-6">
              <h3 className="color-secondary-50">{fields.softwareItemTitle?.value}</h3>
              <div className="summary">
                <p>{fields.softwareItemBody?.value}</p>
              </div>
              <div className="cta-wrapper">
                <a href={fields.softwareItemLink?.value} className="color-secondary-50">
                  {fields.softwareItemCtaLabel?.value}
                  <span className="sr-only">About {fields.softwareItemTitle?.value}</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="color-secondary-50">{fields.softwareItemTitle2?.value}</h3>
              <div className="summary">
                <p>{fields.softwareItemBody2?.value}</p>
              </div>
              <div className="cta-wrapper">
                <a href={fields.softwareItemLink2?.value} className="color-secondary-50">
                  {fields.softwareItemCtaLabel2?.value}
                  <span className="sr-only">About {fields.softwareItemTitle2?.value}</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="color-secondary-50">{fields.softwareItemTitle3?.value}</h3>
              <div className="summary">
                <p>{fields.softwareItemBody3?.value}</p>
              </div>
              <div className="cta-wrapper">
                <a href={fields.softwareItemLink3?.value} className="color-secondary-50">
                  {fields.softwareItemCtaLabel3?.value}
                  <span className="sr-only">About {fields.softwareItemTitle3?.value}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScannersScanSnap;
