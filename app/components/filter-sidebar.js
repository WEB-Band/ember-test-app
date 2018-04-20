import Component from '@ember/component';

export default Component.extend({
    actions: {
        setChanged(state) {
            this.set('sidebar', state.target.value);
        }
    }
});
