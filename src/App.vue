<template>
	<header>
		<nav>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/about">About</router-link>
				</li>
			</ul>
		</nav>
	</header>

	<router-view />
</template>
