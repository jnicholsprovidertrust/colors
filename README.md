# ProviderTrust Design System Colors
This **Colors** repository contains the shared ProviderTrust and product-specific colors.

This is a part of the **ProviderTrust Design System Library**, a collection of assets
that can be used in frontend projects at ProviderTrust to quickly put together UIs 
that adhere to the global design specification.

## Demo
Navigate to the `demo` directory and run `npm run serve`

## One-time setup
### Generate a GitHub Personal Access Token
Go to https://github.com/settings/tokens and [Generate new token]. Give it just `read:packages` scope. For the `Note`, call it something like `Download Github Packages` and set an expiration of whatever you're comfortable with.  

Once you have your token, copy it and continue to the following step

### Configure to use the @ProviderTrust scoped registry
Open the command line and run the following `npm login -registry=https://npm.pkg.github.com -scope=@providertrust`
Use your github username, and then your personal access token as your password

After this point, your `~/.npmrc` file should have the following lines
```
@providertrust:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_COPIED_PERSONAL_ACCESS_TOKEN
```

## How to Use
### Install the Package
`npm install @providertrust/colors`

### Import into Vuetify variables
SASS variables can be used in your project by importing them into your variables.scss 
file as follows:
```
// styles/variables.scss
@import '@providertrust/colors/variables.scss';
```

#### Use in Component Style
```
<style lang="scss">
* {
  background-color:$color-pt-royal;
}
```

### Import into Vuetify Themes

After [importing into vuetify variables](#import-into-vuetify-variables), you could also add the following to your vuetify.js file to make the color variables available via the Vuetify theme.

Example:
```
// vuetify.js
import colors from '@providertrust/colors/js-variables.scss'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        //Custom variables from ProviderTrust Design System
        ...colors
      }
    }
  }
});
```

#### Use in Component HTML
```
<v-input color="colorPtRoyal">
```

#### Use in Component Javascript
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

### Alternate Use in Component Javascript

In addition to [this method](#use-in-component-javascript), you can also import the library and use it directly
```
import colors from '@providertrust/colors/js-variables.scss'

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

## How to Contribute
Let's talk on the #design-dev-guild slack channel

## How to Publish New Releases
Update the `package.json` version, and then create a new release in GitHub. It should then be automatically published via GitHub Workflow Actions.

### Manually Publishing
Follow the setup directions on https://javascript.plainenglish.io/publishing-private-npm-packages-using-github-packages-415993cd2da8 . Compared to [above steps for generating a token](#generate-a-github-personal-access-token), you'll need to give it additional scopes.

Update the `package.json` version, then go to project root, and run `npm publish`