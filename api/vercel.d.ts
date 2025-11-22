declare module '@vercel/node' {
  import { IncomingMessage, ServerResponse } from 'http';
  
  export interface VercelRequest extends IncomingMessage {
    method?: string;
    query: { [key: string]: string | string[] | undefined };
    body: any;
    cookies: { [key: string]: string };
  }

  export interface VercelResponse extends ServerResponse {
    status(code: number): VercelResponse;
    json(body: any): VercelResponse;
    send(body: any): VercelResponse;
    setHeader(name: string, value: string | string[]): VercelResponse;
    end(chunk?: any): VercelResponse;
  }
}

