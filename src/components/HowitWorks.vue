<template>
  <div v-motion-pop-visible-once :delay="700" class="hiw_container">
    <div class="hiw_writeup_div">
      <div>
        <p class="HIW_text">How it works</p>
      </div>
      <div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Downoad and Register</p>
            <p class="hiw_section_subtext">
              This software is very easy for you to manage. You can use it as
              you wish
            </p>
          </div>
        </div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon-1.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Book a Ride</p>
            <p class="hiw_section_subtext">
              This software is very easy for you to manage. You can use it as
              you wish
            </p>
          </div>
        </div>
        <div class="hiw_section_text">
          <img alt="Hero Img" class="logo" src="@/assets/icon-2.svg" />
          <div class="hiw_text_div">
            <p class="hiw_section_title">Offer a Ride</p>
            <p class="hiw_section_subtext">
              This software is very easy for you to manage. You can use it as
              you wish
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
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
