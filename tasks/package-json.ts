/**
 * Interface of package.json file
 */
export interface PackageJson {
  /**
   * The name of the package
   */
  name: string,

  /**
   * The version of the package
   */
  version: string,

  /**
   * Peer dependencies of the package
   */
  peerDependencies?: Record<string, string>,

  /**
   * Dependencies of the package
   */
  dependencies?: Record<string, string>,

  /**
   * Dev dependencies of the package
   */
  devDependencies?: Record<string, string>
}
