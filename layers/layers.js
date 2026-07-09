ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32737").setExtent([466964.148510, 9245033.950895, 529078.787775, 9271670.010178]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_morogororoad_1 = new ol.format.GeoJSON();
var features_morogororoad_1 = format_morogororoad_1.readFeatures(json_morogororoad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_morogororoad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morogororoad_1.addFeatures(features_morogororoad_1);
var lyr_morogororoad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morogororoad_1, 
                style: style_morogororoad_1,
                popuplayertitle: 'morogoro road',
                interactive: true,
                title: '<img src="styles/legend/morogororoad_1.png" /> morogoro road'
            });
var format_kongowe_2 = new ol.format.GeoJSON();
var features_kongowe_2 = format_kongowe_2.readFeatures(json_kongowe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_kongowe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kongowe_2.addFeatures(features_kongowe_2);
var lyr_kongowe_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kongowe_2, 
                style: style_kongowe_2,
                popuplayertitle: 'kongowe',
                interactive: true,
                title: '<img src="styles/legend/kongowe_2.png" /> kongowe'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });
var format_schoolpoints_4 = new ol.format.GeoJSON();
var features_schoolpoints_4 = format_schoolpoints_4.readFeatures(json_schoolpoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_schoolpoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schoolpoints_4.addFeatures(features_schoolpoints_4);
var lyr_schoolpoints_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schoolpoints_4, 
                style: style_schoolpoints_4,
                popuplayertitle: 'school points',
                interactive: true,
                title: '<img src="styles/legend/schoolpoints_4.png" /> school points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_morogororoad_1.setVisible(true);lyr_kongowe_2.setVisible(true);lyr_roads_3.setVisible(true);lyr_schoolpoints_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_morogororoad_1,lyr_kongowe_2,lyr_roads_3,lyr_schoolpoints_4];
lyr_morogororoad_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'width': 'width', 'railway': 'railway', 'man_made': 'man_made', 'layer': 'layer', 'covered': 'covered', 'blockage': 'blockage', 'name': 'name', 'amenity': 'amenity', 'operator': 'operator', 'surface': 'surface', 'barrier': 'barrier', 'depth': 'depth', 'parking': 'parking', 'pump': 'pump', 'landuse': 'landuse', 'diameter': 'diameter', 'natural': 'natural', 'aeroway': 'aeroway', 'oneway': 'oneway', 'bridge': 'bridge', 'water': 'water', 'building': 'building', 'tunnel': 'tunnel', 'public_tra': 'public_tra', 'highway': 'highway', 'smoothness': 'smoothness', 'capacity': 'capacity', 'waterway': 'waterway', 'speed_kmh': 'speed_kmh', });
lyr_kongowe_2.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'width': 'width', 'railway': 'railway', 'man_made': 'man_made', 'layer': 'layer', 'covered': 'covered', 'blockage': 'blockage', 'name': 'name', 'amenity': 'amenity', 'operator': 'operator', 'surface': 'surface', 'barrier': 'barrier', 'depth': 'depth', 'parking': 'parking', 'pump': 'pump', 'landuse': 'landuse', 'diameter': 'diameter', 'natural': 'natural', 'aeroway': 'aeroway', 'oneway': 'oneway', 'bridge': 'bridge', 'water': 'water', 'building': 'building', 'tunnel': 'tunnel', 'public_tra': 'public_tra', 'highway': 'highway', 'smoothness': 'smoothness', 'capacity': 'capacity', 'waterway': 'waterway', 'speed_kmh': 'speed_kmh', });
lyr_schoolpoints_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', });
lyr_morogororoad_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'width': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'layer': 'TextEdit', 'covered': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'surface': 'TextEdit', 'barrier': 'TextEdit', 'depth': 'TextEdit', 'parking': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'aeroway': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'water': 'TextEdit', 'building': 'TextEdit', 'tunnel': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'capacity': 'TextEdit', 'waterway': 'TextEdit', 'speed_kmh': 'TextEdit', });
lyr_kongowe_2.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'width': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'layer': 'TextEdit', 'covered': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'surface': 'TextEdit', 'barrier': 'TextEdit', 'depth': 'TextEdit', 'parking': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'aeroway': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'water': 'TextEdit', 'building': 'TextEdit', 'tunnel': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'capacity': 'TextEdit', 'waterway': 'TextEdit', 'speed_kmh': 'TextEdit', });
lyr_schoolpoints_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_morogororoad_1.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'width': 'no label', 'railway': 'no label', 'man_made': 'no label', 'layer': 'no label', 'covered': 'no label', 'blockage': 'no label', 'name': 'no label', 'amenity': 'no label', 'operator': 'no label', 'surface': 'no label', 'barrier': 'no label', 'depth': 'no label', 'parking': 'no label', 'pump': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'natural': 'no label', 'aeroway': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'water': 'no label', 'building': 'no label', 'tunnel': 'no label', 'public_tra': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'capacity': 'no label', 'waterway': 'no label', 'speed_kmh': 'no label', });
lyr_kongowe_2.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_roads_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'width': 'no label', 'railway': 'no label', 'man_made': 'no label', 'layer': 'no label', 'covered': 'no label', 'blockage': 'no label', 'name': 'no label', 'amenity': 'no label', 'operator': 'no label', 'surface': 'no label', 'barrier': 'no label', 'depth': 'no label', 'parking': 'no label', 'pump': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'natural': 'no label', 'aeroway': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'water': 'no label', 'building': 'no label', 'tunnel': 'no label', 'public_tra': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'capacity': 'no label', 'waterway': 'no label', 'speed_kmh': 'no label', });
lyr_schoolpoints_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', });
lyr_schoolpoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});