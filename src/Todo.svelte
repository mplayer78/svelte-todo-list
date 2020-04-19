<script>
  export let todo;
  import { todos } from "./stores/todos.js";
  import Tag from "./Tag.svelte";
  function handleDelete() {
    todos.update(todos => todos.filter(val => val.title !== todo.title));
  }
  function handleDone() {
    todos.update(todos =>
      todos.map(val =>
        val.title === todo.title ? { ...val, done: !val.done } : val
      )
    );
  }
  console.log("todo", todo);
</script>

<style>
  .todo {
    display: flex;
    flex-direction: row;
    border: none;
    border-radius: 1rem;
    max-width: 700px;
    margin: 0.5rem auto;
    padding: 0.2rem 1rem;
    justify-content: space-between;
    background-color: #dbdbe2;
    font-weight: 300;
    color: #393944;
  }
  .text-container {
    display: flex;
    flex: 1;
    justify-content: center;
    border: none;
    flex-direction: column;
  }
  .todo-text {
    text-transform: uppercase;
    font-family: inherit;
    font-weight: inherit;
  }
  .todo-button {
    border: none;
    background-color: transparent;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: inherit;
  }
  .todo-done {
    opacity: 0.3;
  }
  .delete-button {
    color: #dd0000;
    opacity: 0.3;
  }
  .delete-button:hover {
    opacity: 1;
  }
  .done-button {
    opacity: 0.3;
  }
  .done-button:hover {
    opacity: 1;
  }
  .tag-container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="todo {todo.done ? 'todo-done' : ''}">
  <div class="text-container">

    <h3 class="todo-text">{todo.title}</h3>
    <div class="tag-container">
      {#each todo.tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  </div>
  <button class="todo-button done-button" on:click={() => handleDone()}>
    ✔️
  </button>
  <button class="todo-button delete-button" on:click={() => handleDelete()}>
    X
  </button>
</div>
