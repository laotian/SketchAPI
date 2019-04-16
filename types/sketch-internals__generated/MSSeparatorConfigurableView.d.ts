interface MSSeparatorConfigurableViewUninitialized<InitializedType = MSSeparatorConfigurableView> extends NSViewUninitialized<MSSeparatorConfigurableView> {}
interface MSSeparatorConfigurableView extends NSView {

  wantsSeparator(): boolean;
  setWantsSeparator(wantsSeparator: boolean): void;
  inset(): boolean;
  setInset(inset: boolean): void;
}
declare const MSSeparatorConfigurableView: {
  alloc(): MSSeparatorConfigurableViewUninitialized;
  class(): MSSeparatorConfigurableView;
}
