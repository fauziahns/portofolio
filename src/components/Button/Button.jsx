import React from 'react'

export default function Button({text}) {
    const pdfDownload = () => {
        fetch('CV-FauziahNurSyifa.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV-FauziahNurSyifa.pdf';
                alink.click();
            })
        })
    }
  return (
    <div>
      <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={pdfDownload}>
        {text}
     </button>
    </div>
  )
}
