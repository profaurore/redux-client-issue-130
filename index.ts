import type { ISplitState } from "@splitsoftware/splitio-redux";

// Uncommenting this line will fix the issue on line 11 and correctly produce an
// error for line 10.
// import "@splitsoftware/splitio/types/splitio";

type LocalTreatmentWithConfig = ISplitState["treatments"][string][string];

// This should not work, but it does because `LocalTreatmentWithConfig` is `any`.
const someTreatmentWithConfig: LocalTreatmentWithConfig = 123;

const sameTreatmentWithConfig: SplitIO.TreatmentWithConfig =
  someTreatmentWithConfig;
