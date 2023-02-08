import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface BoxColorContextInterface {
  boxColor: boolean;
  setBoxColor: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const defaultBoxColor = {
  boxColor: true,
  setBoxColor: () => true,
};

export const BoxColorContext = createContext<BoxColorContextInterface>(defaultBoxColor);

const BoxColorProvider = ({ children }: BoxColorContextInterface) => {
  const [boxColor, setBoxColor]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(
    defaultBoxColor.boxColor,
  );

  // const toggleBoxColor = (): void => {
  //   setBoxColor(false);
  // };

  return (
    <BoxColorContext.Provider value={{ boxColor, setBoxColor }}>
      {children}
    </BoxColorContext.Provider>
  );
};

export default BoxColorProvider;
