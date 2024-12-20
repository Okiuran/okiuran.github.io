import React from 'react';
import MapComponent from '../../api/map.tsx';
import { useLanguage } from '../../idioma/preferencia-idioma.tsx';

const BuscarCentros: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h1>
        {language === 'es' ? 'Buscar centros de salud' : 'Cercar centres de salut'}
      </h1>
      <MapComponent />
    </div>
  );
};

export default BuscarCentros;