interface SVGBasicShapeUninitialized<InitializedType = SVGBasicShape> extends _SVGBasicShapeUninitialized<SVGBasicShape> {}
interface SVGBasicShape extends _SVGBasicShape {
  shapeGroupForLayer(layer: MSLayer): MSShapeGroup;
}
declare const SVGBasicShape: {
  alloc(): SVGBasicShapeUninitialized;
  class(): SVGBasicShape;
}
