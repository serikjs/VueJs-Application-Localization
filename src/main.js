import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Plug from './Plug.js'
const app = createApp(App)

const ru = {
	app: {
		title: 'Привет',
	},
}

const en = {
	app: {
		title: 'Hello',
	},
}

app.use(Plug, { ru, en })

app.mount('#app')
