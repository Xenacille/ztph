<script lang="ts">
  import FullPageSpinner from './FullPageSpinner.svelte'
  import { pb } from './../pocketbase.ts'
  import { Section } from 'flowbite-svelte-blocks'
  import { Button, Modal } from 'flowbite-svelte'
  let { collection, id, name } = $props()
  let show = $state(false)
  let showSpinner = $state(false)

  const handleDelete = async () => {
    showSpinner = true
    await pb.collection(collection).delete(id)
    window.location.reload()
  }
</script>

<Button size="xs" on:click={() => (show = true)} color="red">Delete</Button>
<Modal title="" bind:open={show} autoclose size="sm" class="w-full">
  <svg
    class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill-rule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clip-rule="evenodd"
    /></svg
  >
  <p class="mb-4 text-gray-500 dark:text-gray-300 text-center">
    Are you sure you want to delete <strong>{name}</strong>?
  </p>
  <div class="flex justify-center items-center space-x-4">
    <Button color="light">No, cancel</Button>
    <Button color="red" on:click={handleDelete}>Yes, I'm sure</Button>
  </div>
</Modal>

{#if showSpinner}
  <FullPageSpinner />
{/if}
