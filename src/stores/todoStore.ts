import React, { RefObject, createRef, KeyboardEvent } from 'react';
import { observable, action, computed } from 'mobx';

export interface ItodoStore {
    todoId: number,
    todoInput: RefObject<HTMLInputElement>,
    todos: Itodo[],
    addTodo(event: KeyboardEvent<HTMLInputElement>): void,
    deleteTodo(index: number): void,
    checkTodo(todo: {}, index: number): void,
    remaining: number
}

interface Itodo {
    id: number,
    title: string,
    completed: boolean
}

export class todoStore implements ItodoStore {
    @observable todoId = 0;
    @observable todoInput = createRef<HTMLInputElement>();
    @observable todos: Itodo[] = [];

    @action
    public addTodo = (event: KeyboardEvent<HTMLInputElement>) => {
        let currInput: string = "";

        if (event.key === 'Enter') {
            currInput = this.todoInput.current!.value;
        }

        if (currInput.trim().length === 0) {
            return;
        }

        // adds new todo element to array of todos
        this.todos.push({
            id: this.todoId,
            title: currInput,
            completed: false
        });

        this.todoId++;
        this.todoInput.current!.value = "";
    }

    @action
    public deleteTodo = (index: number) => {
        this.todos.splice(index, 1);
    }

    // Takes todo element as parameter to modify its completed attribute
    @action
    public checkTodo = (todo: Itodo, index: number) => {
        todo.completed = !todo.completed;
        this.todos.splice(index, 1, todo);
    }

    @computed get remaining(): number {
        return this.todos.filter(todo => !todo.completed).length;
}
}
