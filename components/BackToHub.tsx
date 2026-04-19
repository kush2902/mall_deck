"use client";

type Props = {
  setActive: (key: string) => void;
};

export default function BackToHub({ setActive }: Props) {
  return (
    <button
      onClick={() => setActive("hub")}
      className="absolute top-6 left-6 z-50 text-sm uppercase tracking-wider opacity-70 hover:opacity-100 transition"
    >
      ← Back
    </button>
  );
}
