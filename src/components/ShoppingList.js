import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShoppingList = (props) => {
    // TODO : créer un state pour stocker la liste d items
    const [shopping, setShopping] = useState([]);

    useEffect(() => {
        axios
            .get('./items.json')
            .then(resp => resp.data)
            .then(fetchedItems => {
                // TODO: enregistrer les items dans le state
                return setShopping(fetchedItems)
                console.log(fetchedItems)
            })
    }, [])

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {shopping.map(shopping => {
                    return (
                        <li>
                            {shopping.item_name} - Quantity {shopping.quantity} - Price {shopping.item_cost}
                        </li>
                    )
                    }
                )}

            </ul>
        </div>
    )
}

export default ShoppingList