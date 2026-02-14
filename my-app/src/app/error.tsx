"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Something went wrong.</h2>
      <p>Please try again.</p>
      <button onClick={reset} style={{ marginTop: 12 }}>
        Reload this page
      </button>
    </div>
  );
}
