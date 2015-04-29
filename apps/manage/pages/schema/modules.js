define([ "modules/moduleRunner/index", "modules/manage_schema_item/index", "modules/manage_form/index", "modules/manage_input/index", "modules/manage_table/index", "modules/manage_menu/index" ], function(ModuleRunner, manage_schema_item, manage_form, manage_input, manage_table, manage_menu) {
  var modules = {
    manage_schema_item: manage_schema_item,
    manage_form: manage_form,
    manage_input: manage_input,
    manage_table: manage_table,
    manage_menu: manage_menu
  };
  ModuleRunner.run(modules);
});