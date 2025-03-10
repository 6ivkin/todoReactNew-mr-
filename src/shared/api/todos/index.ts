import { httpClient } from '../http-client'
import { QueryParrams, Todo } from './model'

const SLUG = 'todos'

export const getTodo = (params: QueryParrams) => httpClient.get(SLUG, { searchParams: params }).json<Todo[]>()

export const getTodoById = (id: string) => httpClient.get(`${SLUG}/${id}`).json<Todo>()

export const updateTodo = (todo: Todo) => httpClient.put(`${SLUG}/${todo.id}`, { json: todo }).json<Todo>()
