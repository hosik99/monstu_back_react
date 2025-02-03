export interface CustomPageableDTO {
    page: number;
    size: number;

    sortValue: string;
    sortDirection: string;

    filterOption: string;
    filterValue: string;

    dateOption: string;
    dateStart: string;
    dateEnd: string;
}

//http://localhost:8080/post/log/0/5?sortValue=viewCount&sortDirection=DESC&filterOption=authorId&filterValue=1&dateOption=createdAt&dateStart=2024-11-11T00:00&dateEnd=2024-11-25T23:59:59
export function buildPageableDTO(pageableDTO:CustomPageableDTO) :string{
    const params = new URLSearchParams();

    if(pageableDTO.sortValue != '' && pageableDTO.sortDirection != ''){
        params.append('sortValue', pageableDTO.sortValue);
        params.append('sortDirection', pageableDTO.sortDirection);
    }
    if(pageableDTO.filterOption != '' && pageableDTO.filterValue != ''){
        params.append('filterOption', pageableDTO.filterOption);
        params.append('filterValue', pageableDTO.filterValue);  
    }
    if(pageableDTO.dateOption != '' && pageableDTO.dateStart != '' && pageableDTO.dateEnd != ''){
        params.append('dateOption', pageableDTO.dateOption);
        params.append('dateStart', pageableDTO.dateStart);
        params.append('dateEnd', pageableDTO.dateEnd);
    }
    
    return `/${pageableDTO.page}/${pageableDTO.size}?${params.toString()}`;
}

export const increasePage = (pageableDTO: CustomPageableDTO, setPageableDTO: React.Dispatch<React.SetStateAction<CustomPageableDTO>> ) => {
    setPageableDTO((pageableDTO)=>({
        ...pageableDTO,
        page : Math.max(pageableDTO.page + 1,0),
    }))
}

export const decreasePage = (pageableDTO: CustomPageableDTO, setPageableDTO: React.Dispatch<React.SetStateAction<CustomPageableDTO>> ) => {
    setPageableDTO((pageableDTO)=>({
        ...pageableDTO,
        page : Math.max(pageableDTO.page - 1, 0),
    }))
}