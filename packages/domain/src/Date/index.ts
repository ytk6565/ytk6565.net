import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

/**
 * フォーマットパターン
 */
export const FORMAT_PATTERNS = {
  DATE: 'yyyy-MM-dd',
  DATETIME: 'yyyy-MM-dd HH:mm:ss',
  TIME: 'HH:mm:ss',
} as const;

type FormatPattern = typeof FORMAT_PATTERNS;
type FormatPatternKey = keyof FormatPattern;

/**
 * 日本時間の日付に変換する
 * @param date 日付文字列
 * @param formatPattern 変換後のフォーマットパターン
 * @returns 日本時間の日付文字列
 */
export const toJST = (
  date: string,
  formatPattern: FormatPattern[FormatPatternKey] = FORMAT_PATTERNS.DATE
) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, formatPattern);
};
