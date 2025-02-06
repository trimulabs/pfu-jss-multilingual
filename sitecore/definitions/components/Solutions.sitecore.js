// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Solutions component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Solutions',
    templateName: 'Solutions',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heroHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'heroParagraph', type: CommonFieldTypes.MultiLineText },
      { name: 'captureSolutionsHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'captureSolutionsSubHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'clickScanCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'clickScanCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'clickScanCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'clickScanCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'captureCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'captureCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'captureCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'captureCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'captureProCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'captureProCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'captureProCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'captureProCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'captureProPremiumCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'captureProPremiumCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'captureProPremiumCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'captureProPremiumCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'availabilityHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'availabilityFeature1', type: CommonFieldTypes.SingleLineText },
      { name: 'availabilityFeature2', type: CommonFieldTypes.SingleLineText },
      { name: 'availabilityFeature3', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamIpCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamIpCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'paperstreamIpCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamIpCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'scannerCentralAdminCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'scannerCentralAdminCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'scannerCentralAdminCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'scannerCentralAdminCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'nxManagerCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'nxManagerCardDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'nxManagerCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'nxManagerCardLink', type: CommonFieldTypes.GeneralLink },
      { name: 'gradientPromoHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'gradientPromoSubheading', type: CommonFieldTypes.MultiLineText },
      { name: 'gradientPromoButtonLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'gradientPromoButtonLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
