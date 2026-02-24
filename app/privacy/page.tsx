import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, LegalFooter } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ShapePal Privacy Policy – How we protect and handle your personal information.",
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

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader backHref="/support" backLabel="Back to Support" />
      <main className="min-h-screen flex flex-col">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-10">Last updated: January 2026</p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-10">
            <PolicySection>
              <h2>1. Terms and their definitions</h2>
              <p><strong>1.1.</strong> Mobile application – software developed for the mobile platforms iOS, Android, intended for installation and use on smartphones, through which access is provided to the author&apos;s training programs within the ShapePal project.</p>
              <p><strong>1.2.</strong> The copyright holder – the person/entity that owns the exclusive rights to the Mobile Application and/or provides access to training programs (non-exclusive license) (hereinafter referred to as the &quot;Copyright Holder&quot;).</p>
              <p><strong>1.3.</strong> User – any person who uses the Mobile Application in accordance with the requirements of applicable law, the terms of the User Agreement and this Privacy Policy (hereinafter referred to as the &quot;Policy&quot;).</p>

              <h2>2. General Terms and Conditions</h2>
              <p><strong>2.1.</strong> This Policy defines the procedure for processing and protecting User information by the Copyright Holder. The purpose of this Policy is to ensure proper protection of personal information that the User provides when using the Mobile Application.</p>
              <p><strong>2.2.</strong> Relations related to the collection, storage, distribution and protection of information provided by the User are governed by this Policy, other official documents of the Copyright Holder and applicable law.</p>
              <p><strong>2.3.</strong> By downloading and using the Mobile Application, the User decides to provide their personal data and agrees to their processing freely, at their own will and in their own interest, and expresses full consent to the terms of this Policy.</p>
              <p><strong>2.4.</strong> If the User does not agree with the terms of this Policy, the use of the Mobile Application must be terminated immediately.</p>

              <h2>3. The purpose of collecting, processing and storing information provided by users</h2>
              <p><strong>3.1.</strong> The processing of the User&apos;s personal data is carried out in accordance with applicable law. The Copyright Holder processes the User&apos;s personal data for the purposes of:</p>
              <ul>
                <li>identification of the party within the framework of agreements and contracts concluded with the Copyright Holder;</li>
                <li>providing the User with goods/services, a non-exclusive license, access to the Mobile Application, services;</li>
                <li>user relations;</li>
                <li>verification, research, and analysis of such data to support and improve the Mobile Application;</li>
                <li>conducting statistical and other research based on depersonalized data.</li>
              </ul>

              <h2>4. Terms of processing of personal information provided by the User and its transfer to third parties</h2>
              <p><strong>4.1.</strong> The Copyright Holder takes all necessary measures to protect the User&apos;s personal data from unauthorized access, modification, disclosure or destruction.</p>
              <p><strong>4.2.</strong> The Copyright Holder grants access to the User&apos;s personal data only to those employees, contractors and affiliates who need this information to ensure the functioning of the Mobile Application and related services.</p>
              <p><strong>4.3.</strong> The Copyright Holder has the right to use the information provided by the User, including personal data, in order to ensure compliance with the requirements of applicable law (including for the purpose of preventing and/or suppressing illegal actions of Users). Disclosure of the information provided by the User may be made only in accordance with applicable law at the request of a court, law enforcement agencies, as well as in other cases provided for by law.</p>
              <p><strong>4.4.</strong> The Copyright Holder does not verify the accuracy of the information provided by the User and assumes that the User provides reliable and sufficient information in good faith, and takes care of the timeliness of making changes to the previously provided information if such a need arises.</p>

              <h2>5. Terms of use of the Mobile Application</h2>
              <p><strong>5.1.</strong> When using the Mobile Application, the User confirms that:</p>
              <ul>
                <li>has all the necessary rights that allow them to register (create an account) and use the Mobile Application;</li>
                <li>indicates reliable information about themselves to the extent necessary to use the Mobile Application; all other information is provided by the User at their own discretion;</li>
                <li>understands that information posted by the User about themselves may become available to third parties not specified in this Policy and may be copied and distributed by them;</li>
                <li>is familiar with the Policy, expresses consent to it and assumes the rights and obligations specified in it. Familiarization with the terms of this Policy and acceptance within the Mobile Application (e.g., by checking a box or otherwise confirming) is considered consent to the collection, storage, processing and transfer to third parties of personal data provided by the User.</li>
              </ul>
              <p><strong>5.2.</strong> The Copyright Holder does not verify the accuracy of the information received (collected) about Users, except in cases where such verification is necessary for the purpose of fulfilling obligations to the User.</p>

              <h2>6. For the purposes of this Policy, &quot;User personal information&quot; means</h2>
              <p><strong>6.1.</strong> Data provided by the User independently when using the Mobile Application, including, but not limited to: first name, last name, gender, mobile phone number and/or email address, date of birth, and other profile information required for the functioning of the Mobile Application.</p>
              <p><strong>6.2.</strong> Data that is automatically transferred to services as they are used by software installed on the User&apos;s device, including the IP address, information from cookies (where applicable), information about the user&apos;s browser (or other program that allows access to the services), access time, and the address of the requested page.</p>
              <p><strong>6.3.</strong> Other information about the User, the collection and/or provision of which is defined in the regulatory documents of individual services of the Copyright Holder.</p>

              <h2>7. Changing and deleting personal data</h2>
              <p><strong>7.1.</strong> The User can at any time change (update, add) the personal information provided by them, as well as the parameters of its confidentiality, by using the function of editing personal data in the Mobile Application (where available) or by sending a corresponding request to the Copyright Holder. The User is obliged to take care of the timeliness of making changes to the previously provided information; otherwise the Copyright Holder is not responsible for non-receipt of notifications, goods/services, etc.</p>
              <p><strong>7.2.</strong> The User can also delete the personal information provided within a certain account. However, deleting the account may result in the inability to use certain services.</p>

              <h2>8. Changing the Privacy Policy</h2>
              <p><strong>8.1.</strong> The Copyright Holder has the right to make changes to this Privacy Policy. When making changes in the current version, the date of the last update is indicated. The new version of the Policy comes into force from the moment of its publication, unless otherwise provided by the new version of the Policy.</p>
              <p><strong>8.2.</strong> This Policy and the relations between the User and the Copyright Holder arising in connection with the application of the Privacy Policy are governed by applicable law.</p>

              <h2>9. Contact</h2>
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
