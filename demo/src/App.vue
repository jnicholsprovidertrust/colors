<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        ProviderTrust Design System Colors
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Colors/>
    </v-main>
  </v-app>
</template>

<script>
import Colors from './components/Colors';

export default {
  name: 'App',

  components: {
    Colors,
  },
};
</script>
