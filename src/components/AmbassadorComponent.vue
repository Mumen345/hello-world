<template>
  <div
    v-motion-slide-visible-once-left
    :delay="700"
    class="ambassador_container"
  >
    <div class="ambassador_writeup">
      <div>
        <p class="ambassador_header">Be a Greach Ambassador</p>
        <p class="ambassador_subtext">
          Interested in being our Ambassador at your workplace? Sign-up your
          colleagues and get 10% off the cost of each of their first Greach ride
        </p>
      </div>
      <button class="primary_button">I'm Interested</button>
    </div>
    <img
      v-motion-slide-visible-once-right
      :delay="700"
      alt="phone mockup"
      class="web_img"
      src="@/assets/ambassador_img.png"
    />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.ambassador_container {
  display: flex;
  flex-direction: row;
  padding: 35px 0px;
  gap: 216px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;
}
.ambassador_writeup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 46px;
}
.ambassador_header {
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 69px;
}
.ambassador_subtext {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  width: 100%;
  margin-top: 5px;
}
.primary_button {
  background-color: #0fac11;
  border: 1px solid #0fac11;
  color: #ffffff;
  font-weight: 700;
  padding: 1.3em 3.5em;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
.primary_button:hover {
  background-color: #056406;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #056406;
}
@media screen and (max-width: 1080px) {
  .ambassador_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 23px;
    text-align: center;
    width: 90% !important;
    margin: 0 auto;
  }
  .ambassador_writeup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 23px;
    margin: 0 auto;
  }
  .ambassador_subtext {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
}
@media screen and (max-width: 700px) {
  .web_img {
    width: 90%;
  }
}
</style>
