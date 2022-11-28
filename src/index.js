import { createRoot } from 'react-dom/client'
import ShoppingList from '../src/components/ShoppingList'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ShoppingList title="liste de courses" />)
