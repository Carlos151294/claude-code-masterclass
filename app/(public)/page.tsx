// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react";

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />
          cket Heist
        </h1>
        <div>Work less. Scheme more.</div>
        <p>
          Turn the slow afternoons into something worth remembering. Draft a
          caper, recruit your accomplices, and watch the clock tick down on
          missions ranging from the perfectly petty to the gloriously absurd.
        </p>
        <p>
          Whether it&apos;s smuggling the last good pen out of the supply closet
          or staging a coffee-cup heist before the 3 PM standup, every mission
          counts. Sign in to view your active heists — or create an account to
          start your first job.
        </p>
      </div>
    </div>
  );
}
