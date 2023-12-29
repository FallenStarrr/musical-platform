import React, { ReactNode, useRef } from 'react'

interface FileUploadProps {
    file: any;
    setFile: Function
    accept: string
    children: ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({file, setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()
  
    return (
    <div>
        <input type="file" 
            accept={accept}
            style={{display: "none"}}
            ref={ref}
        />
    </div>
  )
}

export default FileUpload