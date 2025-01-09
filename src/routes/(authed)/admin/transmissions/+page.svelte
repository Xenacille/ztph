<script>
  import CrudTable from '../../../../lib/components/CrudTable.svelte'
  let {data} = $props()
</script>

<CrudTable collection="transmission" {data} />
