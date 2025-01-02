ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([790404.716148, 9235220.449511, 793054.239308, 9237180.155991]);
var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMHumanitarianDataModel_3 = new ol.layer.Tile({
            'title': 'OSM Humanitarian Data Model',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var format_KesesuaianLahanPembangunanTPS_4 = new ol.format.GeoJSON();
var features_KesesuaianLahanPembangunanTPS_4 = format_KesesuaianLahanPembangunanTPS_4.readFeatures(json_KesesuaianLahanPembangunanTPS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_KesesuaianLahanPembangunanTPS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanPembangunanTPS_4.addFeatures(features_KesesuaianLahanPembangunanTPS_4);
var lyr_KesesuaianLahanPembangunanTPS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanPembangunanTPS_4, 
                style: style_KesesuaianLahanPembangunanTPS_4,
                popuplayertitle: 'Kesesuaian Lahan Pembangunan TPS',
                interactive: true,
    title: 'Kesesuaian Lahan Pembangunan TPS<br />\
    <img src="styles/legend/KesesuaianLahanPembangunanTPS_4_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianLahanPembangunanTPS_4_1.png" /> Sesuai<br />'
        });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });
var format_Sungai_6 = new ol.format.GeoJSON();
var features_Sungai_6 = format_Sungai_6.readFeatures(json_Sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Sungai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_6.addFeatures(features_Sungai_6);
var lyr_Sungai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_6, 
                style: style_Sungai_6,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_6.png" /> Sungai'
            });
var format_SaluranDrainase_7 = new ol.format.GeoJSON();
var features_SaluranDrainase_7 = format_SaluranDrainase_7.readFeatures(json_SaluranDrainase_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_SaluranDrainase_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranDrainase_7.addFeatures(features_SaluranDrainase_7);
var lyr_SaluranDrainase_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranDrainase_7, 
                style: style_SaluranDrainase_7,
                popuplayertitle: 'Saluran Drainase',
                interactive: true,
                title: '<img src="styles/legend/SaluranDrainase_7.png" /> Saluran Drainase'
            });
var format_BatasAdministrasiKelurahanCikutra_8 = new ol.format.GeoJSON();
var features_BatasAdministrasiKelurahanCikutra_8 = format_BatasAdministrasiKelurahanCikutra_8.readFeatures(json_BatasAdministrasiKelurahanCikutra_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_BatasAdministrasiKelurahanCikutra_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKelurahanCikutra_8.addFeatures(features_BatasAdministrasiKelurahanCikutra_8);
var lyr_BatasAdministrasiKelurahanCikutra_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKelurahanCikutra_8, 
                style: style_BatasAdministrasiKelurahanCikutra_8,
                popuplayertitle: 'Batas Administrasi Kelurahan Cikutra',
                interactive: true,
    title: 'Batas Administrasi Kelurahan Cikutra<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_0.png" /> RW 01<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_1.png" /> RW 02<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_2.png" /> RW 03<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_3.png" /> RW 04<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_4.png" /> RW 05<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_5.png" /> RW 06<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_6.png" /> RW 07<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_7.png" /> RW 08<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_8.png" /> RW 09<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_9.png" /> RW 10<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_10.png" /> RW 11<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_11.png" /> RW 12<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_12.png" /> RW 13<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_13.png" /> RW 14<br />\
    <img src="styles/legend/BatasAdministrasiKelurahanCikutra_8_14.png" /> RW 15<br />'
        });
var format_TitikRekomendasiTPSII_9 = new ol.format.GeoJSON();
var features_TitikRekomendasiTPSII_9 = format_TitikRekomendasiTPSII_9.readFeatures(json_TitikRekomendasiTPSII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_TitikRekomendasiTPSII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRekomendasiTPSII_9.addFeatures(features_TitikRekomendasiTPSII_9);
var lyr_TitikRekomendasiTPSII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRekomendasiTPSII_9, 
                style: style_TitikRekomendasiTPSII_9,
                popuplayertitle: 'Titik Rekomendasi TPS II',
                interactive: true,
    title: 'Titik Rekomendasi TPS II<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_0.png" /> Titik 1<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_1.png" /> Titik 2<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_2.png" /> Titik 3<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_3.png" /> Titik 4<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_4.png" /> Titik 6<br />\
    <img src="styles/legend/TitikRekomendasiTPSII_9_5.png" /> Titik 7<br />'
        });
var format_TitikRekomendasiTPSI_10 = new ol.format.GeoJSON();
var features_TitikRekomendasiTPSI_10 = format_TitikRekomendasiTPSI_10.readFeatures(json_TitikRekomendasiTPSI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_TitikRekomendasiTPSI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRekomendasiTPSI_10.addFeatures(features_TitikRekomendasiTPSI_10);
var lyr_TitikRekomendasiTPSI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRekomendasiTPSI_10, 
                style: style_TitikRekomendasiTPSI_10,
                popuplayertitle: 'Titik Rekomendasi TPS I',
                interactive: true,
                title: '<img src="styles/legend/TitikRekomendasiTPSI_10.png" /> Titik Rekomendasi TPS I'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_OSMHumanitarianDataModel_3.setVisible(true);lyr_KesesuaianLahanPembangunanTPS_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_Sungai_6.setVisible(true);lyr_SaluranDrainase_7.setVisible(true);lyr_BatasAdministrasiKelurahanCikutra_8.setVisible(true);lyr_TitikRekomendasiTPSII_9.setVisible(true);lyr_TitikRekomendasiTPSI_10.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_BingVirtualEarth_1,lyr_OpenStreetMap_2,lyr_OSMHumanitarianDataModel_3,lyr_KesesuaianLahanPembangunanTPS_4,lyr_Jalan_5,lyr_Sungai_6,lyr_SaluranDrainase_7,lyr_BatasAdministrasiKelurahanCikutra_8,lyr_TitikRekomendasiTPSII_9,lyr_TitikRekomendasiTPSI_10];
lyr_KesesuaianLahanPembangunanTPS_4.set('fieldAliases', {'Kelas_Ttl': 'Kelas_Ttl', });
lyr_Jalan_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', 'Shape_Leng': 'Shape_Leng', });
lyr_Sungai_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SaluranDrainase_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'covered': 'covered', 'tunnel': 'tunnel', 'layer': 'layer', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'depth': 'depth', });
lyr_BatasAdministrasiKelurahanCikutra_8.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'RW': 'RW', });
lyr_TitikRekomendasiTPSII_9.set('fieldAliases', {'Lahan': 'Lahan', 'Latitude__': 'Latitude__', 'Longitude_': 'Longitude_', });
lyr_TitikRekomendasiTPSI_10.set('fieldAliases', {'Title': 'Title', 'Date_Creat': 'Date_Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descriptio': 'Descriptio', 'Elevation': 'Elevation', });
lyr_KesesuaianLahanPembangunanTPS_4.set('fieldImages', {'Kelas_Ttl': 'TextEdit', });
lyr_Jalan_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Sungai_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SaluranDrainase_7.set('fieldImages', {'osm_id': 'Range', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'depth': 'TextEdit', });
lyr_BatasAdministrasiKelurahanCikutra_8.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RW': 'TextEdit', });
lyr_TitikRekomendasiTPSII_9.set('fieldImages', {'Lahan': 'TextEdit', 'Latitude__': 'TextEdit', 'Longitude_': 'TextEdit', });
lyr_TitikRekomendasiTPSI_10.set('fieldImages', {'Title': 'TextEdit', 'Date_Creat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Descriptio': 'TextEdit', 'Elevation': 'TextEdit', });
lyr_KesesuaianLahanPembangunanTPS_4.set('fieldLabels', {'Kelas_Ttl': 'header label - visible with data', });
lyr_Jalan_5.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'depth': 'header label - visible with data', 'width': 'header label - visible with data', 'diameter': 'header label - visible with data', 'blockage': 'header label - visible with data', 'bridge': 'header label - visible with data', 'landuse': 'header label - visible with data', 'water': 'header label - visible with data', 'smoothness': 'header label - visible with data', 'highway': 'header label - visible with data', 'parking': 'header label - visible with data', 'name': 'header label - visible with data', 'natural': 'header label - visible with data', 'amenity': 'header label - visible with data', 'layer': 'header label - visible with data', 'barrier': 'header label - visible with data', 'covered': 'header label - visible with data', 'oneway': 'header label - visible with data', 'building': 'header label - visible with data', 'man_made': 'header label - visible with data', 'tunnel': 'header label - visible with data', 'operator': 'header label - visible with data', 'waterway': 'header label - visible with data', 'aeroway': 'header label - visible with data', 'railway': 'header label - visible with data', 'pump': 'header label - visible with data', 'surface': 'header label - visible with data', 'public_tra': 'header label - visible with data', 'capacity': 'header label - visible with data', 'Shape_Leng': 'header label - visible with data', });
lyr_Sungai_6.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'TIPSNG': 'header label - visible with data', 'KLSSNG': 'header label - visible with data', 'FCODE': 'header label - visible with data', 'REMARK': 'header label - visible with data', 'SRS_ID': 'header label - visible with data', 'LCODE': 'header label - visible with data', 'METADATA': 'header label - visible with data', 'NAMWS': 'header label - visible with data', 'NAMDAS': 'header label - visible with data', 'STATUS': 'header label - visible with data', 'WMAX': 'header label - visible with data', 'DBTMAX': 'header label - visible with data', 'SLPRT': 'header label - visible with data', 'SHAPE_Leng': 'header label - visible with data', });
lyr_SaluranDrainase_7.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'waterway': 'header label - visible with data', 'covered': 'header label - visible with data', 'tunnel': 'header label - visible with data', 'layer': 'header label - visible with data', 'width': 'header label - visible with data', 'diameter': 'header label - visible with data', 'blockage': 'header label - visible with data', 'depth': 'header label - visible with data', });
lyr_BatasAdministrasiKelurahanCikutra_8.set('fieldLabels', {'KDPPUM': 'header label - visible with data', 'NAMOBJ': 'header label - visible with data', 'REMARK': 'header label - visible with data', 'KDPBPS': 'header label - visible with data', 'FCODE': 'header label - visible with data', 'LUASWH': 'header label - visible with data', 'UUPP': 'header label - visible with data', 'SRS_ID': 'header label - visible with data', 'LCODE': 'header label - visible with data', 'METADATA': 'header label - visible with data', 'KDEBPS': 'header label - visible with data', 'KDEPUM': 'header label - visible with data', 'KDCBPS': 'header label - visible with data', 'KDCPUM': 'header label - visible with data', 'KDBBPS': 'header label - visible with data', 'KDBPUM': 'header label - visible with data', 'WADMKD': 'header label - visible with data', 'WIADKD': 'header label - visible with data', 'WADMKC': 'header label - visible with data', 'WIADKC': 'header label - visible with data', 'WADMKK': 'header label - visible with data', 'WIADKK': 'header label - visible with data', 'WADMPR': 'header label - visible with data', 'WIADPR': 'header label - visible with data', 'TIPADM': 'header label - visible with data', 'SHAPE_Leng': 'header label - visible with data', 'SHAPE_Area': 'header label - visible with data', 'RW': 'header label - visible with data', });
lyr_TitikRekomendasiTPSII_9.set('fieldLabels', {'Lahan': 'header label - visible with data', 'Latitude__': 'header label - visible with data', 'Longitude_': 'header label - visible with data', });
lyr_TitikRekomendasiTPSI_10.set('fieldLabels', {'Title': 'header label - visible with data', 'Date_Creat': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Northing': 'header label - visible with data', 'Easting': 'header label - visible with data', 'Descriptio': 'header label - visible with data', 'Elevation': 'header label - visible with data', });
lyr_TitikRekomendasiTPSI_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});