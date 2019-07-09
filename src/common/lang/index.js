import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import zh from './zh';
Vue.use(VueI18n);
export default new VueI18n({
    locale: 'zh',
    messages: {
        'en': en,
        'zh': zh
    }
})