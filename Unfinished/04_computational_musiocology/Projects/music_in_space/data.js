function bang() {
	
	var data = new Dict("my_data");

	var data_json = data.stringify();
	var data = JSON.parse(data_json);
/*	
	var first_identifier = 0;
	
	for(var i in data){
		first_identifier = i;
		break;
	}
	
	var available_parameters = [];
	
	for(var i in data[first_identifier]){
		available_parameters[available_parameters.length] = i;
	}
	
	
	post(available_parameters);
*/

	data.export_json('__test3.json');
}