<script>
import { VDataTable } from "vuetify/labs/VDataTable"
import { useMockData } from "@/stores/mock"
import FilterMenu from "./FilterMenu.vue"
import SearchField from "./SearchField.vue"

export default {
  setup() {
    const mockStore = useMockData()
    return {
      mockStore
    }
  },

  data() {
    return {
      page: 1,
      itemsPerPage: 7,
      search: "",
      headers: [
        {
          align: "start",
          title: "Название", 
          key: "name",
          sortable: false,
        },
        {title: "Тип", key: "type"},
        {title: "Расположение", key: "location"},
        {title: "Орг. Единица", key: "entity"},
        {title: "Инв. номер", key: "id"},
        {title: "Теги", key: "tags"},
        {title: "Дата создания", key: "createDate"},
        {title: "Дата обновления", key: "updateDate"},
        {title: "Дата аудита", key: "auditDate"},
      ],
      computers: [
        {
          name: "",
          type: "vm_host",
          location: "",
          entity: "",
          id: 1,
          tags: [
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
          ],
          createDate: Date(),
          updateDate: Date(),
          auditDate: Date(),
        },
      ],
    }
  },

  methods: {
    filterByTag() {
    },
    updateSearch(value) {
      this.search = value
    }
  },

  computed: {
    pageCount () {
      return Math.ceil(this.computers.length / this.itemsPerPage)
    },
  },

  mounted() {
    this.computers = this.mockStore.getComputers
    this.search = new URLSearchParams(window.location.search).getAll("endpoint_search")[0] || ""
  },

  components: {
    VDataTable,
    FilterMenu,
    SearchField,
  }
}
</script>


<template>
<div class="computer-table">
  <v-data-table
    :custom-filter="filterByTag()"
    :headers="headers"
    v-model:page="page"
    :items="computers"
    :items-per-page="itemsPerPage"
    hide-default-footer
    :search="search"
  >
<!-- Search and filters -->
    <template v-slot:top>
      <div class="helper">
        <SearchField
          @search="updateSearch"
        />
        <FilterMenu/>
      </div>
    </template>
<!-- Paginator -->
    <template v-slot:bottom>
      <div class="text-center ma-4">
        <v-pagination
          v-model="page"
          :length="pageCount"
        />
      </div>
    </template>
<!-- Tags -->
    <template v-slot:item.tags="{ item }">
      <div class="chip-group">
        <v-chip 
          v-for="tag in item.columns.tags"
          :color="tag.color"
          :key="tag.id"
          class="ma-1"
        >
          {{ tag.name }}
        </v-chip>
      </div>
    </template>
  </v-data-table>
</div>
</template>

<style scoped>
.computer-table {
  width: 80vw;
  padding: 0 2rem 0 1rem;
}
.chip-group {
  display: flex;
}
.v-text-field {
  padding-right: 0;
}
.helper {
  display: flex;
  justify-content: space-between;
}
.v-btn {
  align-self: center;
}
</style>