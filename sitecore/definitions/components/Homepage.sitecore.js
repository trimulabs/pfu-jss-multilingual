// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Homepage component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Homepage',
    templateName: 'Homepage',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heroHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'heroSubheading', type: CommonFieldTypes.SingleLineText },
      { name: 'heroCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'heroCtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'heroAnimatedText1', type: CommonFieldTypes.SingleLineText },
      { name: 'heroAnimatedText2', type: CommonFieldTypes.SingleLineText },
      { name: 'heroAnimatedText3', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCardSubtitle', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCategorySmallBusiness', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCategoryEnterprise', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'fiCardCtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'scanSnapCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'scanSnapCardSubtitle', type: CommonFieldTypes.SingleLineText },
      { name: 'scanSnapCategoryPersonal', type: CommonFieldTypes.SingleLineText },
      { name: 'scanSnapCategorySmallBusiness', type: CommonFieldTypes.SingleLineText },
      { name: 'scanSnapCardCtaLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'scanSnapCardCtaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'calloutDeckHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'calloutDeckSubheading', type: CommonFieldTypes.SingleLineText },
      { name: 'cardDesktopTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardDesktopSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardDesktopLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardDesktopCta', type: CommonFieldTypes.SingleLineText },
      { name: 'cardPersonalTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardPersonalSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardPersonalLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardPersonalCta', type: CommonFieldTypes.SingleLineText },
      { name: 'cardNetworkTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardNetworkSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardNetworkLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardNetworkCta', type: CommonFieldTypes.SingleLineText },
      { name: 'cardCloudTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardCloudSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardCloudLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardCloudCta', type: CommonFieldTypes.SingleLineText },
      { name: 'cardProductionTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardProductionSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardProductionLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardProductionCta', type: CommonFieldTypes.SingleLineText },
      { name: 'cardBrowseAllTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardBrowseAllSummary', type: CommonFieldTypes.SingleLineText },
      { name: 'cardBrowseAllLink', type: CommonFieldTypes.GeneralLink },
      { name: 'cardBrowseAllCta', type: CommonFieldTypes.SingleLineText },
      { name: 'improveWorkflowHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamDescription', type: CommonFieldTypes.SingleLineText },
      { name: 'paperstreamLink', type: CommonFieldTypes.GeneralLink },
      { name: 'paperstreamCta', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
