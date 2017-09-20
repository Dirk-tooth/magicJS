var awsCli = require('aws-cli-js');
var sleep = require('sleep');
var argv = require('yargs').argv;
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options(
  process.env['AWS_ACCESS_KEY_ID'],
  process.env['AWS_SECRET_ACCESS_KEY'],
  /* currentWorkingDirectory */ null
);

var aws = new Aws(options);
aws.command('ecs list-tasks --cluster ' + argv.cluster).then(function (data) {
  if (data.object && data.object.taskArns[0]){
    console.log('Stopping cluster: ' + argv.cluster + ' task: ' +  data.object.taskArns[0]);
    aws.command('ecs stop-task --task ' + data.object.taskArns[0] + ' --cluster ' + argv.cluster).then(function (data) {
      if (data.object){
        console.log('Status: ' + data.object.task.desiredStatus);
      }
      checkStatus();
    });
  }else{
    return 0;
  }
});

function checkStatus(){
  console.log('Checking task status...');
  aws.command('ecs list-tasks --cluster ' + argv.cluster).then(function (data) {
    //console.log(data.object);
    if (data.object && data.object.taskArns[0]){
      console.log('Checking task: ' + data.object.taskArns[0]);
      aws.command('ecs describe-tasks --tasks ' + data.object.taskArns[0] + ' --cluster ' + argv.cluster).then(function (data){
        //console.log(data.object);
        if (data.object.tasks[0].lastStatus == 'RUNNING'){
          console.log('Started Task: ' + data.object.tasks[0].taskArn);
        }else{
          console.log('Task Status: ' + data.object.tasks[0].lastStatus);
          sleep.sleep(10);
          checkStatus();
        }
      });
    }else{
      sleep.sleep(10);
      checkStatus();
    }
  });
}
