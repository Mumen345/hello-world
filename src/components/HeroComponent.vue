<template>
  <div class="hero_container">
    <div v-motion-slide-left :delay="700" class="left_hero_text">
      <p>
        <span class="smallbtn">Greach a Ride with a Trusted</span> <br />
        <span class="third_text">Community of </span>
        <span class="third_text">Friends and </span>
        <span class="third_text">Professionals</span> <br />
        <span class="forth_text">on the go...</span>
      </p>
      <p class="hero_subtext">
        Greach a Ride with a Trusted Community of Friends and Working
        Professionals
      </p>
      <div class="button_div">
        <button class="primary_button">Download App</button>
        <button class="secondary_button">Join Waitlist</button>
      </div>
      <!-- <div class="hero_stats">
            <div>
                <p class="hero_stats_header">500+</p>
                <p>Drivers and Riders <br> Available</p>
            </div>
            <div>
                <p class="hero_stats_header">99%</p>
                <p>Secure and <br> Affordable</p>
            </div>
        </div> -->
    </div>
    <div v-motion-slide-right :delay="700" class="">
      <img alt="Hero Img" class="web" src="@/assets/hero_img.png" />
      <img
        alt="Hero Img"
        class="mobile_img"
        src="@/assets/hero_img_mobile.png"
      />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.mobile_img {
  display: none;
}
.hero_stats {
  display: flex;
  flex-direction: row;
  gap: 32%;
  color: #ffffff;
  /* width: 70%; */
}
.second_text {
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;
  letter-spacing: 6px;
  color: #ffffff;
}
.fifth_text {
  font-weight: 800;
  font-size: 60px;
  color: #ffffff;
}
.forth_text {
  font-weight: 800;
  font-size: 55.26px;
  letter-spacing: 6px;
  color: #ffffff;
  /* margin-top: -15px; */
}
.left_hero_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
}
.third_text {
  font-weight: 800;
  font-size: 55.26px;
  line-height: 83px;
  letter-spacing: 5.52632px;
  color: #ffffff;
}
.smallbtn {
  width: 439px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}
.hero_text {
  font-size: 60px;
  color: #ffffff !important;
  font-weight: 900;
  width: 80%;
  line-height: 70px;
  letter-spacing: 5px;
}
span {
  color: inherit;
}
.hero_subtext {
  width: 100%;
  display: flex;
  font-size: 16px;
  line-height: 36px;
  color: #ffffff;
}
.hero_container {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 9% auto 0;
  /* height: 100vh; */
  /* background-image: url("@/assets/BG.svg"); */
}

.button_div {
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;
  margin-top: 30px;
}

.primary_button {
  background-color: #0fac11;
  border: none;
  color: #ffffff;
  font-weight: 700;
  padding: 1.3em 3.5em;
  border-radius: 5px;
  width: 100%;
}
.primary_button:hover {
  background-color: #056406;
  transition: 0.3s;
  cursor: pointer;
}
.secondary_button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-weight: 700;
  padding: 1.3em 3.5em;
  border-radius: 5px;
  border: 1px dashed #ffffff;
  width: 100%;
}
.secondary_button:hover {
  background-color: #0000001f;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
}
.hero_stats_header {
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 1px;
  color: #ffffff;
}
/*  */
.mobile {
  display: none;
}
@media screen and (max-width: 700px) {
  .third_text {
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 5.52632px;
    color: #ffffff;
    /* width: 100%; */
  }
  .forth_text {
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 5.52632px;
    color: #ffffff;
    margin-top: -15px;
  }
  .smallbtn {
    width: 200px !important;
    height: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
  .button_div {
    width: 100%;
    display: flex !important;
    flex-direction: column !important;
    gap: 30px;
    /* background-color: red; */
    margin: 20px auto;
  }
  .mobile_img {
    display: block;
  }
  .web {
    display: none;
  }
  .mobile {
    display: none;
  }
  .hero_container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 30% auto -20px;
  }
  .hero_subtext {
    width: 100%;
    font-size: 16px;
    line-height: 36px;
    color: #ffffff;
    margin-top: 10px;
  }
  .smallbtn {
    font-weight: 600;
    margin: 20px auto 0;
    text-align: center;
  }
  .button_div {
    width: 100%;
    display: flex !important;
    flex-direction: column !important;
    gap: 30px;
  }
}
@media screen and (max-width: 1100px) {
  /* .web{
      display: none;
    } */
  .mobile {
    display: none;
  }
  .hero_container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 15% auto -20px;
  }
  .hero_subtext {
    width: 100%;
    font-size: 16px;
    line-height: 36px;
    color: #ffffff;
    margin-top: 10px;
  }
  .smallbtn {
    font-weight: 600;
    margin: 20px auto 0;
    text-align: center;
  }
  .button_div {
    width: 100%;
    display: flex !important;
    flex-direction: column !important;
    gap: 30px;
  }
  .hero_stats {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto 60px;
  }
}

@media screen and (max-width: 500px) {
  .hero_container {
    display: flex;
    width: 100% !important;
    margin: 20% auto;
    padding: 0 20px;
  }
}
</style>
