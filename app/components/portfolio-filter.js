import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    typeOfSites: [
        { isChecked: false, label: 'Sport' },
        { isChecked: false, label: 'Shops' },
        { isChecked: false, label: 'Individual websites' },
        { isChecked: false, label: 'Portals' },
    ],

    ifMoreThree: computed.filterBy('typeOfSites', 'isChecked', true),
});
