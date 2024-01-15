import React from 'react';
import './AdvantagesGrid.css';
//Importing all the icons we want to use.
import { TbPigMoney } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { TiCode } from "react-icons/ti";
import { TiFlowParallel } from "react-icons/ti";
import { TiFlash } from "react-icons/ti";
import { MdLanguage } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { FaSyncAlt } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { FaFileCsv } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

//advantagesData, can be refactorized to be used from a .json file but we must be careful with the icon property.
const AdvantagesGrid = () => {
  const advantages = [
    { icon: TbPigMoney, title: 'Unidades sueltas a precio mayorista PVD', description: 'Miles de artículos del catálogo de BigBuy, con la posibilidad de comprar unidades sueltas a precio mayorista PVD' },
    { icon: MdDiscount, title: 'Descuento automático', description: 'Descuento adicional sobre el PVD de hasta el 10% en función del importe total del carrito de la compra' },
    { icon: TiCode, title: 'Servicio dropshipping - Envíos internacionales', description: 'Envío desde BigBuy directo al cliente final con el nombre y la imagen de su empresa.' },
    { icon: MdLanguage, title: 'Traducciones nativas a 24 idiomas europeos', description: 'Nuestro catálogo está traducido a 24 idiomas europeos por traductores profesionales nativos.' },
    { icon: TiFlash, title: 'Descarga de material para marketing online', description: 'Su panel de control dispone de banners, imágenes y newsletters en multitud de idiomas para usarlo en su web.' },
    { icon: CgShutterstock, title: 'Bloqueo de stock', description: 'Ofrecemos un servicio gratuito de bloqueo de stock de parte de nuestro catálogo por un máximo de 7 días, sin necesidad de entregar dinero a cuenta. Es ideal para lanzar promociones en webs de compra colectiva' },
    { icon: FaSyncAlt, title: 'Sincroniza con BigBuy - API / FTP / CSV / XML', description: 'Facilitamos multitud de opciones para sincronizar catálogo, stocks, pedidos, transportistas, precios de envío y trackings con BigBuy' },
    { icon: TiFlowParallel, title: 'Multi-channel Integration Platform', description: 'Plataforma que centraliza, gestiona y sincroniza todas las necesidades de su tienda dropshipping' },
    { icon: RiShoppingBasketLine, title: 'Tienda dropshipping 360º', description: 'Solución integral llave en mano, basada en una tienda online 360º sincronizada con BigBuy, que incluye blog y multitud de herramientas.' },
    { icon: CiBoxes, title: 'Pedidos agrupados en un solo envío', description: 'Posibilidad de unificar multitud de pedidos recibidos en un sólo envío a su almacén, logística o FBA.' },
    { icon: FaFileCsv, title: 'Carga masiva de pedidos en CSV', description: 'Posibilidad de hacer una carga masiva por CSV de pedidos con envío dropshipping.' },
    { icon: MdLocalShipping, title: 'Envíos con los principales couriers internacionales', description: 'Integración de multitud de transportistas, precios de envío y trackings con los principales couriers (UPS, DHL, TNT, GLS, DPD, etc.)' },
  ];


  //We get every 4 rows to make the background color utility.
  const rows = [
    advantages.slice(0, 3),
    advantages.slice(3, 6),
    advantages.slice(6, 9),
    advantages.slice(9, 12),
  ];

  //We return the data and assign the color class by the row index.
  return (
    <div className="advantages-grid">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`advantages-row ${getRowColorClass(rowIndex)}`}>
          {row.map((advantage, cellIndex) => (
            <div key={cellIndex} className="advantage-cell">
              {renderIcon(advantage.icon)}
              <h4 className='advantageTitle'>{advantage.title}</h4>
              <p className='advantageDescription'>{advantage.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const renderIcon = (IconComponent) => {
  return IconComponent ? React.createElement(IconComponent, { fontSize: '30px' }) : null;
};

const getRowColorClass = (rowIndex) => {
  const colors = ['lightest-blue', 'light-blue', 'medium-blue', 'dark-blue'];
  return colors[rowIndex % colors.length];
};


export default AdvantagesGrid;