// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ScannersFi component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ScannersFi',
    templateName: 'ScannersFi',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'heroHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'heroBody', type: CommonFieldTypes.MultiLineText },
      { name: 'heroCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'heroCtaLink', type: CommonFieldTypes.GeneralLink },
      {
        name: 'heroProducts',
        type: 'ContentList',
        params: {
          itemTemplate: 'ScannersFi-heroProducts-Item',
          itemFields: [{ name: 'value', type: CommonFieldTypes.SingleLineText }],
        },
      },
      { name: 'promo1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promo1Heading', type: CommonFieldTypes.SingleLineText },
      { name: 'promo1Body', type: CommonFieldTypes.MultiLineText },
      { name: 'promo1CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promo1CtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'promo2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promo2Heading', type: CommonFieldTypes.SingleLineText },
      { name: 'promo2Body', type: CommonFieldTypes.MultiLineText },
      { name: 'promo2CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promo2CtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'promo3Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promo3Heading', type: CommonFieldTypes.SingleLineText },
      { name: 'promo3Body', type: CommonFieldTypes.MultiLineText },
      { name: 'promo3CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promo3CtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard1Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard1CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard1Link', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard2Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard2CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard2Link', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard3Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard3Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard3CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard3Link', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard4Title', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard4Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard4CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard4Link', type: CommonFieldTypes.GeneralLink },
      { name: 'featuredPromo1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo1Description', type: CommonFieldTypes.MultiLineText },
      { name: 'featuredPromo1CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo1Link', type: CommonFieldTypes.GeneralLink },
      { name: 'featuredPromo2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo2Heading', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo2CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo2Link', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareGridHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareGridSubheading', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}

