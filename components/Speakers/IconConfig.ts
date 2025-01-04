import Speaker from './Speaker';

type IconConfig = {
  prop: keyof Speaker['social'];
  classes: string;
  IconComponent: React.ElementType;
};

export default IconConfig;