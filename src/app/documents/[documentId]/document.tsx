import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

// interface DocumentProps {
//   preloadedDocument: Preloaded<typeof api.documents.getById>;
// }

export function Document() {
  return (
    <div className="min-h-screen bg-editor-bg">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]">
        {/* <Navbar data={document} /> */}
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}
