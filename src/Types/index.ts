import { ComponentProps, MouseEventHandler } from "react";

export interface CustomButtonProps {
  title : string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType? : 'button' | 'submit';
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}

export type CustomButtonProps2 = React.ComponentProps<"button">;















//  -----------------      NOTES      -----------------    //  

// export interface SearchManufacturerProps {
//   manufacturer: string;
//   setManufacturer: (manufacturer: string) => void; 
//   void because setState doesnt return anything it only updates an existing value

//   (manufacturer: string) => void;  ✅ It works fine if you're only passing strings directly,
//    like: setManufacturer("Toyota");
//   But it does NOT handle functions like:
//   setManufacturer(prev => prev.toUpperCase());
//   so this is better  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
// }