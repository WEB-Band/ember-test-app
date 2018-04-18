import Component from '@ember/component';

export default Component.extend({
    typeOfSites: [
        { isChecked: false, label: 'Sport' },
        { isChecked: false, label: 'Shops' },
        { isChecked: false, label: 'Individual websites' },
        { isChecked: false, label: 'Portals' }
    ],

    ifMoreThree: Ember.computed.filterBy('typeOfSites', 'isChecked', true),
});
