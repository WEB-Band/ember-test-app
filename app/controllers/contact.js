import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['sidebar'],
    sidebar: true,
    actions: {
        showAlert() {
          alert('Congratulations! Data have been sent!');
        }
      }
});
