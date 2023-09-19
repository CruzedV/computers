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
      selectedTags: [],
      selectedTypes: [],
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
      computers: [],
    }
  },

  methods: {
    updateSearch(value) {
      this.search = value
    },
    getTypes() {
      const types = new URLSearchParams(window.location.search).getAll("endpoint_types")
      if (types.length != 0 && types[0] != 0) {
        this.selectedTypes= types[0].split(",")
      } else { this.selectedTypes = []}
    },
    getTags() {
      const tags = new URLSearchParams(window.location.search).getAll("endpoint_tags")
      if (tags.length != 0 && tags[0] != 0) {
        this.selectedTags = tags[0].split(",")
      } else { this.selectedTags = []}
    },
    setComputers() {
      this.getTags()
      this.getTypes()
      const allComputers = this.mockStore.getComputers

      let filteredByTags = []
      let filteredByTypes = []

      if (this.selectedTags.length > 0) {
        filteredByTags = allComputers.filter(computer => {
          const computerTags = computer.tags.map(tag => tag.name);
          return this.selectedTags.every(tag => computerTags.includes(tag))
        })
      }
      if (this.selectedTypes.length > 0) {
        filteredByTypes = allComputers.filter(computer => {
          return this.selectedTypes.includes(computer.type)
        })
      }
      if (filteredByTags.length > 0 && filteredByTypes.length > 0) {
        this.computers = filteredByTags.filter(computer => filteredByTypes.includes(computer))
      } else if (filteredByTypes.length > 0) {
        this.computers = filteredByTypes
      } else if (filteredByTags.length > 0) {
        this.computers = filteredByTags
      } else {
        this.computers = allComputers
      }
    },
  },

  computed: {
    pageCount () {
      return Math.ceil(this.computers.length / this.itemsPerPage)
    },
  },

  mounted() {
    this.search = new URLSearchParams(window.location.search).getAll("endpoint_search")[0] || ""
    this.setComputers()
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
        <FilterMenu
          @filtersUpdated="setComputers"
        />
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
