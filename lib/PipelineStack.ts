import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { PipelineAppStage } from "./PipelineAppStage";
import { ShellAppStage } from "./ShellAppStage";

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "AcmePipeline", {
      pipelineName: "AcmePipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "jeffmodzel/acme-cdk-pipelines",
          "main"
        ),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    pipeline.addStage(
      new PipelineAppStage(this, "stage-1", {
        env: {
          account: "123022419092",
          region: "us-east-1",
        },
      })
    );

    //
    // shell script stage
    //
    pipeline.addStage(
      new ShellAppStage(this, "shell-stage", {
        env: {
          account: "123022419092",
          region: "us-east-1",
        }
      }),{
        post:[ new ShellStep('do something', {
            commands: ['ls -la']
        })]
      }
    );
  }
}
