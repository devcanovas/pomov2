export class ErrorConfig {
  id: string;
  errorMessage: string;

  constructor(id: string, errorMessage: string) {
    this.id = id;
    this.errorMessage = errorMessage;
  }
}
