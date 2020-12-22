import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import { Auth } from '@aws-amplify/auth'
import awsconfig from '@/aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
