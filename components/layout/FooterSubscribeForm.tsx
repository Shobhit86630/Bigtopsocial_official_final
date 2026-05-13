"use client";

export function FooterSubscribeForm() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
        Subscribe Us
      </p>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Enter Your Email...."
          className="h-12 w-full rounded-full border border-white/10 bg-surface px-5 text-sm text-foreground outline-none ring-accent/40 placeholder:text-muted focus:border-accent/50 focus:ring-2"
        />
        <button
          type="submit"
          className="h-12 shrink-0 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition hover:bg-foreground/90"
        >
          Subscribe Us
        </button>
      </form>
    </>
  );
}
