import './MyLabel.css';

export interface MyLabelProps {
  /**
   * Inidica si las letras se muestran en mayusculas.
   */
   allCaps?: boolean;
   /**
   * Este es el color del texto.
   */
   color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Este es color personalizado del texto.
   */
  fontColor?: string,
  label: string;
  /**
   * Este es el tamaño del texto.
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
}

export const MyLabel = ({ 
                          allCaps = false,
                          color = 'primary',
                          fontColor, 
                          label = 'No label', 
                          size = 'normal', 
                        } : MyLabelProps ) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
