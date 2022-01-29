/*
 * db.js
 * a simple wrapper around Max's JS support for SQLite databases
 * based on a script by Tim Place as found on the Cycling '74 website
 * by Laurens van der Wee for IRiMaS prototyping and the Computational Musicology toolbox
 * specifically designed to be used as part of the cm.db abstraction
 * by Jacob Hart and Laurens van der Wee
 * parts copyright © 2008, Cycling '74
 */


outlets = 1; //one outlet for jit.cellblock output

p = this.patcher; //thispatcher
var sqlite = new SQLite; //database object
var result = new SQLResult; //object to store results from query
var objToSendTo = "defaultObject"; //name of receive object to send data to
var _send = 1; //send-to-Max receive object with name objToSendTo boolean, default = on
var dataToBeSent = " "; //variable to store data to be sent to receive object with name objToSendTo
var _print = 0; //print-to-Max console boolean, default = off
var curr_table = "my_data"; //current table to operate on


/////// DATABASE QUERIES AND MISC ///////

//open database connection (this is done automatically when cm.db is instantiated, based on argument)
function openDb(x)
{
    sqlite.open(x,1); //open a file-based DB
	post("cm.db: now working on database at '" + x + "'\n");
}

//close database connection (you probably won't need this...)
function close()
{
	sqlite.close();
}

//execute a command
function exec(arg)
{
	// execute the SQL statement in arg, returning results in the 'result' object
	sqlite.exec(arg, result);
	if(_print) post(arg + "\n");

	// store dimensions of query result
	var numfields = result.numfields();
    var numrecords = result.numrecords();

	// if(_print) post("fields: " + numfields + "\nrecords: " + numrecords + "\n");

	var temp_data = [];
	if(numfields==1) {
		if(numrecords==1) {
			//result is a field
			temp_data[0] = result.value(0,0);
			dataToBeSent = temp_data;
			if(_send) messnamed(objToSendTo,"list",dataToBeSent);
		}
		else {
			//result contains one row
			for(var i=0;i<numrecords;i++) {
				temp_data[i] = result.value(0,i);
			}
			dataToBeSent = temp_data;
			if(_send) messnamed(objToSendTo,"list",dataToBeSent);
		}
	}
	else {
		if(numrecords==1) {
			//result  contains one column
			for(var i=0;i<numfields;i++) {
				temp_data[i] = result.value(i,0);
			}
			dataToBeSent = temp_data;
			if(_send) messnamed(objToSendTo,"list",dataToBeSent);
		}
		else {
			//result contains more than one row and more than one column, output as multiple rows
			for(var i=0;i<numrecords;i++) {
				for(var j=0;j<numfields;j++)
				{
					temp_data[j] = result.value(j,i);
				}
				dataToBeSent = temp_data;
				if(_send) messnamed(objToSendTo,"list",dataToBeSent);
			}
		}
	}	
}

//result of exec() is sent to receive objects with this name (default: defaultObject)
function sendTo(arg)
{	
	objToSendTo = arg;
	if(_print) post('set objToSendTo to ' + arg + '\n');
}

//result of exec() is sent to receive objects when toggleSend is on (default = on)
function toggleSend(arg)
{	
	_send = arg;
	if(_print) post('set toggleSend to ' + (arg ? 'TRUE\n' : 'FALSE\n'));
}

//turn on/off printing to Max console
function togglePrint(arg)
{	
	_print = arg;
	post('set togglePrint to ' + (arg ? 'TRUE\n' : 'FALSE\n'));
}

//post the SQLite version currently used to the Max console
function getVersion()
{
	post("SQLite Version: " + sqlite.getversion() + "\n");
}

//output current result for display in jit.cellblock (first outlet)
function show()
{
    var numfields = result.numfields();
    var numrecords = result.numrecords();

	outlet(0, "clear", "all");
	outlet(0, "cols", numfields);
	outlet(0, "rows", numrecords + 1);    // rows +1 so we can create a header row

	for(var i=0; i<numfields; i++)
		outlet(0, "set", i, 0, result.fieldname(i));

	for(var i=0; i<numrecords; i++){
		for(var j=0; j<numfields; j++)
			outlet(0, "set", j, i+1, result.value(j, i));
	}
}



/////// FIELD QUERIES ///////

//get a specific field <row_id> <column_name>
function getField() {
	arg = arrayfromargs(arguments);
	id = arg[0];
	column = arg[1];
	var cmd = "SELECT " + column + " FROM " + curr_table + " WHERE id='" + id + "'";
	exec(cmd);
}

//set a specific field <row_id> <column_name> <value>
function setField() {
	arg = arrayfromargs(arguments);
	var id = arg[0];
	var column = arg[1];
	var value = arg[2];
	var cmd = "UPDATE " + curr_table + " SET " + column + " = " + value + " WHERE rowid='" + id + "'";
	exec(cmd);
}


/////// ROW QUERIES ////////

//get a row <row_id>
function getRow(arg) {
	var cmd = "SELECT * FROM " + curr_table + " WHERE id='" + arg + "'";
	exec(cmd);
}

//add a row <list of pairs of [col_name value]>: [ col1 val1 col2 val2 ... etc ]
function addRow() {
	arg = arrayfromargs(arguments);
	var fieldnames = "(";
	var values = "(";
	for(var i =0;i<arg.length;i+=2){
		fieldnames += "'" + arg[i] + "'" + (i==arg.length-2 ? "" : ", ");
		values += "'" + arg[i+1] + "'" + (i==arg.length-2 ? "" : ", ");
	}
	fieldnames += ")";
	values += ")";
	var cmd = "INSERT INTO " + curr_table + " " + fieldnames + " VALUES " + values;
	exec(cmd);
}

//drop/delete a row with by value <arg2> in column <arg1>
function dropRow(arg) {
	arg = arrayfromargs(arguments);
	var col_name = arg[0];
	var value = arg[1];
	var cmd = "DELETE FROM " + curr_table + " WHERE " + col_name + "='" + value + "'";
	exec(cmd);
}


/////// COLUMN QUERIES ///////

//add a column <col_name>
function addColumn(arg) {
	var cmd = "ALTER TABLE " + curr_table + " ADD " + arg + " FLOAT(32)";
	exec(cmd);
}

//get a column <col_name> / returns column as list
function getColumn(arg) {
	var cmd = "SELECT " + arg + " FROM " + curr_table;
	exec(cmd);
}

//get all rows who's column <col_name> fall within a range <min> <max>
function getRange() {
	arg = arrayfromargs(arguments);
	var col_name = arg[0];
	var _min = arg[1];
	var _max = arg[2];
	var cmd = "SELECT * FROM " + curr_table + " WHERE " + col_name + ">=" + _min + " AND " + col_name + "<=" + _max;
	exec(cmd);
}

//standardize column
function standardize(arg) {
	standardise(arg);
}

//standardise column
function standardise(arg) {
	//get rowid and column_name values of all rows
	var cmd = "SELECT rowid, " + arg + " FROM " + curr_table;	
	sqlite.exec(cmd, result);
	
	var numrows = result.numrecords();	
	var ids = [];
	var values = [];	
	for(var i=0;i<numrows;i++) {
		ids[i] = result.value(0,i);
		values[i] = parseFloat(result.value(1,i));
	}
	
	var mean = 0;
	for(var i=0;i<numrows;i++) {
		mean += values[i];
	}
	mean = mean/numrows; //calculate mean of all values in column

	var variance = 0;
	for(var i=0;i<numrows;i++) {
		var diff = values[i] - mean;
		variance += diff*diff;
	}
	variance = variance/(numrows-1); //calculate variance	
	var standard_dev = Math.sqrt(variance);
	
	/*
	post('mean: ' + mean + '\n');
	post('variance: ' + variance + '\n');
	post('standard_dev: ' + standard_dev + '\n');
	*/
	
	var newColumnName = arg + "_stnd";
	addColumn(newColumnName);
	
	for(var i=0;i<numrows;i++) {
		var newFieldValue = (values[i] - mean) / standard_dev; //calculate standardised field value
		setField( ids[i], newColumnName, newFieldValue ); //write to new column
	}
}

/////// TABLE QUERIES ///////

//create a table <table_name>
function createTable(arg){
	var cmd = "CREATE TABLE " + arg + "(rowid INTEGER PRIMARY KEY AUTOINCREMENT)";
	exec(cmd);
	curr_table = arg;
}

//drop a table <table_name>
function dropTable(){
	var cmd = "DROP TABLE " + curr_table;
	exec(cmd);
}

//get all contents of a table as a series of lists, one list per row <table_name>
function getTable() {
	var cmd = "SELECT * FROM " + curr_table;
	exec(cmd);
}

//clear table (delete all content, leave structure intact) <table_name>
function clearTable(){
	var cmd = "DELETE FROM " + curr_table;
	exec(cmd);
}

//set working table <table_name>
function setTable(arg)
{	
	curr_table = arg;
	post('set current table to ' + arg + "\n");
}
