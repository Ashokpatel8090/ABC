import React from "react";

const Support = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#f0fdf4] px-6 py-16 font-[Inter]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#007BFF] mb-4">Need Help?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our team is here to assist you with any questions, concerns, or feedback you may have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-[#10B981] mb-2">General Support</h3>
            <p className="text-gray-600 mb-4">
              For questions related to your account, login issues, or general inquiries.
            </p>
            <a
              href="mailto:support@medicaps.ai"
              className="text-[#007BFF] hover:underline"
            >
              info@medicaps.in
            </a>
          </div>

          
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#10B981] mb-2">Office Hours</h3>
          <p className="text-gray-700">Monday to Friday, 10:00 AM – 6:00 PM (IST)</p>
        </div>
      </div>
    </section>
  );
};

export default Support;
