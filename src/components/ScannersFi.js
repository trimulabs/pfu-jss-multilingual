/* eslint-disable react/react-in-jsx-scope */
import '../assets/ScannersFi.css';

const ScannersFi = ({ fields }) => {
  const heroProducts = fields.heroProducts
    ? fields.heroProducts.map((item) => item.fields.value.value)
    : [];
  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>{fields.pageTitle?.value}</h1>
      </div>
      <section className="product-slideshow-hero mb-0 theme-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="slideshow-copy">
                <div className="hero-header">
                  <a name="innovation-across-every-industry" className="anchor" />
                  <h2>{fields.heroHeading?.value}</h2>
                </div>
                <div className="hero-body">
                  <p>{fields.heroBody?.value}</p>
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
                {heroProducts.map((product, index) => (
                  <div
                    key={index}
                    className={`hero-product hero-product-${index + 1}`}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      transform: index === 0 ? 'translate(0px, 0px)' : 'translate(200%, 0%)',
                    }}
                  >
                    <img
                      src={
                        index === 0
                          ? 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-800r/ricohfiseriescarouselfi800r1x.png?mw=472&hash=A94919FBF3FB6EFFF417D791D150EB17'
                          : index === 1
                          ? 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-7300nx/ricohfiseriescarouselfi7300nx1x.png?mw=472&hash=45322590D3BBC101EDC3A055737940D3'
                          : index === 2
                          ? 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8170/ricohfiseriescarouselfi81701x.png?mw=472&hash=01946563C7F62FAD2B6B1DFF30C8A624'
                          : index === 3
                          ? 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-7600/ricohfiseriescarouselfi76001x.png?mw=472&hash=72E81111797055E62D191E65E5A5192D'
                          : ''
                      }
                      alt={product}
                      className={`img-fluid product-${index + 1}`}
                    />
                    <span style={{ opacity: index === 0 ? 1 : 0 }}>{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-hero mb-0">
        <div className="img-container">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-banner_sm.jpg?h=720&w=752&hash=D4A2FD164B78CC9A458C17B0B4752A39"
            />
            <img
              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-banner_lg.jpg?h=720&w=2880&hash=D4A2FD164B78CC9A458C17B0B4752A39"
              className="img-fluid"
              alt=""
            />
          </picture>
        </div>
      </section>
      <div className="themed-container background-color-off-white">
        <section className="promo-text-and-image staggered layout-half orientation-right">
          <div className="container">
            <div className="row">
              <div className="text-col">
                <div className="content-container">
                  <a name="fi-8170" className="anchor" />
                  <h2 className="heading-1">{fields.promo1Title?.value}</h2>
                  <h3 className="heading-2">{fields.promo1Heading?.value}</h3>
                  <div className="body">
                    <p>{fields.promo1Body?.value}</p>
                  </div>
                  <div className="cta-container">
                    <a className="btn btn-primary" href={fields.promo1CtaLink?.value}>
                      {fields.promo1CtaLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-col">
                <div className="img-container">
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8170/ricoh-fi-series-featured-fi-8170-rev_1x_1.png?h=936&mw=1152&w=1152&hash=5BA743AB5E71A54EAA171E03FDC98E5A"
                    className="img-fluid"
                    alt=""
                    width={1152}
                    height={936}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="promo-text-and-image staggered layout-half orientation-left">
          <div className="container">
            <div className="row">
              <div className="text-col">
                <div className="content-container">
                  <a name="fi-7300nx" className="anchor" />
                  <h2 className="heading-1">{fields.promo2Title?.value}</h2>
                  <h3 className="heading-2">{fields.promo2Heading?.value}</h3>
                  <div className="body">
                    <p>{fields.promo2Body?.value}</p>
                  </div>
                  <div className="cta-container">
                    <a className="btn btn-primary" href={fields.promo2CtaLink?.value}>
                      {fields.promo2CtaLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-col">
                <div className="img-container">
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-7300nx/ricohfiseriesfeaturedfi7300nx1x.png?h=936&mw=1152&w=1152&hash=8BC3B2343D71FD51F2FAF819C6A461B8"
                    className="img-fluid"
                    alt=""
                    width={1152}
                    height={936}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="promo-text-and-image staggered layout-half orientation-right">
          <div className="container">
            <div className="row">
              <div className="text-col">
                <div className="content-container">
                  <a name="fi-800r" className="anchor" />
                  <h2 className="heading-1">{fields.promo3Title?.value}</h2>
                  <h3 className="heading-2">{fields.promo3Heading?.value}</h3>
                  <div className="body">
                    <p>{fields.promo3Body?.value}</p>
                  </div>
                  <div className="cta-container">
                    <a className="btn btn-primary" href={fields.promo3CtaLink?.value}>
                      {fields.promo3CtaLabel?.value}
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-col">
                <div className="img-container">
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-800r/ricohfiseriesfeaturedfi800r1x.png?h=936&mw=1152&w=1152&hash=64B2CCE5F507D93CECA817879FEBD7DB"
                    className="img-fluid"
                    alt=""
                    width={1152}
                    height={936}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="card-stack">
        <div className="container">
          <div className="row img-row">
            <div className="col img-col">
              <div className="stack-header">
                <picture>
                  <source
                    media="(max-width: 576px)"
                    srcSet="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-stack-header_sm.jpg?h=400&w=752&hash=8C52273740A45CEA0280B9E7FBAE9E93"
                  />
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-stack-header_lg.jpg?h=1349&w=2880&hash=92BADD3F84AD9BE21FBA4B23A4CAE082"
                    alt=""
                    className="img-fluid"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="row cards-row">
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.promoCard1Link?.value}
                  target
                  title={fields.promoCard1Title?.value}
                  aria-label={fields.promoCard1Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8040/ricoh_fi-8040-fipage.png?h=384&mw=472&w=472&hash=1122935188A0C96E970871EBCD93DAF0"
                        className="img-fluid"
                        alt=""
                        width={472}
                        height={384}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.promoCard1Title?.value}</h3>
                      <div className="card-text">
                        <p>{fields.promoCard1Summary?.value}</p>
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
                  target
                  title={fields.promoCard2Title?.value}
                  aria-label={fields.promoCard2Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8170/ricoh-fi-series-desktopscanners_1x_1.png?h=936&mw=1152&w=1152&hash=3E8E4A6D6ED78A5DFEC29D9301029458"
                        className="img-fluid"
                        alt=""
                        width={1152}
                        height={936}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.promoCard2Title?.value}</h3>
                      <div className="card-text">
                        <p>{fields.promoCard2Summary?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta">{fields.promoCard2CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.promoCard3Link?.value}
                  target
                  title={fields.promoCard3Title?.value}
                  aria-label={fields.promoCard3Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-7900/ricoh-fi-series-productionscanners_1x_1.png?h=936&mw=1152&w=1152&hash=5EF57A9BD9F20AF856C3128023F8E920"
                        className="img-fluid"
                        alt=""
                        width={1152}
                        height={936}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.promoCard3Title?.value}</h3>
                      <div className="card-text">
                        <p>{fields.promoCard3Summary?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta">{fields.promoCard3CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.promoCard4Link?.value}
                  target
                  title={fields.promoCard4Title?.value}
                  aria-label={fields.promoCard4Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-7300nx/ricoh-fi-series-networkscanners_1x_1.png?h=936&mw=1152&w=1152&hash=CC7E3D1799DBC4B6AF1AA412E09943BB"
                        className="img-fluid"
                        alt=""
                        width={1152}
                        height={936}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.promoCard4Title?.value}</h3>
                      <div className="card-text">
                        <p>{fields.promoCard4Summary?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta">{fields.promoCard4CtaLabel?.value}</span>
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
                  <source
                    media="(max-width: 576px)"
                    srcSet="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-stack-footer_sm.jpg?h=400&w=752&hash=BAAE9D4F51E64D314499DD06CE994B10"
                  />
                  <img
                    src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-stack-footer_lg.jpg?h=1348&w=2880&hash=576F42F33581D35042D8D6C12E4782D2"
                    alt=""
                    className="img-fluid"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="card-deck background-color-off-white featured-card arrow-cta items-per-row-fluid theme-primary"
        data-show-more={0}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <a name="paperstream-nx-capture-platform" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2>{fields.featuredPromo2Title?.value}</h2>
                  <h3>{fields.featuredPromo2Heading?.value}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center main-content">
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.featuredPromo1Link?.value}
                  target
                  title={fields.featuredPromo1Title?.value}
                  aria-label={fields.featuredPromo1Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/promo-fi-7300nx-thumbnail1.jpg?h=520&amp;iar=0&amp;mw=1200&amp;w=624&amp;hash=9041C66C055D162DFEA4F07E4D843619"
                        className="img-fluid"
                        alt=""
                        width={624}
                        height={520}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.featuredPromo1Title?.value}</h3>
                      <div className="card-text">
                        <p>{fields.featuredPromo1Description?.value}</p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <span className="cta">{fields.featuredPromo1CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-col promo-card">
              <div className="card with-link">
                <a
                  href={fields.featuredPromo2Link?.value}
                  target
                  title={fields.featuredPromo2Title?.value}
                  aria-label={fields.featuredPromo2Title?.value}
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/promo-paperstream-nx-manager.jpg?h=520&mw=624&w=624&hash=37520A8145FD7FD1400FA74712559157"
                        className="img-fluid"
                        alt=""
                        width={624}
                        height={520}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">{fields.featuredPromo2Title?.value}</h3>
                    </div>
                    <div className="cta-wrapper">
                      <span className="cta">{fields.featuredPromo2CtaLabel?.value}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="software-grid with-background-image">
        <div className="image-container">
          <picture>
            <source
              media="(max-width: 576px)"
              srcSet="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-software-background_sm.jpg?h=400&w=752&hash=E5A55AF4A0E5ABA09A953F8D5DE6BFF2"
            />
            <img
              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fujitsu-scanners/fujitsu-scanners-software-background_lg.jpg?h=2800&w=2880&hash=DE7FB8AC36070D54844F0C3CCA535665"
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="deck-header">
                <a name="maximize-imaging-solutions-with-paperstream" className="anchor" />
                <h2>{fields.softwareGridHeading?.value}</h2>
                <p>{fields.softwareGridSubheading?.value}</p>
              </div>
            </div>
          </div>
          <div className="row software-items">
            <div className="col-12 col-md-6">
              <h3 className="title">{fields.softwareItemTitle?.value}</h3>
              <div className="summary">
                <p>{fields.softwareItemDescription?.value}</p>
              </div>
              <div className="cta-wrapper">
                <a href={fields.softwareItemLink?.value} className="cta">
                  {fields.softwareItemCtaLabel?.value}
                  <span className="sr-only">À propos {fields.softwareItemTitle?.value}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScannersFi;
