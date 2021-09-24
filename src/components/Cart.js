import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const items = Object.keys(cart)
    const total = items.reduce(
        (acc, item) => acc + cart[item].amount * cart[item].price, 0
    )

    function changeAmount(name, price, value) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (value === -1 && currentPlantSaved.amount === 1) {
            updateCart(cart.filter(
                (plant) => plant.name !== name
            ))
        } else {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + value }
            ])
        }
    }

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount} {"  "}
                                <button onClick={() => changeAmount(name, price, -1)}>-</button>
                                <button onClick={() => changeAmount(name, price, 1)}>+</button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart