import { render } from '@redwoodjs/testing/web'

import CreateEvent from './CreateEvent'

describe('CreateEvent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateEvent />)
    }).not.toThrow()
  })
})
