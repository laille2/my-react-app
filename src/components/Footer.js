import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState("prenom.nom@email.com")

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function validate() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input type="email"
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={validate}
			/>
		</footer>
	)
}

export default Footer