
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionDevice
 * 
 */
export type SessionDevice = $Result.DefaultSelection<Prisma.$SessionDevicePayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model ProfileChange
 * 
 */
export type ProfileChange = $Result.DefaultSelection<Prisma.$ProfileChangePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model VideoMedia
 * 
 */
export type VideoMedia = $Result.DefaultSelection<Prisma.$VideoMediaPayload>
/**
 * Model VideoStat
 * 
 */
export type VideoStat = $Result.DefaultSelection<Prisma.$VideoStatPayload>
/**
 * Model VideoSetting
 * 
 */
export type VideoSetting = $Result.DefaultSelection<Prisma.$VideoSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const DeviceType: {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
  UNKNOWN: 'UNKNOWN'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const ChannelStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED',
  SUSPENDED: 'SUSPENDED'
};

export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus]


export const VideoPrivacy: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type VideoPrivacy = (typeof VideoPrivacy)[keyof typeof VideoPrivacy]


export const VideoStatus: {
  PROCESSING: 'PROCESSING',
  UPLOADED: 'UPLOADED',
  UPLOAD_FAILED: 'UPLOAD_FAILED',
  BLOCKED: 'BLOCKED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]


export const CommentAudience: {
  EVERYONE: 'EVERYONE',
  SUBSCRIBERS: 'SUBSCRIBERS',
  NONE: 'NONE'
};

export type CommentAudience = (typeof CommentAudience)[keyof typeof CommentAudience]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type ChannelStatus = $Enums.ChannelStatus

export const ChannelStatus: typeof $Enums.ChannelStatus

export type VideoPrivacy = $Enums.VideoPrivacy

export const VideoPrivacy: typeof $Enums.VideoPrivacy

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

export type CommentAudience = $Enums.CommentAudience

export const CommentAudience: typeof $Enums.CommentAudience

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionDevice`: Exposes CRUD operations for the **SessionDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionDevices
    * const sessionDevices = await prisma.sessionDevice.findMany()
    * ```
    */
  get sessionDevice(): Prisma.SessionDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileChange`: Exposes CRUD operations for the **ProfileChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileChanges
    * const profileChanges = await prisma.profileChange.findMany()
    * ```
    */
  get profileChange(): Prisma.ProfileChangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoMedia`: Exposes CRUD operations for the **VideoMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoMedias
    * const videoMedias = await prisma.videoMedia.findMany()
    * ```
    */
  get videoMedia(): Prisma.VideoMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoStat`: Exposes CRUD operations for the **VideoStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoStats
    * const videoStats = await prisma.videoStat.findMany()
    * ```
    */
  get videoStat(): Prisma.VideoStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoSetting`: Exposes CRUD operations for the **VideoSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoSettings
    * const videoSettings = await prisma.videoSetting.findMany()
    * ```
    */
  get videoSetting(): Prisma.VideoSettingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    Session: 'Session',
    SessionDevice: 'SessionDevice',
    Channel: 'Channel',
    ProfileChange: 'ProfileChange',
    Video: 'Video',
    VideoMedia: 'VideoMedia',
    VideoStat: 'VideoStat',
    VideoSetting: 'VideoSetting'
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
      modelProps: "user" | "session" | "sessionDevice" | "channel" | "profileChange" | "video" | "videoMedia" | "videoStat" | "videoSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      SessionDevice: {
        payload: Prisma.$SessionDevicePayload<ExtArgs>
        fields: Prisma.SessionDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          findFirst: {
            args: Prisma.SessionDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          findMany: {
            args: Prisma.SessionDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>[]
          }
          create: {
            args: Prisma.SessionDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          createMany: {
            args: Prisma.SessionDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>[]
          }
          delete: {
            args: Prisma.SessionDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          update: {
            args: Prisma.SessionDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          deleteMany: {
            args: Prisma.SessionDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>[]
          }
          upsert: {
            args: Prisma.SessionDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionDevicePayload>
          }
          aggregate: {
            args: Prisma.SessionDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionDevice>
          }
          groupBy: {
            args: Prisma.SessionDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<SessionDeviceCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      ProfileChange: {
        payload: Prisma.$ProfileChangePayload<ExtArgs>
        fields: Prisma.ProfileChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          findFirst: {
            args: Prisma.ProfileChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          findMany: {
            args: Prisma.ProfileChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>[]
          }
          create: {
            args: Prisma.ProfileChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          createMany: {
            args: Prisma.ProfileChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>[]
          }
          delete: {
            args: Prisma.ProfileChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          update: {
            args: Prisma.ProfileChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          deleteMany: {
            args: Prisma.ProfileChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileChangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>[]
          }
          upsert: {
            args: Prisma.ProfileChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileChangePayload>
          }
          aggregate: {
            args: Prisma.ProfileChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileChange>
          }
          groupBy: {
            args: Prisma.ProfileChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileChangeCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileChangeCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      VideoMedia: {
        payload: Prisma.$VideoMediaPayload<ExtArgs>
        fields: Prisma.VideoMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          findFirst: {
            args: Prisma.VideoMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          findMany: {
            args: Prisma.VideoMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>[]
          }
          create: {
            args: Prisma.VideoMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          createMany: {
            args: Prisma.VideoMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>[]
          }
          delete: {
            args: Prisma.VideoMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          update: {
            args: Prisma.VideoMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          deleteMany: {
            args: Prisma.VideoMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>[]
          }
          upsert: {
            args: Prisma.VideoMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoMediaPayload>
          }
          aggregate: {
            args: Prisma.VideoMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoMedia>
          }
          groupBy: {
            args: Prisma.VideoMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoMediaCountArgs<ExtArgs>
            result: $Utils.Optional<VideoMediaCountAggregateOutputType> | number
          }
        }
      }
      VideoStat: {
        payload: Prisma.$VideoStatPayload<ExtArgs>
        fields: Prisma.VideoStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          findFirst: {
            args: Prisma.VideoStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          findMany: {
            args: Prisma.VideoStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>[]
          }
          create: {
            args: Prisma.VideoStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          createMany: {
            args: Prisma.VideoStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>[]
          }
          delete: {
            args: Prisma.VideoStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          update: {
            args: Prisma.VideoStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          deleteMany: {
            args: Prisma.VideoStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>[]
          }
          upsert: {
            args: Prisma.VideoStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoStatPayload>
          }
          aggregate: {
            args: Prisma.VideoStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoStat>
          }
          groupBy: {
            args: Prisma.VideoStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoStatCountArgs<ExtArgs>
            result: $Utils.Optional<VideoStatCountAggregateOutputType> | number
          }
        }
      }
      VideoSetting: {
        payload: Prisma.$VideoSettingPayload<ExtArgs>
        fields: Prisma.VideoSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          findFirst: {
            args: Prisma.VideoSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          findMany: {
            args: Prisma.VideoSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>[]
          }
          create: {
            args: Prisma.VideoSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          createMany: {
            args: Prisma.VideoSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>[]
          }
          delete: {
            args: Prisma.VideoSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          update: {
            args: Prisma.VideoSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          deleteMany: {
            args: Prisma.VideoSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>[]
          }
          upsert: {
            args: Prisma.VideoSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoSettingPayload>
          }
          aggregate: {
            args: Prisma.VideoSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoSetting>
          }
          groupBy: {
            args: Prisma.VideoSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoSettingCountArgs<ExtArgs>
            result: $Utils.Optional<VideoSettingCountAggregateOutputType> | number
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
    user?: UserOmit
    session?: SessionOmit
    sessionDevice?: SessionDeviceOmit
    channel?: ChannelOmit
    profileChange?: ProfileChangeOmit
    video?: VideoOmit
    videoMedia?: VideoMediaOmit
    videoStat?: VideoStatOmit
    videoSetting?: VideoSettingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    videos: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ChannelCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.UserRole | null
    setupStatus: boolean | null
    lastLoginAt: Date | null
    status: $Enums.UserStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.UserRole | null
    setupStatus: boolean | null
    lastLoginAt: Date | null
    status: $Enums.UserStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    role: number
    setupStatus: number
    lastLoginAt: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    setupStatus?: true
    lastLoginAt?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    setupStatus?: true
    lastLoginAt?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    setupStatus?: true
    lastLoginAt?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    role: $Enums.UserRole
    setupStatus: boolean
    lastLoginAt: Date
    status: $Enums.UserStatus
    updatedAt: Date
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    setupStatus?: boolean
    lastLoginAt?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    channel?: boolean | User$channelArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profileChanges?: boolean | User$profileChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    setupStatus?: boolean
    lastLoginAt?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    setupStatus?: boolean
    lastLoginAt?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    setupStatus?: boolean
    lastLoginAt?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "setupStatus" | "lastLoginAt" | "status" | "updatedAt" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | User$channelArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profileChanges?: boolean | User$profileChangesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      profileChanges: Prisma.$ProfileChangePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: $Enums.UserRole
      setupStatus: boolean
      lastLoginAt: Date
      status: $Enums.UserStatus
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends User$channelArgs<ExtArgs> = {}>(args?: Subset<T, User$channelArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profileChanges<T extends User$profileChangesArgs<ExtArgs> = {}>(args?: Subset<T, User$profileChangesArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly setupStatus: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.channel
   */
  export type User$channelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.profileChanges
   */
  export type User$profileChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    where?: ProfileChangeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    browser: string | null
    ip: string | null
    userAgent: string | null
    lastSeen: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    browser: string | null
    ip: string | null
    userAgent: string | null
    lastSeen: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    browser: number
    ip: number
    userAgent: number
    lastSeen: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    browser?: true
    ip?: true
    userAgent?: true
    lastSeen?: true
    updatedAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    browser?: true
    ip?: true
    userAgent?: true
    lastSeen?: true
    updatedAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    browser?: true
    ip?: true
    userAgent?: true
    lastSeen?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    browser: string
    ip: string
    userAgent: string | null
    lastSeen: Date
    updatedAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    browser?: boolean
    ip?: boolean
    userAgent?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | Session$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    browser?: boolean
    ip?: boolean
    userAgent?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    browser?: boolean
    ip?: boolean
    userAgent?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    browser?: boolean
    ip?: boolean
    userAgent?: boolean
    lastSeen?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "browser" | "ip" | "userAgent" | "lastSeen" | "updatedAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | Session$deviceArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      device: Prisma.$SessionDevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      browser: string
      ip: string
      userAgent: string | null
      lastSeen: Date
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends Session$deviceArgs<ExtArgs> = {}>(args?: Subset<T, Session$deviceArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly browser: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly lastSeen: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.device
   */
  export type Session$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    where?: SessionDeviceWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionDevice
   */

  export type AggregateSessionDevice = {
    _count: SessionDeviceCountAggregateOutputType | null
    _min: SessionDeviceMinAggregateOutputType | null
    _max: SessionDeviceMaxAggregateOutputType | null
  }

  export type SessionDeviceMinAggregateOutputType = {
    sessionId: string | null
    name: string | null
    type: $Enums.DeviceType | null
    osName: string | null
    osVersion: string | null
  }

  export type SessionDeviceMaxAggregateOutputType = {
    sessionId: string | null
    name: string | null
    type: $Enums.DeviceType | null
    osName: string | null
    osVersion: string | null
  }

  export type SessionDeviceCountAggregateOutputType = {
    sessionId: number
    name: number
    type: number
    osName: number
    osVersion: number
    _all: number
  }


  export type SessionDeviceMinAggregateInputType = {
    sessionId?: true
    name?: true
    type?: true
    osName?: true
    osVersion?: true
  }

  export type SessionDeviceMaxAggregateInputType = {
    sessionId?: true
    name?: true
    type?: true
    osName?: true
    osVersion?: true
  }

  export type SessionDeviceCountAggregateInputType = {
    sessionId?: true
    name?: true
    type?: true
    osName?: true
    osVersion?: true
    _all?: true
  }

  export type SessionDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionDevice to aggregate.
     */
    where?: SessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDevices to fetch.
     */
    orderBy?: SessionDeviceOrderByWithRelationInput | SessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionDevices
    **/
    _count?: true | SessionDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionDeviceMaxAggregateInputType
  }

  export type GetSessionDeviceAggregateType<T extends SessionDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionDevice[P]>
      : GetScalarType<T[P], AggregateSessionDevice[P]>
  }




  export type SessionDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionDeviceWhereInput
    orderBy?: SessionDeviceOrderByWithAggregationInput | SessionDeviceOrderByWithAggregationInput[]
    by: SessionDeviceScalarFieldEnum[] | SessionDeviceScalarFieldEnum
    having?: SessionDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionDeviceCountAggregateInputType | true
    _min?: SessionDeviceMinAggregateInputType
    _max?: SessionDeviceMaxAggregateInputType
  }

  export type SessionDeviceGroupByOutputType = {
    sessionId: string
    name: string
    type: $Enums.DeviceType
    osName: string
    osVersion: string
    _count: SessionDeviceCountAggregateOutputType | null
    _min: SessionDeviceMinAggregateOutputType | null
    _max: SessionDeviceMaxAggregateOutputType | null
  }

  type GetSessionDeviceGroupByPayload<T extends SessionDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], SessionDeviceGroupByOutputType[P]>
        }
      >
    >


  export type SessionDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    name?: boolean
    type?: boolean
    osName?: boolean
    osVersion?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionDevice"]>

  export type SessionDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    name?: boolean
    type?: boolean
    osName?: boolean
    osVersion?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionDevice"]>

  export type SessionDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    name?: boolean
    type?: boolean
    osName?: boolean
    osVersion?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionDevice"]>

  export type SessionDeviceSelectScalar = {
    sessionId?: boolean
    name?: boolean
    type?: boolean
    osName?: boolean
    osVersion?: boolean
  }

  export type SessionDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionId" | "name" | "type" | "osName" | "osVersion", ExtArgs["result"]["sessionDevice"]>
  export type SessionDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type SessionDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type SessionDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $SessionDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionDevice"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionId: string
      name: string
      type: $Enums.DeviceType
      osName: string
      osVersion: string
    }, ExtArgs["result"]["sessionDevice"]>
    composites: {}
  }

  type SessionDeviceGetPayload<S extends boolean | null | undefined | SessionDeviceDefaultArgs> = $Result.GetResult<Prisma.$SessionDevicePayload, S>

  type SessionDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionDeviceCountAggregateInputType | true
    }

  export interface SessionDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionDevice'], meta: { name: 'SessionDevice' } }
    /**
     * Find zero or one SessionDevice that matches the filter.
     * @param {SessionDeviceFindUniqueArgs} args - Arguments to find a SessionDevice
     * @example
     * // Get one SessionDevice
     * const sessionDevice = await prisma.sessionDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionDeviceFindUniqueArgs>(args: SelectSubset<T, SessionDeviceFindUniqueArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionDeviceFindUniqueOrThrowArgs} args - Arguments to find a SessionDevice
     * @example
     * // Get one SessionDevice
     * const sessionDevice = await prisma.sessionDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceFindFirstArgs} args - Arguments to find a SessionDevice
     * @example
     * // Get one SessionDevice
     * const sessionDevice = await prisma.sessionDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionDeviceFindFirstArgs>(args?: SelectSubset<T, SessionDeviceFindFirstArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceFindFirstOrThrowArgs} args - Arguments to find a SessionDevice
     * @example
     * // Get one SessionDevice
     * const sessionDevice = await prisma.sessionDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionDevices
     * const sessionDevices = await prisma.sessionDevice.findMany()
     * 
     * // Get first 10 SessionDevices
     * const sessionDevices = await prisma.sessionDevice.findMany({ take: 10 })
     * 
     * // Only select the `sessionId`
     * const sessionDeviceWithSessionIdOnly = await prisma.sessionDevice.findMany({ select: { sessionId: true } })
     * 
     */
    findMany<T extends SessionDeviceFindManyArgs>(args?: SelectSubset<T, SessionDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionDevice.
     * @param {SessionDeviceCreateArgs} args - Arguments to create a SessionDevice.
     * @example
     * // Create one SessionDevice
     * const SessionDevice = await prisma.sessionDevice.create({
     *   data: {
     *     // ... data to create a SessionDevice
     *   }
     * })
     * 
     */
    create<T extends SessionDeviceCreateArgs>(args: SelectSubset<T, SessionDeviceCreateArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionDevices.
     * @param {SessionDeviceCreateManyArgs} args - Arguments to create many SessionDevices.
     * @example
     * // Create many SessionDevices
     * const sessionDevice = await prisma.sessionDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionDeviceCreateManyArgs>(args?: SelectSubset<T, SessionDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionDevices and returns the data saved in the database.
     * @param {SessionDeviceCreateManyAndReturnArgs} args - Arguments to create many SessionDevices.
     * @example
     * // Create many SessionDevices
     * const sessionDevice = await prisma.sessionDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionDevices and only return the `sessionId`
     * const sessionDeviceWithSessionIdOnly = await prisma.sessionDevice.createManyAndReturn({
     *   select: { sessionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionDevice.
     * @param {SessionDeviceDeleteArgs} args - Arguments to delete one SessionDevice.
     * @example
     * // Delete one SessionDevice
     * const SessionDevice = await prisma.sessionDevice.delete({
     *   where: {
     *     // ... filter to delete one SessionDevice
     *   }
     * })
     * 
     */
    delete<T extends SessionDeviceDeleteArgs>(args: SelectSubset<T, SessionDeviceDeleteArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionDevice.
     * @param {SessionDeviceUpdateArgs} args - Arguments to update one SessionDevice.
     * @example
     * // Update one SessionDevice
     * const sessionDevice = await prisma.sessionDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionDeviceUpdateArgs>(args: SelectSubset<T, SessionDeviceUpdateArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionDevices.
     * @param {SessionDeviceDeleteManyArgs} args - Arguments to filter SessionDevices to delete.
     * @example
     * // Delete a few SessionDevices
     * const { count } = await prisma.sessionDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeviceDeleteManyArgs>(args?: SelectSubset<T, SessionDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionDevices
     * const sessionDevice = await prisma.sessionDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionDeviceUpdateManyArgs>(args: SelectSubset<T, SessionDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionDevices and returns the data updated in the database.
     * @param {SessionDeviceUpdateManyAndReturnArgs} args - Arguments to update many SessionDevices.
     * @example
     * // Update many SessionDevices
     * const sessionDevice = await prisma.sessionDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionDevices and only return the `sessionId`
     * const sessionDeviceWithSessionIdOnly = await prisma.sessionDevice.updateManyAndReturn({
     *   select: { sessionId: true },
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
    updateManyAndReturn<T extends SessionDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionDevice.
     * @param {SessionDeviceUpsertArgs} args - Arguments to update or create a SessionDevice.
     * @example
     * // Update or create a SessionDevice
     * const sessionDevice = await prisma.sessionDevice.upsert({
     *   create: {
     *     // ... data to create a SessionDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionDevice we want to update
     *   }
     * })
     */
    upsert<T extends SessionDeviceUpsertArgs>(args: SelectSubset<T, SessionDeviceUpsertArgs<ExtArgs>>): Prisma__SessionDeviceClient<$Result.GetResult<Prisma.$SessionDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceCountArgs} args - Arguments to filter SessionDevices to count.
     * @example
     * // Count the number of SessionDevices
     * const count = await prisma.sessionDevice.count({
     *   where: {
     *     // ... the filter for the SessionDevices we want to count
     *   }
     * })
    **/
    count<T extends SessionDeviceCountArgs>(
      args?: Subset<T, SessionDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionDeviceAggregateArgs>(args: Subset<T, SessionDeviceAggregateArgs>): Prisma.PrismaPromise<GetSessionDeviceAggregateType<T>>

    /**
     * Group by SessionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionDeviceGroupByArgs} args - Group by arguments.
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
      T extends SessionDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionDeviceGroupByArgs['orderBy'] }
        : { orderBy?: SessionDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionDevice model
   */
  readonly fields: SessionDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionDevice model
   */
  interface SessionDeviceFieldRefs {
    readonly sessionId: FieldRef<"SessionDevice", 'String'>
    readonly name: FieldRef<"SessionDevice", 'String'>
    readonly type: FieldRef<"SessionDevice", 'DeviceType'>
    readonly osName: FieldRef<"SessionDevice", 'String'>
    readonly osVersion: FieldRef<"SessionDevice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionDevice findUnique
   */
  export type SessionDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which SessionDevice to fetch.
     */
    where: SessionDeviceWhereUniqueInput
  }

  /**
   * SessionDevice findUniqueOrThrow
   */
  export type SessionDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which SessionDevice to fetch.
     */
    where: SessionDeviceWhereUniqueInput
  }

  /**
   * SessionDevice findFirst
   */
  export type SessionDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which SessionDevice to fetch.
     */
    where?: SessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDevices to fetch.
     */
    orderBy?: SessionDeviceOrderByWithRelationInput | SessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionDevices.
     */
    cursor?: SessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionDevices.
     */
    distinct?: SessionDeviceScalarFieldEnum | SessionDeviceScalarFieldEnum[]
  }

  /**
   * SessionDevice findFirstOrThrow
   */
  export type SessionDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which SessionDevice to fetch.
     */
    where?: SessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDevices to fetch.
     */
    orderBy?: SessionDeviceOrderByWithRelationInput | SessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionDevices.
     */
    cursor?: SessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionDevices.
     */
    distinct?: SessionDeviceScalarFieldEnum | SessionDeviceScalarFieldEnum[]
  }

  /**
   * SessionDevice findMany
   */
  export type SessionDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which SessionDevices to fetch.
     */
    where?: SessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionDevices to fetch.
     */
    orderBy?: SessionDeviceOrderByWithRelationInput | SessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionDevices.
     */
    cursor?: SessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionDevices.
     */
    skip?: number
    distinct?: SessionDeviceScalarFieldEnum | SessionDeviceScalarFieldEnum[]
  }

  /**
   * SessionDevice create
   */
  export type SessionDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionDevice.
     */
    data: XOR<SessionDeviceCreateInput, SessionDeviceUncheckedCreateInput>
  }

  /**
   * SessionDevice createMany
   */
  export type SessionDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionDevices.
     */
    data: SessionDeviceCreateManyInput | SessionDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionDevice createManyAndReturn
   */
  export type SessionDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many SessionDevices.
     */
    data: SessionDeviceCreateManyInput | SessionDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionDevice update
   */
  export type SessionDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionDevice.
     */
    data: XOR<SessionDeviceUpdateInput, SessionDeviceUncheckedUpdateInput>
    /**
     * Choose, which SessionDevice to update.
     */
    where: SessionDeviceWhereUniqueInput
  }

  /**
   * SessionDevice updateMany
   */
  export type SessionDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionDevices.
     */
    data: XOR<SessionDeviceUpdateManyMutationInput, SessionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which SessionDevices to update
     */
    where?: SessionDeviceWhereInput
    /**
     * Limit how many SessionDevices to update.
     */
    limit?: number
  }

  /**
   * SessionDevice updateManyAndReturn
   */
  export type SessionDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * The data used to update SessionDevices.
     */
    data: XOR<SessionDeviceUpdateManyMutationInput, SessionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which SessionDevices to update
     */
    where?: SessionDeviceWhereInput
    /**
     * Limit how many SessionDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionDevice upsert
   */
  export type SessionDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionDevice to update in case it exists.
     */
    where: SessionDeviceWhereUniqueInput
    /**
     * In case the SessionDevice found by the `where` argument doesn't exist, create a new SessionDevice with this data.
     */
    create: XOR<SessionDeviceCreateInput, SessionDeviceUncheckedCreateInput>
    /**
     * In case the SessionDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionDeviceUpdateInput, SessionDeviceUncheckedUpdateInput>
  }

  /**
   * SessionDevice delete
   */
  export type SessionDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
    /**
     * Filter which SessionDevice to delete.
     */
    where: SessionDeviceWhereUniqueInput
  }

  /**
   * SessionDevice deleteMany
   */
  export type SessionDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionDevices to delete
     */
    where?: SessionDeviceWhereInput
    /**
     * Limit how many SessionDevices to delete.
     */
    limit?: number
  }

  /**
   * SessionDevice without action
   */
  export type SessionDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionDevice
     */
    select?: SessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionDevice
     */
    omit?: SessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionDeviceInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    viewsCount: number | null
  }

  export type ChannelSumAggregateOutputType = {
    viewsCount: number | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    uniqueName: string | null
    profilePhotoUrl: string | null
    profileCoverPhotoUrl: string | null
    about: string | null
    viewsCount: number | null
    status: $Enums.ChannelStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    uniqueName: string | null
    profilePhotoUrl: string | null
    profileCoverPhotoUrl: string | null
    about: string | null
    viewsCount: number | null
    status: $Enums.ChannelStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    uniqueName: number
    profilePhotoUrl: number
    profileCoverPhotoUrl: number
    about: number
    viewsCount: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    viewsCount?: true
  }

  export type ChannelSumAggregateInputType = {
    viewsCount?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    uniqueName?: true
    profilePhotoUrl?: true
    profileCoverPhotoUrl?: true
    about?: true
    viewsCount?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    uniqueName?: true
    profilePhotoUrl?: true
    profileCoverPhotoUrl?: true
    about?: true
    viewsCount?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    uniqueName?: true
    profilePhotoUrl?: true
    profileCoverPhotoUrl?: true
    about?: true
    viewsCount?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    userId: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl: string | null
    about: string | null
    viewsCount: number
    status: $Enums.ChannelStatus
    updatedAt: Date
    createdAt: Date
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    uniqueName?: boolean
    profilePhotoUrl?: boolean
    profileCoverPhotoUrl?: boolean
    about?: boolean
    viewsCount?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | Channel$videosArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    uniqueName?: boolean
    profilePhotoUrl?: boolean
    profileCoverPhotoUrl?: boolean
    about?: boolean
    viewsCount?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    uniqueName?: boolean
    profilePhotoUrl?: boolean
    profileCoverPhotoUrl?: boolean
    about?: boolean
    viewsCount?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    uniqueName?: boolean
    profilePhotoUrl?: boolean
    profileCoverPhotoUrl?: boolean
    about?: boolean
    viewsCount?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "uniqueName" | "profilePhotoUrl" | "profileCoverPhotoUrl" | "about" | "viewsCount" | "status" | "updatedAt" | "createdAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | Channel$videosArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      uniqueName: string
      profilePhotoUrl: string
      profileCoverPhotoUrl: string | null
      about: string | null
      viewsCount: number
      status: $Enums.ChannelStatus
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends Channel$videosArgs<ExtArgs> = {}>(args?: Subset<T, Channel$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly userId: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly uniqueName: FieldRef<"Channel", 'String'>
    readonly profilePhotoUrl: FieldRef<"Channel", 'String'>
    readonly profileCoverPhotoUrl: FieldRef<"Channel", 'String'>
    readonly about: FieldRef<"Channel", 'String'>
    readonly viewsCount: FieldRef<"Channel", 'Int'>
    readonly status: FieldRef<"Channel", 'ChannelStatus'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.videos
   */
  export type Channel$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model ProfileChange
   */

  export type AggregateProfileChange = {
    _count: ProfileChangeCountAggregateOutputType | null
    _min: ProfileChangeMinAggregateOutputType | null
    _max: ProfileChangeMaxAggregateOutputType | null
  }

  export type ProfileChangeMinAggregateOutputType = {
    userId: string | null
    lastChannelNameChange: Date | null
    lastChannelUniqueNameChange: Date | null
    lastChannelAboutChange: Date | null
    lastProfilePhotoChange: Date | null
    lastCoverPhotoChange: Date | null
  }

  export type ProfileChangeMaxAggregateOutputType = {
    userId: string | null
    lastChannelNameChange: Date | null
    lastChannelUniqueNameChange: Date | null
    lastChannelAboutChange: Date | null
    lastProfilePhotoChange: Date | null
    lastCoverPhotoChange: Date | null
  }

  export type ProfileChangeCountAggregateOutputType = {
    userId: number
    lastChannelNameChange: number
    lastChannelUniqueNameChange: number
    lastChannelAboutChange: number
    lastProfilePhotoChange: number
    lastCoverPhotoChange: number
    _all: number
  }


  export type ProfileChangeMinAggregateInputType = {
    userId?: true
    lastChannelNameChange?: true
    lastChannelUniqueNameChange?: true
    lastChannelAboutChange?: true
    lastProfilePhotoChange?: true
    lastCoverPhotoChange?: true
  }

  export type ProfileChangeMaxAggregateInputType = {
    userId?: true
    lastChannelNameChange?: true
    lastChannelUniqueNameChange?: true
    lastChannelAboutChange?: true
    lastProfilePhotoChange?: true
    lastCoverPhotoChange?: true
  }

  export type ProfileChangeCountAggregateInputType = {
    userId?: true
    lastChannelNameChange?: true
    lastChannelUniqueNameChange?: true
    lastChannelAboutChange?: true
    lastProfilePhotoChange?: true
    lastCoverPhotoChange?: true
    _all?: true
  }

  export type ProfileChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileChange to aggregate.
     */
    where?: ProfileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileChanges to fetch.
     */
    orderBy?: ProfileChangeOrderByWithRelationInput | ProfileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileChanges
    **/
    _count?: true | ProfileChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileChangeMaxAggregateInputType
  }

  export type GetProfileChangeAggregateType<T extends ProfileChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileChange[P]>
      : GetScalarType<T[P], AggregateProfileChange[P]>
  }




  export type ProfileChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileChangeWhereInput
    orderBy?: ProfileChangeOrderByWithAggregationInput | ProfileChangeOrderByWithAggregationInput[]
    by: ProfileChangeScalarFieldEnum[] | ProfileChangeScalarFieldEnum
    having?: ProfileChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileChangeCountAggregateInputType | true
    _min?: ProfileChangeMinAggregateInputType
    _max?: ProfileChangeMaxAggregateInputType
  }

  export type ProfileChangeGroupByOutputType = {
    userId: string
    lastChannelNameChange: Date
    lastChannelUniqueNameChange: Date
    lastChannelAboutChange: Date
    lastProfilePhotoChange: Date
    lastCoverPhotoChange: Date
    _count: ProfileChangeCountAggregateOutputType | null
    _min: ProfileChangeMinAggregateOutputType | null
    _max: ProfileChangeMaxAggregateOutputType | null
  }

  type GetProfileChangeGroupByPayload<T extends ProfileChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileChangeGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileChangeGroupByOutputType[P]>
        }
      >
    >


  export type ProfileChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lastChannelNameChange?: boolean
    lastChannelUniqueNameChange?: boolean
    lastChannelAboutChange?: boolean
    lastProfilePhotoChange?: boolean
    lastCoverPhotoChange?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileChange"]>

  export type ProfileChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lastChannelNameChange?: boolean
    lastChannelUniqueNameChange?: boolean
    lastChannelAboutChange?: boolean
    lastProfilePhotoChange?: boolean
    lastCoverPhotoChange?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileChange"]>

  export type ProfileChangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    lastChannelNameChange?: boolean
    lastChannelUniqueNameChange?: boolean
    lastChannelAboutChange?: boolean
    lastProfilePhotoChange?: boolean
    lastCoverPhotoChange?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileChange"]>

  export type ProfileChangeSelectScalar = {
    userId?: boolean
    lastChannelNameChange?: boolean
    lastChannelUniqueNameChange?: boolean
    lastChannelAboutChange?: boolean
    lastProfilePhotoChange?: boolean
    lastCoverPhotoChange?: boolean
  }

  export type ProfileChangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "lastChannelNameChange" | "lastChannelUniqueNameChange" | "lastChannelAboutChange" | "lastProfilePhotoChange" | "lastCoverPhotoChange", ExtArgs["result"]["profileChange"]>
  export type ProfileChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileChangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileChange"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      lastChannelNameChange: Date
      lastChannelUniqueNameChange: Date
      lastChannelAboutChange: Date
      lastProfilePhotoChange: Date
      lastCoverPhotoChange: Date
    }, ExtArgs["result"]["profileChange"]>
    composites: {}
  }

  type ProfileChangeGetPayload<S extends boolean | null | undefined | ProfileChangeDefaultArgs> = $Result.GetResult<Prisma.$ProfileChangePayload, S>

  type ProfileChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileChangeCountAggregateInputType | true
    }

  export interface ProfileChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileChange'], meta: { name: 'ProfileChange' } }
    /**
     * Find zero or one ProfileChange that matches the filter.
     * @param {ProfileChangeFindUniqueArgs} args - Arguments to find a ProfileChange
     * @example
     * // Get one ProfileChange
     * const profileChange = await prisma.profileChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileChangeFindUniqueArgs>(args: SelectSubset<T, ProfileChangeFindUniqueArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileChange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileChangeFindUniqueOrThrowArgs} args - Arguments to find a ProfileChange
     * @example
     * // Get one ProfileChange
     * const profileChange = await prisma.profileChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeFindFirstArgs} args - Arguments to find a ProfileChange
     * @example
     * // Get one ProfileChange
     * const profileChange = await prisma.profileChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileChangeFindFirstArgs>(args?: SelectSubset<T, ProfileChangeFindFirstArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeFindFirstOrThrowArgs} args - Arguments to find a ProfileChange
     * @example
     * // Get one ProfileChange
     * const profileChange = await prisma.profileChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileChanges
     * const profileChanges = await prisma.profileChange.findMany()
     * 
     * // Get first 10 ProfileChanges
     * const profileChanges = await prisma.profileChange.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const profileChangeWithUserIdOnly = await prisma.profileChange.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProfileChangeFindManyArgs>(args?: SelectSubset<T, ProfileChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileChange.
     * @param {ProfileChangeCreateArgs} args - Arguments to create a ProfileChange.
     * @example
     * // Create one ProfileChange
     * const ProfileChange = await prisma.profileChange.create({
     *   data: {
     *     // ... data to create a ProfileChange
     *   }
     * })
     * 
     */
    create<T extends ProfileChangeCreateArgs>(args: SelectSubset<T, ProfileChangeCreateArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileChanges.
     * @param {ProfileChangeCreateManyArgs} args - Arguments to create many ProfileChanges.
     * @example
     * // Create many ProfileChanges
     * const profileChange = await prisma.profileChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileChangeCreateManyArgs>(args?: SelectSubset<T, ProfileChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileChanges and returns the data saved in the database.
     * @param {ProfileChangeCreateManyAndReturnArgs} args - Arguments to create many ProfileChanges.
     * @example
     * // Create many ProfileChanges
     * const profileChange = await prisma.profileChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileChanges and only return the `userId`
     * const profileChangeWithUserIdOnly = await prisma.profileChange.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileChange.
     * @param {ProfileChangeDeleteArgs} args - Arguments to delete one ProfileChange.
     * @example
     * // Delete one ProfileChange
     * const ProfileChange = await prisma.profileChange.delete({
     *   where: {
     *     // ... filter to delete one ProfileChange
     *   }
     * })
     * 
     */
    delete<T extends ProfileChangeDeleteArgs>(args: SelectSubset<T, ProfileChangeDeleteArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileChange.
     * @param {ProfileChangeUpdateArgs} args - Arguments to update one ProfileChange.
     * @example
     * // Update one ProfileChange
     * const profileChange = await prisma.profileChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileChangeUpdateArgs>(args: SelectSubset<T, ProfileChangeUpdateArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileChanges.
     * @param {ProfileChangeDeleteManyArgs} args - Arguments to filter ProfileChanges to delete.
     * @example
     * // Delete a few ProfileChanges
     * const { count } = await prisma.profileChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileChangeDeleteManyArgs>(args?: SelectSubset<T, ProfileChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileChanges
     * const profileChange = await prisma.profileChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileChangeUpdateManyArgs>(args: SelectSubset<T, ProfileChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileChanges and returns the data updated in the database.
     * @param {ProfileChangeUpdateManyAndReturnArgs} args - Arguments to update many ProfileChanges.
     * @example
     * // Update many ProfileChanges
     * const profileChange = await prisma.profileChange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileChanges and only return the `userId`
     * const profileChangeWithUserIdOnly = await prisma.profileChange.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends ProfileChangeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileChange.
     * @param {ProfileChangeUpsertArgs} args - Arguments to update or create a ProfileChange.
     * @example
     * // Update or create a ProfileChange
     * const profileChange = await prisma.profileChange.upsert({
     *   create: {
     *     // ... data to create a ProfileChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileChange we want to update
     *   }
     * })
     */
    upsert<T extends ProfileChangeUpsertArgs>(args: SelectSubset<T, ProfileChangeUpsertArgs<ExtArgs>>): Prisma__ProfileChangeClient<$Result.GetResult<Prisma.$ProfileChangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeCountArgs} args - Arguments to filter ProfileChanges to count.
     * @example
     * // Count the number of ProfileChanges
     * const count = await prisma.profileChange.count({
     *   where: {
     *     // ... the filter for the ProfileChanges we want to count
     *   }
     * })
    **/
    count<T extends ProfileChangeCountArgs>(
      args?: Subset<T, ProfileChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileChangeAggregateArgs>(args: Subset<T, ProfileChangeAggregateArgs>): Prisma.PrismaPromise<GetProfileChangeAggregateType<T>>

    /**
     * Group by ProfileChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileChangeGroupByArgs} args - Group by arguments.
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
      T extends ProfileChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileChangeGroupByArgs['orderBy'] }
        : { orderBy?: ProfileChangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileChange model
   */
  readonly fields: ProfileChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfileChange model
   */
  interface ProfileChangeFieldRefs {
    readonly userId: FieldRef<"ProfileChange", 'String'>
    readonly lastChannelNameChange: FieldRef<"ProfileChange", 'DateTime'>
    readonly lastChannelUniqueNameChange: FieldRef<"ProfileChange", 'DateTime'>
    readonly lastChannelAboutChange: FieldRef<"ProfileChange", 'DateTime'>
    readonly lastProfilePhotoChange: FieldRef<"ProfileChange", 'DateTime'>
    readonly lastCoverPhotoChange: FieldRef<"ProfileChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileChange findUnique
   */
  export type ProfileChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter, which ProfileChange to fetch.
     */
    where: ProfileChangeWhereUniqueInput
  }

  /**
   * ProfileChange findUniqueOrThrow
   */
  export type ProfileChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter, which ProfileChange to fetch.
     */
    where: ProfileChangeWhereUniqueInput
  }

  /**
   * ProfileChange findFirst
   */
  export type ProfileChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter, which ProfileChange to fetch.
     */
    where?: ProfileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileChanges to fetch.
     */
    orderBy?: ProfileChangeOrderByWithRelationInput | ProfileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileChanges.
     */
    cursor?: ProfileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileChanges.
     */
    distinct?: ProfileChangeScalarFieldEnum | ProfileChangeScalarFieldEnum[]
  }

  /**
   * ProfileChange findFirstOrThrow
   */
  export type ProfileChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter, which ProfileChange to fetch.
     */
    where?: ProfileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileChanges to fetch.
     */
    orderBy?: ProfileChangeOrderByWithRelationInput | ProfileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileChanges.
     */
    cursor?: ProfileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileChanges.
     */
    distinct?: ProfileChangeScalarFieldEnum | ProfileChangeScalarFieldEnum[]
  }

  /**
   * ProfileChange findMany
   */
  export type ProfileChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter, which ProfileChanges to fetch.
     */
    where?: ProfileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileChanges to fetch.
     */
    orderBy?: ProfileChangeOrderByWithRelationInput | ProfileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileChanges.
     */
    cursor?: ProfileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileChanges.
     */
    skip?: number
    distinct?: ProfileChangeScalarFieldEnum | ProfileChangeScalarFieldEnum[]
  }

  /**
   * ProfileChange create
   */
  export type ProfileChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileChange.
     */
    data: XOR<ProfileChangeCreateInput, ProfileChangeUncheckedCreateInput>
  }

  /**
   * ProfileChange createMany
   */
  export type ProfileChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileChanges.
     */
    data: ProfileChangeCreateManyInput | ProfileChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileChange createManyAndReturn
   */
  export type ProfileChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileChanges.
     */
    data: ProfileChangeCreateManyInput | ProfileChangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileChange update
   */
  export type ProfileChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileChange.
     */
    data: XOR<ProfileChangeUpdateInput, ProfileChangeUncheckedUpdateInput>
    /**
     * Choose, which ProfileChange to update.
     */
    where: ProfileChangeWhereUniqueInput
  }

  /**
   * ProfileChange updateMany
   */
  export type ProfileChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileChanges.
     */
    data: XOR<ProfileChangeUpdateManyMutationInput, ProfileChangeUncheckedUpdateManyInput>
    /**
     * Filter which ProfileChanges to update
     */
    where?: ProfileChangeWhereInput
    /**
     * Limit how many ProfileChanges to update.
     */
    limit?: number
  }

  /**
   * ProfileChange updateManyAndReturn
   */
  export type ProfileChangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * The data used to update ProfileChanges.
     */
    data: XOR<ProfileChangeUpdateManyMutationInput, ProfileChangeUncheckedUpdateManyInput>
    /**
     * Filter which ProfileChanges to update
     */
    where?: ProfileChangeWhereInput
    /**
     * Limit how many ProfileChanges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileChange upsert
   */
  export type ProfileChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileChange to update in case it exists.
     */
    where: ProfileChangeWhereUniqueInput
    /**
     * In case the ProfileChange found by the `where` argument doesn't exist, create a new ProfileChange with this data.
     */
    create: XOR<ProfileChangeCreateInput, ProfileChangeUncheckedCreateInput>
    /**
     * In case the ProfileChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileChangeUpdateInput, ProfileChangeUncheckedUpdateInput>
  }

  /**
   * ProfileChange delete
   */
  export type ProfileChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
    /**
     * Filter which ProfileChange to delete.
     */
    where: ProfileChangeWhereUniqueInput
  }

  /**
   * ProfileChange deleteMany
   */
  export type ProfileChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileChanges to delete
     */
    where?: ProfileChangeWhereInput
    /**
     * Limit how many ProfileChanges to delete.
     */
    limit?: number
  }

  /**
   * ProfileChange without action
   */
  export type ProfileChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileChange
     */
    select?: ProfileChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileChange
     */
    omit?: ProfileChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileChangeInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    resolutionTier: number | null
    duration: number | null
  }

  export type VideoSumAggregateOutputType = {
    resolutionTier: number | null
    duration: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    title: string | null
    description: string | null
    resolutionTier: number | null
    duration: number | null
    aspectRatio: string | null
    status: $Enums.VideoStatus | null
    deleted: boolean | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    title: string | null
    description: string | null
    resolutionTier: number | null
    duration: number | null
    aspectRatio: string | null
    status: $Enums.VideoStatus | null
    deleted: boolean | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    channelId: number
    title: number
    description: number
    resolutionTier: number
    duration: number
    aspectRatio: number
    status: number
    deleted: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    resolutionTier?: true
    duration?: true
  }

  export type VideoSumAggregateInputType = {
    resolutionTier?: true
    duration?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    channelId?: true
    title?: true
    description?: true
    resolutionTier?: true
    duration?: true
    aspectRatio?: true
    status?: true
    deleted?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    channelId?: true
    title?: true
    description?: true
    resolutionTier?: true
    duration?: true
    aspectRatio?: true
    status?: true
    deleted?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    channelId?: true
    title?: true
    description?: true
    resolutionTier?: true
    duration?: true
    aspectRatio?: true
    status?: true
    deleted?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    channelId: string
    title: string
    description: string | null
    resolutionTier: number | null
    duration: number | null
    aspectRatio: string | null
    status: $Enums.VideoStatus
    deleted: boolean
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    resolutionTier?: boolean
    duration?: boolean
    aspectRatio?: boolean
    status?: boolean
    deleted?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    media?: boolean | Video$mediaArgs<ExtArgs>
    state?: boolean | Video$stateArgs<ExtArgs>
    setting?: boolean | Video$settingArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    resolutionTier?: boolean
    duration?: boolean
    aspectRatio?: boolean
    status?: boolean
    deleted?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    resolutionTier?: boolean
    duration?: boolean
    aspectRatio?: boolean
    status?: boolean
    deleted?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    resolutionTier?: boolean
    duration?: boolean
    aspectRatio?: boolean
    status?: boolean
    deleted?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "title" | "description" | "resolutionTier" | "duration" | "aspectRatio" | "status" | "deleted", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    media?: boolean | Video$mediaArgs<ExtArgs>
    state?: boolean | Video$stateArgs<ExtArgs>
    setting?: boolean | Video$settingArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
      media: Prisma.$VideoMediaPayload<ExtArgs> | null
      state: Prisma.$VideoStatPayload<ExtArgs> | null
      setting: Prisma.$VideoSettingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      title: string
      description: string | null
      resolutionTier: number | null
      duration: number | null
      aspectRatio: string | null
      status: $Enums.VideoStatus
      deleted: boolean
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Video$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Video$mediaArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    state<T extends Video$stateArgs<ExtArgs> = {}>(args?: Subset<T, Video$stateArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    setting<T extends Video$settingArgs<ExtArgs> = {}>(args?: Subset<T, Video$settingArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly channelId: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly resolutionTier: FieldRef<"Video", 'Int'>
    readonly duration: FieldRef<"Video", 'Int'>
    readonly aspectRatio: FieldRef<"Video", 'String'>
    readonly status: FieldRef<"Video", 'VideoStatus'>
    readonly deleted: FieldRef<"Video", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.media
   */
  export type Video$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    where?: VideoMediaWhereInput
  }

  /**
   * Video.state
   */
  export type Video$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    where?: VideoStatWhereInput
  }

  /**
   * Video.setting
   */
  export type Video$settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    where?: VideoSettingWhereInput
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model VideoMedia
   */

  export type AggregateVideoMedia = {
    _count: VideoMediaCountAggregateOutputType | null
    _min: VideoMediaMinAggregateOutputType | null
    _max: VideoMediaMaxAggregateOutputType | null
  }

  export type VideoMediaMinAggregateOutputType = {
    videoId: string | null
    muxAssetId: string | null
    muxPlaybackId: string | null
    imagekitId: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
  }

  export type VideoMediaMaxAggregateOutputType = {
    videoId: string | null
    muxAssetId: string | null
    muxPlaybackId: string | null
    imagekitId: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
  }

  export type VideoMediaCountAggregateOutputType = {
    videoId: number
    muxAssetId: number
    muxPlaybackId: number
    imagekitId: number
    videoUrl: number
    thumbnailUrl: number
    _all: number
  }


  export type VideoMediaMinAggregateInputType = {
    videoId?: true
    muxAssetId?: true
    muxPlaybackId?: true
    imagekitId?: true
    videoUrl?: true
    thumbnailUrl?: true
  }

  export type VideoMediaMaxAggregateInputType = {
    videoId?: true
    muxAssetId?: true
    muxPlaybackId?: true
    imagekitId?: true
    videoUrl?: true
    thumbnailUrl?: true
  }

  export type VideoMediaCountAggregateInputType = {
    videoId?: true
    muxAssetId?: true
    muxPlaybackId?: true
    imagekitId?: true
    videoUrl?: true
    thumbnailUrl?: true
    _all?: true
  }

  export type VideoMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoMedia to aggregate.
     */
    where?: VideoMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoMedias to fetch.
     */
    orderBy?: VideoMediaOrderByWithRelationInput | VideoMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoMedias
    **/
    _count?: true | VideoMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMediaMaxAggregateInputType
  }

  export type GetVideoMediaAggregateType<T extends VideoMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoMedia[P]>
      : GetScalarType<T[P], AggregateVideoMedia[P]>
  }




  export type VideoMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoMediaWhereInput
    orderBy?: VideoMediaOrderByWithAggregationInput | VideoMediaOrderByWithAggregationInput[]
    by: VideoMediaScalarFieldEnum[] | VideoMediaScalarFieldEnum
    having?: VideoMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoMediaCountAggregateInputType | true
    _min?: VideoMediaMinAggregateInputType
    _max?: VideoMediaMaxAggregateInputType
  }

  export type VideoMediaGroupByOutputType = {
    videoId: string
    muxAssetId: string | null
    muxPlaybackId: string | null
    imagekitId: string
    videoUrl: string | null
    thumbnailUrl: string
    _count: VideoMediaCountAggregateOutputType | null
    _min: VideoMediaMinAggregateOutputType | null
    _max: VideoMediaMaxAggregateOutputType | null
  }

  type GetVideoMediaGroupByPayload<T extends VideoMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoMediaGroupByOutputType[P]>
            : GetScalarType<T[P], VideoMediaGroupByOutputType[P]>
        }
      >
    >


  export type VideoMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    muxAssetId?: boolean
    muxPlaybackId?: boolean
    imagekitId?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoMedia"]>

  export type VideoMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    muxAssetId?: boolean
    muxPlaybackId?: boolean
    imagekitId?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoMedia"]>

  export type VideoMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    muxAssetId?: boolean
    muxPlaybackId?: boolean
    imagekitId?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoMedia"]>

  export type VideoMediaSelectScalar = {
    videoId?: boolean
    muxAssetId?: boolean
    muxPlaybackId?: boolean
    imagekitId?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
  }

  export type VideoMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"videoId" | "muxAssetId" | "muxPlaybackId" | "imagekitId" | "videoUrl" | "thumbnailUrl", ExtArgs["result"]["videoMedia"]>
  export type VideoMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoMedia"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      videoId: string
      muxAssetId: string | null
      muxPlaybackId: string | null
      imagekitId: string
      videoUrl: string | null
      thumbnailUrl: string
    }, ExtArgs["result"]["videoMedia"]>
    composites: {}
  }

  type VideoMediaGetPayload<S extends boolean | null | undefined | VideoMediaDefaultArgs> = $Result.GetResult<Prisma.$VideoMediaPayload, S>

  type VideoMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoMediaCountAggregateInputType | true
    }

  export interface VideoMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoMedia'], meta: { name: 'VideoMedia' } }
    /**
     * Find zero or one VideoMedia that matches the filter.
     * @param {VideoMediaFindUniqueArgs} args - Arguments to find a VideoMedia
     * @example
     * // Get one VideoMedia
     * const videoMedia = await prisma.videoMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoMediaFindUniqueArgs>(args: SelectSubset<T, VideoMediaFindUniqueArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoMediaFindUniqueOrThrowArgs} args - Arguments to find a VideoMedia
     * @example
     * // Get one VideoMedia
     * const videoMedia = await prisma.videoMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaFindFirstArgs} args - Arguments to find a VideoMedia
     * @example
     * // Get one VideoMedia
     * const videoMedia = await prisma.videoMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoMediaFindFirstArgs>(args?: SelectSubset<T, VideoMediaFindFirstArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaFindFirstOrThrowArgs} args - Arguments to find a VideoMedia
     * @example
     * // Get one VideoMedia
     * const videoMedia = await prisma.videoMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoMedias
     * const videoMedias = await prisma.videoMedia.findMany()
     * 
     * // Get first 10 VideoMedias
     * const videoMedias = await prisma.videoMedia.findMany({ take: 10 })
     * 
     * // Only select the `videoId`
     * const videoMediaWithVideoIdOnly = await prisma.videoMedia.findMany({ select: { videoId: true } })
     * 
     */
    findMany<T extends VideoMediaFindManyArgs>(args?: SelectSubset<T, VideoMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoMedia.
     * @param {VideoMediaCreateArgs} args - Arguments to create a VideoMedia.
     * @example
     * // Create one VideoMedia
     * const VideoMedia = await prisma.videoMedia.create({
     *   data: {
     *     // ... data to create a VideoMedia
     *   }
     * })
     * 
     */
    create<T extends VideoMediaCreateArgs>(args: SelectSubset<T, VideoMediaCreateArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoMedias.
     * @param {VideoMediaCreateManyArgs} args - Arguments to create many VideoMedias.
     * @example
     * // Create many VideoMedias
     * const videoMedia = await prisma.videoMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoMediaCreateManyArgs>(args?: SelectSubset<T, VideoMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoMedias and returns the data saved in the database.
     * @param {VideoMediaCreateManyAndReturnArgs} args - Arguments to create many VideoMedias.
     * @example
     * // Create many VideoMedias
     * const videoMedia = await prisma.videoMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoMedias and only return the `videoId`
     * const videoMediaWithVideoIdOnly = await prisma.videoMedia.createManyAndReturn({
     *   select: { videoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoMedia.
     * @param {VideoMediaDeleteArgs} args - Arguments to delete one VideoMedia.
     * @example
     * // Delete one VideoMedia
     * const VideoMedia = await prisma.videoMedia.delete({
     *   where: {
     *     // ... filter to delete one VideoMedia
     *   }
     * })
     * 
     */
    delete<T extends VideoMediaDeleteArgs>(args: SelectSubset<T, VideoMediaDeleteArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoMedia.
     * @param {VideoMediaUpdateArgs} args - Arguments to update one VideoMedia.
     * @example
     * // Update one VideoMedia
     * const videoMedia = await prisma.videoMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoMediaUpdateArgs>(args: SelectSubset<T, VideoMediaUpdateArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoMedias.
     * @param {VideoMediaDeleteManyArgs} args - Arguments to filter VideoMedias to delete.
     * @example
     * // Delete a few VideoMedias
     * const { count } = await prisma.videoMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoMediaDeleteManyArgs>(args?: SelectSubset<T, VideoMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoMedias
     * const videoMedia = await prisma.videoMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoMediaUpdateManyArgs>(args: SelectSubset<T, VideoMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoMedias and returns the data updated in the database.
     * @param {VideoMediaUpdateManyAndReturnArgs} args - Arguments to update many VideoMedias.
     * @example
     * // Update many VideoMedias
     * const videoMedia = await prisma.videoMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoMedias and only return the `videoId`
     * const videoMediaWithVideoIdOnly = await prisma.videoMedia.updateManyAndReturn({
     *   select: { videoId: true },
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
    updateManyAndReturn<T extends VideoMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoMedia.
     * @param {VideoMediaUpsertArgs} args - Arguments to update or create a VideoMedia.
     * @example
     * // Update or create a VideoMedia
     * const videoMedia = await prisma.videoMedia.upsert({
     *   create: {
     *     // ... data to create a VideoMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoMedia we want to update
     *   }
     * })
     */
    upsert<T extends VideoMediaUpsertArgs>(args: SelectSubset<T, VideoMediaUpsertArgs<ExtArgs>>): Prisma__VideoMediaClient<$Result.GetResult<Prisma.$VideoMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaCountArgs} args - Arguments to filter VideoMedias to count.
     * @example
     * // Count the number of VideoMedias
     * const count = await prisma.videoMedia.count({
     *   where: {
     *     // ... the filter for the VideoMedias we want to count
     *   }
     * })
    **/
    count<T extends VideoMediaCountArgs>(
      args?: Subset<T, VideoMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoMediaAggregateArgs>(args: Subset<T, VideoMediaAggregateArgs>): Prisma.PrismaPromise<GetVideoMediaAggregateType<T>>

    /**
     * Group by VideoMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoMediaGroupByArgs} args - Group by arguments.
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
      T extends VideoMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoMediaGroupByArgs['orderBy'] }
        : { orderBy?: VideoMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoMedia model
   */
  readonly fields: VideoMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoMedia model
   */
  interface VideoMediaFieldRefs {
    readonly videoId: FieldRef<"VideoMedia", 'String'>
    readonly muxAssetId: FieldRef<"VideoMedia", 'String'>
    readonly muxPlaybackId: FieldRef<"VideoMedia", 'String'>
    readonly imagekitId: FieldRef<"VideoMedia", 'String'>
    readonly videoUrl: FieldRef<"VideoMedia", 'String'>
    readonly thumbnailUrl: FieldRef<"VideoMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoMedia findUnique
   */
  export type VideoMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter, which VideoMedia to fetch.
     */
    where: VideoMediaWhereUniqueInput
  }

  /**
   * VideoMedia findUniqueOrThrow
   */
  export type VideoMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter, which VideoMedia to fetch.
     */
    where: VideoMediaWhereUniqueInput
  }

  /**
   * VideoMedia findFirst
   */
  export type VideoMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter, which VideoMedia to fetch.
     */
    where?: VideoMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoMedias to fetch.
     */
    orderBy?: VideoMediaOrderByWithRelationInput | VideoMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoMedias.
     */
    cursor?: VideoMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoMedias.
     */
    distinct?: VideoMediaScalarFieldEnum | VideoMediaScalarFieldEnum[]
  }

  /**
   * VideoMedia findFirstOrThrow
   */
  export type VideoMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter, which VideoMedia to fetch.
     */
    where?: VideoMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoMedias to fetch.
     */
    orderBy?: VideoMediaOrderByWithRelationInput | VideoMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoMedias.
     */
    cursor?: VideoMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoMedias.
     */
    distinct?: VideoMediaScalarFieldEnum | VideoMediaScalarFieldEnum[]
  }

  /**
   * VideoMedia findMany
   */
  export type VideoMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter, which VideoMedias to fetch.
     */
    where?: VideoMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoMedias to fetch.
     */
    orderBy?: VideoMediaOrderByWithRelationInput | VideoMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoMedias.
     */
    cursor?: VideoMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoMedias.
     */
    skip?: number
    distinct?: VideoMediaScalarFieldEnum | VideoMediaScalarFieldEnum[]
  }

  /**
   * VideoMedia create
   */
  export type VideoMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoMedia.
     */
    data: XOR<VideoMediaCreateInput, VideoMediaUncheckedCreateInput>
  }

  /**
   * VideoMedia createMany
   */
  export type VideoMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoMedias.
     */
    data: VideoMediaCreateManyInput | VideoMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoMedia createManyAndReturn
   */
  export type VideoMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * The data used to create many VideoMedias.
     */
    data: VideoMediaCreateManyInput | VideoMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoMedia update
   */
  export type VideoMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoMedia.
     */
    data: XOR<VideoMediaUpdateInput, VideoMediaUncheckedUpdateInput>
    /**
     * Choose, which VideoMedia to update.
     */
    where: VideoMediaWhereUniqueInput
  }

  /**
   * VideoMedia updateMany
   */
  export type VideoMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoMedias.
     */
    data: XOR<VideoMediaUpdateManyMutationInput, VideoMediaUncheckedUpdateManyInput>
    /**
     * Filter which VideoMedias to update
     */
    where?: VideoMediaWhereInput
    /**
     * Limit how many VideoMedias to update.
     */
    limit?: number
  }

  /**
   * VideoMedia updateManyAndReturn
   */
  export type VideoMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * The data used to update VideoMedias.
     */
    data: XOR<VideoMediaUpdateManyMutationInput, VideoMediaUncheckedUpdateManyInput>
    /**
     * Filter which VideoMedias to update
     */
    where?: VideoMediaWhereInput
    /**
     * Limit how many VideoMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoMedia upsert
   */
  export type VideoMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoMedia to update in case it exists.
     */
    where: VideoMediaWhereUniqueInput
    /**
     * In case the VideoMedia found by the `where` argument doesn't exist, create a new VideoMedia with this data.
     */
    create: XOR<VideoMediaCreateInput, VideoMediaUncheckedCreateInput>
    /**
     * In case the VideoMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoMediaUpdateInput, VideoMediaUncheckedUpdateInput>
  }

  /**
   * VideoMedia delete
   */
  export type VideoMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
    /**
     * Filter which VideoMedia to delete.
     */
    where: VideoMediaWhereUniqueInput
  }

  /**
   * VideoMedia deleteMany
   */
  export type VideoMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoMedias to delete
     */
    where?: VideoMediaWhereInput
    /**
     * Limit how many VideoMedias to delete.
     */
    limit?: number
  }

  /**
   * VideoMedia without action
   */
  export type VideoMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoMedia
     */
    select?: VideoMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoMedia
     */
    omit?: VideoMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoMediaInclude<ExtArgs> | null
  }


  /**
   * Model VideoStat
   */

  export type AggregateVideoStat = {
    _count: VideoStatCountAggregateOutputType | null
    _avg: VideoStatAvgAggregateOutputType | null
    _sum: VideoStatSumAggregateOutputType | null
    _min: VideoStatMinAggregateOutputType | null
    _max: VideoStatMaxAggregateOutputType | null
  }

  export type VideoStatAvgAggregateOutputType = {
    viewsCount: number | null
    likesCount: number | null
    dislikesCount: number | null
  }

  export type VideoStatSumAggregateOutputType = {
    viewsCount: number | null
    likesCount: number | null
    dislikesCount: number | null
  }

  export type VideoStatMinAggregateOutputType = {
    videoId: string | null
    viewsCount: number | null
    likesCount: number | null
    dislikesCount: number | null
  }

  export type VideoStatMaxAggregateOutputType = {
    videoId: string | null
    viewsCount: number | null
    likesCount: number | null
    dislikesCount: number | null
  }

  export type VideoStatCountAggregateOutputType = {
    videoId: number
    viewsCount: number
    likesCount: number
    dislikesCount: number
    _all: number
  }


  export type VideoStatAvgAggregateInputType = {
    viewsCount?: true
    likesCount?: true
    dislikesCount?: true
  }

  export type VideoStatSumAggregateInputType = {
    viewsCount?: true
    likesCount?: true
    dislikesCount?: true
  }

  export type VideoStatMinAggregateInputType = {
    videoId?: true
    viewsCount?: true
    likesCount?: true
    dislikesCount?: true
  }

  export type VideoStatMaxAggregateInputType = {
    videoId?: true
    viewsCount?: true
    likesCount?: true
    dislikesCount?: true
  }

  export type VideoStatCountAggregateInputType = {
    videoId?: true
    viewsCount?: true
    likesCount?: true
    dislikesCount?: true
    _all?: true
  }

  export type VideoStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoStat to aggregate.
     */
    where?: VideoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoStats to fetch.
     */
    orderBy?: VideoStatOrderByWithRelationInput | VideoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoStats
    **/
    _count?: true | VideoStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoStatMaxAggregateInputType
  }

  export type GetVideoStatAggregateType<T extends VideoStatAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoStat[P]>
      : GetScalarType<T[P], AggregateVideoStat[P]>
  }




  export type VideoStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoStatWhereInput
    orderBy?: VideoStatOrderByWithAggregationInput | VideoStatOrderByWithAggregationInput[]
    by: VideoStatScalarFieldEnum[] | VideoStatScalarFieldEnum
    having?: VideoStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoStatCountAggregateInputType | true
    _avg?: VideoStatAvgAggregateInputType
    _sum?: VideoStatSumAggregateInputType
    _min?: VideoStatMinAggregateInputType
    _max?: VideoStatMaxAggregateInputType
  }

  export type VideoStatGroupByOutputType = {
    videoId: string
    viewsCount: number
    likesCount: number
    dislikesCount: number
    _count: VideoStatCountAggregateOutputType | null
    _avg: VideoStatAvgAggregateOutputType | null
    _sum: VideoStatSumAggregateOutputType | null
    _min: VideoStatMinAggregateOutputType | null
    _max: VideoStatMaxAggregateOutputType | null
  }

  type GetVideoStatGroupByPayload<T extends VideoStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoStatGroupByOutputType[P]>
            : GetScalarType<T[P], VideoStatGroupByOutputType[P]>
        }
      >
    >


  export type VideoStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    dislikesCount?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoStat"]>

  export type VideoStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    dislikesCount?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoStat"]>

  export type VideoStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    dislikesCount?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoStat"]>

  export type VideoStatSelectScalar = {
    videoId?: boolean
    viewsCount?: boolean
    likesCount?: boolean
    dislikesCount?: boolean
  }

  export type VideoStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"videoId" | "viewsCount" | "likesCount" | "dislikesCount", ExtArgs["result"]["videoStat"]>
  export type VideoStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoStat"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      videoId: string
      viewsCount: number
      likesCount: number
      dislikesCount: number
    }, ExtArgs["result"]["videoStat"]>
    composites: {}
  }

  type VideoStatGetPayload<S extends boolean | null | undefined | VideoStatDefaultArgs> = $Result.GetResult<Prisma.$VideoStatPayload, S>

  type VideoStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoStatCountAggregateInputType | true
    }

  export interface VideoStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoStat'], meta: { name: 'VideoStat' } }
    /**
     * Find zero or one VideoStat that matches the filter.
     * @param {VideoStatFindUniqueArgs} args - Arguments to find a VideoStat
     * @example
     * // Get one VideoStat
     * const videoStat = await prisma.videoStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoStatFindUniqueArgs>(args: SelectSubset<T, VideoStatFindUniqueArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoStatFindUniqueOrThrowArgs} args - Arguments to find a VideoStat
     * @example
     * // Get one VideoStat
     * const videoStat = await prisma.videoStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoStatFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatFindFirstArgs} args - Arguments to find a VideoStat
     * @example
     * // Get one VideoStat
     * const videoStat = await prisma.videoStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoStatFindFirstArgs>(args?: SelectSubset<T, VideoStatFindFirstArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatFindFirstOrThrowArgs} args - Arguments to find a VideoStat
     * @example
     * // Get one VideoStat
     * const videoStat = await prisma.videoStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoStatFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoStats
     * const videoStats = await prisma.videoStat.findMany()
     * 
     * // Get first 10 VideoStats
     * const videoStats = await prisma.videoStat.findMany({ take: 10 })
     * 
     * // Only select the `videoId`
     * const videoStatWithVideoIdOnly = await prisma.videoStat.findMany({ select: { videoId: true } })
     * 
     */
    findMany<T extends VideoStatFindManyArgs>(args?: SelectSubset<T, VideoStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoStat.
     * @param {VideoStatCreateArgs} args - Arguments to create a VideoStat.
     * @example
     * // Create one VideoStat
     * const VideoStat = await prisma.videoStat.create({
     *   data: {
     *     // ... data to create a VideoStat
     *   }
     * })
     * 
     */
    create<T extends VideoStatCreateArgs>(args: SelectSubset<T, VideoStatCreateArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoStats.
     * @param {VideoStatCreateManyArgs} args - Arguments to create many VideoStats.
     * @example
     * // Create many VideoStats
     * const videoStat = await prisma.videoStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoStatCreateManyArgs>(args?: SelectSubset<T, VideoStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoStats and returns the data saved in the database.
     * @param {VideoStatCreateManyAndReturnArgs} args - Arguments to create many VideoStats.
     * @example
     * // Create many VideoStats
     * const videoStat = await prisma.videoStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoStats and only return the `videoId`
     * const videoStatWithVideoIdOnly = await prisma.videoStat.createManyAndReturn({
     *   select: { videoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoStatCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoStat.
     * @param {VideoStatDeleteArgs} args - Arguments to delete one VideoStat.
     * @example
     * // Delete one VideoStat
     * const VideoStat = await prisma.videoStat.delete({
     *   where: {
     *     // ... filter to delete one VideoStat
     *   }
     * })
     * 
     */
    delete<T extends VideoStatDeleteArgs>(args: SelectSubset<T, VideoStatDeleteArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoStat.
     * @param {VideoStatUpdateArgs} args - Arguments to update one VideoStat.
     * @example
     * // Update one VideoStat
     * const videoStat = await prisma.videoStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoStatUpdateArgs>(args: SelectSubset<T, VideoStatUpdateArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoStats.
     * @param {VideoStatDeleteManyArgs} args - Arguments to filter VideoStats to delete.
     * @example
     * // Delete a few VideoStats
     * const { count } = await prisma.videoStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoStatDeleteManyArgs>(args?: SelectSubset<T, VideoStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoStats
     * const videoStat = await prisma.videoStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoStatUpdateManyArgs>(args: SelectSubset<T, VideoStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoStats and returns the data updated in the database.
     * @param {VideoStatUpdateManyAndReturnArgs} args - Arguments to update many VideoStats.
     * @example
     * // Update many VideoStats
     * const videoStat = await prisma.videoStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoStats and only return the `videoId`
     * const videoStatWithVideoIdOnly = await prisma.videoStat.updateManyAndReturn({
     *   select: { videoId: true },
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
    updateManyAndReturn<T extends VideoStatUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoStat.
     * @param {VideoStatUpsertArgs} args - Arguments to update or create a VideoStat.
     * @example
     * // Update or create a VideoStat
     * const videoStat = await prisma.videoStat.upsert({
     *   create: {
     *     // ... data to create a VideoStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoStat we want to update
     *   }
     * })
     */
    upsert<T extends VideoStatUpsertArgs>(args: SelectSubset<T, VideoStatUpsertArgs<ExtArgs>>): Prisma__VideoStatClient<$Result.GetResult<Prisma.$VideoStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatCountArgs} args - Arguments to filter VideoStats to count.
     * @example
     * // Count the number of VideoStats
     * const count = await prisma.videoStat.count({
     *   where: {
     *     // ... the filter for the VideoStats we want to count
     *   }
     * })
    **/
    count<T extends VideoStatCountArgs>(
      args?: Subset<T, VideoStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoStatAggregateArgs>(args: Subset<T, VideoStatAggregateArgs>): Prisma.PrismaPromise<GetVideoStatAggregateType<T>>

    /**
     * Group by VideoStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoStatGroupByArgs} args - Group by arguments.
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
      T extends VideoStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoStatGroupByArgs['orderBy'] }
        : { orderBy?: VideoStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoStat model
   */
  readonly fields: VideoStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoStat model
   */
  interface VideoStatFieldRefs {
    readonly videoId: FieldRef<"VideoStat", 'String'>
    readonly viewsCount: FieldRef<"VideoStat", 'Int'>
    readonly likesCount: FieldRef<"VideoStat", 'Int'>
    readonly dislikesCount: FieldRef<"VideoStat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VideoStat findUnique
   */
  export type VideoStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter, which VideoStat to fetch.
     */
    where: VideoStatWhereUniqueInput
  }

  /**
   * VideoStat findUniqueOrThrow
   */
  export type VideoStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter, which VideoStat to fetch.
     */
    where: VideoStatWhereUniqueInput
  }

  /**
   * VideoStat findFirst
   */
  export type VideoStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter, which VideoStat to fetch.
     */
    where?: VideoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoStats to fetch.
     */
    orderBy?: VideoStatOrderByWithRelationInput | VideoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoStats.
     */
    cursor?: VideoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoStats.
     */
    distinct?: VideoStatScalarFieldEnum | VideoStatScalarFieldEnum[]
  }

  /**
   * VideoStat findFirstOrThrow
   */
  export type VideoStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter, which VideoStat to fetch.
     */
    where?: VideoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoStats to fetch.
     */
    orderBy?: VideoStatOrderByWithRelationInput | VideoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoStats.
     */
    cursor?: VideoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoStats.
     */
    distinct?: VideoStatScalarFieldEnum | VideoStatScalarFieldEnum[]
  }

  /**
   * VideoStat findMany
   */
  export type VideoStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter, which VideoStats to fetch.
     */
    where?: VideoStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoStats to fetch.
     */
    orderBy?: VideoStatOrderByWithRelationInput | VideoStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoStats.
     */
    cursor?: VideoStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoStats.
     */
    skip?: number
    distinct?: VideoStatScalarFieldEnum | VideoStatScalarFieldEnum[]
  }

  /**
   * VideoStat create
   */
  export type VideoStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoStat.
     */
    data: XOR<VideoStatCreateInput, VideoStatUncheckedCreateInput>
  }

  /**
   * VideoStat createMany
   */
  export type VideoStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoStats.
     */
    data: VideoStatCreateManyInput | VideoStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoStat createManyAndReturn
   */
  export type VideoStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * The data used to create many VideoStats.
     */
    data: VideoStatCreateManyInput | VideoStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoStat update
   */
  export type VideoStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoStat.
     */
    data: XOR<VideoStatUpdateInput, VideoStatUncheckedUpdateInput>
    /**
     * Choose, which VideoStat to update.
     */
    where: VideoStatWhereUniqueInput
  }

  /**
   * VideoStat updateMany
   */
  export type VideoStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoStats.
     */
    data: XOR<VideoStatUpdateManyMutationInput, VideoStatUncheckedUpdateManyInput>
    /**
     * Filter which VideoStats to update
     */
    where?: VideoStatWhereInput
    /**
     * Limit how many VideoStats to update.
     */
    limit?: number
  }

  /**
   * VideoStat updateManyAndReturn
   */
  export type VideoStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * The data used to update VideoStats.
     */
    data: XOR<VideoStatUpdateManyMutationInput, VideoStatUncheckedUpdateManyInput>
    /**
     * Filter which VideoStats to update
     */
    where?: VideoStatWhereInput
    /**
     * Limit how many VideoStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoStat upsert
   */
  export type VideoStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoStat to update in case it exists.
     */
    where: VideoStatWhereUniqueInput
    /**
     * In case the VideoStat found by the `where` argument doesn't exist, create a new VideoStat with this data.
     */
    create: XOR<VideoStatCreateInput, VideoStatUncheckedCreateInput>
    /**
     * In case the VideoStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoStatUpdateInput, VideoStatUncheckedUpdateInput>
  }

  /**
   * VideoStat delete
   */
  export type VideoStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
    /**
     * Filter which VideoStat to delete.
     */
    where: VideoStatWhereUniqueInput
  }

  /**
   * VideoStat deleteMany
   */
  export type VideoStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoStats to delete
     */
    where?: VideoStatWhereInput
    /**
     * Limit how many VideoStats to delete.
     */
    limit?: number
  }

  /**
   * VideoStat without action
   */
  export type VideoStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoStat
     */
    select?: VideoStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoStat
     */
    omit?: VideoStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoStatInclude<ExtArgs> | null
  }


  /**
   * Model VideoSetting
   */

  export type AggregateVideoSetting = {
    _count: VideoSettingCountAggregateOutputType | null
    _min: VideoSettingMinAggregateOutputType | null
    _max: VideoSettingMaxAggregateOutputType | null
  }

  export type VideoSettingMinAggregateOutputType = {
    videoId: string | null
    disableComments: boolean | null
    commentAudience: $Enums.CommentAudience | null
    disableLikes: boolean | null
    disableSharing: boolean | null
    privacy: $Enums.VideoPrivacy | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoSettingMaxAggregateOutputType = {
    videoId: string | null
    disableComments: boolean | null
    commentAudience: $Enums.CommentAudience | null
    disableLikes: boolean | null
    disableSharing: boolean | null
    privacy: $Enums.VideoPrivacy | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoSettingCountAggregateOutputType = {
    videoId: number
    disableComments: number
    commentAudience: number
    disableLikes: number
    disableSharing: number
    privacy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoSettingMinAggregateInputType = {
    videoId?: true
    disableComments?: true
    commentAudience?: true
    disableLikes?: true
    disableSharing?: true
    privacy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoSettingMaxAggregateInputType = {
    videoId?: true
    disableComments?: true
    commentAudience?: true
    disableLikes?: true
    disableSharing?: true
    privacy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoSettingCountAggregateInputType = {
    videoId?: true
    disableComments?: true
    commentAudience?: true
    disableLikes?: true
    disableSharing?: true
    privacy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoSetting to aggregate.
     */
    where?: VideoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSettings to fetch.
     */
    orderBy?: VideoSettingOrderByWithRelationInput | VideoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoSettings
    **/
    _count?: true | VideoSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoSettingMaxAggregateInputType
  }

  export type GetVideoSettingAggregateType<T extends VideoSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoSetting[P]>
      : GetScalarType<T[P], AggregateVideoSetting[P]>
  }




  export type VideoSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoSettingWhereInput
    orderBy?: VideoSettingOrderByWithAggregationInput | VideoSettingOrderByWithAggregationInput[]
    by: VideoSettingScalarFieldEnum[] | VideoSettingScalarFieldEnum
    having?: VideoSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoSettingCountAggregateInputType | true
    _min?: VideoSettingMinAggregateInputType
    _max?: VideoSettingMaxAggregateInputType
  }

  export type VideoSettingGroupByOutputType = {
    videoId: string
    disableComments: boolean
    commentAudience: $Enums.CommentAudience
    disableLikes: boolean
    disableSharing: boolean
    privacy: $Enums.VideoPrivacy
    createdAt: Date
    updatedAt: Date
    _count: VideoSettingCountAggregateOutputType | null
    _min: VideoSettingMinAggregateOutputType | null
    _max: VideoSettingMaxAggregateOutputType | null
  }

  type GetVideoSettingGroupByPayload<T extends VideoSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoSettingGroupByOutputType[P]>
            : GetScalarType<T[P], VideoSettingGroupByOutputType[P]>
        }
      >
    >


  export type VideoSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    disableComments?: boolean
    commentAudience?: boolean
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSetting"]>

  export type VideoSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    disableComments?: boolean
    commentAudience?: boolean
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSetting"]>

  export type VideoSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    disableComments?: boolean
    commentAudience?: boolean
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoSetting"]>

  export type VideoSettingSelectScalar = {
    videoId?: boolean
    disableComments?: boolean
    commentAudience?: boolean
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"videoId" | "disableComments" | "commentAudience" | "disableLikes" | "disableSharing" | "privacy" | "createdAt" | "updatedAt", ExtArgs["result"]["videoSetting"]>
  export type VideoSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type VideoSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $VideoSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoSetting"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      videoId: string
      disableComments: boolean
      commentAudience: $Enums.CommentAudience
      disableLikes: boolean
      disableSharing: boolean
      privacy: $Enums.VideoPrivacy
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoSetting"]>
    composites: {}
  }

  type VideoSettingGetPayload<S extends boolean | null | undefined | VideoSettingDefaultArgs> = $Result.GetResult<Prisma.$VideoSettingPayload, S>

  type VideoSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoSettingCountAggregateInputType | true
    }

  export interface VideoSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoSetting'], meta: { name: 'VideoSetting' } }
    /**
     * Find zero or one VideoSetting that matches the filter.
     * @param {VideoSettingFindUniqueArgs} args - Arguments to find a VideoSetting
     * @example
     * // Get one VideoSetting
     * const videoSetting = await prisma.videoSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoSettingFindUniqueArgs>(args: SelectSubset<T, VideoSettingFindUniqueArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoSettingFindUniqueOrThrowArgs} args - Arguments to find a VideoSetting
     * @example
     * // Get one VideoSetting
     * const videoSetting = await prisma.videoSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingFindFirstArgs} args - Arguments to find a VideoSetting
     * @example
     * // Get one VideoSetting
     * const videoSetting = await prisma.videoSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoSettingFindFirstArgs>(args?: SelectSubset<T, VideoSettingFindFirstArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingFindFirstOrThrowArgs} args - Arguments to find a VideoSetting
     * @example
     * // Get one VideoSetting
     * const videoSetting = await prisma.videoSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoSettings
     * const videoSettings = await prisma.videoSetting.findMany()
     * 
     * // Get first 10 VideoSettings
     * const videoSettings = await prisma.videoSetting.findMany({ take: 10 })
     * 
     * // Only select the `videoId`
     * const videoSettingWithVideoIdOnly = await prisma.videoSetting.findMany({ select: { videoId: true } })
     * 
     */
    findMany<T extends VideoSettingFindManyArgs>(args?: SelectSubset<T, VideoSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoSetting.
     * @param {VideoSettingCreateArgs} args - Arguments to create a VideoSetting.
     * @example
     * // Create one VideoSetting
     * const VideoSetting = await prisma.videoSetting.create({
     *   data: {
     *     // ... data to create a VideoSetting
     *   }
     * })
     * 
     */
    create<T extends VideoSettingCreateArgs>(args: SelectSubset<T, VideoSettingCreateArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoSettings.
     * @param {VideoSettingCreateManyArgs} args - Arguments to create many VideoSettings.
     * @example
     * // Create many VideoSettings
     * const videoSetting = await prisma.videoSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoSettingCreateManyArgs>(args?: SelectSubset<T, VideoSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoSettings and returns the data saved in the database.
     * @param {VideoSettingCreateManyAndReturnArgs} args - Arguments to create many VideoSettings.
     * @example
     * // Create many VideoSettings
     * const videoSetting = await prisma.videoSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoSettings and only return the `videoId`
     * const videoSettingWithVideoIdOnly = await prisma.videoSetting.createManyAndReturn({
     *   select: { videoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoSetting.
     * @param {VideoSettingDeleteArgs} args - Arguments to delete one VideoSetting.
     * @example
     * // Delete one VideoSetting
     * const VideoSetting = await prisma.videoSetting.delete({
     *   where: {
     *     // ... filter to delete one VideoSetting
     *   }
     * })
     * 
     */
    delete<T extends VideoSettingDeleteArgs>(args: SelectSubset<T, VideoSettingDeleteArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoSetting.
     * @param {VideoSettingUpdateArgs} args - Arguments to update one VideoSetting.
     * @example
     * // Update one VideoSetting
     * const videoSetting = await prisma.videoSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoSettingUpdateArgs>(args: SelectSubset<T, VideoSettingUpdateArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoSettings.
     * @param {VideoSettingDeleteManyArgs} args - Arguments to filter VideoSettings to delete.
     * @example
     * // Delete a few VideoSettings
     * const { count } = await prisma.videoSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoSettingDeleteManyArgs>(args?: SelectSubset<T, VideoSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoSettings
     * const videoSetting = await prisma.videoSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoSettingUpdateManyArgs>(args: SelectSubset<T, VideoSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoSettings and returns the data updated in the database.
     * @param {VideoSettingUpdateManyAndReturnArgs} args - Arguments to update many VideoSettings.
     * @example
     * // Update many VideoSettings
     * const videoSetting = await prisma.videoSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoSettings and only return the `videoId`
     * const videoSettingWithVideoIdOnly = await prisma.videoSetting.updateManyAndReturn({
     *   select: { videoId: true },
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
    updateManyAndReturn<T extends VideoSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoSetting.
     * @param {VideoSettingUpsertArgs} args - Arguments to update or create a VideoSetting.
     * @example
     * // Update or create a VideoSetting
     * const videoSetting = await prisma.videoSetting.upsert({
     *   create: {
     *     // ... data to create a VideoSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoSetting we want to update
     *   }
     * })
     */
    upsert<T extends VideoSettingUpsertArgs>(args: SelectSubset<T, VideoSettingUpsertArgs<ExtArgs>>): Prisma__VideoSettingClient<$Result.GetResult<Prisma.$VideoSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingCountArgs} args - Arguments to filter VideoSettings to count.
     * @example
     * // Count the number of VideoSettings
     * const count = await prisma.videoSetting.count({
     *   where: {
     *     // ... the filter for the VideoSettings we want to count
     *   }
     * })
    **/
    count<T extends VideoSettingCountArgs>(
      args?: Subset<T, VideoSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoSettingAggregateArgs>(args: Subset<T, VideoSettingAggregateArgs>): Prisma.PrismaPromise<GetVideoSettingAggregateType<T>>

    /**
     * Group by VideoSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSettingGroupByArgs} args - Group by arguments.
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
      T extends VideoSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoSettingGroupByArgs['orderBy'] }
        : { orderBy?: VideoSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoSetting model
   */
  readonly fields: VideoSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoSetting model
   */
  interface VideoSettingFieldRefs {
    readonly videoId: FieldRef<"VideoSetting", 'String'>
    readonly disableComments: FieldRef<"VideoSetting", 'Boolean'>
    readonly commentAudience: FieldRef<"VideoSetting", 'CommentAudience'>
    readonly disableLikes: FieldRef<"VideoSetting", 'Boolean'>
    readonly disableSharing: FieldRef<"VideoSetting", 'Boolean'>
    readonly privacy: FieldRef<"VideoSetting", 'VideoPrivacy'>
    readonly createdAt: FieldRef<"VideoSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoSetting findUnique
   */
  export type VideoSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter, which VideoSetting to fetch.
     */
    where: VideoSettingWhereUniqueInput
  }

  /**
   * VideoSetting findUniqueOrThrow
   */
  export type VideoSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter, which VideoSetting to fetch.
     */
    where: VideoSettingWhereUniqueInput
  }

  /**
   * VideoSetting findFirst
   */
  export type VideoSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter, which VideoSetting to fetch.
     */
    where?: VideoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSettings to fetch.
     */
    orderBy?: VideoSettingOrderByWithRelationInput | VideoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoSettings.
     */
    cursor?: VideoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoSettings.
     */
    distinct?: VideoSettingScalarFieldEnum | VideoSettingScalarFieldEnum[]
  }

  /**
   * VideoSetting findFirstOrThrow
   */
  export type VideoSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter, which VideoSetting to fetch.
     */
    where?: VideoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSettings to fetch.
     */
    orderBy?: VideoSettingOrderByWithRelationInput | VideoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoSettings.
     */
    cursor?: VideoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoSettings.
     */
    distinct?: VideoSettingScalarFieldEnum | VideoSettingScalarFieldEnum[]
  }

  /**
   * VideoSetting findMany
   */
  export type VideoSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter, which VideoSettings to fetch.
     */
    where?: VideoSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSettings to fetch.
     */
    orderBy?: VideoSettingOrderByWithRelationInput | VideoSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoSettings.
     */
    cursor?: VideoSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSettings.
     */
    skip?: number
    distinct?: VideoSettingScalarFieldEnum | VideoSettingScalarFieldEnum[]
  }

  /**
   * VideoSetting create
   */
  export type VideoSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoSetting.
     */
    data: XOR<VideoSettingCreateInput, VideoSettingUncheckedCreateInput>
  }

  /**
   * VideoSetting createMany
   */
  export type VideoSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoSettings.
     */
    data: VideoSettingCreateManyInput | VideoSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoSetting createManyAndReturn
   */
  export type VideoSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * The data used to create many VideoSettings.
     */
    data: VideoSettingCreateManyInput | VideoSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoSetting update
   */
  export type VideoSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoSetting.
     */
    data: XOR<VideoSettingUpdateInput, VideoSettingUncheckedUpdateInput>
    /**
     * Choose, which VideoSetting to update.
     */
    where: VideoSettingWhereUniqueInput
  }

  /**
   * VideoSetting updateMany
   */
  export type VideoSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoSettings.
     */
    data: XOR<VideoSettingUpdateManyMutationInput, VideoSettingUncheckedUpdateManyInput>
    /**
     * Filter which VideoSettings to update
     */
    where?: VideoSettingWhereInput
    /**
     * Limit how many VideoSettings to update.
     */
    limit?: number
  }

  /**
   * VideoSetting updateManyAndReturn
   */
  export type VideoSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * The data used to update VideoSettings.
     */
    data: XOR<VideoSettingUpdateManyMutationInput, VideoSettingUncheckedUpdateManyInput>
    /**
     * Filter which VideoSettings to update
     */
    where?: VideoSettingWhereInput
    /**
     * Limit how many VideoSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoSetting upsert
   */
  export type VideoSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoSetting to update in case it exists.
     */
    where: VideoSettingWhereUniqueInput
    /**
     * In case the VideoSetting found by the `where` argument doesn't exist, create a new VideoSetting with this data.
     */
    create: XOR<VideoSettingCreateInput, VideoSettingUncheckedCreateInput>
    /**
     * In case the VideoSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoSettingUpdateInput, VideoSettingUncheckedUpdateInput>
  }

  /**
   * VideoSetting delete
   */
  export type VideoSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
    /**
     * Filter which VideoSetting to delete.
     */
    where: VideoSettingWhereUniqueInput
  }

  /**
   * VideoSetting deleteMany
   */
  export type VideoSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoSettings to delete
     */
    where?: VideoSettingWhereInput
    /**
     * Limit how many VideoSettings to delete.
     */
    limit?: number
  }

  /**
   * VideoSetting without action
   */
  export type VideoSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoSetting
     */
    select?: VideoSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoSetting
     */
    omit?: VideoSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoSettingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    setupStatus: 'setupStatus',
    lastLoginAt: 'lastLoginAt',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    browser: 'browser',
    ip: 'ip',
    userAgent: 'userAgent',
    lastSeen: 'lastSeen',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionDeviceScalarFieldEnum: {
    sessionId: 'sessionId',
    name: 'name',
    type: 'type',
    osName: 'osName',
    osVersion: 'osVersion'
  };

  export type SessionDeviceScalarFieldEnum = (typeof SessionDeviceScalarFieldEnum)[keyof typeof SessionDeviceScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    uniqueName: 'uniqueName',
    profilePhotoUrl: 'profilePhotoUrl',
    profileCoverPhotoUrl: 'profileCoverPhotoUrl',
    about: 'about',
    viewsCount: 'viewsCount',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const ProfileChangeScalarFieldEnum: {
    userId: 'userId',
    lastChannelNameChange: 'lastChannelNameChange',
    lastChannelUniqueNameChange: 'lastChannelUniqueNameChange',
    lastChannelAboutChange: 'lastChannelAboutChange',
    lastProfilePhotoChange: 'lastProfilePhotoChange',
    lastCoverPhotoChange: 'lastCoverPhotoChange'
  };

  export type ProfileChangeScalarFieldEnum = (typeof ProfileChangeScalarFieldEnum)[keyof typeof ProfileChangeScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    title: 'title',
    description: 'description',
    resolutionTier: 'resolutionTier',
    duration: 'duration',
    aspectRatio: 'aspectRatio',
    status: 'status',
    deleted: 'deleted'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const VideoMediaScalarFieldEnum: {
    videoId: 'videoId',
    muxAssetId: 'muxAssetId',
    muxPlaybackId: 'muxPlaybackId',
    imagekitId: 'imagekitId',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl'
  };

  export type VideoMediaScalarFieldEnum = (typeof VideoMediaScalarFieldEnum)[keyof typeof VideoMediaScalarFieldEnum]


  export const VideoStatScalarFieldEnum: {
    videoId: 'videoId',
    viewsCount: 'viewsCount',
    likesCount: 'likesCount',
    dislikesCount: 'dislikesCount'
  };

  export type VideoStatScalarFieldEnum = (typeof VideoStatScalarFieldEnum)[keyof typeof VideoStatScalarFieldEnum]


  export const VideoSettingScalarFieldEnum: {
    videoId: 'videoId',
    disableComments: 'disableComments',
    commentAudience: 'commentAudience',
    disableLikes: 'disableLikes',
    disableSharing: 'disableSharing',
    privacy: 'privacy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoSettingScalarFieldEnum = (typeof VideoSettingScalarFieldEnum)[keyof typeof VideoSettingScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ChannelStatus'
   */
  export type EnumChannelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelStatus'>
    


  /**
   * Reference to a field of type 'ChannelStatus[]'
   */
  export type ListEnumChannelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelStatus[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'CommentAudience'
   */
  export type EnumCommentAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentAudience'>
    


  /**
   * Reference to a field of type 'CommentAudience[]'
   */
  export type ListEnumCommentAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentAudience[]'>
    


  /**
   * Reference to a field of type 'VideoPrivacy'
   */
  export type EnumVideoPrivacyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoPrivacy'>
    


  /**
   * Reference to a field of type 'VideoPrivacy[]'
   */
  export type ListEnumVideoPrivacyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoPrivacy[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    setupStatus?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    sessions?: SessionListRelationFilter
    profileChanges?: XOR<ProfileChangeNullableScalarRelationFilter, ProfileChangeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    setupStatus?: SortOrder
    lastLoginAt?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    profileChanges?: ProfileChangeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    setupStatus?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    sessions?: SessionListRelationFilter
    profileChanges?: XOR<ProfileChangeNullableScalarRelationFilter, ProfileChangeWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    setupStatus?: SortOrder
    lastLoginAt?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    setupStatus?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    browser?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    lastSeen?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: XOR<SessionDeviceNullableScalarRelationFilter, SessionDeviceWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    browser?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: SessionDeviceOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    browser?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    lastSeen?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: XOR<SessionDeviceNullableScalarRelationFilter, SessionDeviceWhereInput> | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    browser?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    browser?: StringWithAggregatesFilter<"Session"> | string
    ip?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    lastSeen?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SessionDeviceWhereInput = {
    AND?: SessionDeviceWhereInput | SessionDeviceWhereInput[]
    OR?: SessionDeviceWhereInput[]
    NOT?: SessionDeviceWhereInput | SessionDeviceWhereInput[]
    sessionId?: StringFilter<"SessionDevice"> | string
    name?: StringFilter<"SessionDevice"> | string
    type?: EnumDeviceTypeFilter<"SessionDevice"> | $Enums.DeviceType
    osName?: StringFilter<"SessionDevice"> | string
    osVersion?: StringFilter<"SessionDevice"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type SessionDeviceOrderByWithRelationInput = {
    sessionId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type SessionDeviceWhereUniqueInput = Prisma.AtLeast<{
    sessionId?: string
    AND?: SessionDeviceWhereInput | SessionDeviceWhereInput[]
    OR?: SessionDeviceWhereInput[]
    NOT?: SessionDeviceWhereInput | SessionDeviceWhereInput[]
    name?: StringFilter<"SessionDevice"> | string
    type?: EnumDeviceTypeFilter<"SessionDevice"> | $Enums.DeviceType
    osName?: StringFilter<"SessionDevice"> | string
    osVersion?: StringFilter<"SessionDevice"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "sessionId">

  export type SessionDeviceOrderByWithAggregationInput = {
    sessionId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    _count?: SessionDeviceCountOrderByAggregateInput
    _max?: SessionDeviceMaxOrderByAggregateInput
    _min?: SessionDeviceMinOrderByAggregateInput
  }

  export type SessionDeviceScalarWhereWithAggregatesInput = {
    AND?: SessionDeviceScalarWhereWithAggregatesInput | SessionDeviceScalarWhereWithAggregatesInput[]
    OR?: SessionDeviceScalarWhereWithAggregatesInput[]
    NOT?: SessionDeviceScalarWhereWithAggregatesInput | SessionDeviceScalarWhereWithAggregatesInput[]
    sessionId?: StringWithAggregatesFilter<"SessionDevice"> | string
    name?: StringWithAggregatesFilter<"SessionDevice"> | string
    type?: EnumDeviceTypeWithAggregatesFilter<"SessionDevice"> | $Enums.DeviceType
    osName?: StringWithAggregatesFilter<"SessionDevice"> | string
    osVersion?: StringWithAggregatesFilter<"SessionDevice"> | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    uniqueName?: StringFilter<"Channel"> | string
    profilePhotoUrl?: StringFilter<"Channel"> | string
    profileCoverPhotoUrl?: StringNullableFilter<"Channel"> | string | null
    about?: StringNullableFilter<"Channel"> | string | null
    viewsCount?: IntFilter<"Channel"> | number
    status?: EnumChannelStatusFilter<"Channel"> | $Enums.ChannelStatus
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    uniqueName?: SortOrder
    profilePhotoUrl?: SortOrder
    profileCoverPhotoUrl?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    viewsCount?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    uniqueName?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    profilePhotoUrl?: StringFilter<"Channel"> | string
    profileCoverPhotoUrl?: StringNullableFilter<"Channel"> | string | null
    about?: StringNullableFilter<"Channel"> | string | null
    viewsCount?: IntFilter<"Channel"> | number
    status?: EnumChannelStatusFilter<"Channel"> | $Enums.ChannelStatus
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
  }, "id" | "userId" | "uniqueName">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    uniqueName?: SortOrder
    profilePhotoUrl?: SortOrder
    profileCoverPhotoUrl?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    viewsCount?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    userId?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    uniqueName?: StringWithAggregatesFilter<"Channel"> | string
    profilePhotoUrl?: StringWithAggregatesFilter<"Channel"> | string
    profileCoverPhotoUrl?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    about?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    viewsCount?: IntWithAggregatesFilter<"Channel"> | number
    status?: EnumChannelStatusWithAggregatesFilter<"Channel"> | $Enums.ChannelStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type ProfileChangeWhereInput = {
    AND?: ProfileChangeWhereInput | ProfileChangeWhereInput[]
    OR?: ProfileChangeWhereInput[]
    NOT?: ProfileChangeWhereInput | ProfileChangeWhereInput[]
    userId?: StringFilter<"ProfileChange"> | string
    lastChannelNameChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastChannelUniqueNameChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastChannelAboutChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastProfilePhotoChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastCoverPhotoChange?: DateTimeFilter<"ProfileChange"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileChangeOrderByWithRelationInput = {
    userId?: SortOrder
    lastChannelNameChange?: SortOrder
    lastChannelUniqueNameChange?: SortOrder
    lastChannelAboutChange?: SortOrder
    lastProfilePhotoChange?: SortOrder
    lastCoverPhotoChange?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileChangeWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: ProfileChangeWhereInput | ProfileChangeWhereInput[]
    OR?: ProfileChangeWhereInput[]
    NOT?: ProfileChangeWhereInput | ProfileChangeWhereInput[]
    lastChannelNameChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastChannelUniqueNameChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastChannelAboutChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastProfilePhotoChange?: DateTimeFilter<"ProfileChange"> | Date | string
    lastCoverPhotoChange?: DateTimeFilter<"ProfileChange"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type ProfileChangeOrderByWithAggregationInput = {
    userId?: SortOrder
    lastChannelNameChange?: SortOrder
    lastChannelUniqueNameChange?: SortOrder
    lastChannelAboutChange?: SortOrder
    lastProfilePhotoChange?: SortOrder
    lastCoverPhotoChange?: SortOrder
    _count?: ProfileChangeCountOrderByAggregateInput
    _max?: ProfileChangeMaxOrderByAggregateInput
    _min?: ProfileChangeMinOrderByAggregateInput
  }

  export type ProfileChangeScalarWhereWithAggregatesInput = {
    AND?: ProfileChangeScalarWhereWithAggregatesInput | ProfileChangeScalarWhereWithAggregatesInput[]
    OR?: ProfileChangeScalarWhereWithAggregatesInput[]
    NOT?: ProfileChangeScalarWhereWithAggregatesInput | ProfileChangeScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ProfileChange"> | string
    lastChannelNameChange?: DateTimeWithAggregatesFilter<"ProfileChange"> | Date | string
    lastChannelUniqueNameChange?: DateTimeWithAggregatesFilter<"ProfileChange"> | Date | string
    lastChannelAboutChange?: DateTimeWithAggregatesFilter<"ProfileChange"> | Date | string
    lastProfilePhotoChange?: DateTimeWithAggregatesFilter<"ProfileChange"> | Date | string
    lastCoverPhotoChange?: DateTimeWithAggregatesFilter<"ProfileChange"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    resolutionTier?: IntNullableFilter<"Video"> | number | null
    duration?: IntNullableFilter<"Video"> | number | null
    aspectRatio?: StringNullableFilter<"Video"> | string | null
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    deleted?: BoolFilter<"Video"> | boolean
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    media?: XOR<VideoMediaNullableScalarRelationFilter, VideoMediaWhereInput> | null
    state?: XOR<VideoStatNullableScalarRelationFilter, VideoStatWhereInput> | null
    setting?: XOR<VideoSettingNullableScalarRelationFilter, VideoSettingWhereInput> | null
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    resolutionTier?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    status?: SortOrder
    deleted?: SortOrder
    channel?: ChannelOrderByWithRelationInput
    media?: VideoMediaOrderByWithRelationInput
    state?: VideoStatOrderByWithRelationInput
    setting?: VideoSettingOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    resolutionTier?: IntNullableFilter<"Video"> | number | null
    duration?: IntNullableFilter<"Video"> | number | null
    aspectRatio?: StringNullableFilter<"Video"> | string | null
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    deleted?: BoolFilter<"Video"> | boolean
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    media?: XOR<VideoMediaNullableScalarRelationFilter, VideoMediaWhereInput> | null
    state?: XOR<VideoStatNullableScalarRelationFilter, VideoStatWhereInput> | null
    setting?: XOR<VideoSettingNullableScalarRelationFilter, VideoSettingWhereInput> | null
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    resolutionTier?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    status?: SortOrder
    deleted?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    channelId?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    resolutionTier?: IntNullableWithAggregatesFilter<"Video"> | number | null
    duration?: IntNullableWithAggregatesFilter<"Video"> | number | null
    aspectRatio?: StringNullableWithAggregatesFilter<"Video"> | string | null
    status?: EnumVideoStatusWithAggregatesFilter<"Video"> | $Enums.VideoStatus
    deleted?: BoolWithAggregatesFilter<"Video"> | boolean
  }

  export type VideoMediaWhereInput = {
    AND?: VideoMediaWhereInput | VideoMediaWhereInput[]
    OR?: VideoMediaWhereInput[]
    NOT?: VideoMediaWhereInput | VideoMediaWhereInput[]
    videoId?: StringFilter<"VideoMedia"> | string
    muxAssetId?: StringNullableFilter<"VideoMedia"> | string | null
    muxPlaybackId?: StringNullableFilter<"VideoMedia"> | string | null
    imagekitId?: StringFilter<"VideoMedia"> | string
    videoUrl?: StringNullableFilter<"VideoMedia"> | string | null
    thumbnailUrl?: StringFilter<"VideoMedia"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoMediaOrderByWithRelationInput = {
    videoId?: SortOrder
    muxAssetId?: SortOrderInput | SortOrder
    muxPlaybackId?: SortOrderInput | SortOrder
    imagekitId?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type VideoMediaWhereUniqueInput = Prisma.AtLeast<{
    videoId?: string
    AND?: VideoMediaWhereInput | VideoMediaWhereInput[]
    OR?: VideoMediaWhereInput[]
    NOT?: VideoMediaWhereInput | VideoMediaWhereInput[]
    muxAssetId?: StringNullableFilter<"VideoMedia"> | string | null
    muxPlaybackId?: StringNullableFilter<"VideoMedia"> | string | null
    imagekitId?: StringFilter<"VideoMedia"> | string
    videoUrl?: StringNullableFilter<"VideoMedia"> | string | null
    thumbnailUrl?: StringFilter<"VideoMedia"> | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "videoId">

  export type VideoMediaOrderByWithAggregationInput = {
    videoId?: SortOrder
    muxAssetId?: SortOrderInput | SortOrder
    muxPlaybackId?: SortOrderInput | SortOrder
    imagekitId?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrder
    _count?: VideoMediaCountOrderByAggregateInput
    _max?: VideoMediaMaxOrderByAggregateInput
    _min?: VideoMediaMinOrderByAggregateInput
  }

  export type VideoMediaScalarWhereWithAggregatesInput = {
    AND?: VideoMediaScalarWhereWithAggregatesInput | VideoMediaScalarWhereWithAggregatesInput[]
    OR?: VideoMediaScalarWhereWithAggregatesInput[]
    NOT?: VideoMediaScalarWhereWithAggregatesInput | VideoMediaScalarWhereWithAggregatesInput[]
    videoId?: StringWithAggregatesFilter<"VideoMedia"> | string
    muxAssetId?: StringNullableWithAggregatesFilter<"VideoMedia"> | string | null
    muxPlaybackId?: StringNullableWithAggregatesFilter<"VideoMedia"> | string | null
    imagekitId?: StringWithAggregatesFilter<"VideoMedia"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"VideoMedia"> | string | null
    thumbnailUrl?: StringWithAggregatesFilter<"VideoMedia"> | string
  }

  export type VideoStatWhereInput = {
    AND?: VideoStatWhereInput | VideoStatWhereInput[]
    OR?: VideoStatWhereInput[]
    NOT?: VideoStatWhereInput | VideoStatWhereInput[]
    videoId?: StringFilter<"VideoStat"> | string
    viewsCount?: IntFilter<"VideoStat"> | number
    likesCount?: IntFilter<"VideoStat"> | number
    dislikesCount?: IntFilter<"VideoStat"> | number
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoStatOrderByWithRelationInput = {
    videoId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type VideoStatWhereUniqueInput = Prisma.AtLeast<{
    videoId?: string
    AND?: VideoStatWhereInput | VideoStatWhereInput[]
    OR?: VideoStatWhereInput[]
    NOT?: VideoStatWhereInput | VideoStatWhereInput[]
    viewsCount?: IntFilter<"VideoStat"> | number
    likesCount?: IntFilter<"VideoStat"> | number
    dislikesCount?: IntFilter<"VideoStat"> | number
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "videoId">

  export type VideoStatOrderByWithAggregationInput = {
    videoId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
    _count?: VideoStatCountOrderByAggregateInput
    _avg?: VideoStatAvgOrderByAggregateInput
    _max?: VideoStatMaxOrderByAggregateInput
    _min?: VideoStatMinOrderByAggregateInput
    _sum?: VideoStatSumOrderByAggregateInput
  }

  export type VideoStatScalarWhereWithAggregatesInput = {
    AND?: VideoStatScalarWhereWithAggregatesInput | VideoStatScalarWhereWithAggregatesInput[]
    OR?: VideoStatScalarWhereWithAggregatesInput[]
    NOT?: VideoStatScalarWhereWithAggregatesInput | VideoStatScalarWhereWithAggregatesInput[]
    videoId?: StringWithAggregatesFilter<"VideoStat"> | string
    viewsCount?: IntWithAggregatesFilter<"VideoStat"> | number
    likesCount?: IntWithAggregatesFilter<"VideoStat"> | number
    dislikesCount?: IntWithAggregatesFilter<"VideoStat"> | number
  }

  export type VideoSettingWhereInput = {
    AND?: VideoSettingWhereInput | VideoSettingWhereInput[]
    OR?: VideoSettingWhereInput[]
    NOT?: VideoSettingWhereInput | VideoSettingWhereInput[]
    videoId?: StringFilter<"VideoSetting"> | string
    disableComments?: BoolFilter<"VideoSetting"> | boolean
    commentAudience?: EnumCommentAudienceFilter<"VideoSetting"> | $Enums.CommentAudience
    disableLikes?: BoolFilter<"VideoSetting"> | boolean
    disableSharing?: BoolFilter<"VideoSetting"> | boolean
    privacy?: EnumVideoPrivacyFilter<"VideoSetting"> | $Enums.VideoPrivacy
    createdAt?: DateTimeFilter<"VideoSetting"> | Date | string
    updatedAt?: DateTimeFilter<"VideoSetting"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type VideoSettingOrderByWithRelationInput = {
    videoId?: SortOrder
    disableComments?: SortOrder
    commentAudience?: SortOrder
    disableLikes?: SortOrder
    disableSharing?: SortOrder
    privacy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type VideoSettingWhereUniqueInput = Prisma.AtLeast<{
    videoId?: string
    AND?: VideoSettingWhereInput | VideoSettingWhereInput[]
    OR?: VideoSettingWhereInput[]
    NOT?: VideoSettingWhereInput | VideoSettingWhereInput[]
    disableComments?: BoolFilter<"VideoSetting"> | boolean
    commentAudience?: EnumCommentAudienceFilter<"VideoSetting"> | $Enums.CommentAudience
    disableLikes?: BoolFilter<"VideoSetting"> | boolean
    disableSharing?: BoolFilter<"VideoSetting"> | boolean
    privacy?: EnumVideoPrivacyFilter<"VideoSetting"> | $Enums.VideoPrivacy
    createdAt?: DateTimeFilter<"VideoSetting"> | Date | string
    updatedAt?: DateTimeFilter<"VideoSetting"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "videoId">

  export type VideoSettingOrderByWithAggregationInput = {
    videoId?: SortOrder
    disableComments?: SortOrder
    commentAudience?: SortOrder
    disableLikes?: SortOrder
    disableSharing?: SortOrder
    privacy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoSettingCountOrderByAggregateInput
    _max?: VideoSettingMaxOrderByAggregateInput
    _min?: VideoSettingMinOrderByAggregateInput
  }

  export type VideoSettingScalarWhereWithAggregatesInput = {
    AND?: VideoSettingScalarWhereWithAggregatesInput | VideoSettingScalarWhereWithAggregatesInput[]
    OR?: VideoSettingScalarWhereWithAggregatesInput[]
    NOT?: VideoSettingScalarWhereWithAggregatesInput | VideoSettingScalarWhereWithAggregatesInput[]
    videoId?: StringWithAggregatesFilter<"VideoSetting"> | string
    disableComments?: BoolWithAggregatesFilter<"VideoSetting"> | boolean
    commentAudience?: EnumCommentAudienceWithAggregatesFilter<"VideoSetting"> | $Enums.CommentAudience
    disableLikes?: BoolWithAggregatesFilter<"VideoSetting"> | boolean
    disableSharing?: BoolWithAggregatesFilter<"VideoSetting"> | boolean
    privacy?: EnumVideoPrivacyWithAggregatesFilter<"VideoSetting"> | $Enums.VideoPrivacy
    createdAt?: DateTimeWithAggregatesFilter<"VideoSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoSetting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    profileChanges?: ProfileChangeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profileChanges?: ProfileChangeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profileChanges?: ProfileChangeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profileChanges?: ProfileChangeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    device?: SessionDeviceCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    device?: SessionDeviceUncheckedCreateNestedOneWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    device?: SessionDeviceUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: SessionDeviceUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionDeviceCreateInput = {
    name: string
    type?: $Enums.DeviceType
    osName?: string
    osVersion?: string
    session: SessionCreateNestedOneWithoutDeviceInput
  }

  export type SessionDeviceUncheckedCreateInput = {
    sessionId: string
    name: string
    type?: $Enums.DeviceType
    osName?: string
    osVersion?: string
  }

  export type SessionDeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type SessionDeviceUncheckedUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
  }

  export type SessionDeviceCreateManyInput = {
    sessionId: string
    name: string
    type?: $Enums.DeviceType
    osName?: string
    osVersion?: string
  }

  export type SessionDeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
  }

  export type SessionDeviceUncheckedUpdateManyInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelCreateInput = {
    id?: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChannelInput
    videos?: VideoCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelNestedInput
    videos?: VideoUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    userId: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileChangeCreateInput = {
    lastChannelNameChange?: Date | string
    lastChannelUniqueNameChange?: Date | string
    lastChannelAboutChange?: Date | string
    lastProfilePhotoChange?: Date | string
    lastCoverPhotoChange?: Date | string
    user: UserCreateNestedOneWithoutProfileChangesInput
  }

  export type ProfileChangeUncheckedCreateInput = {
    userId: string
    lastChannelNameChange?: Date | string
    lastChannelUniqueNameChange?: Date | string
    lastChannelAboutChange?: Date | string
    lastProfilePhotoChange?: Date | string
    lastCoverPhotoChange?: Date | string
  }

  export type ProfileChangeUpdateInput = {
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileChangesNestedInput
  }

  export type ProfileChangeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileChangeCreateManyInput = {
    userId: string
    lastChannelNameChange?: Date | string
    lastChannelUniqueNameChange?: Date | string
    lastChannelAboutChange?: Date | string
    lastProfilePhotoChange?: Date | string
    lastCoverPhotoChange?: Date | string
  }

  export type ProfileChangeUpdateManyMutationInput = {
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileChangeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    channel: ChannelCreateNestedOneWithoutVideosInput
    media?: VideoMediaCreateNestedOneWithoutVideoInput
    state?: VideoStatCreateNestedOneWithoutVideoInput
    setting?: VideoSettingCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    channelId: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    media?: VideoMediaUncheckedCreateNestedOneWithoutVideoInput
    state?: VideoStatUncheckedCreateNestedOneWithoutVideoInput
    setting?: VideoSettingUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    channel?: ChannelUpdateOneRequiredWithoutVideosNestedInput
    media?: VideoMediaUpdateOneWithoutVideoNestedInput
    state?: VideoStatUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    media?: VideoMediaUncheckedUpdateOneWithoutVideoNestedInput
    state?: VideoStatUncheckedUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    channelId: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VideoMediaCreateInput = {
    muxAssetId?: string | null
    muxPlaybackId?: string | null
    imagekitId: string
    videoUrl?: string | null
    thumbnailUrl: string
    video: VideoCreateNestedOneWithoutMediaInput
  }

  export type VideoMediaUncheckedCreateInput = {
    videoId: string
    muxAssetId?: string | null
    muxPlaybackId?: string | null
    imagekitId: string
    videoUrl?: string | null
    thumbnailUrl: string
  }

  export type VideoMediaUpdateInput = {
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    video?: VideoUpdateOneRequiredWithoutMediaNestedInput
  }

  export type VideoMediaUncheckedUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VideoMediaCreateManyInput = {
    videoId: string
    muxAssetId?: string | null
    muxPlaybackId?: string | null
    imagekitId: string
    videoUrl?: string | null
    thumbnailUrl: string
  }

  export type VideoMediaUpdateManyMutationInput = {
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VideoMediaUncheckedUpdateManyInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VideoStatCreateInput = {
    viewsCount?: number
    likesCount?: number
    dislikesCount?: number
    video: VideoCreateNestedOneWithoutStateInput
  }

  export type VideoStatUncheckedCreateInput = {
    videoId: string
    viewsCount?: number
    likesCount?: number
    dislikesCount?: number
  }

  export type VideoStatUpdateInput = {
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateOneRequiredWithoutStateNestedInput
  }

  export type VideoStatUncheckedUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoStatCreateManyInput = {
    videoId: string
    viewsCount?: number
    likesCount?: number
    dislikesCount?: number
  }

  export type VideoStatUpdateManyMutationInput = {
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoStatUncheckedUpdateManyInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoSettingCreateInput = {
    disableComments?: boolean
    commentAudience?: $Enums.CommentAudience
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: $Enums.VideoPrivacy
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutSettingInput
  }

  export type VideoSettingUncheckedCreateInput = {
    videoId: string
    disableComments?: boolean
    commentAudience?: $Enums.CommentAudience
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: $Enums.VideoPrivacy
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSettingUpdateInput = {
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutSettingNestedInput
  }

  export type VideoSettingUncheckedUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSettingCreateManyInput = {
    videoId: string
    disableComments?: boolean
    commentAudience?: $Enums.CommentAudience
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: $Enums.VideoPrivacy
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSettingUpdateManyMutationInput = {
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSettingUncheckedUpdateManyInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type ChannelNullableScalarRelationFilter = {
    is?: ChannelWhereInput | null
    isNot?: ChannelWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProfileChangeNullableScalarRelationFilter = {
    is?: ProfileChangeWhereInput | null
    isNot?: ProfileChangeWhereInput | null
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    setupStatus?: SortOrder
    lastLoginAt?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    setupStatus?: SortOrder
    lastLoginAt?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    setupStatus?: SortOrder
    lastLoginAt?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionDeviceNullableScalarRelationFilter = {
    is?: SessionDeviceWhereInput | null
    isNot?: SessionDeviceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    browser?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    browser?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    browser?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    lastSeen?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
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

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionDeviceCountOrderByAggregateInput = {
    sessionId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
  }

  export type SessionDeviceMaxOrderByAggregateInput = {
    sessionId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
  }

  export type SessionDeviceMinOrderByAggregateInput = {
    sessionId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
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

  export type EnumChannelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelStatusFilter<$PrismaModel> | $Enums.ChannelStatus
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    uniqueName?: SortOrder
    profilePhotoUrl?: SortOrder
    profileCoverPhotoUrl?: SortOrder
    about?: SortOrder
    viewsCount?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    viewsCount?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    uniqueName?: SortOrder
    profilePhotoUrl?: SortOrder
    profileCoverPhotoUrl?: SortOrder
    about?: SortOrder
    viewsCount?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    uniqueName?: SortOrder
    profilePhotoUrl?: SortOrder
    profileCoverPhotoUrl?: SortOrder
    about?: SortOrder
    viewsCount?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    viewsCount?: SortOrder
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

  export type EnumChannelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusFilter<$PrismaModel>
  }

  export type ProfileChangeCountOrderByAggregateInput = {
    userId?: SortOrder
    lastChannelNameChange?: SortOrder
    lastChannelUniqueNameChange?: SortOrder
    lastChannelAboutChange?: SortOrder
    lastProfilePhotoChange?: SortOrder
    lastCoverPhotoChange?: SortOrder
  }

  export type ProfileChangeMaxOrderByAggregateInput = {
    userId?: SortOrder
    lastChannelNameChange?: SortOrder
    lastChannelUniqueNameChange?: SortOrder
    lastChannelAboutChange?: SortOrder
    lastProfilePhotoChange?: SortOrder
    lastCoverPhotoChange?: SortOrder
  }

  export type ProfileChangeMinOrderByAggregateInput = {
    userId?: SortOrder
    lastChannelNameChange?: SortOrder
    lastChannelUniqueNameChange?: SortOrder
    lastChannelAboutChange?: SortOrder
    lastProfilePhotoChange?: SortOrder
    lastCoverPhotoChange?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type VideoMediaNullableScalarRelationFilter = {
    is?: VideoMediaWhereInput | null
    isNot?: VideoMediaWhereInput | null
  }

  export type VideoStatNullableScalarRelationFilter = {
    is?: VideoStatWhereInput | null
    isNot?: VideoStatWhereInput | null
  }

  export type VideoSettingNullableScalarRelationFilter = {
    is?: VideoSettingWhereInput | null
    isNot?: VideoSettingWhereInput | null
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    resolutionTier?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    status?: SortOrder
    deleted?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    resolutionTier?: SortOrder
    duration?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    resolutionTier?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    status?: SortOrder
    deleted?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    resolutionTier?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    status?: SortOrder
    deleted?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    resolutionTier?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type VideoMediaCountOrderByAggregateInput = {
    videoId?: SortOrder
    muxAssetId?: SortOrder
    muxPlaybackId?: SortOrder
    imagekitId?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type VideoMediaMaxOrderByAggregateInput = {
    videoId?: SortOrder
    muxAssetId?: SortOrder
    muxPlaybackId?: SortOrder
    imagekitId?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type VideoMediaMinOrderByAggregateInput = {
    videoId?: SortOrder
    muxAssetId?: SortOrder
    muxPlaybackId?: SortOrder
    imagekitId?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type VideoStatCountOrderByAggregateInput = {
    videoId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
  }

  export type VideoStatAvgOrderByAggregateInput = {
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
  }

  export type VideoStatMaxOrderByAggregateInput = {
    videoId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
  }

  export type VideoStatMinOrderByAggregateInput = {
    videoId?: SortOrder
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
  }

  export type VideoStatSumOrderByAggregateInput = {
    viewsCount?: SortOrder
    likesCount?: SortOrder
    dislikesCount?: SortOrder
  }

  export type EnumCommentAudienceFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentAudience | EnumCommentAudienceFieldRefInput<$PrismaModel>
    in?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentAudienceFilter<$PrismaModel> | $Enums.CommentAudience
  }

  export type EnumVideoPrivacyFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoPrivacy | EnumVideoPrivacyFieldRefInput<$PrismaModel>
    in?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoPrivacyFilter<$PrismaModel> | $Enums.VideoPrivacy
  }

  export type VideoSettingCountOrderByAggregateInput = {
    videoId?: SortOrder
    disableComments?: SortOrder
    commentAudience?: SortOrder
    disableLikes?: SortOrder
    disableSharing?: SortOrder
    privacy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSettingMaxOrderByAggregateInput = {
    videoId?: SortOrder
    disableComments?: SortOrder
    commentAudience?: SortOrder
    disableLikes?: SortOrder
    disableSharing?: SortOrder
    privacy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSettingMinOrderByAggregateInput = {
    videoId?: SortOrder
    disableComments?: SortOrder
    commentAudience?: SortOrder
    disableLikes?: SortOrder
    disableSharing?: SortOrder
    privacy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCommentAudienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentAudience | EnumCommentAudienceFieldRefInput<$PrismaModel>
    in?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentAudienceWithAggregatesFilter<$PrismaModel> | $Enums.CommentAudience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentAudienceFilter<$PrismaModel>
    _max?: NestedEnumCommentAudienceFilter<$PrismaModel>
  }

  export type EnumVideoPrivacyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoPrivacy | EnumVideoPrivacyFieldRefInput<$PrismaModel>
    in?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoPrivacyWithAggregatesFilter<$PrismaModel> | $Enums.VideoPrivacy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoPrivacyFilter<$PrismaModel>
    _max?: NestedEnumVideoPrivacyFilter<$PrismaModel>
  }

  export type ChannelCreateNestedOneWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput
    connect?: ChannelWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfileChangeCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileChangeCreateOrConnectWithoutUserInput
    connect?: ProfileChangeWhereUniqueInput
  }

  export type ChannelUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput
    connect?: ChannelWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfileChangeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileChangeCreateOrConnectWithoutUserInput
    connect?: ProfileChangeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type ChannelUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput
    upsert?: ChannelUpsertWithoutUserInput
    disconnect?: ChannelWhereInput | boolean
    delete?: ChannelWhereInput | boolean
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutUserInput, ChannelUpdateWithoutUserInput>, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfileChangeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileChangeCreateOrConnectWithoutUserInput
    upsert?: ProfileChangeUpsertWithoutUserInput
    disconnect?: ProfileChangeWhereInput | boolean
    delete?: ProfileChangeWhereInput | boolean
    connect?: ProfileChangeWhereUniqueInput
    update?: XOR<XOR<ProfileChangeUpdateToOneWithWhereWithoutUserInput, ProfileChangeUpdateWithoutUserInput>, ProfileChangeUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput
    upsert?: ChannelUpsertWithoutUserInput
    disconnect?: ChannelWhereInput | boolean
    delete?: ChannelWhereInput | boolean
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutUserInput, ChannelUpdateWithoutUserInput>, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfileChangeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileChangeCreateOrConnectWithoutUserInput
    upsert?: ProfileChangeUpsertWithoutUserInput
    disconnect?: ProfileChangeWhereInput | boolean
    delete?: ProfileChangeWhereInput | boolean
    connect?: ProfileChangeWhereUniqueInput
    update?: XOR<XOR<ProfileChangeUpdateToOneWithWhereWithoutUserInput, ProfileChangeUpdateWithoutUserInput>, ProfileChangeUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionDeviceCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionDeviceCreateOrConnectWithoutSessionInput
    connect?: SessionDeviceWhereUniqueInput
  }

  export type SessionDeviceUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionDeviceCreateOrConnectWithoutSessionInput
    connect?: SessionDeviceWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type SessionDeviceUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionDeviceCreateOrConnectWithoutSessionInput
    upsert?: SessionDeviceUpsertWithoutSessionInput
    disconnect?: SessionDeviceWhereInput | boolean
    delete?: SessionDeviceWhereInput | boolean
    connect?: SessionDeviceWhereUniqueInput
    update?: XOR<XOR<SessionDeviceUpdateToOneWithWhereWithoutSessionInput, SessionDeviceUpdateWithoutSessionInput>, SessionDeviceUncheckedUpdateWithoutSessionInput>
  }

  export type SessionDeviceUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionDeviceCreateOrConnectWithoutSessionInput
    upsert?: SessionDeviceUpsertWithoutSessionInput
    disconnect?: SessionDeviceWhereInput | boolean
    delete?: SessionDeviceWhereInput | boolean
    connect?: SessionDeviceWhereUniqueInput
    update?: XOR<XOR<SessionDeviceUpdateToOneWithWhereWithoutSessionInput, SessionDeviceUpdateWithoutSessionInput>, SessionDeviceUncheckedUpdateWithoutSessionInput>
  }

  export type SessionCreateNestedOneWithoutDeviceInput = {
    create?: XOR<SessionCreateWithoutDeviceInput, SessionUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeviceInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type SessionUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<SessionCreateWithoutDeviceInput, SessionUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDeviceInput
    upsert?: SessionUpsertWithoutDeviceInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutDeviceInput, SessionUpdateWithoutDeviceInput>, SessionUncheckedUpdateWithoutDeviceInput>
  }

  export type UserCreateNestedOneWithoutChannelInput = {
    create?: XOR<UserCreateWithoutChannelInput, UserUncheckedCreateWithoutChannelInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutChannelInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumChannelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChannelStatus
  }

  export type UserUpdateOneRequiredWithoutChannelNestedInput = {
    create?: XOR<UserCreateWithoutChannelInput, UserUncheckedCreateWithoutChannelInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelInput
    upsert?: UserUpsertWithoutChannelInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelInput, UserUpdateWithoutChannelInput>, UserUncheckedUpdateWithoutChannelInput>
  }

  export type VideoUpdateManyWithoutChannelNestedInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutChannelInput | VideoUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutChannelInput | VideoUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutChannelInput | VideoUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutChannelInput | VideoUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutChannelInput | VideoUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutChannelInput | VideoUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileChangesInput = {
    create?: XOR<UserCreateWithoutProfileChangesInput, UserUncheckedCreateWithoutProfileChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileChangesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileChangesNestedInput = {
    create?: XOR<UserCreateWithoutProfileChangesInput, UserUncheckedCreateWithoutProfileChangesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileChangesInput
    upsert?: UserUpsertWithoutProfileChangesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileChangesInput, UserUpdateWithoutProfileChangesInput>, UserUncheckedUpdateWithoutProfileChangesInput>
  }

  export type ChannelCreateNestedOneWithoutVideosInput = {
    create?: XOR<ChannelCreateWithoutVideosInput, ChannelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutVideosInput
    connect?: ChannelWhereUniqueInput
  }

  export type VideoMediaCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoMediaCreateOrConnectWithoutVideoInput
    connect?: VideoMediaWhereUniqueInput
  }

  export type VideoStatCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoStatCreateOrConnectWithoutVideoInput
    connect?: VideoStatWhereUniqueInput
  }

  export type VideoSettingCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoSettingCreateOrConnectWithoutVideoInput
    connect?: VideoSettingWhereUniqueInput
  }

  export type VideoMediaUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoMediaCreateOrConnectWithoutVideoInput
    connect?: VideoMediaWhereUniqueInput
  }

  export type VideoStatUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoStatCreateOrConnectWithoutVideoInput
    connect?: VideoStatWhereUniqueInput
  }

  export type VideoSettingUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoSettingCreateOrConnectWithoutVideoInput
    connect?: VideoSettingWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type ChannelUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<ChannelCreateWithoutVideosInput, ChannelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutVideosInput
    upsert?: ChannelUpsertWithoutVideosInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutVideosInput, ChannelUpdateWithoutVideosInput>, ChannelUncheckedUpdateWithoutVideosInput>
  }

  export type VideoMediaUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoMediaCreateOrConnectWithoutVideoInput
    upsert?: VideoMediaUpsertWithoutVideoInput
    disconnect?: VideoMediaWhereInput | boolean
    delete?: VideoMediaWhereInput | boolean
    connect?: VideoMediaWhereUniqueInput
    update?: XOR<XOR<VideoMediaUpdateToOneWithWhereWithoutVideoInput, VideoMediaUpdateWithoutVideoInput>, VideoMediaUncheckedUpdateWithoutVideoInput>
  }

  export type VideoStatUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoStatCreateOrConnectWithoutVideoInput
    upsert?: VideoStatUpsertWithoutVideoInput
    disconnect?: VideoStatWhereInput | boolean
    delete?: VideoStatWhereInput | boolean
    connect?: VideoStatWhereUniqueInput
    update?: XOR<XOR<VideoStatUpdateToOneWithWhereWithoutVideoInput, VideoStatUpdateWithoutVideoInput>, VideoStatUncheckedUpdateWithoutVideoInput>
  }

  export type VideoSettingUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoSettingCreateOrConnectWithoutVideoInput
    upsert?: VideoSettingUpsertWithoutVideoInput
    disconnect?: VideoSettingWhereInput | boolean
    delete?: VideoSettingWhereInput | boolean
    connect?: VideoSettingWhereUniqueInput
    update?: XOR<XOR<VideoSettingUpdateToOneWithWhereWithoutVideoInput, VideoSettingUpdateWithoutVideoInput>, VideoSettingUncheckedUpdateWithoutVideoInput>
  }

  export type VideoMediaUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoMediaCreateOrConnectWithoutVideoInput
    upsert?: VideoMediaUpsertWithoutVideoInput
    disconnect?: VideoMediaWhereInput | boolean
    delete?: VideoMediaWhereInput | boolean
    connect?: VideoMediaWhereUniqueInput
    update?: XOR<XOR<VideoMediaUpdateToOneWithWhereWithoutVideoInput, VideoMediaUpdateWithoutVideoInput>, VideoMediaUncheckedUpdateWithoutVideoInput>
  }

  export type VideoStatUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoStatCreateOrConnectWithoutVideoInput
    upsert?: VideoStatUpsertWithoutVideoInput
    disconnect?: VideoStatWhereInput | boolean
    delete?: VideoStatWhereInput | boolean
    connect?: VideoStatWhereUniqueInput
    update?: XOR<XOR<VideoStatUpdateToOneWithWhereWithoutVideoInput, VideoStatUpdateWithoutVideoInput>, VideoStatUncheckedUpdateWithoutVideoInput>
  }

  export type VideoSettingUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoSettingCreateOrConnectWithoutVideoInput
    upsert?: VideoSettingUpsertWithoutVideoInput
    disconnect?: VideoSettingWhereInput | boolean
    delete?: VideoSettingWhereInput | boolean
    connect?: VideoSettingWhereUniqueInput
    update?: XOR<XOR<VideoSettingUpdateToOneWithWhereWithoutVideoInput, VideoSettingUpdateWithoutVideoInput>, VideoSettingUncheckedUpdateWithoutVideoInput>
  }

  export type VideoCreateNestedOneWithoutMediaInput = {
    create?: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMediaInput
    connect?: VideoWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMediaInput
    upsert?: VideoUpsertWithoutMediaInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMediaInput, VideoUpdateWithoutMediaInput>, VideoUncheckedUpdateWithoutMediaInput>
  }

  export type VideoCreateNestedOneWithoutStateInput = {
    create?: XOR<VideoCreateWithoutStateInput, VideoUncheckedCreateWithoutStateInput>
    connectOrCreate?: VideoCreateOrConnectWithoutStateInput
    connect?: VideoWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutStateNestedInput = {
    create?: XOR<VideoCreateWithoutStateInput, VideoUncheckedCreateWithoutStateInput>
    connectOrCreate?: VideoCreateOrConnectWithoutStateInput
    upsert?: VideoUpsertWithoutStateInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutStateInput, VideoUpdateWithoutStateInput>, VideoUncheckedUpdateWithoutStateInput>
  }

  export type VideoCreateNestedOneWithoutSettingInput = {
    create?: XOR<VideoCreateWithoutSettingInput, VideoUncheckedCreateWithoutSettingInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSettingInput
    connect?: VideoWhereUniqueInput
  }

  export type EnumCommentAudienceFieldUpdateOperationsInput = {
    set?: $Enums.CommentAudience
  }

  export type EnumVideoPrivacyFieldUpdateOperationsInput = {
    set?: $Enums.VideoPrivacy
  }

  export type VideoUpdateOneRequiredWithoutSettingNestedInput = {
    create?: XOR<VideoCreateWithoutSettingInput, VideoUncheckedCreateWithoutSettingInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSettingInput
    upsert?: VideoUpsertWithoutSettingInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutSettingInput, VideoUpdateWithoutSettingInput>, VideoUncheckedUpdateWithoutSettingInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type NestedEnumChannelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelStatusFilter<$PrismaModel> | $Enums.ChannelStatus
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

  export type NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelStatus | EnumChannelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelStatus[] | ListEnumChannelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChannelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelStatusFilter<$PrismaModel>
    _max?: NestedEnumChannelStatusFilter<$PrismaModel>
  }

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type NestedEnumCommentAudienceFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentAudience | EnumCommentAudienceFieldRefInput<$PrismaModel>
    in?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentAudienceFilter<$PrismaModel> | $Enums.CommentAudience
  }

  export type NestedEnumVideoPrivacyFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoPrivacy | EnumVideoPrivacyFieldRefInput<$PrismaModel>
    in?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoPrivacyFilter<$PrismaModel> | $Enums.VideoPrivacy
  }

  export type NestedEnumCommentAudienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentAudience | EnumCommentAudienceFieldRefInput<$PrismaModel>
    in?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentAudience[] | ListEnumCommentAudienceFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentAudienceWithAggregatesFilter<$PrismaModel> | $Enums.CommentAudience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentAudienceFilter<$PrismaModel>
    _max?: NestedEnumCommentAudienceFilter<$PrismaModel>
  }

  export type NestedEnumVideoPrivacyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoPrivacy | EnumVideoPrivacyFieldRefInput<$PrismaModel>
    in?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoPrivacy[] | ListEnumVideoPrivacyFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoPrivacyWithAggregatesFilter<$PrismaModel> | $Enums.VideoPrivacy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoPrivacyFilter<$PrismaModel>
    _max?: NestedEnumVideoPrivacyFilter<$PrismaModel>
  }

  export type ChannelCreateWithoutUserInput = {
    id?: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutUserInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    device?: SessionDeviceCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    device?: SessionDeviceUncheckedCreateNestedOneWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileChangeCreateWithoutUserInput = {
    lastChannelNameChange?: Date | string
    lastChannelUniqueNameChange?: Date | string
    lastChannelAboutChange?: Date | string
    lastProfilePhotoChange?: Date | string
    lastCoverPhotoChange?: Date | string
  }

  export type ProfileChangeUncheckedCreateWithoutUserInput = {
    lastChannelNameChange?: Date | string
    lastChannelUniqueNameChange?: Date | string
    lastChannelAboutChange?: Date | string
    lastProfilePhotoChange?: Date | string
    lastCoverPhotoChange?: Date | string
  }

  export type ProfileChangeCreateOrConnectWithoutUserInput = {
    where: ProfileChangeWhereUniqueInput
    create: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
  }

  export type ChannelUpsertWithoutUserInput = {
    update: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutUserInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    browser?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    lastSeen?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProfileChangeUpsertWithoutUserInput = {
    update: XOR<ProfileChangeUpdateWithoutUserInput, ProfileChangeUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileChangeCreateWithoutUserInput, ProfileChangeUncheckedCreateWithoutUserInput>
    where?: ProfileChangeWhereInput
  }

  export type ProfileChangeUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileChangeWhereInput
    data: XOR<ProfileChangeUpdateWithoutUserInput, ProfileChangeUncheckedUpdateWithoutUserInput>
  }

  export type ProfileChangeUpdateWithoutUserInput = {
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileChangeUncheckedUpdateWithoutUserInput = {
    lastChannelNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelUniqueNameChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastChannelAboutChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastProfilePhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
    lastCoverPhotoChange?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelCreateNestedOneWithoutUserInput
    profileChanges?: ProfileChangeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelUncheckedCreateNestedOneWithoutUserInput
    profileChanges?: ProfileChangeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type SessionDeviceCreateWithoutSessionInput = {
    name: string
    type?: $Enums.DeviceType
    osName?: string
    osVersion?: string
  }

  export type SessionDeviceUncheckedCreateWithoutSessionInput = {
    name: string
    type?: $Enums.DeviceType
    osName?: string
    osVersion?: string
  }

  export type SessionDeviceCreateOrConnectWithoutSessionInput = {
    where: SessionDeviceWhereUniqueInput
    create: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneWithoutUserNestedInput
    profileChanges?: ProfileChangeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUncheckedUpdateOneWithoutUserNestedInput
    profileChanges?: ProfileChangeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SessionDeviceUpsertWithoutSessionInput = {
    update: XOR<SessionDeviceUpdateWithoutSessionInput, SessionDeviceUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionDeviceCreateWithoutSessionInput, SessionDeviceUncheckedCreateWithoutSessionInput>
    where?: SessionDeviceWhereInput
  }

  export type SessionDeviceUpdateToOneWithWhereWithoutSessionInput = {
    where?: SessionDeviceWhereInput
    data: XOR<SessionDeviceUpdateWithoutSessionInput, SessionDeviceUncheckedUpdateWithoutSessionInput>
  }

  export type SessionDeviceUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
  }

  export type SessionDeviceUncheckedUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    osName?: StringFieldUpdateOperationsInput | string
    osVersion?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateWithoutDeviceInput = {
    id?: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutDeviceInput = {
    id?: string
    userId: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutDeviceInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutDeviceInput, SessionUncheckedCreateWithoutDeviceInput>
  }

  export type SessionUpsertWithoutDeviceInput = {
    update: XOR<SessionUpdateWithoutDeviceInput, SessionUncheckedUpdateWithoutDeviceInput>
    create: XOR<SessionCreateWithoutDeviceInput, SessionUncheckedCreateWithoutDeviceInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutDeviceInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutDeviceInput, SessionUncheckedUpdateWithoutDeviceInput>
  }

  export type SessionUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutChannelInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profileChanges?: ProfileChangeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profileChanges?: ProfileChangeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelInput, UserUncheckedCreateWithoutChannelInput>
  }

  export type VideoCreateWithoutChannelInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    media?: VideoMediaCreateNestedOneWithoutVideoInput
    state?: VideoStatCreateNestedOneWithoutVideoInput
    setting?: VideoSettingCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutChannelInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    media?: VideoMediaUncheckedCreateNestedOneWithoutVideoInput
    state?: VideoStatUncheckedCreateNestedOneWithoutVideoInput
    setting?: VideoSettingUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutChannelInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput>
  }

  export type VideoCreateManyChannelInputEnvelope = {
    data: VideoCreateManyChannelInput | VideoCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChannelInput = {
    update: XOR<UserUpdateWithoutChannelInput, UserUncheckedUpdateWithoutChannelInput>
    create: XOR<UserCreateWithoutChannelInput, UserUncheckedCreateWithoutChannelInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelInput, UserUncheckedUpdateWithoutChannelInput>
  }

  export type UserUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profileChanges?: ProfileChangeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profileChanges?: ProfileChangeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutChannelInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutChannelInput, VideoUncheckedUpdateWithoutChannelInput>
    create: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutChannelInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutChannelInput, VideoUncheckedUpdateWithoutChannelInput>
  }

  export type VideoUpdateManyWithWhereWithoutChannelInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutChannelInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    resolutionTier?: IntNullableFilter<"Video"> | number | null
    duration?: IntNullableFilter<"Video"> | number | null
    aspectRatio?: StringNullableFilter<"Video"> | string | null
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    deleted?: BoolFilter<"Video"> | boolean
  }

  export type UserCreateWithoutProfileChangesInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileChangesInput = {
    id?: string
    email: string
    role: $Enums.UserRole
    setupStatus?: boolean
    lastLoginAt: Date | string
    status?: $Enums.UserStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    channel?: ChannelUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileChangesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileChangesInput, UserUncheckedCreateWithoutProfileChangesInput>
  }

  export type UserUpsertWithoutProfileChangesInput = {
    update: XOR<UserUpdateWithoutProfileChangesInput, UserUncheckedUpdateWithoutProfileChangesInput>
    create: XOR<UserCreateWithoutProfileChangesInput, UserUncheckedCreateWithoutProfileChangesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileChangesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileChangesInput, UserUncheckedUpdateWithoutProfileChangesInput>
  }

  export type UserUpdateWithoutProfileChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    setupStatus?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelCreateWithoutVideosInput = {
    id?: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutVideosInput = {
    id?: string
    userId: string
    name: string
    uniqueName: string
    profilePhotoUrl: string
    profileCoverPhotoUrl?: string | null
    about?: string | null
    viewsCount?: number
    status?: $Enums.ChannelStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ChannelCreateOrConnectWithoutVideosInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutVideosInput, ChannelUncheckedCreateWithoutVideosInput>
  }

  export type VideoMediaCreateWithoutVideoInput = {
    muxAssetId?: string | null
    muxPlaybackId?: string | null
    imagekitId: string
    videoUrl?: string | null
    thumbnailUrl: string
  }

  export type VideoMediaUncheckedCreateWithoutVideoInput = {
    muxAssetId?: string | null
    muxPlaybackId?: string | null
    imagekitId: string
    videoUrl?: string | null
    thumbnailUrl: string
  }

  export type VideoMediaCreateOrConnectWithoutVideoInput = {
    where: VideoMediaWhereUniqueInput
    create: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
  }

  export type VideoStatCreateWithoutVideoInput = {
    viewsCount?: number
    likesCount?: number
    dislikesCount?: number
  }

  export type VideoStatUncheckedCreateWithoutVideoInput = {
    viewsCount?: number
    likesCount?: number
    dislikesCount?: number
  }

  export type VideoStatCreateOrConnectWithoutVideoInput = {
    where: VideoStatWhereUniqueInput
    create: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
  }

  export type VideoSettingCreateWithoutVideoInput = {
    disableComments?: boolean
    commentAudience?: $Enums.CommentAudience
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: $Enums.VideoPrivacy
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSettingUncheckedCreateWithoutVideoInput = {
    disableComments?: boolean
    commentAudience?: $Enums.CommentAudience
    disableLikes?: boolean
    disableSharing?: boolean
    privacy?: $Enums.VideoPrivacy
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoSettingCreateOrConnectWithoutVideoInput = {
    where: VideoSettingWhereUniqueInput
    create: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
  }

  export type ChannelUpsertWithoutVideosInput = {
    update: XOR<ChannelUpdateWithoutVideosInput, ChannelUncheckedUpdateWithoutVideosInput>
    create: XOR<ChannelCreateWithoutVideosInput, ChannelUncheckedCreateWithoutVideosInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutVideosInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutVideosInput, ChannelUncheckedUpdateWithoutVideosInput>
  }

  export type ChannelUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uniqueName?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    profileCoverPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    status?: EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoMediaUpsertWithoutVideoInput = {
    update: XOR<VideoMediaUpdateWithoutVideoInput, VideoMediaUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoMediaCreateWithoutVideoInput, VideoMediaUncheckedCreateWithoutVideoInput>
    where?: VideoMediaWhereInput
  }

  export type VideoMediaUpdateToOneWithWhereWithoutVideoInput = {
    where?: VideoMediaWhereInput
    data: XOR<VideoMediaUpdateWithoutVideoInput, VideoMediaUncheckedUpdateWithoutVideoInput>
  }

  export type VideoMediaUpdateWithoutVideoInput = {
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VideoMediaUncheckedUpdateWithoutVideoInput = {
    muxAssetId?: NullableStringFieldUpdateOperationsInput | string | null
    muxPlaybackId?: NullableStringFieldUpdateOperationsInput | string | null
    imagekitId?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VideoStatUpsertWithoutVideoInput = {
    update: XOR<VideoStatUpdateWithoutVideoInput, VideoStatUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoStatCreateWithoutVideoInput, VideoStatUncheckedCreateWithoutVideoInput>
    where?: VideoStatWhereInput
  }

  export type VideoStatUpdateToOneWithWhereWithoutVideoInput = {
    where?: VideoStatWhereInput
    data: XOR<VideoStatUpdateWithoutVideoInput, VideoStatUncheckedUpdateWithoutVideoInput>
  }

  export type VideoStatUpdateWithoutVideoInput = {
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoStatUncheckedUpdateWithoutVideoInput = {
    viewsCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    dislikesCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoSettingUpsertWithoutVideoInput = {
    update: XOR<VideoSettingUpdateWithoutVideoInput, VideoSettingUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoSettingCreateWithoutVideoInput, VideoSettingUncheckedCreateWithoutVideoInput>
    where?: VideoSettingWhereInput
  }

  export type VideoSettingUpdateToOneWithWhereWithoutVideoInput = {
    where?: VideoSettingWhereInput
    data: XOR<VideoSettingUpdateWithoutVideoInput, VideoSettingUncheckedUpdateWithoutVideoInput>
  }

  export type VideoSettingUpdateWithoutVideoInput = {
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoSettingUncheckedUpdateWithoutVideoInput = {
    disableComments?: BoolFieldUpdateOperationsInput | boolean
    commentAudience?: EnumCommentAudienceFieldUpdateOperationsInput | $Enums.CommentAudience
    disableLikes?: BoolFieldUpdateOperationsInput | boolean
    disableSharing?: BoolFieldUpdateOperationsInput | boolean
    privacy?: EnumVideoPrivacyFieldUpdateOperationsInput | $Enums.VideoPrivacy
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateWithoutMediaInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    channel: ChannelCreateNestedOneWithoutVideosInput
    state?: VideoStatCreateNestedOneWithoutVideoInput
    setting?: VideoSettingCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutMediaInput = {
    id?: string
    channelId: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    state?: VideoStatUncheckedCreateNestedOneWithoutVideoInput
    setting?: VideoSettingUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutMediaInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
  }

  export type VideoUpsertWithoutMediaInput = {
    update: XOR<VideoUpdateWithoutMediaInput, VideoUncheckedUpdateWithoutMediaInput>
    create: XOR<VideoCreateWithoutMediaInput, VideoUncheckedCreateWithoutMediaInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutMediaInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutMediaInput, VideoUncheckedUpdateWithoutMediaInput>
  }

  export type VideoUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    channel?: ChannelUpdateOneRequiredWithoutVideosNestedInput
    state?: VideoStatUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    state?: VideoStatUncheckedUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideoCreateWithoutStateInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    channel: ChannelCreateNestedOneWithoutVideosInput
    media?: VideoMediaCreateNestedOneWithoutVideoInput
    setting?: VideoSettingCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutStateInput = {
    id?: string
    channelId: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    media?: VideoMediaUncheckedCreateNestedOneWithoutVideoInput
    setting?: VideoSettingUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutStateInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutStateInput, VideoUncheckedCreateWithoutStateInput>
  }

  export type VideoUpsertWithoutStateInput = {
    update: XOR<VideoUpdateWithoutStateInput, VideoUncheckedUpdateWithoutStateInput>
    create: XOR<VideoCreateWithoutStateInput, VideoUncheckedCreateWithoutStateInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutStateInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutStateInput, VideoUncheckedUpdateWithoutStateInput>
  }

  export type VideoUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    channel?: ChannelUpdateOneRequiredWithoutVideosNestedInput
    media?: VideoMediaUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    media?: VideoMediaUncheckedUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideoCreateWithoutSettingInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    channel: ChannelCreateNestedOneWithoutVideosInput
    media?: VideoMediaCreateNestedOneWithoutVideoInput
    state?: VideoStatCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutSettingInput = {
    id?: string
    channelId: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
    media?: VideoMediaUncheckedCreateNestedOneWithoutVideoInput
    state?: VideoStatUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutSettingInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutSettingInput, VideoUncheckedCreateWithoutSettingInput>
  }

  export type VideoUpsertWithoutSettingInput = {
    update: XOR<VideoUpdateWithoutSettingInput, VideoUncheckedUpdateWithoutSettingInput>
    create: XOR<VideoCreateWithoutSettingInput, VideoUncheckedCreateWithoutSettingInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutSettingInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutSettingInput, VideoUncheckedUpdateWithoutSettingInput>
  }

  export type VideoUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    channel?: ChannelUpdateOneRequiredWithoutVideosNestedInput
    media?: VideoMediaUpdateOneWithoutVideoNestedInput
    state?: VideoStatUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    media?: VideoMediaUncheckedUpdateOneWithoutVideoNestedInput
    state?: VideoStatUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    browser?: string
    ip?: string
    userAgent?: string | null
    lastSeen: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: SessionDeviceUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: SessionDeviceUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyChannelInput = {
    id?: string
    title: string
    description?: string | null
    resolutionTier?: number | null
    duration?: number | null
    aspectRatio?: string | null
    status?: $Enums.VideoStatus
    deleted?: boolean
  }

  export type VideoUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    media?: VideoMediaUpdateOneWithoutVideoNestedInput
    state?: VideoStatUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
    media?: VideoMediaUncheckedUpdateOneWithoutVideoNestedInput
    state?: VideoStatUncheckedUpdateOneWithoutVideoNestedInput
    setting?: VideoSettingUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionTier?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    deleted?: BoolFieldUpdateOperationsInput | boolean
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