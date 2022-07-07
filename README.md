# acme-cdk-pipelines

Example CDK pipelines project for fictitious company Acme. Goal is to get a plain/vanilla CDK app working/deploying in a single account.

## Notes


npx cdk bootstrap aws://123022419092/us-east-1 --profile vf-modzel --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess


# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
