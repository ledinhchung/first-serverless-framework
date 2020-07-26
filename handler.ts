import { APIGatewayProxyHandler } from 'aws-lambda'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      context: _context,
    }, null, 2),
  }
}

export const news: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'This is my hello message'
    })
  }
}
