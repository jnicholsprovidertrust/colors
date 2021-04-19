<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container>
    <v-data-table
      :headers="headers"
      :items="colors"
      hide-default-footer
      disable-pagination
    >
      <template v-slot:item.color="{ item }">
        <v-chip :color="item.hex" label class="px-8 elevation-1"></v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import styles from "../../../src/pds/styles/pds-js-variables.scss";

export default {
  name: "Colors",
  data() {
    return {
      headers: [
        { text: "Color", value: "color", width: 100 },
        { text: "Name", value: "name" },
        { text: "HEX", value: "hex" },
        { text: "JS Variable", value: "jsVariable" },
        { text: "SASS Variable", value: "sassVariable" }
      ],
      colors: [
        {
          name: "PT Royal",
          hex: styles.colorPtRoyal,
          jsVariable: "colorPtRoyal",
          sassVariable: "$color-pt-royal"
        },
        {
          name: "PT Navy",
          hex: styles.colorPtNavy,
          jsVariable: "colorPtNavy",
          sassVariable: "$color-pt-navy"
        },
        {
          name: "Highlight Yellow",
          hex: styles.colorHighlightYellow,
          jsVariable: "colorHighlightYellow",
          sassVariable: "$color-highlight-yellow"
        },
        {
          name: "PT White",
          hex: styles.colorPtWhite,
          jsVariable: "colorPtWhite",
          sassVariable: "$color-pt-white"
        },
        {
          name: "UI Grey 0",
          hex: styles.colorUiGrey0,
          jsVariable: "colorUiGrey0",
          sassVariable: "$color-ui-grey-0"
        },
        {
          name: "UI Grey 10",
          hex: styles.colorUiGrey10,
          jsVariable: "colorUiGrey10",
          sassVariable: "$color-ui-grey-10"
        },
        {
          name: "UI Grey 30",
          hex: styles.colorUiGrey30,
          jsVariable: "colorUiGrey30",
          sassVariable: "$color-ui-grey-30"
        },
        {
          name: "UI Grey 50",
          hex: styles.colorUiGrey50,
          jsVariable: "colorUiGrey50",
          sassVariable: "$color-ui-grey-50"
        },
        {
          name: "UI Grey 70",
          hex: styles.colorUiGrey70,
          jsVariable: "colorUiGrey70",
          sassVariable: "$color-ui-grey-70"
        },
        {
          name: "UI Grey 90",
          hex: styles.colorUiGrey90,
          jsVariable: "colorUiGrey90",
          sassVariable: "$color-ui-grey-90"
        },
        {
          name: "PT Black",
          hex: styles.colorPtBlack,
          jsVariable: "colorPtBlack",
          sassVariable: "$color-pt-black"
        },
        {
          name: "Alert Green",
          hex: styles.colorAlertGreen,
          jsVariable: "colorAlertGreen",
          sassVariable: "$color-alert-green"
        },
        {
          name: "Alert Green LT",
          hex: styles.colorAlertGreenLt,
          jsVariable: "colorAlertGreenLt",
          sassVariable: "$color-alert-green-lt"
        },
        {
          name: "Alert Yellow",
          hex: styles.colorAlertYellow,
          jsVariable: "colorAlertYellow",
          sassVariable: "$color-alert-yellow"
        },
        {
          name: "Alert Yellow LT",
          hex: styles.colorAlertYellowLt,
          jsVariable: "colorAlertYellowLt",
          sassVariable: "$color-alert-yellow-lt"
        },
        {
          name: "Alert Red",
          hex: styles.colorAlertRed,
          jsVariable: "colorAlertRed",
          sassVariable: "$color-alert-red"
        },
        {
          name: "Alert Red LT",
          hex: styles.colorAlertRedLt,
          jsVariable: "colorAlertRedLt",
          sassVariable: "$color-alert-red-lt"
        },
        {
          name: "Alert Red XLT",
          hex: styles.colorAlertRedXlt,
          jsVariable: "colorAlertRedXlt",
          sassVariable: "$color-alert-red-xlt"
        },
        {
          name: "Alert Orange",
          hex: styles.colorAlertOrange,
          jsVariable: "colorAlertOrange",
          sassVariable: "$color-alert-orange"
        },
        {
          name: "VP Green",
          hex: styles.colorVpGreen,
          jsVariable: "colorVpGreen",
          sassVariable: "$color-vp-green"
        },
        {
          name: "VP Dark Green",
          hex: styles.colorVpDarkGreen,
          jsVariable: "colorVpDarkGreen",
          sassVariable: "$color-vp-dark-green"
        },
        {
          name: "VP Green 50",
          hex: styles.colorVpGreen50,
          jsVariable: "colorVpGreen50",
          sassVariable: "$color-vp-green-50"
        },
        {
          name: "VP Green 25",
          hex: styles.colorVpGreen25,
          jsVariable: "colorVpGreen25",
          sassVariable: "$color-vp-green-25"
        },
        {
          name: "PT Blue",
          hex: styles.colorPtBlue,
          jsVariable: "colorPtBlue",
          sassVariable: "$color-pt-blue"
        },
        {
          name: "PT Blue 50",
          hex: styles.colorPtBlue50,
          jsVariable: "colorPtBlue50",
          sassVariable: "$color-pt-blue-50"
        },
        {
          name: "PT Blue 25",
          hex: styles.colorPtBlue25,
          jsVariable: "colorPtBlue25",
          sassVariable: "$color-pt-blue-25"
        },
        {
          name: "Dash Purple",
          hex: styles.colorDashPurple,
          jsVariable: "colorDashPurple",
          sassVariable: "$color-dash-purple"
        },
        {
          name: "Dash Purple 50",
          hex: styles.colorDashPurple50,
          jsVariable: "colorDashPurple50",
          sassVariable: "$color-dash-purple-50"
        },
        {
          name: "Dash Purple 25",
          hex: styles.colorDashPurple25,
          jsVariable: "colorDashPurple25",
          sassVariable: "$color-dash-purple-25"
        },
        {
          name: "EC Orange",
          hex: styles.colorEcOrange,
          jsVariable: "colorEcOrange",
          sassVariable: "$color-ec-orange"
        },
        {
          name: "EC Orange 50",
          hex: styles.colorEcOrange50,
          jsVariable: "colorEcOrange50",
          sassVariable: "$color-ec-orange-50"
        },
        {
          name: "EC Orange 25",
          hex: styles.colorEcOrange25,
          jsVariable: "colorEcOrange25",
          sassVariable: "$color-ec-orange-25"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
}
</style>
