import type { SaasStackItem } from "../../data/saasScenes";

/** Lista de tecnologías: logo + nombre en línea, sin cápsulas. El logo toma color al pasar el cursor. */
export default function StackChips({ items }: { items: SaasStackItem[] }) {
  return (
    <ul className="flex gap-x-5 gap-y-2.5 overflow-x-auto scrollbar-none lg:flex-wrap lg:overflow-visible">
      {items.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="group/tech shrink-0 inline-flex items-center gap-2 text-[13px] lg:text-[14px] text-zinc-300 hover:text-white transition-colors"
        >
          <Icon className="w-4 h-4 lg:w-[18px] lg:h-[18px] grayscale opacity-70 transition-[filter,opacity] duration-300 group-hover/tech:grayscale-0 group-hover/tech:opacity-100" />
          {name}
        </li>
      ))}
    </ul>
  );
}
