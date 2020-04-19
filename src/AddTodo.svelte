<script>
  import { todos, Todo } from "./stores/todos.js";
  import Tag from "./Tag.svelte";
  function addTodo(todo) {
    todos.update(todolist => [...todolist, todo]);
  }
  function addTag(tag) {
    todos.update();
  }
  let todoInput = "";
  let tag = "";
  let tagList = [];
  let w;
  let h;
</script>

<style>
  .todo {
    display: flex;
    flex-direction: row;
    border: none;
    border-radius: 1rem;
    max-width: 700px;
    margin: 0.5rem auto;
    padding: 1rem 1rem;
    justify-content: space-between;
    background-color: #dbdbe2;
    font-weight: 300;
    color: #393944;
  }
  .input-container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    border: none;
    align-items: baseline;
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
  .plain-input {
    border: none;
    border-bottom: #39394455 2px solid;
    background: none;
    font-family: inherit;
    /* flex: 1; */
    margin: 0;
    text-transform: uppercase;
  }
  .tags-input {
    width: 10rem;
  }
  .todo-input {
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
  }
  input:focus {
    outline: none;
  }
</style>

<div>
  <div class="todo">
    <div class="input-container" bind:offsetWidth={w} bind:clientHeight={h}>
      <input
        class="plain-input todo-input"
        type="text"
        name="addTodo"
        id="addTodo"
        placeholder="add todo..."
        bind:value={todoInput} />
      {#each tagList as tag}
        <Tag {tag} />
      {/each}
      <input
        class="plain-input tags-input"
        type="text"
        name="tags"
        placeholder="tags..."
        on:keypress={e => {
          if (e.code === 'Enter' && tag.length > 0) {
            tagList = [...tagList, tag];
            tag = '';
          }
        }}
        bind:value={tag} />
    </div>
    <button
      class="todo-button done-button"
      on:click={() => {
        addTodo(new Todo(todoInput, tagList));
        todoInput = '';
        tagList = [];
      }}>
      ✔️
    </button>
    <button class="todo-button delete-button" on:click={() => {}}>X</button>
  </div>
</div>
