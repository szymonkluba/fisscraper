export const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 404: {
      return 'Not found';
    }
    case 500: {
      return 'Server error';
    }
    default: {
      return 'Unknown error';
    }
  }
};
