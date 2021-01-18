const fs = require('fs');

exports.updateLogFile = function(message){

  fs.readFile('./log.txt',function(err,logContent){

	if(err) throw err;
	logContent = logContent + "";
	var lines = logContent.split('\n');
	console.log('content ',logContent);

	var firstLine = lines[0];
	var accessCounterIndex = firstLine.indexOf(':');
	console.log('accsessIndes: ',accessCounterIndex);
	var numberOfAccesses = parseInt(firstLine.slice(accessCounterIndex + 2));

	lines[0] = 'Number of accesses: ' + (numberOfAccesses + 1);
	var newLogContent = lines.join('') + message + '\n';

	fs.writeFile('./log.txt',newLogContent, function(err){
		if(err) throw err;
	});

  });
}
