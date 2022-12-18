/**
 * 文字列を指定の文字数以内にトリミングする
 * @param str 任意の文字列
 * @param length 任意の文字数
 * @returns 指定の文字数以内の文字列
 */
export const trim = (str: string, length: number) => {
  return str.length > length ? `${str.slice(0, length)}...` : str;
};
