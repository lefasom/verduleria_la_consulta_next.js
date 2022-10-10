import styles from '/styles/info.module.css'
import Image from 'next/image'


function Info() {
	return (
		<div className={styles.containerCard}>
			<div className={styles.card}>
				<Image
				className={styles.img} 
				src={"/img/fruta-de-manzana.png"} 
				alt="" 
				width={100} 
				height={70}
				layout='responsive'
				/>
				<h4>Calidad</h4>	
				<p>Producto de calidad <br/> 100% Seleccionada</p>
			</div>
			<div className={styles.card}>

				<Image
				className={styles.img} 
				src={"/img/reloj.png"} 
				alt="" 
				width={100} 
				height={70}
				layout='responsive'
				/>
				<h4>Tiempo</h4>	
				<p>Tu pedido en menos <br/> de 24 horas</p>
			</div>	
			<div className={styles.card}>
				<Image
				className={styles.img} 
				src={"/img/tarjeta-de-credito.png"} 
				alt="" 
				width={100} 
				height={70}
				layout='responsive'
				/>
				<h4>Pagos</h4>	
				<p>Pagos Seguros con <br/> Tarjeta y Efectivo</p>
			</div>
			{/*<div className="card">
			<img src="../../img/tarjeta-de-credito.png" alt="" />
				<h4>Pagos</h4>	
				<p>Pagos Seguros con Tarjeta y Efectivo</p>
			</div>*/}
		</div>
	)
}

export default Info