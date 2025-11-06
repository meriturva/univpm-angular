import { LayoutConfig } from "./layout.config";

export function provideLayoutConfig(config : Omit<LayoutConfig, 'cosaPrivata'>) {
  const layoutConfig = new LayoutConfig();
  layoutConfig.nome = config.nome;
  return { provide: LayoutConfig, useValue: layoutConfig };
}
