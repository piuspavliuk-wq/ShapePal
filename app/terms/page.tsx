import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, LegalFooter } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "ShapePal Terms of Use (EULA) – End User License Agreement for the ShapePal mobile application.",
};

function PolicySection({ children }: { children: React.ReactNode }) {
  return (
    <section className="prose prose-invert max-w-none">
      <div className="space-y-8 text-zinc-400 [&_h2]:text-[#00EBC4] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-zinc-400 [&_a]:text-[#00EBC4] [&_a]:hover:underline">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <LegalHeader backHref="/support" backLabel="Back to Support" />
      <main className="min-h-screen flex flex-col">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Use (EULA)</h1>
          <p className="text-zinc-500 text-sm mb-10">Last updated: January 2026</p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-10">
            <PolicySection>
              <h2>1. Acceptance of Terms</h2>
              <p><strong>1.1.</strong> By downloading, installing, accessing, or using the ShapePal mobile application (the &quot;Application&quot;), you agree to be bound by these Terms of Use (the &quot;Agreement&quot;). If you do not agree to these terms, do not use the Application.</p>
              <p><strong>1.2.</strong> The Application is licensed, not sold, to you for use only under the terms of this Agreement. The copyright holder (hereinafter referred to as the &quot;Copyright Holder&quot;) reserves all rights not expressly granted to you.</p>
              <p><strong>1.3.</strong> The Copyright Holder may update this Agreement from time to time. Your continued use of the Application after such changes constitutes your acceptance of the new terms.</p>

              <h2>2. Description of Service</h2>
              <p><strong>2.1.</strong> ShapePal is a mobile fitness application that provides access to workout programs, nutrition tracking, progress monitoring, and related fitness services (collectively, the &quot;Service&quot;).</p>
              <p><strong>2.2.</strong> The Application allows users to track workouts, monitor nutrition, set fitness goals, and access premium workout programs through subscription services.</p>
              <p><strong>2.3.</strong> The Copyright Holder reserves the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.</p>

              <h2>3. License Grant and Restrictions</h2>
              <p><strong>3.1.</strong> Subject to your compliance with this Agreement, the Copyright Holder grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application on mobile devices that you own or control.</p>
              <p><strong>3.2.</strong> You may not:</p>
              <ul>
                <li>copy, modify, distribute, sell, or lease any part of the Application;</li>
                <li>reverse engineer, decompile, or disassemble the Application;</li>
                <li>remove, alter, or obscure any proprietary notices on the Application;</li>
                <li>use the Application for any illegal or unauthorized purpose;</li>
                <li>attempt to gain unauthorized access to the Application or related systems;</li>
                <li>interfere with or disrupt the Application or servers connected to it.</li>
              </ul>

              <h2>4. User Account and Registration</h2>
              <p><strong>4.1.</strong> To use certain features of the Application, you must create an account by providing accurate, current, and complete information.</p>
              <p><strong>4.2.</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p><strong>4.3.</strong> You agree to immediately notify the Copyright Holder of any unauthorized use of your account.</p>
              <p><strong>4.4.</strong> You may delete your account at any time through the Application settings. Upon account deletion, your data will be permanently removed as described in our <Link href="/privacy">Privacy Policy</Link>.</p>

              <h2>5. Subscriptions and Payments</h2>
              <p><strong>5.1.</strong> The Application may offer premium features through subscription services. Subscriptions are billed through the App Store (iOS) or Google Play Store (Android).</p>
              <p><strong>5.2.</strong> Subscription fees are charged in advance on a recurring basis (monthly or as otherwise specified) and will automatically renew unless cancelled at least 24 hours before the end of the current period.</p>
              <p><strong>5.3.</strong> You may cancel your subscription at any time through your device&apos;s App Store or Google Play Store account settings. Cancellation will take effect at the end of the current billing period.</p>
              <p><strong>5.4.</strong> All subscription fees are non-refundable, except as required by applicable law or as otherwise specified.</p>
              <p><strong>5.5.</strong> The Copyright Holder reserves the right to change subscription pricing with reasonable notice to users.</p>

              <h2>6. Health and Safety Disclaimer</h2>
              <p><strong>6.1.</strong> The Application is for informational and educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.</p>
              <p><strong>6.2.</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or exercise program.</p>
              <p><strong>6.3.</strong> Never disregard professional medical advice or delay in seeking it because of information provided by the Application.</p>
              <p><strong>6.4.</strong> You acknowledge that participation in exercise programs involves inherent risks of injury. You assume all risks associated with your use of the Application and any exercise programs or nutritional guidance provided therein.</p>
              <p><strong>6.5.</strong> The Copyright Holder shall not be liable for any injuries, damages, or health issues arising from your use of the Application or reliance on any information provided therein.</p>

              <h2>7. User Content</h2>
              <p><strong>7.1.</strong> You retain ownership of any data, information, or content you provide through the Application (collectively, &quot;User Content&quot;).</p>
              <p><strong>7.2.</strong> By providing User Content, you grant the Copyright Holder a worldwide, royalty-free, non-exclusive license to use, store, and process such User Content solely for the purpose of providing and improving the Service.</p>
              <p><strong>7.3.</strong> You represent and warrant that your User Content does not violate any third-party rights or applicable laws.</p>
              <p><strong>7.4.</strong> The Copyright Holder reserves the right to remove any User Content that violates this Agreement or is otherwise objectionable.</p>

              <h2>8. Intellectual Property</h2>
              <p><strong>8.1.</strong> The Application, including its design, features, functionality, content, and all related intellectual property rights, are owned by the Copyright Holder or its licensors.</p>
              <p><strong>8.2.</strong> The ShapePal name, logo, and related marks are trademarks of the Copyright Holder. You may not use these marks without prior written permission.</p>
              <p><strong>8.3.</strong> All workout programs, exercise descriptions, and related content provided through the Application are protected by copyright and other intellectual property laws.</p>

              <h2>9. Privacy</h2>
              <p><strong>9.1.</strong> Your use of the Application is also governed by our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into this Agreement by reference.</p>
              <p><strong>9.2.</strong> By using the Application, you consent to the collection and use of your information as described in the Privacy Policy.</p>

              <h2>10. Termination</h2>
              <p><strong>10.1.</strong> The Copyright Holder may terminate or suspend your access to the Application immediately, without prior notice, for any breach of this Agreement.</p>
              <p><strong>10.2.</strong> Upon termination, your right to use the Application will cease immediately.</p>
              <p><strong>10.3.</strong> You may terminate your use of the Application at any time by deleting the Application from your device and deleting your account.</p>

              <h2>11. Disclaimers and Limitation of Liability</h2>
              <p><strong>11.1.</strong> THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
              <p><strong>11.2.</strong> The Copyright Holder does not warrant that the Application will be uninterrupted, secure, or error-free.</p>
              <p><strong>11.3.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COPYRIGHT HOLDER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APPLICATION.</p>
              <p><strong>11.4.</strong> Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for incidental or consequential damages, so some of the above limitations may not apply to you.</p>

              <h2>12. Indemnification</h2>
              <p><strong>12.1.</strong> You agree to indemnify, defend, and hold harmless the Copyright Holder, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney&apos;s fees) arising from your use of the Application or violation of this Agreement.</p>

              <h2>13. Governing Law and Dispute Resolution</h2>
              <p><strong>13.1.</strong> This Agreement shall be governed by and construed in accordance with applicable law.</p>
              <p><strong>13.2.</strong> Any disputes arising out of or relating to this Agreement or the Application shall be resolved through good faith negotiation, and if unsuccessful, through appropriate legal proceedings in the applicable jurisdiction.</p>

              <h2>14. Changes to Terms</h2>
              <p><strong>14.1.</strong> The Copyright Holder reserves the right to modify this Agreement at any time. Material changes will be notified to users through the Application or via email.</p>
              <p><strong>14.2.</strong> Your continued use of the Application after such modifications constitutes acceptance of the updated Agreement.</p>

              <h2>15. Miscellaneous</h2>
              <p><strong>15.1.</strong> If any provision of this Agreement is found to be unenforceable, the remaining provisions will remain in full effect.</p>
              <p><strong>15.2.</strong> This Agreement constitutes the entire agreement between you and the Copyright Holder regarding the Application.</p>
              <p><strong>15.3.</strong> The failure of the Copyright Holder to enforce any right or provision of this Agreement will not be deemed a waiver of such right or provision.</p>

              <h2>16. Contact</h2>
              <div className="rounded-xl border border-[#00EBC4]/30 bg-[#00EBC4]/10 p-4 mt-4">
                <p><strong>Email:</strong> <a href="mailto:shapepalfit@gmail.com">shapepalfit@gmail.com</a></p>
                <p><strong>Copyright Holder:</strong> Bohdan Pavliuk</p>
              </div>
            </PolicySection>
          </div>
        </div>
        <LegalFooter />
      </main>
    </>
  );
}
