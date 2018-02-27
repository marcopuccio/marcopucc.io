export default {
  loading(state) {
    return state.loading;
  },
  profile(state) {
    return state.profile;
  },
  social(state) {
    return Object.values(state.profile.social).filter(s => s.visible);
  },
  aboutMe(state) {
    return state.aboutMe;
  },
  libs(state) {
    return state.libs;
  },
  jobs(state) {
    return state.jobs;
  },
};
