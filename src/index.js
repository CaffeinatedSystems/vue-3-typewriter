import TypeWriter from './components/TypeWriter.vue';

export default {
	install:(app, options) => {
		app.component('TypeWriter', TypeWriter);
	},
};