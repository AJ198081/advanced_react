export interface FieldError {
    field: string;
    message: string;
}

export interface FieldErrors {
    FieldErrors: FieldError[];
    reset: boolean;
}