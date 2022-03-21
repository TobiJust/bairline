export const state = () => ({
  list: [],
  image: {},
  offerToggle: false,
})

export const mutations = {
  SET_GALLERY_IMAGES(state, value) {
    state.list = value
  },
  TOGGLE_OFFER(state, value) {
    state.offerToggle = value
  }
}

export const actions = {
  setGalleryImages({ commit }, images) {
    commit('SET_GALLERY_IMAGES', images)
  },
  toggleOffer({ commit }, value) {
    commit('TOGGLE_OFFER', value)
  }
}

export const getters = {
  galleryImages: state => {
    return state.list
  },
  offerToggle: state => {
    return state.offerToggle
  }
}
