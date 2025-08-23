import axios from "axios";

interface QRCodeProps {
  text: string;
  options: {
    type: string;
    quality: number;
    errorCorrectionLevel: string;
    margin: number;
    scale: number;
    width: number;
    color: {
      dark: string;
      light: string;
    };
  };
  alt: string;
}

export async function shortenUrl(
  longUrl: string,
  apiKey: string
): Promise<string> {
  try {
    const response = await axios.post(
      "https://api-ssl.bitly.com/v4/shorten",
      {
        long_url: longUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.id;
  } catch (error: any) {
    console.error("Error shortening URL:", error.response);
    throw error;
  }
}
