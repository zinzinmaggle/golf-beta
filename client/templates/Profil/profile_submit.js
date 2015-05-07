/*Template.ProfileForm.helpers({
  username: function() {
    var ph = document.createElement('placeholder');
    if()
    {
    	ph.placeholder = this.url;
    }
    else
    {
    	ph.placeholder = this.url;
    }
    return ph.placeholder;
  }
});*/
Meteor.subscribe("users");

Template.ProfileForm.events({
  'submit form': function(e) {
    e.preventDefault();

    var profile = {
      id : this.userId,
      username: $(e.target).find('[name=username]').val(),
      firstname: $(e.target).find('[name=fname]').val(),
      lastname: $(e.target).find('[name=lname]').val()
    };

    Meteor.users.insert(profile);
    Router.go('postsList');
  }
});