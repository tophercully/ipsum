import { Ipsum } from "@/types";
import { Copy } from "lucide-react";

interface Props {
  ipsum: Ipsum;
}

const IpsumCard: React.FC<Props> = ({ ipsum }) => {
  const Stat: React.FC<{ label: string; value: number }> = ({
    label,
    value,
  }) => (
    <div className="bg-base-50 px-2 py-1 text-center">
      <span className="font-medium text-base-950">{value}</span>{" "}
      <span className="text-base-500">{label}</span>{" "}
    </div>
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ipsum.value);
    const toast = document.createElement("div");
    toast.textContent = "Copied to clipboard!";
    toast.className =
      "fixed bottom-4 bg-success text-white font-medium px-4 py-2 rounded shadow-md";
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-lg">
      <div className="flex p-4">
        <div className="max-h-[40svh] w-full overflow-y-auto rounded-md bg-base-50 p-2 text-base-700">
          {ipsum.value.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
      <div
        id="stats"
        className="grid grid-cols-2 items-center justify-between gap-0.5 bg-base-100"
      >
        <Stat
          label="Characters"
          value={ipsum.length}
        />
        <Stat
          label="Words"
          value={ipsum.words}
        />
        <Stat
          label="Sentences"
          value={ipsum.sentences}
        />
        <Stat
          label="Paragraphs"
          value={ipsum.paragraphs}
        />
        <button
          onClick={copyToClipboard}
          className="col-span-2 flex w-full items-center justify-center bg-base-50 py-3 font-medium text-base-300 hover:bg-base-100 hover:text-base-500 active:bg-base-150"
        >
          <Copy className="h-full p-1" /> Copy
        </button>
      </div>
    </div>
  );
};

export default IpsumCard;
