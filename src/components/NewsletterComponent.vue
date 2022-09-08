<template>
    <div class="newsletter_container">
        <div class="newsletter_text">
            <p class="newsletter_header">Subscribe To Our News Letter</p>
            <p>We recommend you subscribe to our promo program for daily updates.</p>
        </div>
        <div class="input_div">
            <input type="email" id="" placeholder="Enter your email address">
            <button class="sub_btn">Subscribe</button>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .newsletter_container{
        margin: 0 auto;
        border: 1px solid #E0E0E0;
        padding: 40px 100px ;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
.sub_btn {
    background-color: #000000;
    color: #ffffff;
    padding: 1.5em 3em;
    font-size: 12px;
    border-radius: 0;
    border: none;
    cursor: pointer;
}
input{
    height: 3.8em;
    width: 100%;
    padding: 0 10px;
    outline: none;
    border-radius: 0;
    border: 1px solid #E0E0E0;
    color: #404040;
     
}
.input_div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px auto;
}
.newsletter_text{
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    text-align: center;
    color: #2A2A2A;
}
.newsletter_header{
font-weight: 600;
font-size: 40px;
line-height: 140%;
text-align: center;
color: #2A2A2A;
 margin-bottom: 15px;
}


@media screen and (max-width: 1080px) {
 .newsletter_container{
        margin: 0 auto;
        border: none;
        padding: 40px 100px ;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>