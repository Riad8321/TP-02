import { createRoot } from 'react-dom/client'
import ShoppingList from '../src/components/ShoppingList'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ShoppingList title="liste de courses" />)
