import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            theme: localStorage.getItem('theme') || 'light',
            language: localStorage.getItem('language') || 'en'
        };
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
        setLanguage(state, language) {
            state.language = language;
            localStorage.setItem('language', language);
        }
    },
    actions: {
        updateTheme({ commit }, theme) {
            commit('setTheme', theme);
        },
        updateLanguage({ commit }, language) {
            commit('setLanguage', language);
        }
    }
});
export default store;
