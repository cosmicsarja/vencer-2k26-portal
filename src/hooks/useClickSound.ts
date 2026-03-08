const audio = typeof window !== "undefined" ? new Audio("/sounds/click.mp3") : null;

export function playClickSound() {
  if (!audio) return;
  audio.currentTime = 0;
  audio.volume = 0.5;
  audio.play().catch(() => {});
}

export function useGlobalClickSound() {
  if (typeof window === "undefined") return;

  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='button']")
    ) {
      playClickSound();
    }
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}
