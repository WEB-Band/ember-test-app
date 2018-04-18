import Route from '@ember/routing/route';

let contact = {
    id: 1,
    name: 'alex',
    phone: '+375290000000',
    email: 'support@testapp.com',
    skype: 'alex'
};

export default Route.extend({
    /*setupController(noname, model, transition) {
        debugger;
    },*/
    model() {
        return contact;
    },
    actions: {
        willTransition(transition) {
            if (transition.targetName === 'contact') {
                this.set('controller.isContact', true);
            } else {
                this.set('controller.isContact', false);
            }
        },
    }
});
