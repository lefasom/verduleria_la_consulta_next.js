import  Link  from 'next/link'
import styles from '/styles/nav.module.css'


function Nav() {
	return (
		<>
		<div className={styles.navContainer}>
		    <nav>
				<Link href="#contacto">contacto</Link>
				<Link href="#">Ubicacion</Link>
			</nav>
			<div>
				{/*<span>Facebook</span>
				<span>Instagram</span>	*/}
				<div className={styles.circulo}>
					<div className={styles.nombre}>
						<h4>Verduleria <br/> LA CONSULTA</h4>
					</div>
				</div>
			</div>
			<div className={styles.navInferiorContainer}>
				<nav>
					<Link href="#">Galeria</Link>
					<Link href="#blog">Blog</Link>
					<Link href="#mail">Reseña</Link>
				</nav>
			</div>
				
		</div>
		</>
	)
}

export default Nav