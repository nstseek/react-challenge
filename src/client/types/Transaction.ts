export interface Transaction {
  amount: number;
  description: string;
}

export type TransactionResponse = {
  transactions: (Transaction & { id: string })[];
  total: number;
};
