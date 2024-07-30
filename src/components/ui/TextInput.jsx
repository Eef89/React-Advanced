// import './Button.css'
import { Input } from "@chakra-ui/react";

// export const TextInput = () => { return (<input className="text-input"></input>) } //OLD!

export const TextInput = ({ changefn, ...props }) => {
  return (
    <Input
      bgColor="blackAlpha.200"
      variant="flushed"
      onChange={changefn}
      {...props}
    ></Input>
  );
};
