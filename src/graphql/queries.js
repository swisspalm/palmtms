/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItems = /* GraphQL */ `
  query GetItems($limit: Int, $cursor: String) {
    getItems(limit: $limit, cursor: $cursor) {
      cursor
      items {
        item_id
        institution_id
        institution_name
      }
    }
  }
`;
export const getAccounts = /* GraphQL */ `
  query GetAccounts($id: ID!) {
    getAccounts(id: $id) {
      account_id
      type
      name
      subtype
      balances {
        current
        iso_currency_code
      }
      mask
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!, $limit: Int, $cursor: String) {
    getTransactions(id: $id, limit: $limit, cursor: $cursor) {
      cursor
      transactions {
        transaction_id
        account_id
        amount
        name
        iso_currency_code
        date
        payment_channel
        transaction_type
      }
    }
  }
`;
