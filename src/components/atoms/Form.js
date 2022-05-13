import { Button,  } from "@mui/material";
import { useState, React } from "react";
import { useForm } from "react-hook-form";
import '../../styles/Form.css';


const PromptForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <textarea className="text-field" fullWidth={true} {...register("prompt")} placeholder="Write a prompt" />
      <p>{data}</p>
      <div className="button-span">
        <Button variant="contained" type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default PromptForm