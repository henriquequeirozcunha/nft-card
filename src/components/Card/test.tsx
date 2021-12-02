import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import Card from '.'
import item from './mock'

describe('<Card/>', () => {
  it('should render Card Component', () => {
    const { container } = renderWithTheme(<Card {...item} />)

    expect(
      screen.getByRole('heading', { name: /equilibrium/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Card {...item} />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
