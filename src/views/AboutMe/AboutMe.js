import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import Entry from '@/components/Entry';
import PageHero from '@/components/PageHero';

@Component({
  components: {
    PageHero,
    Entry,
  },
  computed: mapGetters(['aboutMe']),
})
export default class AboutMe extends Vue {
}