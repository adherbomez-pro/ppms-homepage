export const getLocale = () => {
    if (navigator.languages?.length) return navigator.languages[0].split('-')[0];
    return navigator.language.split('-')[0];
};
