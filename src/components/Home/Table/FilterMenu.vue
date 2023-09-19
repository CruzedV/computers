<script>
import { useMockData } from "@/stores/mock"

export default {
  setup() {
    const mockStore = useMockData()
    return {
      mockStore
    }
  },

  data() {
    return {
      types: "",
      tags: "",
      selectedTags: [],
      selectedTypes: [],
    }
  },

  methods: {
    clearFilters() {
      this.selectedTags=[]
      this.selectedTypes=[]
      history.pushState(null, null, "/cmdb/")
    },
    saveFilters() {
      const params = new URLSearchParams()
      if (this.selectedTypes.length != 0 || this.selectedTags.length != 0) {
        params.append("endpoint_tags", this.selectedTags)
        params.append("endpoint_types", this.selectedTypes)
        window.location.search = params
      }
    }
  },

  beforeMount() {
    const params = new URLSearchParams(window.location.search)
    const tags = params.getAll("endpoint_tags")
    const types = params.getAll("endpoint_types")
    if (tags.length != 0 && tags[0] != 0) {
      this.selectedTags = tags[0].split(",")
    }
    if (types.length != 0 && types[0] != 0) {
      this.selectedTypes = types[0].split(",")
    }
    this.types = this.mockStore.getTypes
    this.tags = this.mockStore.getTags
  },
}
</script>

<template>
  <v-btn>
    Фильтры
    <v-menu 
      :close-on-content-click="false"
      activator="parent"
    >
      <v-card>
        <v-list-item>
          <v-select
            chips
            :items="types"
            label="Тип ПК"
            hide-details
            multiple
            :value="selectedTypes"
            v-model="selectedTypes"
          /> 
        </v-list-item>
        <v-list-item>
          <v-select 
            chips
            item-title="name"
            :items="tags"
            label="Теги"
            hide-details
            multiple
            :value="selectedTags"
            v-model="selectedTags"
          />
        </v-list-item>
        <v-list-item>
          <div class="actions">
            <v-btn text="Очистить" @click="clearFilters()"/>
            <v-btn text="Сохранить" @click="saveFilters()"/>
          </div>
        </v-list-item>
      </v-card>
    </v-menu>
  </v-btn>
</template>

<style scoped>
.v-btn {
  background: white;
}
.v-list-item {
  padding: 1rem;
  width: 40vh;
  background-color: white;
}
.actions {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
</style>