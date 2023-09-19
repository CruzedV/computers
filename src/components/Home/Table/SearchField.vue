<script>
export default {
  data() {
    return {
      search: ""
    }
  },

  methods: {
    updateSearch() {
      const params = new URLSearchParams(window.location.search)
      params.set("endpoint_search", this.search)
      params.set("endpoint_tags", params.getAll("endpoint_tags"))
      params.set("endpoint_types", params.getAll("endpoint_types"))
      history.pushState({}, "", "/cmdb"+"?"+params.toString())
      this.$emit('search', this.search)
    }
  },

  mounted() {
    const params = new URLSearchParams(window.location.search)
    this.search = params.getAll("endpoint_search")
  }
}
</script>

<template>
  <v-text-field
    v-model="search"
    label="Найти компьютер"
    class="pa-4"
    single-line
    hide-details
    @input="updateSearch"
  />
</template>
