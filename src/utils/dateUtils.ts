

import { DateTime } from 'luxon'

type DateType = 'date' | 'time' | 'datetime'
type FormatOptions = Intl.DateTimeFormatOptions

const defaultFormatOptions: Record<DateType, FormatOptions> = {
	date: DateTime.DATE_SHORT,
	time: DateTime.TIME_SIMPLE,
	datetime: DateTime.DATETIME_SHORT,
}

const toLocale = (type: DateType) => (date?: string | DateTime | null, formatOpts?: FormatOptions) => {
	if (!date) return null
	const dateTime = DateTime.isDateTime(date) ? date : DateTime.fromISO(date)
	return dateTime.toLocaleString(formatOpts || defaultFormatOptions[type])
}

export const toLocaleDate = toLocale('date')
export const toLocaleTime = toLocale('time')
export const toLocaleDateTime = toLocale('datetime')
