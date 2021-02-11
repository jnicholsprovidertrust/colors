# ProviderTrust Design System Colors
The **ProviderTrust Design System library** is a collection of variables and components 
that can be used in frontend projects at ProviderTrust to quickly put together UIs 
that adhere to the global design specification.

This **Colors** repository contains the shared ProviderTrust and product-specific colors.

## Demo
Navigate to the demo directory and run `yarn serve` to get a demo

## How to Use

### Copy into your Project
Until we figure out how to version and publish this, copy `pds` into your `src` directory

## Method 1: As SASS Variables
SASS variables can be used in your project by importing them into your variables.scss 
file as follows:
```
@import "@/pds/styles/pds-variables.scss";
```

Usage
```
.class
    color: $color-pt-royal
```

## Method 2: Import into Vuetify Theme

Add the following to your vuetify.js file to make the pds color variables available 
via the Vuetify theme. Then they can be used just like `primary`, `secondary`, etc...

Example:
```
import pdsVars from "@/pds/styles/pds-js-variables.scss";
...

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0A449F",
        secondary: "#dcdcdc",
        accent: "#82B1FF",
        error: "#FE285B",
        info: "#2196F3",
        success: "#24BF8E",
        warning: "#FFC107",
        //Custom variables from ProviderTrust Design System
        ...pdsVars
      }
    }
  },
...
});
```

Usage:
```
<v-input color="colorPtRoyal">
```

### Method 3: Using as Javascript Variable

To use javascript variables in the `<script>` tag of an individual component, you can
either import them into a pdsVars object in your vue component.
```
...
import pdsVars from "@/pds/styles/pds-js-variables.scss";
...
<script>
data() {
  return {
    myData: {
      color: pdsVars.colorPtRoyal,
    }
  }
}
</script>
```
...or if you had already imported them into the Vuetify theme, access them via the $vuetify object:
```
<script>
data() {
  return {
    myData: {
      color: this.$vuetify.theme.currentTheme["colorPtRoyal"]
    }
  }
}
</script>
```

## How to Contribute
Let's talk on the #design-dev-guild slack channel