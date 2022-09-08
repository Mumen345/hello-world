<template>
  <div>
    <HomeViewVue id="app" />
  </div>
</template>

<script>
import HomeViewVue from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeViewVue,
  },
};
</script>

<style>
* {
  margin: 0 auto;
}
#app {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  background-color: #ffffff;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
</style>
