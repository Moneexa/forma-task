import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Forma from './Forma.tsx'
import './index.css'
import { SolutionsProvider } from './store/Solutions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolutionsProvider>
      <Forma />

    </SolutionsProvider>

  </StrictMode>,
)
