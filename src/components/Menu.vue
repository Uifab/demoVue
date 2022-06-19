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
	</div>
</template>

<script>
export default {
	name:'MenuComponent'
}
</script>
