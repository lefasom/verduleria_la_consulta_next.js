import Image from 'next/image'
// import Stripe from './stripe/Stripe.jsx'
import styles from '/styles/producto.module.css'
import React,{ useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'




function Producto() {

	const id = Math.random()

	var total = 0;
	var producto = 0;

	const atras = "<"
	const [ cantidad, setCantidad ] = useState(0)
	const [ carrito, setCarrito ] = useState(false)

	const [ canasta, setCanasta ] = useState([])
	const nombreFrutilla = 'Frutilla'
	const precioFrutilla = 399
	const nombreAlmendra = 'Almendra'
	const precioAlmendra = 350

	const add = (nombre,precio) => {
		setCanasta([
			...canasta
			,{
					id:id,
					nombre:nombre,
					precio:precio,
					cantidad:cantidad,
		
				}])
	}

	const deleteProducto = (id) => {
		setCanasta(
	    	canasta.filter((val) => {
	        		return val.id != id;
	        })
	    )
	    
	}
	return (
		<>
			{/*<div className={'num'+carrito}>
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
									<button onClick={()=>deleteProducto(val.id)}>
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
				<<Stripe />
			</div>
			</div>
		*/}
		{/*	<style jsx>{`

				.numfalse{
					display: none
				}
				.numtrue{
					display: block
				}
			`}</style>*/}
			{/*<div className={styles.carrito}>
				<img onClick={()=>setCarrito(!carrito)} src={"/img/carrito-de-supermercado.png"}  />
			</div>*/}
			
			<div className={styles.productoContainer}>
				<h2 id="pdet">Productos de temporada</h2>
				<div className={styles.productos}>
					<div>
						<img layout="fill" src={"/img/frutilla.webp"}/>
						<h5>Frutilla mendocina</h5>
						<p>$399 x 100g</p>

						
						{/*<form className={styles.control}>
							<input onChange={(e)=>setCantidad(e.target.value)} type="number" />
							<h3 onClick={()=>add(nombreFrutilla,precioFrutilla)}>Agregar al Carrito</h3>
						</form>*/}
					</div>
					<div>
						<img layout="fill" src={"/img/almendra.jpg"}/>
						<h5>Almendras</h5>
						<p>$350 x 100g</p>
						
					{/*	<form className={styles.control}>
							<input onChange={(e)=>setCantidad(e.target.value)} type="number" />
							<h3 onClick={()=>add(nombreAlmendra,precioAlmendra)}>Agregar al Carrito</h3>
						</form>*/}
					</div>
				
					
				</div>
			</div>
	    </>
	)
}
export default Producto