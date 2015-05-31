define(["libs/client/views/base"], function(Base) {
	var View = Base.extend({
		moduleName: "manage_ctrl_sort",
		value: function() {
			return this.$('textarea').val();
		},
		name: function() {
			return this.$('textarea').attr('name');
		}
	});
	return View;
});