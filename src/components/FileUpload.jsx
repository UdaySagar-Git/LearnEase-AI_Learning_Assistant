"use client";

import React, { useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import { Inbox } from "lucide-react";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileUpload = () => {
  const [pdfText, setPdfText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile]);

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const loadingTask = pdfjs.getDocument(
          URL.createObjectURL(selectedFile)
        );
        const pdf = await loadingTask.promise;
        const totalNumPages = pdf.numPages;
        let extractedText = "";

        for (let pageNum = 1; pageNum <= totalNumPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const pageText = await page.getTextContent();

          pageText.items.forEach((item) => {
            if ("str" in item) {
              extractedText += item.str + " ";
            }
          });
        }
        setPdfText(extractedText);
      } catch (error) {
        console.error("Error converting PDF to text:", error);
      }
    }
  };

  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      console.log("Please select a PDF file.");
    }
  };

  useEffect(() => {
    localStorage.setItem("pdfText", pdfText);
  }, [pdfText]);

  return (
    <div>
      {!selectedFile ? (
        <div className="flex h-[92vh] justify-center items-center cursor-pointer w-screen  bg-gradient-to-r from-rose-100 to-teal-100 border">
          <div
            className="bg-slate-200 shadow-md p-5 rounded-lg h-[200px] w-[300px] flex flex-col items-center justify-center hover:bg-gray-300  border-gray-700"
            onDrop={handleFileChange}
            onClick={() => fileInputRef.current?.click()}
          >
            <Inbox className="w-10 h-10 text-blue-500" />
            <p className="mt-2 text-sm text-slate-400">
              Drop PDF Here or Click to Upload
            </p>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
        </div>
      ) : (
        <div className="p-3 flex gap-5">
          <div className="flex w-full h-[80vh] justify-center items-center cursor-pointer flex-col ">
            <div
              className="bg-slate-200 shadow-md p-5 rounded-lg h-[200px] w-[300px] flex flex-col items-center justify-center hover:bg-gray-300"
              onDrop={handleFileChange}
            >
              <Inbox className="w-10 h-10 text-blue-500" />
              <p className="mt-2 text-sm text-slate-400">
                {selectedFile
                  ? selectedFile.name
                  : "Drop PDF Here or Click to Upload"}
              </p>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
            </div>
            <Link href="/generateQuiz">
              <p className="bg-blue-500 text-white px-3 py-1 mt-2 rounded-md">
                Generate Quiz
              </p>
            </Link>
          </div>
          <div>
            <div className="bg-slate-200  px-5 py-2 mt-5 rounded-lg ">
              <h1 className="font-bold text-2xl ">Extracted Text</h1>
              <p className="shadow-md rounded-lg max-h-[500px] overflow-y-auto">
                {pdfText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
