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
          Interested in being our Ambassador at your workplace? Get free gifts
          and bonuses when you sign-up your colleagues
        </p>
      </div>
      <div class="emailDiv" v-if="inputDiv">
        <label for="email">*Email :</label>
        <br />
        <input id="email" type="email" v-model="email" required class="" />
        <button @click.prevent="submitForm" class="primary_button">
          Submit
        </button>
      </div>
      <button
        v-if="mainButton"
        @click.prevent="showInput"
        class="primary_button"
      >
        I'm Interested
      </button>
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
import axios from "axios";
export default {
  name: "AmbassadorComponent",
  data() {
    return {
      email: "",
      inputDiv: false,
      mainButton: true,
    };
  },
  methods: {
    validateEmail(email) {
      const re =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    submitForm() {
      if (this.email === "") {
        this.$toasted.error("Please fill your email");
        return false;
      }
      if (!this.validateEmail(this.email)) {
        this.$toasted.error("Invalid email address");
        return false;
      }
      const params = "email=" + this.email;
      console.log(params);
      axios
        .post("http://3.85.252.84/api/v1/waitlist/ambassador?" + params)

        .then((response) => {
          // console.log(response.status);
          if (response.status === 200) {
            this.$toasted.success("Success! Thank you for your Response");
            this.email = "";
          } else {
            this.$toasted.error("oops an error occurred");
            return false;
          }
        });
    },
    showInput() {
      this.inputDiv = true;
      this.mainButton = false;
    },
  },
};
</script>
<style scoped>
.emailDiv {
  width: 100%;
}
input {
  background-color: transparent;
  border: 1px solid #d1d1d1;
  width: 100%;
  color: #4a4a4a;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 50px;
  font-size: 13px;
  padding: 0 10px;
  font-weight: 400;
  line-height: 150%;
  box-sizing: border-box;
}
input:focus {
  border-radius: 0;
  outline: none;
}

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
