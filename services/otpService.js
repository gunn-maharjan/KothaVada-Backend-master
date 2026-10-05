require("fetch-everywhere");
const KVConstants = require("../constants/appContants");

const sendSMS = async (smsData) => {
  let response;
  smsData.key = KVConstants.SMS.KEY;
  smsData.senderid = KVConstants.SMS.SENDERID;
  smsData.responsetype = KVConstants.SMS.RESPONSETYPE;
  
 // Construct the full URL with query parameters
 const queryString = new URLSearchParams(smsData).toString();
 const url = `${KVConstants.SMS.API_URL_SMS}?${queryString}`;

  //send sms to mobile api call
  await fetch(url, {
    // mode: 'no-cors',
    method: "GET"
  })
    .then(async (res) => {
      try {
        const jsonRes = await res.json();
        response = res.status;
      } catch (err) {
        console.log(err);
        throw err;
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

/*
 * method to generate otp
 */
const generateOTP = () => {
  var otpLength = KVConstants.SMS.OTP_LENGTH;
  let number = 1;
  for (let i = 0; i < otpLength; i++) {
    number = number * 10;
  }
  let otpNumber = Math.floor(Math.random() * number);
  console.log("OTPNumber" + number);
  //Uncomment this during live
  // return otpNumber;
  return 111111;
};

module.exports.sendSMS = sendSMS;
module.exports.generateOTP = generateOTP;
