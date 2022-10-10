import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm.jsx'

const stripePromise = loadStripe('pk_test_51LpY8BDsNnttitrOvdow28wiOQe9Cuv7uWdRWUsiVkV8pwtT74VcPRsqx0GSMPesdGsygeMeoVUqsgtd8GFK62yY00gadSqtrX')

function Stripe() {




	return (
		<Elements stripe={stripePromise}>
		   <div className="row">
		   	<div className="col-md-4 offset-md-4">
		   		<CheckoutForm />
		   	</div>
		   </div>
		</Elements>
	)
}

export default Stripe
