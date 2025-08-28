import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { CONFIG } from '../config/config';
import { ErrorFetch } from '../models/interfaces/Common/errorFetch';

export const queryClient = new QueryClient();

interface FetchParams {
  signal?: AbortSignal;
  body?: BodyInit;
  id?: string;
  params?: string;
}

interface UseHttpProps<T> {
  isQuery: boolean;
  url: string;
  method?: string;
  headers?: HeadersInit;
  queryKey?: string[];
  queryfn?: () => T;
  errorMessage?: string;
  staleTime?: number;
  enabledQuery?: boolean;
  mutationKey?: string[];
  mutationFn?: () => Promise<T>;
  onSuccess?: (
    data: T,
    variables: FetchParams,
    context: void | undefined
  ) => void | Promise<void>;
  onMutate?: (variables: FetchParams) => void | Promise<void>;
  onError?: (
    error: unknown,
    variables: FetchParams,
    context: void | undefined
  ) => unknown;
  onSettled?: (
    data: T | undefined,
    error: unknown,
    variables: FetchParams,
    context: void | undefined
  ) => unknown;
}

function useHttp<T>(props: UseHttpProps<T>) {
  const {
    isQuery,
    url,
    method,
    headers,
    queryKey = [],
    queryfn,
    errorMessage,
    staleTime,
    enabledQuery,
    mutationKey,
    mutationFn,
    onSuccess,
    onMutate,
    onError,
    onSettled,
  } = props;

  const fetchHttp = async ({ signal, body, id, params }: FetchParams) => {
    let finalUrl = url.replace(':idUser', CONFIG.VITE_REACT_APP_USER_ID);
    finalUrl = id ? finalUrl.replace(':id', id) : finalUrl;
    finalUrl = params ? finalUrl.replace(':params', params) : finalUrl;
    const response = await fetch(
      `${CONFIG.VITE_REACT_APP_BACKEND_URL}${finalUrl}`,
      {
        method: method ?? 'GET',
        body: body,
        headers: headers,
        signal: signal,
        mode: 'cors',
      }
    );

    if (!response.ok) {
      const error = new Error(
        errorMessage ?? 'An error ocurred while fetching'
      ) as ErrorFetch;
      error.code = response.status;
      error.trace = await response.json();
      throw error;
    }

    const json: T = await response.json();

    return json;
  };

  const query = useQuery({
    queryKey: queryKey,
    queryFn: CONFIG.VITE_REACT_APP_USE_SERVER
      ? ({ signal }) => fetchHttp({ signal })
      : queryfn,
    staleTime: staleTime ?? 0,
    enabled: enabledQuery,
  });

  const mutation = useMutation({
    mutationKey: mutationKey,
    mutationFn: CONFIG.VITE_REACT_APP_USE_SERVER ? fetchHttp : mutationFn,
    onSuccess: onSuccess,
    onMutate: onMutate,
    onError: onError,
    onSettled: onSettled,
  });

  if (isQuery)
    return {
      response: query.data as T,
      isFetching: query.isFetching,
      isError: query.isError,
      error: query.error,
    };
  else
    return {
      mutate: mutation.mutate,
      isLoading: mutation.isPending,
      isError: mutation.isError,
      error: mutation.error,
    };
}

export default useHttp;
