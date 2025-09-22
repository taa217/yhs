import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

it('renders YHS hero heading', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', { name: /youth horizon network/i })
  ).toBeInTheDocument()
})
