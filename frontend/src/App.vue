<template>
  <div  id="app" class="pa-0">
    <!-- Alert -->
    <alert-message :dialog="dialog"></alert-message>
    <template>
      <guest-layout></guest-layout>
    </template>
  </div>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout";
import AlertMessage from "./components/dialogBox/AlertMessage";
import { EventBus } from "@/event-bus";
import { mapGetters, mapState } from "vuex";
import DEFINES from "@/defines";
import { mapFields } from "vuex-map-fields";

export default {
  name: "app",
  components: {
    GuestLayout,
    AlertMessage
  },
  data() {
    return {
      loader: false,
      dialog: {
        show: false,
        text: "",
        color: ""
      },
      guestLayout: DEFINES.LAYOUT_GUEST
    };
  },
  computed: {
    ...mapGetters("app", {
      layout: "appLayout"
    })
  },

  mounted(){

  },

  created() {
    EventBus.$on("showMessage", payload => {
      this.dialog.show = true;
      this.dialog.color = payload.color;
      this.dialog.text = payload.message;
    });

    EventBus.$on("hideMessage", payload => {
      this.dialog.show = false;
    });
  },

  methods: {
  }
};
</script>
<style scoped>
.v-alert.v-alert--outline {
    border: 3px solid var(--v-primary-base) !important;
    line-height: 5px;
}
#app {
  font-family: var(--FontFamily) !important;
}
</style>
