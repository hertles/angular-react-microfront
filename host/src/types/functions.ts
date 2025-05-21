/**
 * Любая функция. Только для использования в Generic и satisfies
 */
export type AnyFunction = (...args: any[]) => any;

export type Functions<T> = {
  [K in keyof T as T[K] extends AnyFunction ? K : never]: T[K];
};

export type NonFunctions<T> = {
  [K in keyof T as T[K] extends AnyFunction ? never : K]: T[K];
};
