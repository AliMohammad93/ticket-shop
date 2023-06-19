import {useTranslation} from 'react-i18next';
const useFormattedDate = () => {
    const {i18n} = useTranslation();
    const format = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = new Intl.DateTimeFormat(i18n.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(date);
        const formattedDateWithoutComma = formattedDate.replace(/,/g, '');
        return formattedDateWithoutComma;
    }
    return format;
}

export default useFormattedDate;
