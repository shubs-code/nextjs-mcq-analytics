"use client"
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";

import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function PDFViewer({inputfile}) {
  const [file, setFile] = useState(inputfile??"");
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="">
      {
        !file && (
          <div className="min-h-screen flex items-center justify-center">
            <Button component="label" variant="outlined" >
              Open File
              <VisuallyHiddenInput type="file" onChange={onFileChange} />
            </Button>
          </div>
        )
      }
      <div>
        
        {
          file && (
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
          )
        }
 
      </div>
      <div className="fixed bottom-6 right-6">
        <Fab color="secondry" aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
    </div>
  );
}
