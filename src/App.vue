<template>
	<div>
		<nav class="hidden sm:block nav flex-column menu menu-desktop">
			<a class="nav-link active mb-5" href="#"><i class="fa-solid fa-bars rotate-45"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-arrow-trend-up"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-boxes-stacked"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-address-card"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-envelope-open-text"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-folder-open"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-comments"></i></a>
			<a class="nav-link" href="#"><i class="fa-solid fa-people-group"></i></a>

			<a class="nav-link user-profile" href="#"><i class="fa-solid fa-people-group"></i></a>
		</nav>

		<nav class="sm:hidden nav flex menu menu-mobile">
			<a onclick="$('.menu-desktop').toggle();" class="nav-link" href="#"><i class="fa-solid fa-bars rotate-45"></i></a>
			<a class="nav-link user-profile" href="#"><i class="fa-solid fa-people-group"></i></a>
		</nav>

		
		<div class="container pt-5" id="edit-member-page">
			<h1 class="font-semibold text-3xl">Edit Member</h1>
				
			<ul class="nav edit-member-submenu mt-4">
				<li class="nav-item">
					<a>Profile</a>
				</li>
				<li class="nav-item">
					<a>Access</a>
				</li>
				<li class="nav-item">
					<a>Permissions</a>
				</li>
				<li class="nav-item">
					<a>Notification</a>
				</li>
				<li class="nav-item selected">
					<a>Billing</a>
				</li>
			</ul>
				
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
import InvoicesList from './components/InvoicesList.vue'

export default {
	name: 'App',
	components: {
		InvoicesList
	}
}
</script>

<style>
@import './assets/base.css';
</style>