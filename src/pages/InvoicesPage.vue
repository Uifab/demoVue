<template>
	<div>
		
		<Menu />

		
		<div class="container pt-5" id="edit-member-page">
			
			<h1 class="font-semibold text-3xl">Edit Member</h1>
			
			<AccountSubmenu />

			<BillingSummary />
			
			<InvoicesList  />	

			<div class="bottons">

				<a class="btn btn-primary mr-4">
					<i class="fa-solid fa-circle-check"></i> Save
				</a>

				<a class="btn bg-white border-primary text-primary">
					Cancel
				</a>

			</div>	
				
		</div>
	</div>
</template>

<script>

import InvoicesList from '@/components/InvoicesList.vue'
import Menu	from '@/components/Menu.vue'
import BillingSummary from '@/components/BillingSummary.vue'
import AccountSubmenu from '@/components/AccountSubmenu.vue'

export default {
	name: 'InvoicesPage',
	components: {
		InvoicesList,
		Menu,
		BillingSummary,
		AccountSubmenu
	}
}
</script>