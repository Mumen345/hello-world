<template>
    <div class="download_section_container">
        <div v-motion-slide-visible-once-bottom :delay="500" class="left_div">
            <p class="section_text">Download our App </p>
            <div class="download_link">
             <a href="#"><img alt="apple logo" src="@/assets/appstore.svg"/></a>
             <a href="#"><img alt="play store logo" src="@/assets/googleplay.svg"/></a>
            </div>
            <div class="section_CTA">
                <button class="primary_button">Signup as a Driver</button>
                <button class="secondary_button">Signup as a Driver</button>
            </div>
       </div>
        <div v-motion-slide-visible-once-bottom :delay="700" class="move_down"><img alt="phone mockup" class="web_img" src="@/assets/Mockups.png"/><img alt="phone mockup" class="mobile_img" src="@/assets/Mockups.png"/></div>
    </div>
</template>
<script setup>
</script>
<style scoped>
    .left_div {
        margin-top: 70px;

    }
    .mobile_img{
        display: none;
    }
    .download_section_container p{
        text-align: center;
    }
    .download_section_container {
        background-image: url("@/assets/download_bg.png");
        background-repeat: no-repeat;
        background-size: auto;
        min-height: 340px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        width: 100%;
    }
     span{
        color: #0FAC11;
        font-size: 40px;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: 5px;
    }
    .section_text {
        color: #ffffff;
         font-size: 40px;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: 5px;
    }
    .download_link {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 20px auto;
        width: 80%;

    }
    .move_down{
        margin-top: 70px;
       

    }
    .section_CTA {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

    }
    .primary_button{
        background-color: #0FAC11;
        border: 1px solid #0FAC11;
        width: 90%;
        color: #ffffff;
        font-weight: 500;
        padding: 1.3em 3.5em;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;

    }
      .primary_button:hover{
        background-color: #056406;
        transition: 0.3s;
        cursor: pointer;
        border: 1px solid #056406;
    }
    .secondary_button {
        background-color: transparent;
        padding: 1.3em 3.5em;
        cursor: pointer;
        border: 1px solid #0FAC11;
        border-radius: 5px;
        font-size: 12px;
        color: #0FAC11;
        width: 90%;
    }
      .secondary_button:hover{
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid #ffffff;
        color: white;

    }
    @media screen and (max-width: 1080px) {
        .section_CTA {
            width: 100%;
            display: flex !important;
            flex-direction: column !important;
            gap: 30px;
            justify-content: center;
            align-items: center;
    }
       .primary_button{
            background-color: #0FAC11;
            border: 1px solid #0FAC11;
            color: #ffffff;
            font-weight: 700;
            padding: 1.3em 3.5em;
            font-size: 12px;
            border-radius: 5px;
            cursor: pointer;
            width: 75%;
    }
       .secondary_button {
         background-color: transparent;
        padding: 1.3em 3.5em;
        cursor: pointer;
        border: 1px solid #0FAC11;
        border-radius: 5px;
        font-size: 12px;
        color: #0FAC11;
        width: 75%;
    }
    .download_section_container {
        background-image: url("@/assets/download_bg.png");
        background-repeat: no-repeat;
        background-size: auto;
        height: 340px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .mobile_img{
        display: none;
        margin: -40px auto ;
    }
    .web_img{
        display: none;
    }
    .left_div {
        width: 70%;
        margin: 70px auto ;
    }
  
    }
    @media screen and (max-width: 700px) {
    .download_section_container {
        background-image: none;
        background-repeat: no-repeat;
        background-color: black;
        background-size: auto;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .section_CTA {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* margin: 20px 0; */
        width: 100%;
    }
     .left_div {
        width: 100%;
        margin: 70px auto ;
    }
    .section_text {
        color: #ffffff;
         font-size: 30px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 5px;
    }
    }
</style>