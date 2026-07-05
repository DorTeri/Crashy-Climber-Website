import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Crashy Climber",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy for Crashy Climber" subtitle="Effective Date: 07/06/2026">
      <p>
        Crashy Climber is a mobile game developed by <strong>Teri Games</strong> (&ldquo;we,&rdquo;
        &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
      </p>
      <p>
        This Privacy Policy explains how we collect, use, and protect information
        when you use Crashy Climber.
      </p>

      <h2>1. Target Audience</h2>
      <p>
        Crashy Climber is intended for users aged <strong>13 and older</strong>. The
        game is not directed to children under the age of 13.
      </p>
      <p>If you are under 13, please do not use the game or provide any personal information.</p>

      <h2>2. Information We Collect</h2>
      <p>
        Crashy Climber does not require users to create an account or directly
        provide personal information to play the game.
      </p>
      <p>
        However, the game may use third-party services that automatically collect
        limited information from your device, such as:
      </p>
      <ul>
        <li>Device type and operating system</li>
        <li>App version</li>
        <li>Gameplay performance information</li>
        <li>Crash reports and diagnostic data</li>
        <li>Approximate region or country</li>
        <li>Advertising identifiers, if ads are enabled in the game</li>
      </ul>
      <p>
        This information is used to help improve the game, fix bugs, understand
        performance issues, and maintain a better user experience.
      </p>

      <h2>3. Firebase and Google Services</h2>
      <p>
        Crashy Climber may use Firebase and other Google services, such as Firebase
        Analytics or Firebase Crashlytics.
      </p>
      <p>
        These services may collect app usage data, crash reports, diagnostics,
        device information, and other technical information. This information
        helps us understand how the game is used and fix technical problems.
      </p>
      <p>You can learn more about how Google handles data here:</p>
      <p>
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>
      <p>Firebase privacy information is available here:</p>
      <p>
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
          https://firebase.google.com/support/privacy
        </a>
      </p>

      <h2>4. Advertising</h2>
      <p>Crashy Climber may include advertising in the future.</p>
      <p>
        If ads are included, advertising partners may collect information such as
        device identifiers, advertising identifiers, approximate location, ad
        interactions, and app activity in order to show and measure ads.
      </p>
      <p>
        If the game does not currently contain ads, this section applies only if
        ads are added in a future update.
      </p>

      <h2>5. How We Use Information</h2>
      <p>We may use collected information to:</p>
      <ul>
        <li>Improve gameplay and user experience</li>
        <li>Fix crashes, bugs, and technical issues</li>
        <li>Understand how players interact with the game</li>
        <li>Maintain app security and performance</li>
        <li>Comply with legal and platform requirements</li>
        <li>Show and measure ads, if advertising is enabled</li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>We do not sell personal information.</p>
      <p>
        Information may be shared with third-party service providers only as
        needed to operate, analyze, improve, or support the game. These providers
        may include Google Firebase, Google Play Services, analytics providers,
        crash reporting services, and advertising partners if ads are enabled.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain collected information only for as long as needed for the
        purposes described in this Privacy Policy, unless a longer retention
        period is required by law or by the third-party services used in the
        game.
      </p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>Crashy Climber is not directed to children under 13.</p>
      <p>
        We do not knowingly collect personal information from children under 13.
        If you believe that a child under 13 has provided personal information
        through the game, please contact us and we will take reasonable steps to
        delete that information.
      </p>

      <h2>9. Security</h2>
      <p>
        We take reasonable steps to protect information from unauthorized access,
        loss, misuse, or alteration. However, no method of electronic storage or
        transmission over the internet is completely secure.
      </p>

      <h2>10. Your Choices</h2>
      <p>
        You may be able to limit certain data collection through your device
        settings, such as resetting or limiting your advertising ID, disabling app
        permissions, or uninstalling the game.
      </p>
      <p>
        If you have questions or requests about your data, you can contact us at:{" "}
        <a href="mailto:dortayari@gmail.com">dortayari@gmail.com</a>
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make changes,
        we will update the effective date at the top of this page.
      </p>
      <p>
        Continued use of Crashy Climber after changes means you accept the
        updated Privacy Policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, contact us at:</p>
      <p>
        <strong>Teri Games / Dor Teri</strong>
        <br />
        Email: <a href="mailto:dortayari@gmail.com">dortayari@gmail.com</a>
      </p>
    </LegalPage>
  );
}
