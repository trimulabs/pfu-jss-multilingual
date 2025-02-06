/* eslint-disable react/react-in-jsx-scope */
import '../assets/DocumentScanner.css';
import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DocumentScanner = (props) => {
  const { fields } = props;

  const categoryCards = fields.categoryCards
    ? fields.categoryCards.map((item) => ({
        title: item.fields.title.value,
        summary: item.fields.summary.value,
        linkLabel: item.fields.linkLabel.value,
        link: item.fields.link.value,
      }))
    : [];

  const filterFamilyOptions = fields.filterFamilyOptions
    ? fields.filterFamilyOptions.map((item) => item.fields.value.value)
    : [];

  const filterTypeOptions = fields.filterTypeOptions
    ? fields.filterTypeOptions.map((item) => item.fields.value.value)
    : [];

  const filterFeatureOptions = fields.filterFeatureOptions
    ? fields.filterFeatureOptions.map((item) => item.fields.value.value)
    : [];

  const productCards = fields.productCards
    ? fields.productCards.map((item) => ({
        title: item.fields.title.value,
        description: item.fields.description.value,
        cta: item.fields.cta.value,
        srOnly: item.fields.srOnly.value,
        imageUrl: item.fields.imageUrl.value,
      }))
    : [];

  return (
    <main role="main" id="mainContent">
      <a id="top" className="anchor" />
      <div className="sr-only page-title-visibly-hidden">
        <h1>
          <Text field={fields.pageTitle} />
        </h1>
      </div>
      <section
        className="callout-deck background-color-off-white alignment-center mb-0 pb-0 card-grid"
        data-show-more={0}
      >
        <div className="container">
          <a name="parcourez-notre-gamme-complete-de-numeriseurs" className="anchor" />
          <div className="deck-header">
            <div className="deck-header-body">
              <h2>
                <Text field={fields.deckHeaderHeading} />
              </h2>
              <p>
                <Text field={fields.deckHeaderParagraph} />
              </p>
            </div>
          </div>
          <div className="card-deck justify-content-center main-content">
            {categoryCards.map((card, index) => (
              <div key={index} className="card-container">
                <div className="card has-image with-link">
                  <div className="card-image-top">
                    <div className="img-container">
                      <img
                        src={
                          index === 0
                            ? 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/fi-8170/fi-8170_front.jpg?h=76&iar=0&mw=100&w=100&hash=3248BFA54681272192CCEA88B0F5E06F'
                            : 'https://www.pfu-ca.ricoh.com/-/media/project/scanners-pci/products/scansnap-ix1600/ix1600_front.jpg?h=76&iar=0&mw=100&w=100&hash=F4451E88F03CDC8FC3CE3B4ED507B37F'
                        }
                        alt=""
                        width={100}
                        height={76}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">
                        <span
                          className={
                            index === 0
                              ? 'h4-primary color-primary-50'
                              : 'h4-secondary color-secondary-50'
                          }
                        >
                          {card.title}
                        </span>
                      </h3>
                      <div className="card-text-container">
                        <p className="card-summary">{card.summary}</p>
                      </div>
                    </div>
                    <div className="card-link">
                      <a
                        className={
                          index === 0 ? 'btn btn-primary reverse' : 'btn btn-secondary reverse'
                        }
                        href={card.link}
                      >
                        {card.linkLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="filtered-product-guide">
        <form action="javascript:void(0);" autoComplete="off">
          <div className="container">
            <div className="row">
              <div className="col-md-3 filter-container">
                <h2 className="filter-heading">
                  <Text field={fields.filterHeading} />
                </h2>
                <button className="btn filter-reset">
                  <Text field={fields.filterResetButton} />
                </button>
              </div>
              <div className="col-md-3">
                <h4>
                  <Text field={fields.resultsCount} values={{ count: '27' }} />
                </h4>
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
                  <Text field={fields.filterToggleButton} />
                </a>
                <input
                  type="search"
                  name="search"
                  placeholder={fields.searchPlaceholder.value}
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
                    <Text field={fields.filterFamilyLegend} />
                  </legend>
                  <ul className="collapse show" id="collapseFamilyFilter">
                    {filterFamilyOptions.map((option, idx) => (
                      <li key={idx}>
                        <input
                          type="checkbox"
                          id={`family-option-${idx}`}
                          name="family"
                          value={option}
                          style={{ marginRight: '3px', cursor: 'pointer' }}
                        />
                        <label htmlFor={`family-option-${idx}`}>{option}</label>
                      </li>
                    ))}
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
                    <Text field={fields.filterTypeLegend} />
                  </legend>
                  <ul className="collapse show" id="collapseTypeFilter">
                    {filterTypeOptions.map((option, idx) => (
                      <li key={idx}>
                        <input
                          type="checkbox"
                          id={`type-option-${idx}`}
                          name="tag"
                          value={option}
                          style={{ marginRight: '3px', cursor: 'pointer' }}
                        />
                        <label htmlFor={`type-option-${idx}`}>{option}</label>
                      </li>
                    ))}
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
                    <Text field={fields.filterFeatureLegend} />
                  </legend>
                  <ul className="collapse show" id="collapseFeatureFilter">
                    {filterFeatureOptions.map((option, idx) => (
                      <li key={idx}>
                        <input
                          type="checkbox"
                          id={`feature-option-${idx}`}
                          name="feature"
                          value={option}
                          style={{ marginRight: '3px', cursor: 'pointer' }}
                        />
                        <label htmlFor={`feature-option-${idx}`}>{option}</label>
                      </li>
                    ))}
                  </ul>
                </fieldset>
              </div>
              <div className="col-md-9 products">
                <div className="row">
                  {productCards.map((product, idx) => (
                    <div key={idx} className="col-sm-6 col-lg-4 product-card-wrapper">
                      <article className="product-card card with-link">
                        <a href="#">
                          <div className="card-img-top">
                            <div className="img-container">
                              <img
                                src={product.imageUrl}
                                alt={`Photo of ${product.title}`}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="card-body-headings">
                              <h3 className="card-title">{product.title}</h3>
                              <div className="body-wrapper">{product.description}</div>
                            </div>
                            <div className="cta-wrapper">
                              <span className="cta">
                                {product.cta}
                                <span className="sr-only">{product.srOnly}</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </article>
                    </div>
                  ))}
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
