// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription : function () {
  	/* body... */
  	this.set('displayInfo' , !this.get('displayInfo'));
  	this.trigger("toggle:description ", this)
  }

});
