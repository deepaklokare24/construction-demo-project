
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
 * Model Financial
 * 
 */
export type Financial = $Result.DefaultSelection<Prisma.$FinancialPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model CostTracking
 * 
 */
export type CostTracking = $Result.DefaultSelection<Prisma.$CostTrackingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvoiceStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]

}

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Financials
 * const financials = await prisma.financial.findMany()
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
   * // Fetch zero or more Financials
   * const financials = await prisma.financial.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.financial`: Exposes CRUD operations for the **Financial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Financials
    * const financials = await prisma.financial.findMany()
    * ```
    */
  get financial(): Prisma.FinancialDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.costTracking`: Exposes CRUD operations for the **CostTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CostTrackings
    * const costTrackings = await prisma.costTracking.findMany()
    * ```
    */
  get costTracking(): Prisma.CostTrackingDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
    Financial: 'Financial',
    Invoice: 'Invoice',
    CostTracking: 'CostTracking'
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
      modelProps: "financial" | "invoice" | "costTracking"
      txIsolationLevel: never
    }
    model: {
      Financial: {
        payload: Prisma.$FinancialPayload<ExtArgs>
        fields: Prisma.FinancialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          findFirst: {
            args: Prisma.FinancialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          findMany: {
            args: Prisma.FinancialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>[]
          }
          create: {
            args: Prisma.FinancialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          createMany: {
            args: Prisma.FinancialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FinancialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          update: {
            args: Prisma.FinancialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          deleteMany: {
            args: Prisma.FinancialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinancialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPayload>
          }
          aggregate: {
            args: Prisma.FinancialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancial>
          }
          groupBy: {
            args: Prisma.FinancialGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FinancialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FinancialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FinancialCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InvoiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InvoiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      CostTracking: {
        payload: Prisma.$CostTrackingPayload<ExtArgs>
        fields: Prisma.CostTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          findFirst: {
            args: Prisma.CostTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          findMany: {
            args: Prisma.CostTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>[]
          }
          create: {
            args: Prisma.CostTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          createMany: {
            args: Prisma.CostTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CostTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          update: {
            args: Prisma.CostTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          deleteMany: {
            args: Prisma.CostTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CostTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostTrackingPayload>
          }
          aggregate: {
            args: Prisma.CostTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostTracking>
          }
          groupBy: {
            args: Prisma.CostTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostTrackingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CostTrackingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CostTrackingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CostTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<CostTrackingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Count Type FinancialCountOutputType
   */

  export type FinancialCountOutputType = {
    invoices: number
    costTracking: number
  }

  export type FinancialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | FinancialCountOutputTypeCountInvoicesArgs
    costTracking?: boolean | FinancialCountOutputTypeCountCostTrackingArgs
  }

  // Custom InputTypes
  /**
   * FinancialCountOutputType without action
   */
  export type FinancialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialCountOutputType
     */
    select?: FinancialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialCountOutputType without action
   */
  export type FinancialCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * FinancialCountOutputType without action
   */
  export type FinancialCountOutputTypeCountCostTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostTrackingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Financial
   */

  export type AggregateFinancial = {
    _count: FinancialCountAggregateOutputType | null
    _avg: FinancialAvgAggregateOutputType | null
    _sum: FinancialSumAggregateOutputType | null
    _min: FinancialMinAggregateOutputType | null
    _max: FinancialMaxAggregateOutputType | null
  }

  export type FinancialAvgAggregateOutputType = {
    budget: number | null
    expenditure: number | null
  }

  export type FinancialSumAggregateOutputType = {
    budget: number | null
    expenditure: number | null
  }

  export type FinancialMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    budget: number | null
    expenditure: number | null
  }

  export type FinancialMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    budget: number | null
    expenditure: number | null
  }

  export type FinancialCountAggregateOutputType = {
    id: number
    projectId: number
    budget: number
    expenditure: number
    _all: number
  }


  export type FinancialAvgAggregateInputType = {
    budget?: true
    expenditure?: true
  }

  export type FinancialSumAggregateInputType = {
    budget?: true
    expenditure?: true
  }

  export type FinancialMinAggregateInputType = {
    id?: true
    projectId?: true
    budget?: true
    expenditure?: true
  }

  export type FinancialMaxAggregateInputType = {
    id?: true
    projectId?: true
    budget?: true
    expenditure?: true
  }

  export type FinancialCountAggregateInputType = {
    id?: true
    projectId?: true
    budget?: true
    expenditure?: true
    _all?: true
  }

  export type FinancialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financial to aggregate.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Financials
    **/
    _count?: true | FinancialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialMaxAggregateInputType
  }

  export type GetFinancialAggregateType<T extends FinancialAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancial[P]>
      : GetScalarType<T[P], AggregateFinancial[P]>
  }




  export type FinancialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialWhereInput
    orderBy?: FinancialOrderByWithAggregationInput | FinancialOrderByWithAggregationInput[]
    by: FinancialScalarFieldEnum[] | FinancialScalarFieldEnum
    having?: FinancialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialCountAggregateInputType | true
    _avg?: FinancialAvgAggregateInputType
    _sum?: FinancialSumAggregateInputType
    _min?: FinancialMinAggregateInputType
    _max?: FinancialMaxAggregateInputType
  }

  export type FinancialGroupByOutputType = {
    id: string
    projectId: string
    budget: number
    expenditure: number
    _count: FinancialCountAggregateOutputType | null
    _avg: FinancialAvgAggregateOutputType | null
    _sum: FinancialSumAggregateOutputType | null
    _min: FinancialMinAggregateOutputType | null
    _max: FinancialMaxAggregateOutputType | null
  }

  type GetFinancialGroupByPayload<T extends FinancialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialGroupByOutputType[P]>
        }
      >
    >


  export type FinancialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    budget?: boolean
    expenditure?: boolean
    invoices?: boolean | Financial$invoicesArgs<ExtArgs>
    costTracking?: boolean | Financial$costTrackingArgs<ExtArgs>
    _count?: boolean | FinancialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financial"]>


  export type FinancialSelectScalar = {
    id?: boolean
    projectId?: boolean
    budget?: boolean
    expenditure?: boolean
  }

  export type FinancialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Financial$invoicesArgs<ExtArgs>
    costTracking?: boolean | Financial$costTrackingArgs<ExtArgs>
    _count?: boolean | FinancialCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FinancialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Financial"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      costTracking: Prisma.$CostTrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      budget: number
      expenditure: number
    }, ExtArgs["result"]["financial"]>
    composites: {}
  }

  type FinancialGetPayload<S extends boolean | null | undefined | FinancialDefaultArgs> = $Result.GetResult<Prisma.$FinancialPayload, S>

  type FinancialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinancialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinancialCountAggregateInputType | true
    }

  export interface FinancialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Financial'], meta: { name: 'Financial' } }
    /**
     * Find zero or one Financial that matches the filter.
     * @param {FinancialFindUniqueArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialFindUniqueArgs>(args: SelectSubset<T, FinancialFindUniqueArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Financial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinancialFindUniqueOrThrowArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Financial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindFirstArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialFindFirstArgs>(args?: SelectSubset<T, FinancialFindFirstArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Financial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindFirstOrThrowArgs} args - Arguments to find a Financial
     * @example
     * // Get one Financial
     * const financial = await prisma.financial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Financials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financials
     * const financials = await prisma.financial.findMany()
     * 
     * // Get first 10 Financials
     * const financials = await prisma.financial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialWithIdOnly = await prisma.financial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialFindManyArgs>(args?: SelectSubset<T, FinancialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Financial.
     * @param {FinancialCreateArgs} args - Arguments to create a Financial.
     * @example
     * // Create one Financial
     * const Financial = await prisma.financial.create({
     *   data: {
     *     // ... data to create a Financial
     *   }
     * })
     * 
     */
    create<T extends FinancialCreateArgs>(args: SelectSubset<T, FinancialCreateArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Financials.
     * @param {FinancialCreateManyArgs} args - Arguments to create many Financials.
     * @example
     * // Create many Financials
     * const financial = await prisma.financial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialCreateManyArgs>(args?: SelectSubset<T, FinancialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Financial.
     * @param {FinancialDeleteArgs} args - Arguments to delete one Financial.
     * @example
     * // Delete one Financial
     * const Financial = await prisma.financial.delete({
     *   where: {
     *     // ... filter to delete one Financial
     *   }
     * })
     * 
     */
    delete<T extends FinancialDeleteArgs>(args: SelectSubset<T, FinancialDeleteArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Financial.
     * @param {FinancialUpdateArgs} args - Arguments to update one Financial.
     * @example
     * // Update one Financial
     * const financial = await prisma.financial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialUpdateArgs>(args: SelectSubset<T, FinancialUpdateArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Financials.
     * @param {FinancialDeleteManyArgs} args - Arguments to filter Financials to delete.
     * @example
     * // Delete a few Financials
     * const { count } = await prisma.financial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialDeleteManyArgs>(args?: SelectSubset<T, FinancialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financials
     * const financial = await prisma.financial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialUpdateManyArgs>(args: SelectSubset<T, FinancialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Financial.
     * @param {FinancialUpsertArgs} args - Arguments to update or create a Financial.
     * @example
     * // Update or create a Financial
     * const financial = await prisma.financial.upsert({
     *   create: {
     *     // ... data to create a Financial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financial we want to update
     *   }
     * })
     */
    upsert<T extends FinancialUpsertArgs>(args: SelectSubset<T, FinancialUpsertArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Financials that matches the filter.
     * @param {FinancialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const financial = await prisma.financial.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: FinancialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Financial.
     * @param {FinancialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const financial = await prisma.financial.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FinancialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Financials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialCountArgs} args - Arguments to filter Financials to count.
     * @example
     * // Count the number of Financials
     * const count = await prisma.financial.count({
     *   where: {
     *     // ... the filter for the Financials we want to count
     *   }
     * })
    **/
    count<T extends FinancialCountArgs>(
      args?: Subset<T, FinancialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Financial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialAggregateArgs>(args: Subset<T, FinancialAggregateArgs>): Prisma.PrismaPromise<GetFinancialAggregateType<T>>

    /**
     * Group by Financial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialGroupByArgs} args - Group by arguments.
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
      T extends FinancialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialGroupByArgs['orderBy'] }
        : { orderBy?: FinancialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Financial model
   */
  readonly fields: FinancialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Financial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Financial$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Financial$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    costTracking<T extends Financial$costTrackingArgs<ExtArgs> = {}>(args?: Subset<T, Financial$costTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Financial model
   */ 
  interface FinancialFieldRefs {
    readonly id: FieldRef<"Financial", 'String'>
    readonly projectId: FieldRef<"Financial", 'String'>
    readonly budget: FieldRef<"Financial", 'Float'>
    readonly expenditure: FieldRef<"Financial", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Financial findUnique
   */
  export type FinancialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial findUniqueOrThrow
   */
  export type FinancialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial findFirst
   */
  export type FinancialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financials.
     */
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial findFirstOrThrow
   */
  export type FinancialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financial to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financials.
     */
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial findMany
   */
  export type FinancialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter, which Financials to fetch.
     */
    where?: FinancialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financials to fetch.
     */
    orderBy?: FinancialOrderByWithRelationInput | FinancialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Financials.
     */
    cursor?: FinancialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financials.
     */
    skip?: number
    distinct?: FinancialScalarFieldEnum | FinancialScalarFieldEnum[]
  }

  /**
   * Financial create
   */
  export type FinancialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The data needed to create a Financial.
     */
    data: XOR<FinancialCreateInput, FinancialUncheckedCreateInput>
  }

  /**
   * Financial createMany
   */
  export type FinancialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Financials.
     */
    data: FinancialCreateManyInput | FinancialCreateManyInput[]
  }

  /**
   * Financial update
   */
  export type FinancialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The data needed to update a Financial.
     */
    data: XOR<FinancialUpdateInput, FinancialUncheckedUpdateInput>
    /**
     * Choose, which Financial to update.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial updateMany
   */
  export type FinancialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Financials.
     */
    data: XOR<FinancialUpdateManyMutationInput, FinancialUncheckedUpdateManyInput>
    /**
     * Filter which Financials to update
     */
    where?: FinancialWhereInput
  }

  /**
   * Financial upsert
   */
  export type FinancialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * The filter to search for the Financial to update in case it exists.
     */
    where: FinancialWhereUniqueInput
    /**
     * In case the Financial found by the `where` argument doesn't exist, create a new Financial with this data.
     */
    create: XOR<FinancialCreateInput, FinancialUncheckedCreateInput>
    /**
     * In case the Financial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialUpdateInput, FinancialUncheckedUpdateInput>
  }

  /**
   * Financial delete
   */
  export type FinancialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
    /**
     * Filter which Financial to delete.
     */
    where: FinancialWhereUniqueInput
  }

  /**
   * Financial deleteMany
   */
  export type FinancialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financials to delete
     */
    where?: FinancialWhereInput
  }

  /**
   * Financial findRaw
   */
  export type FinancialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Financial aggregateRaw
   */
  export type FinancialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Financial.invoices
   */
  export type Financial$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Financial.costTracking
   */
  export type Financial$costTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    where?: CostTrackingWhereInput
    orderBy?: CostTrackingOrderByWithRelationInput | CostTrackingOrderByWithRelationInput[]
    cursor?: CostTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CostTrackingScalarFieldEnum | CostTrackingScalarFieldEnum[]
  }

  /**
   * Financial without action
   */
  export type FinancialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financial
     */
    select?: FinancialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    financialId: string | null
    invoiceNumber: string | null
    amount: number | null
    date: Date | null
    status: $Enums.InvoiceStatus | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    financialId: string | null
    invoiceNumber: string | null
    amount: number | null
    date: Date | null
    status: $Enums.InvoiceStatus | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    projectId: number
    financialId: number
    invoiceNumber: number
    amount: number
    date: number
    status: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    invoiceNumber?: true
    amount?: true
    date?: true
    status?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    invoiceNumber?: true
    amount?: true
    date?: true
    status?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    invoiceNumber?: true
    amount?: true
    date?: true
    status?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    projectId: string
    financialId: string
    invoiceNumber: string
    amount: number
    date: Date
    status: $Enums.InvoiceStatus
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    financialId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    date?: boolean
    status?: boolean
    financial?: boolean | FinancialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>


  export type InvoiceSelectScalar = {
    id?: boolean
    projectId?: boolean
    financialId?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    date?: boolean
    status?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financial?: boolean | FinancialDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      financial: Prisma.$FinancialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      financialId: string
      invoiceNumber: string
      amount: number
      date: Date
      status: $Enums.InvoiceStatus
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * @param {InvoiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invoice = await prisma.invoice.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InvoiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Invoice.
     * @param {InvoiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invoice = await prisma.invoice.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InvoiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financial<T extends FinancialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialDefaultArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly projectId: FieldRef<"Invoice", 'String'>
    readonly financialId: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice findRaw
   */
  export type InvoiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice aggregateRaw
   */
  export type InvoiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model CostTracking
   */

  export type AggregateCostTracking = {
    _count: CostTrackingCountAggregateOutputType | null
    _avg: CostTrackingAvgAggregateOutputType | null
    _sum: CostTrackingSumAggregateOutputType | null
    _min: CostTrackingMinAggregateOutputType | null
    _max: CostTrackingMaxAggregateOutputType | null
  }

  export type CostTrackingAvgAggregateOutputType = {
    amount: number | null
  }

  export type CostTrackingSumAggregateOutputType = {
    amount: number | null
  }

  export type CostTrackingMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    financialId: string | null
    category: string | null
    amount: number | null
    date: Date | null
  }

  export type CostTrackingMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    financialId: string | null
    category: string | null
    amount: number | null
    date: Date | null
  }

  export type CostTrackingCountAggregateOutputType = {
    id: number
    projectId: number
    financialId: number
    category: number
    amount: number
    date: number
    _all: number
  }


  export type CostTrackingAvgAggregateInputType = {
    amount?: true
  }

  export type CostTrackingSumAggregateInputType = {
    amount?: true
  }

  export type CostTrackingMinAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    category?: true
    amount?: true
    date?: true
  }

  export type CostTrackingMaxAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    category?: true
    amount?: true
    date?: true
  }

  export type CostTrackingCountAggregateInputType = {
    id?: true
    projectId?: true
    financialId?: true
    category?: true
    amount?: true
    date?: true
    _all?: true
  }

  export type CostTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostTracking to aggregate.
     */
    where?: CostTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostTrackings to fetch.
     */
    orderBy?: CostTrackingOrderByWithRelationInput | CostTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CostTrackings
    **/
    _count?: true | CostTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostTrackingMaxAggregateInputType
  }

  export type GetCostTrackingAggregateType<T extends CostTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateCostTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostTracking[P]>
      : GetScalarType<T[P], AggregateCostTracking[P]>
  }




  export type CostTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostTrackingWhereInput
    orderBy?: CostTrackingOrderByWithAggregationInput | CostTrackingOrderByWithAggregationInput[]
    by: CostTrackingScalarFieldEnum[] | CostTrackingScalarFieldEnum
    having?: CostTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostTrackingCountAggregateInputType | true
    _avg?: CostTrackingAvgAggregateInputType
    _sum?: CostTrackingSumAggregateInputType
    _min?: CostTrackingMinAggregateInputType
    _max?: CostTrackingMaxAggregateInputType
  }

  export type CostTrackingGroupByOutputType = {
    id: string
    projectId: string
    financialId: string
    category: string
    amount: number
    date: Date
    _count: CostTrackingCountAggregateOutputType | null
    _avg: CostTrackingAvgAggregateOutputType | null
    _sum: CostTrackingSumAggregateOutputType | null
    _min: CostTrackingMinAggregateOutputType | null
    _max: CostTrackingMaxAggregateOutputType | null
  }

  type GetCostTrackingGroupByPayload<T extends CostTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], CostTrackingGroupByOutputType[P]>
        }
      >
    >


  export type CostTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    financialId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    financial?: boolean | FinancialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costTracking"]>


  export type CostTrackingSelectScalar = {
    id?: boolean
    projectId?: boolean
    financialId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
  }

  export type CostTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financial?: boolean | FinancialDefaultArgs<ExtArgs>
  }

  export type $CostTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CostTracking"
    objects: {
      financial: Prisma.$FinancialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      financialId: string
      category: string
      amount: number
      date: Date
    }, ExtArgs["result"]["costTracking"]>
    composites: {}
  }

  type CostTrackingGetPayload<S extends boolean | null | undefined | CostTrackingDefaultArgs> = $Result.GetResult<Prisma.$CostTrackingPayload, S>

  type CostTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CostTrackingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CostTrackingCountAggregateInputType | true
    }

  export interface CostTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CostTracking'], meta: { name: 'CostTracking' } }
    /**
     * Find zero or one CostTracking that matches the filter.
     * @param {CostTrackingFindUniqueArgs} args - Arguments to find a CostTracking
     * @example
     * // Get one CostTracking
     * const costTracking = await prisma.costTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostTrackingFindUniqueArgs>(args: SelectSubset<T, CostTrackingFindUniqueArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CostTracking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CostTrackingFindUniqueOrThrowArgs} args - Arguments to find a CostTracking
     * @example
     * // Get one CostTracking
     * const costTracking = await prisma.costTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, CostTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CostTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingFindFirstArgs} args - Arguments to find a CostTracking
     * @example
     * // Get one CostTracking
     * const costTracking = await prisma.costTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostTrackingFindFirstArgs>(args?: SelectSubset<T, CostTrackingFindFirstArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CostTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingFindFirstOrThrowArgs} args - Arguments to find a CostTracking
     * @example
     * // Get one CostTracking
     * const costTracking = await prisma.costTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, CostTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CostTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CostTrackings
     * const costTrackings = await prisma.costTracking.findMany()
     * 
     * // Get first 10 CostTrackings
     * const costTrackings = await prisma.costTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costTrackingWithIdOnly = await prisma.costTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CostTrackingFindManyArgs>(args?: SelectSubset<T, CostTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CostTracking.
     * @param {CostTrackingCreateArgs} args - Arguments to create a CostTracking.
     * @example
     * // Create one CostTracking
     * const CostTracking = await prisma.costTracking.create({
     *   data: {
     *     // ... data to create a CostTracking
     *   }
     * })
     * 
     */
    create<T extends CostTrackingCreateArgs>(args: SelectSubset<T, CostTrackingCreateArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CostTrackings.
     * @param {CostTrackingCreateManyArgs} args - Arguments to create many CostTrackings.
     * @example
     * // Create many CostTrackings
     * const costTracking = await prisma.costTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CostTrackingCreateManyArgs>(args?: SelectSubset<T, CostTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CostTracking.
     * @param {CostTrackingDeleteArgs} args - Arguments to delete one CostTracking.
     * @example
     * // Delete one CostTracking
     * const CostTracking = await prisma.costTracking.delete({
     *   where: {
     *     // ... filter to delete one CostTracking
     *   }
     * })
     * 
     */
    delete<T extends CostTrackingDeleteArgs>(args: SelectSubset<T, CostTrackingDeleteArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CostTracking.
     * @param {CostTrackingUpdateArgs} args - Arguments to update one CostTracking.
     * @example
     * // Update one CostTracking
     * const costTracking = await prisma.costTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CostTrackingUpdateArgs>(args: SelectSubset<T, CostTrackingUpdateArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CostTrackings.
     * @param {CostTrackingDeleteManyArgs} args - Arguments to filter CostTrackings to delete.
     * @example
     * // Delete a few CostTrackings
     * const { count } = await prisma.costTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CostTrackingDeleteManyArgs>(args?: SelectSubset<T, CostTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CostTrackings
     * const costTracking = await prisma.costTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CostTrackingUpdateManyArgs>(args: SelectSubset<T, CostTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CostTracking.
     * @param {CostTrackingUpsertArgs} args - Arguments to update or create a CostTracking.
     * @example
     * // Update or create a CostTracking
     * const costTracking = await prisma.costTracking.upsert({
     *   create: {
     *     // ... data to create a CostTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CostTracking we want to update
     *   }
     * })
     */
    upsert<T extends CostTrackingUpsertArgs>(args: SelectSubset<T, CostTrackingUpsertArgs<ExtArgs>>): Prisma__CostTrackingClient<$Result.GetResult<Prisma.$CostTrackingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more CostTrackings that matches the filter.
     * @param {CostTrackingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const costTracking = await prisma.costTracking.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: CostTrackingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CostTracking.
     * @param {CostTrackingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const costTracking = await prisma.costTracking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CostTrackingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CostTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingCountArgs} args - Arguments to filter CostTrackings to count.
     * @example
     * // Count the number of CostTrackings
     * const count = await prisma.costTracking.count({
     *   where: {
     *     // ... the filter for the CostTrackings we want to count
     *   }
     * })
    **/
    count<T extends CostTrackingCountArgs>(
      args?: Subset<T, CostTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CostTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CostTrackingAggregateArgs>(args: Subset<T, CostTrackingAggregateArgs>): Prisma.PrismaPromise<GetCostTrackingAggregateType<T>>

    /**
     * Group by CostTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostTrackingGroupByArgs} args - Group by arguments.
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
      T extends CostTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostTrackingGroupByArgs['orderBy'] }
        : { orderBy?: CostTrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CostTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CostTracking model
   */
  readonly fields: CostTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CostTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financial<T extends FinancialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialDefaultArgs<ExtArgs>>): Prisma__FinancialClient<$Result.GetResult<Prisma.$FinancialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CostTracking model
   */ 
  interface CostTrackingFieldRefs {
    readonly id: FieldRef<"CostTracking", 'String'>
    readonly projectId: FieldRef<"CostTracking", 'String'>
    readonly financialId: FieldRef<"CostTracking", 'String'>
    readonly category: FieldRef<"CostTracking", 'String'>
    readonly amount: FieldRef<"CostTracking", 'Float'>
    readonly date: FieldRef<"CostTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CostTracking findUnique
   */
  export type CostTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter, which CostTracking to fetch.
     */
    where: CostTrackingWhereUniqueInput
  }

  /**
   * CostTracking findUniqueOrThrow
   */
  export type CostTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter, which CostTracking to fetch.
     */
    where: CostTrackingWhereUniqueInput
  }

  /**
   * CostTracking findFirst
   */
  export type CostTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter, which CostTracking to fetch.
     */
    where?: CostTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostTrackings to fetch.
     */
    orderBy?: CostTrackingOrderByWithRelationInput | CostTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostTrackings.
     */
    cursor?: CostTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostTrackings.
     */
    distinct?: CostTrackingScalarFieldEnum | CostTrackingScalarFieldEnum[]
  }

  /**
   * CostTracking findFirstOrThrow
   */
  export type CostTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter, which CostTracking to fetch.
     */
    where?: CostTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostTrackings to fetch.
     */
    orderBy?: CostTrackingOrderByWithRelationInput | CostTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostTrackings.
     */
    cursor?: CostTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostTrackings.
     */
    distinct?: CostTrackingScalarFieldEnum | CostTrackingScalarFieldEnum[]
  }

  /**
   * CostTracking findMany
   */
  export type CostTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter, which CostTrackings to fetch.
     */
    where?: CostTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostTrackings to fetch.
     */
    orderBy?: CostTrackingOrderByWithRelationInput | CostTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CostTrackings.
     */
    cursor?: CostTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostTrackings.
     */
    skip?: number
    distinct?: CostTrackingScalarFieldEnum | CostTrackingScalarFieldEnum[]
  }

  /**
   * CostTracking create
   */
  export type CostTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a CostTracking.
     */
    data: XOR<CostTrackingCreateInput, CostTrackingUncheckedCreateInput>
  }

  /**
   * CostTracking createMany
   */
  export type CostTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CostTrackings.
     */
    data: CostTrackingCreateManyInput | CostTrackingCreateManyInput[]
  }

  /**
   * CostTracking update
   */
  export type CostTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a CostTracking.
     */
    data: XOR<CostTrackingUpdateInput, CostTrackingUncheckedUpdateInput>
    /**
     * Choose, which CostTracking to update.
     */
    where: CostTrackingWhereUniqueInput
  }

  /**
   * CostTracking updateMany
   */
  export type CostTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CostTrackings.
     */
    data: XOR<CostTrackingUpdateManyMutationInput, CostTrackingUncheckedUpdateManyInput>
    /**
     * Filter which CostTrackings to update
     */
    where?: CostTrackingWhereInput
  }

  /**
   * CostTracking upsert
   */
  export type CostTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the CostTracking to update in case it exists.
     */
    where: CostTrackingWhereUniqueInput
    /**
     * In case the CostTracking found by the `where` argument doesn't exist, create a new CostTracking with this data.
     */
    create: XOR<CostTrackingCreateInput, CostTrackingUncheckedCreateInput>
    /**
     * In case the CostTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostTrackingUpdateInput, CostTrackingUncheckedUpdateInput>
  }

  /**
   * CostTracking delete
   */
  export type CostTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
    /**
     * Filter which CostTracking to delete.
     */
    where: CostTrackingWhereUniqueInput
  }

  /**
   * CostTracking deleteMany
   */
  export type CostTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostTrackings to delete
     */
    where?: CostTrackingWhereInput
  }

  /**
   * CostTracking findRaw
   */
  export type CostTrackingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CostTracking aggregateRaw
   */
  export type CostTrackingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CostTracking without action
   */
  export type CostTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostTracking
     */
    select?: CostTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostTrackingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const FinancialScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    budget: 'budget',
    expenditure: 'expenditure'
  };

  export type FinancialScalarFieldEnum = (typeof FinancialScalarFieldEnum)[keyof typeof FinancialScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    financialId: 'financialId',
    invoiceNumber: 'invoiceNumber',
    amount: 'amount',
    date: 'date',
    status: 'status'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const CostTrackingScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    financialId: 'financialId',
    category: 'category',
    amount: 'amount',
    date: 'date'
  };

  export type CostTrackingScalarFieldEnum = (typeof CostTrackingScalarFieldEnum)[keyof typeof CostTrackingScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FinancialWhereInput = {
    AND?: FinancialWhereInput | FinancialWhereInput[]
    OR?: FinancialWhereInput[]
    NOT?: FinancialWhereInput | FinancialWhereInput[]
    id?: StringFilter<"Financial"> | string
    projectId?: StringFilter<"Financial"> | string
    budget?: FloatFilter<"Financial"> | number
    expenditure?: FloatFilter<"Financial"> | number
    invoices?: InvoiceListRelationFilter
    costTracking?: CostTrackingListRelationFilter
  }

  export type FinancialOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    costTracking?: CostTrackingOrderByRelationAggregateInput
  }

  export type FinancialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialWhereInput | FinancialWhereInput[]
    OR?: FinancialWhereInput[]
    NOT?: FinancialWhereInput | FinancialWhereInput[]
    projectId?: StringFilter<"Financial"> | string
    budget?: FloatFilter<"Financial"> | number
    expenditure?: FloatFilter<"Financial"> | number
    invoices?: InvoiceListRelationFilter
    costTracking?: CostTrackingListRelationFilter
  }, "id">

  export type FinancialOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
    _count?: FinancialCountOrderByAggregateInput
    _avg?: FinancialAvgOrderByAggregateInput
    _max?: FinancialMaxOrderByAggregateInput
    _min?: FinancialMinOrderByAggregateInput
    _sum?: FinancialSumOrderByAggregateInput
  }

  export type FinancialScalarWhereWithAggregatesInput = {
    AND?: FinancialScalarWhereWithAggregatesInput | FinancialScalarWhereWithAggregatesInput[]
    OR?: FinancialScalarWhereWithAggregatesInput[]
    NOT?: FinancialScalarWhereWithAggregatesInput | FinancialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Financial"> | string
    projectId?: StringWithAggregatesFilter<"Financial"> | string
    budget?: FloatWithAggregatesFilter<"Financial"> | number
    expenditure?: FloatWithAggregatesFilter<"Financial"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    projectId?: StringFilter<"Invoice"> | string
    financialId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    financial?: XOR<FinancialScalarRelationFilter, FinancialWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    financial?: FinancialOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    projectId?: StringFilter<"Invoice"> | string
    financialId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    financial?: XOR<FinancialScalarRelationFilter, FinancialWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    projectId?: StringWithAggregatesFilter<"Invoice"> | string
    financialId?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
  }

  export type CostTrackingWhereInput = {
    AND?: CostTrackingWhereInput | CostTrackingWhereInput[]
    OR?: CostTrackingWhereInput[]
    NOT?: CostTrackingWhereInput | CostTrackingWhereInput[]
    id?: StringFilter<"CostTracking"> | string
    projectId?: StringFilter<"CostTracking"> | string
    financialId?: StringFilter<"CostTracking"> | string
    category?: StringFilter<"CostTracking"> | string
    amount?: FloatFilter<"CostTracking"> | number
    date?: DateTimeFilter<"CostTracking"> | Date | string
    financial?: XOR<FinancialScalarRelationFilter, FinancialWhereInput>
  }

  export type CostTrackingOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    financial?: FinancialOrderByWithRelationInput
  }

  export type CostTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CostTrackingWhereInput | CostTrackingWhereInput[]
    OR?: CostTrackingWhereInput[]
    NOT?: CostTrackingWhereInput | CostTrackingWhereInput[]
    projectId?: StringFilter<"CostTracking"> | string
    financialId?: StringFilter<"CostTracking"> | string
    category?: StringFilter<"CostTracking"> | string
    amount?: FloatFilter<"CostTracking"> | number
    date?: DateTimeFilter<"CostTracking"> | Date | string
    financial?: XOR<FinancialScalarRelationFilter, FinancialWhereInput>
  }, "id">

  export type CostTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    _count?: CostTrackingCountOrderByAggregateInput
    _avg?: CostTrackingAvgOrderByAggregateInput
    _max?: CostTrackingMaxOrderByAggregateInput
    _min?: CostTrackingMinOrderByAggregateInput
    _sum?: CostTrackingSumOrderByAggregateInput
  }

  export type CostTrackingScalarWhereWithAggregatesInput = {
    AND?: CostTrackingScalarWhereWithAggregatesInput | CostTrackingScalarWhereWithAggregatesInput[]
    OR?: CostTrackingScalarWhereWithAggregatesInput[]
    NOT?: CostTrackingScalarWhereWithAggregatesInput | CostTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CostTracking"> | string
    projectId?: StringWithAggregatesFilter<"CostTracking"> | string
    financialId?: StringWithAggregatesFilter<"CostTracking"> | string
    category?: StringWithAggregatesFilter<"CostTracking"> | string
    amount?: FloatWithAggregatesFilter<"CostTracking"> | number
    date?: DateTimeWithAggregatesFilter<"CostTracking"> | Date | string
  }

  export type FinancialCreateInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    invoices?: InvoiceCreateNestedManyWithoutFinancialInput
    costTracking?: CostTrackingCreateNestedManyWithoutFinancialInput
  }

  export type FinancialUncheckedCreateInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutFinancialInput
    costTracking?: CostTrackingUncheckedCreateNestedManyWithoutFinancialInput
  }

  export type FinancialUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutFinancialNestedInput
    costTracking?: CostTrackingUpdateManyWithoutFinancialNestedInput
  }

  export type FinancialUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutFinancialNestedInput
    costTracking?: CostTrackingUncheckedUpdateManyWithoutFinancialNestedInput
  }

  export type FinancialCreateManyInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
  }

  export type FinancialUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
  }

  export type FinancialUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    id?: string
    projectId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
    financial: FinancialCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    projectId: string
    financialId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
  }

  export type InvoiceUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    financial?: FinancialUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    financialId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type InvoiceCreateManyInput = {
    id?: string
    projectId: string
    financialId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
  }

  export type InvoiceUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type InvoiceUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    financialId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type CostTrackingCreateInput = {
    id?: string
    projectId: string
    category: string
    amount: number
    date: Date | string
    financial: FinancialCreateNestedOneWithoutCostTrackingInput
  }

  export type CostTrackingUncheckedCreateInput = {
    id?: string
    projectId: string
    financialId: string
    category: string
    amount: number
    date: Date | string
  }

  export type CostTrackingUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    financial?: FinancialUpdateOneRequiredWithoutCostTrackingNestedInput
  }

  export type CostTrackingUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    financialId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostTrackingCreateManyInput = {
    id?: string
    projectId: string
    financialId: string
    category: string
    amount: number
    date: Date | string
  }

  export type CostTrackingUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostTrackingUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    financialId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type CostTrackingListRelationFilter = {
    every?: CostTrackingWhereInput
    some?: CostTrackingWhereInput
    none?: CostTrackingWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CostTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
  }

  export type FinancialAvgOrderByAggregateInput = {
    budget?: SortOrder
    expenditure?: SortOrder
  }

  export type FinancialMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
  }

  export type FinancialMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
  }

  export type FinancialSumOrderByAggregateInput = {
    budget?: SortOrder
    expenditure?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type FinancialScalarRelationFilter = {
    is?: FinancialWhereInput
    isNot?: FinancialWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type CostTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type CostTrackingAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CostTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type CostTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    financialId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type CostTrackingSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceCreateNestedManyWithoutFinancialInput = {
    create?: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput> | InvoiceCreateWithoutFinancialInput[] | InvoiceUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFinancialInput | InvoiceCreateOrConnectWithoutFinancialInput[]
    createMany?: InvoiceCreateManyFinancialInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type CostTrackingCreateNestedManyWithoutFinancialInput = {
    create?: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput> | CostTrackingCreateWithoutFinancialInput[] | CostTrackingUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: CostTrackingCreateOrConnectWithoutFinancialInput | CostTrackingCreateOrConnectWithoutFinancialInput[]
    createMany?: CostTrackingCreateManyFinancialInputEnvelope
    connect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutFinancialInput = {
    create?: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput> | InvoiceCreateWithoutFinancialInput[] | InvoiceUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFinancialInput | InvoiceCreateOrConnectWithoutFinancialInput[]
    createMany?: InvoiceCreateManyFinancialInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type CostTrackingUncheckedCreateNestedManyWithoutFinancialInput = {
    create?: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput> | CostTrackingCreateWithoutFinancialInput[] | CostTrackingUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: CostTrackingCreateOrConnectWithoutFinancialInput | CostTrackingCreateOrConnectWithoutFinancialInput[]
    createMany?: CostTrackingCreateManyFinancialInputEnvelope
    connect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUpdateManyWithoutFinancialNestedInput = {
    create?: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput> | InvoiceCreateWithoutFinancialInput[] | InvoiceUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFinancialInput | InvoiceCreateOrConnectWithoutFinancialInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFinancialInput | InvoiceUpsertWithWhereUniqueWithoutFinancialInput[]
    createMany?: InvoiceCreateManyFinancialInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFinancialInput | InvoiceUpdateWithWhereUniqueWithoutFinancialInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFinancialInput | InvoiceUpdateManyWithWhereWithoutFinancialInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CostTrackingUpdateManyWithoutFinancialNestedInput = {
    create?: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput> | CostTrackingCreateWithoutFinancialInput[] | CostTrackingUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: CostTrackingCreateOrConnectWithoutFinancialInput | CostTrackingCreateOrConnectWithoutFinancialInput[]
    upsert?: CostTrackingUpsertWithWhereUniqueWithoutFinancialInput | CostTrackingUpsertWithWhereUniqueWithoutFinancialInput[]
    createMany?: CostTrackingCreateManyFinancialInputEnvelope
    set?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    disconnect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    delete?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    connect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    update?: CostTrackingUpdateWithWhereUniqueWithoutFinancialInput | CostTrackingUpdateWithWhereUniqueWithoutFinancialInput[]
    updateMany?: CostTrackingUpdateManyWithWhereWithoutFinancialInput | CostTrackingUpdateManyWithWhereWithoutFinancialInput[]
    deleteMany?: CostTrackingScalarWhereInput | CostTrackingScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutFinancialNestedInput = {
    create?: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput> | InvoiceCreateWithoutFinancialInput[] | InvoiceUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFinancialInput | InvoiceCreateOrConnectWithoutFinancialInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFinancialInput | InvoiceUpsertWithWhereUniqueWithoutFinancialInput[]
    createMany?: InvoiceCreateManyFinancialInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFinancialInput | InvoiceUpdateWithWhereUniqueWithoutFinancialInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFinancialInput | InvoiceUpdateManyWithWhereWithoutFinancialInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CostTrackingUncheckedUpdateManyWithoutFinancialNestedInput = {
    create?: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput> | CostTrackingCreateWithoutFinancialInput[] | CostTrackingUncheckedCreateWithoutFinancialInput[]
    connectOrCreate?: CostTrackingCreateOrConnectWithoutFinancialInput | CostTrackingCreateOrConnectWithoutFinancialInput[]
    upsert?: CostTrackingUpsertWithWhereUniqueWithoutFinancialInput | CostTrackingUpsertWithWhereUniqueWithoutFinancialInput[]
    createMany?: CostTrackingCreateManyFinancialInputEnvelope
    set?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    disconnect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    delete?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    connect?: CostTrackingWhereUniqueInput | CostTrackingWhereUniqueInput[]
    update?: CostTrackingUpdateWithWhereUniqueWithoutFinancialInput | CostTrackingUpdateWithWhereUniqueWithoutFinancialInput[]
    updateMany?: CostTrackingUpdateManyWithWhereWithoutFinancialInput | CostTrackingUpdateManyWithWhereWithoutFinancialInput[]
    deleteMany?: CostTrackingScalarWhereInput | CostTrackingScalarWhereInput[]
  }

  export type FinancialCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<FinancialCreateWithoutInvoicesInput, FinancialUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: FinancialCreateOrConnectWithoutInvoicesInput
    connect?: FinancialWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type FinancialUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<FinancialCreateWithoutInvoicesInput, FinancialUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: FinancialCreateOrConnectWithoutInvoicesInput
    upsert?: FinancialUpsertWithoutInvoicesInput
    connect?: FinancialWhereUniqueInput
    update?: XOR<XOR<FinancialUpdateToOneWithWhereWithoutInvoicesInput, FinancialUpdateWithoutInvoicesInput>, FinancialUncheckedUpdateWithoutInvoicesInput>
  }

  export type FinancialCreateNestedOneWithoutCostTrackingInput = {
    create?: XOR<FinancialCreateWithoutCostTrackingInput, FinancialUncheckedCreateWithoutCostTrackingInput>
    connectOrCreate?: FinancialCreateOrConnectWithoutCostTrackingInput
    connect?: FinancialWhereUniqueInput
  }

  export type FinancialUpdateOneRequiredWithoutCostTrackingNestedInput = {
    create?: XOR<FinancialCreateWithoutCostTrackingInput, FinancialUncheckedCreateWithoutCostTrackingInput>
    connectOrCreate?: FinancialCreateOrConnectWithoutCostTrackingInput
    upsert?: FinancialUpsertWithoutCostTrackingInput
    connect?: FinancialWhereUniqueInput
    update?: XOR<XOR<FinancialUpdateToOneWithWhereWithoutCostTrackingInput, FinancialUpdateWithoutCostTrackingInput>, FinancialUncheckedUpdateWithoutCostTrackingInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
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

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type InvoiceCreateWithoutFinancialInput = {
    id?: string
    projectId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
  }

  export type InvoiceUncheckedCreateWithoutFinancialInput = {
    id?: string
    projectId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
  }

  export type InvoiceCreateOrConnectWithoutFinancialInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput>
  }

  export type InvoiceCreateManyFinancialInputEnvelope = {
    data: InvoiceCreateManyFinancialInput | InvoiceCreateManyFinancialInput[]
  }

  export type CostTrackingCreateWithoutFinancialInput = {
    id?: string
    projectId: string
    category: string
    amount: number
    date: Date | string
  }

  export type CostTrackingUncheckedCreateWithoutFinancialInput = {
    id?: string
    projectId: string
    category: string
    amount: number
    date: Date | string
  }

  export type CostTrackingCreateOrConnectWithoutFinancialInput = {
    where: CostTrackingWhereUniqueInput
    create: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput>
  }

  export type CostTrackingCreateManyFinancialInputEnvelope = {
    data: CostTrackingCreateManyFinancialInput | CostTrackingCreateManyFinancialInput[]
  }

  export type InvoiceUpsertWithWhereUniqueWithoutFinancialInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutFinancialInput, InvoiceUncheckedUpdateWithoutFinancialInput>
    create: XOR<InvoiceCreateWithoutFinancialInput, InvoiceUncheckedCreateWithoutFinancialInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutFinancialInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutFinancialInput, InvoiceUncheckedUpdateWithoutFinancialInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutFinancialInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutFinancialInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    projectId?: StringFilter<"Invoice"> | string
    financialId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
  }

  export type CostTrackingUpsertWithWhereUniqueWithoutFinancialInput = {
    where: CostTrackingWhereUniqueInput
    update: XOR<CostTrackingUpdateWithoutFinancialInput, CostTrackingUncheckedUpdateWithoutFinancialInput>
    create: XOR<CostTrackingCreateWithoutFinancialInput, CostTrackingUncheckedCreateWithoutFinancialInput>
  }

  export type CostTrackingUpdateWithWhereUniqueWithoutFinancialInput = {
    where: CostTrackingWhereUniqueInput
    data: XOR<CostTrackingUpdateWithoutFinancialInput, CostTrackingUncheckedUpdateWithoutFinancialInput>
  }

  export type CostTrackingUpdateManyWithWhereWithoutFinancialInput = {
    where: CostTrackingScalarWhereInput
    data: XOR<CostTrackingUpdateManyMutationInput, CostTrackingUncheckedUpdateManyWithoutFinancialInput>
  }

  export type CostTrackingScalarWhereInput = {
    AND?: CostTrackingScalarWhereInput | CostTrackingScalarWhereInput[]
    OR?: CostTrackingScalarWhereInput[]
    NOT?: CostTrackingScalarWhereInput | CostTrackingScalarWhereInput[]
    id?: StringFilter<"CostTracking"> | string
    projectId?: StringFilter<"CostTracking"> | string
    financialId?: StringFilter<"CostTracking"> | string
    category?: StringFilter<"CostTracking"> | string
    amount?: FloatFilter<"CostTracking"> | number
    date?: DateTimeFilter<"CostTracking"> | Date | string
  }

  export type FinancialCreateWithoutInvoicesInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    costTracking?: CostTrackingCreateNestedManyWithoutFinancialInput
  }

  export type FinancialUncheckedCreateWithoutInvoicesInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    costTracking?: CostTrackingUncheckedCreateNestedManyWithoutFinancialInput
  }

  export type FinancialCreateOrConnectWithoutInvoicesInput = {
    where: FinancialWhereUniqueInput
    create: XOR<FinancialCreateWithoutInvoicesInput, FinancialUncheckedCreateWithoutInvoicesInput>
  }

  export type FinancialUpsertWithoutInvoicesInput = {
    update: XOR<FinancialUpdateWithoutInvoicesInput, FinancialUncheckedUpdateWithoutInvoicesInput>
    create: XOR<FinancialCreateWithoutInvoicesInput, FinancialUncheckedCreateWithoutInvoicesInput>
    where?: FinancialWhereInput
  }

  export type FinancialUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: FinancialWhereInput
    data: XOR<FinancialUpdateWithoutInvoicesInput, FinancialUncheckedUpdateWithoutInvoicesInput>
  }

  export type FinancialUpdateWithoutInvoicesInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    costTracking?: CostTrackingUpdateManyWithoutFinancialNestedInput
  }

  export type FinancialUncheckedUpdateWithoutInvoicesInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    costTracking?: CostTrackingUncheckedUpdateManyWithoutFinancialNestedInput
  }

  export type FinancialCreateWithoutCostTrackingInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    invoices?: InvoiceCreateNestedManyWithoutFinancialInput
  }

  export type FinancialUncheckedCreateWithoutCostTrackingInput = {
    id?: string
    projectId: string
    budget: number
    expenditure: number
    invoices?: InvoiceUncheckedCreateNestedManyWithoutFinancialInput
  }

  export type FinancialCreateOrConnectWithoutCostTrackingInput = {
    where: FinancialWhereUniqueInput
    create: XOR<FinancialCreateWithoutCostTrackingInput, FinancialUncheckedCreateWithoutCostTrackingInput>
  }

  export type FinancialUpsertWithoutCostTrackingInput = {
    update: XOR<FinancialUpdateWithoutCostTrackingInput, FinancialUncheckedUpdateWithoutCostTrackingInput>
    create: XOR<FinancialCreateWithoutCostTrackingInput, FinancialUncheckedCreateWithoutCostTrackingInput>
    where?: FinancialWhereInput
  }

  export type FinancialUpdateToOneWithWhereWithoutCostTrackingInput = {
    where?: FinancialWhereInput
    data: XOR<FinancialUpdateWithoutCostTrackingInput, FinancialUncheckedUpdateWithoutCostTrackingInput>
  }

  export type FinancialUpdateWithoutCostTrackingInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    invoices?: InvoiceUpdateManyWithoutFinancialNestedInput
  }

  export type FinancialUncheckedUpdateWithoutCostTrackingInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    expenditure?: FloatFieldUpdateOperationsInput | number
    invoices?: InvoiceUncheckedUpdateManyWithoutFinancialNestedInput
  }

  export type InvoiceCreateManyFinancialInput = {
    id?: string
    projectId: string
    invoiceNumber: string
    amount: number
    date: Date | string
    status: $Enums.InvoiceStatus
  }

  export type CostTrackingCreateManyFinancialInput = {
    id?: string
    projectId: string
    category: string
    amount: number
    date: Date | string
  }

  export type InvoiceUpdateWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type InvoiceUncheckedUpdateWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type InvoiceUncheckedUpdateManyWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
  }

  export type CostTrackingUpdateWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostTrackingUncheckedUpdateWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostTrackingUncheckedUpdateManyWithoutFinancialInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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