declare module 'vite-plugin-css-modules' {
    import { Plugin } from 'vite';
    const cssModulesPlugin: () => Plugin;
    export default cssModulesPlugin;
}
