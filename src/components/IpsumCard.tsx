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
    <div className="border px-2 py-1 text-center">
      <span className="text-base-500">{label}:</span>{" "}
      <span className="font-medium text-base-950">{value}</span>
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
    <div className="flex flex-col rounded-lg border bg-white shadow-lg">
      <div
        id="stats"
        className="mb-2 grid grid-cols-2 items-center justify-between"
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
      </div>
      <div className="mb-4 flex px-4">
        <div className="max-h-[30svh] overflow-y-auto rounded-md bg-base-50 p-2">
          {ipsum.value.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={copyToClipboard}
        className="mx-auto mb-4 mt-auto flex items-center justify-center rounded-md border bg-base-950 px-3 py-2 font-medium text-white hover:bg-base-800 active:bg-base-700"
      >
        <Copy className="h-full p-1" /> Copy
      </button>
    </div>
  );
};

export default IpsumCard;
