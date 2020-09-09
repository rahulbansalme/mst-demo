import { createContext, useContext } from "react"
import { types, flow, Instance } from "mobx-state-tree";
import { values } from "mobx";

import TodoModel from './todo';

type TodoType = Instance<typeof TodoModel>
interface Todo extends TodoType { }

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const randomId = (): string => Math.floor(Math.random() * 1000).toString(36);

const later = (delay: number) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

const RootStore = types
    .model({
        todos: types.array(TodoModel),
        visibilityFilter: types.string,
        asyncCount: types.optional(types.number, 0),
        isFetchingCount: types.optional(types.boolean, false),
    })
    .views(self => ({
        getVisibleTodos() {
            const todos = values(self.todos);
            switch (self.visibilityFilter) {
                case VisibilityFilters.SHOW_ALL:
                    return todos
                case VisibilityFilters.SHOW_COMPLETED:
                    return todos.filter(t => t.completed)
                case VisibilityFilters.SHOW_ACTIVE:
                    return todos.filter(t => !t.completed)
                default:
                    throw new Error('Unknown filter: ' + self.visibilityFilter)
            }
        },
        isActiveFilter(filter) {
            return filter === self.visibilityFilter;
        }
    }))
    .actions(self => ({
        addTodo(text) {
            let id = randomId();
            const todoModel: Todo = TodoModel.create({
                id,
                text, 
                completed: false 
            })
            self.todos.push(todoModel);
        },

        setVistibilityFilter(filter: string) {
            self.visibilityFilter = filter;
        },

        setAsyncCount(count: number) {
            self.asyncCount = count;
        },

        setIsFetching(isFetchingCount: boolean) {
            self.isFetchingCount = isFetchingCount;
        },
    }))
    .actions(self => ({
        fetchAsyncCount: flow(function * () {
            self.setIsFetching(true);
            yield later(1000);
            self.setAsyncCount(values(self.todos).length);
            self.setIsFetching(false);
        })
    }));

const store = RootStore.create({
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL,
})

const RootStoreContext = createContext(store)
export const RootStoreProvider = RootStoreContext.Provider;
export const useStore = () => useContext(RootStoreContext);

export default store;