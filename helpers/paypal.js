const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ab6CX0eARJb8kmHbpB_HDmytSWnvEYW6sOTkzI-yCM4RubX2adR7LdcE0W7VZJs4p-hnXyERWLkKYObD",
  client_secret: "EDWeHdC_ZX2xzmqkyRUCGmZAkVPlF1uTVCx6qkB1Q57AWaKLlzw65fKZ6XsisWejUznEeez5-VdhB2a-",
});

module.exports = paypal;
