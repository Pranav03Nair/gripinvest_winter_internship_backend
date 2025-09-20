
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model investment_products
 * 
 */
export type investment_products = $Result.DefaultSelection<Prisma.$investment_productsPayload>
/**
 * Model investments
 * 
 */
export type investments = $Result.DefaultSelection<Prisma.$investmentsPayload>
/**
 * Model transaction_logs
 * 
 */
export type transaction_logs = $Result.DefaultSelection<Prisma.$transaction_logsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const risk_level: {
  low: 'low',
  moderate: 'moderate',
  high: 'high'
};

export type risk_level = (typeof risk_level)[keyof typeof risk_level]


export const user_role: {
  user: 'user',
  admin: 'admin'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const investment_type: {
  bond: 'bond',
  fd: 'fd',
  mf: 'mf',
  etf: 'etf',
  other: 'other'
};

export type investment_type = (typeof investment_type)[keyof typeof investment_type]


export const risk_level_type: {
  low: 'low',
  moderate: 'moderate',
  high: 'high'
};

export type risk_level_type = (typeof risk_level_type)[keyof typeof risk_level_type]


export const status_type: {
  active: 'active',
  matured: 'matured',
  cancelled: 'cancelled'
};

export type status_type = (typeof status_type)[keyof typeof status_type]


export const http_type: {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export type http_type = (typeof http_type)[keyof typeof http_type]

}

export type risk_level = $Enums.risk_level

export const risk_level: typeof $Enums.risk_level

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type investment_type = $Enums.investment_type

export const investment_type: typeof $Enums.investment_type

export type risk_level_type = $Enums.risk_level_type

export const risk_level_type: typeof $Enums.risk_level_type

export type status_type = $Enums.status_type

export const status_type: typeof $Enums.status_type

export type http_type = $Enums.http_type

export const http_type: typeof $Enums.http_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment_products`: Exposes CRUD operations for the **investment_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investment_products
    * const investment_products = await prisma.investment_products.findMany()
    * ```
    */
  get investment_products(): Prisma.investment_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investments`: Exposes CRUD operations for the **investments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investments.findMany()
    * ```
    */
  get investments(): Prisma.investmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_logs`: Exposes CRUD operations for the **transaction_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_logs
    * const transaction_logs = await prisma.transaction_logs.findMany()
    * ```
    */
  get transaction_logs(): Prisma.transaction_logsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    users: 'users',
    investment_products: 'investment_products',
    investments: 'investments',
    transaction_logs: 'transaction_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "investment_products" | "investments" | "transaction_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      investment_products: {
        payload: Prisma.$investment_productsPayload<ExtArgs>
        fields: Prisma.investment_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.investment_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.investment_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          findFirst: {
            args: Prisma.investment_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.investment_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          findMany: {
            args: Prisma.investment_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>[]
          }
          create: {
            args: Prisma.investment_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          createMany: {
            args: Prisma.investment_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.investment_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>[]
          }
          delete: {
            args: Prisma.investment_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          update: {
            args: Prisma.investment_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          deleteMany: {
            args: Prisma.investment_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.investment_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.investment_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>[]
          }
          upsert: {
            args: Prisma.investment_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_productsPayload>
          }
          aggregate: {
            args: Prisma.Investment_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment_products>
          }
          groupBy: {
            args: Prisma.investment_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Investment_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.investment_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Investment_productsCountAggregateOutputType> | number
          }
        }
      }
      investments: {
        payload: Prisma.$investmentsPayload<ExtArgs>
        fields: Prisma.investmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.investmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.investmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          findFirst: {
            args: Prisma.investmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.investmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          findMany: {
            args: Prisma.investmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>[]
          }
          create: {
            args: Prisma.investmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          createMany: {
            args: Prisma.investmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.investmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>[]
          }
          delete: {
            args: Prisma.investmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          update: {
            args: Prisma.investmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          deleteMany: {
            args: Prisma.investmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.investmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.investmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>[]
          }
          upsert: {
            args: Prisma.investmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investmentsPayload>
          }
          aggregate: {
            args: Prisma.InvestmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestments>
          }
          groupBy: {
            args: Prisma.investmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.investmentsCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentsCountAggregateOutputType> | number
          }
        }
      }
      transaction_logs: {
        payload: Prisma.$transaction_logsPayload<ExtArgs>
        fields: Prisma.transaction_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          findFirst: {
            args: Prisma.transaction_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          findMany: {
            args: Prisma.transaction_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>[]
          }
          create: {
            args: Prisma.transaction_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          createMany: {
            args: Prisma.transaction_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>[]
          }
          delete: {
            args: Prisma.transaction_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          update: {
            args: Prisma.transaction_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          deleteMany: {
            args: Prisma.transaction_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>[]
          }
          upsert: {
            args: Prisma.transaction_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_logsPayload>
          }
          aggregate: {
            args: Prisma.Transaction_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_logs>
          }
          groupBy: {
            args: Prisma.transaction_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_logsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    investment_products?: investment_productsOmit
    investments?: investmentsOmit
    transaction_logs?: transaction_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    investment_products: number
    investments: number
    transaction_logs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_products?: boolean | UsersCountOutputTypeCountInvestment_productsArgs
    investments?: boolean | UsersCountOutputTypeCountInvestmentsArgs
    transaction_logs?: boolean | UsersCountOutputTypeCountTransaction_logsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvestment_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investment_productsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investmentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransaction_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_logsWhereInput
  }


  /**
   * Count Type Investment_productsCountOutputType
   */

  export type Investment_productsCountOutputType = {
    investments: number
  }

  export type Investment_productsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | Investment_productsCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * Investment_productsCountOutputType without action
   */
  export type Investment_productsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_productsCountOutputType
     */
    select?: Investment_productsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Investment_productsCountOutputType without action
   */
  export type Investment_productsCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role | null
    risk_appetite: $Enums.risk_level | null
    balance: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role | null
    risk_appetite: $Enums.risk_level | null
    balance: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password_hash: number
    role: number
    risk_appetite: number
    balance: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    balance?: true
  }

  export type UsersSumAggregateInputType = {
    balance?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    role?: true
    risk_appetite?: true
    balance?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    role?: true
    risk_appetite?: true
    balance?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    role?: true
    risk_appetite?: true
    balance?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    last_name: string | null
    email: string
    password_hash: string
    role: $Enums.user_role
    risk_appetite: $Enums.risk_level
    balance: Decimal
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    risk_appetite?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    investment_products?: boolean | users$investment_productsArgs<ExtArgs>
    investments?: boolean | users$investmentsArgs<ExtArgs>
    transaction_logs?: boolean | users$transaction_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    risk_appetite?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    risk_appetite?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    risk_appetite?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password_hash" | "role" | "risk_appetite" | "balance" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_products?: boolean | users$investment_productsArgs<ExtArgs>
    investments?: boolean | users$investmentsArgs<ExtArgs>
    transaction_logs?: boolean | users$transaction_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      investment_products: Prisma.$investment_productsPayload<ExtArgs>[]
      investments: Prisma.$investmentsPayload<ExtArgs>[]
      transaction_logs: Prisma.$transaction_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string | null
      email: string
      password_hash: string
      role: $Enums.user_role
      risk_appetite: $Enums.risk_level
      balance: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investment_products<T extends users$investment_productsArgs<ExtArgs> = {}>(args?: Subset<T, users$investment_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends users$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction_logs<T extends users$transaction_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$transaction_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role'>
    readonly risk_appetite: FieldRef<"users", 'risk_level'>
    readonly balance: FieldRef<"users", 'Decimal'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.investment_products
   */
  export type users$investment_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    where?: investment_productsWhereInput
    orderBy?: investment_productsOrderByWithRelationInput | investment_productsOrderByWithRelationInput[]
    cursor?: investment_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Investment_productsScalarFieldEnum | Investment_productsScalarFieldEnum[]
  }

  /**
   * users.investments
   */
  export type users$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    where?: investmentsWhereInput
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    cursor?: investmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * users.transaction_logs
   */
  export type users$transaction_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    where?: transaction_logsWhereInput
    orderBy?: transaction_logsOrderByWithRelationInput | transaction_logsOrderByWithRelationInput[]
    cursor?: transaction_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_logsScalarFieldEnum | Transaction_logsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model investment_products
   */

  export type AggregateInvestment_products = {
    _count: Investment_productsCountAggregateOutputType | null
    _avg: Investment_productsAvgAggregateOutputType | null
    _sum: Investment_productsSumAggregateOutputType | null
    _min: Investment_productsMinAggregateOutputType | null
    _max: Investment_productsMaxAggregateOutputType | null
  }

  export type Investment_productsAvgAggregateOutputType = {
    tenure_months: number | null
    annual_yield: Decimal | null
    min_investment: Decimal | null
    max_investment: Decimal | null
  }

  export type Investment_productsSumAggregateOutputType = {
    tenure_months: number | null
    annual_yield: Decimal | null
    min_investment: Decimal | null
    max_investment: Decimal | null
  }

  export type Investment_productsMinAggregateOutputType = {
    id: string | null
    name: string | null
    investment_type: $Enums.investment_type | null
    tenure_months: number | null
    annual_yield: Decimal | null
    risk_level: $Enums.risk_level_type | null
    min_investment: Decimal | null
    max_investment: Decimal | null
    description: string | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Investment_productsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    investment_type: $Enums.investment_type | null
    tenure_months: number | null
    annual_yield: Decimal | null
    risk_level: $Enums.risk_level_type | null
    min_investment: Decimal | null
    max_investment: Decimal | null
    description: string | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Investment_productsCountAggregateOutputType = {
    id: number
    name: number
    investment_type: number
    tenure_months: number
    annual_yield: number
    risk_level: number
    min_investment: number
    max_investment: number
    description: number
    created_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Investment_productsAvgAggregateInputType = {
    tenure_months?: true
    annual_yield?: true
    min_investment?: true
    max_investment?: true
  }

  export type Investment_productsSumAggregateInputType = {
    tenure_months?: true
    annual_yield?: true
    min_investment?: true
    max_investment?: true
  }

  export type Investment_productsMinAggregateInputType = {
    id?: true
    name?: true
    investment_type?: true
    tenure_months?: true
    annual_yield?: true
    risk_level?: true
    min_investment?: true
    max_investment?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Investment_productsMaxAggregateInputType = {
    id?: true
    name?: true
    investment_type?: true
    tenure_months?: true
    annual_yield?: true
    risk_level?: true
    min_investment?: true
    max_investment?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Investment_productsCountAggregateInputType = {
    id?: true
    name?: true
    investment_type?: true
    tenure_months?: true
    annual_yield?: true
    risk_level?: true
    min_investment?: true
    max_investment?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Investment_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investment_products to aggregate.
     */
    where?: investment_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_products to fetch.
     */
    orderBy?: investment_productsOrderByWithRelationInput | investment_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: investment_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned investment_products
    **/
    _count?: true | Investment_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Investment_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Investment_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Investment_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Investment_productsMaxAggregateInputType
  }

  export type GetInvestment_productsAggregateType<T extends Investment_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment_products[P]>
      : GetScalarType<T[P], AggregateInvestment_products[P]>
  }




  export type investment_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investment_productsWhereInput
    orderBy?: investment_productsOrderByWithAggregationInput | investment_productsOrderByWithAggregationInput[]
    by: Investment_productsScalarFieldEnum[] | Investment_productsScalarFieldEnum
    having?: investment_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Investment_productsCountAggregateInputType | true
    _avg?: Investment_productsAvgAggregateInputType
    _sum?: Investment_productsSumAggregateInputType
    _min?: Investment_productsMinAggregateInputType
    _max?: Investment_productsMaxAggregateInputType
  }

  export type Investment_productsGroupByOutputType = {
    id: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal
    risk_level: $Enums.risk_level_type
    min_investment: Decimal
    max_investment: Decimal | null
    description: string | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Investment_productsCountAggregateOutputType | null
    _avg: Investment_productsAvgAggregateOutputType | null
    _sum: Investment_productsSumAggregateOutputType | null
    _min: Investment_productsMinAggregateOutputType | null
    _max: Investment_productsMaxAggregateOutputType | null
  }

  type GetInvestment_productsGroupByPayload<T extends investment_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Investment_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Investment_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Investment_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Investment_productsGroupByOutputType[P]>
        }
      >
    >


  export type investment_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    investment_type?: boolean
    tenure_months?: boolean
    annual_yield?: boolean
    risk_level?: boolean
    min_investment?: boolean
    max_investment?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | investment_products$usersArgs<ExtArgs>
    investments?: boolean | investment_products$investmentsArgs<ExtArgs>
    _count?: boolean | Investment_productsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment_products"]>

  export type investment_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    investment_type?: boolean
    tenure_months?: boolean
    annual_yield?: boolean
    risk_level?: boolean
    min_investment?: boolean
    max_investment?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | investment_products$usersArgs<ExtArgs>
  }, ExtArgs["result"]["investment_products"]>

  export type investment_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    investment_type?: boolean
    tenure_months?: boolean
    annual_yield?: boolean
    risk_level?: boolean
    min_investment?: boolean
    max_investment?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | investment_products$usersArgs<ExtArgs>
  }, ExtArgs["result"]["investment_products"]>

  export type investment_productsSelectScalar = {
    id?: boolean
    name?: boolean
    investment_type?: boolean
    tenure_months?: boolean
    annual_yield?: boolean
    risk_level?: boolean
    min_investment?: boolean
    max_investment?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type investment_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "investment_type" | "tenure_months" | "annual_yield" | "risk_level" | "min_investment" | "max_investment" | "description" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["investment_products"]>
  export type investment_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | investment_products$usersArgs<ExtArgs>
    investments?: boolean | investment_products$investmentsArgs<ExtArgs>
    _count?: boolean | Investment_productsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type investment_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | investment_products$usersArgs<ExtArgs>
  }
  export type investment_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | investment_products$usersArgs<ExtArgs>
  }

  export type $investment_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "investment_products"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      investments: Prisma.$investmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      investment_type: $Enums.investment_type
      tenure_months: number
      annual_yield: Prisma.Decimal
      risk_level: $Enums.risk_level_type
      min_investment: Prisma.Decimal
      max_investment: Prisma.Decimal | null
      description: string | null
      created_by: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["investment_products"]>
    composites: {}
  }

  type investment_productsGetPayload<S extends boolean | null | undefined | investment_productsDefaultArgs> = $Result.GetResult<Prisma.$investment_productsPayload, S>

  type investment_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<investment_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Investment_productsCountAggregateInputType | true
    }

  export interface investment_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['investment_products'], meta: { name: 'investment_products' } }
    /**
     * Find zero or one Investment_products that matches the filter.
     * @param {investment_productsFindUniqueArgs} args - Arguments to find a Investment_products
     * @example
     * // Get one Investment_products
     * const investment_products = await prisma.investment_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends investment_productsFindUniqueArgs>(args: SelectSubset<T, investment_productsFindUniqueArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {investment_productsFindUniqueOrThrowArgs} args - Arguments to find a Investment_products
     * @example
     * // Get one Investment_products
     * const investment_products = await prisma.investment_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends investment_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, investment_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsFindFirstArgs} args - Arguments to find a Investment_products
     * @example
     * // Get one Investment_products
     * const investment_products = await prisma.investment_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends investment_productsFindFirstArgs>(args?: SelectSubset<T, investment_productsFindFirstArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsFindFirstOrThrowArgs} args - Arguments to find a Investment_products
     * @example
     * // Get one Investment_products
     * const investment_products = await prisma.investment_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends investment_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, investment_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investment_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investment_products
     * const investment_products = await prisma.investment_products.findMany()
     * 
     * // Get first 10 Investment_products
     * const investment_products = await prisma.investment_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investment_productsWithIdOnly = await prisma.investment_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends investment_productsFindManyArgs>(args?: SelectSubset<T, investment_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment_products.
     * @param {investment_productsCreateArgs} args - Arguments to create a Investment_products.
     * @example
     * // Create one Investment_products
     * const Investment_products = await prisma.investment_products.create({
     *   data: {
     *     // ... data to create a Investment_products
     *   }
     * })
     * 
     */
    create<T extends investment_productsCreateArgs>(args: SelectSubset<T, investment_productsCreateArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investment_products.
     * @param {investment_productsCreateManyArgs} args - Arguments to create many Investment_products.
     * @example
     * // Create many Investment_products
     * const investment_products = await prisma.investment_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends investment_productsCreateManyArgs>(args?: SelectSubset<T, investment_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investment_products and returns the data saved in the database.
     * @param {investment_productsCreateManyAndReturnArgs} args - Arguments to create many Investment_products.
     * @example
     * // Create many Investment_products
     * const investment_products = await prisma.investment_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investment_products and only return the `id`
     * const investment_productsWithIdOnly = await prisma.investment_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends investment_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, investment_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment_products.
     * @param {investment_productsDeleteArgs} args - Arguments to delete one Investment_products.
     * @example
     * // Delete one Investment_products
     * const Investment_products = await prisma.investment_products.delete({
     *   where: {
     *     // ... filter to delete one Investment_products
     *   }
     * })
     * 
     */
    delete<T extends investment_productsDeleteArgs>(args: SelectSubset<T, investment_productsDeleteArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment_products.
     * @param {investment_productsUpdateArgs} args - Arguments to update one Investment_products.
     * @example
     * // Update one Investment_products
     * const investment_products = await prisma.investment_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends investment_productsUpdateArgs>(args: SelectSubset<T, investment_productsUpdateArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investment_products.
     * @param {investment_productsDeleteManyArgs} args - Arguments to filter Investment_products to delete.
     * @example
     * // Delete a few Investment_products
     * const { count } = await prisma.investment_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends investment_productsDeleteManyArgs>(args?: SelectSubset<T, investment_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investment_products
     * const investment_products = await prisma.investment_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends investment_productsUpdateManyArgs>(args: SelectSubset<T, investment_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_products and returns the data updated in the database.
     * @param {investment_productsUpdateManyAndReturnArgs} args - Arguments to update many Investment_products.
     * @example
     * // Update many Investment_products
     * const investment_products = await prisma.investment_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investment_products and only return the `id`
     * const investment_productsWithIdOnly = await prisma.investment_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends investment_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, investment_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment_products.
     * @param {investment_productsUpsertArgs} args - Arguments to update or create a Investment_products.
     * @example
     * // Update or create a Investment_products
     * const investment_products = await prisma.investment_products.upsert({
     *   create: {
     *     // ... data to create a Investment_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment_products we want to update
     *   }
     * })
     */
    upsert<T extends investment_productsUpsertArgs>(args: SelectSubset<T, investment_productsUpsertArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investment_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsCountArgs} args - Arguments to filter Investment_products to count.
     * @example
     * // Count the number of Investment_products
     * const count = await prisma.investment_products.count({
     *   where: {
     *     // ... the filter for the Investment_products we want to count
     *   }
     * })
    **/
    count<T extends investment_productsCountArgs>(
      args?: Subset<T, investment_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Investment_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Investment_productsAggregateArgs>(args: Subset<T, Investment_productsAggregateArgs>): Prisma.PrismaPromise<GetInvestment_productsAggregateType<T>>

    /**
     * Group by Investment_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_productsGroupByArgs} args - Group by arguments.
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
      T extends investment_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: investment_productsGroupByArgs['orderBy'] }
        : { orderBy?: investment_productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, investment_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestment_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the investment_products model
   */
  readonly fields: investment_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for investment_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__investment_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends investment_products$usersArgs<ExtArgs> = {}>(args?: Subset<T, investment_products$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investments<T extends investment_products$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, investment_products$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the investment_products model
   */
  interface investment_productsFieldRefs {
    readonly id: FieldRef<"investment_products", 'String'>
    readonly name: FieldRef<"investment_products", 'String'>
    readonly investment_type: FieldRef<"investment_products", 'investment_type'>
    readonly tenure_months: FieldRef<"investment_products", 'Int'>
    readonly annual_yield: FieldRef<"investment_products", 'Decimal'>
    readonly risk_level: FieldRef<"investment_products", 'risk_level_type'>
    readonly min_investment: FieldRef<"investment_products", 'Decimal'>
    readonly max_investment: FieldRef<"investment_products", 'Decimal'>
    readonly description: FieldRef<"investment_products", 'String'>
    readonly created_by: FieldRef<"investment_products", 'String'>
    readonly created_at: FieldRef<"investment_products", 'DateTime'>
    readonly updated_at: FieldRef<"investment_products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * investment_products findUnique
   */
  export type investment_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter, which investment_products to fetch.
     */
    where: investment_productsWhereUniqueInput
  }

  /**
   * investment_products findUniqueOrThrow
   */
  export type investment_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter, which investment_products to fetch.
     */
    where: investment_productsWhereUniqueInput
  }

  /**
   * investment_products findFirst
   */
  export type investment_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter, which investment_products to fetch.
     */
    where?: investment_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_products to fetch.
     */
    orderBy?: investment_productsOrderByWithRelationInput | investment_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investment_products.
     */
    cursor?: investment_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investment_products.
     */
    distinct?: Investment_productsScalarFieldEnum | Investment_productsScalarFieldEnum[]
  }

  /**
   * investment_products findFirstOrThrow
   */
  export type investment_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter, which investment_products to fetch.
     */
    where?: investment_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_products to fetch.
     */
    orderBy?: investment_productsOrderByWithRelationInput | investment_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investment_products.
     */
    cursor?: investment_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investment_products.
     */
    distinct?: Investment_productsScalarFieldEnum | Investment_productsScalarFieldEnum[]
  }

  /**
   * investment_products findMany
   */
  export type investment_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter, which investment_products to fetch.
     */
    where?: investment_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_products to fetch.
     */
    orderBy?: investment_productsOrderByWithRelationInput | investment_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing investment_products.
     */
    cursor?: investment_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_products.
     */
    skip?: number
    distinct?: Investment_productsScalarFieldEnum | Investment_productsScalarFieldEnum[]
  }

  /**
   * investment_products create
   */
  export type investment_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a investment_products.
     */
    data: XOR<investment_productsCreateInput, investment_productsUncheckedCreateInput>
  }

  /**
   * investment_products createMany
   */
  export type investment_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many investment_products.
     */
    data: investment_productsCreateManyInput | investment_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * investment_products createManyAndReturn
   */
  export type investment_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * The data used to create many investment_products.
     */
    data: investment_productsCreateManyInput | investment_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * investment_products update
   */
  export type investment_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a investment_products.
     */
    data: XOR<investment_productsUpdateInput, investment_productsUncheckedUpdateInput>
    /**
     * Choose, which investment_products to update.
     */
    where: investment_productsWhereUniqueInput
  }

  /**
   * investment_products updateMany
   */
  export type investment_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update investment_products.
     */
    data: XOR<investment_productsUpdateManyMutationInput, investment_productsUncheckedUpdateManyInput>
    /**
     * Filter which investment_products to update
     */
    where?: investment_productsWhereInput
    /**
     * Limit how many investment_products to update.
     */
    limit?: number
  }

  /**
   * investment_products updateManyAndReturn
   */
  export type investment_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * The data used to update investment_products.
     */
    data: XOR<investment_productsUpdateManyMutationInput, investment_productsUncheckedUpdateManyInput>
    /**
     * Filter which investment_products to update
     */
    where?: investment_productsWhereInput
    /**
     * Limit how many investment_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * investment_products upsert
   */
  export type investment_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the investment_products to update in case it exists.
     */
    where: investment_productsWhereUniqueInput
    /**
     * In case the investment_products found by the `where` argument doesn't exist, create a new investment_products with this data.
     */
    create: XOR<investment_productsCreateInput, investment_productsUncheckedCreateInput>
    /**
     * In case the investment_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<investment_productsUpdateInput, investment_productsUncheckedUpdateInput>
  }

  /**
   * investment_products delete
   */
  export type investment_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
    /**
     * Filter which investment_products to delete.
     */
    where: investment_productsWhereUniqueInput
  }

  /**
   * investment_products deleteMany
   */
  export type investment_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investment_products to delete
     */
    where?: investment_productsWhereInput
    /**
     * Limit how many investment_products to delete.
     */
    limit?: number
  }

  /**
   * investment_products.users
   */
  export type investment_products$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * investment_products.investments
   */
  export type investment_products$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    where?: investmentsWhereInput
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    cursor?: investmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * investment_products without action
   */
  export type investment_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_products
     */
    select?: investment_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_products
     */
    omit?: investment_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_productsInclude<ExtArgs> | null
  }


  /**
   * Model investments
   */

  export type AggregateInvestments = {
    _count: InvestmentsCountAggregateOutputType | null
    _avg: InvestmentsAvgAggregateOutputType | null
    _sum: InvestmentsSumAggregateOutputType | null
    _min: InvestmentsMinAggregateOutputType | null
    _max: InvestmentsMaxAggregateOutputType | null
  }

  export type InvestmentsAvgAggregateOutputType = {
    amount: Decimal | null
    expected_return: Decimal | null
  }

  export type InvestmentsSumAggregateOutputType = {
    amount: Decimal | null
    expected_return: Decimal | null
  }

  export type InvestmentsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    product_id: string | null
    amount: Decimal | null
    invested_at: Date | null
    status: $Enums.status_type | null
    expected_return: Decimal | null
    maturity_date: Date | null
  }

  export type InvestmentsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    product_id: string | null
    amount: Decimal | null
    invested_at: Date | null
    status: $Enums.status_type | null
    expected_return: Decimal | null
    maturity_date: Date | null
  }

  export type InvestmentsCountAggregateOutputType = {
    id: number
    user_id: number
    product_id: number
    amount: number
    invested_at: number
    status: number
    expected_return: number
    maturity_date: number
    _all: number
  }


  export type InvestmentsAvgAggregateInputType = {
    amount?: true
    expected_return?: true
  }

  export type InvestmentsSumAggregateInputType = {
    amount?: true
    expected_return?: true
  }

  export type InvestmentsMinAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    amount?: true
    invested_at?: true
    status?: true
    expected_return?: true
    maturity_date?: true
  }

  export type InvestmentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    amount?: true
    invested_at?: true
    status?: true
    expected_return?: true
    maturity_date?: true
  }

  export type InvestmentsCountAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    amount?: true
    invested_at?: true
    status?: true
    expected_return?: true
    maturity_date?: true
    _all?: true
  }

  export type InvestmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investments to aggregate.
     */
    where?: investmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investments to fetch.
     */
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: investmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned investments
    **/
    _count?: true | InvestmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentsMaxAggregateInputType
  }

  export type GetInvestmentsAggregateType<T extends InvestmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestments[P]>
      : GetScalarType<T[P], AggregateInvestments[P]>
  }




  export type investmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investmentsWhereInput
    orderBy?: investmentsOrderByWithAggregationInput | investmentsOrderByWithAggregationInput[]
    by: InvestmentsScalarFieldEnum[] | InvestmentsScalarFieldEnum
    having?: investmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentsCountAggregateInputType | true
    _avg?: InvestmentsAvgAggregateInputType
    _sum?: InvestmentsSumAggregateInputType
    _min?: InvestmentsMinAggregateInputType
    _max?: InvestmentsMaxAggregateInputType
  }

  export type InvestmentsGroupByOutputType = {
    id: string
    user_id: string
    product_id: string
    amount: Decimal
    invested_at: Date | null
    status: $Enums.status_type | null
    expected_return: Decimal | null
    maturity_date: Date | null
    _count: InvestmentsCountAggregateOutputType | null
    _avg: InvestmentsAvgAggregateOutputType | null
    _sum: InvestmentsSumAggregateOutputType | null
    _min: InvestmentsMinAggregateOutputType | null
    _max: InvestmentsMaxAggregateOutputType | null
  }

  type GetInvestmentsGroupByPayload<T extends investmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentsGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentsGroupByOutputType[P]>
        }
      >
    >


  export type investmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    amount?: boolean
    invested_at?: boolean
    status?: boolean
    expected_return?: boolean
    maturity_date?: boolean
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type investmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    amount?: boolean
    invested_at?: boolean
    status?: boolean
    expected_return?: boolean
    maturity_date?: boolean
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type investmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    amount?: boolean
    invested_at?: boolean
    status?: boolean
    expected_return?: boolean
    maturity_date?: boolean
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type investmentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    amount?: boolean
    invested_at?: boolean
    status?: boolean
    expected_return?: boolean
    maturity_date?: boolean
  }

  export type investmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "product_id" | "amount" | "invested_at" | "status" | "expected_return" | "maturity_date", ExtArgs["result"]["investments"]>
  export type investmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type investmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type investmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_products?: boolean | investment_productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $investmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "investments"
    objects: {
      investment_products: Prisma.$investment_productsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      product_id: string
      amount: Prisma.Decimal
      invested_at: Date | null
      status: $Enums.status_type | null
      expected_return: Prisma.Decimal | null
      maturity_date: Date | null
    }, ExtArgs["result"]["investments"]>
    composites: {}
  }

  type investmentsGetPayload<S extends boolean | null | undefined | investmentsDefaultArgs> = $Result.GetResult<Prisma.$investmentsPayload, S>

  type investmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<investmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentsCountAggregateInputType | true
    }

  export interface investmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['investments'], meta: { name: 'investments' } }
    /**
     * Find zero or one Investments that matches the filter.
     * @param {investmentsFindUniqueArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends investmentsFindUniqueArgs>(args: SelectSubset<T, investmentsFindUniqueArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {investmentsFindUniqueOrThrowArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends investmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, investmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsFindFirstArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends investmentsFindFirstArgs>(args?: SelectSubset<T, investmentsFindFirstArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsFindFirstOrThrowArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends investmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, investmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investments.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentsWithIdOnly = await prisma.investments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends investmentsFindManyArgs>(args?: SelectSubset<T, investmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investments.
     * @param {investmentsCreateArgs} args - Arguments to create a Investments.
     * @example
     * // Create one Investments
     * const Investments = await prisma.investments.create({
     *   data: {
     *     // ... data to create a Investments
     *   }
     * })
     * 
     */
    create<T extends investmentsCreateArgs>(args: SelectSubset<T, investmentsCreateArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {investmentsCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investments = await prisma.investments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends investmentsCreateManyArgs>(args?: SelectSubset<T, investmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {investmentsCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investments = await prisma.investments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentsWithIdOnly = await prisma.investments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends investmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, investmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investments.
     * @param {investmentsDeleteArgs} args - Arguments to delete one Investments.
     * @example
     * // Delete one Investments
     * const Investments = await prisma.investments.delete({
     *   where: {
     *     // ... filter to delete one Investments
     *   }
     * })
     * 
     */
    delete<T extends investmentsDeleteArgs>(args: SelectSubset<T, investmentsDeleteArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investments.
     * @param {investmentsUpdateArgs} args - Arguments to update one Investments.
     * @example
     * // Update one Investments
     * const investments = await prisma.investments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends investmentsUpdateArgs>(args: SelectSubset<T, investmentsUpdateArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {investmentsDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends investmentsDeleteManyArgs>(args?: SelectSubset<T, investmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investments = await prisma.investments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends investmentsUpdateManyArgs>(args: SelectSubset<T, investmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {investmentsUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investments = await prisma.investments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentsWithIdOnly = await prisma.investments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends investmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, investmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investments.
     * @param {investmentsUpsertArgs} args - Arguments to update or create a Investments.
     * @example
     * // Update or create a Investments
     * const investments = await prisma.investments.upsert({
     *   create: {
     *     // ... data to create a Investments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investments we want to update
     *   }
     * })
     */
    upsert<T extends investmentsUpsertArgs>(args: SelectSubset<T, investmentsUpsertArgs<ExtArgs>>): Prisma__investmentsClient<$Result.GetResult<Prisma.$investmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investments.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends investmentsCountArgs>(
      args?: Subset<T, investmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentsAggregateArgs>(args: Subset<T, InvestmentsAggregateArgs>): Prisma.PrismaPromise<GetInvestmentsAggregateType<T>>

    /**
     * Group by Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investmentsGroupByArgs} args - Group by arguments.
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
      T extends investmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: investmentsGroupByArgs['orderBy'] }
        : { orderBy?: investmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, investmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the investments model
   */
  readonly fields: investmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for investments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__investmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investment_products<T extends investment_productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, investment_productsDefaultArgs<ExtArgs>>): Prisma__investment_productsClient<$Result.GetResult<Prisma.$investment_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the investments model
   */
  interface investmentsFieldRefs {
    readonly id: FieldRef<"investments", 'String'>
    readonly user_id: FieldRef<"investments", 'String'>
    readonly product_id: FieldRef<"investments", 'String'>
    readonly amount: FieldRef<"investments", 'Decimal'>
    readonly invested_at: FieldRef<"investments", 'DateTime'>
    readonly status: FieldRef<"investments", 'status_type'>
    readonly expected_return: FieldRef<"investments", 'Decimal'>
    readonly maturity_date: FieldRef<"investments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * investments findUnique
   */
  export type investmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter, which investments to fetch.
     */
    where: investmentsWhereUniqueInput
  }

  /**
   * investments findUniqueOrThrow
   */
  export type investmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter, which investments to fetch.
     */
    where: investmentsWhereUniqueInput
  }

  /**
   * investments findFirst
   */
  export type investmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter, which investments to fetch.
     */
    where?: investmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investments to fetch.
     */
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investments.
     */
    cursor?: investmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investments.
     */
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * investments findFirstOrThrow
   */
  export type investmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter, which investments to fetch.
     */
    where?: investmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investments to fetch.
     */
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investments.
     */
    cursor?: investmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investments.
     */
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * investments findMany
   */
  export type investmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter, which investments to fetch.
     */
    where?: investmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investments to fetch.
     */
    orderBy?: investmentsOrderByWithRelationInput | investmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing investments.
     */
    cursor?: investmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investments.
     */
    skip?: number
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * investments create
   */
  export type investmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a investments.
     */
    data: XOR<investmentsCreateInput, investmentsUncheckedCreateInput>
  }

  /**
   * investments createMany
   */
  export type investmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many investments.
     */
    data: investmentsCreateManyInput | investmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * investments createManyAndReturn
   */
  export type investmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * The data used to create many investments.
     */
    data: investmentsCreateManyInput | investmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * investments update
   */
  export type investmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a investments.
     */
    data: XOR<investmentsUpdateInput, investmentsUncheckedUpdateInput>
    /**
     * Choose, which investments to update.
     */
    where: investmentsWhereUniqueInput
  }

  /**
   * investments updateMany
   */
  export type investmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update investments.
     */
    data: XOR<investmentsUpdateManyMutationInput, investmentsUncheckedUpdateManyInput>
    /**
     * Filter which investments to update
     */
    where?: investmentsWhereInput
    /**
     * Limit how many investments to update.
     */
    limit?: number
  }

  /**
   * investments updateManyAndReturn
   */
  export type investmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * The data used to update investments.
     */
    data: XOR<investmentsUpdateManyMutationInput, investmentsUncheckedUpdateManyInput>
    /**
     * Filter which investments to update
     */
    where?: investmentsWhereInput
    /**
     * Limit how many investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * investments upsert
   */
  export type investmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the investments to update in case it exists.
     */
    where: investmentsWhereUniqueInput
    /**
     * In case the investments found by the `where` argument doesn't exist, create a new investments with this data.
     */
    create: XOR<investmentsCreateInput, investmentsUncheckedCreateInput>
    /**
     * In case the investments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<investmentsUpdateInput, investmentsUncheckedUpdateInput>
  }

  /**
   * investments delete
   */
  export type investmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
    /**
     * Filter which investments to delete.
     */
    where: investmentsWhereUniqueInput
  }

  /**
   * investments deleteMany
   */
  export type investmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investments to delete
     */
    where?: investmentsWhereInput
    /**
     * Limit how many investments to delete.
     */
    limit?: number
  }

  /**
   * investments without action
   */
  export type investmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investments
     */
    select?: investmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investments
     */
    omit?: investmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investmentsInclude<ExtArgs> | null
  }


  /**
   * Model transaction_logs
   */

  export type AggregateTransaction_logs = {
    _count: Transaction_logsCountAggregateOutputType | null
    _avg: Transaction_logsAvgAggregateOutputType | null
    _sum: Transaction_logsSumAggregateOutputType | null
    _min: Transaction_logsMinAggregateOutputType | null
    _max: Transaction_logsMaxAggregateOutputType | null
  }

  export type Transaction_logsAvgAggregateOutputType = {
    id: number | null
    status_code: number | null
  }

  export type Transaction_logsSumAggregateOutputType = {
    id: bigint | null
    status_code: number | null
  }

  export type Transaction_logsMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    email: string | null
    endpoint: string | null
    http_method: $Enums.http_type | null
    status_code: number | null
    error_message: string | null
    created_at: Date | null
  }

  export type Transaction_logsMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    email: string | null
    endpoint: string | null
    http_method: $Enums.http_type | null
    status_code: number | null
    error_message: string | null
    created_at: Date | null
  }

  export type Transaction_logsCountAggregateOutputType = {
    id: number
    user_id: number
    email: number
    endpoint: number
    http_method: number
    status_code: number
    error_message: number
    created_at: number
    _all: number
  }


  export type Transaction_logsAvgAggregateInputType = {
    id?: true
    status_code?: true
  }

  export type Transaction_logsSumAggregateInputType = {
    id?: true
    status_code?: true
  }

  export type Transaction_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    endpoint?: true
    http_method?: true
    status_code?: true
    error_message?: true
    created_at?: true
  }

  export type Transaction_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    endpoint?: true
    http_method?: true
    status_code?: true
    error_message?: true
    created_at?: true
  }

  export type Transaction_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    endpoint?: true
    http_method?: true
    status_code?: true
    error_message?: true
    created_at?: true
    _all?: true
  }

  export type Transaction_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_logs to aggregate.
     */
    where?: transaction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_logs to fetch.
     */
    orderBy?: transaction_logsOrderByWithRelationInput | transaction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_logs
    **/
    _count?: true | Transaction_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_logsMaxAggregateInputType
  }

  export type GetTransaction_logsAggregateType<T extends Transaction_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_logs[P]>
      : GetScalarType<T[P], AggregateTransaction_logs[P]>
  }




  export type transaction_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_logsWhereInput
    orderBy?: transaction_logsOrderByWithAggregationInput | transaction_logsOrderByWithAggregationInput[]
    by: Transaction_logsScalarFieldEnum[] | Transaction_logsScalarFieldEnum
    having?: transaction_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_logsCountAggregateInputType | true
    _avg?: Transaction_logsAvgAggregateInputType
    _sum?: Transaction_logsSumAggregateInputType
    _min?: Transaction_logsMinAggregateInputType
    _max?: Transaction_logsMaxAggregateInputType
  }

  export type Transaction_logsGroupByOutputType = {
    id: bigint
    user_id: string | null
    email: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message: string | null
    created_at: Date | null
    _count: Transaction_logsCountAggregateOutputType | null
    _avg: Transaction_logsAvgAggregateOutputType | null
    _sum: Transaction_logsSumAggregateOutputType | null
    _min: Transaction_logsMinAggregateOutputType | null
    _max: Transaction_logsMaxAggregateOutputType | null
  }

  type GetTransaction_logsGroupByPayload<T extends transaction_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_logsGroupByOutputType[P]>
        }
      >
    >


  export type transaction_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    endpoint?: boolean
    http_method?: boolean
    status_code?: boolean
    error_message?: boolean
    created_at?: boolean
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_logs"]>

  export type transaction_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    endpoint?: boolean
    http_method?: boolean
    status_code?: boolean
    error_message?: boolean
    created_at?: boolean
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_logs"]>

  export type transaction_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    endpoint?: boolean
    http_method?: boolean
    status_code?: boolean
    error_message?: boolean
    created_at?: boolean
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_logs"]>

  export type transaction_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    email?: boolean
    endpoint?: boolean
    http_method?: boolean
    status_code?: boolean
    error_message?: boolean
    created_at?: boolean
  }

  export type transaction_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "email" | "endpoint" | "http_method" | "status_code" | "error_message" | "created_at", ExtArgs["result"]["transaction_logs"]>
  export type transaction_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }
  export type transaction_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }
  export type transaction_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | transaction_logs$usersArgs<ExtArgs>
  }

  export type $transaction_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string | null
      email: string | null
      endpoint: string
      http_method: $Enums.http_type
      status_code: number
      error_message: string | null
      created_at: Date | null
    }, ExtArgs["result"]["transaction_logs"]>
    composites: {}
  }

  type transaction_logsGetPayload<S extends boolean | null | undefined | transaction_logsDefaultArgs> = $Result.GetResult<Prisma.$transaction_logsPayload, S>

  type transaction_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_logsCountAggregateInputType | true
    }

  export interface transaction_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_logs'], meta: { name: 'transaction_logs' } }
    /**
     * Find zero or one Transaction_logs that matches the filter.
     * @param {transaction_logsFindUniqueArgs} args - Arguments to find a Transaction_logs
     * @example
     * // Get one Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_logsFindUniqueArgs>(args: SelectSubset<T, transaction_logsFindUniqueArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_logsFindUniqueOrThrowArgs} args - Arguments to find a Transaction_logs
     * @example
     * // Get one Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsFindFirstArgs} args - Arguments to find a Transaction_logs
     * @example
     * // Get one Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_logsFindFirstArgs>(args?: SelectSubset<T, transaction_logsFindFirstArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsFindFirstOrThrowArgs} args - Arguments to find a Transaction_logs
     * @example
     * // Get one Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findMany()
     * 
     * // Get first 10 Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_logsWithIdOnly = await prisma.transaction_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_logsFindManyArgs>(args?: SelectSubset<T, transaction_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_logs.
     * @param {transaction_logsCreateArgs} args - Arguments to create a Transaction_logs.
     * @example
     * // Create one Transaction_logs
     * const Transaction_logs = await prisma.transaction_logs.create({
     *   data: {
     *     // ... data to create a Transaction_logs
     *   }
     * })
     * 
     */
    create<T extends transaction_logsCreateArgs>(args: SelectSubset<T, transaction_logsCreateArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_logs.
     * @param {transaction_logsCreateManyArgs} args - Arguments to create many Transaction_logs.
     * @example
     * // Create many Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_logsCreateManyArgs>(args?: SelectSubset<T, transaction_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_logs and returns the data saved in the database.
     * @param {transaction_logsCreateManyAndReturnArgs} args - Arguments to create many Transaction_logs.
     * @example
     * // Create many Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_logs and only return the `id`
     * const transaction_logsWithIdOnly = await prisma.transaction_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_logs.
     * @param {transaction_logsDeleteArgs} args - Arguments to delete one Transaction_logs.
     * @example
     * // Delete one Transaction_logs
     * const Transaction_logs = await prisma.transaction_logs.delete({
     *   where: {
     *     // ... filter to delete one Transaction_logs
     *   }
     * })
     * 
     */
    delete<T extends transaction_logsDeleteArgs>(args: SelectSubset<T, transaction_logsDeleteArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_logs.
     * @param {transaction_logsUpdateArgs} args - Arguments to update one Transaction_logs.
     * @example
     * // Update one Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_logsUpdateArgs>(args: SelectSubset<T, transaction_logsUpdateArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_logs.
     * @param {transaction_logsDeleteManyArgs} args - Arguments to filter Transaction_logs to delete.
     * @example
     * // Delete a few Transaction_logs
     * const { count } = await prisma.transaction_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_logsDeleteManyArgs>(args?: SelectSubset<T, transaction_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_logsUpdateManyArgs>(args: SelectSubset<T, transaction_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_logs and returns the data updated in the database.
     * @param {transaction_logsUpdateManyAndReturnArgs} args - Arguments to update many Transaction_logs.
     * @example
     * // Update many Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_logs and only return the `id`
     * const transaction_logsWithIdOnly = await prisma.transaction_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaction_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_logs.
     * @param {transaction_logsUpsertArgs} args - Arguments to update or create a Transaction_logs.
     * @example
     * // Update or create a Transaction_logs
     * const transaction_logs = await prisma.transaction_logs.upsert({
     *   create: {
     *     // ... data to create a Transaction_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_logs we want to update
     *   }
     * })
     */
    upsert<T extends transaction_logsUpsertArgs>(args: SelectSubset<T, transaction_logsUpsertArgs<ExtArgs>>): Prisma__transaction_logsClient<$Result.GetResult<Prisma.$transaction_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsCountArgs} args - Arguments to filter Transaction_logs to count.
     * @example
     * // Count the number of Transaction_logs
     * const count = await prisma.transaction_logs.count({
     *   where: {
     *     // ... the filter for the Transaction_logs we want to count
     *   }
     * })
    **/
    count<T extends transaction_logsCountArgs>(
      args?: Subset<T, transaction_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_logsAggregateArgs>(args: Subset<T, Transaction_logsAggregateArgs>): Prisma.PrismaPromise<GetTransaction_logsAggregateType<T>>

    /**
     * Group by Transaction_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_logsGroupByArgs} args - Group by arguments.
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
      T extends transaction_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_logsGroupByArgs['orderBy'] }
        : { orderBy?: transaction_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaction_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_logs model
   */
  readonly fields: transaction_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends transaction_logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, transaction_logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction_logs model
   */
  interface transaction_logsFieldRefs {
    readonly id: FieldRef<"transaction_logs", 'BigInt'>
    readonly user_id: FieldRef<"transaction_logs", 'String'>
    readonly email: FieldRef<"transaction_logs", 'String'>
    readonly endpoint: FieldRef<"transaction_logs", 'String'>
    readonly http_method: FieldRef<"transaction_logs", 'http_type'>
    readonly status_code: FieldRef<"transaction_logs", 'Int'>
    readonly error_message: FieldRef<"transaction_logs", 'String'>
    readonly created_at: FieldRef<"transaction_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction_logs findUnique
   */
  export type transaction_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter, which transaction_logs to fetch.
     */
    where: transaction_logsWhereUniqueInput
  }

  /**
   * transaction_logs findUniqueOrThrow
   */
  export type transaction_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter, which transaction_logs to fetch.
     */
    where: transaction_logsWhereUniqueInput
  }

  /**
   * transaction_logs findFirst
   */
  export type transaction_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter, which transaction_logs to fetch.
     */
    where?: transaction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_logs to fetch.
     */
    orderBy?: transaction_logsOrderByWithRelationInput | transaction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_logs.
     */
    cursor?: transaction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_logs.
     */
    distinct?: Transaction_logsScalarFieldEnum | Transaction_logsScalarFieldEnum[]
  }

  /**
   * transaction_logs findFirstOrThrow
   */
  export type transaction_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter, which transaction_logs to fetch.
     */
    where?: transaction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_logs to fetch.
     */
    orderBy?: transaction_logsOrderByWithRelationInput | transaction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_logs.
     */
    cursor?: transaction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_logs.
     */
    distinct?: Transaction_logsScalarFieldEnum | Transaction_logsScalarFieldEnum[]
  }

  /**
   * transaction_logs findMany
   */
  export type transaction_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter, which transaction_logs to fetch.
     */
    where?: transaction_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_logs to fetch.
     */
    orderBy?: transaction_logsOrderByWithRelationInput | transaction_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_logs.
     */
    cursor?: transaction_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_logs.
     */
    skip?: number
    distinct?: Transaction_logsScalarFieldEnum | Transaction_logsScalarFieldEnum[]
  }

  /**
   * transaction_logs create
   */
  export type transaction_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_logs.
     */
    data: XOR<transaction_logsCreateInput, transaction_logsUncheckedCreateInput>
  }

  /**
   * transaction_logs createMany
   */
  export type transaction_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_logs.
     */
    data: transaction_logsCreateManyInput | transaction_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_logs createManyAndReturn
   */
  export type transaction_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_logs.
     */
    data: transaction_logsCreateManyInput | transaction_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_logs update
   */
  export type transaction_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_logs.
     */
    data: XOR<transaction_logsUpdateInput, transaction_logsUncheckedUpdateInput>
    /**
     * Choose, which transaction_logs to update.
     */
    where: transaction_logsWhereUniqueInput
  }

  /**
   * transaction_logs updateMany
   */
  export type transaction_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_logs.
     */
    data: XOR<transaction_logsUpdateManyMutationInput, transaction_logsUncheckedUpdateManyInput>
    /**
     * Filter which transaction_logs to update
     */
    where?: transaction_logsWhereInput
    /**
     * Limit how many transaction_logs to update.
     */
    limit?: number
  }

  /**
   * transaction_logs updateManyAndReturn
   */
  export type transaction_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * The data used to update transaction_logs.
     */
    data: XOR<transaction_logsUpdateManyMutationInput, transaction_logsUncheckedUpdateManyInput>
    /**
     * Filter which transaction_logs to update
     */
    where?: transaction_logsWhereInput
    /**
     * Limit how many transaction_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_logs upsert
   */
  export type transaction_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_logs to update in case it exists.
     */
    where: transaction_logsWhereUniqueInput
    /**
     * In case the transaction_logs found by the `where` argument doesn't exist, create a new transaction_logs with this data.
     */
    create: XOR<transaction_logsCreateInput, transaction_logsUncheckedCreateInput>
    /**
     * In case the transaction_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_logsUpdateInput, transaction_logsUncheckedUpdateInput>
  }

  /**
   * transaction_logs delete
   */
  export type transaction_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
    /**
     * Filter which transaction_logs to delete.
     */
    where: transaction_logsWhereUniqueInput
  }

  /**
   * transaction_logs deleteMany
   */
  export type transaction_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_logs to delete
     */
    where?: transaction_logsWhereInput
    /**
     * Limit how many transaction_logs to delete.
     */
    limit?: number
  }

  /**
   * transaction_logs.users
   */
  export type transaction_logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * transaction_logs without action
   */
  export type transaction_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_logs
     */
    select?: transaction_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_logs
     */
    omit?: transaction_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_logsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    risk_appetite: 'risk_appetite',
    balance: 'balance',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Investment_productsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    investment_type: 'investment_type',
    tenure_months: 'tenure_months',
    annual_yield: 'annual_yield',
    risk_level: 'risk_level',
    min_investment: 'min_investment',
    max_investment: 'max_investment',
    description: 'description',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Investment_productsScalarFieldEnum = (typeof Investment_productsScalarFieldEnum)[keyof typeof Investment_productsScalarFieldEnum]


  export const InvestmentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    product_id: 'product_id',
    amount: 'amount',
    invested_at: 'invested_at',
    status: 'status',
    expected_return: 'expected_return',
    maturity_date: 'maturity_date'
  };

  export type InvestmentsScalarFieldEnum = (typeof InvestmentsScalarFieldEnum)[keyof typeof InvestmentsScalarFieldEnum]


  export const Transaction_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    email: 'email',
    endpoint: 'endpoint',
    http_method: 'http_method',
    status_code: 'status_code',
    error_message: 'error_message',
    created_at: 'created_at'
  };

  export type Transaction_logsScalarFieldEnum = (typeof Transaction_logsScalarFieldEnum)[keyof typeof Transaction_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'risk_level'
   */
  export type Enumrisk_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'risk_level'>
    


  /**
   * Reference to a field of type 'risk_level[]'
   */
  export type ListEnumrisk_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'risk_level[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'investment_type'
   */
  export type Enuminvestment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'investment_type'>
    


  /**
   * Reference to a field of type 'investment_type[]'
   */
  export type ListEnuminvestment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'investment_type[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'risk_level_type'
   */
  export type Enumrisk_level_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'risk_level_type'>
    


  /**
   * Reference to a field of type 'risk_level_type[]'
   */
  export type ListEnumrisk_level_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'risk_level_type[]'>
    


  /**
   * Reference to a field of type 'status_type'
   */
  export type Enumstatus_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_type'>
    


  /**
   * Reference to a field of type 'status_type[]'
   */
  export type ListEnumstatus_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_type[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'http_type'
   */
  export type Enumhttp_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'http_type'>
    


  /**
   * Reference to a field of type 'http_type[]'
   */
  export type ListEnumhttp_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'http_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    risk_appetite?: Enumrisk_levelFilter<"users"> | $Enums.risk_level
    balance?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    investment_products?: Investment_productsListRelationFilter
    investments?: InvestmentsListRelationFilter
    transaction_logs?: Transaction_logsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    risk_appetite?: SortOrder
    balance?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    investment_products?: investment_productsOrderByRelationAggregateInput
    investments?: investmentsOrderByRelationAggregateInput
    transaction_logs?: transaction_logsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    risk_appetite?: Enumrisk_levelFilter<"users"> | $Enums.risk_level
    balance?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    investment_products?: Investment_productsListRelationFilter
    investments?: InvestmentsListRelationFilter
    transaction_logs?: Transaction_logsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    risk_appetite?: SortOrder
    balance?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: Enumuser_roleWithAggregatesFilter<"users"> | $Enums.user_role
    risk_appetite?: Enumrisk_levelWithAggregatesFilter<"users"> | $Enums.risk_level
    balance?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type investment_productsWhereInput = {
    AND?: investment_productsWhereInput | investment_productsWhereInput[]
    OR?: investment_productsWhereInput[]
    NOT?: investment_productsWhereInput | investment_productsWhereInput[]
    id?: UuidFilter<"investment_products"> | string
    name?: StringFilter<"investment_products"> | string
    investment_type?: Enuminvestment_typeFilter<"investment_products"> | $Enums.investment_type
    tenure_months?: IntFilter<"investment_products"> | number
    annual_yield?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFilter<"investment_products"> | $Enums.risk_level_type
    min_investment?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    max_investment?: DecimalNullableFilter<"investment_products"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"investment_products"> | string | null
    created_by?: UuidNullableFilter<"investment_products"> | string | null
    created_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    investments?: InvestmentsListRelationFilter
  }

  export type investment_productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    investment_type?: SortOrder
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    risk_level?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    investments?: investmentsOrderByRelationAggregateInput
  }

  export type investment_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: investment_productsWhereInput | investment_productsWhereInput[]
    OR?: investment_productsWhereInput[]
    NOT?: investment_productsWhereInput | investment_productsWhereInput[]
    investment_type?: Enuminvestment_typeFilter<"investment_products"> | $Enums.investment_type
    tenure_months?: IntFilter<"investment_products"> | number
    annual_yield?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFilter<"investment_products"> | $Enums.risk_level_type
    min_investment?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    max_investment?: DecimalNullableFilter<"investment_products"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"investment_products"> | string | null
    created_by?: UuidNullableFilter<"investment_products"> | string | null
    created_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    investments?: InvestmentsListRelationFilter
  }, "id" | "name">

  export type investment_productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    investment_type?: SortOrder
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    risk_level?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: investment_productsCountOrderByAggregateInput
    _avg?: investment_productsAvgOrderByAggregateInput
    _max?: investment_productsMaxOrderByAggregateInput
    _min?: investment_productsMinOrderByAggregateInput
    _sum?: investment_productsSumOrderByAggregateInput
  }

  export type investment_productsScalarWhereWithAggregatesInput = {
    AND?: investment_productsScalarWhereWithAggregatesInput | investment_productsScalarWhereWithAggregatesInput[]
    OR?: investment_productsScalarWhereWithAggregatesInput[]
    NOT?: investment_productsScalarWhereWithAggregatesInput | investment_productsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"investment_products"> | string
    name?: StringWithAggregatesFilter<"investment_products"> | string
    investment_type?: Enuminvestment_typeWithAggregatesFilter<"investment_products"> | $Enums.investment_type
    tenure_months?: IntWithAggregatesFilter<"investment_products"> | number
    annual_yield?: DecimalWithAggregatesFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeWithAggregatesFilter<"investment_products"> | $Enums.risk_level_type
    min_investment?: DecimalWithAggregatesFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    max_investment?: DecimalNullableWithAggregatesFilter<"investment_products"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"investment_products"> | string | null
    created_by?: UuidNullableWithAggregatesFilter<"investment_products"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"investment_products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"investment_products"> | Date | string | null
  }

  export type investmentsWhereInput = {
    AND?: investmentsWhereInput | investmentsWhereInput[]
    OR?: investmentsWhereInput[]
    NOT?: investmentsWhereInput | investmentsWhereInput[]
    id?: UuidFilter<"investments"> | string
    user_id?: UuidFilter<"investments"> | string
    product_id?: UuidFilter<"investments"> | string
    amount?: DecimalFilter<"investments"> | Decimal | DecimalJsLike | number | string
    invested_at?: DateTimeNullableFilter<"investments"> | Date | string | null
    status?: Enumstatus_typeNullableFilter<"investments"> | $Enums.status_type | null
    expected_return?: DecimalNullableFilter<"investments"> | Decimal | DecimalJsLike | number | string | null
    maturity_date?: DateTimeNullableFilter<"investments"> | Date | string | null
    investment_products?: XOR<Investment_productsScalarRelationFilter, investment_productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type investmentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    invested_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    expected_return?: SortOrderInput | SortOrder
    maturity_date?: SortOrderInput | SortOrder
    investment_products?: investment_productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type investmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: investmentsWhereInput | investmentsWhereInput[]
    OR?: investmentsWhereInput[]
    NOT?: investmentsWhereInput | investmentsWhereInput[]
    user_id?: UuidFilter<"investments"> | string
    product_id?: UuidFilter<"investments"> | string
    amount?: DecimalFilter<"investments"> | Decimal | DecimalJsLike | number | string
    invested_at?: DateTimeNullableFilter<"investments"> | Date | string | null
    status?: Enumstatus_typeNullableFilter<"investments"> | $Enums.status_type | null
    expected_return?: DecimalNullableFilter<"investments"> | Decimal | DecimalJsLike | number | string | null
    maturity_date?: DateTimeNullableFilter<"investments"> | Date | string | null
    investment_products?: XOR<Investment_productsScalarRelationFilter, investment_productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type investmentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    invested_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    expected_return?: SortOrderInput | SortOrder
    maturity_date?: SortOrderInput | SortOrder
    _count?: investmentsCountOrderByAggregateInput
    _avg?: investmentsAvgOrderByAggregateInput
    _max?: investmentsMaxOrderByAggregateInput
    _min?: investmentsMinOrderByAggregateInput
    _sum?: investmentsSumOrderByAggregateInput
  }

  export type investmentsScalarWhereWithAggregatesInput = {
    AND?: investmentsScalarWhereWithAggregatesInput | investmentsScalarWhereWithAggregatesInput[]
    OR?: investmentsScalarWhereWithAggregatesInput[]
    NOT?: investmentsScalarWhereWithAggregatesInput | investmentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"investments"> | string
    user_id?: UuidWithAggregatesFilter<"investments"> | string
    product_id?: UuidWithAggregatesFilter<"investments"> | string
    amount?: DecimalWithAggregatesFilter<"investments"> | Decimal | DecimalJsLike | number | string
    invested_at?: DateTimeNullableWithAggregatesFilter<"investments"> | Date | string | null
    status?: Enumstatus_typeNullableWithAggregatesFilter<"investments"> | $Enums.status_type | null
    expected_return?: DecimalNullableWithAggregatesFilter<"investments"> | Decimal | DecimalJsLike | number | string | null
    maturity_date?: DateTimeNullableWithAggregatesFilter<"investments"> | Date | string | null
  }

  export type transaction_logsWhereInput = {
    AND?: transaction_logsWhereInput | transaction_logsWhereInput[]
    OR?: transaction_logsWhereInput[]
    NOT?: transaction_logsWhereInput | transaction_logsWhereInput[]
    id?: BigIntFilter<"transaction_logs"> | bigint | number
    user_id?: UuidNullableFilter<"transaction_logs"> | string | null
    email?: StringNullableFilter<"transaction_logs"> | string | null
    endpoint?: StringFilter<"transaction_logs"> | string
    http_method?: Enumhttp_typeFilter<"transaction_logs"> | $Enums.http_type
    status_code?: IntFilter<"transaction_logs"> | number
    error_message?: StringNullableFilter<"transaction_logs"> | string | null
    created_at?: DateTimeNullableFilter<"transaction_logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type transaction_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    http_method?: SortOrder
    status_code?: SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type transaction_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: transaction_logsWhereInput | transaction_logsWhereInput[]
    OR?: transaction_logsWhereInput[]
    NOT?: transaction_logsWhereInput | transaction_logsWhereInput[]
    user_id?: UuidNullableFilter<"transaction_logs"> | string | null
    email?: StringNullableFilter<"transaction_logs"> | string | null
    endpoint?: StringFilter<"transaction_logs"> | string
    http_method?: Enumhttp_typeFilter<"transaction_logs"> | $Enums.http_type
    status_code?: IntFilter<"transaction_logs"> | number
    error_message?: StringNullableFilter<"transaction_logs"> | string | null
    created_at?: DateTimeNullableFilter<"transaction_logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type transaction_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    http_method?: SortOrder
    status_code?: SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: transaction_logsCountOrderByAggregateInput
    _avg?: transaction_logsAvgOrderByAggregateInput
    _max?: transaction_logsMaxOrderByAggregateInput
    _min?: transaction_logsMinOrderByAggregateInput
    _sum?: transaction_logsSumOrderByAggregateInput
  }

  export type transaction_logsScalarWhereWithAggregatesInput = {
    AND?: transaction_logsScalarWhereWithAggregatesInput | transaction_logsScalarWhereWithAggregatesInput[]
    OR?: transaction_logsScalarWhereWithAggregatesInput[]
    NOT?: transaction_logsScalarWhereWithAggregatesInput | transaction_logsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"transaction_logs"> | bigint | number
    user_id?: UuidNullableWithAggregatesFilter<"transaction_logs"> | string | null
    email?: StringNullableWithAggregatesFilter<"transaction_logs"> | string | null
    endpoint?: StringWithAggregatesFilter<"transaction_logs"> | string
    http_method?: Enumhttp_typeWithAggregatesFilter<"transaction_logs"> | $Enums.http_type
    status_code?: IntWithAggregatesFilter<"transaction_logs"> | number
    error_message?: StringNullableWithAggregatesFilter<"transaction_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"transaction_logs"> | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsCreateNestedManyWithoutUsersInput
    investments?: investmentsCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsUncheckedCreateNestedManyWithoutUsersInput
    investments?: investmentsUncheckedCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUpdateManyWithoutUsersNestedInput
    investments?: investmentsUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUncheckedUpdateManyWithoutUsersNestedInput
    investments?: investmentsUncheckedUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investment_productsCreateInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutInvestment_productsInput
    investments?: investmentsCreateNestedManyWithoutInvestment_productsInput
  }

  export type investment_productsUncheckedCreateInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investments?: investmentsUncheckedCreateNestedManyWithoutInvestment_productsInput
  }

  export type investment_productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutInvestment_productsNestedInput
    investments?: investmentsUpdateManyWithoutInvestment_productsNestedInput
  }

  export type investment_productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: investmentsUncheckedUpdateManyWithoutInvestment_productsNestedInput
  }

  export type investment_productsCreateManyInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type investment_productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investment_productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
    investment_products: investment_productsCreateNestedOneWithoutInvestmentsInput
    users: usersCreateNestedOneWithoutInvestmentsInput
  }

  export type investmentsUncheckedCreateInput = {
    id?: string
    user_id: string
    product_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type investmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUpdateOneRequiredWithoutInvestmentsNestedInput
    users?: usersUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type investmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsCreateManyInput = {
    id?: string
    user_id: string
    product_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type investmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsCreateInput = {
    id?: bigint | number
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutTransaction_logsInput
  }

  export type transaction_logsUncheckedCreateInput = {
    id?: bigint | number
    user_id?: string | null
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type transaction_logsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutTransaction_logsNestedInput
  }

  export type transaction_logsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsCreateManyInput = {
    id?: bigint | number
    user_id?: string | null
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type transaction_logsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type Enumrisk_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level | Enumrisk_levelFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_levelFilter<$PrismaModel> | $Enums.risk_level
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Investment_productsListRelationFilter = {
    every?: investment_productsWhereInput
    some?: investment_productsWhereInput
    none?: investment_productsWhereInput
  }

  export type InvestmentsListRelationFilter = {
    every?: investmentsWhereInput
    some?: investmentsWhereInput
    none?: investmentsWhereInput
  }

  export type Transaction_logsListRelationFilter = {
    every?: transaction_logsWhereInput
    some?: transaction_logsWhereInput
    none?: transaction_logsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type investment_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type investmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaction_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    risk_appetite?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    risk_appetite?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    risk_appetite?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type Enumrisk_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level | Enumrisk_levelFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_levelWithAggregatesFilter<$PrismaModel> | $Enums.risk_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrisk_levelFilter<$PrismaModel>
    _max?: NestedEnumrisk_levelFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enuminvestment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.investment_type | Enuminvestment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminvestment_typeFilter<$PrismaModel> | $Enums.investment_type
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumrisk_level_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level_type | Enumrisk_level_typeFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_level_typeFilter<$PrismaModel> | $Enums.risk_level_type
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type investment_productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    investment_type?: SortOrder
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    risk_level?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type investment_productsAvgOrderByAggregateInput = {
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrder
  }

  export type investment_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    investment_type?: SortOrder
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    risk_level?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type investment_productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    investment_type?: SortOrder
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    risk_level?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type investment_productsSumOrderByAggregateInput = {
    tenure_months?: SortOrder
    annual_yield?: SortOrder
    min_investment?: SortOrder
    max_investment?: SortOrder
  }

  export type Enuminvestment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.investment_type | Enuminvestment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminvestment_typeWithAggregatesFilter<$PrismaModel> | $Enums.investment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvestment_typeFilter<$PrismaModel>
    _max?: NestedEnuminvestment_typeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumrisk_level_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level_type | Enumrisk_level_typeFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_level_typeWithAggregatesFilter<$PrismaModel> | $Enums.risk_level_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrisk_level_typeFilter<$PrismaModel>
    _max?: NestedEnumrisk_level_typeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumstatus_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableFilter<$PrismaModel> | $Enums.status_type | null
  }

  export type Investment_productsScalarRelationFilter = {
    is?: investment_productsWhereInput
    isNot?: investment_productsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type investmentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    invested_at?: SortOrder
    status?: SortOrder
    expected_return?: SortOrder
    maturity_date?: SortOrder
  }

  export type investmentsAvgOrderByAggregateInput = {
    amount?: SortOrder
    expected_return?: SortOrder
  }

  export type investmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    invested_at?: SortOrder
    status?: SortOrder
    expected_return?: SortOrder
    maturity_date?: SortOrder
  }

  export type investmentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    amount?: SortOrder
    invested_at?: SortOrder
    status?: SortOrder
    expected_return?: SortOrder
    maturity_date?: SortOrder
  }

  export type investmentsSumOrderByAggregateInput = {
    amount?: SortOrder
    expected_return?: SortOrder
  }

  export type Enumstatus_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type Enumhttp_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.http_type | Enumhttp_typeFieldRefInput<$PrismaModel>
    in?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumhttp_typeFilter<$PrismaModel> | $Enums.http_type
  }

  export type transaction_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    endpoint?: SortOrder
    http_method?: SortOrder
    status_code?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type transaction_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
  }

  export type transaction_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    endpoint?: SortOrder
    http_method?: SortOrder
    status_code?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type transaction_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    endpoint?: SortOrder
    http_method?: SortOrder
    status_code?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
  }

  export type transaction_logsSumOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Enumhttp_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.http_type | Enumhttp_typeFieldRefInput<$PrismaModel>
    in?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumhttp_typeWithAggregatesFilter<$PrismaModel> | $Enums.http_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhttp_typeFilter<$PrismaModel>
    _max?: NestedEnumhttp_typeFilter<$PrismaModel>
  }

  export type investment_productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput> | investment_productsCreateWithoutUsersInput[] | investment_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investment_productsCreateOrConnectWithoutUsersInput | investment_productsCreateOrConnectWithoutUsersInput[]
    createMany?: investment_productsCreateManyUsersInputEnvelope
    connect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
  }

  export type investmentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput> | investmentsCreateWithoutUsersInput[] | investmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutUsersInput | investmentsCreateOrConnectWithoutUsersInput[]
    createMany?: investmentsCreateManyUsersInputEnvelope
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
  }

  export type transaction_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput> | transaction_logsCreateWithoutUsersInput[] | transaction_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_logsCreateOrConnectWithoutUsersInput | transaction_logsCreateOrConnectWithoutUsersInput[]
    createMany?: transaction_logsCreateManyUsersInputEnvelope
    connect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
  }

  export type investment_productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput> | investment_productsCreateWithoutUsersInput[] | investment_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investment_productsCreateOrConnectWithoutUsersInput | investment_productsCreateOrConnectWithoutUsersInput[]
    createMany?: investment_productsCreateManyUsersInputEnvelope
    connect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
  }

  export type investmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput> | investmentsCreateWithoutUsersInput[] | investmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutUsersInput | investmentsCreateOrConnectWithoutUsersInput[]
    createMany?: investmentsCreateManyUsersInputEnvelope
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
  }

  export type transaction_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput> | transaction_logsCreateWithoutUsersInput[] | transaction_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_logsCreateOrConnectWithoutUsersInput | transaction_logsCreateOrConnectWithoutUsersInput[]
    createMany?: transaction_logsCreateManyUsersInputEnvelope
    connect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type Enumrisk_levelFieldUpdateOperationsInput = {
    set?: $Enums.risk_level
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type investment_productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput> | investment_productsCreateWithoutUsersInput[] | investment_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investment_productsCreateOrConnectWithoutUsersInput | investment_productsCreateOrConnectWithoutUsersInput[]
    upsert?: investment_productsUpsertWithWhereUniqueWithoutUsersInput | investment_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: investment_productsCreateManyUsersInputEnvelope
    set?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    disconnect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    delete?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    connect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    update?: investment_productsUpdateWithWhereUniqueWithoutUsersInput | investment_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: investment_productsUpdateManyWithWhereWithoutUsersInput | investment_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: investment_productsScalarWhereInput | investment_productsScalarWhereInput[]
  }

  export type investmentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput> | investmentsCreateWithoutUsersInput[] | investmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutUsersInput | investmentsCreateOrConnectWithoutUsersInput[]
    upsert?: investmentsUpsertWithWhereUniqueWithoutUsersInput | investmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: investmentsCreateManyUsersInputEnvelope
    set?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    disconnect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    delete?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    update?: investmentsUpdateWithWhereUniqueWithoutUsersInput | investmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: investmentsUpdateManyWithWhereWithoutUsersInput | investmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
  }

  export type transaction_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput> | transaction_logsCreateWithoutUsersInput[] | transaction_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_logsCreateOrConnectWithoutUsersInput | transaction_logsCreateOrConnectWithoutUsersInput[]
    upsert?: transaction_logsUpsertWithWhereUniqueWithoutUsersInput | transaction_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaction_logsCreateManyUsersInputEnvelope
    set?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    disconnect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    delete?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    connect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    update?: transaction_logsUpdateWithWhereUniqueWithoutUsersInput | transaction_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaction_logsUpdateManyWithWhereWithoutUsersInput | transaction_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaction_logsScalarWhereInput | transaction_logsScalarWhereInput[]
  }

  export type investment_productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput> | investment_productsCreateWithoutUsersInput[] | investment_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investment_productsCreateOrConnectWithoutUsersInput | investment_productsCreateOrConnectWithoutUsersInput[]
    upsert?: investment_productsUpsertWithWhereUniqueWithoutUsersInput | investment_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: investment_productsCreateManyUsersInputEnvelope
    set?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    disconnect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    delete?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    connect?: investment_productsWhereUniqueInput | investment_productsWhereUniqueInput[]
    update?: investment_productsUpdateWithWhereUniqueWithoutUsersInput | investment_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: investment_productsUpdateManyWithWhereWithoutUsersInput | investment_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: investment_productsScalarWhereInput | investment_productsScalarWhereInput[]
  }

  export type investmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput> | investmentsCreateWithoutUsersInput[] | investmentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutUsersInput | investmentsCreateOrConnectWithoutUsersInput[]
    upsert?: investmentsUpsertWithWhereUniqueWithoutUsersInput | investmentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: investmentsCreateManyUsersInputEnvelope
    set?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    disconnect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    delete?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    update?: investmentsUpdateWithWhereUniqueWithoutUsersInput | investmentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: investmentsUpdateManyWithWhereWithoutUsersInput | investmentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
  }

  export type transaction_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput> | transaction_logsCreateWithoutUsersInput[] | transaction_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_logsCreateOrConnectWithoutUsersInput | transaction_logsCreateOrConnectWithoutUsersInput[]
    upsert?: transaction_logsUpsertWithWhereUniqueWithoutUsersInput | transaction_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaction_logsCreateManyUsersInputEnvelope
    set?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    disconnect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    delete?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    connect?: transaction_logsWhereUniqueInput | transaction_logsWhereUniqueInput[]
    update?: transaction_logsUpdateWithWhereUniqueWithoutUsersInput | transaction_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaction_logsUpdateManyWithWhereWithoutUsersInput | transaction_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaction_logsScalarWhereInput | transaction_logsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutInvestment_productsInput = {
    create?: XOR<usersCreateWithoutInvestment_productsInput, usersUncheckedCreateWithoutInvestment_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvestment_productsInput
    connect?: usersWhereUniqueInput
  }

  export type investmentsCreateNestedManyWithoutInvestment_productsInput = {
    create?: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput> | investmentsCreateWithoutInvestment_productsInput[] | investmentsUncheckedCreateWithoutInvestment_productsInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutInvestment_productsInput | investmentsCreateOrConnectWithoutInvestment_productsInput[]
    createMany?: investmentsCreateManyInvestment_productsInputEnvelope
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
  }

  export type investmentsUncheckedCreateNestedManyWithoutInvestment_productsInput = {
    create?: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput> | investmentsCreateWithoutInvestment_productsInput[] | investmentsUncheckedCreateWithoutInvestment_productsInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutInvestment_productsInput | investmentsCreateOrConnectWithoutInvestment_productsInput[]
    createMany?: investmentsCreateManyInvestment_productsInputEnvelope
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
  }

  export type Enuminvestment_typeFieldUpdateOperationsInput = {
    set?: $Enums.investment_type
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumrisk_level_typeFieldUpdateOperationsInput = {
    set?: $Enums.risk_level_type
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneWithoutInvestment_productsNestedInput = {
    create?: XOR<usersCreateWithoutInvestment_productsInput, usersUncheckedCreateWithoutInvestment_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvestment_productsInput
    upsert?: usersUpsertWithoutInvestment_productsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvestment_productsInput, usersUpdateWithoutInvestment_productsInput>, usersUncheckedUpdateWithoutInvestment_productsInput>
  }

  export type investmentsUpdateManyWithoutInvestment_productsNestedInput = {
    create?: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput> | investmentsCreateWithoutInvestment_productsInput[] | investmentsUncheckedCreateWithoutInvestment_productsInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutInvestment_productsInput | investmentsCreateOrConnectWithoutInvestment_productsInput[]
    upsert?: investmentsUpsertWithWhereUniqueWithoutInvestment_productsInput | investmentsUpsertWithWhereUniqueWithoutInvestment_productsInput[]
    createMany?: investmentsCreateManyInvestment_productsInputEnvelope
    set?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    disconnect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    delete?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    update?: investmentsUpdateWithWhereUniqueWithoutInvestment_productsInput | investmentsUpdateWithWhereUniqueWithoutInvestment_productsInput[]
    updateMany?: investmentsUpdateManyWithWhereWithoutInvestment_productsInput | investmentsUpdateManyWithWhereWithoutInvestment_productsInput[]
    deleteMany?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
  }

  export type investmentsUncheckedUpdateManyWithoutInvestment_productsNestedInput = {
    create?: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput> | investmentsCreateWithoutInvestment_productsInput[] | investmentsUncheckedCreateWithoutInvestment_productsInput[]
    connectOrCreate?: investmentsCreateOrConnectWithoutInvestment_productsInput | investmentsCreateOrConnectWithoutInvestment_productsInput[]
    upsert?: investmentsUpsertWithWhereUniqueWithoutInvestment_productsInput | investmentsUpsertWithWhereUniqueWithoutInvestment_productsInput[]
    createMany?: investmentsCreateManyInvestment_productsInputEnvelope
    set?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    disconnect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    delete?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    connect?: investmentsWhereUniqueInput | investmentsWhereUniqueInput[]
    update?: investmentsUpdateWithWhereUniqueWithoutInvestment_productsInput | investmentsUpdateWithWhereUniqueWithoutInvestment_productsInput[]
    updateMany?: investmentsUpdateManyWithWhereWithoutInvestment_productsInput | investmentsUpdateManyWithWhereWithoutInvestment_productsInput[]
    deleteMany?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
  }

  export type investment_productsCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<investment_productsCreateWithoutInvestmentsInput, investment_productsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: investment_productsCreateOrConnectWithoutInvestmentsInput
    connect?: investment_productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<usersCreateWithoutInvestmentsInput, usersUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvestmentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableEnumstatus_typeFieldUpdateOperationsInput = {
    set?: $Enums.status_type | null
  }

  export type investment_productsUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<investment_productsCreateWithoutInvestmentsInput, investment_productsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: investment_productsCreateOrConnectWithoutInvestmentsInput
    upsert?: investment_productsUpsertWithoutInvestmentsInput
    connect?: investment_productsWhereUniqueInput
    update?: XOR<XOR<investment_productsUpdateToOneWithWhereWithoutInvestmentsInput, investment_productsUpdateWithoutInvestmentsInput>, investment_productsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type usersUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<usersCreateWithoutInvestmentsInput, usersUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvestmentsInput
    upsert?: usersUpsertWithoutInvestmentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvestmentsInput, usersUpdateWithoutInvestmentsInput>, usersUncheckedUpdateWithoutInvestmentsInput>
  }

  export type usersCreateNestedOneWithoutTransaction_logsInput = {
    create?: XOR<usersCreateWithoutTransaction_logsInput, usersUncheckedCreateWithoutTransaction_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaction_logsInput
    connect?: usersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Enumhttp_typeFieldUpdateOperationsInput = {
    set?: $Enums.http_type
  }

  export type usersUpdateOneWithoutTransaction_logsNestedInput = {
    create?: XOR<usersCreateWithoutTransaction_logsInput, usersUncheckedCreateWithoutTransaction_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaction_logsInput
    upsert?: usersUpsertWithoutTransaction_logsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransaction_logsInput, usersUpdateWithoutTransaction_logsInput>, usersUncheckedUpdateWithoutTransaction_logsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumrisk_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level | Enumrisk_levelFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_levelFilter<$PrismaModel> | $Enums.risk_level
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedEnumrisk_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level | Enumrisk_levelFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level[] | ListEnumrisk_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_levelWithAggregatesFilter<$PrismaModel> | $Enums.risk_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrisk_levelFilter<$PrismaModel>
    _max?: NestedEnumrisk_levelFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnuminvestment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.investment_type | Enuminvestment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminvestment_typeFilter<$PrismaModel> | $Enums.investment_type
  }

  export type NestedEnumrisk_level_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level_type | Enumrisk_level_typeFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_level_typeFilter<$PrismaModel> | $Enums.risk_level_type
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnuminvestment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.investment_type | Enuminvestment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.investment_type[] | ListEnuminvestment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminvestment_typeWithAggregatesFilter<$PrismaModel> | $Enums.investment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvestment_typeFilter<$PrismaModel>
    _max?: NestedEnuminvestment_typeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumrisk_level_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.risk_level_type | Enumrisk_level_typeFieldRefInput<$PrismaModel>
    in?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.risk_level_type[] | ListEnumrisk_level_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrisk_level_typeWithAggregatesFilter<$PrismaModel> | $Enums.risk_level_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrisk_level_typeFilter<$PrismaModel>
    _max?: NestedEnumrisk_level_typeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableFilter<$PrismaModel> | $Enums.status_type | null
  }

  export type NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumhttp_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.http_type | Enumhttp_typeFieldRefInput<$PrismaModel>
    in?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumhttp_typeFilter<$PrismaModel> | $Enums.http_type
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumhttp_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.http_type | Enumhttp_typeFieldRefInput<$PrismaModel>
    in?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.http_type[] | ListEnumhttp_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumhttp_typeWithAggregatesFilter<$PrismaModel> | $Enums.http_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhttp_typeFilter<$PrismaModel>
    _max?: NestedEnumhttp_typeFilter<$PrismaModel>
  }

  export type investment_productsCreateWithoutUsersInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investments?: investmentsCreateNestedManyWithoutInvestment_productsInput
  }

  export type investment_productsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investments?: investmentsUncheckedCreateNestedManyWithoutInvestment_productsInput
  }

  export type investment_productsCreateOrConnectWithoutUsersInput = {
    where: investment_productsWhereUniqueInput
    create: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput>
  }

  export type investment_productsCreateManyUsersInputEnvelope = {
    data: investment_productsCreateManyUsersInput | investment_productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type investmentsCreateWithoutUsersInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
    investment_products: investment_productsCreateNestedOneWithoutInvestmentsInput
  }

  export type investmentsUncheckedCreateWithoutUsersInput = {
    id?: string
    product_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type investmentsCreateOrConnectWithoutUsersInput = {
    where: investmentsWhereUniqueInput
    create: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput>
  }

  export type investmentsCreateManyUsersInputEnvelope = {
    data: investmentsCreateManyUsersInput | investmentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transaction_logsCreateWithoutUsersInput = {
    id?: bigint | number
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type transaction_logsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type transaction_logsCreateOrConnectWithoutUsersInput = {
    where: transaction_logsWhereUniqueInput
    create: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput>
  }

  export type transaction_logsCreateManyUsersInputEnvelope = {
    data: transaction_logsCreateManyUsersInput | transaction_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type investment_productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: investment_productsWhereUniqueInput
    update: XOR<investment_productsUpdateWithoutUsersInput, investment_productsUncheckedUpdateWithoutUsersInput>
    create: XOR<investment_productsCreateWithoutUsersInput, investment_productsUncheckedCreateWithoutUsersInput>
  }

  export type investment_productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: investment_productsWhereUniqueInput
    data: XOR<investment_productsUpdateWithoutUsersInput, investment_productsUncheckedUpdateWithoutUsersInput>
  }

  export type investment_productsUpdateManyWithWhereWithoutUsersInput = {
    where: investment_productsScalarWhereInput
    data: XOR<investment_productsUpdateManyMutationInput, investment_productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type investment_productsScalarWhereInput = {
    AND?: investment_productsScalarWhereInput | investment_productsScalarWhereInput[]
    OR?: investment_productsScalarWhereInput[]
    NOT?: investment_productsScalarWhereInput | investment_productsScalarWhereInput[]
    id?: UuidFilter<"investment_products"> | string
    name?: StringFilter<"investment_products"> | string
    investment_type?: Enuminvestment_typeFilter<"investment_products"> | $Enums.investment_type
    tenure_months?: IntFilter<"investment_products"> | number
    annual_yield?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFilter<"investment_products"> | $Enums.risk_level_type
    min_investment?: DecimalFilter<"investment_products"> | Decimal | DecimalJsLike | number | string
    max_investment?: DecimalNullableFilter<"investment_products"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"investment_products"> | string | null
    created_by?: UuidNullableFilter<"investment_products"> | string | null
    created_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"investment_products"> | Date | string | null
  }

  export type investmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: investmentsWhereUniqueInput
    update: XOR<investmentsUpdateWithoutUsersInput, investmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<investmentsCreateWithoutUsersInput, investmentsUncheckedCreateWithoutUsersInput>
  }

  export type investmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: investmentsWhereUniqueInput
    data: XOR<investmentsUpdateWithoutUsersInput, investmentsUncheckedUpdateWithoutUsersInput>
  }

  export type investmentsUpdateManyWithWhereWithoutUsersInput = {
    where: investmentsScalarWhereInput
    data: XOR<investmentsUpdateManyMutationInput, investmentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type investmentsScalarWhereInput = {
    AND?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
    OR?: investmentsScalarWhereInput[]
    NOT?: investmentsScalarWhereInput | investmentsScalarWhereInput[]
    id?: UuidFilter<"investments"> | string
    user_id?: UuidFilter<"investments"> | string
    product_id?: UuidFilter<"investments"> | string
    amount?: DecimalFilter<"investments"> | Decimal | DecimalJsLike | number | string
    invested_at?: DateTimeNullableFilter<"investments"> | Date | string | null
    status?: Enumstatus_typeNullableFilter<"investments"> | $Enums.status_type | null
    expected_return?: DecimalNullableFilter<"investments"> | Decimal | DecimalJsLike | number | string | null
    maturity_date?: DateTimeNullableFilter<"investments"> | Date | string | null
  }

  export type transaction_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transaction_logsWhereUniqueInput
    update: XOR<transaction_logsUpdateWithoutUsersInput, transaction_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<transaction_logsCreateWithoutUsersInput, transaction_logsUncheckedCreateWithoutUsersInput>
  }

  export type transaction_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transaction_logsWhereUniqueInput
    data: XOR<transaction_logsUpdateWithoutUsersInput, transaction_logsUncheckedUpdateWithoutUsersInput>
  }

  export type transaction_logsUpdateManyWithWhereWithoutUsersInput = {
    where: transaction_logsScalarWhereInput
    data: XOR<transaction_logsUpdateManyMutationInput, transaction_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type transaction_logsScalarWhereInput = {
    AND?: transaction_logsScalarWhereInput | transaction_logsScalarWhereInput[]
    OR?: transaction_logsScalarWhereInput[]
    NOT?: transaction_logsScalarWhereInput | transaction_logsScalarWhereInput[]
    id?: BigIntFilter<"transaction_logs"> | bigint | number
    user_id?: UuidNullableFilter<"transaction_logs"> | string | null
    email?: StringNullableFilter<"transaction_logs"> | string | null
    endpoint?: StringFilter<"transaction_logs"> | string
    http_method?: Enumhttp_typeFilter<"transaction_logs"> | $Enums.http_type
    status_code?: IntFilter<"transaction_logs"> | number
    error_message?: StringNullableFilter<"transaction_logs"> | string | null
    created_at?: DateTimeNullableFilter<"transaction_logs"> | Date | string | null
  }

  export type usersCreateWithoutInvestment_productsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investments?: investmentsCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvestment_productsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investments?: investmentsUncheckedCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvestment_productsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvestment_productsInput, usersUncheckedCreateWithoutInvestment_productsInput>
  }

  export type investmentsCreateWithoutInvestment_productsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
    users: usersCreateNestedOneWithoutInvestmentsInput
  }

  export type investmentsUncheckedCreateWithoutInvestment_productsInput = {
    id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type investmentsCreateOrConnectWithoutInvestment_productsInput = {
    where: investmentsWhereUniqueInput
    create: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput>
  }

  export type investmentsCreateManyInvestment_productsInputEnvelope = {
    data: investmentsCreateManyInvestment_productsInput | investmentsCreateManyInvestment_productsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutInvestment_productsInput = {
    update: XOR<usersUpdateWithoutInvestment_productsInput, usersUncheckedUpdateWithoutInvestment_productsInput>
    create: XOR<usersCreateWithoutInvestment_productsInput, usersUncheckedCreateWithoutInvestment_productsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvestment_productsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvestment_productsInput, usersUncheckedUpdateWithoutInvestment_productsInput>
  }

  export type usersUpdateWithoutInvestment_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: investmentsUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvestment_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: investmentsUncheckedUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type investmentsUpsertWithWhereUniqueWithoutInvestment_productsInput = {
    where: investmentsWhereUniqueInput
    update: XOR<investmentsUpdateWithoutInvestment_productsInput, investmentsUncheckedUpdateWithoutInvestment_productsInput>
    create: XOR<investmentsCreateWithoutInvestment_productsInput, investmentsUncheckedCreateWithoutInvestment_productsInput>
  }

  export type investmentsUpdateWithWhereUniqueWithoutInvestment_productsInput = {
    where: investmentsWhereUniqueInput
    data: XOR<investmentsUpdateWithoutInvestment_productsInput, investmentsUncheckedUpdateWithoutInvestment_productsInput>
  }

  export type investmentsUpdateManyWithWhereWithoutInvestment_productsInput = {
    where: investmentsScalarWhereInput
    data: XOR<investmentsUpdateManyMutationInput, investmentsUncheckedUpdateManyWithoutInvestment_productsInput>
  }

  export type investment_productsCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutInvestment_productsInput
  }

  export type investment_productsUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type investment_productsCreateOrConnectWithoutInvestmentsInput = {
    where: investment_productsWhereUniqueInput
    create: XOR<investment_productsCreateWithoutInvestmentsInput, investment_productsUncheckedCreateWithoutInvestmentsInput>
  }

  export type usersCreateWithoutInvestmentsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsUncheckedCreateNestedManyWithoutUsersInput
    transaction_logs?: transaction_logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvestmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvestmentsInput, usersUncheckedCreateWithoutInvestmentsInput>
  }

  export type investment_productsUpsertWithoutInvestmentsInput = {
    update: XOR<investment_productsUpdateWithoutInvestmentsInput, investment_productsUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<investment_productsCreateWithoutInvestmentsInput, investment_productsUncheckedCreateWithoutInvestmentsInput>
    where?: investment_productsWhereInput
  }

  export type investment_productsUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: investment_productsWhereInput
    data: XOR<investment_productsUpdateWithoutInvestmentsInput, investment_productsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type investment_productsUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutInvestment_productsNestedInput
  }

  export type investment_productsUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutInvestmentsInput = {
    update: XOR<usersUpdateWithoutInvestmentsInput, usersUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<usersCreateWithoutInvestmentsInput, usersUncheckedCreateWithoutInvestmentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvestmentsInput, usersUncheckedUpdateWithoutInvestmentsInput>
  }

  export type usersUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUncheckedUpdateManyWithoutUsersNestedInput
    transaction_logs?: transaction_logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTransaction_logsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsCreateNestedManyWithoutUsersInput
    investments?: investmentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransaction_logsInput = {
    id?: string
    first_name: string
    last_name?: string | null
    email: string
    password_hash: string
    role?: $Enums.user_role
    risk_appetite?: $Enums.risk_level
    balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    investment_products?: investment_productsUncheckedCreateNestedManyWithoutUsersInput
    investments?: investmentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransaction_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransaction_logsInput, usersUncheckedCreateWithoutTransaction_logsInput>
  }

  export type usersUpsertWithoutTransaction_logsInput = {
    update: XOR<usersUpdateWithoutTransaction_logsInput, usersUncheckedUpdateWithoutTransaction_logsInput>
    create: XOR<usersCreateWithoutTransaction_logsInput, usersUncheckedCreateWithoutTransaction_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransaction_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransaction_logsInput, usersUncheckedUpdateWithoutTransaction_logsInput>
  }

  export type usersUpdateWithoutTransaction_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUpdateManyWithoutUsersNestedInput
    investments?: investmentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransaction_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    risk_appetite?: Enumrisk_levelFieldUpdateOperationsInput | $Enums.risk_level
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUncheckedUpdateManyWithoutUsersNestedInput
    investments?: investmentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type investment_productsCreateManyUsersInput = {
    id?: string
    name: string
    investment_type: $Enums.investment_type
    tenure_months: number
    annual_yield: Decimal | DecimalJsLike | number | string
    risk_level: $Enums.risk_level_type
    min_investment?: Decimal | DecimalJsLike | number | string
    max_investment?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type investmentsCreateManyUsersInput = {
    id?: string
    product_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type transaction_logsCreateManyUsersInput = {
    id?: bigint | number
    email?: string | null
    endpoint: string
    http_method: $Enums.http_type
    status_code: number
    error_message?: string | null
    created_at?: Date | string | null
  }

  export type investment_productsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: investmentsUpdateManyWithoutInvestment_productsNestedInput
  }

  export type investment_productsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investments?: investmentsUncheckedUpdateManyWithoutInvestment_productsNestedInput
  }

  export type investment_productsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investment_type?: Enuminvestment_typeFieldUpdateOperationsInput | $Enums.investment_type
    tenure_months?: IntFieldUpdateOperationsInput | number
    annual_yield?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    risk_level?: Enumrisk_level_typeFieldUpdateOperationsInput | $Enums.risk_level_type
    min_investment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_investment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    investment_products?: investment_productsUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type investmentsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    http_method?: Enumhttp_typeFieldUpdateOperationsInput | $Enums.http_type
    status_code?: IntFieldUpdateOperationsInput | number
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsCreateManyInvestment_productsInput = {
    id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    invested_at?: Date | string | null
    status?: $Enums.status_type | null
    expected_return?: Decimal | DecimalJsLike | number | string | null
    maturity_date?: Date | string | null
  }

  export type investmentsUpdateWithoutInvestment_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type investmentsUncheckedUpdateWithoutInvestment_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type investmentsUncheckedUpdateManyWithoutInvestment_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumstatus_typeFieldUpdateOperationsInput | $Enums.status_type | null
    expected_return?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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