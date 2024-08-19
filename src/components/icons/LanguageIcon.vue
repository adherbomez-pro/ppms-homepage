<template>
    <svg
        :width="size"
        :height="size"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.5 19L13.75 7.75L19 19M10 16H17.5M1 3.62136C2.96557 3.37626 4.96804 3.25 7 3.25M7 3.25C8.12081 3.25 9.23265 3.28841 10.3343 3.364M7 3.25V1M10.3343 3.364C9.17633 8.65781 5.68868 13.0801 1 15.5023M10.3343 3.364C11.2298 3.42545 12.1186 3.51146 13 3.62136M8.41128 12.1162C6.78554 10.4619 5.47704 8.49491 4.58432 6.31366"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: '24px',
        },
    },
};
</script>
