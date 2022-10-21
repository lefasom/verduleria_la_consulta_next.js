import  Link  from 'next/link'
import styles from '/styles/nav.module.css'


function Nav() {
	return (
		
		<div className={styles.navContainer}>
		  <div className={styles.div}>  
		  <nav>
				
				<Link href="#Galeria">Galeria</Link>
				<Link href="#">Ubicacion</Link>
				<Link href="#email">Email</Link>
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
		{/*	<div className={styles.navInferiorContainer}>
				<nav>
					<Link href="#Galeria">Galeria</Link>
					<Link href="#Blog">Blog</Link>
					<Link href="#email">Email</Link>
				</nav>
			</div>*/}
				
		</div>
		

		</div>
	)
}

export default Nav