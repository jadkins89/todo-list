import React, { RefObject, createRef } from 'react';
import { observable, action, computed } from 'mobx';

export interface ItodoStore {
    todoId: number,
    todoInput: RefObject<HTMLInputElement>
}

export class todoStore implements ItodoStore {
    @observable todoId = 0;
    @observable todoInput = createRef<HTMLInputElement>();
}
