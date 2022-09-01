<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline secondary--text">Pages</div>
        <span class="body-1 greyDarken1--text">List of Pages</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="secondary" dark class="mx-0" @click="$router.push({name: 'page.create'})">
        <v-icon small>$vuetify.icons.create</v-icon>
        Create
      </v-btn>
    </v-card-title>
    <v-card flat>
      <v-card-text class="px-0">
        <v-data-table
          :headers="table_headers"
          :items="list"
          :loading="loading"
          v-bind:pagination.sync="pagination"
        >
          <template v-slot:items="props">
            <tr
              :style="{cursor: 'pointer'}"
              @click.stop="
                $router.push({
                  name: 'page.save',
                  params: {
                    page_id: props.item.id,
                  },
                })
              "
            >
              <td class="text-xs-left subheading">{{ props.item.title }}</td>
              <td class="text-xs-left">{{ props.item.slug }}</td>
              <td class="text-xs-left">
                <v-chip class="secondary secondary--text font-weight-medium" small outline>
                  {{
                  DEFINES.PAGE_STATUS[props.item.published]
                  }}
                </v-chip>
              </td>
              <td
                class="text-xs-left"
              >{{ moment.utc(props.item.created_at).local().format('MMMM Do YYYY') }}</td>
              <td class="text-xs-center">
                <v-tooltip slot="append" top color="white">
                  <v-btn
                    slot="activator"
                    icon
                    small
                    dark
                    @click.stop="
                      $router.push({
                        name: 'page.save',
                        params: {
                          page_id: props.item.id,
                        },
                      })
                    "
                  >
                    <v-icon color="secondary">$vuetify.icons.visibility</v-icon>
                  </v-btn>
                  <span class="greyDarken3--text body-1">
                    View
                  </span>
                </v-tooltip>

                <v-tooltip slot="append" top color="white">
                  <v-btn
                    slot="activator"
                    icon
                    small
                    dark
                    @click.stop="deleteConfirmation(props.item.id)"
                  >
                    <v-icon color="secondary">$vuetify.icons.delete</v-icon>
                  </v-btn>
                  <span class="greyDarken3--text body-1">
                   Delete
                  </span>
                </v-tooltip>
              </td>
            </tr>
          </template>
        </v-data-table>
        <ConfirmationDialog
          :dialog="confirmation"
          @confirm="remove()"
          @cancel="confirmation = false"
        />
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import ConfirmationDialog from "@/components/dialogBox/Confirmation";

export default {
  name: "PageList",
  data() {
    return {
      search: "",
      total: 0,
      confirmation: false,
      loading: true,
      table_headers: [
        {
          text: "Title",
          align: "left",
          sortable: true,
          value: "title"
        },
        {
          text: "Slug",
          align: "left",
          sortable: false,
          value: "slug"
        },
        {
          text: "Status",
          align: "left",
          sortable: false,
          value: "published"
        },
        {
          text: "Created On",
          align: "left",
          sortable: true,
          value: "created_at"
        },
        {
          text: "Action",
          align: "center",
          sortable: false,
          value: "action"
        }
      ],
      pagination: { sortBy: "title", descending: true, rowsPerPage: 5 },
      deletePageId: null
    };
  },
  created() {
    this.getApiData();
  },
  computed: {
    ...mapState({
      list: state => state.page.list
    })
  },
  components: { ConfirmationDialog },
  methods: {
    async getApiData() {
      this.loading = true;
      try {
        var response = await this.$store.dispatch("page/list");
        console.log(response);
        this.total = response.pages.total;
      } catch (error) {
        this.$store.dispatch("app/showMessage", {
          message: error.message,
          color: this.DEFINES.SNACKBAR_ERROR_COLOR
        });
      }
      this.loading = false;
    },

    async remove() {
      try {
        await this.$store.dispatch("page/delete", {
          id: this.deletePageId
        });
        this.getApiData();
      } catch (error) {
        this.$store.dispatch("app/showMessage", {
          message: error.message,
          color: this.DEFINES.SNACKBAR_ERROR_COLOR
        });
      } finally {
        this.confirmation = false;
      }
    },
    deleteConfirmation(page_id) {
      this.deletePageId = page_id;
      this.confirmation = true;
    }
  }
};
</script>
