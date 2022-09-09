<template>
  <div class="waitlist_container">
    <div class="form">
      <p class="form_header">Join our Wait List</p>
      <form class="form_input" @submit.prevent="register">
        <div>
          <label for="name">*Name:</label>
          <br />
          <input
            id="name"
            v-model="selected.name"
            required
            type="text"
            class=""
          />
        </div>
        <div>
          <label for="email">*Email :</label>
          <br />
          <input
            id="email"
            v-model="selected.email"
            @blur="validateEmail"
            type="email"
            required
            class=""
          />
        </div>
        <div>
          <label for="work">Where do you work :</label>
          <br />
          <input
            id="work"
            v-model="selected.work"
            required
            type="text"
            class=""
          />
        </div>
        <div>
          <label for="pow">*Which would you prefer</label>
          <select id="pow" v-model="selected.owner">
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
      selected: {
        name: "",
        email: "",
        work: "",
        owner: "",
      },
    };
  },
  methods: {
    validateEmail() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(this.selected.email)) {
        this.msg["email"] = "Please enter a valid email address";
      } else {
        this.msg["email"] = "";
      }
    },

    submitForm() {
      if (this.selected.name === "") {
        this.$toasted.error("Please fill your name");
        return false;
      }
      if (this.selected.email === "") {
        this.$toasted.error("Please fill your email");
        return false;
      }
      if (this.selected.owner === "") {
        this.$toasted.error("Please select which you'd prefer");
        return false;
      }
      if (this.selected.email === this.validateEmail) {
        this.$toasted.error("email not correct");
        return false;
      }
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.selected)
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            this.$toasted.success("Success! Thank you for your Response");
            this.selected = "";
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
  font-size: 25px;
  font-weight: 600;
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
