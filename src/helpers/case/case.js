/* @flow */

/**
 * Convert camelCase to the UPPER_CASE
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function camel2upper(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toUpperCase()
}

/**
 * Convert camelCase to kebab-kase
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function camel2kebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
