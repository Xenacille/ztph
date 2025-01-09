<script lang="ts">
  import Sidebar from './../../lib/components/Sidebar.svelte'
  import Navbar from './../../lib/components/Navbar.svelte'
  import type { PageData } from './$types'
  import type { Snippet } from 'svelte'

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()
</script>

<Navbar />

<div class="mx-auto flex flex-wrap container">
  <Sidebar />
  <div class="flex-grow">
    <div class="bg-white dark:bg-gray-800 px-2 sm:px-4 py-2.5 w-full">
      {@render children?.()}
    </div>
  </div>
</div>
