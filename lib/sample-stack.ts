import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
     const queue1 = new sqs.Queue(this, 'UpdatedQueue', {
       visibilityTimeout: cdk.Duration.seconds(300)
     });
    // example resource
     const queue2 = new sqs.Queue(this, 'UpdatedQueue2', {
       visibilityTimeout: cdk.Duration.seconds(300)
     });
  }
}
