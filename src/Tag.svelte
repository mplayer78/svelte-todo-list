<script>
  export let tag;
</script>

<style>
  .tag-container {
    border: none;
    border-radius: 400px;
    background-color: #39394455;
    color: #393944aa;
    max-height: 2rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0.5rem;
    white-space: nowrap;
    margin: 0.2rem;
    max-width: 5rem;
  }
</style>

<div class="tag-container">{tag}</div>
