<template>
  <div>
    <nav class="nav_bar">
      <a class=""
        ><img alt="Hero Img" class="logo" src="@/assets/greach_logo.png"
      /></a>
      <div class="web">
        <a>How it works</a>
        <a class="middle_links">Download</a>
        <a>Contact Us</a>
      </div>
      <button class="nav_button web">Join Waitlist</button>

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
          <a>How it works</a>
          <a class="middle_links">Download</a>
          <a>Contact Us</a>
          <br />
          <br />
          <button class="nav_button">Join Waitlist</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationComponent",
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
  },
};
</script>
<style scoped>
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
}
.nav_button {
  background-color: #0fac11;
  color: #ffffff;
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
