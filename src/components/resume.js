import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/MahtabKhanFrontEndDeveloper3.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


function ResumeNew() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex flex-col items-center' id="resume">
            <div className='justify-center z-10'>
                <a href={pdf}>
                    <button type="button" className="flex flex-row text-zinc-200 bg-red-600 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        href={pdf}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </button>
                </a>
            </div>

            <section fluid>
                <div>
                    <Document file={pdf}>
                        <Page renderTextLayer={false}
                            renderAnnotationLayer={false}
                            customTextRenderer={false} pageNumber={1} scale={dimensions.width > 786 ? 1.7 : 0.6} />
                    </Document>
                </div>
            </section>
            <div className='justify-center z-10'>
                <a href={pdf}>
                    <button type="button" className="flex flex-row text-zinc-200 bg-red-600 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        href={pdf}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ResumeNew;