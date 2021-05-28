export const state = () => ({
  list: [],
  image: {}
})

export const mutations = {
  SET_GALLERY_IMAGES(state, value) {
    state.list = value
  }
}

export const actions = {
  setGalleryImages({ commit }, images) {
    commit('SET_GALLERY_IMAGES', images)
  }
}

export const getters = {
  galleryImages: state => {
    return state.list
  },
}
