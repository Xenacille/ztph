<script lang="ts">
  import { Heading, Select, Label, Button, Span } from 'flowbite-svelte'
  import { Badge } from 'flowbite-svelte'
  import {
    ClockSolid,
    UserSolid,
    ArrowsRepeatOutline,
  } from 'flowbite-svelte-icons'
  import { SearchOutline } from 'flowbite-svelte-icons'

  let selectedBrand = 'all'
  let brands = [
    { value: 'all', name: 'Any Brand' },
    { value: 'toyota', name: 'Toyota' },
    { value: 'mitsubishi', name: 'Mitsubishi' },
    { value: 'nissan', name: 'Nissan' },
  ]
  let selectedType = 'all'
  let types = [
    { value: 'all', name: 'Any Type' },
    { value: 'sedan', name: 'Sedan' },
    { value: 'suv', name: 'SUV' },
  ]
  let selectedPriceSort = 'asc'
  let priceSorts = [
    { value: 'asc', name: 'Price Low to High' },
    { value: 'desc', name: 'Price High to Low' },
  ]
</script>

<section class="mx-auto max-w-screen-xl px-4 py-4 sm:py-8 lg:px-6">
  <Heading tag="h2" class="mb-4">Browse Vehicles</Heading>

  <div
    class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-12"
  >
    <Select class="" items={brands} bind:value={selectedBrand} />
    <Select class="" items={types} bind:value={selectedType} />
    <Select class="" items={priceSorts} bind:value={selectedPriceSort} />
    <Button><SearchOutline class="me-2 h-5 w-5" /> Search</Button>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div
      class="
			flex
			w-full
			cursor-pointer
			flex-col
			divide-gray-200
			rounded-lg
			border
			border-gray-200
			bg-white
			p-4
			text-gray-500
			shadow-md
			hover:bg-gray-100
			sm:p-6
			dark:divide-gray-700
			dark:border-gray-700
			dark:bg-gray-800
			dark:text-gray-400
            dark:hover:bg-gray-700"
    >
      <div class="mb-4 flex flex-col">
        <Heading tag="h5">Toyota Vios 2024</Heading>
      </div>
      <img src="sideviewcar.png" alt="car" class="w-[100%] object-contain" />

      <div class="mt-8 flex flex-row space-x-2">
        <Badge color="dark" large>
          <ArrowsRepeatOutline class="me-1.5 h-5 w-5" />
          Automatic
        </Badge>
        <Badge color="dark" large>
          <UserSolid class="me-1.5 h-5 w-5" />
          5 people
        </Badge>
      </div>

      <div class="mt-8">
        <span class="w-full text-2xl font-bold text-gray-900 dark:text-white"
          >₱1500 /</span
        >
        <span>day</span>
      </div>
    </div>
  </div>
</section>
