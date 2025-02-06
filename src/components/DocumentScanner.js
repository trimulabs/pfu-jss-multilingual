/* eslint-disable react/react-in-jsx-scope */
import '../assets/DocumentScanner.css';

const DocumentScanner = (props) => {
  const { fields } = props;
  const showingProductsLabel = fields.showingXProductsLabel?.value.replace('{0}', '27');

  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>{fields.pageTitle?.value}</h1>
      </div>

      <section
        className="callout-deck background-color-off-white alignment-center mb-0 pb-0 card-grid"
        data-show-more={0}
      >
        <div className="container">
          <a name="parcourez-notre-gamme-complete-de-numeriseurs" className="anchor" />
          <div className="deck-header">
            <div className="deck-header-body">
              <h2>{fields.sectionHeading?.value}</h2>
              <p>{fields.sectionDescription?.value}</p>
            </div>
          </div>

          <div className="card-deck justify-content-center main-content">
            <div className="card-container">
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8170/fi-8170_front.jpg?h=76&iar=0&mw=100&w=100&hash=3248BFA54681272192CCEA88B0F5E06F"
                      alt=""
                      width={100}
                      height={76}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <span className="h4-primary color-primary-50">
                        {fields.cardRICOHTitle?.value}
                      </span>
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardRICOHSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="btn btn-primary reverse" href="#">
                      {fields.cardRICOHButton?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-ix1600/ix1600_front.jpg?h=76&iar=0&mw=100&w=100&hash=F4451E88F03CDC8FC3CE3B4ED507B37F"
                      alt=""
                      width={100}
                      height={76}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">
                      <span className="h4-secondary color-secondary-50">
                        {fields.cardScanSnapTitle?.value}
                      </span>
                    </h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardScanSnapSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="btn btn-secondary reverse" href="#">
                      {fields.cardScanSnapButton?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="filtered-product-guide">
        <form action="javascript:void(0);" autoComplete="off">
          <div className="container">
            <div className="row">
              <div className="col-md-3 filter-container">
                <h2 className="filter-heading">{fields.filtersHeading?.value}</h2>
                <button className="btn filter-reset" disabled="disabled">
                  {fields.resetAllButton?.value}
                </button>
              </div>

              <div className="col-md-3">
                <h4>{showingProductsLabel}</h4>
              </div>

              <div className="col-md-6 filters-search">
                <a
                  className="btn btn-sm btn-primary filter-toggle"
                  data-toggle="collapse"
                  href="#filterShowToggle"
                  role="button"
                  aria-expanded="false"
                  aria-controls="filterShowToggle"
                >
                  <img
                    src="https://www.pfu-ca.ricoh.com/Themes/scanners-pci/images/icons/filter-icon-red.svg"
                    alt="Filter"
                  />
                  {fields.filtersHeading?.value}
                </a>
                <input
                  type="search"
                  name="search"
                  placeholder={fields.searchPlaceholder?.value}
                  className="ui-autocomplete-input"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 filters collapse" id="filterShowToggle">
                <fieldset className="filters-family">
                  <legend
                    data-toggle="collapse"
                    data-target="#collapseFamilyFilter"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseFamilyFilter"
                  >
                    {fields.familyLegend?.value}
                  </legend>
                  <ul className="collapse show" id="collapseFamilyFilter">
                    <li>
                      <input
                        type="checkbox"
                        id="family-fi-series"
                        name="family"
                        defaultValue="fi-series"
                      />
                      <label htmlFor="family-fi-series" className="icon-product-tag-fi-series">
                        Série fi
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="family-scansnap-series"
                        name="family"
                        defaultValue="scansnap-series"
                      />
                      <label
                        htmlFor="family-scansnap-series"
                        className="icon-product-tag-scansnap-series"
                      >
                        Série ScanSnap
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="family-sp-series"
                        name="family"
                        defaultValue="sp-series"
                      />
                      <label htmlFor="family-sp-series" className="icon-product-tag-sp-series">
                        Série SP
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <fieldset className="filters-type">
                  <legend
                    data-toggle="collapse"
                    data-target="#collapseTypeFilter"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseTypeFilter"
                  >
                    {fields.typeLegend?.value}
                  </legend>
                  <ul className="collapse show" id="collapseTypeFilter">
                    <li>
                      <input type="checkbox" id="tag-desktop" name="tag" defaultValue="desktop" />
                      <label htmlFor="tag-desktop" className="icon-product-tag-desktop">
                        Ordinateur de bureau
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="tag-entry-level"
                        name="tag"
                        defaultValue="entry-level"
                      />
                      <label htmlFor="tag-entry-level" className="icon-product-tag-entry-level">
                        Niveau d’entrée
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="tag-network" name="tag" defaultValue="network" />
                      <label htmlFor="tag-network" className="icon-product-tag-network">
                        Réseau
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="tag-personal" name="tag" defaultValue="personal" />
                      <label htmlFor="tag-personal" className="icon-product-tag-personal">
                        Personnel
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="tag-production"
                        name="tag"
                        defaultValue="production"
                      />
                      <label htmlFor="tag-production" className="icon-product-tag-production">
                        Production
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="tag-small-business"
                        name="tag"
                        defaultValue="small-business"
                      />
                      <label
                        htmlFor="tag-small-business"
                        className="icon-product-tag-small-business"
                      >
                        Petites entreprises
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <fieldset className="filters-feature">
                  <legend
                    data-toggle="collapse"
                    data-target="#collapseFeatureFilter"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseFeatureFilter"
                  >
                    {fields.featuresLegend?.value}
                  </legend>
                  <ul className="collapse show" id="collapseFeatureFilter">
                    <li>
                      <input
                        type="checkbox"
                        id="feature-cloud"
                        name="feature"
                        defaultValue="cloud"
                      />
                      <label htmlFor="feature-cloud" className="icon-product-tag-cloud">
                        Nuage
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-compact"
                        name="feature"
                        defaultValue="compact"
                      />
                      <label htmlFor="feature-compact" className="icon-product-tag-compact">
                        Compact
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-double-letter"
                        name="feature"
                        defaultValue="double-letter"
                      />
                      <label
                        htmlFor="feature-double-letter"
                        className="icon-product-tag-double-letter"
                      >
                        Double lettre
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-flatbed"
                        name="feature"
                        defaultValue="flatbed"
                      />
                      <label htmlFor="feature-flatbed" className="icon-product-tag-flatbed">
                        À plat
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-mobile"
                        name="feature"
                        defaultValue="mobile"
                      />
                      <label htmlFor="feature-mobile" className="icon-product-tag-mobile">
                        Mobile
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-network-interface"
                        name="feature"
                        defaultValue="network-interface"
                      />
                      <label
                        htmlFor="feature-network-interface"
                        className="icon-product-tag-network-interface"
                      >
                        Interface réseau
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-nfc-reader"
                        name="feature"
                        defaultValue="nfc-reader"
                      />
                      <label htmlFor="feature-nfc-reader" className="icon-product-tag-nfc-reader">
                        Lecteur NFC
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-overhead"
                        name="feature"
                        defaultValue="overhead"
                      />
                      <label htmlFor="feature-overhead" className="icon-product-tag-overhead">
                        En hauteur
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-photo-scanning"
                        name="feature"
                        defaultValue="photo-scanning"
                      />
                      <label
                        htmlFor="feature-photo-scanning"
                        className="icon-product-tag-photo-scanning"
                      >
                        Numérisation de photos
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-receipt-scanning"
                        name="feature"
                        defaultValue="receipt-scanning"
                      />
                      <label
                        htmlFor="feature-receipt-scanning"
                        className="icon-product-tag-receipt-scanning"
                      >
                        Numérisation de reçus
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-software-bundle"
                        name="feature"
                        defaultValue="software-bundle"
                      />
                      <label
                        htmlFor="feature-software-bundle"
                        className="icon-product-tag-software-bundle"
                      >
                        Suite logicielle
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-touch-screen"
                        name="feature"
                        defaultValue="touch-screen"
                      />
                      <label
                        htmlFor="feature-touch-screen"
                        className="icon-product-tag-touch-screen"
                      >
                        Écran tactile
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-trade-compliant"
                        name="feature"
                        defaultValue="trade-compliant"
                      />
                      <label
                        htmlFor="feature-trade-compliant"
                        className="icon-product-tag-trade-compliant"
                      >
                        Conforme aux normes commerciales
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="feature-wireless"
                        name="feature"
                        defaultValue="wireless"
                      />
                      <label htmlFor="feature-wireless" className="icon-product-tag-wireless">
                        Sans fil
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </div>

              {/* PRODUCT LISTING (kept static for demonstration) */}
              <div className="col-md-9 products">
                <div className="row">
                  <div
                    className="col-12 col-sm-6 col-lg-4 product-card-wrapper"
                    data-product="ScanSnap iX1600"
                  >
                    <article className="product-card card with-link">
                      <a
                        href="/fr/scanners/scansnap/ix1600"
                        aria-label="Learn More About ScanSnap® iX1600"
                        title="Learn More About ScanSnap® iX1600"
                      >
                        <div className="card-img-top">
                          <div className="img-container">
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-ix1600/ricohscansnapcardix1600white1xsmallshadow.jpg?mw=528&hash=B4FF134FCDDFC1567F5092C9B0360B4F"
                              alt="Photo of ScanSnap® iX1600"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="card-body-headings">
                            <h3 className="card-title">ScanSnap® iX1600</h3>
                            <div className="body-wrapper">
                              Numériseur polyvalent compatible avec le nuage
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <span className="cta">
                              En savoir plus
                              <span className="sr-only">À propos ScanSnap® iX1600</span>
                            </span>
                          </div>
                        </div>
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default DocumentScanner;
