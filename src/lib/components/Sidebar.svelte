<script>
  import { page } from '$app/stores'
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from 'flowbite-svelte'
  import {
    GridOutline,
    FolderOutline,
    CogOutline,
    FireOutline,
    ArrowUpDownOutline,
    AddressBookOutline,
    TruckOutline,
  } from 'flowbite-svelte-icons'
  let activeUrl = $derived($page.url.pathname)
  let activeClass =
    'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-50 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700'
  let nonActiveClass =
    'flex items-center p-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:bg-black-100 dark:hover:bg-black-700'
</script>

<Sidebar {activeUrl} {activeClass} {nonActiveClass}>
  <SidebarWrapper class="bg-white dark:bg-gray-800">
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/admin/dashboard">
        <svelte:fragment slot="icon">
          <GridOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Movements" href="/admin/movements">
        <svelte:fragment slot="icon">
          <ArrowUpDownOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Categories" href="/admin/categories">
        <svelte:fragment slot="icon">
          <FolderOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Transmission Types" href="/admin/transmissions">
        <svelte:fragment slot="icon">
          <CogOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Engine Types" href="/admin/engines">
        <svelte:fragment slot="icon">
          <FireOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Bookings" href="/admin/bookings">
        <svelte:fragment slot="icon">
          <AddressBookOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Vehicles" href="/admin/vehicles">
        <svelte:fragment slot="icon">
          <TruckOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
