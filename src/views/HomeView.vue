<template>
  <div>
    <div class="headersection">
      <div>
        <nav class="nav_bar">
          <a
            v-scroll-to="{ el: '#Hero', onDone: onDone, onCancel: onCancel }"
            href="#"
            class=""
            ><img alt="Hero Img" class="logo" src="@/assets/greach_logo.png"
          /></a>
          <div class="web">
            <a
              v-scroll-to="{ el: '#HIW', onDone: onDone, onCancel: onCancel }"
              href="#"
              >How it works</a
            >
            <a
              v-scroll-to="{ el: '#Amb', onDone: onDone, onCancel: onCancel }"
              href="#"
              class="middle_links"
              >Become an Ambassador</a
            >
            <a
              v-scroll-to="{
                el: '#FaqComponent',
                onDone: onDone,
              }"
              href="#"
              >FAQ</a
            >
          </div>
          <a
            v-scroll-to="{
              el: '#WaitList',
              onDone: onDone,
            }"
            href="#"
            class="nav_button web"
            >Join Waitlist</a
          >

          <span
            class="mobile menu_btn"
            style="font-size: 30px; cursor: pointer"
            @click="openNav"
            >&#9776;</span
          >
        </nav>
        <div class="mobile">
          <div id="myNav" class="overlay">
            <a class="closebtn" @click.prevent="closeNav">&times;</a>
            <div class="overlay-content">
              <a v-scroll-to="{ el: '#HIW', onDone: onDone }" href="#"
                >How it works</a
              >
              <a
                v-scroll-to="{ el: '#Amb', onDone: onDone }"
                href="#"
                class="middle_links"
                >Become an Ambassador</a
              >
              <a
                v-scroll-to="{
                  el: '#FaqComponent',
                  onDone: onDone,
                }"
                href="#"
                >FAQ</a
              >

              <br />
              <br />
              <a
                v-scroll-to="{
                  el: '#WaitList',
                  onDone: onDone,
                }"
                href="#"
                class="nav_button web"
                >Join Waitlist</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <NavigationComponent /> -->
      <HeroComponent id="Hero" />
    </div>
    <HowitWorks id="HIW" />
    <DownloadComponent id="Download" />
    <AmbassadorComponent id="Amb" />
    <WaitList id="WaitList" />
    <FaqComponent id="FaqComponent" />
    <FooterComponent id="FooterComponent" />
  </div>
</template>
<script>
// import NavigationComponent from "@/components/NavigationComponent.vue";
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
    // NavigationComponent,
    HeroComponent,
    HowitWorks,
    FooterComponent,
    FaqComponent,
    AmbassadorComponent,
    WaitList,
    DownloadComponent,
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
    onDone() {
      this.closeNav();
    },

    // nav(link) {
    //   const position = document.getElementById(link.id).offsetTop; // smooth scroll
    //   window.scrollTo({ top: position, behavior: "smooth" });
    //
    // },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.headersection {
  background-image: url("../assets/BG.svg");
  width: 100% !important;
  height: 100%;
  background-color: none;
  /* padding-bottom: 70px; */
  background-repeat: repeat;
  background-size: cover;
}
.menu_btn {
  color: #0fac11;
}
.mobile {
  display: none;
}
.nav_bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15%;
  align-items: center;
  padding: 20px 0;
  background: #00000019;
  backdrop-filter: blur(20px);
  position: fixed;
  z-index: 2;
  transition: 0.5s ease all;
  max-width: 1440px;
  margin: 0 auto;
}
.middle_links {
  margin: 0 30px;
}
a {
  color: #0fac11 !important;
  font-weight: 700;
  text-decoration: none;
}
.nav_button {
  background-color: #0fac11;
  color: #ffffff !important;
  padding: 0.8em 4em;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
}
.logo {
  width: 120px;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: #ffffff;
  background-color: #000000;
  overflow-x: hidden;
  transition: 0.5s;
}
.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}
.overlay a {
  padding: 8px;
  text-decoration: none;
  color: #0fac11;
  display: block;
  transition: 0.3s;
  margin-top: 30px;
}
.overlay a:hover,
.overlay a:focus {
  color: #0fac11;
}
.overlay .closebtn {
  position: absolute;
  top: -20px;
  right: 20px;
  font-size: 50px;
}
@media screen and (max-width: 1080px) {
  .web {
    display: none;
  }
  .mobile {
    display: block;
  }
}
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
  .nav_button {
    width: 70%;
  }
  .nav_bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 200px;
    align-items: center;
    padding: 20px 0;
    background: #00000019;
    backdrop-filter: blur(20px);
    position: fixed;
    z-index: 2;
    transition: 0.5s ease all;
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
