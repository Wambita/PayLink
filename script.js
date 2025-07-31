const StellarSdk = window.StellarSdk;
StellarSdk.Networks.TESTNET;
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const form = document.getElementById('payForm');
const linkBox = document.getElementById('linkBox');
const linkText = document.getElementById('paymentLink');
const statusBox = document.getElementById('statusBox');
const paymentStatus = document.getElementById('paymentStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const wallet = document.getElementById('wallet').value.trim();
  const amount = parseFloat(document.getElementById('amount').value.trim());

  const link = `https://paylink.stellar.test/?dest=${wallet}&amount=${amount}&asset=XLM`;

  linkText.textContent = link;
  linkBox.classList.remove('hidden');

  listenForPayment(wallet, amount);
});

function listenForPayment(wallet, expectedAmount) {
  statusBox.classList.remove('hidden');

  server.payments()
    .forAccount(wallet)
    .cursor('now')
    .stream({
      onmessage: (payment) => {
        if (payment.to === wallet && parseFloat(payment.amount) === expectedAmount && payment.asset_type === 'native') {
          paymentStatus.textContent = `✅ Payment of ${payment.amount} XLM received!`;
        } else {
          console.log('Unmatched payment:', payment);
        }
      },
      onerror: (err) => {
        console.error('Error in payment stream:', err);
      }
    });
}
