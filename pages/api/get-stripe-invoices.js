const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function ListAllInvoices(req, res) {
  const paymentIntents = await stripe.paymentIntents.list({
    limit: 3,
  });

  res.json({ data: paymentIntents.data });
}

export default ListAllInvoices;
