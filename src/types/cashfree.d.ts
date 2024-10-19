// cashfree.d.ts

declare module '@cashfreepayments/cashfree-js' {
    export function load(options: { mode: 'sandbox' | 'production' }): Promise<{
      checkout: (options: {
        paymentSessionId: string;
        returnUrl: string;
        redirectTarget?: string;
      }) => Promise<{
        error?: { message: string };
        redirect?: boolean;
        paymentDetails?: {
          paymentStatus: string;
          paymentMessage: string;
          [key: string]: any;
        };
      }>;
    }>;
  }