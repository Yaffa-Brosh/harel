export class AppException implements Error {
  public readonly code: number;
  public readonly name: string;
  public readonly message: string;
  public readonly stack: string;

  constructor(message: string, code: number, stack: string) {
      this.message = message;
      this.code = code;
      this.name = "FTError"
      this.stack = stack;
  }
}

export class InvalidArgumentsException extends AppException {
  constructor(message: string, stack: string) {
      super(message, 400, stack);
  }
}

export class ItemNotFoundException extends AppException {
  constructor(message: string, stack: string) {
      super(message, 404, stack);
  }
}

export class ItemAlreadyExistException extends AppException {
  constructor(message: string, stack: string) {
      super(message, 409, stack);
  }
}

export class SecurityException extends AppException {}

export class AuthenticationException extends SecurityException {
  constructor(message: string, stack: string) {
      super(message, 401, stack);
  }
}

export class AuthorizationException extends SecurityException {
  constructor(message: string, stack: string) {
      super(message, 403, stack);
  }
}

export class NoRouteException extends SecurityException {
  constructor(message: string, stack: string) {
      super(message, 404, stack);
  }
}

export class DBException extends AppException {
  constructor(message: string, stack: string) {
      super(message, 401, stack);
  }
}