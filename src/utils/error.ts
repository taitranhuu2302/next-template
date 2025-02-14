export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return (error as Error).message;
  }
  return 'An error occurred';
};
