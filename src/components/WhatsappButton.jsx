import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // ✅ Import WhatsApp icon

const WhatsappButton = () => {
  const phoneNumber = "9870263399"; // Replace with your actual number

  return (
    <div className="fixed bottom-24 right-4 z-50 font-sans">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] hover:bg-[#1ebe57] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition duration-300"
      >
        <WhatsAppIcon style={{ fontSize: 32 }} />
      </a>
    </div>
  );
};

export default WhatsappButton;
