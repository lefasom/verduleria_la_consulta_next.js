import React from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import 'bootswatch/dist/lux/bootstrap.min.css'
function CheckoutForm() {

	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card' ,
			card: elements.getElement(CardElement)
		})
		if (!error){
			console.log(paymentMethod)
		}
	}

	return <div className="margen">

		<form onSubmit={handleSubmit} className="card card-body">
			{/*<img src="../../img/kale.webp" alt="kale" />*/}
			<div className="form-group">
 				<CardElement className='form-control'/>
			</div>
			<button className="btn btn-success">
				Buy
			</button>
			<style jsx>{`
				
				.card{
					width: 90%;
					margin: 0 auto;
				}

			`}</style>
			
		</form>
	</div>
}

export default CheckoutForm