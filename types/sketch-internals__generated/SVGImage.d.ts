interface SVGImageUninitialized<InitializedType = SVGImage> extends _SVGImageUninitialized<SVGImage> {}
interface SVGImage extends _SVGImage {
}
declare const SVGImage: {
  alloc(): SVGImageUninitialized;
  class(): SVGImage;
}
