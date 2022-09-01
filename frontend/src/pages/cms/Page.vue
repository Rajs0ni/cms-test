<template>
  <div v-if="page">
    <v-container ma-0>
      <div class="display-1 primary--text">{{ page.title }}</div>
      <v-divider class="primary divider-custom-height my-1"></v-divider>
      <div class="my-4">
        <div class="pb-1 secondary--text" v-html="page.description">
          {{ page.description }}
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: 'Page',
  computed: {
    ...mapState({
      page: (state) => state.page.page,
    }),
  },
  created(){
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      try {
        if (!this.page.length) {
          await this.$store.dispatch('page/get', {
            slug: this.$route.params.slug,
          });
        }
      } catch (error) {
        this.$store.dispatch('app/showMessage', {
          message: error.message,
          color: 'error',
        });
      }
    },
  },
};
</script>
<style>
.ql-editor{
  height: auto!important;
}
@media screen and (max-width: 640px) {
  img {
    width: 100%;
  }
}
</style>
