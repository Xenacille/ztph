<script lang="ts">
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks'
  import { Heading, Select, Label, Button, Span } from 'flowbite-svelte'
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

<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader
      h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
    >
      <svelte:fragment slot="h1"
        ><Span highlight>Effortless</Span> Car Rental in Parañaque</svelte:fragment
      >
      <svelte:fragment slot="paragraph"
        >We provide the most affordable rental fees in the city with easy
        requirements.</svelte:fragment
      >
      <div
        class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16"
      >
        <Select class="" items={brands} bind:value={selectedBrand} />
        <Select class="" items={types} bind:value={selectedType} />
        <Select class="" items={priceSorts} bind:value={selectedPriceSort} />
        <Button><SearchOutline class="me-2 h-5 w-5" /> Search</Button>
      </div>
    </HeroHeader>
  </div>
  <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
    <img src="/sideviewcar.png" class="object-contain" alt="mockup" />
  </div>
</Section>
