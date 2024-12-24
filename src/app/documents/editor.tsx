"use client";

import { useEditor } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  initialContent?: string | undefined;
}
console.log(11111);
export default function Editor({ initialContent }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none print:boder-0 border bg-white border-editor-border flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    content: "<p>Hello World</p>",
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}