
// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51P8llMRrA3HkQ79F2tqfHOTFv5Tenq6CDF6VDzPJeO94Nrol8aGfCop30z1vmf4wqrojX3lyUfVaYHAvJe0hunkG00C11Igs06');

import Stripe from "stripe"
const stripe = Stripe('pk_test_51P8llMRrA3HkQ79FNHXdeSqTvUbYJCpEPLQMwrTs6lEbwyNFdYSLHwkJBChYTiupLd1aiby3zNR210rbjjZvF6gV00DdZdPhpi')


const demoCarritoPay = async (req, res) => {
    res.json({"msg":"CARRITO DE PAGO"})

    var charge = await stripe.charges.retrieve(
        'ch_3LiiC52eZvKYlo2C1da66ZSQ',
        {
          apiKey: 'pk_test_51P8llMRrA3HkQ79FNHXdeSqTvUbYJCpEPLQMwrTs6lEbwyNFdYSLHwkJBChYTiupLd1aiby3zNR210rbjjZvF6gV00DdZdPhpi'
        }
      );
}

const demoCreate = (req, res) => {
    res.json({"msg":"Create"})
}

const demoSuccess = (req, res) => {
    res.json({"msg":"Success"})
}

const demoCancel = (req, res) => {
    res.json({"msg":"Cancel"})
}

export {
    demoCarritoPay,
    demoCreate,
    demoSuccess,
    demoCancel
}

