import { auth } from "@clerk/nextjs/server";
import { EditorView } from "@/components/editor/editor-view";
import { Suspense } from "react";

async function ProtectedEditor() {
  await auth.protect();
  return <EditorView />;
}

export default function EditorPage() {
  return (
    <Suspense fallback={null}>
      <ProtectedEditor />
    </Suspense>
  );
}
