interface BCColorPickerBaseViewUninitialized<InitializedType = BCColorPickerBaseView> extends NSControlUninitialized<BCColorPickerBaseView> {
  initInBounds(colorPickerBounds: NSRect): InitializedType;
}
interface BCColorPickerBaseView extends NSControl {
  drawBackgroundInRect_dirtyRect(contentRect: NSRect, dirtyRect: NSRect): void;
  drawCheckerboardPatternInRect(rect: NSRect): void;
  drawMarkerInRect(rect: NSRect): void;
  contentBounds(): NSRect;
  markerShadow(): NSShadow;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  hideSelection(): boolean;
  setHideSelection(hideSelection: boolean): void;
}
declare const BCColorPickerBaseView: {
  alloc(): BCColorPickerBaseViewUninitialized;
  class(): BCColorPickerBaseView;  drawFrameInRect_forView_block(contentRect: NSRect, view: NSView, block: BCVoidBlock): void;
  drawFrameInRect_outlineWidth_cornerRadius_block(contentRect: NSRect, lineWidth: CGFloat, cornerRadius: CGFloat, block: BCVoidBlock): void;

}
