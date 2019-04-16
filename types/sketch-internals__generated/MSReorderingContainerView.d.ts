interface MSReorderingContainerViewUninitialized<InitializedType = MSReorderingContainerView> extends NSViewUninitialized<MSReorderingContainerView> {}
interface MSReorderingContainerView extends NSView {
  reorderSubviewsAnimated(flag: boolean): void;

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSReorderingContainerView: {
  alloc(): MSReorderingContainerViewUninitialized;
  class(): MSReorderingContainerView;
}
