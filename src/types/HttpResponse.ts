export interface HttpResponse<T> {
  status: number;
  message: string;
  data: T;
}
