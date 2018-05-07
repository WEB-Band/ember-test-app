import Component from '@ember/component';

export default Component.extend({
    actions: {
        setChanged({ target }) {
            this.set('sidebar', target.value);
        },
    },
});
