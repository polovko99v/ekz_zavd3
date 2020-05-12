import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        messages: [],
        photos: [],
        searchString: "",
        formVisible: false,
        formPhoto: {},
        formNewMode: true
    },
    getters: {
        filtredPhotos(state) {
            let result = state.photos;
            if (state.searchString)
                result = result.filter(photo =>
                    photo.date>state.searchString
                );
            return result;
        },

    }
});
export default store;