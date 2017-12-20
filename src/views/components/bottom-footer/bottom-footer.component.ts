import Vue from 'vue';
import Component from 'vue-class-component';
import { Site } from '@/models/hexo-config.class';
import BlurDiv from '@/views/components/blur-div/blur-div.component.ts';

@Component({
  name: 'bottom-footer',
  components: { BlurDiv },
  props: {
    powered: {
      type: String,
      'default': 'Hexo Theme Lite'
    },
    social: {
      required: true,
      type: Object
    },
    icons: {
      required: true,
      type: Object
    },
    site: {
      required: true,
      validator: obj => obj instanceof Site
    },
    blur: {
      required: true,
      types: Number
    }
  }
})
export default class BottomFooter extends Vue {
  powered: string;
  social: { [ key: string ]: string };
  icons: { [ key: string ]: string | boolean };
  site: Site;
  blur: number;

  get socialItems() {
    return Object.keys(this.social)
      .map(key => ({
        name: key,
        url: this.social[key],
        icon: this.icons[key]
      }));
  }
}
