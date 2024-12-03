import { Ipsum } from "@/types";

export const stringToIpsum = (text: string): Ipsum => {
  const words = text.split(/\s+/).length;
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const paragraphs = text.split(/\n{2,}/).length;

  return {
    value: text,
    length: text.length,
    words: words,
    sentences: sentences,
    paragraphs: paragraphs,
  };
};
