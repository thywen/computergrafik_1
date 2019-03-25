/**
 * 3D Data Store for a model.
 * Missing properties/arrays (commented out)
 * are mixed in from data module.
 *
 * @namespace cog1.data
 * @module cube
 */
define(["exports", "data"], function (exports, data) {
  "use strict";

  /**
   * Create an instance of the model defined in this module.
   *
   * @parameter object with fields:
   * @parameter scale is the edge length of the cube.
   * @returns instance of this model.
   */
  exports.create = function (parameter) {



    if (parameter) {
      var scale = parameter.scale;
      var textureURL = parameter.textureURL;
      // Each face shows a different area of the given texture (e.g, a dice).
      var sixFacesTexture = parameter.sixFacesTexture;
    }
    if (scale === undefined) {
      scale = 200;
    }
    if (textureURL === undefined) {
      textureURL = "";
    }
    if (sixFacesTexture === undefined) {
      sixFacesTexture = false;

    }

    // Instance of the model to be returned.
    var instance = {};

    var baseStructure = [
      [-1.5, -1, 1],
      [1.5, -1, 1],
      [1.5, -1, -4],
      [-1.5, -1, -4],
      [-1.5, 1, 1],
      [1.5, 1, 1],
      [1.5, 1, -4],
      [-1.5, 1, -4],
    ];

    var baseStructurePolygonVertices = [
      [3, 2, 1, 0],
      [4, 0, 1, 5],
      [1, 2, 6, 5],
      [6, 2, 3, 7],
      [3, 0, 4, 7],
    ];

    var entranceLeft = [
      [0, -1, 1],
      [0.4, -1, 1],
      [0.4, 0.2, 1],
      [0, 0.2, 1]
    ];

    var entranceLeftPolygonVertices = [
      [8, 9, 10, 11],
    ];

    var entranceRight = [
      [0, -1, 1],
      [-0.4, -1, 1],
      [-0.4, 0.2, 1],
      [0, 0.2, 1]
    ];
    var entranceRightPolygonVertices = [
      [12, 13, 14, 15]
    ];

    var chimney = baseStructure.map(function (value, _) {
      return value.map(function (innerValue, index) {
        if (index === 0) {
          return innerValue / 5
        }
        if(index === 1) {
          return ((innerValue * 1.1) + 2.1)
        }
        if(index === 2) {
          return innerValue / 6
        }
      })
    });

    var chimney2 = baseStructure.map(function (value, _) {
      return value.map(function (innerValue, index) {
        if (index === 0) {
          return innerValue / 5
        }
        if(index === 1) {
          return ((innerValue * 1.3) + 2.3)
        }
        if(index === 2) {
          return ((innerValue / 6) - 1)
        }
      })
    });

    var chimney3 = baseStructure.map(function (value, _) {
      return value.map(function (innerValue, index) {
        if (index === 0) {
          return innerValue / 5
        }
        if(index === 1) {
          return ((innerValue * 1.5) + 2.5)
        }
        if(index === 2) {
          return ((innerValue / 6) - 2)
        }
      })
    });



    var chimneyPolygonVertices = baseStructurePolygonVertices.map(function (value) {
      return value.map(function (value1) {
        return value1 + 16
      })
    })

    var chimney2PolygonVertices = chimneyPolygonVertices.map(function (value) {
      return value.map(function (value1) {
        return value1 + 8
      })
    })

    var chimney3PolygonVertices = chimney2PolygonVertices.map(function (value) {
      return value.map(function (value1) {
        return value1 + 8
      })
    })



    instance.vertices = [
      baseStructure,
      entranceLeft,
      entranceRight,
      chimney,
      chimney2,
      chimney3
    ].flat();

    instance.polygonVertices = [
      baseStructurePolygonVertices,
      entranceLeftPolygonVertices,
      entranceRightPolygonVertices,
      chimneyPolygonVertices,
      chimney2PolygonVertices,
      chimney3PolygonVertices
    ].flat();

    instance.polygonColors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


    instance.textureURL = textureURL;

    data.applyScale.call(instance, scale);

    return instance;
  };
});
