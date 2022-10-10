import Image from 'next/image'
import styles from '/styles/producto.module.css'
import React,{ useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Cart from './Cart.jsx'



function Producto() {
	const [ cantidad, setCantidad ] = useState(0)
	const [ carrito, setCarrito ] = useState(true)

	const [ canasta, setCanasta ] = useState([])
	const nombreFrutilla = 'Frutilla'
	const precioFrutilla = 399
	const nombreAlmendra = 'Almendra'
	const precioAlmendra = 350

	const add = (nombre,precio) => {
		setCanasta([
			...canasta
			,{
					nombre:nombre,
					precio:precio,
					cantidad:cantidad,
		
				}])
	}
	return (
		<>
			<div className={'num'+carrito}>
				<Cart canasta={canasta}/>
			</div>
			<style jsx>{`

				.numfalse{
					display: none
				}
				.numtrue{
					display: block
				}
			`}</style>
			<div className={styles.carrito}>
				<Image layout="fill" onClick={()=>setCarrito(!carrito)} src={"/img/cesta-de-la-compra.png"} alt="" />
			</div>
			
			<div className={styles.productoContainer}>
				<h2 id="pdet">Productos de temporada</h2>
				<div className={styles.productos}>
					<div>
						<Image layout="fill" src={"/img/frutilla.webp"}/>
						<h5>Frutilla mendocina</h5>
						<p>$399 x 100g</p>

						
						<form className={styles.control}>
							<input onChange={(e)=>setCantidad(e.target.value)} type="number" />
							<p onClick={()=>add(nombreFrutilla,precioFrutilla)}>+</p>
						</form>
					</div>
					<div>
						<Image layout="fill" src={"/img/almendra.jpg"}/>
						<h5>Almendras</h5>
						<p>$350 x 100g</p>
						
						<form className={styles.control}>
							<input onChange={(e)=>setCantidad(e.target.value)} type="number" />
							<p onClick={()=>add(nombreAlmendra,precioAlmendra)}>+</p>
						</form>
					</div>
				
					
				</div>
			</div>
	    </>
	)
}
export default Producto