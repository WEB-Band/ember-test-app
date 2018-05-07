import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['sidebar'],
    sidebar: 'hide',
    isSidebar: computed('sidebar', function() {
        return this.get('sidebar') === 'show';
    }),
});
