<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import { Section, Register } from 'flowbite-svelte-blocks'
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte'
  import { applyAction, enhance } from '$app/forms'
</script>

<Section name="login">
  <Register href="/">
    <svelte:fragment slot="top">
      <img class="mr-2 h-8 w-8" src="/mcl.svg" alt="logo" />
      MCL Car Rental Services
    </svelte:fragment>
    <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
      <form
        class="flex flex-col space-y-8"
        method="POST"
        use:enhance={() => {
          return async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie)
            await applyAction(result)
          }
        }}
      >
        <h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">
          Login
        </h3>
        <Label class="space-y-2">
          <span>Email</span>
          <Input type="email" name="email" required />
        </Label>
        <Label class="space-y-2">
          <span>Password</span>
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit" class="w-full1">Sign in</Button>
      </form>
    </div>
  </Register>
</Section>
