import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});

const docClient = DynamoDBDocument.from(client);

export {docClient,PutCommand};