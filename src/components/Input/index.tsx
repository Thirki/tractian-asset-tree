import { Dispatch, SetStateAction, useCallback } from "react";
import { MagnifyingGlass } from "../../icons";
import { Wrapper, InputElement } from "./style";

interface IInputProps {
  setInputText: Dispatch<SetStateAction<string>>;
  text: string;
}

export const Input: React.FC<IInputProps> = ({ setInputText, text = "" }) => {
  const handleChangeText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const myText = event.target.value;
      if (!myText.startsWith(" ")) {
        setInputText(myText);
      }
    },
    [setInputText]
  );

  return (
    <Wrapper>
      <InputElement
        placeholder="Buscar Ativo ou local"
        value={text}
        onChange={handleChangeText}
      />
      <MagnifyingGlass />
    </Wrapper>
  );
};
