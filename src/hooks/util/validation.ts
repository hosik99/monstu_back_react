
// ' '가 포함되어있는지 확인, 공백이 있으면 true 반환
export function containSpace(text: string){
    const space_regex = /\s/;
    return typeof text === 'string' && space_regex.test(text);
}

export function notNull(input: string){
    if(input.trim() !== '') return true;
}

//문자열 타입 확인
export function sensing(text: string, ...languages: string[]): boolean {
    if (text.trim() === '' || !text) return false;

    const engB = 'A-Z';   // 영어 대문자
    const engS = 'a-z';   // 영어 소문자
    const num = '0-9';    // 숫자

    let regexPattern = '';

    languages.forEach(e => {
        switch (e) {
            case 'enB':
                regexPattern += engB; break;
            case 'enS':
                regexPattern += engS; break;
            case 'num':
                regexPattern += num; break;
        }
    });
    return new RegExp(`^[${regexPattern}]+$`).test(text);
}

//이메일 타입 확인
/* {2,}: 최소 2개의 알파벳 문자,$ : 문자열의 끝 */
export function isEmail(email:string){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}