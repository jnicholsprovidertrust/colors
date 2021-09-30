# ProviderTrust Design System Colors
This **Colors** repository contains the shared ProviderTrust and product-specific colors.

This is a part of the **ProviderTrust Design System Library**, a collection of assets
that can be used in frontend projects at ProviderTrust to quickly put together UIs 
that adhere to the global design specification.

## Demo
Navigate to the `demo` directory and run `npm run serve`

## One-time setup
### Generate a GitHub Personal Access Token
Follow the access token instructions from https://javascript.plainenglish.io/publishing-private-npm-packages-using-github-packages-415993cd2da8

### Setup the @Providertrust scoped registry
Open the command line and run the following `npm login -registry=https://npm.pkg.github.com -scope=@providertrust`
Use your github username, and then your personal access token as your password

## How to Use
### Install the Package
`npm install @providertrust/colors`

### Import into Vuetify variables.scss
SASS variables can be used in your project by importing them into your variables.scss 
file as follows:
```
// styles/variables.scss
@import '@providertrust/colors/variables.scss';
```

At this point, you can use it in your SCSS section like so
```
<style lang="scss">
* {
  background-color:$color-pt-royal;
}
```

### Import into Vuetify Themes

After importing into `variables.scss`, you could also add the following to your vuetify.js file to make the color variables available via the Vuetify theme.

Example:
```
// vuetify.js
import colors from '@providertrust/colors/js-variables.scss'
...

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        //Custom variables from ProviderTrust Design System
        ...colors
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
import colors from '@providertrust/colors/js-variables.scss'
...
<script>
data() {
  return {
    myData: {
      color: colors.colorPtRoyal,
    }
  }
}
</script>
```
...or if you had already [imported them into the Vuetify themes](#import-into-vuetify-themes), access them via `$vuetify.theme`:
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

## How to Publish New Release
Update the `package.json` version, and then create a new release in GitHub. It should then be automatically published via GitHub Workflow Actions.

### Manually Publishing
Follow the setup directions on https://javascript.plainenglish.io/publishing-private-npm-packages-using-github-packages-415993cd2da8

Update the `package.json` version, then go to project root, and run `npm publish`