import { writable } from "svelte/store";

export class Todo {
  constructor(title, tags, done = false) {
    this.title = title;
    this.tags = tags;
    this.done = done;
  }
}

export const todos = writable([]);
