<script lang="ts">
  import {
    Section,
    HeroHeader,
    FeatureDefault,
    FeatureItem,
  } from 'flowbite-svelte-blocks'
  import {
    GridSolid,
    MapPinAltSolid,
    HammerSolid,
    CashSolid,
    ClockSolid,
    StarSolid,
  } from 'flowbite-svelte-icons'
</script>

<Section name="feature">
  <HeroHeader
    class="mb-8 max-w-screen-md lg:mb-16"
    h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    pClass="text-gray-500 sm:text-xl dark:text-gray-400"
  >
    <svelte:fragment slot="h2">Why Choose Us</svelte:fragment>
    <svelte:fragment slot="paragraph"
      >We prioritize your convenience and peace of mind, making your journey
      enjoyable from start to finish.</svelte:fragment
    >
  </HeroHeader>
  <FeatureDefault>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><GridSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Extensive Vehicle Selection</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Choose from a diverse fleet of well-maintained cars, including economy,
        SUVs, and more, to suit every travel need and budget.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><MapPinAltSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Drop-off and Pickup Service</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Enjoy hassle-free transportation with our flexible drop-off and pickup
        options, ensuring you can start and end your journey on your terms.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><HammerSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Regularly Maintained Vehicles</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Our cars undergo regular inspections and maintenance to guarantee
        safety, reliability, and peak performance for your peace of mind.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><CashSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Transparent Pricing</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >No hidden fees or surprises—our competitive rates come with clear
        pricing, so you know exactly what you are paying for.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><ClockSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Flexible Rental Options</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Whether you need a car for a day, a week, or longer, we offer flexible
        rental periods to accommodate your travel plans.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"
        ><StarSolid
          class="text-primary-600 dark:text-primary-300"
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Easy Online Booking</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Our user-friendly website make it simple to browse and book your ideal
        vehicle in just a few clicks.</svelte:fragment
      >
    </FeatureItem>
  </FeatureDefault>
</Section>
