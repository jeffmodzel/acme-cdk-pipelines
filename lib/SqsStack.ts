import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AcmeCdkPipelinesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'AcmeCdkPipelinesQueue', {
        queueName: 'AcmeSqsQueue1',
      visibilityTimeout: Duration.seconds(300)
    });

  }
}