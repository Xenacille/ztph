<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import { getUserContext } from '$lib/contexts/user'
  import { applyAction, enhance } from '$app/forms'
  import { page } from '$app/stores'
  import { ChevronDownOutline } from 'flowbite-svelte-icons'
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownDivider,
    Avatar,
  } from 'flowbite-svelte'

  let activeUrl = $derived($page.url.pathname)

  const user = getUserContext()
</script>

<Navbar>
  <NavBrand href="/">
    <img
      src="/mcl.svg"
      class="me-3 h-6 sm:h-9"
      alt="MCL Car Rental Services Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >MCL Car Rental Services</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    {#if !activeUrl.startsWith('/admin/')}
      <NavLi href="/">Home</NavLi>
      <NavLi href="/vehicles">Vehicles</NavLi>
      <NavLi href="/contacts">Contacts</NavLi>
    {:else if $user}
      <NavLi class="cursor-pointer">
        {$user.email}<ChevronDownOutline
          class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem
          ><form
            method="POST"
            action="/logout"
            use:enhance={() => {
              return async ({ result }) => {
                pb.authStore.clear()
                await applyAction(result)
              }
            }}
          >
            <button>Log out</button>
          </form></DropdownItem
        >
      </Dropdown>
    {/if}
  </NavUl>
</Navbar>
