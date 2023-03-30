export default {
	install(app, options) {
		let current = 'ru'

		const changeLanguage = name => {
			// Локальная функция плагина для смены языка
			current = name
		}

		app.config.globalProperties.$i18n = key => {
			return key.split('.').reduce((words, k) => {
				return words[k] || '=== UNKNOWN ==='
			}, options[current])
		}

		// Передача логальной функции changeLanguage объекту Vue под иминем changeI18N
		app.provide('changeI18N', changeLanguage)
	},
}
