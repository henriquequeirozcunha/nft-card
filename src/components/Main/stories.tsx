import Main from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
