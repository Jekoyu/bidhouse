
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemCategory
 * 
 */
export type ItemCategory = $Result.DefaultSelection<Prisma.$ItemCategoryPayload>
/**
 * Model ItemCategoryMap
 * 
 */
export type ItemCategoryMap = $Result.DefaultSelection<Prisma.$ItemCategoryMapPayload>
/**
 * Model ItemImage
 * 
 */
export type ItemImage = $Result.DefaultSelection<Prisma.$ItemImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]

}

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemCategory`: Exposes CRUD operations for the **ItemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCategories
    * const itemCategories = await prisma.itemCategory.findMany()
    * ```
    */
  get itemCategory(): Prisma.ItemCategoryDelegate<ExtArgs>;

  /**
   * `prisma.itemCategoryMap`: Exposes CRUD operations for the **ItemCategoryMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCategoryMaps
    * const itemCategoryMaps = await prisma.itemCategoryMap.findMany()
    * ```
    */
  get itemCategoryMap(): Prisma.ItemCategoryMapDelegate<ExtArgs>;

  /**
   * `prisma.itemImage`: Exposes CRUD operations for the **ItemImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemImages
    * const itemImages = await prisma.itemImage.findMany()
    * ```
    */
  get itemImage(): Prisma.ItemImageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    ItemCategory: 'ItemCategory',
    ItemCategoryMap: 'ItemCategoryMap',
    ItemImage: 'ItemImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "item" | "itemCategory" | "itemCategoryMap" | "itemImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemCategory: {
        payload: Prisma.$ItemCategoryPayload<ExtArgs>
        fields: Prisma.ItemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findFirst: {
            args: Prisma.ItemCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findMany: {
            args: Prisma.ItemCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          create: {
            args: Prisma.ItemCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          createMany: {
            args: Prisma.ItemCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          update: {
            args: Prisma.ItemCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          aggregate: {
            args: Prisma.ItemCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCategory>
          }
          groupBy: {
            args: Prisma.ItemCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryCountAggregateOutputType> | number
          }
        }
      }
      ItemCategoryMap: {
        payload: Prisma.$ItemCategoryMapPayload<ExtArgs>
        fields: Prisma.ItemCategoryMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCategoryMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCategoryMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          findFirst: {
            args: Prisma.ItemCategoryMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCategoryMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          findMany: {
            args: Prisma.ItemCategoryMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>[]
          }
          create: {
            args: Prisma.ItemCategoryMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          createMany: {
            args: Prisma.ItemCategoryMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemCategoryMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          update: {
            args: Prisma.ItemCategoryMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          deleteMany: {
            args: Prisma.ItemCategoryMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCategoryMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemCategoryMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryMapPayload>
          }
          aggregate: {
            args: Prisma.ItemCategoryMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCategoryMap>
          }
          groupBy: {
            args: Prisma.ItemCategoryMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCategoryMapCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryMapCountAggregateOutputType> | number
          }
        }
      }
      ItemImage: {
        payload: Prisma.$ItemImagePayload<ExtArgs>
        fields: Prisma.ItemImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findFirst: {
            args: Prisma.ItemImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findMany: {
            args: Prisma.ItemImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>[]
          }
          create: {
            args: Prisma.ItemImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          createMany: {
            args: Prisma.ItemImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          update: {
            args: Prisma.ItemImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          deleteMany: {
            args: Prisma.ItemImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          aggregate: {
            args: Prisma.ItemImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemImage>
          }
          groupBy: {
            args: Prisma.ItemImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemImageCountArgs<ExtArgs>
            result: $Utils.Optional<ItemImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    images: number
    categories: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ItemCountOutputTypeCountImagesArgs
    categories?: boolean | ItemCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryMapWhereInput
  }


  /**
   * Count Type ItemCategoryCountOutputType
   */

  export type ItemCategoryCountOutputType = {
    items: number
  }

  export type ItemCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ItemCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryCountOutputType
     */
    select?: ItemCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryMapWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    startingPrice: Decimal | null
  }

  export type ItemSumAggregateOutputType = {
    startingPrice: Decimal | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startingPrice: Decimal | null
    status: $Enums.ItemStatus | null
    createdBy: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startingPrice: Decimal | null
    status: $Enums.ItemStatus | null
    createdBy: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startingPrice: number
    status: number
    createdBy: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    startingPrice?: true
  }

  export type ItemSumAggregateInputType = {
    startingPrice?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startingPrice?: true
    status?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startingPrice?: true
    status?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startingPrice?: true
    status?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string
    startingPrice: Decimal
    status: $Enums.ItemStatus
    createdBy: string
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startingPrice?: boolean
    status?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Item$imagesArgs<ExtArgs>
    categories?: boolean | Item$categoriesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>


  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startingPrice?: boolean
    status?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Item$imagesArgs<ExtArgs>
    categories?: boolean | Item$categoriesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      images: Prisma.$ItemImagePayload<ExtArgs>[]
      categories: Prisma.$ItemCategoryMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      startingPrice: Prisma.Decimal
      status: $Enums.ItemStatus
      createdBy: string
      approvedBy: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Item$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Item$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends Item$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Item$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly startingPrice: FieldRef<"Item", 'Decimal'>
    readonly status: FieldRef<"Item", 'ItemStatus'>
    readonly createdBy: FieldRef<"Item", 'String'>
    readonly approvedBy: FieldRef<"Item", 'String'>
    readonly approvedAt: FieldRef<"Item", 'DateTime'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item.images
   */
  export type Item$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    cursor?: ItemImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * Item.categories
   */
  export type Item$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    where?: ItemCategoryMapWhereInput
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    cursor?: ItemCategoryMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCategoryMapScalarFieldEnum | ItemCategoryMapScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemCategory
   */

  export type AggregateItemCategory = {
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  export type ItemCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategory to aggregate.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCategories
    **/
    _count?: true | ItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type GetItemCategoryAggregateType<T extends ItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCategory[P]>
      : GetScalarType<T[P], AggregateItemCategory[P]>
  }




  export type ItemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryWhereInput
    orderBy?: ItemCategoryOrderByWithAggregationInput | ItemCategoryOrderByWithAggregationInput[]
    by: ItemCategoryScalarFieldEnum[] | ItemCategoryScalarFieldEnum
    having?: ItemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCategoryCountAggregateInputType | true
    _min?: ItemCategoryMinAggregateInputType
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type ItemCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  type GetItemCategoryGroupByPayload<T extends ItemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | ItemCategory$itemsArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategory"]>


  export type ItemCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ItemCategory$itemsArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCategory"
    objects: {
      items: Prisma.$ItemCategoryMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemCategory"]>
    composites: {}
  }

  type ItemCategoryGetPayload<S extends boolean | null | undefined | ItemCategoryDefaultArgs> = $Result.GetResult<Prisma.$ItemCategoryPayload, S>

  type ItemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCategoryCountAggregateInputType | true
    }

  export interface ItemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCategory'], meta: { name: 'ItemCategory' } }
    /**
     * Find zero or one ItemCategory that matches the filter.
     * @param {ItemCategoryFindUniqueArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCategoryFindUniqueArgs>(args: SelectSubset<T, ItemCategoryFindUniqueArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemCategoryFindUniqueOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCategoryFindFirstArgs>(args?: SelectSubset<T, ItemCategoryFindFirstArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany()
     * 
     * // Get first 10 ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCategoryFindManyArgs>(args?: SelectSubset<T, ItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemCategory.
     * @param {ItemCategoryCreateArgs} args - Arguments to create a ItemCategory.
     * @example
     * // Create one ItemCategory
     * const ItemCategory = await prisma.itemCategory.create({
     *   data: {
     *     // ... data to create a ItemCategory
     *   }
     * })
     * 
     */
    create<T extends ItemCategoryCreateArgs>(args: SelectSubset<T, ItemCategoryCreateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemCategories.
     * @param {ItemCategoryCreateManyArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCategoryCreateManyArgs>(args?: SelectSubset<T, ItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemCategory.
     * @param {ItemCategoryDeleteArgs} args - Arguments to delete one ItemCategory.
     * @example
     * // Delete one ItemCategory
     * const ItemCategory = await prisma.itemCategory.delete({
     *   where: {
     *     // ... filter to delete one ItemCategory
     *   }
     * })
     * 
     */
    delete<T extends ItemCategoryDeleteArgs>(args: SelectSubset<T, ItemCategoryDeleteArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemCategory.
     * @param {ItemCategoryUpdateArgs} args - Arguments to update one ItemCategory.
     * @example
     * // Update one ItemCategory
     * const itemCategory = await prisma.itemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCategoryUpdateArgs>(args: SelectSubset<T, ItemCategoryUpdateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemCategories.
     * @param {ItemCategoryDeleteManyArgs} args - Arguments to filter ItemCategories to delete.
     * @example
     * // Delete a few ItemCategories
     * const { count } = await prisma.itemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCategoryDeleteManyArgs>(args?: SelectSubset<T, ItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCategories
     * const itemCategory = await prisma.itemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCategoryUpdateManyArgs>(args: SelectSubset<T, ItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemCategory.
     * @param {ItemCategoryUpsertArgs} args - Arguments to update or create a ItemCategory.
     * @example
     * // Update or create a ItemCategory
     * const itemCategory = await prisma.itemCategory.upsert({
     *   create: {
     *     // ... data to create a ItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCategory we want to update
     *   }
     * })
     */
    upsert<T extends ItemCategoryUpsertArgs>(args: SelectSubset<T, ItemCategoryUpsertArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryCountArgs} args - Arguments to filter ItemCategories to count.
     * @example
     * // Count the number of ItemCategories
     * const count = await prisma.itemCategory.count({
     *   where: {
     *     // ... the filter for the ItemCategories we want to count
     *   }
     * })
    **/
    count<T extends ItemCategoryCountArgs>(
      args?: Subset<T, ItemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCategoryAggregateArgs>(args: Subset<T, ItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryAggregateType<T>>

    /**
     * Group by ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCategory model
   */
  readonly fields: ItemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ItemCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ItemCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCategory model
   */ 
  interface ItemCategoryFieldRefs {
    readonly id: FieldRef<"ItemCategory", 'String'>
    readonly name: FieldRef<"ItemCategory", 'String'>
    readonly description: FieldRef<"ItemCategory", 'String'>
    readonly createdAt: FieldRef<"ItemCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemCategory findUnique
   */
  export type ItemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findUniqueOrThrow
   */
  export type ItemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findFirst
   */
  export type ItemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findFirstOrThrow
   */
  export type ItemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findMany
   */
  export type ItemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategories to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory create
   */
  export type ItemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCategory.
     */
    data: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
  }

  /**
   * ItemCategory createMany
   */
  export type ItemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCategories.
     */
    data: ItemCategoryCreateManyInput | ItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCategory update
   */
  export type ItemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCategory.
     */
    data: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
    /**
     * Choose, which ItemCategory to update.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory updateMany
   */
  export type ItemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCategories.
     */
    data: XOR<ItemCategoryUpdateManyMutationInput, ItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemCategories to update
     */
    where?: ItemCategoryWhereInput
  }

  /**
   * ItemCategory upsert
   */
  export type ItemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCategory to update in case it exists.
     */
    where: ItemCategoryWhereUniqueInput
    /**
     * In case the ItemCategory found by the `where` argument doesn't exist, create a new ItemCategory with this data.
     */
    create: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
    /**
     * In case the ItemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
  }

  /**
   * ItemCategory delete
   */
  export type ItemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter which ItemCategory to delete.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory deleteMany
   */
  export type ItemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategories to delete
     */
    where?: ItemCategoryWhereInput
  }

  /**
   * ItemCategory.items
   */
  export type ItemCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    where?: ItemCategoryMapWhereInput
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    cursor?: ItemCategoryMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCategoryMapScalarFieldEnum | ItemCategoryMapScalarFieldEnum[]
  }

  /**
   * ItemCategory without action
   */
  export type ItemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ItemCategoryMap
   */

  export type AggregateItemCategoryMap = {
    _count: ItemCategoryMapCountAggregateOutputType | null
    _min: ItemCategoryMapMinAggregateOutputType | null
    _max: ItemCategoryMapMaxAggregateOutputType | null
  }

  export type ItemCategoryMapMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type ItemCategoryMapMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type ItemCategoryMapCountAggregateOutputType = {
    id: number
    itemId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type ItemCategoryMapMinAggregateInputType = {
    id?: true
    itemId?: true
    categoryId?: true
    createdAt?: true
  }

  export type ItemCategoryMapMaxAggregateInputType = {
    id?: true
    itemId?: true
    categoryId?: true
    createdAt?: true
  }

  export type ItemCategoryMapCountAggregateInputType = {
    id?: true
    itemId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type ItemCategoryMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategoryMap to aggregate.
     */
    where?: ItemCategoryMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategoryMaps to fetch.
     */
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCategoryMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategoryMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategoryMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCategoryMaps
    **/
    _count?: true | ItemCategoryMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCategoryMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCategoryMapMaxAggregateInputType
  }

  export type GetItemCategoryMapAggregateType<T extends ItemCategoryMapAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCategoryMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCategoryMap[P]>
      : GetScalarType<T[P], AggregateItemCategoryMap[P]>
  }




  export type ItemCategoryMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryMapWhereInput
    orderBy?: ItemCategoryMapOrderByWithAggregationInput | ItemCategoryMapOrderByWithAggregationInput[]
    by: ItemCategoryMapScalarFieldEnum[] | ItemCategoryMapScalarFieldEnum
    having?: ItemCategoryMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCategoryMapCountAggregateInputType | true
    _min?: ItemCategoryMapMinAggregateInputType
    _max?: ItemCategoryMapMaxAggregateInputType
  }

  export type ItemCategoryMapGroupByOutputType = {
    id: string
    itemId: string
    categoryId: string
    createdAt: Date
    _count: ItemCategoryMapCountAggregateOutputType | null
    _min: ItemCategoryMapMinAggregateOutputType | null
    _max: ItemCategoryMapMaxAggregateOutputType | null
  }

  type GetItemCategoryMapGroupByPayload<T extends ItemCategoryMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCategoryMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCategoryMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCategoryMapGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCategoryMapGroupByOutputType[P]>
        }
      >
    >


  export type ItemCategoryMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    category?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategoryMap"]>


  export type ItemCategoryMapSelectScalar = {
    id?: boolean
    itemId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type ItemCategoryMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    category?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }

  export type $ItemCategoryMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCategoryMap"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      category: Prisma.$ItemCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["itemCategoryMap"]>
    composites: {}
  }

  type ItemCategoryMapGetPayload<S extends boolean | null | undefined | ItemCategoryMapDefaultArgs> = $Result.GetResult<Prisma.$ItemCategoryMapPayload, S>

  type ItemCategoryMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemCategoryMapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCategoryMapCountAggregateInputType | true
    }

  export interface ItemCategoryMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCategoryMap'], meta: { name: 'ItemCategoryMap' } }
    /**
     * Find zero or one ItemCategoryMap that matches the filter.
     * @param {ItemCategoryMapFindUniqueArgs} args - Arguments to find a ItemCategoryMap
     * @example
     * // Get one ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCategoryMapFindUniqueArgs>(args: SelectSubset<T, ItemCategoryMapFindUniqueArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemCategoryMap that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemCategoryMapFindUniqueOrThrowArgs} args - Arguments to find a ItemCategoryMap
     * @example
     * // Get one ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCategoryMapFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCategoryMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemCategoryMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapFindFirstArgs} args - Arguments to find a ItemCategoryMap
     * @example
     * // Get one ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCategoryMapFindFirstArgs>(args?: SelectSubset<T, ItemCategoryMapFindFirstArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemCategoryMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapFindFirstOrThrowArgs} args - Arguments to find a ItemCategoryMap
     * @example
     * // Get one ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCategoryMapFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCategoryMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemCategoryMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCategoryMaps
     * const itemCategoryMaps = await prisma.itemCategoryMap.findMany()
     * 
     * // Get first 10 ItemCategoryMaps
     * const itemCategoryMaps = await prisma.itemCategoryMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCategoryMapWithIdOnly = await prisma.itemCategoryMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCategoryMapFindManyArgs>(args?: SelectSubset<T, ItemCategoryMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemCategoryMap.
     * @param {ItemCategoryMapCreateArgs} args - Arguments to create a ItemCategoryMap.
     * @example
     * // Create one ItemCategoryMap
     * const ItemCategoryMap = await prisma.itemCategoryMap.create({
     *   data: {
     *     // ... data to create a ItemCategoryMap
     *   }
     * })
     * 
     */
    create<T extends ItemCategoryMapCreateArgs>(args: SelectSubset<T, ItemCategoryMapCreateArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemCategoryMaps.
     * @param {ItemCategoryMapCreateManyArgs} args - Arguments to create many ItemCategoryMaps.
     * @example
     * // Create many ItemCategoryMaps
     * const itemCategoryMap = await prisma.itemCategoryMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCategoryMapCreateManyArgs>(args?: SelectSubset<T, ItemCategoryMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemCategoryMap.
     * @param {ItemCategoryMapDeleteArgs} args - Arguments to delete one ItemCategoryMap.
     * @example
     * // Delete one ItemCategoryMap
     * const ItemCategoryMap = await prisma.itemCategoryMap.delete({
     *   where: {
     *     // ... filter to delete one ItemCategoryMap
     *   }
     * })
     * 
     */
    delete<T extends ItemCategoryMapDeleteArgs>(args: SelectSubset<T, ItemCategoryMapDeleteArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemCategoryMap.
     * @param {ItemCategoryMapUpdateArgs} args - Arguments to update one ItemCategoryMap.
     * @example
     * // Update one ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCategoryMapUpdateArgs>(args: SelectSubset<T, ItemCategoryMapUpdateArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemCategoryMaps.
     * @param {ItemCategoryMapDeleteManyArgs} args - Arguments to filter ItemCategoryMaps to delete.
     * @example
     * // Delete a few ItemCategoryMaps
     * const { count } = await prisma.itemCategoryMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCategoryMapDeleteManyArgs>(args?: SelectSubset<T, ItemCategoryMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategoryMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCategoryMaps
     * const itemCategoryMap = await prisma.itemCategoryMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCategoryMapUpdateManyArgs>(args: SelectSubset<T, ItemCategoryMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemCategoryMap.
     * @param {ItemCategoryMapUpsertArgs} args - Arguments to update or create a ItemCategoryMap.
     * @example
     * // Update or create a ItemCategoryMap
     * const itemCategoryMap = await prisma.itemCategoryMap.upsert({
     *   create: {
     *     // ... data to create a ItemCategoryMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCategoryMap we want to update
     *   }
     * })
     */
    upsert<T extends ItemCategoryMapUpsertArgs>(args: SelectSubset<T, ItemCategoryMapUpsertArgs<ExtArgs>>): Prisma__ItemCategoryMapClient<$Result.GetResult<Prisma.$ItemCategoryMapPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemCategoryMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapCountArgs} args - Arguments to filter ItemCategoryMaps to count.
     * @example
     * // Count the number of ItemCategoryMaps
     * const count = await prisma.itemCategoryMap.count({
     *   where: {
     *     // ... the filter for the ItemCategoryMaps we want to count
     *   }
     * })
    **/
    count<T extends ItemCategoryMapCountArgs>(
      args?: Subset<T, ItemCategoryMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCategoryMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCategoryMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCategoryMapAggregateArgs>(args: Subset<T, ItemCategoryMapAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryMapAggregateType<T>>

    /**
     * Group by ItemCategoryMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryMapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCategoryMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCategoryMapGroupByArgs['orderBy'] }
        : { orderBy?: ItemCategoryMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCategoryMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCategoryMap model
   */
  readonly fields: ItemCategoryMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCategoryMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCategoryMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends ItemCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemCategoryDefaultArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCategoryMap model
   */ 
  interface ItemCategoryMapFieldRefs {
    readonly id: FieldRef<"ItemCategoryMap", 'String'>
    readonly itemId: FieldRef<"ItemCategoryMap", 'String'>
    readonly categoryId: FieldRef<"ItemCategoryMap", 'String'>
    readonly createdAt: FieldRef<"ItemCategoryMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemCategoryMap findUnique
   */
  export type ItemCategoryMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategoryMap to fetch.
     */
    where: ItemCategoryMapWhereUniqueInput
  }

  /**
   * ItemCategoryMap findUniqueOrThrow
   */
  export type ItemCategoryMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategoryMap to fetch.
     */
    where: ItemCategoryMapWhereUniqueInput
  }

  /**
   * ItemCategoryMap findFirst
   */
  export type ItemCategoryMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategoryMap to fetch.
     */
    where?: ItemCategoryMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategoryMaps to fetch.
     */
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategoryMaps.
     */
    cursor?: ItemCategoryMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategoryMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategoryMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategoryMaps.
     */
    distinct?: ItemCategoryMapScalarFieldEnum | ItemCategoryMapScalarFieldEnum[]
  }

  /**
   * ItemCategoryMap findFirstOrThrow
   */
  export type ItemCategoryMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategoryMap to fetch.
     */
    where?: ItemCategoryMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategoryMaps to fetch.
     */
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategoryMaps.
     */
    cursor?: ItemCategoryMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategoryMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategoryMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategoryMaps.
     */
    distinct?: ItemCategoryMapScalarFieldEnum | ItemCategoryMapScalarFieldEnum[]
  }

  /**
   * ItemCategoryMap findMany
   */
  export type ItemCategoryMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategoryMaps to fetch.
     */
    where?: ItemCategoryMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategoryMaps to fetch.
     */
    orderBy?: ItemCategoryMapOrderByWithRelationInput | ItemCategoryMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCategoryMaps.
     */
    cursor?: ItemCategoryMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategoryMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategoryMaps.
     */
    skip?: number
    distinct?: ItemCategoryMapScalarFieldEnum | ItemCategoryMapScalarFieldEnum[]
  }

  /**
   * ItemCategoryMap create
   */
  export type ItemCategoryMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCategoryMap.
     */
    data: XOR<ItemCategoryMapCreateInput, ItemCategoryMapUncheckedCreateInput>
  }

  /**
   * ItemCategoryMap createMany
   */
  export type ItemCategoryMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCategoryMaps.
     */
    data: ItemCategoryMapCreateManyInput | ItemCategoryMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCategoryMap update
   */
  export type ItemCategoryMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCategoryMap.
     */
    data: XOR<ItemCategoryMapUpdateInput, ItemCategoryMapUncheckedUpdateInput>
    /**
     * Choose, which ItemCategoryMap to update.
     */
    where: ItemCategoryMapWhereUniqueInput
  }

  /**
   * ItemCategoryMap updateMany
   */
  export type ItemCategoryMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCategoryMaps.
     */
    data: XOR<ItemCategoryMapUpdateManyMutationInput, ItemCategoryMapUncheckedUpdateManyInput>
    /**
     * Filter which ItemCategoryMaps to update
     */
    where?: ItemCategoryMapWhereInput
  }

  /**
   * ItemCategoryMap upsert
   */
  export type ItemCategoryMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCategoryMap to update in case it exists.
     */
    where: ItemCategoryMapWhereUniqueInput
    /**
     * In case the ItemCategoryMap found by the `where` argument doesn't exist, create a new ItemCategoryMap with this data.
     */
    create: XOR<ItemCategoryMapCreateInput, ItemCategoryMapUncheckedCreateInput>
    /**
     * In case the ItemCategoryMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCategoryMapUpdateInput, ItemCategoryMapUncheckedUpdateInput>
  }

  /**
   * ItemCategoryMap delete
   */
  export type ItemCategoryMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
    /**
     * Filter which ItemCategoryMap to delete.
     */
    where: ItemCategoryMapWhereUniqueInput
  }

  /**
   * ItemCategoryMap deleteMany
   */
  export type ItemCategoryMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategoryMaps to delete
     */
    where?: ItemCategoryMapWhereInput
  }

  /**
   * ItemCategoryMap without action
   */
  export type ItemCategoryMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryMap
     */
    select?: ItemCategoryMapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryMapInclude<ExtArgs> | null
  }


  /**
   * Model ItemImage
   */

  export type AggregateItemImage = {
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  export type ItemImageMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    imageUrl: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type ItemImageMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    imageUrl: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type ItemImageCountAggregateOutputType = {
    id: number
    itemId: number
    imageUrl: number
    isPrimary: number
    createdAt: number
    _all: number
  }


  export type ItemImageMinAggregateInputType = {
    id?: true
    itemId?: true
    imageUrl?: true
    isPrimary?: true
    createdAt?: true
  }

  export type ItemImageMaxAggregateInputType = {
    id?: true
    itemId?: true
    imageUrl?: true
    isPrimary?: true
    createdAt?: true
  }

  export type ItemImageCountAggregateInputType = {
    id?: true
    itemId?: true
    imageUrl?: true
    isPrimary?: true
    createdAt?: true
    _all?: true
  }

  export type ItemImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImage to aggregate.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemImages
    **/
    _count?: true | ItemImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemImageMaxAggregateInputType
  }

  export type GetItemImageAggregateType<T extends ItemImageAggregateArgs> = {
        [P in keyof T & keyof AggregateItemImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemImage[P]>
      : GetScalarType<T[P], AggregateItemImage[P]>
  }




  export type ItemImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithAggregationInput | ItemImageOrderByWithAggregationInput[]
    by: ItemImageScalarFieldEnum[] | ItemImageScalarFieldEnum
    having?: ItemImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemImageCountAggregateInputType | true
    _min?: ItemImageMinAggregateInputType
    _max?: ItemImageMaxAggregateInputType
  }

  export type ItemImageGroupByOutputType = {
    id: string
    itemId: string
    imageUrl: string
    isPrimary: boolean
    createdAt: Date
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  type GetItemImageGroupByPayload<T extends ItemImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
            : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
        }
      >
    >


  export type ItemImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>


  export type ItemImageSelectScalar = {
    id?: boolean
    itemId?: boolean
    imageUrl?: boolean
    isPrimary?: boolean
    createdAt?: boolean
  }

  export type ItemImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemImage"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      imageUrl: string
      isPrimary: boolean
      createdAt: Date
    }, ExtArgs["result"]["itemImage"]>
    composites: {}
  }

  type ItemImageGetPayload<S extends boolean | null | undefined | ItemImageDefaultArgs> = $Result.GetResult<Prisma.$ItemImagePayload, S>

  type ItemImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemImageCountAggregateInputType | true
    }

  export interface ItemImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemImage'], meta: { name: 'ItemImage' } }
    /**
     * Find zero or one ItemImage that matches the filter.
     * @param {ItemImageFindUniqueArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemImageFindUniqueArgs>(args: SelectSubset<T, ItemImageFindUniqueArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemImageFindUniqueOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemImageFindFirstArgs>(args?: SelectSubset<T, ItemImageFindFirstArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemImages
     * const itemImages = await prisma.itemImage.findMany()
     * 
     * // Get first 10 ItemImages
     * const itemImages = await prisma.itemImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemImageFindManyArgs>(args?: SelectSubset<T, ItemImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemImage.
     * @param {ItemImageCreateArgs} args - Arguments to create a ItemImage.
     * @example
     * // Create one ItemImage
     * const ItemImage = await prisma.itemImage.create({
     *   data: {
     *     // ... data to create a ItemImage
     *   }
     * })
     * 
     */
    create<T extends ItemImageCreateArgs>(args: SelectSubset<T, ItemImageCreateArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemImages.
     * @param {ItemImageCreateManyArgs} args - Arguments to create many ItemImages.
     * @example
     * // Create many ItemImages
     * const itemImage = await prisma.itemImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemImageCreateManyArgs>(args?: SelectSubset<T, ItemImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemImage.
     * @param {ItemImageDeleteArgs} args - Arguments to delete one ItemImage.
     * @example
     * // Delete one ItemImage
     * const ItemImage = await prisma.itemImage.delete({
     *   where: {
     *     // ... filter to delete one ItemImage
     *   }
     * })
     * 
     */
    delete<T extends ItemImageDeleteArgs>(args: SelectSubset<T, ItemImageDeleteArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemImage.
     * @param {ItemImageUpdateArgs} args - Arguments to update one ItemImage.
     * @example
     * // Update one ItemImage
     * const itemImage = await prisma.itemImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemImageUpdateArgs>(args: SelectSubset<T, ItemImageUpdateArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemImages.
     * @param {ItemImageDeleteManyArgs} args - Arguments to filter ItemImages to delete.
     * @example
     * // Delete a few ItemImages
     * const { count } = await prisma.itemImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemImageDeleteManyArgs>(args?: SelectSubset<T, ItemImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemImages
     * const itemImage = await prisma.itemImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemImageUpdateManyArgs>(args: SelectSubset<T, ItemImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemImage.
     * @param {ItemImageUpsertArgs} args - Arguments to update or create a ItemImage.
     * @example
     * // Update or create a ItemImage
     * const itemImage = await prisma.itemImage.upsert({
     *   create: {
     *     // ... data to create a ItemImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemImage we want to update
     *   }
     * })
     */
    upsert<T extends ItemImageUpsertArgs>(args: SelectSubset<T, ItemImageUpsertArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageCountArgs} args - Arguments to filter ItemImages to count.
     * @example
     * // Count the number of ItemImages
     * const count = await prisma.itemImage.count({
     *   where: {
     *     // ... the filter for the ItemImages we want to count
     *   }
     * })
    **/
    count<T extends ItemImageCountArgs>(
      args?: Subset<T, ItemImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemImageAggregateArgs>(args: Subset<T, ItemImageAggregateArgs>): Prisma.PrismaPromise<GetItemImageAggregateType<T>>

    /**
     * Group by ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemImageGroupByArgs['orderBy'] }
        : { orderBy?: ItemImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemImage model
   */
  readonly fields: ItemImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemImage model
   */ 
  interface ItemImageFieldRefs {
    readonly id: FieldRef<"ItemImage", 'String'>
    readonly itemId: FieldRef<"ItemImage", 'String'>
    readonly imageUrl: FieldRef<"ItemImage", 'String'>
    readonly isPrimary: FieldRef<"ItemImage", 'Boolean'>
    readonly createdAt: FieldRef<"ItemImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemImage findUnique
   */
  export type ItemImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage findUniqueOrThrow
   */
  export type ItemImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage findFirst
   */
  export type ItemImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage findFirstOrThrow
   */
  export type ItemImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage findMany
   */
  export type ItemImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImages to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage create
   */
  export type ItemImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemImage.
     */
    data: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
  }

  /**
   * ItemImage createMany
   */
  export type ItemImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemImages.
     */
    data: ItemImageCreateManyInput | ItemImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemImage update
   */
  export type ItemImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemImage.
     */
    data: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
    /**
     * Choose, which ItemImage to update.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage updateMany
   */
  export type ItemImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemImages.
     */
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyInput>
    /**
     * Filter which ItemImages to update
     */
    where?: ItemImageWhereInput
  }

  /**
   * ItemImage upsert
   */
  export type ItemImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemImage to update in case it exists.
     */
    where: ItemImageWhereUniqueInput
    /**
     * In case the ItemImage found by the `where` argument doesn't exist, create a new ItemImage with this data.
     */
    create: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
    /**
     * In case the ItemImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
  }

  /**
   * ItemImage delete
   */
  export type ItemImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter which ItemImage to delete.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage deleteMany
   */
  export type ItemImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImages to delete
     */
    where?: ItemImageWhereInput
  }

  /**
   * ItemImage without action
   */
  export type ItemImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startingPrice: 'startingPrice',
    status: 'status',
    createdBy: 'createdBy',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemCategoryScalarFieldEnum = (typeof ItemCategoryScalarFieldEnum)[keyof typeof ItemCategoryScalarFieldEnum]


  export const ItemCategoryMapScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type ItemCategoryMapScalarFieldEnum = (typeof ItemCategoryMapScalarFieldEnum)[keyof typeof ItemCategoryMapScalarFieldEnum]


  export const ItemImageScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    imageUrl: 'imageUrl',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
  };

  export type ItemImageScalarFieldEnum = (typeof ItemImageScalarFieldEnum)[keyof typeof ItemImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    startingPrice?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    createdBy?: StringFilter<"Item"> | string
    approvedBy?: StringNullableFilter<"Item"> | string | null
    approvedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    images?: ItemImageListRelationFilter
    categories?: ItemCategoryMapListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startingPrice?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ItemImageOrderByRelationAggregateInput
    categories?: ItemCategoryMapOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    startingPrice?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    createdBy?: StringFilter<"Item"> | string
    approvedBy?: StringNullableFilter<"Item"> | string | null
    approvedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    images?: ItemImageListRelationFilter
    categories?: ItemCategoryMapListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startingPrice?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    startingPrice?: DecimalWithAggregatesFilter<"Item"> | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusWithAggregatesFilter<"Item"> | $Enums.ItemStatus
    createdBy?: StringWithAggregatesFilter<"Item"> | string
    approvedBy?: StringNullableWithAggregatesFilter<"Item"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ItemCategoryWhereInput = {
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    id?: StringFilter<"ItemCategory"> | string
    name?: StringFilter<"ItemCategory"> | string
    description?: StringNullableFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ItemCategory"> | Date | string
    items?: ItemCategoryMapListRelationFilter
  }

  export type ItemCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ItemCategoryMapOrderByRelationAggregateInput
  }

  export type ItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    description?: StringNullableFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ItemCategory"> | Date | string
    items?: ItemCategoryMapListRelationFilter
  }, "id" | "name">

  export type ItemCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCategoryCountOrderByAggregateInput
    _max?: ItemCategoryMaxOrderByAggregateInput
    _min?: ItemCategoryMinOrderByAggregateInput
  }

  export type ItemCategoryScalarWhereWithAggregatesInput = {
    AND?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    OR?: ItemCategoryScalarWhereWithAggregatesInput[]
    NOT?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemCategory"> | string
    name?: StringWithAggregatesFilter<"ItemCategory"> | string
    description?: StringNullableWithAggregatesFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string
  }

  export type ItemCategoryMapWhereInput = {
    AND?: ItemCategoryMapWhereInput | ItemCategoryMapWhereInput[]
    OR?: ItemCategoryMapWhereInput[]
    NOT?: ItemCategoryMapWhereInput | ItemCategoryMapWhereInput[]
    id?: StringFilter<"ItemCategoryMap"> | string
    itemId?: StringFilter<"ItemCategoryMap"> | string
    categoryId?: StringFilter<"ItemCategoryMap"> | string
    createdAt?: DateTimeFilter<"ItemCategoryMap"> | Date | string
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    category?: XOR<ItemCategoryRelationFilter, ItemCategoryWhereInput>
  }

  export type ItemCategoryMapOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    item?: ItemOrderByWithRelationInput
    category?: ItemCategoryOrderByWithRelationInput
  }

  export type ItemCategoryMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemCategoryMapWhereInput | ItemCategoryMapWhereInput[]
    OR?: ItemCategoryMapWhereInput[]
    NOT?: ItemCategoryMapWhereInput | ItemCategoryMapWhereInput[]
    itemId?: StringFilter<"ItemCategoryMap"> | string
    categoryId?: StringFilter<"ItemCategoryMap"> | string
    createdAt?: DateTimeFilter<"ItemCategoryMap"> | Date | string
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    category?: XOR<ItemCategoryRelationFilter, ItemCategoryWhereInput>
  }, "id">

  export type ItemCategoryMapOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: ItemCategoryMapCountOrderByAggregateInput
    _max?: ItemCategoryMapMaxOrderByAggregateInput
    _min?: ItemCategoryMapMinOrderByAggregateInput
  }

  export type ItemCategoryMapScalarWhereWithAggregatesInput = {
    AND?: ItemCategoryMapScalarWhereWithAggregatesInput | ItemCategoryMapScalarWhereWithAggregatesInput[]
    OR?: ItemCategoryMapScalarWhereWithAggregatesInput[]
    NOT?: ItemCategoryMapScalarWhereWithAggregatesInput | ItemCategoryMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemCategoryMap"> | string
    itemId?: StringWithAggregatesFilter<"ItemCategoryMap"> | string
    categoryId?: StringWithAggregatesFilter<"ItemCategoryMap"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ItemCategoryMap"> | Date | string
  }

  export type ItemImageWhereInput = {
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    imageUrl?: StringFilter<"ItemImage"> | string
    isPrimary?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }

  export type ItemImageOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type ItemImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    itemId?: StringFilter<"ItemImage"> | string
    imageUrl?: StringFilter<"ItemImage"> | string
    isPrimary?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemImageOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    _count?: ItemImageCountOrderByAggregateInput
    _max?: ItemImageMaxOrderByAggregateInput
    _min?: ItemImageMinOrderByAggregateInput
  }

  export type ItemImageScalarWhereWithAggregatesInput = {
    AND?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    OR?: ItemImageScalarWhereWithAggregatesInput[]
    NOT?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemImage"> | string
    itemId?: StringWithAggregatesFilter<"ItemImage"> | string
    imageUrl?: StringWithAggregatesFilter<"ItemImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"ItemImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ItemImage"> | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ItemImageCreateNestedManyWithoutItemInput
    categories?: ItemCategoryMapCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    categories?: ItemCategoryMapUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ItemImageUpdateManyWithoutItemNestedInput
    categories?: ItemCategoryMapUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    categories?: ItemCategoryMapUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCategoryMapCreateNestedManyWithoutCategoryInput
  }

  export type ItemCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCategoryMapUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ItemCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemCategoryMapUpdateManyWithoutCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemCategoryMapUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ItemCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapCreateInput = {
    id?: string
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutCategoriesInput
    category: ItemCategoryCreateNestedOneWithoutItemsInput
  }

  export type ItemCategoryMapUncheckedCreateInput = {
    id?: string
    itemId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ItemCategoryMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutCategoriesNestedInput
    category?: ItemCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemCategoryMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapCreateManyInput = {
    id?: string
    itemId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ItemCategoryMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageCreateInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutImagesInput
  }

  export type ItemImageUncheckedCreateInput = {
    id?: string
    itemId: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ItemImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ItemImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageCreateManyInput = {
    id?: string
    itemId: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ItemImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemImageListRelationFilter = {
    every?: ItemImageWhereInput
    some?: ItemImageWhereInput
    none?: ItemImageWhereInput
  }

  export type ItemCategoryMapListRelationFilter = {
    every?: ItemCategoryMapWhereInput
    some?: ItemCategoryMapWhereInput
    none?: ItemCategoryMapWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCategoryMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startingPrice?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    startingPrice?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startingPrice?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startingPrice?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    startingPrice?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ItemCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemCategoryRelationFilter = {
    is?: ItemCategoryWhereInput
    isNot?: ItemCategoryWhereInput
  }

  export type ItemCategoryMapCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemCategoryMapMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemCategoryMapMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemImageCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemImageMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemImageMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    imageUrl?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemImageCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type ItemCategoryMapCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput> | ItemCategoryMapCreateWithoutItemInput[] | ItemCategoryMapUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutItemInput | ItemCategoryMapCreateOrConnectWithoutItemInput[]
    createMany?: ItemCategoryMapCreateManyItemInputEnvelope
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
  }

  export type ItemImageUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type ItemCategoryMapUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput> | ItemCategoryMapCreateWithoutItemInput[] | ItemCategoryMapUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutItemInput | ItemCategoryMapCreateOrConnectWithoutItemInput[]
    createMany?: ItemCategoryMapCreateManyItemInputEnvelope
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemImageUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type ItemCategoryMapUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput> | ItemCategoryMapCreateWithoutItemInput[] | ItemCategoryMapUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutItemInput | ItemCategoryMapCreateOrConnectWithoutItemInput[]
    upsert?: ItemCategoryMapUpsertWithWhereUniqueWithoutItemInput | ItemCategoryMapUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemCategoryMapCreateManyItemInputEnvelope
    set?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    disconnect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    delete?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    update?: ItemCategoryMapUpdateWithWhereUniqueWithoutItemInput | ItemCategoryMapUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemCategoryMapUpdateManyWithWhereWithoutItemInput | ItemCategoryMapUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
  }

  export type ItemImageUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type ItemCategoryMapUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput> | ItemCategoryMapCreateWithoutItemInput[] | ItemCategoryMapUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutItemInput | ItemCategoryMapCreateOrConnectWithoutItemInput[]
    upsert?: ItemCategoryMapUpsertWithWhereUniqueWithoutItemInput | ItemCategoryMapUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemCategoryMapCreateManyItemInputEnvelope
    set?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    disconnect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    delete?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    update?: ItemCategoryMapUpdateWithWhereUniqueWithoutItemInput | ItemCategoryMapUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemCategoryMapUpdateManyWithWhereWithoutItemInput | ItemCategoryMapUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
  }

  export type ItemCategoryMapCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput> | ItemCategoryMapCreateWithoutCategoryInput[] | ItemCategoryMapUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutCategoryInput | ItemCategoryMapCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCategoryMapCreateManyCategoryInputEnvelope
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
  }

  export type ItemCategoryMapUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput> | ItemCategoryMapCreateWithoutCategoryInput[] | ItemCategoryMapUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutCategoryInput | ItemCategoryMapCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCategoryMapCreateManyCategoryInputEnvelope
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
  }

  export type ItemCategoryMapUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput> | ItemCategoryMapCreateWithoutCategoryInput[] | ItemCategoryMapUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutCategoryInput | ItemCategoryMapCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemCategoryMapUpsertWithWhereUniqueWithoutCategoryInput | ItemCategoryMapUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCategoryMapCreateManyCategoryInputEnvelope
    set?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    disconnect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    delete?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    update?: ItemCategoryMapUpdateWithWhereUniqueWithoutCategoryInput | ItemCategoryMapUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemCategoryMapUpdateManyWithWhereWithoutCategoryInput | ItemCategoryMapUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
  }

  export type ItemCategoryMapUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput> | ItemCategoryMapCreateWithoutCategoryInput[] | ItemCategoryMapUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCategoryMapCreateOrConnectWithoutCategoryInput | ItemCategoryMapCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemCategoryMapUpsertWithWhereUniqueWithoutCategoryInput | ItemCategoryMapUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCategoryMapCreateManyCategoryInputEnvelope
    set?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    disconnect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    delete?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    connect?: ItemCategoryMapWhereUniqueInput | ItemCategoryMapWhereUniqueInput[]
    update?: ItemCategoryMapUpdateWithWhereUniqueWithoutCategoryInput | ItemCategoryMapUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemCategoryMapUpdateManyWithWhereWithoutCategoryInput | ItemCategoryMapUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ItemCreateWithoutCategoriesInput, ItemUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriesInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<ItemCategoryCreateWithoutItemsInput, ItemCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemsInput
    connect?: ItemCategoryWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ItemCreateWithoutCategoriesInput, ItemUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriesInput
    upsert?: ItemUpsertWithoutCategoriesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutCategoriesInput, ItemUpdateWithoutCategoriesInput>, ItemUncheckedUpdateWithoutCategoriesInput>
  }

  export type ItemCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ItemCategoryCreateWithoutItemsInput, ItemCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemsInput
    upsert?: ItemCategoryUpsertWithoutItemsInput
    connect?: ItemCategoryWhereUniqueInput
    update?: XOR<XOR<ItemCategoryUpdateToOneWithWhereWithoutItemsInput, ItemCategoryUpdateWithoutItemsInput>, ItemCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type ItemCreateNestedOneWithoutImagesInput = {
    create?: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutImagesInput
    connect?: ItemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ItemUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutImagesInput
    upsert?: ItemUpsertWithoutImagesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutImagesInput, ItemUpdateWithoutImagesInput>, ItemUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemImageCreateWithoutItemInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ItemImageUncheckedCreateWithoutItemInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ItemImageCreateOrConnectWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageCreateManyItemInputEnvelope = {
    data: ItemImageCreateManyItemInput | ItemImageCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemCategoryMapCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    category: ItemCategoryCreateNestedOneWithoutItemsInput
  }

  export type ItemCategoryMapUncheckedCreateWithoutItemInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ItemCategoryMapCreateOrConnectWithoutItemInput = {
    where: ItemCategoryMapWhereUniqueInput
    create: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput>
  }

  export type ItemCategoryMapCreateManyItemInputEnvelope = {
    data: ItemCategoryMapCreateManyItemInput | ItemCategoryMapCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemImageUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    update: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    data: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
  }

  export type ItemImageUpdateManyWithWhereWithoutItemInput = {
    where: ItemImageScalarWhereInput
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemImageScalarWhereInput = {
    AND?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    OR?: ItemImageScalarWhereInput[]
    NOT?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    imageUrl?: StringFilter<"ItemImage"> | string
    isPrimary?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
  }

  export type ItemCategoryMapUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemCategoryMapWhereUniqueInput
    update: XOR<ItemCategoryMapUpdateWithoutItemInput, ItemCategoryMapUncheckedUpdateWithoutItemInput>
    create: XOR<ItemCategoryMapCreateWithoutItemInput, ItemCategoryMapUncheckedCreateWithoutItemInput>
  }

  export type ItemCategoryMapUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemCategoryMapWhereUniqueInput
    data: XOR<ItemCategoryMapUpdateWithoutItemInput, ItemCategoryMapUncheckedUpdateWithoutItemInput>
  }

  export type ItemCategoryMapUpdateManyWithWhereWithoutItemInput = {
    where: ItemCategoryMapScalarWhereInput
    data: XOR<ItemCategoryMapUpdateManyMutationInput, ItemCategoryMapUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCategoryMapScalarWhereInput = {
    AND?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
    OR?: ItemCategoryMapScalarWhereInput[]
    NOT?: ItemCategoryMapScalarWhereInput | ItemCategoryMapScalarWhereInput[]
    id?: StringFilter<"ItemCategoryMap"> | string
    itemId?: StringFilter<"ItemCategoryMap"> | string
    categoryId?: StringFilter<"ItemCategoryMap"> | string
    createdAt?: DateTimeFilter<"ItemCategoryMap"> | Date | string
  }

  export type ItemCategoryMapCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutCategoriesInput
  }

  export type ItemCategoryMapUncheckedCreateWithoutCategoryInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
  }

  export type ItemCategoryMapCreateOrConnectWithoutCategoryInput = {
    where: ItemCategoryMapWhereUniqueInput
    create: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput>
  }

  export type ItemCategoryMapCreateManyCategoryInputEnvelope = {
    data: ItemCategoryMapCreateManyCategoryInput | ItemCategoryMapCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ItemCategoryMapUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ItemCategoryMapWhereUniqueInput
    update: XOR<ItemCategoryMapUpdateWithoutCategoryInput, ItemCategoryMapUncheckedUpdateWithoutCategoryInput>
    create: XOR<ItemCategoryMapCreateWithoutCategoryInput, ItemCategoryMapUncheckedCreateWithoutCategoryInput>
  }

  export type ItemCategoryMapUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ItemCategoryMapWhereUniqueInput
    data: XOR<ItemCategoryMapUpdateWithoutCategoryInput, ItemCategoryMapUncheckedUpdateWithoutCategoryInput>
  }

  export type ItemCategoryMapUpdateManyWithWhereWithoutCategoryInput = {
    where: ItemCategoryMapScalarWhereInput
    data: XOR<ItemCategoryMapUpdateManyMutationInput, ItemCategoryMapUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ItemCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ItemImageCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCategoriesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoriesInput, ItemUncheckedCreateWithoutCategoriesInput>
  }

  export type ItemCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryCreateOrConnectWithoutItemsInput = {
    where: ItemCategoryWhereUniqueInput
    create: XOR<ItemCategoryCreateWithoutItemsInput, ItemCategoryUncheckedCreateWithoutItemsInput>
  }

  export type ItemUpsertWithoutCategoriesInput = {
    update: XOR<ItemUpdateWithoutCategoriesInput, ItemUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ItemCreateWithoutCategoriesInput, ItemUncheckedCreateWithoutCategoriesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutCategoriesInput, ItemUncheckedUpdateWithoutCategoriesInput>
  }

  export type ItemUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ItemImageUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCategoryUpsertWithoutItemsInput = {
    update: XOR<ItemCategoryUpdateWithoutItemsInput, ItemCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<ItemCategoryCreateWithoutItemsInput, ItemCategoryUncheckedCreateWithoutItemsInput>
    where?: ItemCategoryWhereInput
  }

  export type ItemCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: ItemCategoryWhereInput
    data: XOR<ItemCategoryUpdateWithoutItemsInput, ItemCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type ItemCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ItemCategoryMapCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    startingPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ItemStatus
    createdBy: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ItemCategoryMapUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutImagesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
  }

  export type ItemUpsertWithoutImagesInput = {
    update: XOR<ItemUpdateWithoutImagesInput, ItemUncheckedUpdateWithoutImagesInput>
    create: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutImagesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutImagesInput, ItemUncheckedUpdateWithoutImagesInput>
  }

  export type ItemUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ItemCategoryMapUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ItemCategoryMapUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemImageCreateManyItemInput = {
    id?: string
    imageUrl: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type ItemCategoryMapCreateManyItemInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ItemImageUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ItemCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemCategoryMapUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapCreateManyCategoryInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
  }

  export type ItemCategoryMapUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ItemCategoryMapUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryMapUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryCountOutputTypeDefaultArgs instead
     */
    export type ItemCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryDefaultArgs instead
     */
    export type ItemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryMapDefaultArgs instead
     */
    export type ItemCategoryMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryMapDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemImageDefaultArgs instead
     */
    export type ItemImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemImageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}