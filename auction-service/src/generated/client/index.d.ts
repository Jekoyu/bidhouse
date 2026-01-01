
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
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model UserAuctionHistory
 * 
 */
export type UserAuctionHistory = $Result.DefaultSelection<Prisma.$UserAuctionHistoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuctionStatus: {
  SCHEDULED: 'SCHEDULED',
  ONGOING: 'ONGOING',
  FINISHED: 'FINISHED'
};

export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type AuctionStatus = $Enums.AuctionStatus

export const AuctionStatus: typeof $Enums.AuctionStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auctions
 * const auctions = await prisma.auction.findMany()
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
   * // Fetch zero or more Auctions
   * const auctions = await prisma.auction.findMany()
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
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs>;

  /**
   * `prisma.userAuctionHistory`: Exposes CRUD operations for the **UserAuctionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuctionHistories
    * const userAuctionHistories = await prisma.userAuctionHistory.findMany()
    * ```
    */
  get userAuctionHistory(): Prisma.UserAuctionHistoryDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;
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
    Auction: 'Auction',
    Bid: 'Bid',
    UserAuctionHistory: 'UserAuctionHistory',
    Transaction: 'Transaction'
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
      modelProps: "auction" | "bid" | "userAuctionHistory" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      UserAuctionHistory: {
        payload: Prisma.$UserAuctionHistoryPayload<ExtArgs>
        fields: Prisma.UserAuctionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuctionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuctionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserAuctionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuctionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          findMany: {
            args: Prisma.UserAuctionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>[]
          }
          create: {
            args: Prisma.UserAuctionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          createMany: {
            args: Prisma.UserAuctionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAuctionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          update: {
            args: Prisma.UserAuctionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserAuctionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuctionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAuctionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuctionHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserAuctionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuctionHistory>
          }
          groupBy: {
            args: Prisma.UserAuctionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuctionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuctionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuctionHistoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
   * Count Type AuctionCountOutputType
   */

  export type AuctionCountOutputType = {
    bids: number
    transactions: number
    histories: number
  }

  export type AuctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | AuctionCountOutputTypeCountBidsArgs
    transactions?: boolean | AuctionCountOutputTypeCountTransactionsArgs
    histories?: boolean | AuctionCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionCountOutputType
     */
    select?: AuctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuctionHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    startingPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type AuctionSumAggregateOutputType = {
    startingPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type AuctionMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    finalPrice: Decimal | null
    winnerUserId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    finalPrice: Decimal | null
    winnerUserId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    itemId: number
    startTime: number
    endTime: number
    status: number
    startingPrice: number
    finalPrice: number
    winnerUserId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    startingPrice?: true
    finalPrice?: true
  }

  export type AuctionSumAggregateInputType = {
    startingPrice?: true
    finalPrice?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    itemId?: true
    startTime?: true
    endTime?: true
    status?: true
    startingPrice?: true
    finalPrice?: true
    winnerUserId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    itemId?: true
    startTime?: true
    endTime?: true
    status?: true
    startingPrice?: true
    finalPrice?: true
    winnerUserId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    itemId?: true
    startTime?: true
    endTime?: true
    status?: true
    startingPrice?: true
    finalPrice?: true
    winnerUserId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: string
    itemId: string
    startTime: Date
    endTime: Date
    status: $Enums.AuctionStatus
    startingPrice: Decimal
    finalPrice: Decimal | null
    winnerUserId: string | null
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    startingPrice?: boolean
    finalPrice?: boolean
    winnerUserId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    transactions?: boolean | Auction$transactionsArgs<ExtArgs>
    histories?: boolean | Auction$historiesArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>


  export type AuctionSelectScalar = {
    id?: boolean
    itemId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    startingPrice?: boolean
    finalPrice?: boolean
    winnerUserId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    transactions?: boolean | Auction$transactionsArgs<ExtArgs>
    histories?: boolean | Auction$historiesArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      bids: Prisma.$BidPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      histories: Prisma.$UserAuctionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      startTime: Date
      endTime: Date
      status: $Enums.AuctionStatus
      startingPrice: Prisma.Decimal
      finalPrice: Prisma.Decimal | null
      winnerUserId: string | null
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
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
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bids<T extends Auction$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Auction$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    histories<T extends Auction$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Auction$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Auction model
   */ 
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'String'>
    readonly itemId: FieldRef<"Auction", 'String'>
    readonly startTime: FieldRef<"Auction", 'DateTime'>
    readonly endTime: FieldRef<"Auction", 'DateTime'>
    readonly status: FieldRef<"Auction", 'AuctionStatus'>
    readonly startingPrice: FieldRef<"Auction", 'Decimal'>
    readonly finalPrice: FieldRef<"Auction", 'Decimal'>
    readonly winnerUserId: FieldRef<"Auction", 'String'>
    readonly createdBy: FieldRef<"Auction", 'String'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
    readonly updatedAt: FieldRef<"Auction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
  }

  /**
   * Auction.bids
   */
  export type Auction$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Auction.transactions
   */
  export type Auction$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Auction.histories
   */
  export type Auction$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    where?: UserAuctionHistoryWhereInput
    orderBy?: UserAuctionHistoryOrderByWithRelationInput | UserAuctionHistoryOrderByWithRelationInput[]
    cursor?: UserAuctionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAuctionHistoryScalarFieldEnum | UserAuctionHistoryScalarFieldEnum[]
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    bidAmount: Decimal | null
  }

  export type BidSumAggregateOutputType = {
    bidAmount: Decimal | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    bidAmount: Decimal | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    bidAmount: Decimal | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    auctionId: number
    userId: number
    bidAmount: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    bidAmount?: true
  }

  export type BidSumAggregateInputType = {
    bidAmount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    bidAmount?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    bidAmount?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    bidAmount?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    auctionId: string
    userId: string
    bidAmount: Decimal
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    bidAmount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>


  export type BidSelectScalar = {
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    bidAmount?: boolean
    createdAt?: boolean
  }

  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      userId: string
      bidAmount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Bid model
   */ 
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly auctionId: FieldRef<"Bid", 'String'>
    readonly userId: FieldRef<"Bid", 'String'>
    readonly bidAmount: FieldRef<"Bid", 'Decimal'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model UserAuctionHistory
   */

  export type AggregateUserAuctionHistory = {
    _count: UserAuctionHistoryCountAggregateOutputType | null
    _avg: UserAuctionHistoryAvgAggregateOutputType | null
    _sum: UserAuctionHistorySumAggregateOutputType | null
    _min: UserAuctionHistoryMinAggregateOutputType | null
    _max: UserAuctionHistoryMaxAggregateOutputType | null
  }

  export type UserAuctionHistoryAvgAggregateOutputType = {
    lastBidAmount: Decimal | null
  }

  export type UserAuctionHistorySumAggregateOutputType = {
    lastBidAmount: Decimal | null
  }

  export type UserAuctionHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    auctionId: string | null
    lastBidAmount: Decimal | null
    isWinner: boolean | null
    createdAt: Date | null
  }

  export type UserAuctionHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    auctionId: string | null
    lastBidAmount: Decimal | null
    isWinner: boolean | null
    createdAt: Date | null
  }

  export type UserAuctionHistoryCountAggregateOutputType = {
    id: number
    userId: number
    auctionId: number
    lastBidAmount: number
    isWinner: number
    createdAt: number
    _all: number
  }


  export type UserAuctionHistoryAvgAggregateInputType = {
    lastBidAmount?: true
  }

  export type UserAuctionHistorySumAggregateInputType = {
    lastBidAmount?: true
  }

  export type UserAuctionHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    auctionId?: true
    lastBidAmount?: true
    isWinner?: true
    createdAt?: true
  }

  export type UserAuctionHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    auctionId?: true
    lastBidAmount?: true
    isWinner?: true
    createdAt?: true
  }

  export type UserAuctionHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    auctionId?: true
    lastBidAmount?: true
    isWinner?: true
    createdAt?: true
    _all?: true
  }

  export type UserAuctionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuctionHistory to aggregate.
     */
    where?: UserAuctionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuctionHistories to fetch.
     */
    orderBy?: UserAuctionHistoryOrderByWithRelationInput | UserAuctionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuctionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuctionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuctionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuctionHistories
    **/
    _count?: true | UserAuctionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuctionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuctionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuctionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuctionHistoryMaxAggregateInputType
  }

  export type GetUserAuctionHistoryAggregateType<T extends UserAuctionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuctionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuctionHistory[P]>
      : GetScalarType<T[P], AggregateUserAuctionHistory[P]>
  }




  export type UserAuctionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuctionHistoryWhereInput
    orderBy?: UserAuctionHistoryOrderByWithAggregationInput | UserAuctionHistoryOrderByWithAggregationInput[]
    by: UserAuctionHistoryScalarFieldEnum[] | UserAuctionHistoryScalarFieldEnum
    having?: UserAuctionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuctionHistoryCountAggregateInputType | true
    _avg?: UserAuctionHistoryAvgAggregateInputType
    _sum?: UserAuctionHistorySumAggregateInputType
    _min?: UserAuctionHistoryMinAggregateInputType
    _max?: UserAuctionHistoryMaxAggregateInputType
  }

  export type UserAuctionHistoryGroupByOutputType = {
    id: string
    userId: string
    auctionId: string
    lastBidAmount: Decimal
    isWinner: boolean
    createdAt: Date
    _count: UserAuctionHistoryCountAggregateOutputType | null
    _avg: UserAuctionHistoryAvgAggregateOutputType | null
    _sum: UserAuctionHistorySumAggregateOutputType | null
    _min: UserAuctionHistoryMinAggregateOutputType | null
    _max: UserAuctionHistoryMaxAggregateOutputType | null
  }

  type GetUserAuctionHistoryGroupByPayload<T extends UserAuctionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuctionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuctionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuctionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuctionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserAuctionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    auctionId?: boolean
    lastBidAmount?: boolean
    isWinner?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuctionHistory"]>


  export type UserAuctionHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    auctionId?: boolean
    lastBidAmount?: boolean
    isWinner?: boolean
    createdAt?: boolean
  }

  export type UserAuctionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $UserAuctionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuctionHistory"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      auctionId: string
      lastBidAmount: Prisma.Decimal
      isWinner: boolean
      createdAt: Date
    }, ExtArgs["result"]["userAuctionHistory"]>
    composites: {}
  }

  type UserAuctionHistoryGetPayload<S extends boolean | null | undefined | UserAuctionHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserAuctionHistoryPayload, S>

  type UserAuctionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAuctionHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAuctionHistoryCountAggregateInputType | true
    }

  export interface UserAuctionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuctionHistory'], meta: { name: 'UserAuctionHistory' } }
    /**
     * Find zero or one UserAuctionHistory that matches the filter.
     * @param {UserAuctionHistoryFindUniqueArgs} args - Arguments to find a UserAuctionHistory
     * @example
     * // Get one UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuctionHistoryFindUniqueArgs>(args: SelectSubset<T, UserAuctionHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAuctionHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAuctionHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserAuctionHistory
     * @example
     * // Get one UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuctionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuctionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAuctionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryFindFirstArgs} args - Arguments to find a UserAuctionHistory
     * @example
     * // Get one UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuctionHistoryFindFirstArgs>(args?: SelectSubset<T, UserAuctionHistoryFindFirstArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAuctionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryFindFirstOrThrowArgs} args - Arguments to find a UserAuctionHistory
     * @example
     * // Get one UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuctionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuctionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAuctionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuctionHistories
     * const userAuctionHistories = await prisma.userAuctionHistory.findMany()
     * 
     * // Get first 10 UserAuctionHistories
     * const userAuctionHistories = await prisma.userAuctionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuctionHistoryWithIdOnly = await prisma.userAuctionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAuctionHistoryFindManyArgs>(args?: SelectSubset<T, UserAuctionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAuctionHistory.
     * @param {UserAuctionHistoryCreateArgs} args - Arguments to create a UserAuctionHistory.
     * @example
     * // Create one UserAuctionHistory
     * const UserAuctionHistory = await prisma.userAuctionHistory.create({
     *   data: {
     *     // ... data to create a UserAuctionHistory
     *   }
     * })
     * 
     */
    create<T extends UserAuctionHistoryCreateArgs>(args: SelectSubset<T, UserAuctionHistoryCreateArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAuctionHistories.
     * @param {UserAuctionHistoryCreateManyArgs} args - Arguments to create many UserAuctionHistories.
     * @example
     * // Create many UserAuctionHistories
     * const userAuctionHistory = await prisma.userAuctionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuctionHistoryCreateManyArgs>(args?: SelectSubset<T, UserAuctionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAuctionHistory.
     * @param {UserAuctionHistoryDeleteArgs} args - Arguments to delete one UserAuctionHistory.
     * @example
     * // Delete one UserAuctionHistory
     * const UserAuctionHistory = await prisma.userAuctionHistory.delete({
     *   where: {
     *     // ... filter to delete one UserAuctionHistory
     *   }
     * })
     * 
     */
    delete<T extends UserAuctionHistoryDeleteArgs>(args: SelectSubset<T, UserAuctionHistoryDeleteArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAuctionHistory.
     * @param {UserAuctionHistoryUpdateArgs} args - Arguments to update one UserAuctionHistory.
     * @example
     * // Update one UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuctionHistoryUpdateArgs>(args: SelectSubset<T, UserAuctionHistoryUpdateArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAuctionHistories.
     * @param {UserAuctionHistoryDeleteManyArgs} args - Arguments to filter UserAuctionHistories to delete.
     * @example
     * // Delete a few UserAuctionHistories
     * const { count } = await prisma.userAuctionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuctionHistoryDeleteManyArgs>(args?: SelectSubset<T, UserAuctionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuctionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuctionHistories
     * const userAuctionHistory = await prisma.userAuctionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuctionHistoryUpdateManyArgs>(args: SelectSubset<T, UserAuctionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAuctionHistory.
     * @param {UserAuctionHistoryUpsertArgs} args - Arguments to update or create a UserAuctionHistory.
     * @example
     * // Update or create a UserAuctionHistory
     * const userAuctionHistory = await prisma.userAuctionHistory.upsert({
     *   create: {
     *     // ... data to create a UserAuctionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuctionHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserAuctionHistoryUpsertArgs>(args: SelectSubset<T, UserAuctionHistoryUpsertArgs<ExtArgs>>): Prisma__UserAuctionHistoryClient<$Result.GetResult<Prisma.$UserAuctionHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAuctionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryCountArgs} args - Arguments to filter UserAuctionHistories to count.
     * @example
     * // Count the number of UserAuctionHistories
     * const count = await prisma.userAuctionHistory.count({
     *   where: {
     *     // ... the filter for the UserAuctionHistories we want to count
     *   }
     * })
    **/
    count<T extends UserAuctionHistoryCountArgs>(
      args?: Subset<T, UserAuctionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuctionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuctionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuctionHistoryAggregateArgs>(args: Subset<T, UserAuctionHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserAuctionHistoryAggregateType<T>>

    /**
     * Group by UserAuctionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuctionHistoryGroupByArgs} args - Group by arguments.
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
      T extends UserAuctionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuctionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserAuctionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuctionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuctionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuctionHistory model
   */
  readonly fields: UserAuctionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuctionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuctionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserAuctionHistory model
   */ 
  interface UserAuctionHistoryFieldRefs {
    readonly id: FieldRef<"UserAuctionHistory", 'String'>
    readonly userId: FieldRef<"UserAuctionHistory", 'String'>
    readonly auctionId: FieldRef<"UserAuctionHistory", 'String'>
    readonly lastBidAmount: FieldRef<"UserAuctionHistory", 'Decimal'>
    readonly isWinner: FieldRef<"UserAuctionHistory", 'Boolean'>
    readonly createdAt: FieldRef<"UserAuctionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAuctionHistory findUnique
   */
  export type UserAuctionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAuctionHistory to fetch.
     */
    where: UserAuctionHistoryWhereUniqueInput
  }

  /**
   * UserAuctionHistory findUniqueOrThrow
   */
  export type UserAuctionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAuctionHistory to fetch.
     */
    where: UserAuctionHistoryWhereUniqueInput
  }

  /**
   * UserAuctionHistory findFirst
   */
  export type UserAuctionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAuctionHistory to fetch.
     */
    where?: UserAuctionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuctionHistories to fetch.
     */
    orderBy?: UserAuctionHistoryOrderByWithRelationInput | UserAuctionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuctionHistories.
     */
    cursor?: UserAuctionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuctionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuctionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuctionHistories.
     */
    distinct?: UserAuctionHistoryScalarFieldEnum | UserAuctionHistoryScalarFieldEnum[]
  }

  /**
   * UserAuctionHistory findFirstOrThrow
   */
  export type UserAuctionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAuctionHistory to fetch.
     */
    where?: UserAuctionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuctionHistories to fetch.
     */
    orderBy?: UserAuctionHistoryOrderByWithRelationInput | UserAuctionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuctionHistories.
     */
    cursor?: UserAuctionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuctionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuctionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuctionHistories.
     */
    distinct?: UserAuctionHistoryScalarFieldEnum | UserAuctionHistoryScalarFieldEnum[]
  }

  /**
   * UserAuctionHistory findMany
   */
  export type UserAuctionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAuctionHistories to fetch.
     */
    where?: UserAuctionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuctionHistories to fetch.
     */
    orderBy?: UserAuctionHistoryOrderByWithRelationInput | UserAuctionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuctionHistories.
     */
    cursor?: UserAuctionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuctionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuctionHistories.
     */
    skip?: number
    distinct?: UserAuctionHistoryScalarFieldEnum | UserAuctionHistoryScalarFieldEnum[]
  }

  /**
   * UserAuctionHistory create
   */
  export type UserAuctionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuctionHistory.
     */
    data: XOR<UserAuctionHistoryCreateInput, UserAuctionHistoryUncheckedCreateInput>
  }

  /**
   * UserAuctionHistory createMany
   */
  export type UserAuctionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuctionHistories.
     */
    data: UserAuctionHistoryCreateManyInput | UserAuctionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuctionHistory update
   */
  export type UserAuctionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuctionHistory.
     */
    data: XOR<UserAuctionHistoryUpdateInput, UserAuctionHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserAuctionHistory to update.
     */
    where: UserAuctionHistoryWhereUniqueInput
  }

  /**
   * UserAuctionHistory updateMany
   */
  export type UserAuctionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuctionHistories.
     */
    data: XOR<UserAuctionHistoryUpdateManyMutationInput, UserAuctionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserAuctionHistories to update
     */
    where?: UserAuctionHistoryWhereInput
  }

  /**
   * UserAuctionHistory upsert
   */
  export type UserAuctionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuctionHistory to update in case it exists.
     */
    where: UserAuctionHistoryWhereUniqueInput
    /**
     * In case the UserAuctionHistory found by the `where` argument doesn't exist, create a new UserAuctionHistory with this data.
     */
    create: XOR<UserAuctionHistoryCreateInput, UserAuctionHistoryUncheckedCreateInput>
    /**
     * In case the UserAuctionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuctionHistoryUpdateInput, UserAuctionHistoryUncheckedUpdateInput>
  }

  /**
   * UserAuctionHistory delete
   */
  export type UserAuctionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserAuctionHistory to delete.
     */
    where: UserAuctionHistoryWhereUniqueInput
  }

  /**
   * UserAuctionHistory deleteMany
   */
  export type UserAuctionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuctionHistories to delete
     */
    where?: UserAuctionHistoryWhereInput
  }

  /**
   * UserAuctionHistory without action
   */
  export type UserAuctionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuctionHistory
     */
    select?: UserAuctionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuctionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    amount: Decimal | null
    status: $Enums.TransactionStatus | null
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    userId: string | null
    amount: Decimal | null
    status: $Enums.TransactionStatus | null
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    auctionId: number
    userId: number
    amount: number
    status: number
    paymentMethod: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    auctionId?: true
    userId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    auctionId: string
    userId: string
    amount: Decimal
    status: $Enums.TransactionStatus
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>


  export type TransactionSelectScalar = {
    id?: boolean
    auctionId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      userId: string
      amount: Prisma.Decimal
      status: $Enums.TransactionStatus
      paymentMethod: string | null
      paidAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly auctionId: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly paymentMethod: FieldRef<"Transaction", 'String'>
    readonly paidAt: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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


  export const AuctionScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    startingPrice: 'startingPrice',
    finalPrice: 'finalPrice',
    winnerUserId: 'winnerUserId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    userId: 'userId',
    bidAmount: 'bidAmount',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const UserAuctionHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    auctionId: 'auctionId',
    lastBidAmount: 'lastBidAmount',
    isWinner: 'isWinner',
    createdAt: 'createdAt'
  };

  export type UserAuctionHistoryScalarFieldEnum = (typeof UserAuctionHistoryScalarFieldEnum)[keyof typeof UserAuctionHistoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AuctionStatus'
   */
  export type EnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: StringFilter<"Auction"> | string
    itemId?: StringFilter<"Auction"> | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: StringNullableFilter<"Auction"> | string | null
    createdBy?: StringFilter<"Auction"> | string
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    bids?: BidListRelationFilter
    transactions?: TransactionListRelationFilter
    histories?: UserAuctionHistoryListRelationFilter
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    winnerUserId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bids?: BidOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    histories?: UserAuctionHistoryOrderByRelationAggregateInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    itemId?: StringFilter<"Auction"> | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: StringNullableFilter<"Auction"> | string | null
    createdBy?: StringFilter<"Auction"> | string
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    bids?: BidListRelationFilter
    transactions?: TransactionListRelationFilter
    histories?: UserAuctionHistoryListRelationFilter
  }, "id">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    winnerUserId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auction"> | string
    itemId?: StringWithAggregatesFilter<"Auction"> | string
    startTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    status?: EnumAuctionStatusWithAggregatesFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    createdBy?: StringWithAggregatesFilter<"Auction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    bidAmount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    bidAmount?: SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    auctionId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    bidAmount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    bidAmount?: SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    auctionId?: StringWithAggregatesFilter<"Bid"> | string
    userId?: StringWithAggregatesFilter<"Bid"> | string
    bidAmount?: DecimalWithAggregatesFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type UserAuctionHistoryWhereInput = {
    AND?: UserAuctionHistoryWhereInput | UserAuctionHistoryWhereInput[]
    OR?: UserAuctionHistoryWhereInput[]
    NOT?: UserAuctionHistoryWhereInput | UserAuctionHistoryWhereInput[]
    id?: StringFilter<"UserAuctionHistory"> | string
    userId?: StringFilter<"UserAuctionHistory"> | string
    auctionId?: StringFilter<"UserAuctionHistory"> | string
    lastBidAmount?: DecimalFilter<"UserAuctionHistory"> | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFilter<"UserAuctionHistory"> | boolean
    createdAt?: DateTimeFilter<"UserAuctionHistory"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }

  export type UserAuctionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    auctionId?: SortOrder
    lastBidAmount?: SortOrder
    isWinner?: SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type UserAuctionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAuctionHistoryWhereInput | UserAuctionHistoryWhereInput[]
    OR?: UserAuctionHistoryWhereInput[]
    NOT?: UserAuctionHistoryWhereInput | UserAuctionHistoryWhereInput[]
    userId?: StringFilter<"UserAuctionHistory"> | string
    auctionId?: StringFilter<"UserAuctionHistory"> | string
    lastBidAmount?: DecimalFilter<"UserAuctionHistory"> | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFilter<"UserAuctionHistory"> | boolean
    createdAt?: DateTimeFilter<"UserAuctionHistory"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }, "id">

  export type UserAuctionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    auctionId?: SortOrder
    lastBidAmount?: SortOrder
    isWinner?: SortOrder
    createdAt?: SortOrder
    _count?: UserAuctionHistoryCountOrderByAggregateInput
    _avg?: UserAuctionHistoryAvgOrderByAggregateInput
    _max?: UserAuctionHistoryMaxOrderByAggregateInput
    _min?: UserAuctionHistoryMinOrderByAggregateInput
    _sum?: UserAuctionHistorySumOrderByAggregateInput
  }

  export type UserAuctionHistoryScalarWhereWithAggregatesInput = {
    AND?: UserAuctionHistoryScalarWhereWithAggregatesInput | UserAuctionHistoryScalarWhereWithAggregatesInput[]
    OR?: UserAuctionHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserAuctionHistoryScalarWhereWithAggregatesInput | UserAuctionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAuctionHistory"> | string
    userId?: StringWithAggregatesFilter<"UserAuctionHistory"> | string
    auctionId?: StringWithAggregatesFilter<"UserAuctionHistory"> | string
    lastBidAmount?: DecimalWithAggregatesFilter<"UserAuctionHistory"> | Decimal | DecimalJsLike | number | string
    isWinner?: BoolWithAggregatesFilter<"UserAuctionHistory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserAuctionHistory"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    auctionId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    auctionId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    auctionId?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AuctionCreateInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
    transactions?: TransactionCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
    transactions?: TransactionUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateManyInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    auctionId: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    auctionId: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryCreateInput = {
    id?: string
    userId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutHistoriesInput
  }

  export type UserAuctionHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    auctionId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
  }

  export type UserAuctionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type UserAuctionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryCreateManyInput = {
    id?: string
    userId: string
    auctionId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
  }

  export type UserAuctionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    auctionId: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    auctionId: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[]
    notIn?: $Enums.AuctionStatus[]
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type UserAuctionHistoryListRelationFilter = {
    every?: UserAuctionHistoryWhereInput
    some?: UserAuctionHistoryWhereInput
    none?: UserAuctionHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAuctionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    finalPrice?: SortOrder
    winnerUserId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    startingPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    finalPrice?: SortOrder
    winnerUserId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    finalPrice?: SortOrder
    winnerUserId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    startingPrice?: SortOrder
    finalPrice?: SortOrder
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

  export type EnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[]
    notIn?: $Enums.AuctionStatus[]
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type AuctionRelationFilter = {
    is?: AuctionWhereInput
    isNot?: AuctionWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    bidAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    bidAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    bidAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserAuctionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    auctionId?: SortOrder
    lastBidAmount?: SortOrder
    isWinner?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAuctionHistoryAvgOrderByAggregateInput = {
    lastBidAmount?: SortOrder
  }

  export type UserAuctionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    auctionId?: SortOrder
    lastBidAmount?: SortOrder
    isWinner?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAuctionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    auctionId?: SortOrder
    lastBidAmount?: SortOrder
    isWinner?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAuctionHistorySumOrderByAggregateInput = {
    lastBidAmount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
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

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type BidCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutAuctionInput = {
    create?: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput> | TransactionCreateWithoutAuctionInput[] | TransactionUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAuctionInput | TransactionCreateOrConnectWithoutAuctionInput[]
    createMany?: TransactionCreateManyAuctionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserAuctionHistoryCreateNestedManyWithoutAuctionInput = {
    create?: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput> | UserAuctionHistoryCreateWithoutAuctionInput[] | UserAuctionHistoryUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: UserAuctionHistoryCreateOrConnectWithoutAuctionInput | UserAuctionHistoryCreateOrConnectWithoutAuctionInput[]
    createMany?: UserAuctionHistoryCreateManyAuctionInputEnvelope
    connect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput> | TransactionCreateWithoutAuctionInput[] | TransactionUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAuctionInput | TransactionCreateOrConnectWithoutAuctionInput[]
    createMany?: TransactionCreateManyAuctionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserAuctionHistoryUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput> | UserAuctionHistoryCreateWithoutAuctionInput[] | UserAuctionHistoryUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: UserAuctionHistoryCreateOrConnectWithoutAuctionInput | UserAuctionHistoryCreateOrConnectWithoutAuctionInput[]
    createMany?: UserAuctionHistoryCreateManyAuctionInputEnvelope
    connect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAuctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuctionStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BidUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput> | TransactionCreateWithoutAuctionInput[] | TransactionUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAuctionInput | TransactionCreateOrConnectWithoutAuctionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAuctionInput | TransactionUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: TransactionCreateManyAuctionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAuctionInput | TransactionUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAuctionInput | TransactionUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserAuctionHistoryUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput> | UserAuctionHistoryCreateWithoutAuctionInput[] | UserAuctionHistoryUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: UserAuctionHistoryCreateOrConnectWithoutAuctionInput | UserAuctionHistoryCreateOrConnectWithoutAuctionInput[]
    upsert?: UserAuctionHistoryUpsertWithWhereUniqueWithoutAuctionInput | UserAuctionHistoryUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: UserAuctionHistoryCreateManyAuctionInputEnvelope
    set?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    disconnect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    delete?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    connect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    update?: UserAuctionHistoryUpdateWithWhereUniqueWithoutAuctionInput | UserAuctionHistoryUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: UserAuctionHistoryUpdateManyWithWhereWithoutAuctionInput | UserAuctionHistoryUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: UserAuctionHistoryScalarWhereInput | UserAuctionHistoryScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput> | TransactionCreateWithoutAuctionInput[] | TransactionUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAuctionInput | TransactionCreateOrConnectWithoutAuctionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAuctionInput | TransactionUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: TransactionCreateManyAuctionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAuctionInput | TransactionUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAuctionInput | TransactionUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserAuctionHistoryUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput> | UserAuctionHistoryCreateWithoutAuctionInput[] | UserAuctionHistoryUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: UserAuctionHistoryCreateOrConnectWithoutAuctionInput | UserAuctionHistoryCreateOrConnectWithoutAuctionInput[]
    upsert?: UserAuctionHistoryUpsertWithWhereUniqueWithoutAuctionInput | UserAuctionHistoryUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: UserAuctionHistoryCreateManyAuctionInputEnvelope
    set?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    disconnect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    delete?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    connect?: UserAuctionHistoryWhereUniqueInput | UserAuctionHistoryWhereUniqueInput[]
    update?: UserAuctionHistoryUpdateWithWhereUniqueWithoutAuctionInput | UserAuctionHistoryUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: UserAuctionHistoryUpdateManyWithWhereWithoutAuctionInput | UserAuctionHistoryUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: UserAuctionHistoryScalarWhereInput | UserAuctionHistoryScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutBidsInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    connect?: AuctionWhereUniqueInput
  }

  export type AuctionUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    upsert?: AuctionUpsertWithoutBidsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutBidsInput, AuctionUpdateWithoutBidsInput>, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<AuctionCreateWithoutHistoriesInput, AuctionUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutHistoriesInput
    connect?: AuctionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuctionUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<AuctionCreateWithoutHistoriesInput, AuctionUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutHistoriesInput
    upsert?: AuctionUpsertWithoutHistoriesInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutHistoriesInput, AuctionUpdateWithoutHistoriesInput>, AuctionUncheckedUpdateWithoutHistoriesInput>
  }

  export type AuctionCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AuctionCreateWithoutTransactionsInput, AuctionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutTransactionsInput
    connect?: AuctionWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuctionUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AuctionCreateWithoutTransactionsInput, AuctionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutTransactionsInput
    upsert?: AuctionUpsertWithoutTransactionsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutTransactionsInput, AuctionUpdateWithoutTransactionsInput>, AuctionUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedEnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[]
    notIn?: $Enums.AuctionStatus[]
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[]
    notIn?: $Enums.AuctionStatus[]
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
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

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type BidCreateWithoutAuctionInput = {
    id?: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BidUncheckedCreateWithoutAuctionInput = {
    id?: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutAuctionInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidCreateManyAuctionInputEnvelope = {
    data: BidCreateManyAuctionInput | BidCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAuctionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput>
  }

  export type TransactionCreateManyAuctionInputEnvelope = {
    data: TransactionCreateManyAuctionInput | TransactionCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type UserAuctionHistoryCreateWithoutAuctionInput = {
    id?: string
    userId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
  }

  export type UserAuctionHistoryUncheckedCreateWithoutAuctionInput = {
    id?: string
    userId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
  }

  export type UserAuctionHistoryCreateOrConnectWithoutAuctionInput = {
    where: UserAuctionHistoryWhereUniqueInput
    create: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput>
  }

  export type UserAuctionHistoryCreateManyAuctionInputEnvelope = {
    data: UserAuctionHistoryCreateManyAuctionInput | UserAuctionHistoryCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type BidUpsertWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidUpdateWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
  }

  export type BidUpdateManyWithWhereWithoutAuctionInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutAuctionInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    bidAmount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutAuctionInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAuctionInput, TransactionUncheckedUpdateWithoutAuctionInput>
    create: XOR<TransactionCreateWithoutAuctionInput, TransactionUncheckedCreateWithoutAuctionInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAuctionInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAuctionInput, TransactionUncheckedUpdateWithoutAuctionInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAuctionInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAuctionInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    auctionId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    paidAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserAuctionHistoryUpsertWithWhereUniqueWithoutAuctionInput = {
    where: UserAuctionHistoryWhereUniqueInput
    update: XOR<UserAuctionHistoryUpdateWithoutAuctionInput, UserAuctionHistoryUncheckedUpdateWithoutAuctionInput>
    create: XOR<UserAuctionHistoryCreateWithoutAuctionInput, UserAuctionHistoryUncheckedCreateWithoutAuctionInput>
  }

  export type UserAuctionHistoryUpdateWithWhereUniqueWithoutAuctionInput = {
    where: UserAuctionHistoryWhereUniqueInput
    data: XOR<UserAuctionHistoryUpdateWithoutAuctionInput, UserAuctionHistoryUncheckedUpdateWithoutAuctionInput>
  }

  export type UserAuctionHistoryUpdateManyWithWhereWithoutAuctionInput = {
    where: UserAuctionHistoryScalarWhereInput
    data: XOR<UserAuctionHistoryUpdateManyMutationInput, UserAuctionHistoryUncheckedUpdateManyWithoutAuctionInput>
  }

  export type UserAuctionHistoryScalarWhereInput = {
    AND?: UserAuctionHistoryScalarWhereInput | UserAuctionHistoryScalarWhereInput[]
    OR?: UserAuctionHistoryScalarWhereInput[]
    NOT?: UserAuctionHistoryScalarWhereInput | UserAuctionHistoryScalarWhereInput[]
    id?: StringFilter<"UserAuctionHistory"> | string
    userId?: StringFilter<"UserAuctionHistory"> | string
    auctionId?: StringFilter<"UserAuctionHistory"> | string
    lastBidAmount?: DecimalFilter<"UserAuctionHistory"> | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFilter<"UserAuctionHistory"> | boolean
    createdAt?: DateTimeFilter<"UserAuctionHistory"> | Date | string
  }

  export type AuctionCreateWithoutBidsInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutBidsInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutBidsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
  }

  export type AuctionUpsertWithoutBidsInput = {
    update: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutBidsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateWithoutHistoriesInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
    transactions?: TransactionCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutHistoriesInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutHistoriesInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutHistoriesInput, AuctionUncheckedCreateWithoutHistoriesInput>
  }

  export type AuctionUpsertWithoutHistoriesInput = {
    update: XOR<AuctionUpdateWithoutHistoriesInput, AuctionUncheckedUpdateWithoutHistoriesInput>
    create: XOR<AuctionCreateWithoutHistoriesInput, AuctionUncheckedCreateWithoutHistoriesInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutHistoriesInput, AuctionUncheckedUpdateWithoutHistoriesInput>
  }

  export type AuctionUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
    transactions?: TransactionUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateWithoutTransactionsInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutTransactionsInput = {
    id?: string
    itemId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    winnerUserId?: string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
    histories?: UserAuctionHistoryUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutTransactionsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutTransactionsInput, AuctionUncheckedCreateWithoutTransactionsInput>
  }

  export type AuctionUpsertWithoutTransactionsInput = {
    update: XOR<AuctionUpdateWithoutTransactionsInput, AuctionUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AuctionCreateWithoutTransactionsInput, AuctionUncheckedCreateWithoutTransactionsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutTransactionsInput, AuctionUncheckedUpdateWithoutTransactionsInput>
  }

  export type AuctionUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winnerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
    histories?: UserAuctionHistoryUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type BidCreateManyAuctionInput = {
    id?: string
    userId: string
    bidAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TransactionCreateManyAuctionInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserAuctionHistoryCreateManyAuctionInput = {
    id?: string
    userId: string
    lastBidAmount: Decimal | DecimalJsLike | number | string
    isWinner?: boolean
    createdAt?: Date | string
  }

  export type BidUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuctionHistoryUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastBidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isWinner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuctionCountOutputTypeDefaultArgs instead
     */
    export type AuctionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuctionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuctionDefaultArgs instead
     */
    export type AuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuctionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BidDefaultArgs instead
     */
    export type BidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BidDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAuctionHistoryDefaultArgs instead
     */
    export type UserAuctionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAuctionHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>

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