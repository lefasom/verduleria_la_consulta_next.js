import  Link  from 'next/link'
import Stripe from './stripe/Stripe.jsx'
import styles from '/styles/cart.module.css'

	
function Cart(props) {
	var canasta = props.canasta
	var total = 0;
	var producto = 0;

	const atras = "<"
		
	return (<>

			<div className={styles.cartContainer}>
				<h2>Carrito</h2>
			 	<div className={styles.cart}>
				 	{canasta.map( (val,index) => {
						return(
							<div key={index} className={styles.producto} >
								<h4>x{val.cantidad}</h4>
								<p><span>{val.nombre}</span></p>
								<div className={styles.resta}>
									<h4>${val.cantidad*val.precio} </h4>
									<button>
										-
									</button>	
								</div>
							</div>
						)
					})}
				</div>
				{canasta.map( (val) => {
					producto = (val.precio)*(val.cantidad)
					total += producto
				})}

				<div className={styles.total}>Total a Pagar: <b>${total}</b></div>
				<Stripe />
			</div>
		
		</>
	)
}

export default Cart