<script lang="ts">
  import FullPageSpinner from './FullPageSpinner.svelte'
  import { pb } from '../pocketbase'
  import { Section } from 'flowbite-svelte-blocks'
  import {
    Drawer,
    Button,
    CloseButton,
    Label,
    Input,
    Textarea,
    Select,
  } from 'flowbite-svelte'
  import { PlusOutline } from 'flowbite-svelte-icons'
  import { sineIn } from 'svelte/easing'

  let { collection } = $props()

  let hidden = $state(true)
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }

  let showSpinner = $state(false)

  const handleCancel = () => {
    hidden = true
  }

  const handleCreate = async (event) => {
    event.preventDefault()

    const submitButton = event.target.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.disabled = true
    }

    try {
      const formData = new FormData(event.target)
      const data = { name: formData.get('name') }
      showSpinner = true
      await pb.collection(collection).create(data)
      window.location.reload()
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please try again.')
      showSpinner = false
    }
  }
</script>

<Button on:click={() => (hidden = false)}>
  <PlusOutline class="h-3.5 w-3.5 mr-2" />Add {collection}
</Button>
<Drawer transitionType="fly" {transitionParams} bind:hidden id="sidebar4">
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      New {collection}
    </h5>
    <CloseButton
      on:click={() => (hidden = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <form onsubmit={handleCreate} class="mb-6">
    <div class="mb-6">
      <Label for="name" class="block mb-2">Name</Label>
      <Input
        id="name"
        name="name"
        required
        placeholder="Type {collection} name"
      />
    </div>
    <div
      class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute"
    >
      <Button type="submit" class="w-full">Add {collection}</Button>
      <Button class="w-full" color="light" on:click={handleCancel}>
        <svg
          aria-hidden="true"
          class="w-5 h-5 -ml-1 sm:mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
        Cancel
      </Button>
    </div>
  </form>
</Drawer>

{#if showSpinner}
  <FullPageSpinner />
{/if}
