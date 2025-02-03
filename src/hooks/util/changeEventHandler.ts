
export const handleInputChange = (setter: React.Dispatch<React.SetStateAction<any>>) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setter((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    };
};