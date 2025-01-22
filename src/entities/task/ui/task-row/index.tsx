import { Card, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  id: number
}

export const TaskRow = ({ title, id }: Props) => {
  return (
    <Card style={{ width: '600px' }}>
      <Checkbox>open</Checkbox>
      <Link to={`/${id}`}>{title}</Link>
    </Card>
  )
}
