import { makeAutoObservable, runInAction } from 'mobx'
import { getTodo, getTodoById, updateTodo } from 'shared/api/todos'
import { QueryParrams, Todo } from 'shared/api/todos/model'

class TaskStore {
  taskList: Todo[] = []
  task?: Todo
  isLoading = false
  taskListError = ''
  taskError = ''
  isUpdateLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  getTaskList = async (params: QueryParrams) => {
    try {
      this.isLoading = true
      const date = await getTodo(params)
      runInAction(() => {
        this.isLoading = false
        this.taskList = date
      })
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false
          this.taskListError = error.message
        })
      }
    }
  }

  getTask = async (id: string) => {
    try {
      this.isLoading = true
      const date = await getTodoById(id)
      runInAction(() => {
        this.isLoading = false
        this.task = date
      })
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isLoading = false
          this.taskError = error.message
        })
      }
    }
  }

  updateTodo = async (todo: Todo) => {
    try {
      this.isUpdateLoading = true
      await updateTodo(todo)
      this.isUpdateLoading = false
    } catch (error) {
      this.isUpdateLoading = false
      throw error
    }
  }
}

export const store = new TaskStore()
