<template lang="">
  <div class="FAQ_container">
    <h1 class="h1">Frequently Asked Questions (F.A.Q)</h1>
    <div class="accordion-wrapper">
      <div class="accordion">
        <input type="radio" name="radio-a" id="check1" checked />
        <label class="accordion-label" for="check1"
          >Where can i download the GREACH app?</label
        >
        <div class="accordion-content">
          <p>
            Greach app is available on Google Playstore and Apple IOS. It is
            free to download and easy to use right away!
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check2" />
        <label class="accordion-label" for="check2"
          >How secure is my data?</label
        >
        <div class="accordion-content">
          <p>
            Safety of users is paramount to us at Greach. Your safety/security
            is highly guaranteed as both the drivers and riders/co-riders have
            been verified and screened. <br />
            Additionally, during a trip, users (rider/driver) can activate the
            safety feature (emergency button) whenever there is a perceived
            threat. Our process flow is designed to protect both parties in the
            case of a false alarm.
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check9" />
        <label class="accordion-label" for="check9"
          >How secure is this app?</label
        >
        <div class="accordion-content">
          <p>
            Greach assures all users of total security of the data stored on
            their profiles during registration or update of their profile at any
            point. Our highly secured system infrastructure has also been
            optimized to ensure that no third-party infringement occurs on your
            data..
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check3" />
        <label class="accordion-label" for="check3"
          >I'm new to GREACH, what do I do</label
        >
        <div class="accordion-content">
          <p>
            After downloading the app, users are expected to sign up by
            following the simple steps:
          </p>
          <ol>
            <li>
              Registration All users regardless of role/function (rider, driver,
              organizer) have a similar registration and verification process.
              Some users may require further verification depending on function.
              <br />
              After signing up, the user is required to set up his/her profile
              and go through ID/Biometric verification.
              <br />
              <p>Users can register through below channels:</p>
            </li>
            <li>
              Verification
              <ul>
                <li>
                  ID Verification: Matches Name and Phone Number. (Required for
                  all users)
                </li>
                <li>
                  Biometric Verification: Matches user’s face with face on ID
                  card (ID source: NIN, Driver’s License etc.) - Required for
                  public network onboarding, driver onboarding (ID source:
                  driver’s license)
                </li>
                <li>
                  Select your preferred payment option (Card or Wallet). If
                  Card, register your Card details to enable debiting after your
                  rides are completed. If Wallet, you will have to fund the
                  wallet with your preferred amount from your personal bank
                  account.
                </li>
                <li>You can start booking rides on Greach!</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check4" />
        <label class="accordion-label" for="check4"
          >How do I search for a ride?</label
        >
        <div class="accordion-content">
          <p>
            Rider Requests Trip -> Driver Receives Match Request -> Driver
            Accepts/Rejects Request -> Match Confirmation Sent to Rider ->Driver
            Picks up Rider -> Trip Starts -> Driver Drops off Rider
          </p>
          <p>
            Trip requests are sent to the server to match riders to drivers.
            Once there is a match, the driver receives a “match request” with
            the rider (name, picture, network match) and trip (pickup/drop-off
            location, eta/detour time) information. Driver accepts/rejects the
            trip.
          </p>
          <p>
            If the driver accepts, the driver (car details, name, picture,
            network match) and trip (eta) information is sent to the rider. Trip
            is then started.
          </p>
          <h3>Driver Availability Feature</h3>
          <p>
            A driver can pick up multiple riders along the way. A driver can
            also indicate “no longer available for pickup” at any time even when
            there are still seats available. Greach will continue to match
            riders to a driver as long as the driver’s status is “available” and
            there are seats available.
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check5" />
        <label class="accordion-label" for="check5"
          >When will I get my money (Drivers)?</label
        >
        <div class="accordion-content">
          <p>
            When a Greach driver completes a trip, they get paid after the
            rider’s wallet has been charged. This payment goes into the driver’s
            wallet.
          </p>
          <h3>Transferring to bank account</h3>
          <p>
            Drivers can connect their bank account and credit it directly from
            their wallet. <br />They can also:
          </p>
          <ul>
            <li>Add new bank accounts</li>
            <li>Remove existing bank accounts</li>
            <li>Set default bank account (auto-selected for wallet debit)</li>
            <li>
              Select an account from a list of existing account to transfer
              funds
            </li>
          </ul>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check6" />
        <label class="accordion-label" for="check6"
          >How secure is my data?</label
        >
        <div class="accordion-content">
          <p>
            Greach assures all users of total security of the data stored on
            their profiles during registration or update of their profile at any
            point. Our highly secured system infrastructure has also been
            optimized to ensure that no third-party infringement occurs on your
            data.
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check7" />
        <label class="accordion-label" for="check7"
          >How is a trip priced?</label
        >
        <div class="accordion-content">
          <p>
            Greach pricing uses a wallet system where users pre-fund their
            wallet from their bank/card.
          </p>
          <p>
            Riders are shown a billing estimate upon requesting a trip. This
            estimate is based on distance/time to get the rider to their
            destination. Our app is configured such that users have enough in
            their wallet to cover this bill estimate
          </p>
          <p>
            The final bill will be different from the estimate. As the trip
            progresses the bill estimate is adjusted. As more riders join the
            trip, the bill for individual riders is reviewed. When the trip
            ends, the rider is sent a second (final) bill and payment is made
            automatically from the wallet.
          </p>
        </div>
      </div>
      <div class="accordion">
        <input type="radio" name="radio-a" id="check8" />
        <label class="accordion-label" for="check8"
          >How do I pay for my ride?</label
        >
        <div class="accordion-content">
          <p>
            Greach pricing uses a wallet system where users pre-fund their
            wallet from their bank/card.
          </p>
          <p>
            Riders are shown a billing estimate upon requesting a trip. This
            estimate is based on distance/time to get the rider to their
            destination. Our app is configured such that users have enough in
            their wallet to cover this bill estimate
          </p>
          <p>
            The final bill will be different from the estimate. As the trip
            progresses the bill estimate is adjusted. As more riders join the
            trip, the bill for individual riders is reviewed. When the trip
            ends, the rider is sent a second (final) bill and payment is made
            automatically from the wallet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.FAQ_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 10% auto;
  gap: 50px;
  max-width: 1440px;
}
.h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 69px;
  text-align: center;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.accordion-wrapper {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}
.accordion {
  width: 100%;
  color: white;
  overflow: hidden;
  margin-bottom: 16px;
}
.accordion:last-child {
  margin-bottom: 0;
}
.accordion-label {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 16px;
  background: #f4f4f4;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  color: #404040;
}
/* .accordion-label:hover {
    background: #000000;
} */
.accordion-label::after {
  content: "\276F";
  width: 16px;
  height: 16px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.accordion-content {
  max-height: 0;
  padding: 0 16px;
  color: #404040;
  background: white;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.accordion-content p {
  margin: 0;
  color: #404040;
  /* font-size: 14px; */
  line-height: 30px;
}
input:checked + .accordion-label {
  background: #0fac11;
  color: #ffffff;
}
input:checked + .accordion-label::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
input:checked ~ .accordion-content {
  max-height: 100vh;
  padding: 16px;
}
@media screen and (max-width: 1080px) {
  .FAQ_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 10% auto;
    gap: 50px;
    max-width: 1440px;
  }
}
</style>
