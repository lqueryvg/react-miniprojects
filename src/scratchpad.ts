// const implicit = 1
// const explicit: number = 1
// const addOnlyOnes = (a: 1, b:1) => a + b

// addOnlyOnes(implicit, explicit)

// const wrap1 = <      Options extends string[]>(options: Options) => ({wrapped: options})
// const wrap2 = <const Options extends string[]>(options: Options) => ({wrapped: options})

// const o1 = wrap1(["a", "b", "c"])
// const o2 = wrap2(["a", "b", "c"])

// process.env.MOOD_LIGHTS = "true"

// type X = 1 | unknown

// type StringKeys<T> = Exclude<keyof T, symbol>

// type Excuse<T> = new (excuse: T) => `${keyof T & string}: ${T[StringKeys<T>] & string}`

// type T = (number | string | null | undefined) & {}
// type T = NonNullable<number | string | null | undefined> // number | string
// type T = Exclude<number | string | string[], number | string>
// type T = Exclude<number, number | string>
// type T = Record<string, number>
// type T = Extract<string, string[] | string | number>
// type T = Extract<string, string[] | number>
// type T = NonNullable<null | undefined>

// type StringKeys<T> = `key = ${keyof T}`
// type StringKeys<T> = `key = ${keyof T & string}`

// type ArrayElementType<ArrayType extends unknown[]> =
//   ArrayType extends (infer ElementType)[] ? ElementType : never;

// type T = number[];
// type X = ArrayElementType<T>; // number

// type Function = (...args: unknown[]) => unknown
// type DeepReadonly<O extends object> = {
//   readonly [K in keyof O]: O[K] extends Function
//     ? O[K]
//     : O[K] extends object
//     ? DeepReadonly<O[K]>
//     : O[K];
// };

// type T = DeepReadonly<{ a: 1, b: { c: 1 } }>
// const x: T = { a: 1, b: { c: 1 } }
// x.b.c = 1 // error
// const x = { a: 1, b: { c: 1 } }

// type SlashListToUnion<S extends string> =
//   S extends `${infer Head}/${infer Rest}` ? Head | SlashListToUnion<Rest> : S;

// type T = SlashListToUnion<"a/b/c"> // a | b | c

// type BuildArrayOfStrings<
//   L extends number,
//   S extends string,
//   T extends string[] = []
// > = T extends { length: L } ? T : BuildArrayOfStrings<L, S, [...T, S]>;

// type T = BuildArrayOfStrings<3, "abc">; // ["abc", "abc", "abc"]

// type BuildArrays<
//   S extends string,
//   Sizes extends number
// > = Sizes extends infer Head extends number
//   ? BuildArrayOfStrings<Head, S>
//   : Sizes extends infer Head extends
//       | number
//       | infer RemainingSizes extends number
//   ? BuildArrayOfStrings<Head, S> | BuildArrays<S, RemainingSizes>
//   : never;

// type T = BuildArrays<"abc", 1 | 2 | 3>; // [["abc"], ["abc", "abc"], ["abc", "abc", "abc"]]

// type Length<T extends unknown[]> = T extends { length: infer L } ? L : never;

// type IndexOf_Recurse<A, C extends string> = A extends [C, ...unknown[]]
//   ? []
//   : A extends [unknown, ...infer Rest]
//     ? [unknown, ...IndexOf_Recurse<Rest, C>]
//     : never;

// type IndexOf<A, C extends string> = Length<IndexOf_Recurse<A, C>>;

// type T = IndexOf<["a", "b", "c"], "b">; // 1
// type T = IndexOf<["a", "b", "c"], "c">; // 2
// type T = IndexOf<[], "z">; // never

// count: T[K][2] extends `${infer N extends number}` ? N : never;

type StringToNumber<T extends string> = T extends `${infer N extends number}`
  ? N
  : never;

// type T1 = StringToNumber<"1">; // 1
// type T2 = StringToNumber<"abc">; // never

// type StringValuesToNumbers<T> = {
//   [K in keyof T]: T[K] extends `${infer N extends number}` ? N : never;
// }
// type T = StringValuesToNumbers<{ a: "1", b: "2", c: 3 }>; // { a: "1", b: "2", c: never }

// type StringValuesToNumbers<T extends Record<string, string>> = {
//   [K in keyof T]: StringToNumber<T[K]>;
// };
// type T = StringValuesToNumbers<{ a: "1"; b: "2", c: 1 }>;
