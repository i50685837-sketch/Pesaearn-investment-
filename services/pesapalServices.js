const axios = require("axios");
const config = require("../config/pesapal");

let accessToken = null;

// Get Pesapal Access Token
async function getAccessToken() {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Auth/RequestToken`,
      {
        consumer_key: config.consumerKey,
        consumer_secret: config.consumerSecret
      }
    );

    accessToken = response.data.token;

    return accessToken;

  } catch (err) {
    console.error(
      "Pesapal Token Error:",
      err.response?.data || err.message
    );

    throw err;
  }
}

// Register IPN URL
async function registerIPN() {

  const token = accessToken || await getAccessToken();

  const response = await axios.post(
    `${config.baseUrl}/URLSetup/RegisterIPN`,
    {
      url: config.callbackUrl,
      ipn_notification_type: "POST"
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

// Get Registered IPNs
async function getIPNList() {

  const token = accessToken || await getAccessToken();

  const response = await axios.get(
    `${config.baseUrl}/URLSetup/GetIpnList`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

module.exports = {
  getAccessToken,
  registerIPN,
  getIPNList
};
