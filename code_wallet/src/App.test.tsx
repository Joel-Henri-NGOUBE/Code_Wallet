import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText(/Fragments/i)).toBeInTheDocument()
  expect(screen.getByText(/Tags/i)).toBeInTheDocument()
  expect(screen.getByText(/Info/i)).toBeInTheDocument()
  expect(screen.getByText(/No fragment yet/i)).toBeInTheDocument()

})