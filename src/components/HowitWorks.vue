<template>
  <div class="hiw_container">
    <div v-motion-slide-visible-once-left :delay="700" class="hiw_writeup_div">
      <div>
        <p class="HIW_text">How it works</p>
      </div>
      <div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Download and Sign up</p>
            <p class="hiw_section_subtext">
              Download on IOS or App store. Fill in your basic details. Get
              started.
            </p>
          </div>
        </div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon-1.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Book a Ride</p>
            <p class="hiw_section_subtext">
              Schedule a trip. Connect with verified drivers heading your route.
              Save cost
            </p>
          </div>
        </div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon-2.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Offer a Ride</p>
            <p class="hiw_section_subtext">
              Fill up your empty car seats. Pick up verified riders along your
              route. Save cost
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-motion-slide-visible-once-right :delay="700">
      <img
        alt="Hero Img"
        class="img_responsive"
        src="@/assets/works_img2.png"
      />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.hiw_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 100px auto;
  gap: 42px;
  width: 80%;
}

.HIW_text {
  font-weight: 700;
  font-size: 44px;
  line-height: 66px;
}
.hiw_section_text {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 19px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  width: 483px;
  margin-top: 10%;
  box-sizing: border-box;
}
.hiw_section_title {
  font-weight: 700;
  font-size: 16px;
  color: #404040;
}
.hiw_section_subtext {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* width: 277px; */
  color: #2b2b2b;
}
.hiw_text_div {
  margin: 15px;
}
@media screen and (max-width: 1080px) {
  .hiw_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 100px auto;
    width: 90%;
  }
  .HIW_text {
    text-align: center;
  }
  .hiw_section_text {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 19px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 700px) {
  .hiw_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    width: 85%;
    box-sizing: border-box;
  }
  .img_responsive {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
}
</style>
