# ProviderTrust Design System Colors
The **ProviderTrust Design System library** is a collection of variables and components 
that can be used in frontend projects at ProviderTrust to quickly put together UIs 
that adhere to the global design specification.

This **Colors** repository contains the shared ProviderTrust and product-specific colors.

## Demo
Navigate to the demo directory and run `yarn serve`

## How to Use
### Copy into your Project
Until we figure out how to version and publish this, copy `src/pds` into your project `src/pds`

### Import into Vuetify variables.scss
SASS variables can be used in your project by importing them into your variables.scss 
file as follows:
```
// styles/variables.scss
@import "@/pds/styles/pds-variables.scss";
```

At this point, you can use it in your SCSS section like so
```
<style lang="scss">
* {
  background-color:$color-pt-royal;
}
```

### Import into Vuetify Theme

After importing into variables.scss, you could also add the following to your vuetify.js file to make the pds color variables available via the Vuetify theme.

Example:
```
// vuetify.js
import pdsVars from "@/pds/styles/pds-js-variables.scss";
...

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
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

### Using as Javascript Variable

To use as javascript variables tag of an individual component, you can either import them as a javascript object in your vue component:
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
...or if you had already imported them into the Vuetify theme, access them via `$vuetify.theme`:
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