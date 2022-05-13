import { Button, TextField } from "@mui/material";
import { useState, React } from "react";
import { useForm } from "react-hook-form";
import '../../styles/Form.css';


const PromptForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <TextField className="text-field" fullWidth={false} {...register("prompt")} placeholder="Write a prompt" />
      <p>{data}</p>
      <Button className="Button" variant="contained" type="submit">Submit</Button>
    </form>
  );
}

export default PromptForm