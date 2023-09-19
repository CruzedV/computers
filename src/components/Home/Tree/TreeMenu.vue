<script>
import MenuItem from './MenuItem.vue'

export default {
  data() {
    return {
      panel: "cmdb"
    }
  },

  components: {
    MenuItem
  }
}
</script>

<template>
  <v-card class="tree-menu">
    <v-expansion-panels
      v-model="panel"
      variant="accordion"
    >
      <MenuItem title="Дашборд" value="dash">
      <v-card text="Что-то"/>
      </MenuItem>
      <MenuItem title="CMDB" value="cmdb">
          <v-card text="Серверы и ПК" color="primary"></v-card>
          <v-card text="Гипервизоры и вирт. машины"></v-card>
          <v-card text="Принтеры и МФУ"></v-card>
          <v-card text="Сетевые устройства"></v-card>
      </MenuItem>
      <MenuItem value="net" title="Сеть">
        <v-card text="Что-то"></v-card>
      </MenuItem>
      <MenuItem value="docs" title="Справочники">
        <v-card text="Что-то"></v-card>
      </MenuItem>
      <MenuItem value="reports" title="Отчеты">
        <v-card text="Что-то"></v-card>
      </MenuItem>
      <MenuItem value="monitoring" title="Мониторинг">
        <v-card text="Что-то"></v-card>
      </MenuItem>
      <MenuItem value="auto" title="Автоматизация">
        <v-card text="Что-то"></v-card>
      </MenuItem>
      <MenuItem value="admin" title="Администрирование">
        <v-card text="Что-то"></v-card>
      </MenuItem>
    </v-expansion-panels>
  </v-card>
</template>

<style scoped>
.tree-menu {
  width: 20vw;
  flex-direction: column;
  padding: 1rem;
}
.v-card {
  margin: 0.5rem;
  margin-left: 1rem;;
  cursor: pointer;
}
</style>