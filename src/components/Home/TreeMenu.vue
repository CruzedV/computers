<script>
export default {
  data() {
    return {
      panel: "cmdb"
    }
  }
}
</script>

<template>
  <v-card class="tree-menu">
    <v-expansion-panels
      v-model="panel"
      variant="accordion"
    >
      <v-expansion-panel title="Дашборд"/>
      <v-expansion-panel
        title="CMDB"
        value="cmdb"
      >
        <v-expansion-panel-text>
          <v-divider
            vertical
            :thickness="5"
            color="primary"
            inset
          />
          <v-card color="primary">Серверы и ПК</v-card>
          <v-card>Гипервизоры и вирт. машины</v-card>
          <v-card>Принтеры и МФУ</v-card>
          <v-card>Сетевые устройства</v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Сеть"/>
      <v-expansion-panel title="Справочники"/>
      <v-expansion-panel title="Отчеты"/>
      <v-expansion-panel title="Мониторинг"/>
      <v-expansion-panel title="Автоматизация"/>
      <v-expansion-panel title="Администрирование"/>
    </v-expansion-panels>
  </v-card>
</template>

<style scoped>
.tree-menu {
  width: 20vw;
  flex-direction: column;
  padding: 1rem;
}
.v-expansion-panel-text {
  position: relative;
}
.v-divider {
  height: 100%;
  left: 1rem;
  margin: auto auto auto auto;
  position: absolute;
}
.v-card {
  margin: 0.5rem;
  margin-left: 1rem;;
  padding: 0.5rem;
}
</style>