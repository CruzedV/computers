<script setup>
import Header from "@/components/Header.vue"
import ComputerTable from "@/components/Home/Table/ComputerTable.vue"
import TreeMenu from "@/components/Home/TreeMenu.vue"
</script>

<template>
  <main>
    <Header/>
    <div class="home-content">
      <TreeMenu/>
      <ComputerTable/>
    </div>
  </main>
</template>

<style scoped>
.home-content {
  display: flex;
  margin-top: 10vh;
}
</style>
