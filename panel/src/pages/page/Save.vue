<template>
  <div>
    <v-card class="card--flex-toolbar">
      <v-card-text class="pa-0">
        <v-form ref="form">
          <v-card flat>
            <v-card-title class="grey lighten-4">
              <div class="greyDarken1--text font-weight-medium">
                Page
              </div>
            </v-card-title>
            <v-card-text>
              <!-- Title -->
              <v-text-field
                id="title"
                label="Page Title"
                name="title"
                :rules="[
                          rules.required,
                          rules.min_length(3),
                          rules.max_length(250),
                        ]"
                counter="250"
                color="primary"
                prepend-icon="$vuetify.icons.document"
                type="text"
                v-model="page.title"
              ></v-text-field>
               <!-- Description -->
              <div class="mt-2">
                <v-textarea
                name="description"
                prepend-icon="$vuetify.icons.document"
                label="Description"
                v-model="page.description"
              ></v-textarea>
              </div>
              <!-- Slug -->
              <v-text-field
                id="slug"
                label="Slug"
                color="primary"
                name="slug"
                :rules="[
                          rules.required,
                          rules.min_length(3),
                          rules.max_length(50),
                        ]"
                counter="50"
                prepend-icon="mdi-alphabetical"
                type="text"
                @keyup="slugify"
                v-model="page.slug"
              ></v-text-field>
              <v-checkbox v-model="page.published" color="primary">
                <template v-slot:label>
                  <div v-if="page.published">Published</div>
                  <div v-else>Unpublished</div>
                </template>
              </v-checkbox>
            </v-card-text>
          </v-card>
          <v-card-actions class="pa-3">
            <v-spacer></v-spacer>
             <v-btn
              @click="$router.push({name: 'page.list'})"
              color="grey"
              dark
            >Cancel</v-btn>
            <v-btn
              v-if="page.id != undefined"
              @click="save('update')"
              color="secondary"
              dark
            >Update</v-btn>
            <v-btn v-else @click="save('create')" color="secondary" dark>
              Create
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import rules from "@/validation";

export default {
  name: "PageSave",
  data() {
    return {
      rules,
      page: {
        title: null,
        slug: null,
        description: null,
        published: false
      }
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      if (this.$route.params.page_id == undefined) {
        return;
      }
      let result = await this.$store.dispatch("page/get", {
        id: this.$route.params.page_id
      });
      var page = Object.assign({}, result);
      this.page = page;
    },

    slugify() {
      if (this.page.slug) {
        this.page.slug = this.page.slug.split(" ").join("-");
      }
    },

    async save(operation) {
      if (!this.$refs.form.validate()) {
        return false;
      }
      try {
        await this.$store.dispatch(
          "page/" + operation,
          this.page
        );

        this.$router.push({
          name: "page.list"
        });
        this.$store.dispatch("app/showMessage", {
          message: operation == "create" ? "Page created successfully !!" : "Page updated successfully !!",
          color: this.DEFINES.SNACKBAR_SUCCESS_COLOR
        });
      } catch (error) {
        this.$store.dispatch("app/showMessage", {
          message: error.message,
          color: "error"
        });
      }
    }
  }
};
</script>

