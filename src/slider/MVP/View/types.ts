interface IConfig {
  min: number,
  max: number,
  valueFrom: number;
  valueTo: number;
  gap: number,
  vertical: boolean;
  floatValues: boolean;
}

interface ObserverViewValues{
 value: IConfig;
 flow: string;
}

interface ObserverThumbValues{
  value: number;
  flow: string;
}

interface ObserverRulerValues{
  value: number;
  flow: string;
}

interface ObserverPrompValues{
  value: number;
  flow: string;
}

export type {
  IConfig,
  ObserverViewValues,
  ObserverThumbValues,
  ObserverRulerValues,
  ObserverPrompValues
};
