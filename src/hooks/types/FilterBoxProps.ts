import { CustomPageableDTO } from "./CustomPageableDTO";

export interface FilterBoxProps {
    pageableDTO: CustomPageableDTO;
    dto: {
      sortValues: string[];
      filterOptions: string[];
      dateOptions: string[];
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}