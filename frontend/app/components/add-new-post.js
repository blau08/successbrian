import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    newPost() {
      this.set('addNewPost', true);
    },
    savePost() {
      const params = {
        title: this.get('title'),
        story: this.get('story'),
      };
      this.sendAction('savePost', params);
      this.set('addNewPost', false);
    }
  }
});
