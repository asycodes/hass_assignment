import React, { useEffect, useState, useRef } from 'react';
import './Template.css';

/* global anychart */

const Template = ({ section }) => {
  const [content, setContent] = useState({
    title: 'Intention Title',
    intro: 'This is the introduction for Intention.',
    for: 'Arguments in favor of Intention.',
    against: 'Arguments against Intention.'
  });
  const mapContainerRef = useRef(null);
  const mapInitialized = useRef(false);

  // Load content based on section
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/${section.toLowerCase()}.json`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          console.error('File not found');
        }
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };

    loadContent();
  }, [section]);

  // Initialize the map
  const initializeMap = async () => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    try {
      await loadScript('https://cdn.anychart.com/releases/v8/js/anychart-base.min.js');
      await loadScript('https://cdn.anychart.com/releases/v8/js/anychart-ui.min.js');
      await loadScript('https://cdn.anychart.com/releases/v8/js/anychart-exports.min.js');
      await loadScript('https://cdn.anychart.com/releases/v8/js/anychart-map.min.js');
      await loadScript('https://cdn.anychart.com/geodata/latest/custom/world/world.js');

      if (window.anychart) {
        var data =  [
            
            { 'id': 'AF' }, { 'id': 'AL' }, { 'id': 'DZ' }, { 'id': 'AS' }, { 'id': 'AD' }, 
            { 'id': 'AO' }, { 'id': 'AI' }, { 'id': 'AG' }, { 'id': 'AR' }, { 'id': 'AM' },
            { 'id': 'AW' }, { 'id': 'AU' }, { 'id': 'AT' }, { 'id': 'AZ' }, { 'id': 'BS' },
            { 'id': 'BH' }, { 'id': 'BD' }, { 'id': 'BB' }, { 'id': 'BY' }, { 'id': 'BE' },
            { 'id': 'BZ' }, { 'id': 'BJ' }, { 'id': 'BM' }, { 'id': 'BT' }, { 'id': 'BO' },
            { 'id': 'BA' }, { 'id': 'BW' }, { 'id': 'BV' }, { 'id': 'BR' }, { 'id': 'IO' },
            { 'id': 'BN' }, { 'id': 'BG' }, { 'id': 'BF' }, { 'id': 'BI' }, { 'id': 'KH' },
            { 'id': 'CM' }, { 'id': 'CA' }, { 'id': 'CV' }, { 'id': 'KY' }, { 'id': 'CF' },
            { 'id': 'TD' }, { 'id': 'CL' }, { 'id': 'CN' }, { 'id': 'CX' }, { 'id': 'CC' },
            { 'id': 'CO' }, { 'id': 'KM' }, { 'id': 'CG' }, { 'id': 'CK' }, { 'id': 'CR' },
            { 'id': 'HR' }, { 'id': 'CU' }, { 'id': 'CY' }, { 'id': 'CZ' }, { 'id': 'DK' },
            { 'id': 'DJ' }, { 'id': 'DM' }, { 'id': 'DO' }, { 'id': 'TL' }, { 'id': 'EC' },
            { 'id': 'EG' }, { 'id': 'SV' }, { 'id': 'GQ' }, { 'id': 'ER' }, { 'id': 'EE' },
            { 'id': 'ET' }, { 'id': 'FK' }, { 'id': 'FO' }, { 'id': 'FJ' }, { 'id': 'FI' },
            { 'id': 'FR' }, { 'id': 'GF' }, { 'id': 'PF' }, { 'id': 'GA' }, { 'id': 'GM' },
            { 'id': 'GE' }, { 'id': 'DE' }, { 'id': 'GH' }, { 'id': 'GI' }, { 'id': 'GR' },
            { 'id': 'GL' }, { 'id': 'GD' }, { 'id': 'GP' }, { 'id': 'GU' }, { 'id': 'GT' },
            { 'id': 'GG' }, { 'id': 'GN' }, { 'id': 'GW' }, { 'id': 'GY' }, { 'id': 'HT' },
            { 'id': 'HM' }, { 'id': 'VA' }, { 'id': 'HN' }, { 'id': 'HK' }, { 'id': 'HU' },
            { 'id': 'IS' }, { 'id': 'IN' }, { 'id': 'ID' }, { 'id': 'IR' }, { 'id': 'IQ' },
            { 'id': 'IE' }, { 'id': 'IM' }, { 'id': 'IL' }, { 'id': 'IT' }, { 'id': 'JM' },
            { 'id': 'JP' }, { 'id': 'JE' }, { 'id': 'JO' }, { 'id': 'KZ' }, { 'id': 'KE' },
            { 'id': 'KI' }, { 'id': 'KW' }, { 'id': 'KG' }, { 'id': 'LA' }, { 'id': 'LV' },
            { 'id': 'LB' }, { 'id': 'LS' }, { 'id': 'LR' }, { 'id': 'LY' }, { 'id': 'LI' },
            { 'id': 'LT' }, { 'id': 'LU' }, { 'id': 'MO' }, { 'id': 'MK' }, { 'id': 'MG' },
            { 'id': 'MW' }, { 'id': 'MY' }, { 'id': 'MV' }, { 'id': 'ML' }, { 'id': 'MT' },
            { 'id': 'MH' }, { 'id': 'MQ' }, { 'id': 'MR' }, { 'id': 'MU' }, { 'id': 'YT' },
            { 'id': 'MX' }, { 'id': 'FM' }, { 'id': 'MD' }, { 'id': 'MC' }, { 'id': 'MN' },
            { 'id': 'ME' }, { 'id': 'MS' }, { 'id': 'MA' }, { 'id': 'MZ' }, { 'id': 'MM' },
            { 'id': 'NA' }, { 'id': 'NR' }, { 'id': 'NP' }, { 'id': 'NL' }, { 'id': 'NC' },
            { 'id': 'NZ' }, { 'id': 'NI' }, { 'id': 'NE' }, { 'id': 'NG' }, { 'id': 'NU' },
            { 'id': 'NF' }, { 'id': 'KP' }, { 'id': 'MP' }, { 'id': 'NO' }, { 'id': 'OM' },
            { 'id': 'PK' }, { 'id': 'PW' }, { 'id': 'PS' }, { 'id': 'PA' }, { 'id': 'PG' },
            { 'id': 'PY' }, { 'id': 'PE' }, { 'id': 'PH' }, { 'id': 'PN' }, { 'id': 'PL' },
            { 'id': 'PT' }, { 'id': 'PR' }, { 'id': 'QA' }, { 'id': 'RE' }, { 'id': 'RO' },
            { 'id': 'RU' }, { 'id': 'RW' }, { 'id': 'BL' }, { 'id': 'SH' }, { 'id': 'KN' },
            { 'id': 'LC' }, { 'id': 'MF' }, { 'id': 'PM' }, { 'id': 'VC' }, { 'id': 'WS' },
            { 'id': 'SM' }, { 'id': 'ST' }, { 'id': 'SA' }, { 'id': 'SN' }, { 'id': 'RS' },
            { 'id': 'SC' }, { 'id': 'SL' }, { 'id': 'SG' }, { 'id': 'SX' }, { 'id': 'SK' },
            { 'id': 'SI' }, { 'id': 'SB' }, { 'id': 'SO' }, { 'id': 'ZA' }, { 'id': 'KR' },
            { 'id': 'SS' }, { 'id': 'ES' }, { 'id': 'LK' }, { 'id': 'SD' }, { 'id': 'SR' },
            { 'id': 'SJ'  },{ 'id': 'US' }, { 'id': 'CA' }, { 'id': 'MX' }, { 'id': 'BR' }, { 'id': 'AR' }, 
            { 'id': 'CO' }, { 'id': 'VE' }, { 'id': 'PE' }, { 'id': 'CL' }, { 'id': 'BO' }, 
            { 'id': 'PY' }, { 'id': 'UY' }, { 'id': 'GY' }, { 'id': 'SR' }, { 'id': 'EC' },
            { 'id': 'BB' }, { 'id': 'TT' }, { 'id': 'JM' }, { 'id': 'BS' }, { 'id': 'HT' }, 
            { 'id': 'DO' }, { 'id': 'CU' }, { 'id': 'BZ' }, { 'id': 'GT' }, { 'id': 'SV' }, 
            { 'id': 'HN' }, { 'id': 'NI' }, { 'id': 'CR' }, { 'id': 'PA' }, { 'id': 'RU' }, 
            { 'id': 'CN' }, { 'id': 'IN' }, { 'id': 'ID' }, { 'id': 'PK' }, { 'id': 'BD' },
            { 'id': 'JP' }, { 'id': 'PH' }, { 'id': 'VN' }, { 'id': 'TH' }, { 'id': 'MY' }, 
            { 'id': 'SG' }, { 'id': 'KR' }, { 'id': 'KH' }, { 'id': 'LA' }, { 'id': 'MM' }, 
            { 'id': 'MN' }, { 'id': 'KP' }, { 'id': 'LK' }, { 'id': 'NP' }, { 'id': 'BT' }, 
            { 'id': 'MV' }, { 'id': 'AF' }, { 'id': 'IR' }, { 'id': 'IQ' }, { 'id': 'SY' }, 
            { 'id': 'JO' }, { 'id': 'LB' }, { 'id': 'IL' }, { 'id': 'PS' }, { 'id': 'SA' }, 
            { 'id': 'YE' }, { 'id': 'OM' }, { 'id': 'AE' }, { 'id': 'QA' }, { 'id': 'KW' }, 
            { 'id': 'BH' }, { 'id': 'CY' }, { 'id': 'TR' }, { 'id': 'KZ' }, { 'id': 'UZ' }, 
            { 'id': 'TM' }, { 'id': 'KG' }, { 'id': 'TJ' }, { 'id': 'AZ' }, { 'id': 'AM' }, 
            { 'id': 'GE' }, { 'id': 'MD' }, { 'id': 'UA' }, { 'id': 'BY' }, { 'id': 'PL' }, 
            { 'id': 'CZ' }, { 'id': 'SK' }, { 'id': 'HU' }, { 'id': 'RO' }, { 'id': 'BG' }, 
            { 'id': 'RS' }, { 'id': 'SI' }, { 'id': 'HR' }, { 'id': 'BA' }, { 'id': 'ME' }, 
            { 'id': 'MK' }, { 'id': 'AL' }, { 'id': 'GR' }, { 'id': 'IT' }, { 'id': 'MT' }, 
            { 'id': 'ES' }, { 'id': 'PT' }, { 'id': 'FR' }, { 'id': 'MC' }, { 'id': 'AD' }, 
            { 'id': 'CH' }, { 'id': 'DE' }, { 'id': 'LI' }, { 'id': 'AT' }, { 'id': 'LU' }, 
            { 'id': 'BE' }, { 'id': 'NL' }, { 'id': 'GB' }, { 'id': 'IE' }, { 'id': 'IS' },{ 'id': 'NO' }, { 'id': 'SE' }, { 'id': 'FI' }, { 'id': 'DK' }, { 'id': 'EE' }, 
            { 'id': 'LV' }, { 'id': 'LT' }, { 'id': 'ZA' }, { 'id': 'NA' }, { 'id': 'BW' }, 
            { 'id': 'ZW' }, { 'id': 'MZ' }, { 'id': 'SZ' }, { 'id': 'LS' }, { 'id': 'ZM' }, 
            { 'id': 'MW' }, { 'id': 'AO' }, { 'id': 'CD' }, { 'id': 'CG' }, { 'id': 'GA' }, 
            { 'id': 'GQ' }, { 'id': 'ST' }, { 'id': 'CM' }, { 'id': 'TD' }, { 'id': 'CF' }, 
            { 'id': 'SD' }, { 'id': 'SS' }, { 'id': 'UG' }, { 'id': 'KE' }, { 'id': 'TZ' }, 
            { 'id': 'BI' }, { 'id': 'RW' }, { 'id': 'ET' }, { 'id': 'SO' }, { 'id': 'DJ' }, 
            { 'id': 'ER' }, { 'id': 'EG' }, { 'id': 'LY' }, { 'id': 'TN' }, { 'id': 'DZ' }, 
            { 'id': 'MA' }, { 'id': 'EH' }, { 'id': 'MR' }, { 'id': 'ML' }, { 'id': 'SN' }, 
            { 'id': 'GM' }, { 'id': 'GW' }, { 'id': 'GN' }, { 'id': 'SL' }, { 'id': 'LR' }, 
            { 'id': 'CI' }, { 'id': 'BF' }, { 'id': 'GH' }, { 'id': 'TG' }, { 'id': 'BJ' }, 
            { 'id': 'NG' }, { 'id': 'NE' }, { 'id': 'TG' }, { 'id': 'BJ' }, { 'id': 'ZW' },{ 'id': 'PK', 'value': 26.6 },
            { 'id': 'AO', 'value': 21.0 },
            { 'id': 'LK', 'value': 8.9 },
            { 'id': 'ET', 'value': 6.8 },
            { 'id': 'KE', 'value': 6.7 },
            { 'id': 'ZM', 'value': 6.1 },
            { 'id': 'BD', 'value': 6.1 },
            { 'id': 'LA', 'value': 5.3 },
            { 'id': 'EG', 'value': 5.2 },
            { 'id': 'NG', 'value': 4.3 },
            { 'id': 'EC', 'value': 4.1 },
            { 'id': 'KH', 'value': 4.0 },
            { 'id': 'BY', 'value': 3.9 },
            { 'id': 'CI', 'value': 3.9 },
            { 'id': 'CM', 'value': 3.8 },
            { 'id': 'ZA', 'value': 3.4 },
            { 'id': 'CG', 'value': 3.4 },
            { 'id': 'BR', 'value': 3.4 },
            { 'id': 'MN', 'value': 3.0 },
            { 'id': 'AR', 'value': 2.9 }
          
        ];
        

        var map = anychart.map();
        map.geoData('anychart.maps.world');
        
    

        var series = map.choropleth(data);
        series.colorScale(anychart.scales.linearColor('#FF9999','#800000'));  

        series.labels(false);

        map.container(mapContainerRef.current);
        map.draw();
      }
    } catch (error) {
      console.error('Error loading AnyChart scripts:', error);
    }
  };

  useEffect(() => {
    if (section === 'Intention') {
      initializeMap();
    }
  }, [section]);

  return (
    <div className="template-container">
      <div>
        <h1 className="title">{content.title}</h1>
        <p className="intro">{content.intro}</p>
        {section === 'Intention' && (
          <div>
              <div className="mapWrapper">
                <div id="mapcontainer" ref={mapContainerRef}></div>
              </div>
              <p className='referencetext'>Data taken from Marcus Lu (April 2024), representing the top 20 countries debted to China, in billions.</p>
          </div>
          
          
        )}
        <div className="arguments">
          <div className="for">
            <h2>{content.for_title}</h2>
            <p>{content.for}</p>
          </div>
          <div className="against">
            <h2>{content.against_title}</h2>
            <p>{content.against}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
