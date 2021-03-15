#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ServerlessAppStack } from '../lib/serverless-app-stack';

const app = new cdk.App();
new ServerlessAppStack(app, 'ServerlessAppStack');
