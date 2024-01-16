import UI from "sketch/ui";

export const onStartUp = () => {
  UI.message("veeui-plugin-sketch 插件已启动");
};

export const onShutdown = () => {
  UI.message("veeui-plugin-sketch 插件已被禁用");
};
