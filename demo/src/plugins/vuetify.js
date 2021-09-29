import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pdsVars from '@providertrust/colors/js-variables.scss'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          //Custom variables from ProviderTrust Design System
          ...pdsVars
        }
      }
    }
})