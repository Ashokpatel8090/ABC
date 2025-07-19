import React from 'react';

const PrivacyPolicy = () => (
  <div className="bg-gradient-to-b from-white via-[#f0fdf9] to-[#f5faff] min-h-screen py-16 px-6 md:px-20  text-[#1f2937] text-[17px] leading-[1.8] font-sans">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-extrabold text-black text-center mb-6">
        MediCAPS Privacy Policy
      </h1>
      <p className="text-base text-gray-500 text-center mb-12">
        Effective Date: July 12, 2025
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          Privacy Policy for MediCAPS Mobile Application
        </h2>
        <p className="mb-4">
          This privacy policy applies to the MediCAPS mobile application (hereafter referred to as the "Application") developed and maintained by IDCONS Technova Private Limited (hereafter referred to as the "Service Provider"), as a Free service intended for use "AS IS".
        </p>
        <p>
          By using the Application, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy.
        </p>
      </section>

      {/* 1. Information Collection and Use */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          1. Information Collection and Use
        </h2>
        <p className="mb-4">
          The Application collects information to improve the user experience, personalize content, and deliver relevant services. The types of information collected include:
        </p>

        <h3 className="text-2xl font-semibold text-black mt-6 mb-2">a) Personal Information</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Name, email address, phone number</li>
          <li>Gender, age, and other profile information (if entered by the user)</li>
          <li>Health-related inputs: symptoms, diagnosis, goals, lifestyle preferences, vitals</li>
          <li>Contact information (with permission), for potential integration with referral or invite services</li>
        </ul>

        <h3 className="text-2xl font-semibold text-black mt-6 mb-2">b) Device and Technical Information</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Device ID and operating system version</li>
          <li>Internet Protocol (IP) address</li>
          <li>Time and date of your visit, time spent on specific pages</li>
          <li>App usage patterns and crash logs</li>
        </ul>

        <h3 className="text-2xl font-semibold text-black mt-6 mb-2">c) Location Information</h3>
        <p className="mb-4">
          The Application may collect approximate location data (not precise GPS) to personalize services such as recommendations and content.
        </p>
        <p className="mb-4">
          Location data may also be used in aggregated, anonymized form for analytics and product improvement.
        </p>
        <p>You may opt out of location access through your device settings at any time.</p>
      </section>

      {/* 2. Third-Party Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          2. Third-Party Services
        </h2>
        <p className="mb-4">
          The Application uses third-party services to enable key functionality and analytics. These services may collect information used to identify you in a limited manner. Examples include:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Google Play Services</li>
          <li>Firebase Analytics</li>
          <li>Crashlytics</li>
        </ul>
        <p>
          The Service Provider may share anonymized or aggregated data with trusted third-party services to improve performance or analyze usage patterns. No personally identifiable data is shared without explicit consent.
        </p>
      </section>

      {/* 3. Purpose of Data Collection */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          3. Purpose of Data Collection
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>To provide core features such as symptom tracking, AI-based suggestions, and personalized content</li>
          <li>To notify you of updates, health tips, and important app features</li>
          <li>To respond to your queries, support requests, or health program enrollments</li>
          <li>For analytics and internal research to improve app functionality and user experience</li>
          <li>To deliver tailored content and recommendations based on health inputs and location (when available)</li>
        </ul>
      </section>

      {/* 4. User Communications */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          4. User Communications
        </h2>
        <p className="mb-4">The Service Provider may contact you via email, phone, or in-app messages for:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Important account or app-related notifications</li>
          <li>Health insights or educational content</li>
          <li>Offers or marketing promotions (if you opt-in)</li>
        </ul>
        <p>You can opt out of marketing communications at any time via in-app settings or by contacting us.</p>
      </section>

      {/* 5. Data Retention Policy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          5. Data Retention Policy
        </h2>
        <p className="mb-4">
          The Service Provider retains user data as long as you use the Application and for a reasonable period thereafter to improve services and meet regulatory obligations.
        </p>
        <p>
          To request deletion of your data, email us at{" "}
          <a href="mailto:medicaps.idcindia@gmail.com" className="text-[#007BFF] underline">
            medicaps.idcindia@gmail.com
          </a>{" "}
          and your request will be processed within a reasonable timeframe.
        </p>
      </section>

      {/* 6. Children's Privacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          6. Children's Privacy
        </h2>
        <p>
          The Application is not intended for children under the age of 13. The Service Provider does not knowingly collect personal information from children. If you become aware that your child has provided personal information, please contact us and we will promptly delete such data.
        </p>
      </section>

      {/* 7. Data Security */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          7. Data Security
        </h2>
        <p className="mb-4">We value your trust in providing your personal information and strive to use commercially acceptable means to protect it. Security measures include:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Encrypted storage and transmission of sensitive information</li>
          <li>Regular security reviews and updates</li>
          <li>Access control and audit logs</li>
        </ul>
        <p>However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
      </section>

      {/* 8. Your Rights Under Indian Law */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          8. Your Rights Under Indian Law
        </h2>
        <p className="mb-4">In accordance with the Digital Personal Data Protection Act, 2023, users have the right to:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Access the data we collect</li>
          <li>Request correction of inaccurate information</li>
          <li>Request erasure of your personal data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:medicaps.idcindia@gmail.com" className="text-[#007BFF] underline">
            medicaps.idcindia@gmail.com
          </a>.
        </p>
      </section>

      {/* 9. Changes to This Policy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. You are advised to review this page periodically for any changes. Any updates will be posted here and take effect immediately upon posting.
        </p>
      </section>

      {/* 10. Your Consent */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          10. Your Consent
        </h2>
        <p>
          By using the Application, you agree to the collection and use of information as described in this policy.
        </p>
      </section>

      {/* 11. Contact Us */}
      <section>
        <h2 className="text-3xl font-bold text-black mb-4 pl-4">
          11. Contact Us
        </h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or data handling, please contact:
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:medicaps.idcindia@gmail.com" className="text-[#007BFF] underline">
            medicaps.idcindia@gmail.com
          </a>
          <br />
          <strong>Company:</strong> IDCONS Technova Private Limited
        </p>
        <p className="text-sm text-gray-500 mt-6">Last Updated: July 12, 2025</p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy;
