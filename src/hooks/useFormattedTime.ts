import {useTranslation} from 'react-i18next';
const useFormattedTime = () => {
    const {i18n, t} = useTranslation();
    return (dateString: string) => {
        const date = new Date(dateString);
        const formattedTime = new Intl.DateTimeFormat(i18n.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
        return `${formattedTime} ${t('clock')}`;
    };
}
export default useFormattedTime;
