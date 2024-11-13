"use client";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { X } from "lucide-react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value?: string;
  endpoint: "serverImage" | "messageFile";
}

function FileUpload({ onChange, value, endpoint }: FileUploadProps) {
  const filetype = value?.split(".").pop();

  if (value && filetype) {
    return (
      <div className='relative h-20 w-20'>
        <Image
          fill
          src={value || "/svgs/dog-breed-svgrepo-com.svg"}
          alt='Upload'
          className='rounded-full'
        />
        <button
          className='bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm'
          type='button'
          onClick={() => onChange("")}
        >
          <X className='h-4 w-4' />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}

export default FileUpload;
