<template lang="pug">
	div
		v-navigation-drawer(v-model='drawer', :clipped='$vuetify.breakpoint.lgAndUp', fixed='', app='')
			v-list.pt-0(dense='')
				v-list-tile(@click='', :to="{path: '/'}")
					v-list-tile-action
						v-icon home
					v-list-tile-content
						v-list-tile-title Home
				v-list-tile(@click='', :to="{path: '/emision'}")
					v-list-tile-action
						v-icon local_movies
					v-list-tile-content
						v-list-tile-title Emision
				v-list-tile(@click='', :to="{path: '/foro'}")
					v-list-tile-action
						v-icon message
					v-list-tile-content
						v-list-tile-title Foro
				v-list-tile(@click='', :to="{path: '/account'}")
					v-list-tile-action
						v-icon account_circle
					v-list-tile-content
						v-list-tile-title Mi cuenta
		v-toolbar(:clipped-left='$vuetify.breakpoint.lgAndUp', color='blue darken-3', dark='', app='', fixed='')
			v-toolbar-title.ml-0.pl-3(style='width: 300px;')
				v-toolbar-side-icon(@click.stop='drawer = !drawer')
				span.hidden-sm-and-down Portal Anime
			v-text-field.hidden-sm-and-down(flat='', solo-inverted='', hide-details='', prepend-inner-icon='search', label='Buscar')
			v-spacer
			v-btn(icon='')
				v-icon apps
			v-btn(icon='')
				v-icon notifications
			v-btn(icon='', large='')
				v-avatar(size='32px', tile='')
					img(src='https://cdn.vuetifyjs.com/images/logos/logo.svg', alt='Vuetify')
</template>
<script>
export default {
	name: 'navigation',
	components: {
	},
	data: () => ({
		drawer: null,
		items: [
			{ icon: 'home', text: 'Home' },
			{ icon: 'local_movies', text: 'Emision' },
			{ icon: 'message', text: 'Foro' },
			{ icon: 'account_circle', text: 'Mi cuenta' },
		]
	})
}
</script>

