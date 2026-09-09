declare module "vue-material-design-icons/*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{
    title?: string;
    size?: number | string;
    fillColor?: string;
  }>;

  export default component;
}
