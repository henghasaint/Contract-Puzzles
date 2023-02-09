const fetch = require("node-fetch");

const url = "https://eth-mainnet.g.alchemy.com/v2/docs-demo";
const options = {
  method: "POST",
  headers: { accept: "application/json", "content-type": "application/json" },
  body: JSON.stringify({ id: 1, jsonrpc: "2.0", method: "eth_accounts" }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
// ethers.Wallet.createRandom()
