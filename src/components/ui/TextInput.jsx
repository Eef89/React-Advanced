// import './Button.css'
import { Input } from "@chakra-ui/react";

// export const TextInput = () => { return (<input className="text-input"></input>) } //OLD!

export const TextInput = ({ changeFn, ...props }) => {
  return <Input variant="filled" onChange={changeFn} {...props}></Input>;
};
