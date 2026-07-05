import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Crashy Climber",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service for Crashy Climber" subtitle="Effective Date: 07/06/2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Crashy
        Climber (the &ldquo;Game&rdquo;), developed by <strong>Teri Games</strong>{" "}
        (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By downloading,
        installing, or playing the Game, you agree to these Terms. If you do not
        agree, please do not use the Game.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        The Game is intended for users aged 13 and older. By using the Game, you
        confirm that you meet this age requirement or have a parent or guardian&rsquo;s
        permission to play.
      </p>

      <h2>2. License to Use the Game</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license
        to install and use the Game on a device you own or control, for your
        personal, non-commercial entertainment. All rights not expressly granted
        are reserved.
      </p>

      <h2>3. Ownership</h2>
      <p>
        The Game, including its code, art, characters, music, and all related
        content, is owned by Teri Games and protected by intellectual property
        laws. You may not copy, modify, distribute, sell, or reverse-engineer any
        part of the Game except as permitted by applicable law.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use cheats, bots, exploits, or unauthorized third-party software to modify gameplay</li>
        <li>Interfere with the Game&rsquo;s servers, security, or other players&rsquo; experience</li>
        <li>Use the Game for any unlawful or harmful purpose</li>
        <li>Reverse-engineer, decompile, or extract source code or assets from the Game, except where permitted by law</li>
      </ul>

      <h2>5. Virtual Items and Currency</h2>
      <p>
        The Game may include virtual currency (such as coins) and unlockable
        content (such as character skins) earned through gameplay. Virtual items
        have no real-world monetary value, cannot be exchanged for cash, and exist
        solely within the Game. We may adjust, reset, or discontinue virtual items
        at our discretion, including as part of updates or if the Game is
        discontinued.
      </p>

      <h2>6. Advertising and In-App Purchases</h2>
      <p>
        The Game may display advertising or, in the future, offer optional in-app
        purchases. Any such features will be governed by these Terms and, where
        applicable, the terms of the relevant app store (Apple App Store / Google
        Play).
      </p>

      <h2>7. Beta Access</h2>
      <p>
        Crashy Climber is currently available as a beta release. Beta versions may
        contain bugs, incomplete features, or unstable behavior, and progress or
        data (such as scores or coins) may be reset without notice as the Game is
        updated. We may modify or discontinue beta access at any time.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Game is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
        without warranties of any kind, whether express or implied, including
        warranties of merchantability, fitness for a particular purpose, or
        non-infringement. We do not guarantee the Game will be uninterrupted,
        error-free, or secure.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Teri Games shall not be liable for
        any indirect, incidental, special, or consequential damages arising from
        your use of, or inability to use, the Game.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the Game at any time, with or
        without notice, if we believe you have violated these Terms.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make changes, we will
        update the effective date at the top of this page. Continued use of the
        Game after changes means you accept the updated Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>If you have any questions about these Terms, contact us at:</p>
      <p>
        <strong>Teri Games / Dor Teri</strong>
        <br />
        Email: <a href="mailto:dortayari@gmail.com">dortayari@gmail.com</a>
      </p>
    </LegalPage>
  );
}
