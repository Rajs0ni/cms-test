<template>
  <v-dialog v-if="dialog.show" v-model="dialog.show" width="500">
    <v-card light>
      <v-card-text class="subheading pa-4">
      <v-layout row wrap>
        <v-flex xs12 md8>
          <div class="headline pb-2">
            <span v-if="dialog.color == 'error'">Error</span>
            <span v-else-if="dialog.color == 'warning'">Warning</span>
            <span v-else>Success</span>
          </div>
          <div class="pb-3" v-html="dialog.text">
             {{dialog.text}}
          </div>
          <div >
            <v-btn
            color="grey"
            dark
            flat
            outline
            @click="dialog.show = false"
            class="mx-0"
            >Close</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 md4>
          <v-layout wrap class="text-xs-center" fill-height justify-center align-center>
            <v-icon size="96" :color="dialog.color">
              {{dialog.color == 'error'|| dialog.color == 'warning' ? '$vuetify.icons.error' : '$vuetify.icons.check'}}
            </v-icon>
          </v-layout>
        </v-flex>
        </v-layout>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AlertMessage",
  props: {
    dialog: {}
  }
};
</script>

<style>
</style>
