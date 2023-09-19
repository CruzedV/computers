<script>
export default {
  props: {
    title: String,
    value: String
  }
}
</script>

<template>
  <v-expansion-panel :title="title" :value="value">
    <v-expansion-panel-text>
      <v-divider
        vertical
        :thickness="5"
        color="primary"
        inset
      />
      <slot/>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.v-expansion-panel-text {
  position: relative;
}
.v-divider {
  height: 100%;
  left: 1rem;
  margin: auto auto auto auto;
  position: absolute;
}
</style>