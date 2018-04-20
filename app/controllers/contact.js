import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['sidebar'],
    isSidebar: computed('sidebar', function() {
        if (this.get('sidebar') === 'show') {
            return true;
        } else {
            return false;
        }
    })
});
