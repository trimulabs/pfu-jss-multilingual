// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Services component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Services',
    templateName: 'Services',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'deckHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'deckParagraph', type: CommonFieldTypes.MultiLineText },
      { name: 'firstServiceImage', type: CommonFieldTypes.Image },
      { name: 'firstServiceImageAlt', type: CommonFieldTypes.SingleLineText },
      { name: 'firstServiceTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'firstServiceSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'firstServiceDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'firstServiceLearnMoreLink', type: CommonFieldTypes.GeneralLink },
      { name: 'firstServiceLearnMoreLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'firstServiceBuyServiceLink', type: CommonFieldTypes.GeneralLink },
      { name: 'firstServiceBuyServiceLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'secondServiceImage', type: CommonFieldTypes.Image },
      { name: 'secondServiceImageAlt', type: CommonFieldTypes.SingleLineText },
      { name: 'secondServiceTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'secondServiceSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'secondServiceDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'secondServiceLearnMoreLink', type: CommonFieldTypes.GeneralLink },
      { name: 'secondServiceLearnMoreLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'secondServiceBuyServiceLink', type: CommonFieldTypes.GeneralLink },
      { name: 'secondServiceBuyServiceLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'thirdServiceImage', type: CommonFieldTypes.Image },
      { name: 'thirdServiceImageAlt', type: CommonFieldTypes.SingleLineText },
      { name: 'thirdServiceTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'thirdServiceSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'thirdServiceDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'thirdServiceLearnMoreLink', type: CommonFieldTypes.GeneralLink },
      { name: 'thirdServiceLearnMoreLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'thirdServiceBuyServiceLink', type: CommonFieldTypes.GeneralLink },
      { name: 'thirdServiceBuyServiceLabel', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
