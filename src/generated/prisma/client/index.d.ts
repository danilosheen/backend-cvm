
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Dependente
 * 
 */
export type Dependente = $Result.DefaultSelection<Prisma.$DependentePayload>
/**
 * Model Passageiro
 * 
 */
export type Passageiro = $Result.DefaultSelection<Prisma.$PassageiroPayload>
/**
 * Model FluxoCaixa
 * 
 */
export type FluxoCaixa = $Result.DefaultSelection<Prisma.$FluxoCaixaPayload>
/**
 * Model Viagem
 * 
 */
export type Viagem = $Result.DefaultSelection<Prisma.$ViagemPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoOperacao: {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA'
};

export type TipoOperacao = (typeof TipoOperacao)[keyof typeof TipoOperacao]


export const FormaPagamento: {
  PIX: 'PIX',
  DINHEIRO: 'DINHEIRO',
  CARTAO_DE_CREDITO: 'CARTAO_DE_CREDITO'
};

export type FormaPagamento = (typeof FormaPagamento)[keyof typeof FormaPagamento]

}

export type TipoOperacao = $Enums.TipoOperacao

export const TipoOperacao: typeof $Enums.TipoOperacao

export type FormaPagamento = $Enums.FormaPagamento

export const FormaPagamento: typeof $Enums.FormaPagamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dependente`: Exposes CRUD operations for the **Dependente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependentes
    * const dependentes = await prisma.dependente.findMany()
    * ```
    */
  get dependente(): Prisma.DependenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passageiro`: Exposes CRUD operations for the **Passageiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passageiros
    * const passageiros = await prisma.passageiro.findMany()
    * ```
    */
  get passageiro(): Prisma.PassageiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fluxoCaixa`: Exposes CRUD operations for the **FluxoCaixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FluxoCaixas
    * const fluxoCaixas = await prisma.fluxoCaixa.findMany()
    * ```
    */
  get fluxoCaixa(): Prisma.FluxoCaixaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viagem`: Exposes CRUD operations for the **Viagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viagems
    * const viagems = await prisma.viagem.findMany()
    * ```
    */
  get viagem(): Prisma.ViagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Cliente: 'Cliente',
    Dependente: 'Dependente',
    Passageiro: 'Passageiro',
    FluxoCaixa: 'FluxoCaixa',
    Viagem: 'Viagem',
    Usuario: 'Usuario'
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
      modelProps: "cliente" | "dependente" | "passageiro" | "fluxoCaixa" | "viagem" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Dependente: {
        payload: Prisma.$DependentePayload<ExtArgs>
        fields: Prisma.DependenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DependenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DependenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          findFirst: {
            args: Prisma.DependenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DependenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          findMany: {
            args: Prisma.DependenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>[]
          }
          create: {
            args: Prisma.DependenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          createMany: {
            args: Prisma.DependenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DependenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>[]
          }
          delete: {
            args: Prisma.DependenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          update: {
            args: Prisma.DependenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          deleteMany: {
            args: Prisma.DependenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DependenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DependenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>[]
          }
          upsert: {
            args: Prisma.DependenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentePayload>
          }
          aggregate: {
            args: Prisma.DependenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDependente>
          }
          groupBy: {
            args: Prisma.DependenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DependenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DependenteCountArgs<ExtArgs>
            result: $Utils.Optional<DependenteCountAggregateOutputType> | number
          }
        }
      }
      Passageiro: {
        payload: Prisma.$PassageiroPayload<ExtArgs>
        fields: Prisma.PassageiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassageiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassageiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          findFirst: {
            args: Prisma.PassageiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassageiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          findMany: {
            args: Prisma.PassageiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>[]
          }
          create: {
            args: Prisma.PassageiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          createMany: {
            args: Prisma.PassageiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassageiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>[]
          }
          delete: {
            args: Prisma.PassageiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          update: {
            args: Prisma.PassageiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          deleteMany: {
            args: Prisma.PassageiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassageiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassageiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>[]
          }
          upsert: {
            args: Prisma.PassageiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassageiroPayload>
          }
          aggregate: {
            args: Prisma.PassageiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassageiro>
          }
          groupBy: {
            args: Prisma.PassageiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassageiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassageiroCountArgs<ExtArgs>
            result: $Utils.Optional<PassageiroCountAggregateOutputType> | number
          }
        }
      }
      FluxoCaixa: {
        payload: Prisma.$FluxoCaixaPayload<ExtArgs>
        fields: Prisma.FluxoCaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FluxoCaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FluxoCaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          findFirst: {
            args: Prisma.FluxoCaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FluxoCaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          findMany: {
            args: Prisma.FluxoCaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          create: {
            args: Prisma.FluxoCaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          createMany: {
            args: Prisma.FluxoCaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FluxoCaixaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          delete: {
            args: Prisma.FluxoCaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          update: {
            args: Prisma.FluxoCaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          deleteMany: {
            args: Prisma.FluxoCaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FluxoCaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FluxoCaixaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>[]
          }
          upsert: {
            args: Prisma.FluxoCaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluxoCaixaPayload>
          }
          aggregate: {
            args: Prisma.FluxoCaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFluxoCaixa>
          }
          groupBy: {
            args: Prisma.FluxoCaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FluxoCaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FluxoCaixaCountArgs<ExtArgs>
            result: $Utils.Optional<FluxoCaixaCountAggregateOutputType> | number
          }
        }
      }
      Viagem: {
        payload: Prisma.$ViagemPayload<ExtArgs>
        fields: Prisma.ViagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          findFirst: {
            args: Prisma.ViagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          findMany: {
            args: Prisma.ViagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>[]
          }
          create: {
            args: Prisma.ViagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          createMany: {
            args: Prisma.ViagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>[]
          }
          delete: {
            args: Prisma.ViagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          update: {
            args: Prisma.ViagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          deleteMany: {
            args: Prisma.ViagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>[]
          }
          upsert: {
            args: Prisma.ViagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViagemPayload>
          }
          aggregate: {
            args: Prisma.ViagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViagem>
          }
          groupBy: {
            args: Prisma.ViagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViagemCountArgs<ExtArgs>
            result: $Utils.Optional<ViagemCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    cliente?: ClienteOmit
    dependente?: DependenteOmit
    passageiro?: PassageiroOmit
    fluxoCaixa?: FluxoCaixaOmit
    viagem?: ViagemOmit
    usuario?: UsuarioOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    dependentes: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependentes?: boolean | ClienteCountOutputTypeCountDependentesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountDependentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependenteWhereInput
  }


  /**
   * Count Type DependenteCountOutputType
   */

  export type DependenteCountOutputType = {
    viagens: number
  }

  export type DependenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viagens?: boolean | DependenteCountOutputTypeCountViagensArgs
  }

  // Custom InputTypes
  /**
   * DependenteCountOutputType without action
   */
  export type DependenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenteCountOutputType
     */
    select?: DependenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DependenteCountOutputType without action
   */
  export type DependenteCountOutputTypeCountViagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViagemWhereInput
  }


  /**
   * Count Type PassageiroCountOutputType
   */

  export type PassageiroCountOutputType = {
    viagens: number
  }

  export type PassageiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viagens?: boolean | PassageiroCountOutputTypeCountViagensArgs
  }

  // Custom InputTypes
  /**
   * PassageiroCountOutputType without action
   */
  export type PassageiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassageiroCountOutputType
     */
    select?: PassageiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassageiroCountOutputType without action
   */
  export type PassageiroCountOutputTypeCountViagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViagemWhereInput
  }


  /**
   * Count Type ViagemCountOutputType
   */

  export type ViagemCountOutputType = {
    passageiros: number
    dependentes: number
  }

  export type ViagemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passageiros?: boolean | ViagemCountOutputTypeCountPassageirosArgs
    dependentes?: boolean | ViagemCountOutputTypeCountDependentesArgs
  }

  // Custom InputTypes
  /**
   * ViagemCountOutputType without action
   */
  export type ViagemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViagemCountOutputType
     */
    select?: ViagemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViagemCountOutputType without action
   */
  export type ViagemCountOutputTypeCountPassageirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassageiroWhereInput
  }

  /**
   * ViagemCountOutputType without action
   */
  export type ViagemCountOutputTypeCountDependentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    dataNascimento: string | null
    contato: string | null
    email: string | null
    typeDocumentSelected: string | null
    documento: string | null
    cidade: string | null
    bairro: string | null
    rua: string | null
    numero: string | null
    ultimaViagem: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    dataNascimento: string | null
    contato: string | null
    email: string | null
    typeDocumentSelected: string | null
    documento: string | null
    cidade: string | null
    bairro: string | null
    rua: string | null
    numero: string | null
    ultimaViagem: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    dataNascimento: number
    contato: number
    email: number
    typeDocumentSelected: number
    documento: number
    cidade: number
    bairro: number
    rua: number
    numero: number
    ultimaViagem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    contato?: true
    email?: true
    typeDocumentSelected?: true
    documento?: true
    cidade?: true
    bairro?: true
    rua?: true
    numero?: true
    ultimaViagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    contato?: true
    email?: true
    typeDocumentSelected?: true
    documento?: true
    cidade?: true
    bairro?: true
    rua?: true
    numero?: true
    ultimaViagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    dataNascimento?: true
    contato?: true
    email?: true
    typeDocumentSelected?: true
    documento?: true
    cidade?: true
    bairro?: true
    rua?: true
    numero?: true
    ultimaViagem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    dataNascimento: string | null
    contato: string | null
    email: string | null
    typeDocumentSelected: string | null
    documento: string | null
    cidade: string | null
    bairro: string | null
    rua: string | null
    numero: string | null
    ultimaViagem: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    contato?: boolean
    email?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    cidade?: boolean
    bairro?: boolean
    rua?: boolean
    numero?: boolean
    ultimaViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dependentes?: boolean | Cliente$dependentesArgs<ExtArgs>
    passageiro?: boolean | Cliente$passageiroArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    contato?: boolean
    email?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    cidade?: boolean
    bairro?: boolean
    rua?: boolean
    numero?: boolean
    ultimaViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    contato?: boolean
    email?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    cidade?: boolean
    bairro?: boolean
    rua?: boolean
    numero?: boolean
    ultimaViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    dataNascimento?: boolean
    contato?: boolean
    email?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    cidade?: boolean
    bairro?: boolean
    rua?: boolean
    numero?: boolean
    ultimaViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dataNascimento" | "contato" | "email" | "typeDocumentSelected" | "documento" | "cidade" | "bairro" | "rua" | "numero" | "ultimaViagem" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependentes?: boolean | Cliente$dependentesArgs<ExtArgs>
    passageiro?: boolean | Cliente$passageiroArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      dependentes: Prisma.$DependentePayload<ExtArgs>[]
      passageiro: Prisma.$PassageiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      dataNascimento: string | null
      contato: string | null
      email: string | null
      typeDocumentSelected: string | null
      documento: string | null
      cidade: string | null
      bairro: string | null
      rua: string | null
      numero: string | null
      ultimaViagem: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dependentes<T extends Cliente$dependentesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$dependentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passageiro<T extends Cliente$passageiroArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$passageiroArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly dataNascimento: FieldRef<"Cliente", 'String'>
    readonly contato: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly typeDocumentSelected: FieldRef<"Cliente", 'String'>
    readonly documento: FieldRef<"Cliente", 'String'>
    readonly cidade: FieldRef<"Cliente", 'String'>
    readonly bairro: FieldRef<"Cliente", 'String'>
    readonly rua: FieldRef<"Cliente", 'String'>
    readonly numero: FieldRef<"Cliente", 'String'>
    readonly ultimaViagem: FieldRef<"Cliente", 'DateTime'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.dependentes
   */
  export type Cliente$dependentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    where?: DependenteWhereInput
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    cursor?: DependenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DependenteScalarFieldEnum | DependenteScalarFieldEnum[]
  }

  /**
   * Cliente.passageiro
   */
  export type Cliente$passageiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    where?: PassageiroWhereInput
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Dependente
   */

  export type AggregateDependente = {
    _count: DependenteCountAggregateOutputType | null
    _min: DependenteMinAggregateOutputType | null
    _max: DependenteMaxAggregateOutputType | null
  }

  export type DependenteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    documento: string | null
    poltrona: string | null
    clienteId: string | null
    viagemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependenteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    documento: string | null
    poltrona: string | null
    clienteId: string | null
    viagemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependenteCountAggregateOutputType = {
    id: number
    nome: number
    documento: number
    poltrona: number
    clienteId: number
    viagemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DependenteMinAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    poltrona?: true
    clienteId?: true
    viagemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependenteMaxAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    poltrona?: true
    clienteId?: true
    viagemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependenteCountAggregateInputType = {
    id?: true
    nome?: true
    documento?: true
    poltrona?: true
    clienteId?: true
    viagemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DependenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependente to aggregate.
     */
    where?: DependenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependentes to fetch.
     */
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DependenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependentes
    **/
    _count?: true | DependenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependenteMaxAggregateInputType
  }

  export type GetDependenteAggregateType<T extends DependenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDependente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependente[P]>
      : GetScalarType<T[P], AggregateDependente[P]>
  }




  export type DependenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependenteWhereInput
    orderBy?: DependenteOrderByWithAggregationInput | DependenteOrderByWithAggregationInput[]
    by: DependenteScalarFieldEnum[] | DependenteScalarFieldEnum
    having?: DependenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependenteCountAggregateInputType | true
    _min?: DependenteMinAggregateInputType
    _max?: DependenteMaxAggregateInputType
  }

  export type DependenteGroupByOutputType = {
    id: string
    nome: string
    documento: string | null
    poltrona: string | null
    clienteId: string
    viagemId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DependenteCountAggregateOutputType | null
    _min: DependenteMinAggregateOutputType | null
    _max: DependenteMaxAggregateOutputType | null
  }

  type GetDependenteGroupByPayload<T extends DependenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependenteGroupByOutputType[P]>
            : GetScalarType<T[P], DependenteGroupByOutputType[P]>
        }
      >
    >


  export type DependenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documento?: boolean
    poltrona?: boolean
    clienteId?: boolean
    viagemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    viagens?: boolean | Dependente$viagensArgs<ExtArgs>
    _count?: boolean | DependenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependente"]>

  export type DependenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documento?: boolean
    poltrona?: boolean
    clienteId?: boolean
    viagemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependente"]>

  export type DependenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documento?: boolean
    poltrona?: boolean
    clienteId?: boolean
    viagemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependente"]>

  export type DependenteSelectScalar = {
    id?: boolean
    nome?: boolean
    documento?: boolean
    poltrona?: boolean
    clienteId?: boolean
    viagemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DependenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "documento" | "poltrona" | "clienteId" | "viagemId" | "createdAt" | "updatedAt", ExtArgs["result"]["dependente"]>
  export type DependenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    viagens?: boolean | Dependente$viagensArgs<ExtArgs>
    _count?: boolean | DependenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DependenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type DependenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $DependentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dependente"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      viagens: Prisma.$ViagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      documento: string | null
      poltrona: string | null
      clienteId: string
      viagemId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dependente"]>
    composites: {}
  }

  type DependenteGetPayload<S extends boolean | null | undefined | DependenteDefaultArgs> = $Result.GetResult<Prisma.$DependentePayload, S>

  type DependenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DependenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DependenteCountAggregateInputType | true
    }

  export interface DependenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dependente'], meta: { name: 'Dependente' } }
    /**
     * Find zero or one Dependente that matches the filter.
     * @param {DependenteFindUniqueArgs} args - Arguments to find a Dependente
     * @example
     * // Get one Dependente
     * const dependente = await prisma.dependente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DependenteFindUniqueArgs>(args: SelectSubset<T, DependenteFindUniqueArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dependente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DependenteFindUniqueOrThrowArgs} args - Arguments to find a Dependente
     * @example
     * // Get one Dependente
     * const dependente = await prisma.dependente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DependenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DependenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dependente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteFindFirstArgs} args - Arguments to find a Dependente
     * @example
     * // Get one Dependente
     * const dependente = await prisma.dependente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DependenteFindFirstArgs>(args?: SelectSubset<T, DependenteFindFirstArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dependente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteFindFirstOrThrowArgs} args - Arguments to find a Dependente
     * @example
     * // Get one Dependente
     * const dependente = await prisma.dependente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DependenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DependenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dependentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependentes
     * const dependentes = await prisma.dependente.findMany()
     * 
     * // Get first 10 Dependentes
     * const dependentes = await prisma.dependente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependenteWithIdOnly = await prisma.dependente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DependenteFindManyArgs>(args?: SelectSubset<T, DependenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dependente.
     * @param {DependenteCreateArgs} args - Arguments to create a Dependente.
     * @example
     * // Create one Dependente
     * const Dependente = await prisma.dependente.create({
     *   data: {
     *     // ... data to create a Dependente
     *   }
     * })
     * 
     */
    create<T extends DependenteCreateArgs>(args: SelectSubset<T, DependenteCreateArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dependentes.
     * @param {DependenteCreateManyArgs} args - Arguments to create many Dependentes.
     * @example
     * // Create many Dependentes
     * const dependente = await prisma.dependente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DependenteCreateManyArgs>(args?: SelectSubset<T, DependenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dependentes and returns the data saved in the database.
     * @param {DependenteCreateManyAndReturnArgs} args - Arguments to create many Dependentes.
     * @example
     * // Create many Dependentes
     * const dependente = await prisma.dependente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dependentes and only return the `id`
     * const dependenteWithIdOnly = await prisma.dependente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DependenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DependenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dependente.
     * @param {DependenteDeleteArgs} args - Arguments to delete one Dependente.
     * @example
     * // Delete one Dependente
     * const Dependente = await prisma.dependente.delete({
     *   where: {
     *     // ... filter to delete one Dependente
     *   }
     * })
     * 
     */
    delete<T extends DependenteDeleteArgs>(args: SelectSubset<T, DependenteDeleteArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dependente.
     * @param {DependenteUpdateArgs} args - Arguments to update one Dependente.
     * @example
     * // Update one Dependente
     * const dependente = await prisma.dependente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DependenteUpdateArgs>(args: SelectSubset<T, DependenteUpdateArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dependentes.
     * @param {DependenteDeleteManyArgs} args - Arguments to filter Dependentes to delete.
     * @example
     * // Delete a few Dependentes
     * const { count } = await prisma.dependente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DependenteDeleteManyArgs>(args?: SelectSubset<T, DependenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependentes
     * const dependente = await prisma.dependente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DependenteUpdateManyArgs>(args: SelectSubset<T, DependenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependentes and returns the data updated in the database.
     * @param {DependenteUpdateManyAndReturnArgs} args - Arguments to update many Dependentes.
     * @example
     * // Update many Dependentes
     * const dependente = await prisma.dependente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dependentes and only return the `id`
     * const dependenteWithIdOnly = await prisma.dependente.updateManyAndReturn({
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
    updateManyAndReturn<T extends DependenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DependenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dependente.
     * @param {DependenteUpsertArgs} args - Arguments to update or create a Dependente.
     * @example
     * // Update or create a Dependente
     * const dependente = await prisma.dependente.upsert({
     *   create: {
     *     // ... data to create a Dependente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependente we want to update
     *   }
     * })
     */
    upsert<T extends DependenteUpsertArgs>(args: SelectSubset<T, DependenteUpsertArgs<ExtArgs>>): Prisma__DependenteClient<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dependentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteCountArgs} args - Arguments to filter Dependentes to count.
     * @example
     * // Count the number of Dependentes
     * const count = await prisma.dependente.count({
     *   where: {
     *     // ... the filter for the Dependentes we want to count
     *   }
     * })
    **/
    count<T extends DependenteCountArgs>(
      args?: Subset<T, DependenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DependenteAggregateArgs>(args: Subset<T, DependenteAggregateArgs>): Prisma.PrismaPromise<GetDependenteAggregateType<T>>

    /**
     * Group by Dependente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenteGroupByArgs} args - Group by arguments.
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
      T extends DependenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependenteGroupByArgs['orderBy'] }
        : { orderBy?: DependenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DependenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dependente model
   */
  readonly fields: DependenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DependenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viagens<T extends Dependente$viagensArgs<ExtArgs> = {}>(args?: Subset<T, Dependente$viagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dependente model
   */
  interface DependenteFieldRefs {
    readonly id: FieldRef<"Dependente", 'String'>
    readonly nome: FieldRef<"Dependente", 'String'>
    readonly documento: FieldRef<"Dependente", 'String'>
    readonly poltrona: FieldRef<"Dependente", 'String'>
    readonly clienteId: FieldRef<"Dependente", 'String'>
    readonly viagemId: FieldRef<"Dependente", 'String'>
    readonly createdAt: FieldRef<"Dependente", 'DateTime'>
    readonly updatedAt: FieldRef<"Dependente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dependente findUnique
   */
  export type DependenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter, which Dependente to fetch.
     */
    where: DependenteWhereUniqueInput
  }

  /**
   * Dependente findUniqueOrThrow
   */
  export type DependenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter, which Dependente to fetch.
     */
    where: DependenteWhereUniqueInput
  }

  /**
   * Dependente findFirst
   */
  export type DependenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter, which Dependente to fetch.
     */
    where?: DependenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependentes to fetch.
     */
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependentes.
     */
    cursor?: DependenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependentes.
     */
    distinct?: DependenteScalarFieldEnum | DependenteScalarFieldEnum[]
  }

  /**
   * Dependente findFirstOrThrow
   */
  export type DependenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter, which Dependente to fetch.
     */
    where?: DependenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependentes to fetch.
     */
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependentes.
     */
    cursor?: DependenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependentes.
     */
    distinct?: DependenteScalarFieldEnum | DependenteScalarFieldEnum[]
  }

  /**
   * Dependente findMany
   */
  export type DependenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter, which Dependentes to fetch.
     */
    where?: DependenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependentes to fetch.
     */
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependentes.
     */
    cursor?: DependenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependentes.
     */
    skip?: number
    distinct?: DependenteScalarFieldEnum | DependenteScalarFieldEnum[]
  }

  /**
   * Dependente create
   */
  export type DependenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Dependente.
     */
    data: XOR<DependenteCreateInput, DependenteUncheckedCreateInput>
  }

  /**
   * Dependente createMany
   */
  export type DependenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dependentes.
     */
    data: DependenteCreateManyInput | DependenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dependente createManyAndReturn
   */
  export type DependenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * The data used to create many Dependentes.
     */
    data: DependenteCreateManyInput | DependenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dependente update
   */
  export type DependenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Dependente.
     */
    data: XOR<DependenteUpdateInput, DependenteUncheckedUpdateInput>
    /**
     * Choose, which Dependente to update.
     */
    where: DependenteWhereUniqueInput
  }

  /**
   * Dependente updateMany
   */
  export type DependenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dependentes.
     */
    data: XOR<DependenteUpdateManyMutationInput, DependenteUncheckedUpdateManyInput>
    /**
     * Filter which Dependentes to update
     */
    where?: DependenteWhereInput
    /**
     * Limit how many Dependentes to update.
     */
    limit?: number
  }

  /**
   * Dependente updateManyAndReturn
   */
  export type DependenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * The data used to update Dependentes.
     */
    data: XOR<DependenteUpdateManyMutationInput, DependenteUncheckedUpdateManyInput>
    /**
     * Filter which Dependentes to update
     */
    where?: DependenteWhereInput
    /**
     * Limit how many Dependentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dependente upsert
   */
  export type DependenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Dependente to update in case it exists.
     */
    where: DependenteWhereUniqueInput
    /**
     * In case the Dependente found by the `where` argument doesn't exist, create a new Dependente with this data.
     */
    create: XOR<DependenteCreateInput, DependenteUncheckedCreateInput>
    /**
     * In case the Dependente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DependenteUpdateInput, DependenteUncheckedUpdateInput>
  }

  /**
   * Dependente delete
   */
  export type DependenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    /**
     * Filter which Dependente to delete.
     */
    where: DependenteWhereUniqueInput
  }

  /**
   * Dependente deleteMany
   */
  export type DependenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependentes to delete
     */
    where?: DependenteWhereInput
    /**
     * Limit how many Dependentes to delete.
     */
    limit?: number
  }

  /**
   * Dependente.viagens
   */
  export type Dependente$viagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    where?: ViagemWhereInput
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    cursor?: ViagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * Dependente without action
   */
  export type DependenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
  }


  /**
   * Model Passageiro
   */

  export type AggregatePassageiro = {
    _count: PassageiroCountAggregateOutputType | null
    _min: PassageiroMinAggregateOutputType | null
    _max: PassageiroMaxAggregateOutputType | null
  }

  export type PassageiroMinAggregateOutputType = {
    id: string | null
    nome: string | null
    typeDocumentSelected: string | null
    documento: string | null
    clienteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassageiroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    typeDocumentSelected: string | null
    documento: string | null
    clienteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassageiroCountAggregateOutputType = {
    id: number
    nome: number
    typeDocumentSelected: number
    documento: number
    clienteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassageiroMinAggregateInputType = {
    id?: true
    nome?: true
    typeDocumentSelected?: true
    documento?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassageiroMaxAggregateInputType = {
    id?: true
    nome?: true
    typeDocumentSelected?: true
    documento?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassageiroCountAggregateInputType = {
    id?: true
    nome?: true
    typeDocumentSelected?: true
    documento?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassageiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passageiro to aggregate.
     */
    where?: PassageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passageiros to fetch.
     */
    orderBy?: PassageiroOrderByWithRelationInput | PassageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passageiros
    **/
    _count?: true | PassageiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassageiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassageiroMaxAggregateInputType
  }

  export type GetPassageiroAggregateType<T extends PassageiroAggregateArgs> = {
        [P in keyof T & keyof AggregatePassageiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassageiro[P]>
      : GetScalarType<T[P], AggregatePassageiro[P]>
  }




  export type PassageiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassageiroWhereInput
    orderBy?: PassageiroOrderByWithAggregationInput | PassageiroOrderByWithAggregationInput[]
    by: PassageiroScalarFieldEnum[] | PassageiroScalarFieldEnum
    having?: PassageiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassageiroCountAggregateInputType | true
    _min?: PassageiroMinAggregateInputType
    _max?: PassageiroMaxAggregateInputType
  }

  export type PassageiroGroupByOutputType = {
    id: string
    nome: string
    typeDocumentSelected: string
    documento: string
    clienteId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PassageiroCountAggregateOutputType | null
    _min: PassageiroMinAggregateOutputType | null
    _max: PassageiroMaxAggregateOutputType | null
  }

  type GetPassageiroGroupByPayload<T extends PassageiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassageiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassageiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassageiroGroupByOutputType[P]>
            : GetScalarType<T[P], PassageiroGroupByOutputType[P]>
        }
      >
    >


  export type PassageiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
    viagens?: boolean | Passageiro$viagensArgs<ExtArgs>
    _count?: boolean | PassageiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passageiro"]>

  export type PassageiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["passageiro"]>

  export type PassageiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["passageiro"]>

  export type PassageiroSelectScalar = {
    id?: boolean
    nome?: boolean
    typeDocumentSelected?: boolean
    documento?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassageiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "typeDocumentSelected" | "documento" | "clienteId" | "createdAt" | "updatedAt", ExtArgs["result"]["passageiro"]>
  export type PassageiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
    viagens?: boolean | Passageiro$viagensArgs<ExtArgs>
    _count?: boolean | PassageiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassageiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
  }
  export type PassageiroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Passageiro$clienteArgs<ExtArgs>
  }

  export type $PassageiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passageiro"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
      viagens: Prisma.$ViagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      typeDocumentSelected: string
      documento: string
      clienteId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passageiro"]>
    composites: {}
  }

  type PassageiroGetPayload<S extends boolean | null | undefined | PassageiroDefaultArgs> = $Result.GetResult<Prisma.$PassageiroPayload, S>

  type PassageiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassageiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassageiroCountAggregateInputType | true
    }

  export interface PassageiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passageiro'], meta: { name: 'Passageiro' } }
    /**
     * Find zero or one Passageiro that matches the filter.
     * @param {PassageiroFindUniqueArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassageiroFindUniqueArgs>(args: SelectSubset<T, PassageiroFindUniqueArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passageiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassageiroFindUniqueOrThrowArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassageiroFindUniqueOrThrowArgs>(args: SelectSubset<T, PassageiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passageiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroFindFirstArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassageiroFindFirstArgs>(args?: SelectSubset<T, PassageiroFindFirstArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passageiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroFindFirstOrThrowArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassageiroFindFirstOrThrowArgs>(args?: SelectSubset<T, PassageiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passageiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passageiros
     * const passageiros = await prisma.passageiro.findMany()
     * 
     * // Get first 10 Passageiros
     * const passageiros = await prisma.passageiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassageiroFindManyArgs>(args?: SelectSubset<T, PassageiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passageiro.
     * @param {PassageiroCreateArgs} args - Arguments to create a Passageiro.
     * @example
     * // Create one Passageiro
     * const Passageiro = await prisma.passageiro.create({
     *   data: {
     *     // ... data to create a Passageiro
     *   }
     * })
     * 
     */
    create<T extends PassageiroCreateArgs>(args: SelectSubset<T, PassageiroCreateArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passageiros.
     * @param {PassageiroCreateManyArgs} args - Arguments to create many Passageiros.
     * @example
     * // Create many Passageiros
     * const passageiro = await prisma.passageiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassageiroCreateManyArgs>(args?: SelectSubset<T, PassageiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passageiros and returns the data saved in the database.
     * @param {PassageiroCreateManyAndReturnArgs} args - Arguments to create many Passageiros.
     * @example
     * // Create many Passageiros
     * const passageiro = await prisma.passageiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passageiros and only return the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassageiroCreateManyAndReturnArgs>(args?: SelectSubset<T, PassageiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passageiro.
     * @param {PassageiroDeleteArgs} args - Arguments to delete one Passageiro.
     * @example
     * // Delete one Passageiro
     * const Passageiro = await prisma.passageiro.delete({
     *   where: {
     *     // ... filter to delete one Passageiro
     *   }
     * })
     * 
     */
    delete<T extends PassageiroDeleteArgs>(args: SelectSubset<T, PassageiroDeleteArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passageiro.
     * @param {PassageiroUpdateArgs} args - Arguments to update one Passageiro.
     * @example
     * // Update one Passageiro
     * const passageiro = await prisma.passageiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassageiroUpdateArgs>(args: SelectSubset<T, PassageiroUpdateArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passageiros.
     * @param {PassageiroDeleteManyArgs} args - Arguments to filter Passageiros to delete.
     * @example
     * // Delete a few Passageiros
     * const { count } = await prisma.passageiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassageiroDeleteManyArgs>(args?: SelectSubset<T, PassageiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passageiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passageiros
     * const passageiro = await prisma.passageiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassageiroUpdateManyArgs>(args: SelectSubset<T, PassageiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passageiros and returns the data updated in the database.
     * @param {PassageiroUpdateManyAndReturnArgs} args - Arguments to update many Passageiros.
     * @example
     * // Update many Passageiros
     * const passageiro = await prisma.passageiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passageiros and only return the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.updateManyAndReturn({
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
    updateManyAndReturn<T extends PassageiroUpdateManyAndReturnArgs>(args: SelectSubset<T, PassageiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passageiro.
     * @param {PassageiroUpsertArgs} args - Arguments to update or create a Passageiro.
     * @example
     * // Update or create a Passageiro
     * const passageiro = await prisma.passageiro.upsert({
     *   create: {
     *     // ... data to create a Passageiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passageiro we want to update
     *   }
     * })
     */
    upsert<T extends PassageiroUpsertArgs>(args: SelectSubset<T, PassageiroUpsertArgs<ExtArgs>>): Prisma__PassageiroClient<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passageiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroCountArgs} args - Arguments to filter Passageiros to count.
     * @example
     * // Count the number of Passageiros
     * const count = await prisma.passageiro.count({
     *   where: {
     *     // ... the filter for the Passageiros we want to count
     *   }
     * })
    **/
    count<T extends PassageiroCountArgs>(
      args?: Subset<T, PassageiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassageiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passageiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PassageiroAggregateArgs>(args: Subset<T, PassageiroAggregateArgs>): Prisma.PrismaPromise<GetPassageiroAggregateType<T>>

    /**
     * Group by Passageiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroGroupByArgs} args - Group by arguments.
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
      T extends PassageiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassageiroGroupByArgs['orderBy'] }
        : { orderBy?: PassageiroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PassageiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassageiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passageiro model
   */
  readonly fields: PassageiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passageiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassageiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends Passageiro$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Passageiro$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    viagens<T extends Passageiro$viagensArgs<ExtArgs> = {}>(args?: Subset<T, Passageiro$viagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Passageiro model
   */
  interface PassageiroFieldRefs {
    readonly id: FieldRef<"Passageiro", 'String'>
    readonly nome: FieldRef<"Passageiro", 'String'>
    readonly typeDocumentSelected: FieldRef<"Passageiro", 'String'>
    readonly documento: FieldRef<"Passageiro", 'String'>
    readonly clienteId: FieldRef<"Passageiro", 'String'>
    readonly createdAt: FieldRef<"Passageiro", 'DateTime'>
    readonly updatedAt: FieldRef<"Passageiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passageiro findUnique
   */
  export type PassageiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter, which Passageiro to fetch.
     */
    where: PassageiroWhereUniqueInput
  }

  /**
   * Passageiro findUniqueOrThrow
   */
  export type PassageiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter, which Passageiro to fetch.
     */
    where: PassageiroWhereUniqueInput
  }

  /**
   * Passageiro findFirst
   */
  export type PassageiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter, which Passageiro to fetch.
     */
    where?: PassageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passageiros to fetch.
     */
    orderBy?: PassageiroOrderByWithRelationInput | PassageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passageiros.
     */
    cursor?: PassageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passageiros.
     */
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * Passageiro findFirstOrThrow
   */
  export type PassageiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter, which Passageiro to fetch.
     */
    where?: PassageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passageiros to fetch.
     */
    orderBy?: PassageiroOrderByWithRelationInput | PassageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passageiros.
     */
    cursor?: PassageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passageiros.
     */
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * Passageiro findMany
   */
  export type PassageiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter, which Passageiros to fetch.
     */
    where?: PassageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passageiros to fetch.
     */
    orderBy?: PassageiroOrderByWithRelationInput | PassageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passageiros.
     */
    cursor?: PassageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passageiros.
     */
    skip?: number
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * Passageiro create
   */
  export type PassageiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Passageiro.
     */
    data: XOR<PassageiroCreateInput, PassageiroUncheckedCreateInput>
  }

  /**
   * Passageiro createMany
   */
  export type PassageiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passageiros.
     */
    data: PassageiroCreateManyInput | PassageiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passageiro createManyAndReturn
   */
  export type PassageiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * The data used to create many Passageiros.
     */
    data: PassageiroCreateManyInput | PassageiroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passageiro update
   */
  export type PassageiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Passageiro.
     */
    data: XOR<PassageiroUpdateInput, PassageiroUncheckedUpdateInput>
    /**
     * Choose, which Passageiro to update.
     */
    where: PassageiroWhereUniqueInput
  }

  /**
   * Passageiro updateMany
   */
  export type PassageiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passageiros.
     */
    data: XOR<PassageiroUpdateManyMutationInput, PassageiroUncheckedUpdateManyInput>
    /**
     * Filter which Passageiros to update
     */
    where?: PassageiroWhereInput
    /**
     * Limit how many Passageiros to update.
     */
    limit?: number
  }

  /**
   * Passageiro updateManyAndReturn
   */
  export type PassageiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * The data used to update Passageiros.
     */
    data: XOR<PassageiroUpdateManyMutationInput, PassageiroUncheckedUpdateManyInput>
    /**
     * Filter which Passageiros to update
     */
    where?: PassageiroWhereInput
    /**
     * Limit how many Passageiros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passageiro upsert
   */
  export type PassageiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Passageiro to update in case it exists.
     */
    where: PassageiroWhereUniqueInput
    /**
     * In case the Passageiro found by the `where` argument doesn't exist, create a new Passageiro with this data.
     */
    create: XOR<PassageiroCreateInput, PassageiroUncheckedCreateInput>
    /**
     * In case the Passageiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassageiroUpdateInput, PassageiroUncheckedUpdateInput>
  }

  /**
   * Passageiro delete
   */
  export type PassageiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    /**
     * Filter which Passageiro to delete.
     */
    where: PassageiroWhereUniqueInput
  }

  /**
   * Passageiro deleteMany
   */
  export type PassageiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passageiros to delete
     */
    where?: PassageiroWhereInput
    /**
     * Limit how many Passageiros to delete.
     */
    limit?: number
  }

  /**
   * Passageiro.cliente
   */
  export type Passageiro$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * Passageiro.viagens
   */
  export type Passageiro$viagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    where?: ViagemWhereInput
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    cursor?: ViagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * Passageiro without action
   */
  export type PassageiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
  }


  /**
   * Model FluxoCaixa
   */

  export type AggregateFluxoCaixa = {
    _count: FluxoCaixaCountAggregateOutputType | null
    _avg: FluxoCaixaAvgAggregateOutputType | null
    _sum: FluxoCaixaSumAggregateOutputType | null
    _min: FluxoCaixaMinAggregateOutputType | null
    _max: FluxoCaixaMaxAggregateOutputType | null
  }

  export type FluxoCaixaAvgAggregateOutputType = {
    valor: number | null
  }

  export type FluxoCaixaSumAggregateOutputType = {
    valor: number | null
  }

  export type FluxoCaixaMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoOperacao | null
    valor: number | null
    data: Date | null
    formaPagamento: $Enums.FormaPagamento | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FluxoCaixaMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoOperacao | null
    valor: number | null
    data: Date | null
    formaPagamento: $Enums.FormaPagamento | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FluxoCaixaCountAggregateOutputType = {
    id: number
    tipo: number
    valor: number
    data: number
    formaPagamento: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FluxoCaixaAvgAggregateInputType = {
    valor?: true
  }

  export type FluxoCaixaSumAggregateInputType = {
    valor?: true
  }

  export type FluxoCaixaMinAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    data?: true
    formaPagamento?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FluxoCaixaMaxAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    data?: true
    formaPagamento?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FluxoCaixaCountAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    data?: true
    formaPagamento?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FluxoCaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FluxoCaixa to aggregate.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FluxoCaixas
    **/
    _count?: true | FluxoCaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FluxoCaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FluxoCaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FluxoCaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FluxoCaixaMaxAggregateInputType
  }

  export type GetFluxoCaixaAggregateType<T extends FluxoCaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateFluxoCaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFluxoCaixa[P]>
      : GetScalarType<T[P], AggregateFluxoCaixa[P]>
  }




  export type FluxoCaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluxoCaixaWhereInput
    orderBy?: FluxoCaixaOrderByWithAggregationInput | FluxoCaixaOrderByWithAggregationInput[]
    by: FluxoCaixaScalarFieldEnum[] | FluxoCaixaScalarFieldEnum
    having?: FluxoCaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FluxoCaixaCountAggregateInputType | true
    _avg?: FluxoCaixaAvgAggregateInputType
    _sum?: FluxoCaixaSumAggregateInputType
    _min?: FluxoCaixaMinAggregateInputType
    _max?: FluxoCaixaMaxAggregateInputType
  }

  export type FluxoCaixaGroupByOutputType = {
    id: string
    tipo: $Enums.TipoOperacao
    valor: number
    data: Date
    formaPagamento: $Enums.FormaPagamento
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    _count: FluxoCaixaCountAggregateOutputType | null
    _avg: FluxoCaixaAvgAggregateOutputType | null
    _sum: FluxoCaixaSumAggregateOutputType | null
    _min: FluxoCaixaMinAggregateOutputType | null
    _max: FluxoCaixaMaxAggregateOutputType | null
  }

  type GetFluxoCaixaGroupByPayload<T extends FluxoCaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FluxoCaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FluxoCaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FluxoCaixaGroupByOutputType[P]>
            : GetScalarType<T[P], FluxoCaixaGroupByOutputType[P]>
        }
      >
    >


  export type FluxoCaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    formaPagamento?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    formaPagamento?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    formaPagamento?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fluxoCaixa"]>

  export type FluxoCaixaSelectScalar = {
    id?: boolean
    tipo?: boolean
    valor?: boolean
    data?: boolean
    formaPagamento?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FluxoCaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "valor" | "data" | "formaPagamento" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["fluxoCaixa"]>

  export type $FluxoCaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FluxoCaixa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoOperacao
      valor: number
      data: Date
      formaPagamento: $Enums.FormaPagamento
      descricao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fluxoCaixa"]>
    composites: {}
  }

  type FluxoCaixaGetPayload<S extends boolean | null | undefined | FluxoCaixaDefaultArgs> = $Result.GetResult<Prisma.$FluxoCaixaPayload, S>

  type FluxoCaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FluxoCaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FluxoCaixaCountAggregateInputType | true
    }

  export interface FluxoCaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FluxoCaixa'], meta: { name: 'FluxoCaixa' } }
    /**
     * Find zero or one FluxoCaixa that matches the filter.
     * @param {FluxoCaixaFindUniqueArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FluxoCaixaFindUniqueArgs>(args: SelectSubset<T, FluxoCaixaFindUniqueArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FluxoCaixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FluxoCaixaFindUniqueOrThrowArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FluxoCaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, FluxoCaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FluxoCaixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindFirstArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FluxoCaixaFindFirstArgs>(args?: SelectSubset<T, FluxoCaixaFindFirstArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FluxoCaixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindFirstOrThrowArgs} args - Arguments to find a FluxoCaixa
     * @example
     * // Get one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FluxoCaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, FluxoCaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FluxoCaixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FluxoCaixas
     * const fluxoCaixas = await prisma.fluxoCaixa.findMany()
     * 
     * // Get first 10 FluxoCaixas
     * const fluxoCaixas = await prisma.fluxoCaixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FluxoCaixaFindManyArgs>(args?: SelectSubset<T, FluxoCaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FluxoCaixa.
     * @param {FluxoCaixaCreateArgs} args - Arguments to create a FluxoCaixa.
     * @example
     * // Create one FluxoCaixa
     * const FluxoCaixa = await prisma.fluxoCaixa.create({
     *   data: {
     *     // ... data to create a FluxoCaixa
     *   }
     * })
     * 
     */
    create<T extends FluxoCaixaCreateArgs>(args: SelectSubset<T, FluxoCaixaCreateArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FluxoCaixas.
     * @param {FluxoCaixaCreateManyArgs} args - Arguments to create many FluxoCaixas.
     * @example
     * // Create many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FluxoCaixaCreateManyArgs>(args?: SelectSubset<T, FluxoCaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FluxoCaixas and returns the data saved in the database.
     * @param {FluxoCaixaCreateManyAndReturnArgs} args - Arguments to create many FluxoCaixas.
     * @example
     * // Create many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FluxoCaixas and only return the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FluxoCaixaCreateManyAndReturnArgs>(args?: SelectSubset<T, FluxoCaixaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FluxoCaixa.
     * @param {FluxoCaixaDeleteArgs} args - Arguments to delete one FluxoCaixa.
     * @example
     * // Delete one FluxoCaixa
     * const FluxoCaixa = await prisma.fluxoCaixa.delete({
     *   where: {
     *     // ... filter to delete one FluxoCaixa
     *   }
     * })
     * 
     */
    delete<T extends FluxoCaixaDeleteArgs>(args: SelectSubset<T, FluxoCaixaDeleteArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FluxoCaixa.
     * @param {FluxoCaixaUpdateArgs} args - Arguments to update one FluxoCaixa.
     * @example
     * // Update one FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FluxoCaixaUpdateArgs>(args: SelectSubset<T, FluxoCaixaUpdateArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FluxoCaixas.
     * @param {FluxoCaixaDeleteManyArgs} args - Arguments to filter FluxoCaixas to delete.
     * @example
     * // Delete a few FluxoCaixas
     * const { count } = await prisma.fluxoCaixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FluxoCaixaDeleteManyArgs>(args?: SelectSubset<T, FluxoCaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FluxoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FluxoCaixaUpdateManyArgs>(args: SelectSubset<T, FluxoCaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FluxoCaixas and returns the data updated in the database.
     * @param {FluxoCaixaUpdateManyAndReturnArgs} args - Arguments to update many FluxoCaixas.
     * @example
     * // Update many FluxoCaixas
     * const fluxoCaixa = await prisma.fluxoCaixa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FluxoCaixas and only return the `id`
     * const fluxoCaixaWithIdOnly = await prisma.fluxoCaixa.updateManyAndReturn({
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
    updateManyAndReturn<T extends FluxoCaixaUpdateManyAndReturnArgs>(args: SelectSubset<T, FluxoCaixaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FluxoCaixa.
     * @param {FluxoCaixaUpsertArgs} args - Arguments to update or create a FluxoCaixa.
     * @example
     * // Update or create a FluxoCaixa
     * const fluxoCaixa = await prisma.fluxoCaixa.upsert({
     *   create: {
     *     // ... data to create a FluxoCaixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FluxoCaixa we want to update
     *   }
     * })
     */
    upsert<T extends FluxoCaixaUpsertArgs>(args: SelectSubset<T, FluxoCaixaUpsertArgs<ExtArgs>>): Prisma__FluxoCaixaClient<$Result.GetResult<Prisma.$FluxoCaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FluxoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaCountArgs} args - Arguments to filter FluxoCaixas to count.
     * @example
     * // Count the number of FluxoCaixas
     * const count = await prisma.fluxoCaixa.count({
     *   where: {
     *     // ... the filter for the FluxoCaixas we want to count
     *   }
     * })
    **/
    count<T extends FluxoCaixaCountArgs>(
      args?: Subset<T, FluxoCaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FluxoCaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FluxoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FluxoCaixaAggregateArgs>(args: Subset<T, FluxoCaixaAggregateArgs>): Prisma.PrismaPromise<GetFluxoCaixaAggregateType<T>>

    /**
     * Group by FluxoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluxoCaixaGroupByArgs} args - Group by arguments.
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
      T extends FluxoCaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FluxoCaixaGroupByArgs['orderBy'] }
        : { orderBy?: FluxoCaixaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FluxoCaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFluxoCaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FluxoCaixa model
   */
  readonly fields: FluxoCaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FluxoCaixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FluxoCaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FluxoCaixa model
   */
  interface FluxoCaixaFieldRefs {
    readonly id: FieldRef<"FluxoCaixa", 'String'>
    readonly tipo: FieldRef<"FluxoCaixa", 'TipoOperacao'>
    readonly valor: FieldRef<"FluxoCaixa", 'Float'>
    readonly data: FieldRef<"FluxoCaixa", 'DateTime'>
    readonly formaPagamento: FieldRef<"FluxoCaixa", 'FormaPagamento'>
    readonly descricao: FieldRef<"FluxoCaixa", 'String'>
    readonly createdAt: FieldRef<"FluxoCaixa", 'DateTime'>
    readonly updatedAt: FieldRef<"FluxoCaixa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FluxoCaixa findUnique
   */
  export type FluxoCaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa findUniqueOrThrow
   */
  export type FluxoCaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa findFirst
   */
  export type FluxoCaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FluxoCaixas.
     */
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa findFirstOrThrow
   */
  export type FluxoCaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter, which FluxoCaixa to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FluxoCaixas.
     */
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa findMany
   */
  export type FluxoCaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter, which FluxoCaixas to fetch.
     */
    where?: FluxoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FluxoCaixas to fetch.
     */
    orderBy?: FluxoCaixaOrderByWithRelationInput | FluxoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FluxoCaixas.
     */
    cursor?: FluxoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FluxoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FluxoCaixas.
     */
    skip?: number
    distinct?: FluxoCaixaScalarFieldEnum | FluxoCaixaScalarFieldEnum[]
  }

  /**
   * FluxoCaixa create
   */
  export type FluxoCaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data needed to create a FluxoCaixa.
     */
    data: XOR<FluxoCaixaCreateInput, FluxoCaixaUncheckedCreateInput>
  }

  /**
   * FluxoCaixa createMany
   */
  export type FluxoCaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FluxoCaixas.
     */
    data: FluxoCaixaCreateManyInput | FluxoCaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FluxoCaixa createManyAndReturn
   */
  export type FluxoCaixaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data used to create many FluxoCaixas.
     */
    data: FluxoCaixaCreateManyInput | FluxoCaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FluxoCaixa update
   */
  export type FluxoCaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data needed to update a FluxoCaixa.
     */
    data: XOR<FluxoCaixaUpdateInput, FluxoCaixaUncheckedUpdateInput>
    /**
     * Choose, which FluxoCaixa to update.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa updateMany
   */
  export type FluxoCaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FluxoCaixas.
     */
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which FluxoCaixas to update
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to update.
     */
    limit?: number
  }

  /**
   * FluxoCaixa updateManyAndReturn
   */
  export type FluxoCaixaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The data used to update FluxoCaixas.
     */
    data: XOR<FluxoCaixaUpdateManyMutationInput, FluxoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which FluxoCaixas to update
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to update.
     */
    limit?: number
  }

  /**
   * FluxoCaixa upsert
   */
  export type FluxoCaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * The filter to search for the FluxoCaixa to update in case it exists.
     */
    where: FluxoCaixaWhereUniqueInput
    /**
     * In case the FluxoCaixa found by the `where` argument doesn't exist, create a new FluxoCaixa with this data.
     */
    create: XOR<FluxoCaixaCreateInput, FluxoCaixaUncheckedCreateInput>
    /**
     * In case the FluxoCaixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FluxoCaixaUpdateInput, FluxoCaixaUncheckedUpdateInput>
  }

  /**
   * FluxoCaixa delete
   */
  export type FluxoCaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
    /**
     * Filter which FluxoCaixa to delete.
     */
    where: FluxoCaixaWhereUniqueInput
  }

  /**
   * FluxoCaixa deleteMany
   */
  export type FluxoCaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FluxoCaixas to delete
     */
    where?: FluxoCaixaWhereInput
    /**
     * Limit how many FluxoCaixas to delete.
     */
    limit?: number
  }

  /**
   * FluxoCaixa without action
   */
  export type FluxoCaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FluxoCaixa
     */
    select?: FluxoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FluxoCaixa
     */
    omit?: FluxoCaixaOmit<ExtArgs> | null
  }


  /**
   * Model Viagem
   */

  export type AggregateViagem = {
    _count: ViagemCountAggregateOutputType | null
    _min: ViagemMinAggregateOutputType | null
    _max: ViagemMaxAggregateOutputType | null
  }

  export type ViagemMinAggregateOutputType = {
    id: string | null
    dataViagem: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViagemMaxAggregateOutputType = {
    id: string | null
    dataViagem: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViagemCountAggregateOutputType = {
    id: number
    dataViagem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ViagemMinAggregateInputType = {
    id?: true
    dataViagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViagemMaxAggregateInputType = {
    id?: true
    dataViagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViagemCountAggregateInputType = {
    id?: true
    dataViagem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ViagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viagem to aggregate.
     */
    where?: ViagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viagems to fetch.
     */
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viagems
    **/
    _count?: true | ViagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViagemMaxAggregateInputType
  }

  export type GetViagemAggregateType<T extends ViagemAggregateArgs> = {
        [P in keyof T & keyof AggregateViagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViagem[P]>
      : GetScalarType<T[P], AggregateViagem[P]>
  }




  export type ViagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViagemWhereInput
    orderBy?: ViagemOrderByWithAggregationInput | ViagemOrderByWithAggregationInput[]
    by: ViagemScalarFieldEnum[] | ViagemScalarFieldEnum
    having?: ViagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViagemCountAggregateInputType | true
    _min?: ViagemMinAggregateInputType
    _max?: ViagemMaxAggregateInputType
  }

  export type ViagemGroupByOutputType = {
    id: string
    dataViagem: Date
    createdAt: Date
    updatedAt: Date
    _count: ViagemCountAggregateOutputType | null
    _min: ViagemMinAggregateOutputType | null
    _max: ViagemMaxAggregateOutputType | null
  }

  type GetViagemGroupByPayload<T extends ViagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViagemGroupByOutputType[P]>
            : GetScalarType<T[P], ViagemGroupByOutputType[P]>
        }
      >
    >


  export type ViagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passageiros?: boolean | Viagem$passageirosArgs<ExtArgs>
    dependentes?: boolean | Viagem$dependentesArgs<ExtArgs>
    _count?: boolean | ViagemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viagem"]>

  export type ViagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["viagem"]>

  export type ViagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["viagem"]>

  export type ViagemSelectScalar = {
    id?: boolean
    dataViagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ViagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataViagem" | "createdAt" | "updatedAt", ExtArgs["result"]["viagem"]>
  export type ViagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passageiros?: boolean | Viagem$passageirosArgs<ExtArgs>
    dependentes?: boolean | Viagem$dependentesArgs<ExtArgs>
    _count?: boolean | ViagemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ViagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ViagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viagem"
    objects: {
      passageiros: Prisma.$PassageiroPayload<ExtArgs>[]
      dependentes: Prisma.$DependentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataViagem: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["viagem"]>
    composites: {}
  }

  type ViagemGetPayload<S extends boolean | null | undefined | ViagemDefaultArgs> = $Result.GetResult<Prisma.$ViagemPayload, S>

  type ViagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViagemCountAggregateInputType | true
    }

  export interface ViagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viagem'], meta: { name: 'Viagem' } }
    /**
     * Find zero or one Viagem that matches the filter.
     * @param {ViagemFindUniqueArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViagemFindUniqueArgs>(args: SelectSubset<T, ViagemFindUniqueArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViagemFindUniqueOrThrowArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViagemFindUniqueOrThrowArgs>(args: SelectSubset<T, ViagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemFindFirstArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViagemFindFirstArgs>(args?: SelectSubset<T, ViagemFindFirstArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemFindFirstOrThrowArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViagemFindFirstOrThrowArgs>(args?: SelectSubset<T, ViagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viagems
     * const viagems = await prisma.viagem.findMany()
     * 
     * // Get first 10 Viagems
     * const viagems = await prisma.viagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viagemWithIdOnly = await prisma.viagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViagemFindManyArgs>(args?: SelectSubset<T, ViagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viagem.
     * @param {ViagemCreateArgs} args - Arguments to create a Viagem.
     * @example
     * // Create one Viagem
     * const Viagem = await prisma.viagem.create({
     *   data: {
     *     // ... data to create a Viagem
     *   }
     * })
     * 
     */
    create<T extends ViagemCreateArgs>(args: SelectSubset<T, ViagemCreateArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viagems.
     * @param {ViagemCreateManyArgs} args - Arguments to create many Viagems.
     * @example
     * // Create many Viagems
     * const viagem = await prisma.viagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViagemCreateManyArgs>(args?: SelectSubset<T, ViagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viagems and returns the data saved in the database.
     * @param {ViagemCreateManyAndReturnArgs} args - Arguments to create many Viagems.
     * @example
     * // Create many Viagems
     * const viagem = await prisma.viagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viagems and only return the `id`
     * const viagemWithIdOnly = await prisma.viagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViagemCreateManyAndReturnArgs>(args?: SelectSubset<T, ViagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viagem.
     * @param {ViagemDeleteArgs} args - Arguments to delete one Viagem.
     * @example
     * // Delete one Viagem
     * const Viagem = await prisma.viagem.delete({
     *   where: {
     *     // ... filter to delete one Viagem
     *   }
     * })
     * 
     */
    delete<T extends ViagemDeleteArgs>(args: SelectSubset<T, ViagemDeleteArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viagem.
     * @param {ViagemUpdateArgs} args - Arguments to update one Viagem.
     * @example
     * // Update one Viagem
     * const viagem = await prisma.viagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViagemUpdateArgs>(args: SelectSubset<T, ViagemUpdateArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viagems.
     * @param {ViagemDeleteManyArgs} args - Arguments to filter Viagems to delete.
     * @example
     * // Delete a few Viagems
     * const { count } = await prisma.viagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViagemDeleteManyArgs>(args?: SelectSubset<T, ViagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viagems
     * const viagem = await prisma.viagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViagemUpdateManyArgs>(args: SelectSubset<T, ViagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viagems and returns the data updated in the database.
     * @param {ViagemUpdateManyAndReturnArgs} args - Arguments to update many Viagems.
     * @example
     * // Update many Viagems
     * const viagem = await prisma.viagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viagems and only return the `id`
     * const viagemWithIdOnly = await prisma.viagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViagemUpdateManyAndReturnArgs>(args: SelectSubset<T, ViagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viagem.
     * @param {ViagemUpsertArgs} args - Arguments to update or create a Viagem.
     * @example
     * // Update or create a Viagem
     * const viagem = await prisma.viagem.upsert({
     *   create: {
     *     // ... data to create a Viagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viagem we want to update
     *   }
     * })
     */
    upsert<T extends ViagemUpsertArgs>(args: SelectSubset<T, ViagemUpsertArgs<ExtArgs>>): Prisma__ViagemClient<$Result.GetResult<Prisma.$ViagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemCountArgs} args - Arguments to filter Viagems to count.
     * @example
     * // Count the number of Viagems
     * const count = await prisma.viagem.count({
     *   where: {
     *     // ... the filter for the Viagems we want to count
     *   }
     * })
    **/
    count<T extends ViagemCountArgs>(
      args?: Subset<T, ViagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViagemAggregateArgs>(args: Subset<T, ViagemAggregateArgs>): Prisma.PrismaPromise<GetViagemAggregateType<T>>

    /**
     * Group by Viagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemGroupByArgs} args - Group by arguments.
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
      T extends ViagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViagemGroupByArgs['orderBy'] }
        : { orderBy?: ViagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viagem model
   */
  readonly fields: ViagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passageiros<T extends Viagem$passageirosArgs<ExtArgs> = {}>(args?: Subset<T, Viagem$passageirosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassageiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dependentes<T extends Viagem$dependentesArgs<ExtArgs> = {}>(args?: Subset<T, Viagem$dependentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Viagem model
   */
  interface ViagemFieldRefs {
    readonly id: FieldRef<"Viagem", 'String'>
    readonly dataViagem: FieldRef<"Viagem", 'DateTime'>
    readonly createdAt: FieldRef<"Viagem", 'DateTime'>
    readonly updatedAt: FieldRef<"Viagem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Viagem findUnique
   */
  export type ViagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter, which Viagem to fetch.
     */
    where: ViagemWhereUniqueInput
  }

  /**
   * Viagem findUniqueOrThrow
   */
  export type ViagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter, which Viagem to fetch.
     */
    where: ViagemWhereUniqueInput
  }

  /**
   * Viagem findFirst
   */
  export type ViagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter, which Viagem to fetch.
     */
    where?: ViagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viagems to fetch.
     */
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viagems.
     */
    cursor?: ViagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viagems.
     */
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * Viagem findFirstOrThrow
   */
  export type ViagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter, which Viagem to fetch.
     */
    where?: ViagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viagems to fetch.
     */
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viagems.
     */
    cursor?: ViagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viagems.
     */
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * Viagem findMany
   */
  export type ViagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter, which Viagems to fetch.
     */
    where?: ViagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viagems to fetch.
     */
    orderBy?: ViagemOrderByWithRelationInput | ViagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viagems.
     */
    cursor?: ViagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viagems.
     */
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * Viagem create
   */
  export type ViagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Viagem.
     */
    data: XOR<ViagemCreateInput, ViagemUncheckedCreateInput>
  }

  /**
   * Viagem createMany
   */
  export type ViagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viagems.
     */
    data: ViagemCreateManyInput | ViagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viagem createManyAndReturn
   */
  export type ViagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * The data used to create many Viagems.
     */
    data: ViagemCreateManyInput | ViagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viagem update
   */
  export type ViagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Viagem.
     */
    data: XOR<ViagemUpdateInput, ViagemUncheckedUpdateInput>
    /**
     * Choose, which Viagem to update.
     */
    where: ViagemWhereUniqueInput
  }

  /**
   * Viagem updateMany
   */
  export type ViagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viagems.
     */
    data: XOR<ViagemUpdateManyMutationInput, ViagemUncheckedUpdateManyInput>
    /**
     * Filter which Viagems to update
     */
    where?: ViagemWhereInput
    /**
     * Limit how many Viagems to update.
     */
    limit?: number
  }

  /**
   * Viagem updateManyAndReturn
   */
  export type ViagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * The data used to update Viagems.
     */
    data: XOR<ViagemUpdateManyMutationInput, ViagemUncheckedUpdateManyInput>
    /**
     * Filter which Viagems to update
     */
    where?: ViagemWhereInput
    /**
     * Limit how many Viagems to update.
     */
    limit?: number
  }

  /**
   * Viagem upsert
   */
  export type ViagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Viagem to update in case it exists.
     */
    where: ViagemWhereUniqueInput
    /**
     * In case the Viagem found by the `where` argument doesn't exist, create a new Viagem with this data.
     */
    create: XOR<ViagemCreateInput, ViagemUncheckedCreateInput>
    /**
     * In case the Viagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViagemUpdateInput, ViagemUncheckedUpdateInput>
  }

  /**
   * Viagem delete
   */
  export type ViagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
    /**
     * Filter which Viagem to delete.
     */
    where: ViagemWhereUniqueInput
  }

  /**
   * Viagem deleteMany
   */
  export type ViagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viagems to delete
     */
    where?: ViagemWhereInput
    /**
     * Limit how many Viagems to delete.
     */
    limit?: number
  }

  /**
   * Viagem.passageiros
   */
  export type Viagem$passageirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passageiro
     */
    select?: PassageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passageiro
     */
    omit?: PassageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassageiroInclude<ExtArgs> | null
    where?: PassageiroWhereInput
    orderBy?: PassageiroOrderByWithRelationInput | PassageiroOrderByWithRelationInput[]
    cursor?: PassageiroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * Viagem.dependentes
   */
  export type Viagem$dependentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependente
     */
    select?: DependenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependente
     */
    omit?: DependenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependenteInclude<ExtArgs> | null
    where?: DependenteWhereInput
    orderBy?: DependenteOrderByWithRelationInput | DependenteOrderByWithRelationInput[]
    cursor?: DependenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DependenteScalarFieldEnum | DependenteScalarFieldEnum[]
  }

  /**
   * Viagem without action
   */
  export type ViagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viagem
     */
    select?: ViagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viagem
     */
    omit?: ViagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViagemInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    senha: string
    nome: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      senha: string
      nome: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataNascimento: 'dataNascimento',
    contato: 'contato',
    email: 'email',
    typeDocumentSelected: 'typeDocumentSelected',
    documento: 'documento',
    cidade: 'cidade',
    bairro: 'bairro',
    rua: 'rua',
    numero: 'numero',
    ultimaViagem: 'ultimaViagem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const DependenteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    documento: 'documento',
    poltrona: 'poltrona',
    clienteId: 'clienteId',
    viagemId: 'viagemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DependenteScalarFieldEnum = (typeof DependenteScalarFieldEnum)[keyof typeof DependenteScalarFieldEnum]


  export const PassageiroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    typeDocumentSelected: 'typeDocumentSelected',
    documento: 'documento',
    clienteId: 'clienteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassageiroScalarFieldEnum = (typeof PassageiroScalarFieldEnum)[keyof typeof PassageiroScalarFieldEnum]


  export const FluxoCaixaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    valor: 'valor',
    data: 'data',
    formaPagamento: 'formaPagamento',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FluxoCaixaScalarFieldEnum = (typeof FluxoCaixaScalarFieldEnum)[keyof typeof FluxoCaixaScalarFieldEnum]


  export const ViagemScalarFieldEnum: {
    id: 'id',
    dataViagem: 'dataViagem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ViagemScalarFieldEnum = (typeof ViagemScalarFieldEnum)[keyof typeof ViagemScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoOperacao'
   */
  export type EnumTipoOperacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoOperacao'>
    


  /**
   * Reference to a field of type 'TipoOperacao[]'
   */
  export type ListEnumTipoOperacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoOperacao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FormaPagamento'
   */
  export type EnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento'>
    


  /**
   * Reference to a field of type 'FormaPagamento[]'
   */
  export type ListEnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento[]'>
    


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


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    dataNascimento?: StringNullableFilter<"Cliente"> | string | null
    contato?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    typeDocumentSelected?: StringNullableFilter<"Cliente"> | string | null
    documento?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringNullableFilter<"Cliente"> | string | null
    rua?: StringNullableFilter<"Cliente"> | string | null
    numero?: StringNullableFilter<"Cliente"> | string | null
    ultimaViagem?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    dependentes?: DependenteListRelationFilter
    passageiro?: XOR<PassageiroNullableScalarRelationFilter, PassageiroWhereInput> | null
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    contato?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    typeDocumentSelected?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ultimaViagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dependentes?: DependenteOrderByRelationAggregateInput
    passageiro?: PassageiroOrderByWithRelationInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    dataNascimento?: StringNullableFilter<"Cliente"> | string | null
    contato?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    typeDocumentSelected?: StringNullableFilter<"Cliente"> | string | null
    documento?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    bairro?: StringNullableFilter<"Cliente"> | string | null
    rua?: StringNullableFilter<"Cliente"> | string | null
    numero?: StringNullableFilter<"Cliente"> | string | null
    ultimaViagem?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    dependentes?: DependenteListRelationFilter
    passageiro?: XOR<PassageiroNullableScalarRelationFilter, PassageiroWhereInput> | null
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    contato?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    typeDocumentSelected?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    rua?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    ultimaViagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    dataNascimento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    contato?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    typeDocumentSelected?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    documento?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    rua?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    ultimaViagem?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type DependenteWhereInput = {
    AND?: DependenteWhereInput | DependenteWhereInput[]
    OR?: DependenteWhereInput[]
    NOT?: DependenteWhereInput | DependenteWhereInput[]
    id?: StringFilter<"Dependente"> | string
    nome?: StringFilter<"Dependente"> | string
    documento?: StringNullableFilter<"Dependente"> | string | null
    poltrona?: StringNullableFilter<"Dependente"> | string | null
    clienteId?: StringFilter<"Dependente"> | string
    viagemId?: StringNullableFilter<"Dependente"> | string | null
    createdAt?: DateTimeFilter<"Dependente"> | Date | string
    updatedAt?: DateTimeFilter<"Dependente"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    viagens?: ViagemListRelationFilter
  }

  export type DependenteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrderInput | SortOrder
    poltrona?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    viagemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    viagens?: ViagemOrderByRelationAggregateInput
  }

  export type DependenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DependenteWhereInput | DependenteWhereInput[]
    OR?: DependenteWhereInput[]
    NOT?: DependenteWhereInput | DependenteWhereInput[]
    nome?: StringFilter<"Dependente"> | string
    documento?: StringNullableFilter<"Dependente"> | string | null
    poltrona?: StringNullableFilter<"Dependente"> | string | null
    clienteId?: StringFilter<"Dependente"> | string
    viagemId?: StringNullableFilter<"Dependente"> | string | null
    createdAt?: DateTimeFilter<"Dependente"> | Date | string
    updatedAt?: DateTimeFilter<"Dependente"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    viagens?: ViagemListRelationFilter
  }, "id">

  export type DependenteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrderInput | SortOrder
    poltrona?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    viagemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DependenteCountOrderByAggregateInput
    _max?: DependenteMaxOrderByAggregateInput
    _min?: DependenteMinOrderByAggregateInput
  }

  export type DependenteScalarWhereWithAggregatesInput = {
    AND?: DependenteScalarWhereWithAggregatesInput | DependenteScalarWhereWithAggregatesInput[]
    OR?: DependenteScalarWhereWithAggregatesInput[]
    NOT?: DependenteScalarWhereWithAggregatesInput | DependenteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dependente"> | string
    nome?: StringWithAggregatesFilter<"Dependente"> | string
    documento?: StringNullableWithAggregatesFilter<"Dependente"> | string | null
    poltrona?: StringNullableWithAggregatesFilter<"Dependente"> | string | null
    clienteId?: StringWithAggregatesFilter<"Dependente"> | string
    viagemId?: StringNullableWithAggregatesFilter<"Dependente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dependente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dependente"> | Date | string
  }

  export type PassageiroWhereInput = {
    AND?: PassageiroWhereInput | PassageiroWhereInput[]
    OR?: PassageiroWhereInput[]
    NOT?: PassageiroWhereInput | PassageiroWhereInput[]
    id?: StringFilter<"Passageiro"> | string
    nome?: StringFilter<"Passageiro"> | string
    typeDocumentSelected?: StringFilter<"Passageiro"> | string
    documento?: StringFilter<"Passageiro"> | string
    clienteId?: StringNullableFilter<"Passageiro"> | string | null
    createdAt?: DateTimeFilter<"Passageiro"> | Date | string
    updatedAt?: DateTimeFilter<"Passageiro"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    viagens?: ViagemListRelationFilter
  }

  export type PassageiroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    viagens?: ViagemOrderByRelationAggregateInput
  }

  export type PassageiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clienteId?: string
    AND?: PassageiroWhereInput | PassageiroWhereInput[]
    OR?: PassageiroWhereInput[]
    NOT?: PassageiroWhereInput | PassageiroWhereInput[]
    nome?: StringFilter<"Passageiro"> | string
    typeDocumentSelected?: StringFilter<"Passageiro"> | string
    documento?: StringFilter<"Passageiro"> | string
    createdAt?: DateTimeFilter<"Passageiro"> | Date | string
    updatedAt?: DateTimeFilter<"Passageiro"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
    viagens?: ViagemListRelationFilter
  }, "id" | "clienteId">

  export type PassageiroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    clienteId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassageiroCountOrderByAggregateInput
    _max?: PassageiroMaxOrderByAggregateInput
    _min?: PassageiroMinOrderByAggregateInput
  }

  export type PassageiroScalarWhereWithAggregatesInput = {
    AND?: PassageiroScalarWhereWithAggregatesInput | PassageiroScalarWhereWithAggregatesInput[]
    OR?: PassageiroScalarWhereWithAggregatesInput[]
    NOT?: PassageiroScalarWhereWithAggregatesInput | PassageiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passageiro"> | string
    nome?: StringWithAggregatesFilter<"Passageiro"> | string
    typeDocumentSelected?: StringWithAggregatesFilter<"Passageiro"> | string
    documento?: StringWithAggregatesFilter<"Passageiro"> | string
    clienteId?: StringNullableWithAggregatesFilter<"Passageiro"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Passageiro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passageiro"> | Date | string
  }

  export type FluxoCaixaWhereInput = {
    AND?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    OR?: FluxoCaixaWhereInput[]
    NOT?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    id?: StringFilter<"FluxoCaixa"> | string
    tipo?: EnumTipoOperacaoFilter<"FluxoCaixa"> | $Enums.TipoOperacao
    valor?: FloatFilter<"FluxoCaixa"> | number
    data?: DateTimeFilter<"FluxoCaixa"> | Date | string
    formaPagamento?: EnumFormaPagamentoFilter<"FluxoCaixa"> | $Enums.FormaPagamento
    descricao?: StringNullableFilter<"FluxoCaixa"> | string | null
    createdAt?: DateTimeFilter<"FluxoCaixa"> | Date | string
    updatedAt?: DateTimeFilter<"FluxoCaixa"> | Date | string
  }

  export type FluxoCaixaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    formaPagamento?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FluxoCaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    OR?: FluxoCaixaWhereInput[]
    NOT?: FluxoCaixaWhereInput | FluxoCaixaWhereInput[]
    tipo?: EnumTipoOperacaoFilter<"FluxoCaixa"> | $Enums.TipoOperacao
    valor?: FloatFilter<"FluxoCaixa"> | number
    data?: DateTimeFilter<"FluxoCaixa"> | Date | string
    formaPagamento?: EnumFormaPagamentoFilter<"FluxoCaixa"> | $Enums.FormaPagamento
    descricao?: StringNullableFilter<"FluxoCaixa"> | string | null
    createdAt?: DateTimeFilter<"FluxoCaixa"> | Date | string
    updatedAt?: DateTimeFilter<"FluxoCaixa"> | Date | string
  }, "id">

  export type FluxoCaixaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    formaPagamento?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FluxoCaixaCountOrderByAggregateInput
    _avg?: FluxoCaixaAvgOrderByAggregateInput
    _max?: FluxoCaixaMaxOrderByAggregateInput
    _min?: FluxoCaixaMinOrderByAggregateInput
    _sum?: FluxoCaixaSumOrderByAggregateInput
  }

  export type FluxoCaixaScalarWhereWithAggregatesInput = {
    AND?: FluxoCaixaScalarWhereWithAggregatesInput | FluxoCaixaScalarWhereWithAggregatesInput[]
    OR?: FluxoCaixaScalarWhereWithAggregatesInput[]
    NOT?: FluxoCaixaScalarWhereWithAggregatesInput | FluxoCaixaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FluxoCaixa"> | string
    tipo?: EnumTipoOperacaoWithAggregatesFilter<"FluxoCaixa"> | $Enums.TipoOperacao
    valor?: FloatWithAggregatesFilter<"FluxoCaixa"> | number
    data?: DateTimeWithAggregatesFilter<"FluxoCaixa"> | Date | string
    formaPagamento?: EnumFormaPagamentoWithAggregatesFilter<"FluxoCaixa"> | $Enums.FormaPagamento
    descricao?: StringNullableWithAggregatesFilter<"FluxoCaixa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FluxoCaixa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FluxoCaixa"> | Date | string
  }

  export type ViagemWhereInput = {
    AND?: ViagemWhereInput | ViagemWhereInput[]
    OR?: ViagemWhereInput[]
    NOT?: ViagemWhereInput | ViagemWhereInput[]
    id?: StringFilter<"Viagem"> | string
    dataViagem?: DateTimeFilter<"Viagem"> | Date | string
    createdAt?: DateTimeFilter<"Viagem"> | Date | string
    updatedAt?: DateTimeFilter<"Viagem"> | Date | string
    passageiros?: PassageiroListRelationFilter
    dependentes?: DependenteListRelationFilter
  }

  export type ViagemOrderByWithRelationInput = {
    id?: SortOrder
    dataViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passageiros?: PassageiroOrderByRelationAggregateInput
    dependentes?: DependenteOrderByRelationAggregateInput
  }

  export type ViagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViagemWhereInput | ViagemWhereInput[]
    OR?: ViagemWhereInput[]
    NOT?: ViagemWhereInput | ViagemWhereInput[]
    dataViagem?: DateTimeFilter<"Viagem"> | Date | string
    createdAt?: DateTimeFilter<"Viagem"> | Date | string
    updatedAt?: DateTimeFilter<"Viagem"> | Date | string
    passageiros?: PassageiroListRelationFilter
    dependentes?: DependenteListRelationFilter
  }, "id">

  export type ViagemOrderByWithAggregationInput = {
    id?: SortOrder
    dataViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ViagemCountOrderByAggregateInput
    _max?: ViagemMaxOrderByAggregateInput
    _min?: ViagemMinOrderByAggregateInput
  }

  export type ViagemScalarWhereWithAggregatesInput = {
    AND?: ViagemScalarWhereWithAggregatesInput | ViagemScalarWhereWithAggregatesInput[]
    OR?: ViagemScalarWhereWithAggregatesInput[]
    NOT?: ViagemScalarWhereWithAggregatesInput | ViagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Viagem"> | string
    dataViagem?: DateTimeWithAggregatesFilter<"Viagem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Viagem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Viagem"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteCreateNestedManyWithoutClienteInput
    passageiro?: PassageiroCreateNestedOneWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteUncheckedCreateNestedManyWithoutClienteInput
    passageiro?: PassageiroUncheckedCreateNestedOneWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUpdateManyWithoutClienteNestedInput
    passageiro?: PassageiroUpdateOneWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUncheckedUpdateManyWithoutClienteNestedInput
    passageiro?: PassageiroUncheckedUpdateOneWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependenteCreateInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutDependentesInput
    viagens?: ViagemCreateNestedManyWithoutDependentesInput
  }

  export type DependenteUncheckedCreateInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    clienteId: string
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemUncheckedCreateNestedManyWithoutDependentesInput
  }

  export type DependenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutDependentesNestedInput
    viagens?: ViagemUpdateManyWithoutDependentesNestedInput
  }

  export type DependenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUncheckedUpdateManyWithoutDependentesNestedInput
  }

  export type DependenteCreateManyInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    clienteId: string
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageiroCreateInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPassageiroInput
    viagens?: ViagemCreateNestedManyWithoutPassageirosInput
  }

  export type PassageiroUncheckedCreateInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemUncheckedCreateNestedManyWithoutPassageirosInput
  }

  export type PassageiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPassageiroNestedInput
    viagens?: ViagemUpdateManyWithoutPassageirosNestedInput
  }

  export type PassageiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUncheckedUpdateManyWithoutPassageirosNestedInput
  }

  export type PassageiroCreateManyInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassageiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaCreateInput = {
    id?: string
    tipo: $Enums.TipoOperacao
    valor: number
    data: Date | string
    formaPagamento: $Enums.FormaPagamento
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FluxoCaixaUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoOperacao
    valor: number
    data: Date | string
    formaPagamento: $Enums.FormaPagamento
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FluxoCaixaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoOperacaoFieldUpdateOperationsInput | $Enums.TipoOperacao
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoOperacaoFieldUpdateOperationsInput | $Enums.TipoOperacao
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaCreateManyInput = {
    id?: string
    tipo: $Enums.TipoOperacao
    valor: number
    data: Date | string
    formaPagamento: $Enums.FormaPagamento
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FluxoCaixaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoOperacaoFieldUpdateOperationsInput | $Enums.TipoOperacao
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FluxoCaixaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoOperacaoFieldUpdateOperationsInput | $Enums.TipoOperacao
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViagemCreateInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiros?: PassageiroCreateNestedManyWithoutViagensInput
    dependentes?: DependenteCreateNestedManyWithoutViagensInput
  }

  export type ViagemUncheckedCreateInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiros?: PassageiroUncheckedCreateNestedManyWithoutViagensInput
    dependentes?: DependenteUncheckedCreateNestedManyWithoutViagensInput
  }

  export type ViagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiros?: PassageiroUpdateManyWithoutViagensNestedInput
    dependentes?: DependenteUpdateManyWithoutViagensNestedInput
  }

  export type ViagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiros?: PassageiroUncheckedUpdateManyWithoutViagensNestedInput
    dependentes?: DependenteUncheckedUpdateManyWithoutViagensNestedInput
  }

  export type ViagemCreateManyInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
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

  export type DependenteListRelationFilter = {
    every?: DependenteWhereInput
    some?: DependenteWhereInput
    none?: DependenteWhereInput
  }

  export type PassageiroNullableScalarRelationFilter = {
    is?: PassageiroWhereInput | null
    isNot?: PassageiroWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DependenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    contato?: SortOrder
    email?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    ultimaViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    contato?: SortOrder
    email?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    ultimaViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNascimento?: SortOrder
    contato?: SortOrder
    email?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    ultimaViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ViagemListRelationFilter = {
    every?: ViagemWhereInput
    some?: ViagemWhereInput
    none?: ViagemWhereInput
  }

  export type ViagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DependenteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    poltrona?: SortOrder
    clienteId?: SortOrder
    viagemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    poltrona?: SortOrder
    clienteId?: SortOrder
    viagemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependenteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documento?: SortOrder
    poltrona?: SortOrder
    clienteId?: SortOrder
    viagemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type PassageiroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassageiroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassageiroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    typeDocumentSelected?: SortOrder
    documento?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTipoOperacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoOperacao | EnumTipoOperacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoOperacaoFilter<$PrismaModel> | $Enums.TipoOperacao
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

  export type EnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type FluxoCaixaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    formaPagamento?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FluxoCaixaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FluxoCaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    formaPagamento?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FluxoCaixaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    formaPagamento?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FluxoCaixaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type EnumTipoOperacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoOperacao | EnumTipoOperacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoOperacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoOperacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoOperacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoOperacaoFilter<$PrismaModel>
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

  export type EnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
  }

  export type PassageiroListRelationFilter = {
    every?: PassageiroWhereInput
    some?: PassageiroWhereInput
    none?: PassageiroWhereInput
  }

  export type PassageiroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViagemCountOrderByAggregateInput = {
    id?: SortOrder
    dataViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViagemMaxOrderByAggregateInput = {
    id?: SortOrder
    dataViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViagemMinOrderByAggregateInput = {
    id?: SortOrder
    dataViagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type DependenteCreateNestedManyWithoutClienteInput = {
    create?: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput> | DependenteCreateWithoutClienteInput[] | DependenteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutClienteInput | DependenteCreateOrConnectWithoutClienteInput[]
    createMany?: DependenteCreateManyClienteInputEnvelope
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
  }

  export type PassageiroCreateNestedOneWithoutClienteInput = {
    create?: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
    connectOrCreate?: PassageiroCreateOrConnectWithoutClienteInput
    connect?: PassageiroWhereUniqueInput
  }

  export type DependenteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput> | DependenteCreateWithoutClienteInput[] | DependenteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutClienteInput | DependenteCreateOrConnectWithoutClienteInput[]
    createMany?: DependenteCreateManyClienteInputEnvelope
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
  }

  export type PassageiroUncheckedCreateNestedOneWithoutClienteInput = {
    create?: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
    connectOrCreate?: PassageiroCreateOrConnectWithoutClienteInput
    connect?: PassageiroWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type DependenteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput> | DependenteCreateWithoutClienteInput[] | DependenteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutClienteInput | DependenteCreateOrConnectWithoutClienteInput[]
    upsert?: DependenteUpsertWithWhereUniqueWithoutClienteInput | DependenteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DependenteCreateManyClienteInputEnvelope
    set?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    disconnect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    delete?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    update?: DependenteUpdateWithWhereUniqueWithoutClienteInput | DependenteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DependenteUpdateManyWithWhereWithoutClienteInput | DependenteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
  }

  export type PassageiroUpdateOneWithoutClienteNestedInput = {
    create?: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
    connectOrCreate?: PassageiroCreateOrConnectWithoutClienteInput
    upsert?: PassageiroUpsertWithoutClienteInput
    disconnect?: PassageiroWhereInput | boolean
    delete?: PassageiroWhereInput | boolean
    connect?: PassageiroWhereUniqueInput
    update?: XOR<XOR<PassageiroUpdateToOneWithWhereWithoutClienteInput, PassageiroUpdateWithoutClienteInput>, PassageiroUncheckedUpdateWithoutClienteInput>
  }

  export type DependenteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput> | DependenteCreateWithoutClienteInput[] | DependenteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutClienteInput | DependenteCreateOrConnectWithoutClienteInput[]
    upsert?: DependenteUpsertWithWhereUniqueWithoutClienteInput | DependenteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DependenteCreateManyClienteInputEnvelope
    set?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    disconnect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    delete?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    update?: DependenteUpdateWithWhereUniqueWithoutClienteInput | DependenteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DependenteUpdateManyWithWhereWithoutClienteInput | DependenteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
  }

  export type PassageiroUncheckedUpdateOneWithoutClienteNestedInput = {
    create?: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
    connectOrCreate?: PassageiroCreateOrConnectWithoutClienteInput
    upsert?: PassageiroUpsertWithoutClienteInput
    disconnect?: PassageiroWhereInput | boolean
    delete?: PassageiroWhereInput | boolean
    connect?: PassageiroWhereUniqueInput
    update?: XOR<XOR<PassageiroUpdateToOneWithWhereWithoutClienteInput, PassageiroUpdateWithoutClienteInput>, PassageiroUncheckedUpdateWithoutClienteInput>
  }

  export type ClienteCreateNestedOneWithoutDependentesInput = {
    create?: XOR<ClienteCreateWithoutDependentesInput, ClienteUncheckedCreateWithoutDependentesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDependentesInput
    connect?: ClienteWhereUniqueInput
  }

  export type ViagemCreateNestedManyWithoutDependentesInput = {
    create?: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput> | ViagemCreateWithoutDependentesInput[] | ViagemUncheckedCreateWithoutDependentesInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutDependentesInput | ViagemCreateOrConnectWithoutDependentesInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
  }

  export type ViagemUncheckedCreateNestedManyWithoutDependentesInput = {
    create?: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput> | ViagemCreateWithoutDependentesInput[] | ViagemUncheckedCreateWithoutDependentesInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutDependentesInput | ViagemCreateOrConnectWithoutDependentesInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutDependentesNestedInput = {
    create?: XOR<ClienteCreateWithoutDependentesInput, ClienteUncheckedCreateWithoutDependentesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDependentesInput
    upsert?: ClienteUpsertWithoutDependentesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutDependentesInput, ClienteUpdateWithoutDependentesInput>, ClienteUncheckedUpdateWithoutDependentesInput>
  }

  export type ViagemUpdateManyWithoutDependentesNestedInput = {
    create?: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput> | ViagemCreateWithoutDependentesInput[] | ViagemUncheckedCreateWithoutDependentesInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutDependentesInput | ViagemCreateOrConnectWithoutDependentesInput[]
    upsert?: ViagemUpsertWithWhereUniqueWithoutDependentesInput | ViagemUpsertWithWhereUniqueWithoutDependentesInput[]
    set?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    disconnect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    delete?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    update?: ViagemUpdateWithWhereUniqueWithoutDependentesInput | ViagemUpdateWithWhereUniqueWithoutDependentesInput[]
    updateMany?: ViagemUpdateManyWithWhereWithoutDependentesInput | ViagemUpdateManyWithWhereWithoutDependentesInput[]
    deleteMany?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
  }

  export type ViagemUncheckedUpdateManyWithoutDependentesNestedInput = {
    create?: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput> | ViagemCreateWithoutDependentesInput[] | ViagemUncheckedCreateWithoutDependentesInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutDependentesInput | ViagemCreateOrConnectWithoutDependentesInput[]
    upsert?: ViagemUpsertWithWhereUniqueWithoutDependentesInput | ViagemUpsertWithWhereUniqueWithoutDependentesInput[]
    set?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    disconnect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    delete?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    update?: ViagemUpdateWithWhereUniqueWithoutDependentesInput | ViagemUpdateWithWhereUniqueWithoutDependentesInput[]
    updateMany?: ViagemUpdateManyWithWhereWithoutDependentesInput | ViagemUpdateManyWithWhereWithoutDependentesInput[]
    deleteMany?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPassageiroInput = {
    create?: XOR<ClienteCreateWithoutPassageiroInput, ClienteUncheckedCreateWithoutPassageiroInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPassageiroInput
    connect?: ClienteWhereUniqueInput
  }

  export type ViagemCreateNestedManyWithoutPassageirosInput = {
    create?: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput> | ViagemCreateWithoutPassageirosInput[] | ViagemUncheckedCreateWithoutPassageirosInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutPassageirosInput | ViagemCreateOrConnectWithoutPassageirosInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
  }

  export type ViagemUncheckedCreateNestedManyWithoutPassageirosInput = {
    create?: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput> | ViagemCreateWithoutPassageirosInput[] | ViagemUncheckedCreateWithoutPassageirosInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutPassageirosInput | ViagemCreateOrConnectWithoutPassageirosInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
  }

  export type ClienteUpdateOneWithoutPassageiroNestedInput = {
    create?: XOR<ClienteCreateWithoutPassageiroInput, ClienteUncheckedCreateWithoutPassageiroInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPassageiroInput
    upsert?: ClienteUpsertWithoutPassageiroInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPassageiroInput, ClienteUpdateWithoutPassageiroInput>, ClienteUncheckedUpdateWithoutPassageiroInput>
  }

  export type ViagemUpdateManyWithoutPassageirosNestedInput = {
    create?: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput> | ViagemCreateWithoutPassageirosInput[] | ViagemUncheckedCreateWithoutPassageirosInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutPassageirosInput | ViagemCreateOrConnectWithoutPassageirosInput[]
    upsert?: ViagemUpsertWithWhereUniqueWithoutPassageirosInput | ViagemUpsertWithWhereUniqueWithoutPassageirosInput[]
    set?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    disconnect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    delete?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    update?: ViagemUpdateWithWhereUniqueWithoutPassageirosInput | ViagemUpdateWithWhereUniqueWithoutPassageirosInput[]
    updateMany?: ViagemUpdateManyWithWhereWithoutPassageirosInput | ViagemUpdateManyWithWhereWithoutPassageirosInput[]
    deleteMany?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
  }

  export type ViagemUncheckedUpdateManyWithoutPassageirosNestedInput = {
    create?: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput> | ViagemCreateWithoutPassageirosInput[] | ViagemUncheckedCreateWithoutPassageirosInput[]
    connectOrCreate?: ViagemCreateOrConnectWithoutPassageirosInput | ViagemCreateOrConnectWithoutPassageirosInput[]
    upsert?: ViagemUpsertWithWhereUniqueWithoutPassageirosInput | ViagemUpsertWithWhereUniqueWithoutPassageirosInput[]
    set?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    disconnect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    delete?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    connect?: ViagemWhereUniqueInput | ViagemWhereUniqueInput[]
    update?: ViagemUpdateWithWhereUniqueWithoutPassageirosInput | ViagemUpdateWithWhereUniqueWithoutPassageirosInput[]
    updateMany?: ViagemUpdateManyWithWhereWithoutPassageirosInput | ViagemUpdateManyWithWhereWithoutPassageirosInput[]
    deleteMany?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
  }

  export type EnumTipoOperacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoOperacao
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFormaPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPagamento
  }

  export type PassageiroCreateNestedManyWithoutViagensInput = {
    create?: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput> | PassageiroCreateWithoutViagensInput[] | PassageiroUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: PassageiroCreateOrConnectWithoutViagensInput | PassageiroCreateOrConnectWithoutViagensInput[]
    connect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
  }

  export type DependenteCreateNestedManyWithoutViagensInput = {
    create?: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput> | DependenteCreateWithoutViagensInput[] | DependenteUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutViagensInput | DependenteCreateOrConnectWithoutViagensInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
  }

  export type PassageiroUncheckedCreateNestedManyWithoutViagensInput = {
    create?: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput> | PassageiroCreateWithoutViagensInput[] | PassageiroUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: PassageiroCreateOrConnectWithoutViagensInput | PassageiroCreateOrConnectWithoutViagensInput[]
    connect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
  }

  export type DependenteUncheckedCreateNestedManyWithoutViagensInput = {
    create?: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput> | DependenteCreateWithoutViagensInput[] | DependenteUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutViagensInput | DependenteCreateOrConnectWithoutViagensInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
  }

  export type PassageiroUpdateManyWithoutViagensNestedInput = {
    create?: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput> | PassageiroCreateWithoutViagensInput[] | PassageiroUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: PassageiroCreateOrConnectWithoutViagensInput | PassageiroCreateOrConnectWithoutViagensInput[]
    upsert?: PassageiroUpsertWithWhereUniqueWithoutViagensInput | PassageiroUpsertWithWhereUniqueWithoutViagensInput[]
    set?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    disconnect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    delete?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    connect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    update?: PassageiroUpdateWithWhereUniqueWithoutViagensInput | PassageiroUpdateWithWhereUniqueWithoutViagensInput[]
    updateMany?: PassageiroUpdateManyWithWhereWithoutViagensInput | PassageiroUpdateManyWithWhereWithoutViagensInput[]
    deleteMany?: PassageiroScalarWhereInput | PassageiroScalarWhereInput[]
  }

  export type DependenteUpdateManyWithoutViagensNestedInput = {
    create?: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput> | DependenteCreateWithoutViagensInput[] | DependenteUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutViagensInput | DependenteCreateOrConnectWithoutViagensInput[]
    upsert?: DependenteUpsertWithWhereUniqueWithoutViagensInput | DependenteUpsertWithWhereUniqueWithoutViagensInput[]
    set?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    disconnect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    delete?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    update?: DependenteUpdateWithWhereUniqueWithoutViagensInput | DependenteUpdateWithWhereUniqueWithoutViagensInput[]
    updateMany?: DependenteUpdateManyWithWhereWithoutViagensInput | DependenteUpdateManyWithWhereWithoutViagensInput[]
    deleteMany?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
  }

  export type PassageiroUncheckedUpdateManyWithoutViagensNestedInput = {
    create?: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput> | PassageiroCreateWithoutViagensInput[] | PassageiroUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: PassageiroCreateOrConnectWithoutViagensInput | PassageiroCreateOrConnectWithoutViagensInput[]
    upsert?: PassageiroUpsertWithWhereUniqueWithoutViagensInput | PassageiroUpsertWithWhereUniqueWithoutViagensInput[]
    set?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    disconnect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    delete?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    connect?: PassageiroWhereUniqueInput | PassageiroWhereUniqueInput[]
    update?: PassageiroUpdateWithWhereUniqueWithoutViagensInput | PassageiroUpdateWithWhereUniqueWithoutViagensInput[]
    updateMany?: PassageiroUpdateManyWithWhereWithoutViagensInput | PassageiroUpdateManyWithWhereWithoutViagensInput[]
    deleteMany?: PassageiroScalarWhereInput | PassageiroScalarWhereInput[]
  }

  export type DependenteUncheckedUpdateManyWithoutViagensNestedInput = {
    create?: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput> | DependenteCreateWithoutViagensInput[] | DependenteUncheckedCreateWithoutViagensInput[]
    connectOrCreate?: DependenteCreateOrConnectWithoutViagensInput | DependenteCreateOrConnectWithoutViagensInput[]
    upsert?: DependenteUpsertWithWhereUniqueWithoutViagensInput | DependenteUpsertWithWhereUniqueWithoutViagensInput[]
    set?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    disconnect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    delete?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    connect?: DependenteWhereUniqueInput | DependenteWhereUniqueInput[]
    update?: DependenteUpdateWithWhereUniqueWithoutViagensInput | DependenteUpdateWithWhereUniqueWithoutViagensInput[]
    updateMany?: DependenteUpdateManyWithWhereWithoutViagensInput | DependenteUpdateManyWithWhereWithoutViagensInput[]
    deleteMany?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumTipoOperacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoOperacao | EnumTipoOperacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoOperacaoFilter<$PrismaModel> | $Enums.TipoOperacao
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

  export type NestedEnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type NestedEnumTipoOperacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoOperacao | EnumTipoOperacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoOperacao[] | ListEnumTipoOperacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoOperacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoOperacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoOperacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoOperacaoFilter<$PrismaModel>
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

  export type NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
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

  export type DependenteCreateWithoutClienteInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemCreateNestedManyWithoutDependentesInput
  }

  export type DependenteUncheckedCreateWithoutClienteInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemUncheckedCreateNestedManyWithoutDependentesInput
  }

  export type DependenteCreateOrConnectWithoutClienteInput = {
    where: DependenteWhereUniqueInput
    create: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput>
  }

  export type DependenteCreateManyClienteInputEnvelope = {
    data: DependenteCreateManyClienteInput | DependenteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PassageiroCreateWithoutClienteInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemCreateNestedManyWithoutPassageirosInput
  }

  export type PassageiroUncheckedCreateWithoutClienteInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viagens?: ViagemUncheckedCreateNestedManyWithoutPassageirosInput
  }

  export type PassageiroCreateOrConnectWithoutClienteInput = {
    where: PassageiroWhereUniqueInput
    create: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
  }

  export type DependenteUpsertWithWhereUniqueWithoutClienteInput = {
    where: DependenteWhereUniqueInput
    update: XOR<DependenteUpdateWithoutClienteInput, DependenteUncheckedUpdateWithoutClienteInput>
    create: XOR<DependenteCreateWithoutClienteInput, DependenteUncheckedCreateWithoutClienteInput>
  }

  export type DependenteUpdateWithWhereUniqueWithoutClienteInput = {
    where: DependenteWhereUniqueInput
    data: XOR<DependenteUpdateWithoutClienteInput, DependenteUncheckedUpdateWithoutClienteInput>
  }

  export type DependenteUpdateManyWithWhereWithoutClienteInput = {
    where: DependenteScalarWhereInput
    data: XOR<DependenteUpdateManyMutationInput, DependenteUncheckedUpdateManyWithoutClienteInput>
  }

  export type DependenteScalarWhereInput = {
    AND?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
    OR?: DependenteScalarWhereInput[]
    NOT?: DependenteScalarWhereInput | DependenteScalarWhereInput[]
    id?: StringFilter<"Dependente"> | string
    nome?: StringFilter<"Dependente"> | string
    documento?: StringNullableFilter<"Dependente"> | string | null
    poltrona?: StringNullableFilter<"Dependente"> | string | null
    clienteId?: StringFilter<"Dependente"> | string
    viagemId?: StringNullableFilter<"Dependente"> | string | null
    createdAt?: DateTimeFilter<"Dependente"> | Date | string
    updatedAt?: DateTimeFilter<"Dependente"> | Date | string
  }

  export type PassageiroUpsertWithoutClienteInput = {
    update: XOR<PassageiroUpdateWithoutClienteInput, PassageiroUncheckedUpdateWithoutClienteInput>
    create: XOR<PassageiroCreateWithoutClienteInput, PassageiroUncheckedCreateWithoutClienteInput>
    where?: PassageiroWhereInput
  }

  export type PassageiroUpdateToOneWithWhereWithoutClienteInput = {
    where?: PassageiroWhereInput
    data: XOR<PassageiroUpdateWithoutClienteInput, PassageiroUncheckedUpdateWithoutClienteInput>
  }

  export type PassageiroUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUpdateManyWithoutPassageirosNestedInput
  }

  export type PassageiroUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUncheckedUpdateManyWithoutPassageirosNestedInput
  }

  export type ClienteCreateWithoutDependentesInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiro?: PassageiroCreateNestedOneWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutDependentesInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiro?: PassageiroUncheckedCreateNestedOneWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutDependentesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutDependentesInput, ClienteUncheckedCreateWithoutDependentesInput>
  }

  export type ViagemCreateWithoutDependentesInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiros?: PassageiroCreateNestedManyWithoutViagensInput
  }

  export type ViagemUncheckedCreateWithoutDependentesInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    passageiros?: PassageiroUncheckedCreateNestedManyWithoutViagensInput
  }

  export type ViagemCreateOrConnectWithoutDependentesInput = {
    where: ViagemWhereUniqueInput
    create: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput>
  }

  export type ClienteUpsertWithoutDependentesInput = {
    update: XOR<ClienteUpdateWithoutDependentesInput, ClienteUncheckedUpdateWithoutDependentesInput>
    create: XOR<ClienteCreateWithoutDependentesInput, ClienteUncheckedCreateWithoutDependentesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutDependentesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutDependentesInput, ClienteUncheckedUpdateWithoutDependentesInput>
  }

  export type ClienteUpdateWithoutDependentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiro?: PassageiroUpdateOneWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutDependentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiro?: PassageiroUncheckedUpdateOneWithoutClienteNestedInput
  }

  export type ViagemUpsertWithWhereUniqueWithoutDependentesInput = {
    where: ViagemWhereUniqueInput
    update: XOR<ViagemUpdateWithoutDependentesInput, ViagemUncheckedUpdateWithoutDependentesInput>
    create: XOR<ViagemCreateWithoutDependentesInput, ViagemUncheckedCreateWithoutDependentesInput>
  }

  export type ViagemUpdateWithWhereUniqueWithoutDependentesInput = {
    where: ViagemWhereUniqueInput
    data: XOR<ViagemUpdateWithoutDependentesInput, ViagemUncheckedUpdateWithoutDependentesInput>
  }

  export type ViagemUpdateManyWithWhereWithoutDependentesInput = {
    where: ViagemScalarWhereInput
    data: XOR<ViagemUpdateManyMutationInput, ViagemUncheckedUpdateManyWithoutDependentesInput>
  }

  export type ViagemScalarWhereInput = {
    AND?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
    OR?: ViagemScalarWhereInput[]
    NOT?: ViagemScalarWhereInput | ViagemScalarWhereInput[]
    id?: StringFilter<"Viagem"> | string
    dataViagem?: DateTimeFilter<"Viagem"> | Date | string
    createdAt?: DateTimeFilter<"Viagem"> | Date | string
    updatedAt?: DateTimeFilter<"Viagem"> | Date | string
  }

  export type ClienteCreateWithoutPassageiroInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPassageiroInput = {
    id?: string
    nome: string
    dataNascimento?: string | null
    contato?: string | null
    email?: string | null
    typeDocumentSelected?: string | null
    documento?: string | null
    cidade?: string | null
    bairro?: string | null
    rua?: string | null
    numero?: string | null
    ultimaViagem?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPassageiroInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPassageiroInput, ClienteUncheckedCreateWithoutPassageiroInput>
  }

  export type ViagemCreateWithoutPassageirosInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteCreateNestedManyWithoutViagensInput
  }

  export type ViagemUncheckedCreateWithoutPassageirosInput = {
    id?: string
    dataViagem: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dependentes?: DependenteUncheckedCreateNestedManyWithoutViagensInput
  }

  export type ViagemCreateOrConnectWithoutPassageirosInput = {
    where: ViagemWhereUniqueInput
    create: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput>
  }

  export type ClienteUpsertWithoutPassageiroInput = {
    update: XOR<ClienteUpdateWithoutPassageiroInput, ClienteUncheckedUpdateWithoutPassageiroInput>
    create: XOR<ClienteCreateWithoutPassageiroInput, ClienteUncheckedCreateWithoutPassageiroInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPassageiroInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPassageiroInput, ClienteUncheckedUpdateWithoutPassageiroInput>
  }

  export type ClienteUpdateWithoutPassageiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPassageiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    contato?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    typeDocumentSelected?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    rua?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    ultimaViagem?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ViagemUpsertWithWhereUniqueWithoutPassageirosInput = {
    where: ViagemWhereUniqueInput
    update: XOR<ViagemUpdateWithoutPassageirosInput, ViagemUncheckedUpdateWithoutPassageirosInput>
    create: XOR<ViagemCreateWithoutPassageirosInput, ViagemUncheckedCreateWithoutPassageirosInput>
  }

  export type ViagemUpdateWithWhereUniqueWithoutPassageirosInput = {
    where: ViagemWhereUniqueInput
    data: XOR<ViagemUpdateWithoutPassageirosInput, ViagemUncheckedUpdateWithoutPassageirosInput>
  }

  export type ViagemUpdateManyWithWhereWithoutPassageirosInput = {
    where: ViagemScalarWhereInput
    data: XOR<ViagemUpdateManyMutationInput, ViagemUncheckedUpdateManyWithoutPassageirosInput>
  }

  export type PassageiroCreateWithoutViagensInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutPassageiroInput
  }

  export type PassageiroUncheckedCreateWithoutViagensInput = {
    id?: string
    nome: string
    typeDocumentSelected: string
    documento: string
    clienteId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassageiroCreateOrConnectWithoutViagensInput = {
    where: PassageiroWhereUniqueInput
    create: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput>
  }

  export type DependenteCreateWithoutViagensInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutDependentesInput
  }

  export type DependenteUncheckedCreateWithoutViagensInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    clienteId: string
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependenteCreateOrConnectWithoutViagensInput = {
    where: DependenteWhereUniqueInput
    create: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput>
  }

  export type PassageiroUpsertWithWhereUniqueWithoutViagensInput = {
    where: PassageiroWhereUniqueInput
    update: XOR<PassageiroUpdateWithoutViagensInput, PassageiroUncheckedUpdateWithoutViagensInput>
    create: XOR<PassageiroCreateWithoutViagensInput, PassageiroUncheckedCreateWithoutViagensInput>
  }

  export type PassageiroUpdateWithWhereUniqueWithoutViagensInput = {
    where: PassageiroWhereUniqueInput
    data: XOR<PassageiroUpdateWithoutViagensInput, PassageiroUncheckedUpdateWithoutViagensInput>
  }

  export type PassageiroUpdateManyWithWhereWithoutViagensInput = {
    where: PassageiroScalarWhereInput
    data: XOR<PassageiroUpdateManyMutationInput, PassageiroUncheckedUpdateManyWithoutViagensInput>
  }

  export type PassageiroScalarWhereInput = {
    AND?: PassageiroScalarWhereInput | PassageiroScalarWhereInput[]
    OR?: PassageiroScalarWhereInput[]
    NOT?: PassageiroScalarWhereInput | PassageiroScalarWhereInput[]
    id?: StringFilter<"Passageiro"> | string
    nome?: StringFilter<"Passageiro"> | string
    typeDocumentSelected?: StringFilter<"Passageiro"> | string
    documento?: StringFilter<"Passageiro"> | string
    clienteId?: StringNullableFilter<"Passageiro"> | string | null
    createdAt?: DateTimeFilter<"Passageiro"> | Date | string
    updatedAt?: DateTimeFilter<"Passageiro"> | Date | string
  }

  export type DependenteUpsertWithWhereUniqueWithoutViagensInput = {
    where: DependenteWhereUniqueInput
    update: XOR<DependenteUpdateWithoutViagensInput, DependenteUncheckedUpdateWithoutViagensInput>
    create: XOR<DependenteCreateWithoutViagensInput, DependenteUncheckedCreateWithoutViagensInput>
  }

  export type DependenteUpdateWithWhereUniqueWithoutViagensInput = {
    where: DependenteWhereUniqueInput
    data: XOR<DependenteUpdateWithoutViagensInput, DependenteUncheckedUpdateWithoutViagensInput>
  }

  export type DependenteUpdateManyWithWhereWithoutViagensInput = {
    where: DependenteScalarWhereInput
    data: XOR<DependenteUpdateManyMutationInput, DependenteUncheckedUpdateManyWithoutViagensInput>
  }

  export type DependenteCreateManyClienteInput = {
    id?: string
    nome: string
    documento?: string | null
    poltrona?: string | null
    viagemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependenteUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUpdateManyWithoutDependentesNestedInput
  }

  export type DependenteUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viagens?: ViagemUncheckedUpdateManyWithoutDependentesNestedInput
  }

  export type DependenteUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViagemUpdateWithoutDependentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiros?: PassageiroUpdateManyWithoutViagensNestedInput
  }

  export type ViagemUncheckedUpdateWithoutDependentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiros?: PassageiroUncheckedUpdateManyWithoutViagensNestedInput
  }

  export type ViagemUncheckedUpdateManyWithoutDependentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViagemUpdateWithoutPassageirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUpdateManyWithoutViagensNestedInput
  }

  export type ViagemUncheckedUpdateWithoutPassageirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependentes?: DependenteUncheckedUpdateManyWithoutViagensNestedInput
  }

  export type ViagemUncheckedUpdateManyWithoutPassageirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataViagem?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageiroUpdateWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutPassageiroNestedInput
  }

  export type PassageiroUncheckedUpdateWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageiroUncheckedUpdateManyWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    typeDocumentSelected?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    clienteId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependenteUpdateWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutDependentesNestedInput
  }

  export type DependenteUncheckedUpdateWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependenteUncheckedUpdateManyWithoutViagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    poltrona?: NullableStringFieldUpdateOperationsInput | string | null
    clienteId?: StringFieldUpdateOperationsInput | string
    viagemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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