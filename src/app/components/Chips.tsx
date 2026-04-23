type TechChipProps = {
  label: string;
};

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="text-[11px] px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-indigo-600 hover:text-white">
      {label}
    </span>
  );
}