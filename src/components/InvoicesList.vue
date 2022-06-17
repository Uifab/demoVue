<template>
	<div class="invoices mt-4">

		<h3 class="font-bold mb-4" >INVOICES</h3>

		<div class="grid grid-cols-4 items-center billing-summary-big mb-4" 
				v-for="invoice in invoicesList"
				:key="invoice.id">
			
			<div class="col-span-2">

				<div>
					2022-03-15 

					<div v-if="invoice.paid" 
						class="payment-status-pill bg-green-400">PAID</div>
					
					<div v-else
						class="payment-status-pill bg-red-400">UNPAID</div>
				
				</div>
				<small>
					Invoice #{{ invoice.number }}
				</small>

			</div>
			<div class="text-center items-center">
				${{ invoice.total }}
			</div>
			<div class="text-right items-center">
				<a>
					<i class="fa-solid fa-download"></i>
				</a>
			</div>
		</div>
	</div>

</template>

<script>

export default {

	name: 'InvoicesList',

	created () {
		this.fetchData()
		
	},

	data(){
 
		return {
			invoicesList: []
		}
	},


	methods: {
		fetchData() {
			
			fetch('/api/invoice')
				.then(res => res.json())
				.then(json => {
					this.invoicesList = json.invoicesArr
				})
		}
	}
}
</script>