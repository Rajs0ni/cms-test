<template>
  <v-app id="inspire">
    <v-container class="pa-0">
      <!-- Content -->
      <v-content>
        <router-view></router-view>
      </v-content>
      <!-- Footer -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "GuestLayout",
};
</script>
