const { Client } = require("square");
require("dotenv").config();

const env = "production";
const accessToken = process.env.SQUARE_ACCESS_TOKEN;
console.log(accessToken)
// Set Square credentials
const config = {
  accessToken,
  environment: env,
  userAgentDetail: "tbt_appointments" // Remove or replace this detail when building your own app
};

// Extract instances of Api that are used
// You can add additional APIs here if you so choose
const {
  customersApi,
  bookingsApi,
  catalogApi,
  locationsApi,
  teamApi
} = new Client(config);

module.exports = {
  bookingsApi,
  catalogApi,
  customersApi,
  locationsApi,
  teamApi
};