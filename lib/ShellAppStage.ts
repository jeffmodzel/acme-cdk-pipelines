import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";

export class ShellAppStage extends cdk.Stage {
    
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);
      //new cdk.CfnOutput(this, 'Output', {value: 'value'});
      const stack = new cdk.Stack(this, 'empty-stack');

    }
}