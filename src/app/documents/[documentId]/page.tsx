import { Document } from "./document";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  console.log(documentId);
  return <Document />;
};

export default DocumentIdPage;
