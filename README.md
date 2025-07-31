# PayLink – Borderless Stellar Payment Links

> A simple way for freelancers, creators, and anyone to get paid globally using Stellar.

---

##  What is PayLink?

PayLink is a lightweight web app that allows users to **generate payment links** to receive **XLM payments** on the **Stellar Testnet**. It listens for incoming payments to the provided Stellar address and updates the status in real-time.

No smart contracts. No wallet integrations. Just fast, affordable payments — anywhere in the world.

---

## Why?

Freelancers and small business owners in underserved regions are often **excluded from platforms like PayPal or Stripe**. PayLink uses the Stellar network to:
- Remove borders from payments
- Eliminate delays 
- Minimize fees 

---

## Features

- Generate payment links based on your wallet address + amount
- Global compatibility via Stellar Testnet
- Real-time listener for incoming XLM payments
- Confirms successful payments and displays status
- Styled with Stellar Yellow branding

---

## Screenshot

Coming soon...

---

##  Live Demo

**[Click here to open PayLink Testnet](https://your-deployment-link.vercel.app)**  
_(Replace with actual deployed link e.g. GitHub Pages or Vercel)_

---

##  Getting Started

###  Prerequisites
- Node.js (optional, if you want to bundle later)
- Git
- A Stellar Testnet wallet (generate one at [Stellar Laboratory](https://laboratory.stellar.org/#account-creator?network=test))

---

###  Usage

1. **Clone this repository**:
```bash
git clone https://github.com/Wambita/PayLink.git
cd PayLink
````

2. **Open the app**:
   You can simply open `index.html` in your browser.

Or run a local server if you'd like:

```bash
# Using Python 3.x
python -m http.server 3000
```

3. **Enter your details**:

* Paste your **Stellar public key (G...)**
* Enter the **amount of XLM** you want to receive
* Click **Generate Payment Link**

4. **Share the link** with your client/friend.

5. PayLink **listens for incoming payments** and updates the status in real-time when your wallet receives the exact amount.

---

## Tech Stack

* HTML, CSS, JavaScript
* [Stellar JS SDK](https://github.com/stellar/js-stellar-sdk)
* Stellar Testnet + Horizon API

---

##  Roadmap

* [x] MVP: Generate payment links + listen for XLM payments
* [ ] Add multi-asset support (USDC, custom tokens)
* [ ] Add QR code generation
* [ ] Build transaction explorer
* [ ] Deploy to mainnet

---

##  Author

**Wambita Sheila Fana**
Software Developer – passionate about accessible technology, Web3, and impact-driven solutions.

---


##  Acknowledgements

* Stellar Development Foundation (SDF)
* Stellar SDK and documentation
* You, for supporting borderless payments!

`
