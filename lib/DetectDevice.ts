export const detectDeviceType = (userAgent: string) => {
  if (userAgent.match(/iPad|iPhone|iPod/i)) {
    return "ios";
  } else if (userAgent.match(/Android/i)) {
    return "android";
  } else if (userAgent.match(/Macintosh|Windows|Linux/i)) {
    return "web";
  } else {
    return "Unknown";
  }
};
