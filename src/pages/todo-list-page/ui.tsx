import { Result, Row, Space, Spin } from 'antd'
import { taskModel, TaskRow } from 'entities/task'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const TodoListPage = observer(() => {
  const {
    store: { getTaskList, isLoading, taskListError, taskList },
  } = taskModel

  useEffect(() => {
    getTaskList({})
  }, [])

  if (taskListError) {
    return <Result title={taskListError} />
  }

  return (
    <Space direction='vertical'>
      <p>filter</p>
      {isLoading ? (
        <Spin />
      ) : (
        taskList.map(task => (
          <Row>
            <TaskRow key={task.id} title={task.title} id={task.id} />
          </Row>
        ))
      )}
    </Space>
  )
})
