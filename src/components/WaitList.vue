<template>
  <div class="waitlist_container">
    <div class="form">
      <p class="form_header">Join our Wait List</p>
      <p class="form_subheader">Be the first to know when we go live</p>
      <form class="form_input" @submit.prevent="register">
        <div>
          <label for="name">*Name:</label>
          <br />
          <input id="name" v-model="name" required type="text" class="" />
        </div>
        <div>
          <label for="email">*Email :</label>
          <br />
          <input id="email" v-model="email" type="email" required class="" />
        </div>
        <div>
          <label for="work">Where do you work :</label>
          <br />
          <input id="work" v-model="company" required type="text" class="" />
        </div>
        <div>
          <label for="pow">*Which would you prefer</label>
          <select id="pow" v-model="role">
            <option disabled value="">Please select one</option>
            <option>Driver</option>
            <option>Rider</option>
            <option>Both</option>
          </select>
        </div>
        <button @click.prevent="submitForm" class="primary_button">Join</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "WaitList",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      role: "",
    };
  },
  methods: {
    validateEmail(email) {
      const re =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },

    submitForm() {
      if (this.name === "") {
        this.$toasted.error("Please fill your name");
        return false;
      }

      if (this.email === "") {
        this.$toasted.error("Please fill your email");
        return false;
      }
      if (!this.validateEmail(this.email)) {
        this.$toasted.error("Please enter a valid email");
        return false;
      }

      if (this.role === "") {
        this.$toasted.error("You've not selected your preference");
        return false;
      }
      if (this.email === this.validateEmail) {
        this.$toasted.error("email not correct");
        return false;
      }

      axios
        .get(
          "http://3.85.252.84/docs#/waitlist/add_to_waitlist_api_v1_waitlist__post",
          this.name,
          this.email,
          this.role,
          this.company
        )
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            this.$toasted.success("Success! Thank you for your Response");
            (this.name = ""),
              (this.email = ""),
              (this.role = ""),
              (this.company = "");
          } else {
            this.$toasted.error("opps, an error occured. Try again");
            return false;
          }
        });
    },
    register() {
      this.errors = {};
    },
  },
};
</script>
<style scoped>
.waitlist_container {
  background-image: url("@/assets/waitlist_bg.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  width: 100%;
  background-color: #038707;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 100px 0;
}
.form {
  background-color: transparent;
  border: 1px solid #ffffff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  backdrop-filter: blur(10px);
  border-radius: 3%;
  color: #ffffff;
  box-sizing: border-box;
}
.form_header {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
}
.form_subheader {
  margin-bottom: 30px;
}
input {
  background-color: transparent;
  border: 1px solid #ffffff;
  width: 100%;
  color: #ffffff;
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
.primary_button {
  background-color: #0fac11;
  border: none;
  color: #ffffff;
  font-weight: 700;
  padding: 1em 0;
  border-radius: 0;
  margin-top: 10px;
  width: 100%;
}
.primary_button:hover {
  background-color: #056406;
  transition: 0.5s;
  cursor: pointer;
}
select {
  background-color: transparent;
  border: 1px solid #ffffff;
  width: 100%;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 50px;
  font-size: 13px;
  padding: 0 10px;
  font-weight: 400;
  line-height: 150%;
}
option {
  color: black;
  font-size: 13px;
}

@media screen and (max-width: 1080px) {
  .waitlist_container {
    background-image: url("@/assets/waitlist_bg.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 100px 0;
  }
}
@media screen and (max-width: 700px) {
  .waitlist_container {
    background-image: url("@/assets/waitlist_bg.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 100px 0;
  }

  .form {
    background-image: none;
    border: none;
    padding: 0;
    backdrop-filter: none;
    border-radius: 3%;
  }
}
</style>
