export const clipboard = {
  copy: (text: string) => {
    if (typeof navigator !== 'undefined') {
      return navigator.clipboard.writeText(text);
    }
    return Promise.reject('Clipboard not available');
  }
};