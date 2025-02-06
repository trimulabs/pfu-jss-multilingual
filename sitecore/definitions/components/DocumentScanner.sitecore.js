import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'DocumentScanner',
    templateName: 'DocumentScanner',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'pageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'deckHeaderHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'deckHeaderParagraph', type: CommonFieldTypes.MultiLineText },
      {
        name: 'categoryCards',
        type: 'ContentList',
        params: {
          itemTemplate: 'DocumentScanner-categoryCards-Item',
          itemFields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'summary', type: CommonFieldTypes.MultiLineText },
            { name: 'linkLabel', type: CommonFieldTypes.SingleLineText },
            { name: 'link', type: CommonFieldTypes.GeneralLink },
          ],
        },
      },
      { name: 'filterHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'filterResetButton', type: CommonFieldTypes.SingleLineText },
      { name: 'resultsCount', type: CommonFieldTypes.SingleLineText },
      { name: 'searchPlaceholder', type: CommonFieldTypes.SingleLineText },
      { name: 'filterToggleButton', type: CommonFieldTypes.SingleLineText },
      { name: 'filterFamilyLegend', type: CommonFieldTypes.SingleLineText },
      {
        name: 'filterFamilyOptions',
        type: 'ContentList',
        params: {
          itemTemplate: 'DocumentScanner-filterFamilyOptions-Item',
          itemFields: [{ name: 'value', type: CommonFieldTypes.SingleLineText }],
        },
      },
      { name: 'filterTypeLegend', type: CommonFieldTypes.SingleLineText },
      {
        name: 'filterTypeOptions',
        type: 'ContentList',
        params: {
          itemTemplate: 'DocumentScanner-filterTypeOptions-Item',
          itemFields: [{ name: 'value', type: CommonFieldTypes.SingleLineText }],
        },
      },
      { name: 'filterFeatureLegend', type: CommonFieldTypes.SingleLineText },
      {
        name: 'filterFeatureOptions',
        type: 'ContentList',
        params: {
          itemTemplate: 'DocumentScanner-filterFeatureOptions-Item',
          itemFields: [{ name: 'value', type: CommonFieldTypes.SingleLineText }],
        },
      },
      {
        name: 'productCards',
        type: 'ContentList',
        params: {
          itemTemplate: 'DocumentScanner-productCards-Item',
          itemFields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'description', type: CommonFieldTypes.MultiLineText },
            { name: 'cta', type: CommonFieldTypes.SingleLineText },
            { name: 'srOnly', type: CommonFieldTypes.SingleLineText },
            { name: 'imageUrl', type: CommonFieldTypes.SingleLineText },
          ],
        },
      },
    ],
  });
}

