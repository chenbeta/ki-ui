import KiButton from './src/button';

KiButton.install = function (Vue) {
  Vue.component(KiButton.name, KiButton);
};

export default KiButton;
