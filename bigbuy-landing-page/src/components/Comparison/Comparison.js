import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./Comparison.css";

export default function Comparison() {
  return (
    <div className="comparison-container">
      <table className="comparison-table">
        <thead className="test">
          <tr>
            <th></th>
            <th className="comparisonTitlesBigbuy">
              <strong>BIGBUY</strong>
            </th>
            <th className="comparisonTitlesOthers">
              <strong>OTRAS COMPETENCIAS</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Acceso a conectores marketplaces </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Compatible con Tienda Dropshipping 360º </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Sincronización API / FTP / CSV </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Envíos dropshipping ilimitados </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Compra mayorista (Unidades sueltas a precio mayorista PVD, sin pedido mínimo) </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Descuentos especiales y adicionales por volumen </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Key Acount Manager (KAM) a tu disposición </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Amplio catálogo con primeras marcas, stock en Europa y entregas rápidas (24 idiomas) </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
          <tr>
            <th scope="row">Acceso a catálogo completo de Winning Products y TopVentas (Bloqueo de stock) </th>
            <td>
              <FaThumbsUp className="check-icon" />
            </td>
            <td>
              <FaThumbsDown className="times-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}