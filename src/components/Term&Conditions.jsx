import React from 'react';

function TermConditions() {
  return (
    <>
      {/* Terms of Use Section */}
      <section className="bg-gradient-to-b from-white via-[#f0fdf9] to-[#f5faff] min-h-screen py-16 px-6 md:px-20 font-sans text-[#1f2937] text-[17px] leading-[1.8]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-black text-center mb-6">
            MediCAPS Terms of Use
          </h1>
          <p className="text-base text-gray-500 text-center mb-12">
            Effective Date: July 12, 2025
          </p>

          <p className="mb-6">
            These Terms of Use (hereafter referred to as "Terms") govern the use of the MediCAPS mobile application (hereafter referred to as the "Application"), developed and maintained by IDCONS Technova Private Limited (hereafter referred to as the "Service Provider").
          </p>
          <p className="mb-6">
            By downloading, accessing, or using the Application, you agree to these Terms in full. Please read them carefully before using the Application.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">1. Acceptance of Terms</h3>
              <p>
                By using the Application, you confirm that you are legally capable of entering into binding agreements and you consent to comply with these Terms. If you do not agree with any part of these Terms, you must not use the Application.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">2. Ownership and Intellectual Property</h3>
              <p>
                The Application, including all code, content, trademarks, copyrights, and intellectual property rights, is the property of the Service Provider. You may not copy, modify, translate, distribute, create derivative works, reverse engineer, or extract the source code of the Application without prior written permission.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">3. Modification and Charges</h3>
              <p>
                The Service Provider reserves the right to modify the Application or charge for services at any time. Any changes will be communicated clearly in advance. Continued use of the Application after changes implies your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">4. Use of Personal Data</h3>
              <p>
                The Application stores and processes personal information provided by you in accordance with the MediCAPS Privacy Policy. You are responsible for safeguarding access to your device and Application.
              </p>
              <p className="mt-2">
                Avoid jailbreaking or rooting your device, as this may compromise security, introduce malware, or interfere with Application performance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">5. Third-Party Services</h3>
              <p>
                The Application may use third-party services that have their own Terms and Conditions. By using the Application, you agree to be bound by their respective terms as well:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Google Play Services</li>
                <li>Firebase Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">6. Internet Access and Network Charges</h3>
              <p>
                Some features of the Application require an active internet connection. You are responsible for ensuring your device has sufficient connectivity. The Service Provider is not responsible for lack of Wi-Fi, poor signal, or mobile data limits.
              </p>
              <p className="mt-2">
                If used outside of Wi-Fi zones, your mobile provider’s terms may apply. This may result in charges, including roaming fees. You agree that you are responsible for such charges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">7. Device Responsibility</h3>
              <p>
                It is your responsibility to ensure that your device remains charged and functional. The Service Provider is not liable if the Application becomes unavailable due to device malfunction, low battery, or hardware issues.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">8. Disclaimer of Liability</h3>
              <p>While the Service Provider strives to provide accurate and reliable services, it cannot guarantee uninterrupted access or accuracy of third-party information. You understand and agree that:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Use of the Application is at your own risk</li>
                <li>The Service Provider is not liable for any direct, indirect, or consequential damages resulting from use or inability to use the Application</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">9. Updates and Compatibility</h3>
              <p>
                The Application may require updates from time to time. You agree to accept updates to continue using the Application. The Service Provider does not guarantee ongoing compatibility with older operating systems or devices.
              </p>
              <p className="mt-2">
                The Service Provider may suspend or terminate the Application at any time without prior notice. Upon termination:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your rights under these Terms will cease</li>
                <li>You must delete the Application from your device</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">10. Changes to Terms</h3>
              <p>
                These Terms may be revised periodically. You are encouraged to review them regularly. Continued use of the Application constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">11. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Delhi, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-white via-[#f0fdf9] to-[#f5faff] py-16 px-6 md:px-20 font-[Roboto] text-[#1f2937] text-[17px] leading-[1.8]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-4">12. Contact Us</h3>
          <p>
            If you have any questions, concerns, or feedback about these Terms, please contact us:
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:medicaps.idcindia@gmail.com" className="text-[#007BFF] underline">
              medicaps.idcindia@gmail.com
            </a>
            <br />
            <strong>Company:</strong> IDCONS Technova Private Limited
          </p>
          <p className="text-sm text-gray-500 mt-6">Last Updated: July 12, 2025</p>
        </div>
      </section>
    </>
  );
}

export default TermConditions;
