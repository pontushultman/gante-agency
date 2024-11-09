// IncludeHelper.ts
type IncludeFn<T> = (obj: IncludeProxy<T>) => any;

type GetIsArray<T, Path> = Path extends keyof T
  ? T[Path] extends Array<any>
    ? true
    : false
  : false;

export type IncludeProxy<T> = {
  [P in keyof T]: T[P] extends Array<any>
    ? IncludeProxy<T[P][number]> // Handle arrays
    : T[P] extends object
    ? IncludeProxy<T[P]> // Handle nested objects
    : T[P];
};

// Modify getIncludePathAndType to infer `isArray` via type-level logic
function getIncludePathAndType<T, Path extends keyof IncludeProxy<T>>(
  includeFn: IncludeFn<T>
): { path: string; isArray: GetIsArray<T, Path> } {
  const path: string[] = [];

  // Set up proxy to capture property path
  // @ts-ignore
  const proxy = new Proxy(
    {},
    {
      get(target, prop) {
        path.push(prop.toString());
        return proxy;
      }
    }
  );

  // Execute the function to populate the `path`
  includeFn(proxy as IncludeProxy<T>);



  // Join path into a dot-separated string
  return { path: path.join("."), isArray: false as GetIsArray<T, Path> }; // TypeScript will evaluate `isArray` based on `T`
}

export { getIncludePathAndType };
