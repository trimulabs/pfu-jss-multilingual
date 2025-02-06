/* eslint-disable react/react-in-jsx-scope */
import '../assets/Homepage.css';

const Homepage = ({ fields }) => {
  return (
    <main role="main" id="mainContent">
      <div className="sr-only page-title-visibly-hidden">
        <h1>{fields.pageTitle?.value}</h1>
      </div>
      <section className="hero-animation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 hero hero-animation-copy">
              <div className="promo-header">
                <a name="favoriser-la-numerisation-grace-a-linnovation" className="anchor" />
                <h2>{fields.heroHeading?.value}</h2>
                <h3>{fields.heroSubheading?.value}</h3>
              </div>
              <div className="cta-wrapper">
                <a className="btn btn-primary reverse" href={fields.heroCtaLink?.value}>
                  {fields.heroCtaLabel?.value}
                </a>
              </div>
            </div>
            <div className="col-md-6 hero-animation-slides">
              <section data-animation-scene={1} className="animation-scene theme-primary">
                <div className="animation-row-1">
                  <div
                    className="lifestyle-1-wrap"
                    style={{
                      transform: 'translate(770px, 0px)',
                    }}
                  >
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/new/ricohhomefiseriesfi81702x.jpg?h=574&iar=0&w=1390&hash=91C4198D2BF79FA3C129433C9486A280"
                      className="lifestyle-1"
                      alt=""
                      width={1390}
                      height={574}
                    />
                  </div>
                  <div
                    className="product-2-wrap"
                    style={{
                      transform: 'translate(0px, -287px)',
                    }}
                  >
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/product-2.png?h=574&iar=0&w=968&hash=4E1CC4654C839AC941BF1E44044020DE"
                      className="product-2"
                      alt=""
                      width={968}
                      height={574}
                    />
                  </div>
                  <div
                    className="product-2-bg blue-light theme-secondary"
                    style={{
                      transform: 'translate(0px, -574px)',
                    }}
                  />
                  <div className="lifestyle-3-wrap">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/new/scansnap_sv600_7q1a3433-copy_1.jpg?h=574&iar=0&w=1000&hash=3D72B06661CCD23B81B83668461D753D"
                      className="lifestyle-3"
                      alt=""
                      width={1000}
                      height={574}
                    />
                  </div>
                  <div className="lifestyle-3-bg grey-light theme-default" />
                </div>

                <div className="animation-row-2">
                  <div
                    className="product-1-wrap"
                    style={{
                      transform: 'translate(-770px, 0px)',
                    }}
                  >
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/new/ricohhomecarouselfi81701x.png?h=706&iar=0&w=906&hash=5379F1CB02EFF5971561FA1182F6B4F3"
                      className="product-1"
                      alt=""
                      width={906}
                      height={706}
                    />
                  </div>
                  <div className="lifestyle-2-bg blue theme-secondary" style={{ right: '0px' }} />
                  <div
                    className="lifestyle-2-wrap"
                    style={{
                      transform: 'translate(192px, -353px)',
                    }}
                  >
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/new/scansnap_blackix1300_7q1a2915-copy_1.jpg?h=706&iar=0&w=956&hash=6E4AD235F7630CF3E8C7278DF8E44DC3"
                      className="lifestyle-2"
                      alt=""
                      width={956}
                      height={706}
                    />
                  </div>
                  <div className="product-3-wrap">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/hero-animation/product-3.png?h=728&iar=0&w=944&hash=703E805F11DE2F8584E330C8022DCC55"
                      className="product-3"
                      alt=""
                      width={944}
                      height={728}
                    />
                  </div>
                  <div className="product-3-bg grey theme-default" />
                  <div
                    className="scene-1-bg-small red-dark theme-primary"
                    style={{
                      transform: 'translate(-770px, -353px)',
                    }}
                  />
                </div>
                <div
                  className="scene-1-bg red theme-primary"
                  style={{
                    transform: 'translate(-770px, 0px)',
                  }}
                />
                <div
                  className="animated-text-1"
                  style={{
                    opacity: 0,
                    transform: 'translate(-770px, 0px)',
                  }}
                >
                  {fields.heroAnimatedText1?.value}
                </div>
                <div className="animated-text-2" style={{ opacity: '0.7' }}>
                  {fields.heroAnimatedText2?.value}
                </div>
                <div className="animated-text-3">{fields.heroAnimatedText3?.value}</div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className="dynamic-ph container">
        <div className="row">
          <div className="col-md-6">
            <section className="product-line-carousel">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="product-line-card">
                      <div className="content">
                        <div className="card-header">
                          <img
                            src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/fi-series-logo2x.png?h=200&iar=0&w=760&hash=DE00E49593565F3D59A59D4CF86B4EC8"
                            className="img-fluid logo"
                            alt=""
                            width={760}
                            height={200}
                          />
                          <p>{fields.fiCardSubtitle?.value}</p>
                        </div>
                        <div className="card-body">
                          <div className="category">
                            <h2>{fields.fiCategorySmallBusiness?.value}</h2>
                            <h2>{fields.fiCategoryEnterprise?.value}</h2>
                          </div>
                        </div>
                        <div className="cta-wrapper">
                          <a href={fields.fiCardCtaLink?.value}>{fields.fiCardCtaLabel?.value}</a>
                        </div>
                      </div>

                      <div className="slider slick-initialized slick-slider">
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: '7930px',
                              transform: 'translate3d(-610px, 0px, 0px)',
                            }}
                          >
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi79001x.png?mw=1024&hash=F41FB5BEDA13F199EFBD38145A9A9055"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={-1}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi7300nx1x.png?mw=1024&hash=B1B89FA00872EADAD449386819A09752"
                              alt=""
                              className="img-fluid slick-slide slick-current slick-active"
                              data-slick-index={0}
                              aria-hidden="false"
                              style={{ width: '610px' }}
                              tabIndex={0}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi800r1x.png?mw=1024&hash=80362A1C4AB13D31AD6746850AEFF3DD"
                              alt=""
                              className="img-fluid slick-slide"
                              data-slick-index={1}
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi81701x.png?mw=1024&hash=13BAD629998E4A2D3AB5D9581F74E664"
                              alt=""
                              className="img-fluid slick-slide"
                              data-slick-index={2}
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi82701x.png?mw=1024&hash=90A0186A195E45DE8EF1862B40D3D649"
                              alt=""
                              className="img-fluid slick-slide"
                              data-slick-index={3}
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi76001x.png?mw=1024&hash=B327D858464A49BEAF9131C18418854E"
                              alt=""
                              className="img-fluid slick-slide"
                              data-slick-index={4}
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi79001x.png?mw=1024&hash=F41FB5BEDA13F199EFBD38145A9A9055"
                              alt=""
                              className="img-fluid slick-slide"
                              data-slick-index={5}
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi7300nx1x.png?mw=1024&hash=B1B89FA00872EADAD449386819A09752"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={6}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi800r1x.png?mw=1024&hash=80362A1C4AB13D31AD6746850AEFF3DD"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={7}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi81701x.png?mw=1024&hash=13BAD629998E4A2D3AB5D9581F74E664"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={8}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi82701x.png?mw=1024&hash=90A0186A195E45DE8EF1862B40D3D649"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={9}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi76001x.png?mw=1024&hash=B327D858464A49BEAF9131C18418854E"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={10}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                            <img
                              src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderfi79001x.png?mw=1024&hash=F41FB5BEDA13F199EFBD38145A9A9055"
                              alt=""
                              className="img-fluid slick-slide slick-cloned"
                              data-slick-index={11}
                              id
                              aria-hidden="true"
                              style={{ width: '610px' }}
                              tabIndex={-1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-md-6">
            <section className="product-line-carousel theme-secondary">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="product-line-card">
                      <div className="content">
                        <div className="card-header">
                          <img
                            src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/promos/scansnap-logo2x.png?h=200&iar=0&w=760&hash=40C89DA96043F8335C9B24E50649B382"
                            className="img-fluid logo"
                            alt=""
                            width={760}
                            height={200}
                          />
                          <p>{fields.scanSnapCardSubtitle?.value}</p>
                        </div>
                        <div className="card-body">
                          <div className="category">
                            <h2>{fields.scanSnapCategoryPersonal?.value}</h2>
                            <h2>{fields.scanSnapCategorySmallBusiness?.value}</h2>
                          </div>
                        </div>
                        <div className="cta-wrapper">
                          <a href={fields.scanSnapCardCtaLink?.value}>
                            {fields.scanSnapCardCtaLabel?.value}
                          </a>
                        </div>
                      </div>

                      <div className="slider slick-initialized slick-slider">
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: '5490px',
                              transform: 'translate3d(-610px, 0px, 0px)',
                            }}
                          >
                            <div>
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderix14001x.png?mw=1024&hash=95CA8CBCE9816843B16272E34BFD9806"
                                alt=""
                                className="img-fluid slick-slide slick-cloned"
                                data-slick-index={-1}
                                id
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/scansnap_ix1300-front_slide.png?mw=1024&hash=EBD85B67F683B68ADB508737DE759101"
                                alt=""
                                className="img-fluid slick-slide slick-current slick-active"
                                data-slick-index={0}
                                aria-hidden="false"
                                style={{ width: '610px' }}
                                tabIndex={0}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/scansnap_ix100-front_slide.png?mw=1024&hash=FE63E9BED220BEAF327987E795D0CD41"
                                alt=""
                                className="img-fluid slick-slide"
                                data-slick-index={1}
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderix1600white1x.png?mw=1024&hash=493EAC074CB73D01A03AAEC32D6F9F03"
                                alt=""
                                className="img-fluid slick-slide"
                                data-slick-index={2}
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderix14001x.png?mw=1024&hash=95CA8CBCE9816843B16272E34BFD9806"
                                alt=""
                                className="img-fluid slick-slide"
                                data-slick-index={3}
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/scansnap_ix1300-front_slide.png?mw=1024&hash=EBD85B67F683B68ADB508737DE759101"
                                alt=""
                                className="img-fluid slick-slide slick-cloned"
                                data-slick-index={4}
                                id
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/scansnap_ix100-front_slide.png?mw=1024&hash=FE63E9BED220BEAF327987E795D0CD41"
                                alt=""
                                className="img-fluid slick-slide slick-cloned"
                                data-slick-index={5}
                                id
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderix1600white1x.png?mw=1024&hash=493EAC074CB73D01A03AAEC32D6F9F03"
                                alt=""
                                className="img-fluid slick-slide slick-cloned"
                                data-slick-index={6}
                                id
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                              <img
                                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/carousel/ricohhomesliderix14001x.png?mw=1024&hash=95CA8CBCE9816843B16272E34BFD9806"
                                alt=""
                                className="img-fluid slick-slide slick-cloned"
                                data-slick-index={7}
                                id
                                aria-hidden="true"
                                style={{ width: '610px' }}
                                tabIndex={-1}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section
        className="callout-deck background-color-white alignment-center benefits with-background-image"
        data-show-more={0}
      >
        <div className="container">
          <a name="trouvez-le-numeriseur-qui-vous-convient" className="anchor" />
          <div className="image-container">
            <picture>
              <source
                media="(max-width: 576px)"
                srcSet="/-/media/project/scanners-pci/home/home-scanners-background_sm.jpg?h=576&w=752&hash=1FF0BCDB775C870CD3FF99722E2A3F58"
              />
              <img
                src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/home-scanners-background_lg.jpg?h=3508&w=2880&hash=88F30B8AC5D2A1AF23F233162CF52D74"
                alt=""
              />
            </picture>
          </div>

          <div className="deck-header">
            <div className="deck-header-body">
              <h2 className="deck-header-title">{fields.calloutDeckHeading?.value}</h2>
              <p>{fields.calloutDeckSubheading?.value}</p>
            </div>
          </div>

          <div className="card-deck justify-content-center main-content">
            <div className="card-container">
              <div className="card has-image with-link">
                <div className="card-image-top">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_desktop-scanners_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardDesktopTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardDesktopSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardDesktopLink?.value}>
                      {fields.cardDesktopCta?.value}
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
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_personal-scanners_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardPersonalTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardPersonalSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardPersonalLink?.value}>
                      {fields.cardPersonalCta?.value}
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
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_network-scanners_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardNetworkTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardNetworkSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardNetworkLink?.value}>
                      {fields.cardNetworkCta?.value}
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
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_cloud-scanners_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardCloudTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardCloudSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardCloudLink?.value}>
                      {fields.cardCloudCta?.value}
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
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_production-scanners_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardProductionTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardProductionSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardProductionLink?.value}>
                      {fields.cardProductionCta?.value}
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
                      src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/icons/icon_browse-all_dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h3 className="card-title">{fields.cardBrowseAllTitle?.value}</h3>
                    <div className="card-text-container">
                      <p className="card-summary">{fields.cardBrowseAllSummary?.value}</p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a className="cta" href={fields.cardBrowseAllLink?.value}>
                      {fields.cardBrowseAllCta?.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-deck floating left">
        <div className="container">
          <div className="floating-deck-container">
            <div className="floating-deck-image">
              <picture>
                <source
                  media="(max-width: 576px)"
                  srcSet="/-/media/project/scanners-pci/home/home-technologies-background_sm.jpg?h=576&w=752&hash=8436FA582D09B315DE8B2EAD0133D00F"
                />
                <img
                  src="https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/home/home-technologies-background_lg.jpg?h=2264&w=2880&hash=FE6471C25FFEB6167B31847101E6825A"
                  alt=""
                />
              </picture>
            </div>
            <div className="floating-deck-content">
              <div className="deck-header">
                <div className="deck-header-body">
                  <a name="ameliorez-votre-flux-de-travail-numerique" className="anchor" />
                  <h2 className="deck-header-title">{fields.improveWorkflowHeading?.value}</h2>
                </div>
              </div>

              <div className="deck-body">
                <div className="card-col promo-card no-image">
                  <div className="card with-link">
                    <a
                      href={fields.paperstreamLink?.value}
                      target
                      title={fields.paperstreamTitle?.value}
                      aria-label={fields.paperstreamTitle?.value}
                    >
                      <div className="card-body">
                        <div className="card-content">
                          <h3 className="card-title">{fields.paperstreamTitle?.value}</h3>
                          <div className="card-text">
                            <p>{fields.paperstreamDescription?.value}</p>
                          </div>
                        </div>
                        <div className="cta-wrapper">
                          <span className="cta">{fields.paperstreamCta?.value}</span>
                        </div>
                      </div>
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

export default Homepage;
