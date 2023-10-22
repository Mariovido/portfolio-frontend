export interface ErrorFetch extends Error {
  code?: number;
  trace?: string;
}
