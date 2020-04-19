<script>
  import { todos, Todo as TodoClass } from "./stores/todos.js";
  import AddTodo from "./AddTodo.svelte";
  import Todo from "./Todo.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>What a ToDo!!</h1>
  <div>
    {#each $todos as todo}
      <Todo {todo} />
    {:else}
      <Todo todo={new TodoClass('You have no Todos', [], true)} />
    {/each}
  </div>
  <AddTodo />
</main>
`
