// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Support component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Support',
    templateName: 'Support',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'deckHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'deckSubHeading', type: CommonFieldTypes.MultiLineText },
      { name: 'card1Title', type: CommonFieldTypes.SingleLineText },
      { name: 'card1Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'card1LinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'card1Link', type: CommonFieldTypes.GeneralLink },
      { name: 'card2Title', type: CommonFieldTypes.SingleLineText },
      { name: 'card2Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'card2LinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'card2Link', type: CommonFieldTypes.GeneralLink },
      { name: 'card3Title', type: CommonFieldTypes.SingleLineText },
      { name: 'card3Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'card3LinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'card3Link', type: CommonFieldTypes.GeneralLink },
      { name: 'card4Title', type: CommonFieldTypes.SingleLineText },
      { name: 'card4Summary', type: CommonFieldTypes.MultiLineText },
      { name: 'card4LinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'card4Link', type: CommonFieldTypes.GeneralLink },
      { name: 'contactSectionHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'techSupportTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'techSupportPhone', type: CommonFieldTypes.SingleLineText },
      { name: 'techSupportEmail', type: CommonFieldTypes.SingleLineText },
      { name: 'techSupportLinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'techSupportLink', type: CommonFieldTypes.GeneralLink },
      { name: 'salesTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'salesPhone', type: CommonFieldTypes.SingleLineText },
      { name: 'salesEmail', type: CommonFieldTypes.SingleLineText },
      { name: 'serviceSalesTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'serviceSalesPhone', type: CommonFieldTypes.SingleLineText },
      { name: 'serviceSalesEmail', type: CommonFieldTypes.SingleLineText },
      { name: 'secondDeckHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'secondDeckParagraph', type: CommonFieldTypes.MultiLineText },
      { name: 'secondCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'secondCardSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'secondCardSummary', type: CommonFieldTypes.MultiLineText },
      { name: 'secondCardLinkLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'secondCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'secondCardBuyServiceLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'secondCardBuyServiceLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
