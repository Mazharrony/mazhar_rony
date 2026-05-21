import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  eyebrow,
  title,
  italic,
  description,
  align = "left",
  className,
}: {
  /** Section number like "01", "02". */
  number?: string;
  eyebrow?: string;
  title: string;
  /** Optional serif-italic phrase appended to the title. */
  italic?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || number) && (
        <div className={cn("eyebrow mb-5", align === "center" && "justify-center")}>
          {number && (
            <span className="text-accent/90 tabular-nums">{number}</span>
          )}
          {number && eyebrow && <span className="text-white/20">/</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tightest leading-[1.05] text-balance">
        <span className="text-white">{title}</span>
        {italic && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-white/85">
              {italic}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-white/55 leading-relaxed text-pretty max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
