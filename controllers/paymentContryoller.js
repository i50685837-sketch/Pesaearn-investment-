const pesapal = require("../services/pesapalService");

exports.deposit = async (req, res) => {
  try {
    const { amount, phone, email, firstName, lastName } = req.body;

    const orderData = {
      id: "PESAEARN-" + Date.now(),
      currency: "KES",
      amount: amount,
      description: "Pesaearn Investment Deposit",
      callback_url: process.env.PESAPAL_CALLBACK_URL,
      notification_id: process.env.PESAPAL_NOTIFICATION_ID,

      billing_address: {
        email_address: email,
        phone_number: phone,
        country_code: "KE",
        first_name: firstName,
        last_name: lastName
      }
    };

    const response = await pesapal.submitOrder(orderData);

    res.status(200).json(response);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to create payment.",
      error: err.response?.data || err.message
    });
  }
};

exports.status = async (req, res) => {
  res.json({
    message: "Transaction status endpoint coming next."
  });
};

exports.callback = async (req, res) => {
  res.json({
    message: "Payment callback received."
  });
};
