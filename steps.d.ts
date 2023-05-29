/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Web = import('./helper/web_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, Web {}
  interface I extends ReturnType<steps_file>, WithTranslation<Web> {}
  namespace Translation {
    interface Actions {}
  }
}
