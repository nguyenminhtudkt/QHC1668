var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DSDTQH1668_1 = new ol.format.GeoJSON();
var features_DSDTQH1668_1 = format_DSDTQH1668_1.readFeatures(json_DSDTQH1668_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDTQH1668_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDTQH1668_1.addFeatures(features_DSDTQH1668_1);
var lyr_DSDTQH1668_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSDTQH1668_1, 
                style: style_DSDTQH1668_1,
                popuplayertitle: 'DSDT QH1668',
                interactive: true,
    title: 'DSDT QH1668<br />\
    <img src="styles/legend/DSDTQH1668_1_0.png" /> T1<br />\
    <img src="styles/legend/DSDTQH1668_1_1.png" /> T10<br />\
    <img src="styles/legend/DSDTQH1668_1_2.png" /> T11<br />\
    <img src="styles/legend/DSDTQH1668_1_3.png" /> T12<br />\
    <img src="styles/legend/DSDTQH1668_1_4.png" /> T1A<br />\
    <img src="styles/legend/DSDTQH1668_1_5.png" /> T2.1<br />\
    <img src="styles/legend/DSDTQH1668_1_6.png" /> T2.2<br />\
    <img src="styles/legend/DSDTQH1668_1_7.png" /> T2.3<br />\
    <img src="styles/legend/DSDTQH1668_1_8.png" /> T2.4<br />\
    <img src="styles/legend/DSDTQH1668_1_9.png" /> T2A<br />\
    <img src="styles/legend/DSDTQH1668_1_10.png" /> T2Aext<br />\
    <img src="styles/legend/DSDTQH1668_1_11.png" /> T3.1<br />\
    <img src="styles/legend/DSDTQH1668_1_12.png" /> T3.2<br />\
    <img src="styles/legend/DSDTQH1668_1_13.png" /> T3.3<br />\
    <img src="styles/legend/DSDTQH1668_1_14.png" /> T4<br />\
    <img src="styles/legend/DSDTQH1668_1_15.png" /> T5<br />\
    <img src="styles/legend/DSDTQH1668_1_16.png" /> T6<br />\
    <img src="styles/legend/DSDTQH1668_1_17.png" /> T7<br />\
    <img src="styles/legend/DSDTQH1668_1_18.png" /> T8<br />\
    <img src="styles/legend/DSDTQH1668_1_19.png" /> T9<br />\
    <img src="styles/legend/DSDTQH1668_1_20.png" /> <br />' });
var format_Line32GaPoint_2 = new ol.format.GeoJSON();
var features_Line32GaPoint_2 = format_Line32GaPoint_2.readFeatures(json_Line32GaPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32GaPoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32GaPoint_2.addFeatures(features_Line32GaPoint_2);
var lyr_Line32GaPoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32GaPoint_2, 
                style: style_Line32GaPoint_2,
                popuplayertitle: 'Line 3.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line32GaPoint_2.png" /> Line 3.2 Ga-Point'
            });
var format_T2AextGaPoint_3 = new ol.format.GeoJSON();
var features_T2AextGaPoint_3 = format_T2AextGaPoint_3.readFeatures(json_T2AextGaPoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AextGaPoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AextGaPoint_3.addFeatures(features_T2AextGaPoint_3);
var lyr_T2AextGaPoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AextGaPoint_3, 
                style: style_T2AextGaPoint_3,
                popuplayertitle: 'T2Aext-Ga Point',
                interactive: true,
                title: '<img src="styles/legend/T2AextGaPoint_3.png" /> T2Aext-Ga Point'
            });
var format_Line23GaPoint_4 = new ol.format.GeoJSON();
var features_Line23GaPoint_4 = format_Line23GaPoint_4.readFeatures(json_Line23GaPoint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23GaPoint_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23GaPoint_4.addFeatures(features_Line23GaPoint_4);
var lyr_Line23GaPoint_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23GaPoint_4, 
                style: style_Line23GaPoint_4,
                popuplayertitle: 'Line 2.3 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line23GaPoint_4.png" /> Line 2.3 Ga-Point'
            });
var format_Line22GaPoint_5 = new ol.format.GeoJSON();
var features_Line22GaPoint_5 = format_Line22GaPoint_5.readFeatures(json_Line22GaPoint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22GaPoint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22GaPoint_5.addFeatures(features_Line22GaPoint_5);
var lyr_Line22GaPoint_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22GaPoint_5, 
                style: style_Line22GaPoint_5,
                popuplayertitle: 'Line 2.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line22GaPoint_5.png" /> Line 2.2 Ga-Point'
            });
var format_Line21GaPoint_6 = new ol.format.GeoJSON();
var features_Line21GaPoint_6 = format_Line21GaPoint_6.readFeatures(json_Line21GaPoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line21GaPoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line21GaPoint_6.addFeatures(features_Line21GaPoint_6);
var lyr_Line21GaPoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line21GaPoint_6, 
                style: style_Line21GaPoint_6,
                popuplayertitle: 'Line 2.1 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line21GaPoint_6.png" /> Line 2.1 Ga-Point'
            });
var format_T31GaPoint_7 = new ol.format.GeoJSON();
var features_T31GaPoint_7 = format_T31GaPoint_7.readFeatures(json_T31GaPoint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T31GaPoint_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T31GaPoint_7.addFeatures(features_T31GaPoint_7);
var lyr_T31GaPoint_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T31GaPoint_7, 
                style: style_T31GaPoint_7,
                popuplayertitle: 'T3.1-Ga Point',
                interactive: true,
                title: '<img src="styles/legend/T31GaPoint_7.png" /> T3.1-Ga Point'
            });
var format_T2AGaPoint_8 = new ol.format.GeoJSON();
var features_T2AGaPoint_8 = format_T2AGaPoint_8.readFeatures(json_T2AGaPoint_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AGaPoint_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AGaPoint_8.addFeatures(features_T2AGaPoint_8);
var lyr_T2AGaPoint_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AGaPoint_8, 
                style: style_T2AGaPoint_8,
                popuplayertitle: 'T2A-Ga Point',
                interactive: true,
                title: '<img src="styles/legend/T2AGaPoint_8.png" /> T2A-Ga Point'
            });
var group_T2A = new ol.layer.Group({
                                layers: [lyr_T2AGaPoint_8,],
                                fold: 'open',
                                title: 'T2A'});
var group_T31 = new ol.layer.Group({
                                layers: [lyr_T31GaPoint_7,],
                                fold: 'close',
                                title: 'T3.1'});
var group_Line21 = new ol.layer.Group({
                                layers: [lyr_Line21GaPoint_6,],
                                fold: 'close',
                                title: 'Line 2.1'});
var group_Line22 = new ol.layer.Group({
                                layers: [lyr_Line22GaPoint_5,],
                                fold: 'close',
                                title: 'Line 2.2'});
var group_Line23 = new ol.layer.Group({
                                layers: [lyr_Line23GaPoint_4,],
                                fold: 'close',
                                title: 'Line 2.3'});
var group_T2Aextconvertfrompdf = new ol.layer.Group({
                                layers: [lyr_T2AextGaPoint_3,],
                                fold: 'close',
                                title: 'T2Aext convert from pdf'});
var group_Line32 = new ol.layer.Group({
                                layers: [lyr_Line32GaPoint_2,],
                                fold: 'close',
                                title: 'Line 3.2'});
var group_Line5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Line 5'});

lyr_OSMStandard_0.setVisible(true);lyr_DSDTQH1668_1.setVisible(true);lyr_Line32GaPoint_2.setVisible(true);lyr_T2AextGaPoint_3.setVisible(true);lyr_Line23GaPoint_4.setVisible(true);lyr_Line22GaPoint_5.setVisible(true);lyr_Line21GaPoint_6.setVisible(true);lyr_T31GaPoint_7.setVisible(true);lyr_T2AGaPoint_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DSDTQH1668_1,group_Line32,group_T2Aextconvertfrompdf,group_Line23,group_Line22,group_Line21,group_T31,group_T2A];
lyr_DSDTQH1668_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_Line32GaPoint_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_T2AextGaPoint_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_Line23GaPoint_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_Line22GaPoint_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', 'name_3': 'name_3', 'attrib_1': 'attrib_1', });
lyr_Line21GaPoint_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_T31GaPoint_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_T2AGaPoint_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_DSDTQH1668_1.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_Line32GaPoint_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', });
lyr_T2AextGaPoint_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_Line23GaPoint_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_Line22GaPoint_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'name_3': '', 'attrib_1': '', });
lyr_Line21GaPoint_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': '', });
lyr_T31GaPoint_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_T2AGaPoint_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_DSDTQH1668_1.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'Thông tin': 'no label', });
lyr_Line32GaPoint_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_T2AextGaPoint_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', });
lyr_Line23GaPoint_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', });
lyr_Line22GaPoint_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'name_3': 'no label', 'attrib_1': 'no label', });
lyr_Line21GaPoint_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_T31GaPoint_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', });
lyr_T2AGaPoint_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', });
lyr_T2AGaPoint_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});