// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the DocumentScanner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'DocumentScanner',
    templateName: 'DocumentScanner',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'sectionHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'sectionDescription', type: CommonFieldTypes.MultiLineText },

      // Card 1 (RICOH)
      { name: 'cardRICOHTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardRICOHSummary', type: CommonFieldTypes.MultiLineText },
      { name: 'cardRICOHButton', type: CommonFieldTypes.SingleLineText },

      // Card 2 (ScanSnap)
      { name: 'cardScanSnapTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'cardScanSnapSummary', type: CommonFieldTypes.MultiLineText },
      { name: 'cardScanSnapButton', type: CommonFieldTypes.SingleLineText },

      // Filter UI
      { name: 'filtersHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'resetAllButton', type: CommonFieldTypes.SingleLineText },
      { name: 'showingXProductsLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'searchPlaceholder', type: CommonFieldTypes.SingleLineText },

      { name: 'familyLegend', type: CommonFieldTypes.SingleLineText },
      { name: 'typeLegend', type: CommonFieldTypes.SingleLineText },
      { name: 'featuresLegend', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
