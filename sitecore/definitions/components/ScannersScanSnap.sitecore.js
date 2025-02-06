// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ScannersScanSnap component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'ScannersScanSnap',
    templateName: 'ScannersScanSnap',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'heroHeading', type: CommonFieldTypes.RichText },
      { name: 'heroBody', type: CommonFieldTypes.MultiLineText },
      { name: 'heroCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'heroCtaLink', type: CommonFieldTypes.GeneralLink },
      {
        name: 'heroProducts',
        type: 'ContentList',
        params: {
          itemTemplate: 'ScanSnap-heroProducts-Item',
          itemFields: [{ name: 'value', type: CommonFieldTypes.SingleLineText }],
        },
      },
      { name: 'heroProduct1Image', type: CommonFieldTypes.GeneralLink },
      { name: 'heroProduct1Label', type: CommonFieldTypes.SingleLineText },
      { name: 'heroProduct2Image', type: CommonFieldTypes.GeneralLink },
      { name: 'heroProduct2Label', type: CommonFieldTypes.SingleLineText },
      { name: 'heroProduct3Image', type: CommonFieldTypes.GeneralLink },
      { name: 'heroProduct3Label', type: CommonFieldTypes.SingleLineText },
      { name: 'heroProduct4Image', type: CommonFieldTypes.GeneralLink },
      { name: 'heroProduct4Label', type: CommonFieldTypes.SingleLineText },
      { name: 'subheadHeading', type: CommonFieldTypes.RichText },
      { name: 'subheadBody', type: CommonFieldTypes.MultiLineText },
      { name: 'stackImageUrl', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard1Title', type: CommonFieldTypes.RichText },
      { name: 'promoCard1Body', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard1Link', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard1CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'promoCard2Title', type: CommonFieldTypes.RichText },
      { name: 'promoCard2Body', type: CommonFieldTypes.MultiLineText },
      { name: 'promoCard2Link', type: CommonFieldTypes.GeneralLink },
      { name: 'promoCard2CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'stackFooterImageSm', type: CommonFieldTypes.GeneralLink },
      { name: 'stackFooterImageLg', type: CommonFieldTypes.GeneralLink },
      { name: 'subheadFeaturedTitle', type: CommonFieldTypes.RichText },
      { name: 'subheadFeaturedBody', type: CommonFieldTypes.MultiLineText },
      { name: 'productListHeading', type: CommonFieldTypes.RichText },
      { name: 'featuredPromo1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo1Heading', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo1Description', type: CommonFieldTypes.MultiLineText },
      { name: 'featuredPromo1CtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'featuredPromo1Link', type: CommonFieldTypes.GeneralLink },
      {
        name: 'productListItems',
        type: 'ContentList',
        params: {
          itemTemplate: 'ScannersScanSnap-productListItems-Item',
          itemFields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'description', type: CommonFieldTypes.MultiLineText },
            { name: 'imageUrl', type: CommonFieldTypes.GeneralLink },
            { name: 'srOnly', type: CommonFieldTypes.SingleLineText },
          ],
        },
      },
      { name: 'softwareGridImageSm', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareGridImageLg', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareGridHeading', type: CommonFieldTypes.RichText },
      { name: 'softwareGridBody', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemBody', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemLink', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareItemCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemTitle2', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemBody2', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemLink2', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareItemCtaLabel2', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemTitle3', type: CommonFieldTypes.SingleLineText },
      { name: 'softwareItemBody3', type: CommonFieldTypes.MultiLineText },
      { name: 'softwareItemLink3', type: CommonFieldTypes.GeneralLink },
      { name: 'softwareItemCtaLabel3', type: CommonFieldTypes.SingleLineText },
    ],
  });
}

