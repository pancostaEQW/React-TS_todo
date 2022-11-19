import React from "react";
import { useForm } from "react-hook-form";

export default function MyInputFile() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h2>File Upload</h2>
        <input {...register} required type="file" name="object"/>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
