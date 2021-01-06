export const isNetworkErrorCheck = (error: any) => {
    const isBrowserConnected: boolean = window.navigator.onLine;
    const isAxiosNetworkError: boolean =
      error.toJSON().message === "Network Error";
    if (!isBrowserConnected || isAxiosNetworkError) {
      //Do your thing here
      return true;
    }
  
    return false;
  };