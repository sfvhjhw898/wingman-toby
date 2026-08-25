import Reveal from "@/components/motion/Reveal";
import MailingListForm from "@/components/MailingListForm";

export default function MailingList() {
  return (
    <section className="bg-[var(--color-paper-2)] py-[var(--space-3xl)]">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-[var(--space-2xs)]">Stay in the loop</p>
          <h2
            className="uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Join the mailing list
          </h2>
          <p className="mt-[var(--space-sm)] text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[46ch]">
            Information on upcoming clinics, new kit, exclusive coaching
            videos and much more.
          </p>
          <div className="mt-[var(--space-lg)]">
            <MailingListForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
