"use client";

import { useState, FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "error" | "success";

export default function MailingListForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!firstName || !lastName || !email) {
      setStatus("error");
      setErrorMsg("First name, last name, and email are all required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("That email doesn't look right.");
      return;
    }

    setStatus("loading");
    const subject = encodeURIComponent("Join the mailing list");
    const body = encodeURIComponent(
      `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\n\nPlease add me to the mailing list.`
    );
    window.setTimeout(() => {
      window.location.href = `mailto:wingmantoby@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          disabled={status === "loading"}
          className="min-h-11 rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 text-[var(--text-base)] placeholder:text-[var(--color-muted)] disabled:opacity-50"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          disabled={status === "loading"}
          className="min-h-11 rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 text-[var(--text-base)] placeholder:text-[var(--color-muted)] disabled:opacity-50"
        />
      </div>
      <div className="mt-3 flex flex-col sm:flex-row gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          disabled={status === "loading"}
          className="min-h-11 flex-1 rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 text-[var(--text-base)] placeholder:text-[var(--color-muted)] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-11 inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium transition-[opacity,transform] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Join the list"
          )}
        </button>
      </div>

      {status === "error" ? (
        <p className="mt-3 flex items-center gap-2 text-[var(--text-sm)] text-[var(--color-accent)]">
          <AlertCircle size={16} aria-hidden="true" />
          {errorMsg}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-3 flex items-center gap-2 text-[var(--text-sm)] text-[var(--color-ink-2)]">
          <CheckCircle2 size={16} aria-hidden="true" />
          Opening your email app — hit send there to finish joining.
        </p>
      ) : null}
    </form>
  );
}
