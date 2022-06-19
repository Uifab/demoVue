<template>

	<div class="grid grid-cols-2 md:grid-cols-4  billing-summary bg-gray-100 rounded-lg p-3 mt-4">
				
		<div class="text-center">
			<small class="billing-summary-small">Billing Type</small>
			<div class="billing-summary-big">Yearly</div>
		</div>

		<div class="text-center">
			<small class="billing-summary-small">Next Invoice</small>
			<div class="billing-summary-big">9/6/2041</div>
		</div>

		<div class="text-center">
			<small class="billing-summary-small">Paymenth Method</small>
			<div class="billing-summary-big"> 
				<i class="fa-brands fa-cc-visa mr-2"></i> 
				**** 5564 
				<a class="ml-2" title="change"><i class="fa-solid fa-pen-to-square"></i></a> 
			</div>
		</div>

		<div class="text-center">
			<small class="billing-summary-small">Properties</small>
			<div class="billing-summary-big">6/10</div>
		</div>

	</div>
	
</template>

<script>
export default {
	name:'BillingSummaryComponent'
}
</script>

