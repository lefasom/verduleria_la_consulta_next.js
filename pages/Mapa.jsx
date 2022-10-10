import L from 'leaflet'
import {CircleMarker,Circle, MapContainer, TileLayer, useMap, Marker, Popup, Polygon } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '/styles/mapa.module.css'

function Mapa() {
		const [ location, setLocation] = useState({
			longitude: 0,
			latitude: 0,
		})

		useEffect(() => {
			navigator.geolocation.getCurrentPosition(
				function (position){
					setLocation({
						longitude: position.coords.longitude,
						latitude: position.coords.latitude,
					})
				},
				function (error){
					console.log(error)
				},
				{
					enableHighAccuracy: true
				}
				)
			
		},[])
	
		   const atras = '<'
	return (
			<>
				<div className={styles.mapaContainer}>
					<div className={styles.a}>
						<Link href="/">
							{atras}
						</Link>
					</div>
					<div className={styles.fila}>
						<p> Mi Ubicacion</p>
						<h5>Verduleria</h5>
					</div>	
					  	<MapContainer className={styles.map} center={[-33.7349,-69.1240]} zoom={7} scrollWheelZoom={false}>
						 <TileLayer
						    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						 />
					<Marker 
					position={[-33.73484,-69.1242]} 
					icon={L.divIcon({
						className: "myMarker",
						html:`<img style="witdh:22px;height:22px" src="../../img/marker2.png" alt="" />
						`,
					})}

					/>
					<Marker 
					 position={[location.latitude, location.longitude]}
					icon={L.divIcon({
						className: "myMarker",
						html:`
						<img style="witdh:22px;height:22px;margin:0" src="../../img/marker1.png" alt="" />
						`,
					})}

					/>

					</MapContainer>
				

					

				</div>
			</>
	)
}

export default Mapa