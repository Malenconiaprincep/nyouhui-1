define([ "modules/moduleRunner/index", "modules/manage_menu/index", "modules/manage_ctrl_sort/index", "modules/manage_form/index" ], function(ModuleRunner, manage_menu, manage_ctrl_sort, manage_form) {
  var modules = {
    manage_menu: manage_menu,
    manage_ctrl_sort: manage_ctrl_sort,
    manage_form: manage_form
  };
  ModuleRunner.run(modules);
});