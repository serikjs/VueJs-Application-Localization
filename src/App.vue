<template>
	<h2>{{ $i18n('app.title') }}</h2>
	<button @click="changeLanguage">Change Language</button>
	<h2></h2>
</template>

<script>
export default {
	inject: ['changeI18N'], // получение метода 'changeI18N' с плагина
	methods: {
		changeLanguage() {
			this.changeI18N('en')
			// Ручное обновление компонента
			this.$forceUpdate()
		},
	},
}
</script>

<style scoped></style>
