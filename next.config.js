/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
}
