
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model TaskLog
 * 
 */
export type TaskLog = $Result.DefaultSelection<Prisma.$TaskLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLog`: Exposes CRUD operations for the **TaskLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLogs
    * const taskLogs = await prisma.taskLog.findMany()
    * ```
    */
  get taskLog(): Prisma.TaskLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Users: 'Users',
    Tasks: 'Tasks',
    TaskLog: 'TaskLog'
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
      modelProps: "users" | "tasks" | "taskLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      TaskLog: {
        payload: Prisma.$TaskLogPayload<ExtArgs>
        fields: Prisma.TaskLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findFirst: {
            args: Prisma.TaskLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findMany: {
            args: Prisma.TaskLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          create: {
            args: Prisma.TaskLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          createMany: {
            args: Prisma.TaskLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          delete: {
            args: Prisma.TaskLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          update: {
            args: Prisma.TaskLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          deleteMany: {
            args: Prisma.TaskLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          upsert: {
            args: Prisma.TaskLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          aggregate: {
            args: Prisma.TaskLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLog>
          }
          groupBy: {
            args: Prisma.TaskLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLogCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLogCountAggregateOutputType> | number
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
    users?: UsersOmit
    tasks?: TasksOmit
    taskLog?: TaskLogOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tasks: number
    taskLogs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    taskLogs?: boolean | UsersCountOutputTypeCountTaskLogsArgs
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
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    taskLogs: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLogs?: boolean | TasksCountOutputTypeCountTaskLogsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    tasks?: boolean | Users$tasksArgs<ExtArgs>
    taskLogs?: boolean | Users$taskLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Users$tasksArgs<ExtArgs>
    taskLogs?: boolean | Users$taskLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      tasks: Prisma.$TasksPayload<ExtArgs>[]
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskLogs<T extends Users$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.tasks
   */
  export type Users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Users.taskLogs
   */
  export type Users$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    completed: boolean | null
    userId: number | null
    status: $Enums.TaskStatus | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    completed: boolean | null
    userId: number | null
    status: $Enums.TaskStatus | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    completed: number
    userId: number
    status: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    userId?: true
    status?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    userId?: true
    status?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    userId?: true
    status?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: number
    title: string
    description: string | null
    completed: boolean
    userId: number
    status: $Enums.TaskStatus
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taskLogs?: boolean | Tasks$taskLogsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    userId?: boolean
    status?: boolean
  }

  export type TasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "completed" | "userId" | "status", ExtArgs["result"]["tasks"]>
  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    taskLogs?: boolean | Tasks$taskLogsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      completed: boolean
      userId: number
      status: $Enums.TaskStatus
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends TasksUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
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
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskLogs<T extends Tasks$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tasks model
   */
  interface TasksFieldRefs {
    readonly id: FieldRef<"Tasks", 'Int'>
    readonly title: FieldRef<"Tasks", 'String'>
    readonly description: FieldRef<"Tasks", 'String'>
    readonly completed: FieldRef<"Tasks", 'Boolean'>
    readonly userId: FieldRef<"Tasks", 'Int'>
    readonly status: FieldRef<"Tasks", 'TaskStatus'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Tasks updateManyAndReturn
   */
  export type TasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Tasks.taskLogs
   */
  export type Tasks$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model TaskLog
   */

  export type AggregateTaskLog = {
    _count: TaskLogCountAggregateOutputType | null
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  export type TaskLogAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    duration: number | null
  }

  export type TaskLogSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    duration: bigint | null
  }

  export type TaskLogMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    duration: bigint | null
    createdAt: Date | null
  }

  export type TaskLogMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    duration: bigint | null
    createdAt: Date | null
  }

  export type TaskLogCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    duration: number
    createdAt: number
    _all: number
  }


  export type TaskLogAvgAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    duration?: true
  }

  export type TaskLogSumAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    duration?: true
  }

  export type TaskLogMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    duration?: true
    createdAt?: true
  }

  export type TaskLogMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    duration?: true
    createdAt?: true
  }

  export type TaskLogCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type TaskLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLog to aggregate.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLogs
    **/
    _count?: true | TaskLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLogMaxAggregateInputType
  }

  export type GetTaskLogAggregateType<T extends TaskLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLog[P]>
      : GetScalarType<T[P], AggregateTaskLog[P]>
  }




  export type TaskLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithAggregationInput | TaskLogOrderByWithAggregationInput[]
    by: TaskLogScalarFieldEnum[] | TaskLogScalarFieldEnum
    having?: TaskLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLogCountAggregateInputType | true
    _avg?: TaskLogAvgAggregateInputType
    _sum?: TaskLogSumAggregateInputType
    _min?: TaskLogMinAggregateInputType
    _max?: TaskLogMaxAggregateInputType
  }

  export type TaskLogGroupByOutputType = {
    id: number
    taskId: number
    userId: number
    duration: bigint
    createdAt: Date
    _count: TaskLogCountAggregateOutputType | null
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  type GetTaskLogGroupByPayload<T extends TaskLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
        }
      >
    >


  export type TaskLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type TaskLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "duration" | "createdAt", ExtArgs["result"]["taskLog"]>
  export type TaskLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TaskLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLog"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      userId: number
      duration: bigint
      createdAt: Date
    }, ExtArgs["result"]["taskLog"]>
    composites: {}
  }

  type TaskLogGetPayload<S extends boolean | null | undefined | TaskLogDefaultArgs> = $Result.GetResult<Prisma.$TaskLogPayload, S>

  type TaskLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLogCountAggregateInputType | true
    }

  export interface TaskLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLog'], meta: { name: 'TaskLog' } }
    /**
     * Find zero or one TaskLog that matches the filter.
     * @param {TaskLogFindUniqueArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLogFindUniqueArgs>(args: SelectSubset<T, TaskLogFindUniqueArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLogFindUniqueOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLogFindFirstArgs>(args?: SelectSubset<T, TaskLogFindFirstArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLogs
     * const taskLogs = await prisma.taskLog.findMany()
     * 
     * // Get first 10 TaskLogs
     * const taskLogs = await prisma.taskLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLogFindManyArgs>(args?: SelectSubset<T, TaskLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLog.
     * @param {TaskLogCreateArgs} args - Arguments to create a TaskLog.
     * @example
     * // Create one TaskLog
     * const TaskLog = await prisma.taskLog.create({
     *   data: {
     *     // ... data to create a TaskLog
     *   }
     * })
     * 
     */
    create<T extends TaskLogCreateArgs>(args: SelectSubset<T, TaskLogCreateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLogs.
     * @param {TaskLogCreateManyArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLogCreateManyArgs>(args?: SelectSubset<T, TaskLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLogs and returns the data saved in the database.
     * @param {TaskLogCreateManyAndReturnArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLog.
     * @param {TaskLogDeleteArgs} args - Arguments to delete one TaskLog.
     * @example
     * // Delete one TaskLog
     * const TaskLog = await prisma.taskLog.delete({
     *   where: {
     *     // ... filter to delete one TaskLog
     *   }
     * })
     * 
     */
    delete<T extends TaskLogDeleteArgs>(args: SelectSubset<T, TaskLogDeleteArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLog.
     * @param {TaskLogUpdateArgs} args - Arguments to update one TaskLog.
     * @example
     * // Update one TaskLog
     * const taskLog = await prisma.taskLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLogUpdateArgs>(args: SelectSubset<T, TaskLogUpdateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLogs.
     * @param {TaskLogDeleteManyArgs} args - Arguments to filter TaskLogs to delete.
     * @example
     * // Delete a few TaskLogs
     * const { count } = await prisma.taskLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLogDeleteManyArgs>(args?: SelectSubset<T, TaskLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLogUpdateManyArgs>(args: SelectSubset<T, TaskLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs and returns the data updated in the database.
     * @param {TaskLogUpdateManyAndReturnArgs} args - Arguments to update many TaskLogs.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLog.
     * @param {TaskLogUpsertArgs} args - Arguments to update or create a TaskLog.
     * @example
     * // Update or create a TaskLog
     * const taskLog = await prisma.taskLog.upsert({
     *   create: {
     *     // ... data to create a TaskLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLog we want to update
     *   }
     * })
     */
    upsert<T extends TaskLogUpsertArgs>(args: SelectSubset<T, TaskLogUpsertArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogCountArgs} args - Arguments to filter TaskLogs to count.
     * @example
     * // Count the number of TaskLogs
     * const count = await prisma.taskLog.count({
     *   where: {
     *     // ... the filter for the TaskLogs we want to count
     *   }
     * })
    **/
    count<T extends TaskLogCountArgs>(
      args?: Subset<T, TaskLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskLogAggregateArgs>(args: Subset<T, TaskLogAggregateArgs>): Prisma.PrismaPromise<GetTaskLogAggregateType<T>>

    /**
     * Group by TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogGroupByArgs} args - Group by arguments.
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
      T extends TaskLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLogGroupByArgs['orderBy'] }
        : { orderBy?: TaskLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLog model
   */
  readonly fields: TaskLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasksDefaultArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskLog model
   */
  interface TaskLogFieldRefs {
    readonly id: FieldRef<"TaskLog", 'Int'>
    readonly taskId: FieldRef<"TaskLog", 'Int'>
    readonly userId: FieldRef<"TaskLog", 'Int'>
    readonly duration: FieldRef<"TaskLog", 'BigInt'>
    readonly createdAt: FieldRef<"TaskLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskLog findUnique
   */
  export type TaskLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findUniqueOrThrow
   */
  export type TaskLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findFirst
   */
  export type TaskLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findFirstOrThrow
   */
  export type TaskLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findMany
   */
  export type TaskLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLogs to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog create
   */
  export type TaskLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLog.
     */
    data: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
  }

  /**
   * TaskLog createMany
   */
  export type TaskLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLog createManyAndReturn
   */
  export type TaskLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog update
   */
  export type TaskLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLog.
     */
    data: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
    /**
     * Choose, which TaskLog to update.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog updateMany
   */
  export type TaskLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
  }

  /**
   * TaskLog updateManyAndReturn
   */
  export type TaskLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog upsert
   */
  export type TaskLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLog to update in case it exists.
     */
    where: TaskLogWhereUniqueInput
    /**
     * In case the TaskLog found by the `where` argument doesn't exist, create a new TaskLog with this data.
     */
    create: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
    /**
     * In case the TaskLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
  }

  /**
   * TaskLog delete
   */
  export type TaskLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter which TaskLog to delete.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog deleteMany
   */
  export type TaskLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLogs to delete
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to delete.
     */
    limit?: number
  }

  /**
   * TaskLog without action
   */
  export type TaskLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    completed: 'completed',
    userId: 'userId',
    status: 'status'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const TaskLogScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type TaskLogScalarFieldEnum = (typeof TaskLogScalarFieldEnum)[keyof typeof TaskLogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    tasks?: TasksListRelationFilter
    taskLogs?: TaskLogListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    tasks?: TasksOrderByRelationAggregateInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    tasks?: TasksListRelationFilter
    taskLogs?: TaskLogListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    id?: IntFilter<"Tasks"> | number
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    completed?: BoolFilter<"Tasks"> | boolean
    userId?: IntFilter<"Tasks"> | number
    status?: EnumTaskStatusFilter<"Tasks"> | $Enums.TaskStatus
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    taskLogs?: TaskLogListRelationFilter
  }

  export type TasksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    user?: UsersOrderByWithRelationInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    completed?: BoolFilter<"Tasks"> | boolean
    userId?: IntFilter<"Tasks"> | number
    status?: EnumTaskStatusFilter<"Tasks"> | $Enums.TaskStatus
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    taskLogs?: TaskLogListRelationFilter
  }, "id">

  export type TasksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _avg?: TasksAvgOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
    _sum?: TasksSumOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tasks"> | number
    title?: StringWithAggregatesFilter<"Tasks"> | string
    description?: StringNullableWithAggregatesFilter<"Tasks"> | string | null
    completed?: BoolWithAggregatesFilter<"Tasks"> | boolean
    userId?: IntWithAggregatesFilter<"Tasks"> | number
    status?: EnumTaskStatusWithAggregatesFilter<"Tasks"> | $Enums.TaskStatus
  }

  export type TaskLogWhereInput = {
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    id?: IntFilter<"TaskLog"> | number
    taskId?: IntFilter<"TaskLog"> | number
    userId?: IntFilter<"TaskLog"> | number
    duration?: BigIntFilter<"TaskLog"> | bigint | number
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TaskLogOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    task?: TasksOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type TaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    taskId?: IntFilter<"TaskLog"> | number
    userId?: IntFilter<"TaskLog"> | number
    duration?: BigIntFilter<"TaskLog"> | bigint | number
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type TaskLogOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    _count?: TaskLogCountOrderByAggregateInput
    _avg?: TaskLogAvgOrderByAggregateInput
    _max?: TaskLogMaxOrderByAggregateInput
    _min?: TaskLogMinOrderByAggregateInput
    _sum?: TaskLogSumOrderByAggregateInput
  }

  export type TaskLogScalarWhereWithAggregatesInput = {
    AND?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    OR?: TaskLogScalarWhereWithAggregatesInput[]
    NOT?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskLog"> | number
    taskId?: IntWithAggregatesFilter<"TaskLog"> | number
    userId?: IntWithAggregatesFilter<"TaskLog"> | number
    duration?: BigIntWithAggregatesFilter<"TaskLog"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"TaskLog"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    image?: string | null
    tasks?: TasksCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    image?: string | null
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TasksUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    image?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasksCreateInput = {
    title: string
    description?: string | null
    completed?: boolean
    status?: $Enums.TaskStatus
    user: UsersCreateNestedOneWithoutTasksInput
    taskLogs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    completed?: boolean
    userId: number
    status?: $Enums.TaskStatus
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    user?: UsersUpdateOneRequiredWithoutTasksNestedInput
    taskLogs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskLogs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    completed?: boolean
    userId: number
    status?: $Enums.TaskStatus
  }

  export type TasksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
  }

  export type TasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
  }

  export type TaskLogCreateInput = {
    duration: bigint | number
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutTaskLogsInput
    user: UsersCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateInput = {
    id?: number
    taskId: number
    userId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TaskLogUpdateInput = {
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutTaskLogsNestedInput
    user?: UsersUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogCreateManyInput = {
    id?: number
    taskId: number
    userId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TaskLogUpdateManyMutationInput = {
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type TaskLogListRelationFilter = {
    every?: TaskLogWhereInput
    some?: TaskLogWhereInput
    none?: TaskLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TasksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type TasksAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type TasksSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TasksScalarRelationFilter = {
    is?: TasksWhereInput
    isNot?: TasksWhereInput
  }

  export type TaskLogCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
  }

  export type TaskLogMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TasksCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TasksUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutUserInput | TaskLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutUserInput | TaskLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutUserInput | TaskLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TasksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutUserInput | TaskLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutUserInput | TaskLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutUserInput | TaskLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTasksInput = {
    create?: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTasksInput
    connect?: UsersWhereUniqueInput
  }

  export type TaskLogCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type UsersUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTasksInput
    upsert?: UsersUpsertWithoutTasksInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTasksInput, UsersUpdateWithoutTasksInput>, UsersUncheckedUpdateWithoutTasksInput>
  }

  export type TaskLogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TasksCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<TasksCreateWithoutTaskLogsInput, TasksUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutTaskLogsInput
    connect?: TasksWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<UsersCreateWithoutTaskLogsInput, UsersUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaskLogsInput
    connect?: UsersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TasksUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<TasksCreateWithoutTaskLogsInput, TasksUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutTaskLogsInput
    upsert?: TasksUpsertWithoutTaskLogsInput
    connect?: TasksWhereUniqueInput
    update?: XOR<XOR<TasksUpdateToOneWithWhereWithoutTaskLogsInput, TasksUpdateWithoutTaskLogsInput>, TasksUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UsersUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<UsersCreateWithoutTaskLogsInput, UsersUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTaskLogsInput
    upsert?: UsersUpsertWithoutTaskLogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTaskLogsInput, UsersUpdateWithoutTaskLogsInput>, UsersUncheckedUpdateWithoutTaskLogsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TasksCreateWithoutUserInput = {
    title: string
    description?: string | null
    completed?: boolean
    status?: $Enums.TaskStatus
    taskLogs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    completed?: boolean
    status?: $Enums.TaskStatus
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutUserInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksCreateManyUserInputEnvelope = {
    data: TasksCreateManyUserInput | TasksCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskLogCreateWithoutUserInput = {
    duration: bigint | number
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput>
  }

  export type TaskLogCreateManyUserInputEnvelope = {
    data: TaskLogCreateManyUserInput | TaskLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TasksUpsertWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
  }

  export type TasksUpdateManyWithWhereWithoutUserInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutUserInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    id?: IntFilter<"Tasks"> | number
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    completed?: BoolFilter<"Tasks"> | boolean
    userId?: IntFilter<"Tasks"> | number
    status?: EnumTaskStatusFilter<"Tasks"> | $Enums.TaskStatus
  }

  export type TaskLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutUserInput, TaskLogUncheckedUpdateWithoutUserInput>
    create: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutUserInput, TaskLogUncheckedUpdateWithoutUserInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutUserInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskLogScalarWhereInput = {
    AND?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    OR?: TaskLogScalarWhereInput[]
    NOT?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    id?: IntFilter<"TaskLog"> | number
    taskId?: IntFilter<"TaskLog"> | number
    userId?: IntFilter<"TaskLog"> | number
    duration?: BigIntFilter<"TaskLog"> | bigint | number
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
  }

  export type UsersCreateWithoutTasksInput = {
    name: string
    email: string
    image?: string | null
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    email: string
    image?: string | null
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTasksInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
  }

  export type TaskLogCreateWithoutTaskInput = {
    duration: bigint | number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogCreateManyTaskInputEnvelope = {
    data: TaskLogCreateManyTaskInput | TaskLogCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutTasksInput = {
    update: XOR<UsersUpdateWithoutTasksInput, UsersUncheckedUpdateWithoutTasksInput>
    create: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTasksInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTasksInput, UsersUncheckedUpdateWithoutTasksInput>
  }

  export type UsersUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutTaskInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutTaskInput>
  }

  export type TasksCreateWithoutTaskLogsInput = {
    title: string
    description?: string | null
    completed?: boolean
    status?: $Enums.TaskStatus
    user: UsersCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateWithoutTaskLogsInput = {
    id?: number
    title: string
    description?: string | null
    completed?: boolean
    userId: number
    status?: $Enums.TaskStatus
  }

  export type TasksCreateOrConnectWithoutTaskLogsInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutTaskLogsInput, TasksUncheckedCreateWithoutTaskLogsInput>
  }

  export type UsersCreateWithoutTaskLogsInput = {
    name: string
    email: string
    image?: string | null
    tasks?: TasksCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTaskLogsInput = {
    id?: number
    name: string
    email: string
    image?: string | null
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTaskLogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTaskLogsInput, UsersUncheckedCreateWithoutTaskLogsInput>
  }

  export type TasksUpsertWithoutTaskLogsInput = {
    update: XOR<TasksUpdateWithoutTaskLogsInput, TasksUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<TasksCreateWithoutTaskLogsInput, TasksUncheckedCreateWithoutTaskLogsInput>
    where?: TasksWhereInput
  }

  export type TasksUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: TasksWhereInput
    data: XOR<TasksUpdateWithoutTaskLogsInput, TasksUncheckedUpdateWithoutTaskLogsInput>
  }

  export type TasksUpdateWithoutTaskLogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    user?: UsersUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateWithoutTaskLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
  }

  export type UsersUpsertWithoutTaskLogsInput = {
    update: XOR<UsersUpdateWithoutTaskLogsInput, UsersUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<UsersCreateWithoutTaskLogsInput, UsersUncheckedCreateWithoutTaskLogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTaskLogsInput, UsersUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UsersUpdateWithoutTaskLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TasksUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTaskLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TasksCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    completed?: boolean
    status?: $Enums.TaskStatus
  }

  export type TaskLogCreateManyUserInput = {
    id?: number
    taskId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TasksUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskLogs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    taskLogs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
  }

  export type TaskLogUpdateWithoutUserInput = {
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogCreateManyTaskInput = {
    id?: number
    userId: number
    duration: bigint | number
    createdAt?: Date | string
  }

  export type TaskLogUpdateWithoutTaskInput = {
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    duration?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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