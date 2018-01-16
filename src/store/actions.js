import firebase from '@/shared/firebase';

export default {
  fetchAppData({ commit }) {
    firebase.database().ref().on('value', (snap) => {
      commit('hydrateProfile', snap.val().profile);
      commit('hydrateLibs', snap.val().libs);
      commit('loading', { app: false });
    });
  },
};
