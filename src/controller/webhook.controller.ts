import axios from 'axios';
import { Response, Request } from 'express';
export const createWebhookRouter = (req: Request, res: Response) => {
  try {
    const { webhookUrl, addresss, programIds } = req.body;
    const response = axios.post(
      `https://api.helius.xyz/v0/webhooks`,
      {
        webhookURL: webhookUrl,
        transactionTypes: ['Any'],
        accountAddresses: addresss || [],
        accountAddressOwners: programIds || [],
        encoding: 'jsonParsed',
        webhookType: 'raw',
        txnStatus: 'all',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Webhook created', response);
  } catch (error) {
    console.log('Error while creating webhook', error);
  }
};

export const updateWebhookRouter = (req: Request, res: Response) => {
  try {
    const { webhookID, addresss, webhookUrl } = req.body;
    const response = axios.post(
      `https://api.helius.xyz/v0/webhooks/${webhookID}`,
      {
        transactionTypes: ['Any'],
        accountAddresses: addresss || [],
        encoding: 'jsonParsed',
        webhookType: 'raw',
        txnStatus: 'all',
        webhookURL: webhookUrl,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
