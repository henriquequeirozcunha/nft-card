import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'
import item from './mock'

export default {
  title: 'Card',
  args: item,
  component: Card
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto', height: '50rem' }}>
    <Card {...args} />
  </div>
)
