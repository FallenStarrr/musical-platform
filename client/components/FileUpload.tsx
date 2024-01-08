import React, { ReactNode, RefObject, useRef } from 'react'

interface FileUploadProps {
    setFile: Function
    accept: string
    children: ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>(null);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files) {
            setFile(e.target.files[0])
        }
    }
        
    



    return (
    <div onClick={() => ref.current?.click()}>
        <input type="file" 
            accept={accept}
            style={{display: "none"}}
            ref={ref as RefObject<HTMLInputElement>}
            onChange={onChange}
        />
        {children}
    </div>
  )
}

export default FileUpload