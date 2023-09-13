<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import '@wainola/react-widget'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <widget-component
    primayColor="white"
    secondaryColor="orange"
    borderRadiusPrimary="10px"
    fontWeightPrimary="600"
    .resourceList='[
        {
          "resourceId": "0x0000000000000000000000000000000000000000000000000000000000000300",
          "type": "fungible",
          "address": "0x3F9A68fF29B3d86a6928C44dF171A984F6180009",
          "symbol": "ERC20LRTest",
          "decimals": 18
        },
        {
          "resourceId": "0x0000000000000000000000000000000000000000000000000000000000000500",
          "type": "permissionlessGeneric",
          "address": "",
          "symbol": "",
          "decimals": 0
        },
        {
          "resourceId": "0x0000000000000000000000000000000000000000000000000000000000001000",
          "type": "fungible",
          "address": "0xB376b0Ee6d8202721838e76376e81eEc0e2FE864",
          "symbol": "GPHA",
          "decimals": 18
        }]'
  ></widget-component>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
