"use client"
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";

import FAB from"./_component/FAB"
import PdfInput from"./_component/PdfInput"
import Test from"./_component/Test"


pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const initialState = {
  numPages:null,
  file:"",
  takeTest:false,
  testName:"testing",
}

export default function PDFViewer({}) {
  
  const ref = useRef();
  const [state, setState] = useState( initialState );
  
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setState({...state, numPages:nextNumPages})
  }

  const setFile = (file)=>{
    setState({...state, file})
  }

  useEffect(()=>{
    document.body.classList.add('no-scrollbar');
    return ()=>{
      document.body.classList.remove('no-scrollbar');
    }
  },[])
  const endTest = ()=>{
    setState({...state, takeTest:false})
  }

  return (
    <div className="" >
      {
        !state?.file && (
          <div className="min-h-screen flex items-center justify-center">
              <PdfInput setFile={setFile}/>
          </div>
        )
      }
      <div ref={ref} >
        
        {
          state?.file && (
            <Document file={state?.file} onLoadSuccess={onDocumentLoadSuccess} >
            {Array.from({ length: state.numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={ref.current?.offsetWidth}
              />
            ))}
          </Document>
          )
        }
      </div>
      <FAB state={state} setState={setState}/>
      {
        state?.takeTest && <Test testName={state.testName} endTest={endTest}/>
      }
    </div>
  );
}
