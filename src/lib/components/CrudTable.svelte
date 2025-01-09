<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button,
  } from 'flowbite-svelte'
  import CrudCreateModal from './CrudCreateModal.svelte'
  import CrudUpdateModal from './CrudUpdateModal.svelte'
  import CrudDeleteModal from './CrudDeleteModal.svelte'
  let { collection, data } = $props()

  let items = data.paginationData
</script>

<div class="px-4">
  <CrudCreateModal {collection} />
</div>

<Table
  {items}
  placeholder="Search by name"
  hoverable={true}
  filter={(item, searchTerm) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())}
>
  <TableHead>
    <TableHeadCell sort={(a, b) => a.name.localeCompare(b.name)}
      >{`${collection} name`.toUpperCase()}</TableHeadCell
    >
    <TableHeadCell>Actions</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow slot="row" let:item>
      <TableBodyCell>{item.name}</TableBodyCell>
      <TableBodyCell
        ><CrudUpdateModal
          collection={item.collectionName}
          id={item.id}
          name={item.name}
        /><CrudDeleteModal
          collection={item.collectionName}
          id={item.id}
          name={item.name}
        /></TableBodyCell
      >
    </TableBodyRow>
  </TableBody>
</Table>
