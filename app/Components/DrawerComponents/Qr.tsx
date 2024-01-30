import React from "react";
import { useQRCode } from 'next-qrcode';

interface CodeProps {
    url: string;
}

const GenerateQRCode: React.FC<CodeProps> = ({ url }) => {
    const { Image } = useQRCode();

    // Encode the URL
    const encodedUrl = encodeURI(url);

    return (
        <Image
            text={encodedUrl}
            options={{
                type: 'image/jpeg',
                quality: 1,
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#000',
                    light: '#FFFFFF',
                },
            }}
        />
    );
};

export default GenerateQRCode;
