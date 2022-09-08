<template>
  <div>
    <div class="headersection">
      <NavigationComponent />
      <HeroComponent />
    </div>
    <HowitWorks />
    <DownloadComponent />
    <FaqComponent />
    <WaitList />
    <AmbassadorComponent />
    <FooterComponent />
  </div>
</template>
<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import HowitWorks from "@/components/HowitWorks.vue";
import FooterComponent from "../components/FooterComponent.vue";
import FaqComponent from "../components/FaqComponent.vue";
import AmbassadorComponent from "../components/AmbassadorComponent.vue";
import WaitList from "../components/WaitList.vue";
import DownloadComponent from "../components/DownloadComponent.vue";
export default {
  name: "HomeView",
  components: {
    NavigationComponent,
    HeroComponent,
    HowitWorks,
    FooterComponent,
    FaqComponent,
    AmbassadorComponent,
    WaitList,
    DownloadComponent,
  },
};
</script>

<style>
.headersection {
  background-image: url("../assets/BG.svg");
  width: 100% !important;
  height: 100%;
  background-color: none;
  /* padding-bottom: 70px; */
  background-repeat: repeat;
  background-size: cover;
}
</style>
